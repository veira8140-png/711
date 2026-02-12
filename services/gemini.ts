
import { GoogleGenAI, Type } from "@google/genai";
import { BrandOutput } from "../types";

/**
 * Standardized initialization to ensure the latest process.env.API_KEY is used.
 * We create the instance fresh each time to avoid stale keys after selection.
 */
const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === "undefined") {
    throw new Error("API_KEY_MISSING");
  }
  return new GoogleGenAI({ apiKey });
};

/**
 * Robust extraction for SVG and text content.
 */
const cleanAIOutput = (text: string, isVisual: boolean = false): string => {
  if (!text) return "";
  
  // Standard cleanup of markdown backticks
  let cleaned = text.replace(/```[a-z]*\n/gi, '').replace(/```/g, '').trim();
  
  if (isVisual) {
    // Specifically target SVG tags with a more resilient regex
    const svgMatch = cleaned.match(/<svg[\s\S]*?<\/svg>/i);
    if (svgMatch) {
      return svgMatch[0];
    }
  }
  
  return cleaned;
};

/**
 * Generates a full brand identity using the high-reasoning engine.
 */
export const generateBrandIdentity = async (industry: string, vibe: string): Promise<BrandOutput> => {
  const ai = getAI();
  const prompt = `Generate a comprehensive brand identity for a company in the "${industry}" industry with a "${vibe}" vibe. 
    The company operates in Kenya, so ensure the mission and tagline resonate with Nairobi and estate retail culture. 
    Output strictly as JSON.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
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
  
  const text = response.text || "{}";
  try {
    return JSON.parse(cleanAIOutput(text));
  } catch (e) {
    console.error("Failed to parse brand identity JSON", text);
    throw new Error("The AI provided an invalid identity format. Please try again.");
  }
};

/**
 * Generates brand assets using the specialized visual engine.
 */
export const generateImage = async (prompt: string): Promise<string> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: `Create a high-quality retail brand asset for: ${prompt}. Clean, professional, minimal.` }],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  
  throw new Error("No visual was returned by the AI. Check your description.");
};

/**
 * Unified tool executor for the Veira Power-up Suite.
 */
export const runVeiraTool = async (toolName: string, userInput: string): Promise<string> => {
  const ai = getAI();
  
  const isVisual = ['Logo', 'QR', 'Card', 'Poster', 'Flyer'].some(kw => toolName.includes(kw));

  const systemInstruction = `You are Veira Intelligence, the expert AI core for Kenyan retail.
    Mode: "${toolName}".
    
    INSTRUCTIONS:
    1. For visual/design tools: Output ONLY the raw SVG code.
    2. For operational tools: Provide a bulleted summary using KES currency. Focus on Nairobi/Kenyan retail dynamics.
    3. For content tools: Provide 3 variants for WhatsApp/Instagram.
    4. Stay professional and precise.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: { parts: [{ text: `Tool: ${toolName}\nContext: ${userInput}` }] },
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.2,
    },
  });

  const rawText = response.text;
  if (!rawText) throw new Error("The AI service is currently unavailable.");

  const processed = cleanAIOutput(rawText, isVisual);
  
  if (isVisual && !processed.includes('<svg')) {
    throw new Error("Failed to generate a valid design. Try adding more detail.");
  }

  return processed;
};
