
import { GoogleGenAI, Type } from "@google/genai";
import { BrandOutput } from "../types";

/**
 * Utility for exponential backoff retries.
 */
const withRetry = async <T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> => {
  let lastError: any;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (err: any) {
      lastError = err;
      // If it's a 429 (Rate Limit) or 503 (Overloaded), wait and retry
      const errorStr = err.toString();
      if (errorStr.includes('429') || errorStr.includes('503') || errorStr.includes('500')) {
        const waitTime = Math.pow(2, i) * 1000;
        console.warn(`AI Engine busy, retrying in ${waitTime}ms...`);
        await new Promise(res => setTimeout(res, waitTime));
        continue;
      }
      // If it's a safety block or auth error, don't retry
      throw err;
    }
  }
  throw lastError;
};

const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === "undefined") {
    throw new Error("API_KEY_MISSING");
  }
  return new GoogleGenAI({ apiKey });
};

const cleanAIOutput = (text: string, isVisual: boolean = false): string => {
  if (!text) return "";
  let cleaned = text.replace(/```[a-z]*\n/gi, '').replace(/```/g, '').trim();
  if (isVisual) {
    const svgMatch = cleaned.match(/<svg[\s\S]*?<\/svg>/i);
    if (svgMatch) return svgMatch[0];
  }
  return cleaned;
};

export const runVeiraTool = async (toolName: string, userInput: string): Promise<string> => {
  return withRetry(async () => {
    const ai = getAI();
    const isVisual = ['Logo', 'QR', 'Card', 'Poster', 'Flyer'].some(kw => toolName.includes(kw));

    const systemInstruction = `You are Veira Intelligence, the expert AI core for Kenyan retail.
      Mode: "${toolName}".
      
      INSTRUCTIONS:
      1. For visual/design tools: Output ONLY raw SVG code.
      2. For operational tools: Provide a bulleted summary using KES currency. Focus on Nairobi/Kenyan retail dynamics (e.g., M-PESA, eTIMS).
      3. For content tools: Provide 3 variants for WhatsApp/Instagram.
      4. Stay professional, precise, and helpful.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', // Flash is faster and has better quotas
      contents: { parts: [{ text: `Tool: ${toolName}\nContext: ${userInput}` }] },
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.2,
      },
    });

    const rawText = response.text;
    if (!rawText) throw new Error("Empty response from AI engine.");

    const processed = cleanAIOutput(rawText, isVisual);
    if (isVisual && !processed.includes('<svg')) {
      throw new Error("DESIGN_FAILED");
    }

    return processed;
  });
};

// Fix: Implement missing generateBrandIdentity with JSON schema
export const generateBrandIdentity = async (industry: string, vibe: string): Promise<BrandOutput> => {
  return withRetry(async () => {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a brand identity for a ${industry} business in Kenya with a ${vibe} vibe.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            tagline: { type: Type.STRING },
            mission: { type: Type.STRING },
            keywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["name", "tagline", "mission", "keywords"]
        }
      }
    });
    const text = response.text;
    if (!text) throw new Error("Empty response");
    return JSON.parse(text) as BrandOutput;
  });
};

// Fix: Implement missing generateImage for visual assets
export const generateImage = async (prompt: string): Promise<string> => {
  return withRetry(async () => {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    throw new Error("IMAGE_GENERATION_FAILED");
  });
};
