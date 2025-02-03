import React from "react";
import { Button } from "@mantine/core";

export default function CustomButton({
    text = "Click me",
    onClick,
    disabled = false,
    size = "md",
    variant = "gradient",
    gradient = { from: "orange", to: "red", deg: 270 },
    radius = "xl",
    fullWidth = true,
    leftIcon,
    rightIcon,
    mainIcon,
    ...props
}) {
    return (
        <Button
            size={size}
            variant={variant}
            gradient={gradient}
            radius={radius}
            fullWidth={fullWidth}
            disabled={disabled}
            onClick={onClick}
            leftSection={leftIcon}
            rightSection={rightIcon}
            {...props}
        >
            {mainIcon ? mainIcon : text}
        </Button>
    );
}
