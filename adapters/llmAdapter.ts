//llmAdapter.ts
import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    console.error('❌ API Key not found');
    process.exit(1);
}
const openai = new OpenAI({ apiKey });

export async function generateResponse(prompt: string): Promise<string | null> {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }]
        });

        console.log('generateResponse:', response.choices[0].message.content);
        return response.choices[0].message.content || null;
    } catch (error: any) {
        console.error('❌ Error en LLM:', error);
        return null;
    }
}
