import React from "react";
import { TextInput } from "@mantine/core";

export default function ChatInput({getContent, value}) {
    return (
        <TextInput
            size="md"
            radius="xl"
            variant="filled"
            placeholder="Ask a question"
            type="text"
            value={value}
            onChange={(e) => {
                getContent(e.target.value);
            }}
        />
    );
}
