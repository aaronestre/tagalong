import axios from "axios";

export const handleFetchWord = async (isFlipped, setIsFlipped, setLoadingWord, setVocabWord) => {
    setLoadingWord(true);
    if ( isFlipped ) {
        setIsFlipped(false);
    }
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/vocab/fetchRandomWord`);
        console.log(res.data.word);
        setVocabWord(res.data.word);
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

        const data = await uploadAudioToSupabaseDatabase(vocabWord.tagalog, url);
    }
    catch (error) {
        console.log("Error getting POST response", error);
    }
    finally {
        setLoadingTTS(false);
    }
}

// export const uploadAudioToSupabaseStorage = async (blob, word) => { 

//     const fileName = `audio_${word}.mp3`;
//     const filePath = `tts-audio/${fileName}`;

//     const file = new File([blob], fileName, { type: "audio/mpeg" });

//     const url = await axios.post(`${import.meta.env.VITE_API_URL}/api/vocab/uploadBlob`, {file, filePath});
//     console.log(url.data);
//     return url.data;

// }

// export const uploadAudioToSupabaseDatabase = async (word, url) => {
//     const data = axios.post(`${import.meta.env.VITE_API_URL}/api/vocab/updateAudioURL`, {word, url});

//     return data;
// }

// export const testUploadingAudio = async () => { 
//     const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/vocab/textToSpeech`,
//         {text: "abain"}, 
//         {responseType: "arraybuffer"}
//     );

//     const blob = new Blob([res.data], { type: "audio/mpeg" });

//     const url = await uploadAudioToSupabaseStorage(blob, "abain");
//     const data = uploadAudioToSupabaseDatabase("abain", url);

//     console.log("Uploaded");

// }