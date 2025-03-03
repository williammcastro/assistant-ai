

# Node JS + Express + Typescript + Grafana + Prometheus

Agente AI mediante las API de openai.
Funcionalidades
1. Toma un audio con alguna pregunta que se encuente en el directorio raiz del proyecto
2. Realiza una solicitud a la API de openai whisper para transcripcion de Audio a texto STT
2. Con el texto transcrito del paso anterior, se realiza una solicitud al modelo gpt-4o
3. Con la respuesta del modelo gpt-4o, se realiza solcicitud de transcripcion de texto a autio mediante la api de open ai TTS

Se configura grafana y prometheus para ver los tiempos de respuesta a ver si es posible mantener una conversacion fluida con el modelo y las API.

Configuracion del proyecto

Se deben setear todas las variables de entorno en el .env o en la aplicacion que el hosting tenga para dicho fin. como ejemplo el archivo: .env.example
/src/.env
```
ejemplo:
process.env.NODE_ENV=development
process.env.PORT=3000
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

Se puede acceder a la API de desarrollo mediante https:
```
https://localhost:3000
```
Se puede acceder a los graficos de grafana en :
