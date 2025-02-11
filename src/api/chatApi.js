import axios from "axios";

export const fetchBotResponse = async (userInput, messages) => { 

    const prompt = "You are an expert/fluent in Tagalog and you are now a tutor. " 
            + "Using your expertise please help with any questions. Please be clear but concise. " 
            + "Here are previous messages for context: " + messages
            + "Here is the user's input:" + userInput;

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, { 
            content: prompt
            }, { 
            headers: { "Content-Type": "application/json" } });
        return res.data.message;
    }
    catch (error) {
        console.error("Error fetching Groq response:", error.response.data);
        return "An error occurred";
    }

};