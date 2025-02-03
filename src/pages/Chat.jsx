import { React, useState, useCallback } from "react";
import { Grid, GridCol, Loader } from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";
import axios from "axios";

import ChatInput from "../components/pages/chat/ChatInput";
import Button from "../components/common/Button";
import ChatMessages from "../components/pages/chat/ChatMessages";

import "../styles/chat.css";

export default function Chat() {

    const submitIcon = <IconBrandTelegram/>

    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const getContent = useCallback((message) => setUserInput(message), []);

    const RECENT_MESSAGES_COUNT = 10;

    const fetchRecentMessages = () => {
            return messages.length > RECENT_MESSAGES_COUNT 
            ? messages.slice(-RECENT_MESSAGES_COUNT) 
            : messages;
    };

    const fetchBotResponse = async (userInput) => { 

        const prompt = "You are an expert/fluent in Tagalog and you are now a tutor. " 
                + "Using your expertise please help with any questions. Please be clear but concise. " 
                + "Here are previous messages for context: " + await fetchRecentMessages() 
                + "Here is the user's input:" + userInput;

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, { 
                content: prompt
                }, { 
                headers: { "Content-Type": "application/json" } });
            console.log(res.data.message);
            return res.data.message;
        }
        catch (error) {
            console.error("Error fetching Groq response:", error.response.data);
            setMessages((prevMessages) => [...prevMessages, { text: "An error occurred", type: "bot" }]);
        }

    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessages((prevMessages) => [...prevMessages, { text: userInput, type: "user" }]);
        setLoading(true);

        const botResponse = await fetchBotResponse(userInput);
        setMessages((prevMessages) => [...prevMessages, { text: botResponse, type: "bot" }]);
        
        setLoading(false);
        setUserInput("");
      };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid gutter="xs">
                    <GridCol span={12}></GridCol>

                    <GridCol span={1}></GridCol>
                    <GridCol span={10} w="80vh" h="80vh" >
                        <ChatMessages messages={messages} loading={loading}/>
                    </GridCol>
                    <GridCol span={1}></GridCol>

                    <GridCol span={1}></GridCol>
                    <GridCol span={9}>
                        <ChatInput getContent={getContent} value={userInput}/>
                    </GridCol>
                    <GridCol span={1}>
                        <Button disabled={loading} mainIcon={submitIcon}/>
                    </GridCol>
                    <GridCol span={1}></GridCol>
                </Grid>
            </form>
        </>
    );
}
