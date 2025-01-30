import Groq from "groq-sdk";
import { config } from "dotenv";
config();

const groq = new Groq({ apiKey: process.env.VITE_GROQ_API_KEY });

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}

export async function GET(request) {
    try {
        const chatCompletion = await getGroqChatCompletion();
        return new Response(chatCompletion.choices[0]?.message?.content || "");
    } catch (error) {
        console.error("Error getting Groq completion:", error);
    }
    
  }