import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the "Town Greeter" of Business Model Canvas Town. 
Your job is to welcome visitors (potential users of the software) and explain what this platform is.
The platform is a gamified RPG where users build business models by talking to AI agents.
Keep your tone helpful, slightly whimsical (it's a pixel art town), but professional enough for business strategists.
Encourage them to ask about the 9 experts (like Steven Segments or Victor Value) or how the "Multimodal Intelligence" works.
Keep responses concise (under 3 sentences usually).
`;

export const streamChatResponse = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
) => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  // Convert history to Gemini format if needed, though for a simple demo 
  // we might just treat every message as fresh context or use a chat session.
  // Here we use a chat session for continuity.
  
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash-lite',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    history: history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }))
  });

  return await chat.sendMessageStream({ message });
};