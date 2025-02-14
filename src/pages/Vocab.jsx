import {React, useEffect, useState,} from "react";
import { Paper, Text, Loader } from "@mantine/core";
import Button from "../components/common/Button";

import "../styles/vocab.css";
import { handleFetchWord, handleFetchTextToSpeech } from "../api/vocabApi";
import useVocab from "../hooks/useVocab";

export default function Vocab() {

    const {vocabWord, setVocabWord, loadingWord, setLoadingWord, loadingTTS, setLoadingTTS, isFlipped, setIsFlipped, handleFlip} = useVocab();

    useEffect(() => {
        handleFetchWord(isFlipped, setIsFlipped, setLoadingWord, setVocabWord);
      }, []);

    

    return (
        <>
            <div style={{ minHeight: "100vh", width: "100%", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Paper mt="-150px"shadow="0px 0px 20px -4px rgba(0,0,0,0.75)" w="600px" h="300px"
                style={{ display: "flex", alignItems: "center", justifyContent: "center"}}
                onClick={handleFlip}>
                    {   loadingWord 
                        ? <Loader color="orange"/> 
                        : <Text ta="center" fz={isFlipped ? "25px" : "50px"}>
                            {isFlipped ? vocabWord.definition : vocabWord.tagalog}
                          </Text>
                    }
                          
                </Paper>
                <Button m={"25px auto"} w={"200px"} onClick={() => handleFetchWord(isFlipped, setIsFlipped, setLoadingWord, setVocabWord)} disabled={loadingWord} text="New Word"></Button>
                <Button w={"200px"} onClick={() => handleFetchTextToSpeech(vocabWord, setLoadingTTS)} disabled={loadingWord || loadingTTS} text="Listen"></Button>
            </div>
        </>
    )

}