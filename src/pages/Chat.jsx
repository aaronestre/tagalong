import { React, useState, useCallback } from "react";
import { Grid, GridCol, Loader } from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";
import axios from "axios";

import ChatInput from "../components/pages/chat/ChatInput";
import Button from "../components/common/Button";
import ChatMessages from "../components/pages/chat/ChatMessages";

import useChat from "../hooks/useChat";

import "../styles/chat.css";

export default function Chat() {

    const submitIcon = <IconBrandTelegram/>

    const {userInput, messages, loading, getContent, handleSubmit} = useChat();

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
