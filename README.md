

# Node JS + Express + Typescript

Agente AI mediante las API de openai.

Audio -> Whisper -> Texto -> LLM -> Texto -> TTS -> Audio

Funcionalidades:

1. Toma un audio de entrada ( audioIn.m4a ) ubicado en el directorio raiz del proyecto con algo que se le quiera decir a la IA.
2. Realiza transcripcion de audio a texto mediante una solicitud a la API de openai whisper.
2. Con el texto transcrito del paso anterior, se realiza una solicitud al modelo gpt-4o de openai.
3. Con la respuesta en texto del modelo gpt-4o, realiza solcicitud de transcripcion de texto a audio mediante la api de open ai TTS.
4. El resultado es un archivo de audio con la respuesta de la IA, el archivo queda ubicado en la raiz del proyecto: result.mp3

Configuracion del proyecto:

Se debe setear la variable de entorno con el OPENAI_API_KEY de openai en el archivo .env.
Como ejemplo el archivo:
/src/.env
```
OPENAI_API_KEY=sk-proj-123456
```

Instalacion del proyecto
```
npm install
```

Ejecucion del proyecto
```
npm run dev
```

Se puede ver la respuesta con los tiempos en cada paso de la siguiente manera:
```
https://localhost:3000🔹 Paso 1: Enviando audio al STT
speechToText: Hola GPT, ¿cómo estás?
✅ Respuesta de STT obtenida (1589.93 ms): Hola GPT, ¿cómo estás?
🔹 Paso 2: Enviando pregunta al LLM
generateResponse: ¡Hola! Como inteligencia artificial, no tengo emociones, pero estoy listo y disponible para ayudarte. ¿Cómo puedo asistirte hoy?
✅ Respuesta de LLM obtenida (2550.90 ms): ¡Hola! Como inteligencia artificial, no tengo emociones, pero estoy listo y disponible para ayudarte. ¿Cómo puedo asistirte hoy?
🔹 Paso 3: Generando audio con TTS
textToSpeech: result.mp3
✅ Respuesta de TTS generada en (2770.17 ms): result.mp3
🎯 Tiempo total de ejecución: 6911.10 ms
```
