"use server";

import { GoogleGenAI } from "@google/genai";
import { CHATBOT_SYSTEM_INSTRUCTION } from "@/services/bmcKnowledge";

// Use environment variable for API key (secure on server)
const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

const ai = new GoogleGenAI({ apiKey });

export async function streamChatAction(
  message: string,
  history: { role: "user" | "model"; text: string }[]
) {
  if (!apiKey) {
    throw new Error(
      "Gemini API Key not found. Please set GEMINI_API_KEY in your environment variables."
    );
  }

  const chat = ai.chats.create({
    model: "gemini-2.5-flash-lite",
    config: {
      systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    history: history.map((h) => ({
      role: h.role,
      parts: [{ text: h.text }],
    })),
  });

  const result = await chat.sendMessageStream({ message });

  // Create a simple async generator to stream text chunks
  // This is serializable and can be consumed by the client
  return (async function* () {
    for await (const chunk of result) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  })();
}
