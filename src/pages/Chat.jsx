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
