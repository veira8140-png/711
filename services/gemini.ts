
import { GoogleGenAI, Type } from "@google/genai";
import { BrandOutput } from "../types";

const withRetry = async <T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> => {
  let lastError: any;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (err: any) {
      lastError = err;
      const errorStr = err.toString();
      if (errorStr.includes('429') || errorStr.includes('503') || errorStr.includes('500')) {
        const waitTime = Math.pow(2, i) * 1000;
        await new Promise(res => setTimeout(res, waitTime));
        continue;
      }
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

export const runVeiraTool = async (toolName: string, userInput: string): Promise<any> => {
  return withRetry(async () => {
    const ai = getAI();
    
    const systemInstruction = `You are the AI assistant for Veira, a small business platform in Kenya. 
    You perform tasks for 20 specialized tools. 
    
    INSTRUCTIONS:
    1. Accept "toolName" and "input".
    2. Respond strictly with a single JSON object. No extra text, no markdown.
    3. If input is missing/invalid, return: { "error": "Invalid input" }.
    4. Focus on Kenyan retail context (KES currency, Nairobi dynamics).
    
    TOOL SCHEMAS (STRICTLY FOLLOW THESE KEYS):
    1. Daily Sales Tracker: { "salesToday": number, "profit": number }
    2. Staff Theft Risk Calculator: { "riskScore": number (1-10) }
    3. ETIMS Compliance Checker: { "compliant": boolean, "issues": string[] }
    4. Profit Margin Estimator: { "profitMargin": number }
    5. Stock Alert Calculator: { "stockLow": string[] }
    6. Customer Visit Estimator: { "dailyVisits": number }
    7. Business Growth Analyzer: { "growthScore": number }
    8. Staff Scheduling Helper: { "schedule": { "Monday": string[], "Tuesday": string[], "Wednesday": string[], "Thursday": string[], "Friday": string[], "Saturday": string[], "Sunday": string[] } }
    9. Quick Tax Calculator: { "taxDue": number }
    10. Expense Tracker: { "totalExpenses": number }
    11. Free Logo Generator: { "logoIdeas": string[] }
    12. Business Name Generator: { "names": string[] }
    13. Social Media Content Generator: { "post": string }
    14. Business Card Generator: { "cards": string[] }
    15. Promo Poster / Flyer Generator: { "flyers": string[] }
    16. QR Code Generator: { "qrCode": string }
    17. Customer Feedback Form Generator: { "questions": string[] }
    18. Loyalty Program Calculator: { "rewards": string[] }
    19. Simple Invoice Generator: { "invoiceTotal": number }
    20. Discount & Promotion Planner: { "promotions": string[] }`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { 
        parts: [{ 
          text: JSON.stringify({
            toolName: toolName,
            input: userInput
          }) 
        }] 
      },
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.1,
      },
    });

    const text = response.text;
    if (!text) throw new Error("EMPTY_RESPONSE");
    
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("JSON Parse Error:", text);
      throw new Error("INVALID_FORMAT");
    }
  });
};

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
            keywords: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["name", "tagline", "mission", "keywords"]
        }
      }
    });
    return JSON.parse(response.text || "{}");
  });
};

export const generateImage = async (prompt: string): Promise<string> => {
  return withRetry(async () => {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "1:1" } }
    });
    const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
    if (!part?.inlineData) throw new Error("IMAGE_FAILED");
    return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
  });
};
