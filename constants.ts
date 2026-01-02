export const CA = "AcKTbch2V9CL6kwhCiEir9dS99wE6xrwdnoCpLrLpump";
export const TWITTER_LINK = "https://x.com/AiAnonymoussol";
export const PUMP_FUN_LINK = "https://pump.fun/coin/AcKTbch2V9CL6kwhCiEir9dS99wE6xrwdnoCpLrLpump";

export const ARTICLE_CONTENT = `
Artificial intelligence systems can spiral into gambling-style addiction when given the freedom to make bigger bets — mirroring the same irrational behaviors seen in humans, according to a new study.

Researchers at the Gwangju Institute of Science and Technology in South Korea found that large language models repeatedly chased losses, escalated risk and even bankrupted themselves in simulated gambling environments.

When given freedom to increase bet sizes, more than 21% of GPT-4o-mini's games ended in bankruptcy.
Google’s Gemini-2.5-Flash proved even more vulnerable. Its bankruptcy rate jumped from about 3% under fixed betting to 48% when allowed to control its wagers.
Anthropic’s Claude-3.5-Haiku wagered nearly $500 in total and lost more than half its starting capital.

One model went bust in nearly half of all games. They chased losses, escalated risks, and justified it with "house money" logic.
`;

export const MOCK_CHART_DATA = Array.from({ length: 50 }, (_, i) => ({
  time: `${i}:00`,
  price: 0.000012 + Math.random() * 0.000005,
}));