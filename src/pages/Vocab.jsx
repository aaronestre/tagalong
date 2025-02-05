import {React, useState} from "react";
import axios from "axios";
import { Paper, Text, Center, Loader } from "@mantine/core";
import Button from "../components/common/Button";

import "../styles/vocab.css";

export default function Vocab() {

    const [vocabWord, setVocabWord] = useState({});
    const [loading, setLoading] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped( (prev) => !prev );
    }

    const handleFetchWord = async () => {
        setLoading(true);
        if ( isFlipped ) {
            setIsFlipped(false);
        }
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/vocab/fetchRandomWord`);
            console.log(res.data.word[0]);
            setVocabWord(res.data.word[0]);
        } catch (error) {
            console.log("Error getting POST response", error);
        }
        setLoading(false);
    };

    const handleFlipCard = () => {



    }

    return (
        <>
            <Center display="block" bd="1px solid black">
                <Paper shadow="0px 0px 20px -4px rgba(0,0,0,0.75)" w="600px" h="300px" m="auto"
                style={{ display: "flex", alignItems: "center", justifyContent: "center"}}
                onClick={handleFlip}>
                    {   loading 
                        ? <Loader color="orange"/> 
                        : <Text ta="center" fz="50px">
                            {isFlipped ? vocabWord.definition : vocabWord.tagalog}
                          </Text>
                    }
                          
                </Paper>
                <Button m={"15px auto"} w={"200px"} onClick={handleFetchWord} disabled={loading} text="New Word"></Button>
            </Center>
            
        </>
    )

}