import {React, useState} from "react";
import axios from "axios";
import { Paper, Text, Center, Loader } from "@mantine/core";
import Button from "../components/common/Button";

import "../styles/vocab.css";

function Vocab() {

    const [vocabWord, setVocabWord] = useState({});
    const [loading, setLoading] = useState(false);

    const handleOnClick = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/vocab/fetchRandomWord`);
            console.log(res.data.word[0]);
            setVocabWord(res.data.word[0]);
        } catch (error) {
            console.log("Error getting POST response", error);
        }
        setLoading(false);
    };

    return (
        <div w="100vh" h="100%">
            <Center m="0 auto">
                <Paper shadow="0px 0px 20px -4px rgba(0,0,0,0.75)" w="600px" h="300px" m="auto"
                style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                    {loading 
                        ? <Loader color="orange"/> 
                        : <Text ta="center" fz="50px">{vocabWord.tagalog}</Text> }
                          
                </Paper>
               
            </Center>
            <Button m={"15px auto"} w={"200px"} onClick={handleOnClick} disabled={loading} text="New Word"></Button>
        </div>
    )

}

export default Vocab