import fetch from "node-fetch";

const API_KEY = process.env.GROQ_API_KEY;

export async function runGroqTool(toolName: string, input: any) {
  const toolPrompts: { [key: string]: (input: any) => string } = {
    "Daily Sales Tracker": (input) =>
      `Calculate net profit for salesToday: ${input.salesToday} and expenses: ${input.expenses}. Return JSON: { "salesToday": number, "profit": number }`,

    "Staff Theft Risk Calculator": (input) =>
      `Evaluate staff theft risk based on: ${JSON.stringify(input)}. Return JSON: { "riskScore": 1-10 }`,

    "ETIMS Compliance Checker": (input) =>
      `Check ETIMS compliance for: ${JSON.stringify(input)}. Return JSON: { "compliant": true/false, "issues": [] }`,

    "Profit Margin Estimator": (input) =>
      `Calculate profit margin based on sales: ${input.sales} and costs: ${input.costs}. Return JSON: { "profitMargin": number }`,

    "Stock Alert Calculator": (input) =>
      `Check stock levels: ${JSON.stringify(input)}. Return JSON: { "stockLow": ["item1","item2"] }`,

    "Customer Visit Estimator": (input) =>
      `Estimate daily customer visits: ${JSON.stringify(input)}. Return JSON: { "dailyVisits": number }`,

    "Business Growth Analyzer": (input) =>
      `Analyze business growth potential: ${JSON.stringify(input)}. Return JSON: { "growthScore": number }`,

    "Staff Scheduling Helper": (input) =>
      `Generate weekly staff schedule: ${JSON.stringify(input)}. Return JSON: { "schedule": { "Monday": ["Alice","Bob"], "Tuesday": [], "Wednesday": [], "Thursday": [], "Friday": [], "Saturday": [], "Sunday": [] } }`,

    "Quick Tax Calculator": (input) =>
      `Estimate taxes for input: ${JSON.stringify(input)}. Return JSON: { "taxDue": number }`,

    "Expense Tracker": (input) =>
      `Summarize expenses: ${JSON.stringify(input)}. Return JSON: { "totalExpenses": number, "items": input }`,

    "Free Logo Generator": (input) =>
      `Suggest 5 logo ideas for business: ${input.businessName}. Return JSON: { "logoIdeas": ["Idea1","Idea2","Idea3","Idea4","Idea5"] }`,

    "Business Name Generator": (input) =>
      `Generate 5 unique business names for: ${input.industry}. Return JSON: { "names": ["Name1","Name2","Name3","Name4","Name5"] }`,

    "Social Media Content Generator": (input) =>
      `Generate a social media post for: ${input.businessName} about ${input.topic}. Return JSON: { "post": "Your social media content here" }`,

    "Business Card Generator": (input) =>
      `Suggest 3 business card layouts for: ${input.businessName}. Return JSON: { "cards": ["Design1","Design2","Design3"] }`,

    "Promo Poster / Flyer Generator": (input) =>
      `Suggest 3 flyer or poster ideas for promotion: ${input.promo}. Return JSON: { "flyers": ["Flyer1","Flyer2","Flyer3"] }`,

    "QR Code Generator": (input) =>
      `Generate QR code URL for: ${input.target}. Return JSON: { "qrCode": "https://example.com" }`,

    "Customer Feedback Form Generator": (input) =>
      `Suggest 5 feedback questions for ${input.businessName}. Return JSON: { "questions": ["Q1","Q2","Q3","Q4","Q5"] }`,

    "Loyalty Program Calculator": (input) =>
      `Suggest 3 loyalty rewards for input: ${JSON.stringify(input)}. Return JSON: { "rewards": ["Reward1","Reward2","Reward3"] }`,

    "Simple Invoice Generator": (input) =>
      `Generate invoice summary: ${JSON.stringify(input)}. Return JSON: { "invoiceTotal": number, "items": input.items }`,

    "Discount & Promotion Planner": (input) =>
      `Plan promotions/discounts for: ${JSON.stringify(input)}. Return JSON: { "promotions": ["Discount1","Discount2","Discount3"] }`,
  };

  const promptFn = toolPrompts[toolName];
  if (!promptFn) throw new Error("Tool not found");

  const prompt = promptFn(input);

  try {
    const response = await fetch("https://api.groq.ai/v1/query", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, max_tokens: 500 }),
    });

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Groq API error:", error);
    return { error: "AI service is busy. Please try again." };
  }
}
