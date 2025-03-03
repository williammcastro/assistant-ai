// Esta funcion recibe un archivo de audio
// y genera un texto a partir de su contenido con whisper-1.

// sttAdapter.ts

import OpenAI from "openai";
import fs from "fs";

//verificar si existe la api key
if (!process.env.OPENAI_API_KEY) {
  console.error('❌ API Key not found');
  process.exit(1);
}

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey: apiKey });

export async function speechToText(filePath: string): Promise<{ text: string } | null> {
  try {
      const audio = fs.createReadStream(filePath);
      const response = await openai.audio.transcriptions.create({
          file: audio,
          model: "whisper-1",
          language: "es"
      });
      console.log('speechToText:', response.text);
      return response;
  } catch (error: any) {
      console.error('❌ Error en STT:', error);
      return null;
  }
}
