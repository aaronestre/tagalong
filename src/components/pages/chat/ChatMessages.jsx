import React from "react";
import { Paper, Text, ScrollArea } from "@mantine/core";

export default function ChatMessages({ messages }) {
    return (
        <ScrollArea h="100%">
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    overflowY: "auto",
                }}
            >
                {messages.map((msg, index) =>
                    msg.type === "bot" ? (
                        <Text
                            key={index}
                            p="5px 20px"
                            ta="left"
                            lh="2"
                            style={{
                                color: "#fff",
                                margin: "5px 0",
                            }}
                        >
                            {msg.text}
                        </Text>
                    ) : (
                        <Paper
                            key={index}
                            m="10px"
                            padding="md"
                            shadow="lg"
                            radius="lg"
                            bg="#007bff"
                            style={{
                                alignSelf: "flex-end",
                                color: "#fff",
                                maxWidth: "450px",
                            }}
                        >
                            <Text p="5px 20px" ta="center" lh="1.5">
                                {msg.text}
                            </Text>
                        </Paper>
                    )
                )}
            </div>
        </ScrollArea>
    );
}
