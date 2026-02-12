import { GoogleGenAI, Type } from "@google/genai";
import { BrandOutput } from "../types";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

const cleanAIOutput = (text: string) => {
  return text.replace(/```(json|svg|xml|html)?/g, '').replace(/```/g, '').trim();
};

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
  
  const text = cleanAIOutput(response.text || '{}');
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
  
  const systemInstruction = `You are Veira AI, the intelligence core for Kenyan retail businesses. 
    You are powering a specific business tool: "${toolName}".
    
    GUIDELINES:
    - If it's a visual tool (Logo, QR, Business Card, Poster): Output ONLY valid, modern, high-contrast SVG code. No text before or after.
    - If it's an operational/calculator tool: Provide a clear, formatted summary with KES (Kenya Shillings) context. Include actionable advice.
    - If it's a content tool: Provide 3-5 high-quality creative variations.
    - Focus on the Kenyan market context (Nairobi, local shopping habits, eTIMS compliance).
    - Be professional, concise, and helpful. Do not use filler words like "Sure, I can help."`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [{ parts: [{ text: `User Requirement: ${userInput}` }] }],
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
    },
  });

  return cleanAIOutput(response.text || "No response generated. Please try again.");
};
