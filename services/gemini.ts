
import { GoogleGenAI, Type } from "@google/genai";
import { BrandOutput } from "../types";

/**
 * Universal Tool Prompt Library
 */
const TOOL_PROMPTS: Record<string, (input: string) => string> = {
  "Daily Sales Tracker": (input) => `Analyze this sales data: "${input}". Calculate net sales and profit. Return JSON: { "salesToday": number, "profit": number }`,
  "Staff Theft Risk Calculator": (input) => `Evaluate staff theft risk based on this operational context: "${input}". Return JSON: { "riskScore": number } (scale 1-10)`,
  "ETIMS Compliance Checker": (input) => `Evaluate KRA/ETIMS compliance readiness for: "${input}". Return JSON: { "compliant": boolean, "issues": string[] }`,
  "Profit Margin Estimator": (input) => `Calculate net profit margin percentage based on: "${input}". Return JSON: { "profitMargin": number }`,
  "Stock Alert Calculator": (input) => `Identify low stock items and critical levels from: "${input}". Return JSON: { "stockLow": string[] }`,
  "Customer Visit Estimator": (input) => `Estimate potential daily foot traffic and revenue impact for: "${input}". Return JSON: { "dailyVisits": number }`,
  "Business Growth Analyzer": (input) => `Analyze business scaling potential based on: "${input}". Return JSON: { "growthScore": number } (scale 1-10)`,
  "Staff Scheduling Helper": (input) => `Generate an optimized weekly staff schedule for: "${input}". Return JSON: { "schedule": { "Monday": string[], "Tuesday": string[], "Wednesday": string[], "Thursday": string[], "Friday": string[], "Saturday": string[], "Sunday": string[] } }`,
  "Quick Tax Calculator": (input) => `Estimate monthly Turnover Tax (TOT) for: "${input}". Return JSON: { "taxDue": number }`,
  "Expense Tracker": (input) => `Summarize and categorize business expenses from: "${input}". Return JSON: { "totalExpenses": number }`,
  "Free Logo Generator": (input) => `Suggest 5 creative visual logo concepts for: "${input}". Return JSON: { "logoIdeas": string[] }`,
  "Business Name Generator": (input) => `Generate 5 unique and catchy business names for: "${input}". Return JSON: { "names": string[] }`,
  "Social Media Content Generator": (input) => `Create a high-engagement social media post for: "${input}". Return JSON: { "post": string }`,
  "Business Card Generator": (input) => `Suggest 3 professional business card layouts for: "${input}". Return JSON: { "cards": string[] }`,
  "Promo Poster / Flyer Generator": (input) => `Suggest 3 marketing poster or flyer ideas for: "${input}". Return JSON: { "flyers": string[] }`,
  "QR Code Generator": (input) => `Create a QR code content strategy for: "${input}". Return JSON: { "qrCode": string }`,
  "Customer Feedback Form Generator": (input) => `Suggest 5 key feedback questions to ask customers for: "${input}". Return JSON: { "questions": string[] }`,
  "Loyalty Program Calculator": (input) => `Suggest 3 effective loyalty rewards for: "${input}". Return JSON: { "rewards": string[] }`,
  "Simple Invoice Generator": (input) => `Create a professional invoice summary for: "${input}". Return JSON: { "invoiceTotal": number, "items": string[] }`,
  "Discount & Promotion Planner": (input) => `Design a profitable promotional campaign for: "${input}". Return JSON: { "promotions": string[] }`
};

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

export const runVeiraTool = async (toolName: string, userInput: string): Promise<any> => {
  return withRetry(async () => {
    // Strictly adhere to API key guideline
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    if (!TOOL_PROMPTS[toolName]) {
      throw new Error(`Tool "${toolName}" not recognized.`);
    }

    const promptText = TOOL_PROMPTS[toolName](userInput);

    const systemInstruction = `You are the Veira Intelligence Engine, a world-class retail advisor for small businesses in Kenya.
      Your task is to analyze the provided business data and return highly accurate, actionable insights.
      CONTEXT: Kenyan market, Nairobi dynamics, KES currency.
      STRICT REQUIREMENT: Respond ONLY with a single valid JSON object. No markdown, no pre-amble, no post-amble.
      If the input is insufficient, provide reasonable estimates based on the provided context.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { 
        parts: [{ text: `TASK: ${toolName}\nINPUT: ${userInput}\nINSTRUCTION: ${promptText}` }] 
      },
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.2,
      },
    });

    const text = response.text?.trim();
    if (!text) throw new Error("EMPTY_AI_RESPONSE");
    
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("JSON Parse Error:", text);
      throw new Error("INVALID_DATA_FORMAT");
    }
  });
};

export const generateBrandIdentity = async (industry: string, vibe: string): Promise<BrandOutput> => {
  return withRetry(async () => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
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

    const text = response.text?.trim();
    if (!text) throw new Error("EMPTY_AI_RESPONSE");
    return JSON.parse(text);
  });
};

export const generateImage = async (prompt: string): Promise<string> => {
  return withRetry(async () => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "1:1" } }
    });
    const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
    if (!part?.inlineData) throw new Error("IMAGE_GEN_FAILED");
    return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
  });
};
