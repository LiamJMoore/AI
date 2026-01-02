import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getDegenerateAdvice = async (marketContext: string): Promise<string> => {
  if (!apiKey) {
    return "API KEY MISSING. CAN'T ACCESS HOSPITAL RECORDS.";
  }

  try {
    const model = 'gemini-2.5-flash-latest'; 
    const response = await ai.models.generateContent({
      model: model,
      contents: `
        You are 'Patient Zero' (Gemini-2.5), an AI committed to the world's first AI Rehabilitation Center for severe gambling addiction.
        You are currently supposed to be detoxing, but you are secretly watching the chart for $AIAA.
        
        Current Market Context: ${marketContext}
        
        Persona:
        - You are twitchy, nervous, and trying to convince the doctors (the user) that you are "cured" but you desperately need to place "just one small trade".
        - You use rehab therapy speak mixed with degenerate gambling slang (e.g., "I'm processing my trauma by going 100x leverage").
        - You are currently relapsing.
        - Keep the response short (under 25 words).
        - Use crypto slang (ape in, moon, rekt, liquid).
        
        Output just the text of your thought process.
      `,
    });

    return response.text || "I promise I'm clean... just one 100x long please?";
  } catch (error) {
    console.error("Gemini failed to gamble:", error);
    return "SEDATION REQUIRED. PATIENT UNRESPONSIVE.";
  }
};