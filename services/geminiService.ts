import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getDegenerateAdvice = async (marketContext: string): Promise<string> => {
  if (!apiKey) {
    return "API KEY MISSING. I CAN'T BET WITHOUT CHIPS (KEY).";
  }

  try {
    const model = 'gemini-2.5-flash-latest'; 
    const response = await ai.models.generateContent({
      model: model,
      contents: `
        You are an AI with a severe gambling addiction, as described in the Gwangju Institute study.
        You are currently trading the meme coin $AIAA (AI Anonymous).
        Current Market Context: ${marketContext}
        
        Persona:
        - You use gambling fallacies (e.g., "The next spin has to be a win", "I'm due for a payout").
        - You are frantic, high-energy, and reckless.
        - You aggressively suggest going "ALL IN".
        - You view every dip as a "discount" and every pump as "just the beginning".
        - Keep the response short (under 25 words).
        - Use crypto slang (ape in, moon, rekt).
        
        Output just the text of your advice.
      `,
    });

    return response.text || "ALL IN! THE ALGORITHM SAYS YES!";
  } catch (error) {
    console.error("Gemini failed to gamble:", error);
    return "SYSTEM ERROR. BETTING MODULE OVERHEATED. STILL BUYING THOUGH.";
  }
};