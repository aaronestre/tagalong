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
                        <div key={index}>
                            <Text
                                p="5px 20px"
                                ta="left"
                                lh="2"
                                gradient={{ from: "orange", to: "red", deg: 270 }}
                                mb="-10px"
                                variant="gradient"
                            >
                                Tutor
                            </Text>
                            <Text
                                p="5px 20px"
                                ta="left"
                                lh="2"
                                c="fff"
                            >
                                {msg.text}
                            </Text>
                        </div>
                    ) : (
                        <Paper
                            key={index}
                            m="10px"
                            padding="md"
                            shadow="lg"
                            radius="lg"
                            bg="#007bff"
                            c="fff"
                            style={{
                                alignSelf: "flex-end",
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
