// Esta funcion recibe un texto y un nombre de archivo,
// y genera un archivo de audio con el texto en formato mp3 con la voz de alloy.

// ttsAdapter.ts

import OpenAI from "openai";
import { writeFileSync } from "fs";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    console.error('❌ API Key not found');
    process.exit(1);
}
const openai = new OpenAI({ apiKey });

export async function textToSpeech(text: string, filePath: string): Promise<boolean> {
    try {
        const response = await openai.audio.speech.create({
            input: text,
            voice: "alloy",
            model: "tts-1",
            response_format: "mp3"
        });

        const buffer = Buffer.from(await response.arrayBuffer());
        writeFileSync(filePath, buffer);
        console.log('textToSpeech:', filePath);
        return true; // Indicar que la conversión fue exitosa
    } catch (error: any) {
        console.error('❌ Error en TTS:', error);
        return false;
    }
}

