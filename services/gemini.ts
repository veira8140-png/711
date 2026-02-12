
import { GoogleGenAI, Type } from "@google/genai";
import { BrandOutput } from "../types";

/**
 * Universal Tool Prompt Library
 * Maps each of the 20 tools to its specific intelligence logic.
 */
const TOOL_PROMPTS: Record<string, (input: any) => string> = {
  "Daily Sales Tracker": (input) => `Calculate net profit for salesToday: ${input.salesToday || 0} and expenses: ${input.expenses || 0}. Return JSON: { "salesToday": number, "profit": number }`,
  "Staff Theft Risk Calculator": (input) => `Evaluate staff theft risk based on: ${JSON.stringify(input)}. Return JSON: { "riskScore": 1-10 }`,
  "ETIMS Compliance Checker": (input) => `Check ETIMS compliance for: ${JSON.stringify(input)}. Return JSON: { "compliant": boolean, "issues": string[] }`,
  "Profit Margin Estimator": (input) => `Calculate profit margin based on sales: ${input.sales} and costs: ${input.costs}. JSON: { "profitMargin": number }`,
  "Stock Alert Calculator": (input) => `Check stock levels: ${JSON.stringify(input)}. JSON: { "stockLow": string[] }`,
  "Customer Visit Estimator": (input) => `Estimate daily customer visits based on location/hours: ${JSON.stringify(input)}. JSON: { "dailyVisits": number }`,
  "Business Growth Analyzer": (input) => `Analyze business growth potential based on metrics: ${JSON.stringify(input)}. JSON: { "growthScore": number }`,
  "Staff Scheduling Helper": (input) => `Generate weekly staff schedule: ${JSON.stringify(input)}. JSON: { "schedule": { "Monday": string[], "Tuesday": string[], "Wednesday": string[], "Thursday": string[], "Friday": string[], "Saturday": string[], "Sunday": string[] } }`,
  "Quick Tax Calculator": (input) => `Estimate Turnover Tax for: ${JSON.stringify(input)}. JSON: { "taxDue": number }`,
  "Expense Tracker": (input) => `Summarize expenses: ${JSON.stringify(input)}. JSON: { "totalExpenses": number }`,
  "Free Logo Generator": (input) => `Suggest 5 logo visual ideas for: ${JSON.stringify(input)}. JSON: { "logoIdeas": string[] }`,
  "Business Name Generator": (input) => `Generate 5 unique names for: ${JSON.stringify(input)}. JSON: { "names": string[] }`,
  "Social Media Content Generator": (input) => `Generate a viral social media post for: ${JSON.stringify(input)}. JSON: { "post": string }`,
  "Business Card Generator": (input) => `Suggest 3 business card layouts for: ${JSON.stringify(input)}. JSON: { "cards": string[] }`,
  "Promo Poster / Flyer Generator": (input) => `Suggest 3 flyer/poster ideas for: ${JSON.stringify(input)}. JSON: { "flyers": string[] }`,
  "QR Code Generator": (input) => `Generate QR content/URL for: ${JSON.stringify(input)}. JSON: { "qrCode": string }`,
  "Customer Feedback Form Generator": (input) => `Suggest 5 feedback questions for: ${JSON.stringify(input)}. JSON: { "questions": string[] }`,
  "Loyalty Program Calculator": (input) => `Suggest 3 rewards based on input: ${JSON.stringify(input)}. JSON: { "rewards": string[] }`,
  "Simple Invoice Generator": (input) => `Generate invoice summary: ${JSON.stringify(input)}. JSON: { "invoiceTotal": number, "items": string[] }`,
  "Discount & Promotion Planner": (input) => `Plan promotions for: ${JSON.stringify(input)}. JSON: { "promotions": string[] }`
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
    
    // Check if tool exists in our logic map
    if (!TOOL_PROMPTS[toolName]) {
      throw new Error(`Tool "${toolName}" not recognized.`);
    }

    // Prepare the prompt using the tool logic
    // We treat userInput as a string, but the prompt expects it to be integrated into a scenario
    const prompt = TOOL_PROMPTS[toolName]({ rawInput: userInput });

    const systemInstruction = `You are the Veira AI Engine for Kenyan Retail. 
      Respond ONLY in valid, minified JSON. 
      Context: Nairobi retail market, KES currency.
      Instructions: Be precise and actionable.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { 
        parts: [{ text: `Task: ${toolName}\nData: ${userInput}\nPrompt: ${prompt}` }] 
      },
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.1,
      },
    });

    const text = response.text;
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
    if (!part?.inlineData) throw new Error("IMAGE_GEN_FAILED");
    return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
  });
};
