//app.ts
import dotenv from 'dotenv';
dotenv.config(); // Carga las variables de entorno

import { textToSpeech } from '../adapters/ttsAdapter';
import { speechToText } from '../adapters/sttAdapter';
import { generateResponse } from '../adapters/llmAdapter';

const main = async () => {
    try {
        console.log('🔹 Paso 1: Enviando audio al STT');
        const startSTT = performance.now();
        const result = await speechToText('audioIn.m4a');
        const endSTT = performance.now();
        if (!result) throw new Error("STT no pudo transcribir el audio");
        console.log(`✅ Respuesta de STT obtenida (${(endSTT - startSTT).toFixed(2)} ms):`, result.text);

        console.log('🔹 Paso 2: Enviando pregunta al LLM');
        const startLLM = performance.now();
        const response = await generateResponse(result.text);
        const endLLM = performance.now();
        if (!response) throw new Error("LLM no pudo generar respuesta");
        console.log(`✅ Respuesta de LLM obtenida (${(endLLM - startLLM).toFixed(2)} ms):`, response);

        console.log('🔹 Paso 3: Generando audio con TTS');
        const startTTS = performance.now();
        await textToSpeech(response, 'result.mp3');
        const endTTS = performance.now();
        console.log(`✅ Respuesta de TTS generada en (${(endTTS - startTTS).toFixed(2)} ms): result.mp3`);

        console.log(`🎯 Tiempo total de ejecución: ${(endTTS - startSTT).toFixed(2)} ms`);

    } catch (error) {
        console.error('❌ Error en el flujo:', error);
    }
}

main();

