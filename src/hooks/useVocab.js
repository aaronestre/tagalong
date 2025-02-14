import { useState } from "react";

export default function useVocab() {
    const [vocabWord, setVocabWord] = useState({});
    const [loading, setLoading] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return {vocabWord, setVocabWord, loading, setLoading, isFlipped, setIsFlipped, handleFlip};
}
