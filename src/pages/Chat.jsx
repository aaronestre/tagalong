import { React, useState, useEffect } from "react";
import { Grid, GridCol, Flex } from "@mantine/core";
import axios from "axios";

import ChatInput from "../components/pages/chat/ChatInput";
import SubmitButton from "../components/common/SubmitButton";
import ChatMessages from "../components/pages/chat/ChatMessages";

import "../styles/chat.css";

export default function Chat() {

    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([]);

    const getContent = (message) => setUserInput(message);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessages((prevMessages) => [...prevMessages, { text: userInput, type: "user" }]);

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, { 
                content:  "You are an expert/fluent in tagalog and you are now a tutor. Using your expertise please help with any questions. Please be clear but concise" + userInput,});
            setMessages((prevMessages) => [...prevMessages, { text: res.data.message, type: "bot" }]);
            console.log(res.data.message);
        }
        catch (error) {
            console.error("Error fetching Groq response:", error.response.data);
            setMessages((prevMessages) => [...prevMessages, { text: "An error occurred", type: "bot" }]);
        }

        e.target.reset();
      };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid gutter="xs">
                    <GridCol span={12}></GridCol>

                    <GridCol span={1}></GridCol>
                    <GridCol span={10} w="80vh" h="80vh" >
                        <ChatMessages messages={messages}/>
                    </GridCol>
                    <GridCol span={1}></GridCol>

                    <GridCol span={1}></GridCol>
                    <GridCol span={9}>
                        <ChatInput getContent={getContent}/>
                    </GridCol>
                    <GridCol span={1}>
                        <SubmitButton/>
                    </GridCol>
                    <GridCol span={1}></GridCol>
                </Grid>
            </form>
        </>
    );
}
