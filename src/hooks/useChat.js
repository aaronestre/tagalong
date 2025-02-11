import { useState, useCallback } from "react";
import { fetchBotResponse } from "../api/chatApi";

const RECENT_MESSAGES_COUNT = 10;

export default function useChat () {
    
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const getContent = useCallback((message) => setUserInput(message), []);

    const fetchRecentMessages = () => {
        return messages.length > RECENT_MESSAGES_COUNT 
        ? messages.slice(-RECENT_MESSAGES_COUNT) 
        : messages;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setMessages((prevMessages) => [...prevMessages, { text: userInput, type: "user" }]);
        setLoading(true);
    
        const recentMessages = fetchRecentMessages();
        const botResponse = await fetchBotResponse(userInput, recentMessages);
        setMessages((prevMessages) => [...prevMessages, { text: botResponse, type: "bot" }]);
            
        setLoading(false);
        setUserInput("");
    };
    
    return {userInput, messages, loading, getContent, handleSubmit}

}