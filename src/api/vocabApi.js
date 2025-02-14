import axios from "axios";

export const handleFetchWord = async (isFlipped, setIsFlipped, setLoadingWord, setVocabWord) => {
    setLoadingWord(true);
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
    finally {
        setLoadingWord(false);
    }
};

export const handleFetchTextToSpeech = async (vocabWord, setLoadingTTS) => {
    setLoadingTTS(true);
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/vocab/textToSpeech`,
            {text: vocabWord.tagalog}, 
            {responseType: "arraybuffer"}
        );
        console.log(res.data);

        const blob = new Blob([res.data], { type: "audio/mpeg" });
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.play();
    }
    catch (error) {
        console.log("Error getting POST response", error);
    }
    finally {
        setLoadingTTS(false);
    }
}