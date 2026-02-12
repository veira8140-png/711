import { GoogleGenAI, Type } from "@google/genai";
import { BrandOutput, CopyOutput } from "../types";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBrandIdentity = async (industry: string, vibe: string): Promise<BrandOutput> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a brand identity for a company in the ${industry} industry with a ${vibe} vibe. Output as JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          tagline: { type: Type.STRING },
          mission: { type: Type.STRING },
          keywords: { type: Type.ARRAY, items: { type: Type.STRING } },
        },
        required: ["name", "tagline", "mission", "keywords"]
      },
    },
  });
  
  const text = response.text || '{}';
  return JSON.parse(text);
};

export const generateImage = async (prompt: string): Promise<string> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
  if (part?.inlineData) {
    return `data:image/png;base64,${part.inlineData.data}`;
  }
  throw new Error("No image generated");
};

/**
 * Generic tool executor for the Footer Power-up Suite
 */
export const runVeiraTool = async (toolName: string, userInput: string): Promise<string> => {
  const ai = getAI();
  
  const systemPrompt = `
    You are Veira AI, the intelligence core for Kenyan retail businesses. 
    The user is using the tool: "${toolName}".
    Context provided: "${userInput}".
    
    GUIDELINES:
    - For visual tools (Logo, Business Card, QR, Poster): Output ONLY a clean, professional SVG code block that renders the requested asset. Make it modern, minimalist, and high-contrast.
    - For operational tools (Tracker, Calculator, Checker): Provide structured, bulleted advice and formulas. Focus on the Kenyan retail market (KES currency, local trends).
    - For content tools (Social Media, Name Gen): Provide several high-quality options.
    - KEEP IT FAST AND INSTANT.
    - Do not include preamble or conversational filler.
    - If user asks for a Logo, design a vector-style SVG.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: systemPrompt,
  });

  return response.text || "No response generated. Please try again.";
};
