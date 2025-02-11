import { React, useState, useCallback } from "react";
import { Grid, GridCol, Loader } from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";
import axios from "axios";

import ChatInput from "../components/pages/chat/ChatInput";
import Button from "../components/common/Button";
import ChatMessages from "../components/pages/chat/ChatMessages";
import { fetchBotResponse } from "../api/ChatAPI";

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
