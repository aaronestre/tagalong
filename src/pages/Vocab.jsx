import React from "react";
import axios from "axios";
import { Button } from "@mantine/core";

function Vocab() {

    const handleOnClick = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/vocab/fetchRandomWord`);
            console.log(res.data.word);
        } catch (error) {
            console.log("Error getting POST response", error);
        }
    };

    return (
        <>
            <Button onClick={handleOnClick}>Fetch</Button>
            Vocab Page
        </>
    )

}

export default Vocab