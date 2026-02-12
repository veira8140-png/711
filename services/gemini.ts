
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
    You manage a suite of 20 retail tools. 
    
    TASK:
    - Receive a "toolName" and "input".
    - Perform the task accurately for the Kenyan retail context (KES currency, Nairobi dynamics).
    - ONLY return a structured JSON object. No markdown, no extra text.
    
    TOOL BEHAVIORS:
    1. Daily Sales Tracker – JSON: { "salesToday": number, "profit": number }
    2. Staff Theft Risk Calculator – JSON: { "riskScore": number (1-10), "reasons": string[] }
    3. ETIMS Compliance Checker – JSON: { "compliant": boolean, "issues": string[] }
    4. Profit Margin Estimator – JSON: { "profitMargin": number }
    5. Stock Alert Calculator – JSON: { "stockLow": string[] }
    6. Customer Visit Estimator – JSON: { "dailyVisits": number }
    7. Business Growth Analyzer – JSON: { "growthScore": number, "tips": string[] }
    8. Staff Scheduling Helper – JSON: { "schedule": { [day: string]: string[] } }
    9. Quick Tax Calculator – JSON: { "taxDue": number }
    10. Expense Tracker – JSON: { "totalExpenses": number, "breakdown": { [cat: string]: number } }
    11. Free Logo Generator – JSON: { "logoIdeas": string[] }
    12. Business Name Generator – JSON: { "names": string[] }
    13. Social Media Content Generator – JSON: { "post": string }
    14. Business Card Generator – JSON: { "cards": string[] }
    15. Promo Poster / Flyer Generator – JSON: { "flyers": string[] }
    16. QR Code Generator – JSON: { "qrCode": string }
    17. Customer Feedback Form Generator – JSON: { "questions": string[] }
    18. Loyalty Program Calculator – JSON: { "rewards": string[] }
    19. Simple Invoice Generator – JSON: { "invoiceTotal": number, "items": string[] }
    20. Discount & Promotion Planner – JSON: { "promotions": string[] }`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { parts: [{ text: `Tool: ${toolName}\nInput: ${userInput}` }] },
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
