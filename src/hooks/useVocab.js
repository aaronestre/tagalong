import { useState } from "react";

export default function useVocab() {
    const [vocabWord, setVocabWord] = useState({});
    const [loadingWord, setLoadingWord] = useState(false);
    const [loadingTTS, setLoadingTTS] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
        console.log(isFlipped);
    };

    return {vocabWord, setVocabWord, loadingWord, setLoadingWord, loadingTTS, setLoadingTTS, isFlipped, setIsFlipped, handleFlip};
}
