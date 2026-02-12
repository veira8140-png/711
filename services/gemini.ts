import { GoogleGenAI, Type } from "@google/genai";
import { BrandOutput } from "../types";

// Always initialize the client within the service to ensure process.env.API_KEY is current
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Cleans markdown artifacts and extracts specific content blocks
 */
const cleanAIOutput = (text: string, isVisual: boolean = false): string => {
  if (!text) return "";
  
  // Remove markdown code blocks
  let cleaned = text.replace(/```[a-z]*\n/gi, '').replace(/```/g, '').trim();
  
  if (isVisual) {
    // For visual tools, specifically try to extract the SVG tag
    const svgMatch = cleaned.match(/<svg[\s\S]*?<\/svg>/i);
    if (svgMatch) return svgMatch[0];
  }
  
  return cleaned;
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
 * Unified tool executor for the Veira Power-up Suite.
 * Optimized for Kenyan retail context and high-speed delivery.
 */
export const runVeiraTool = async (toolName: string, userInput: string): Promise<string> => {
  const ai = getAI();
  
  // Determine if this is a visual tool to adjust prompt and cleaning
  const isVisual = ['Logo', 'QR', 'Card', 'Poster', 'Flyer'].some(kw => toolName.includes(kw));

  const systemInstruction = `You are Veira AI, the expert intelligence core for Kenyan retail businesses.
    Current Tool Context: "${toolName}".
    
    CRITICAL OUTPUT RULES:
    1. If this is a visual/design tool (Logo, QR, Business Card, Poster): You MUST output ONLY a valid, modern, high-contrast, professional SVG code block. No explanation before or after.
    2. If this is an operational/calculator tool: Provide a clear, bulleted summary. Always use KES (Kenya Shillings) as currency. Provide actionable advice based on Kenyan market trends (Nairobi, estate retail, CBD dynamics).
    3. If this is a content tool: Provide 3-5 high-impact variations ready for WhatsApp or Instagram.
    4. NEVER use conversational filler (e.g., "I can help with that").
    5. Ensure all data provided aligns with KRA eTIMS logic and local tax rates (16% VAT, 3% Turnover Tax) where applicable.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [{ parts: [{ text: `User Business Input: ${userInput}` }] }],
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.2, // Lower temperature for more consistent, reliable tool outputs
    },
  });

  const rawText = response.text || "";
  if (!rawText) throw new Error("Empty response from AI engine");

  return cleanAIOutput(rawText, isVisual);
};
