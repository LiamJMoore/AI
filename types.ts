export interface ChartDataPoint {
  time: string;
  price: number;
}

export interface NewsItem {
  headline: string;
  source: string;
  excerpt: string;
}

export interface SimulationState {
  price: number;
  marketCap: number;
  change24h: number;
}

export enum GameState {
  IDLE,
  THINKING,
  BETTING,
  BANKRUPT,
  WIN
}