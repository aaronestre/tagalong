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
    temperature: 1.2,
    top_p: 1,
  });
}

export default async function handler(req, res) {

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    try {
        const { content } = req.body;
        const chatCompletion = await getGroqChatCompletion(content);
        return res.json({ message: chatCompletion.choices[0]?.message?.content || "No response" });
    } catch (error) {
        console.error('Error getting Groq completion:', error);
        res.status(500).send({ error: 'Failed to get Groq completion' + error});
    }
    
  }