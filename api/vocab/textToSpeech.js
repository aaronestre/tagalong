import { ElevenLabsClient } from "elevenlabs";
import microCors from "micro-cors";
const cors = microCors();

 async function handler(req, res) {

    if (request.method === 'OPTIONS') {
        return response.status(200).send('ok');
    }

    const client = new ElevenLabsClient({
        apiKey: process.env.ELEVENLABS_API_KEY,
    });

    try {
        const {text} = req.body;
        const audio = await client.textToSpeech.convert("JBFqnCBsd6RMkjVDRZzb", {
            output_format: "mp3_44100_128",
            text: text,
            model_id: "eleven_multilingual_v2"
        });
        
        const chunks = []
        for await (const chunk of audio) {
            chunks.push(chunk);
        }
        const audioBuffer = Buffer.concat(chunks);

        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )
        res.setHeader("Content-Type", "audio/mpeg");
        res.setHeader("Content-Length", audioBuffer.length);
        res.setHeader("Content-Disposition", 'inline; filename="tts-audio.mp3"');
        return res.send(audioBuffer);
    }
    catch ( error ) {
        console.log("There was an error retreiving random word", error);
    }
}

export default cors(handler);