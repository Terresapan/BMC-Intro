
import { GoogleGenAI } from "@google/genai";
import { CHATBOT_SYSTEM_INSTRUCTION } from "./bmcKnowledge";

// Get API key from environment variable
// For Next.js, create a .env.local file with NEXT_PUBLIC_GEMINI_API_KEY=your_key
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

/**
 * Stream chat response from Gemini API
 * Uses the BMC Knowledge Base as system instruction for context caching
 */
export const streamChatResponse = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
) => {
  if (!apiKey) {
    throw new Error("Gemini API Key not found. Please set NEXT_PUBLIC_GEMINI_API_KEY in your .env.local file.");
  }

  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      // The BMC Knowledge Base is placed at the start of the system instruction
      // to enable context caching for better performance and lower costs
      systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    history: history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }))
  });

  return await chat.sendMessageStream({ message });
};
