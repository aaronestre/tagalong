import React from "react";
import { TextInput } from "@mantine/core";

export default function ChatInput({getContent}) {
    return (
        <TextInput
            size="md"
            radius="xl"
            variant="filled"
            placeholder="Ask a question"
            type="text"
            onChange={(e) => {
                getContent(e.target.value);
            }}
        />
    );
}
