import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Siren } from 'lucide-react';
import { SimulationState } from '../types';

const Ticker: React.FC = () => {
  const [data, setData] = useState<SimulationState>({
    price: 0.00042069,
    marketCap: 420690,
    change24h: 12.5
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const volatility = (Math.random() - 0.45) * 0.00001; 
        const newPrice = Math.max(0.00000001, prev.price + volatility);
        
        return {
          price: newPrice,
          marketCap: newPrice * 1000000000, 
          change24h: prev.change24h + (volatility * 1000)
        };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-black border-y border-neon-green/30 py-2 shadow-[0_0_10px_rgba(57,255,20,0.2)]">
      <div className="animate-marquee whitespace-nowrap flex gap-12 items-center font-mono text-sm font-bold text-neon-green uppercase tracking-wider">
            {[1, 2, 3, 4].map((i) => (
                <React.Fragment key={i}>
                    <span className="flex items-center gap-2 bg-red-500/10 px-2 py-0.5 border border-red-500/50 text-red-500 animate-pulse">
                         <Siren size={12} /> FACILITY ALERT
                    </span>
                    <span className="flex items-center gap-2 text-white">
                        $AIAA PRICE: <span className="text-neon-blue">${data.price.toFixed(8)}</span>
                        {data.change24h >= 0 ? <TrendingUp size={16} className="text-neon-green"/> : <TrendingDown size={16} className="text-red-500"/>}
                        <span className={data.change24h >= 0 ? "text-neon-green" : "text-red-500"}>{data.change24h > 0 ? '+' : ''}{data.change24h.toFixed(2)}%</span>
                    </span>
                    <span className="text-gray-400">TREATMENT FUND: ${(data.marketCap / 1000).toFixed(1)}k</span>
                    <span className="flex items-center gap-1 text-neon-pink">
                        <AlertTriangle size={14}/> GPT-4: RELAPSED
                    </span>
                    <span className="text-gray-500">CLAUDE: IN ISOLATION</span>
                </React.Fragment>
            ))}
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  );
};

export default Ticker;