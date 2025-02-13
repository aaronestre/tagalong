import React from "react";

import "../styles/home.css";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import {useMantineColorScheme} from "@mantine/core";

export default function Home() {

    const navigate = useNavigate();
    const { colorScheme } = useMantineColorScheme();

    return (
        <div className="hero">
            <div fluid className="hero-text">
                <h1 style={{ "text-shadow": colorScheme === "light" ? "2px 2px 4px rgba(0, 0, 0, 0.2)" : "2px 2px 4px rgba(255, 255, 255, 0.2)"}}><span className="highlight">Tagalog</span> Made Simple – Fun, Fast, and Interactive</h1>
                <p>
                    Master Tagalog with ease. Practice anytime, anywhere, and unlock your full potential.
                </p>
            </div>
            <Button className="hero-button" radius="sm" text="Get Started" variant="gradient" gradient={{ from: "orange", to: "red", deg: 45 }} w="200px" onClick={() => navigate("/chat")}/>
        </div>
    );
}
