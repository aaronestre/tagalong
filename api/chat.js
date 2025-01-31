import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getGroqChatCompletion(content) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    model: "llama-3.3-70b-versatile",
    temperature: 0.8
  });
}

export async function GET(request) {
    try {
        const chatCompletion = await getGroqChatCompletion(request);
        return new Response(chatCompletion.choices[0]?.message?.content || "");
    } catch (error) {
        console.error("Error getting Groq completion:", error);
    }
    
  }