import React from "react";
import { Button } from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";

export default function SubmitButton({disabled, content}) {
    return (
        <>
            <Button
                size="md"
                variant="gradient"
                gradient={{ from: "orange", to: "red", deg: 270 }}
                radius="xl"
                type="submit"
                fullWidth
                disabled={disabled}
            >
                <IconBrandTelegram/>
            </Button>
        </>
    );
}
