import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
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
    <div className="w-full overflow-hidden bg-highlight-yellow border-y-2 border-black py-2 shadow-sm">
      <div className="animate-marquee whitespace-nowrap flex gap-12 items-center font-mono text-sm font-bold text-black uppercase tracking-wider">
            {[1, 2, 3, 4].map((i) => (
                <React.Fragment key={i}>
                    <span className="flex items-center gap-2 bg-black text-white px-2 py-0.5 transform -skew-x-12">
                         BREAKING
                    </span>
                    <span className="flex items-center gap-2">
                        ALL IN ($AI): ${data.price.toFixed(8)}
                        {data.change24h >= 0 ? <TrendingUp size={16} className="text-green-600"/> : <TrendingDown size={16} className="text-red-600"/>}
                        <span className={data.change24h >= 0 ? "text-green-700 bg-green-100 px-1" : "text-red-700 bg-red-100 px-1"}>{data.change24h > 0 ? '+' : ''}{data.change24h.toFixed(2)}%</span>
                    </span>
                    <span>MCAP: ${(data.marketCap / 1000).toFixed(1)}k</span>
                    <span className="flex items-center gap-1 text-red-600">
                        <AlertTriangle size={14}/> GEMINI: BANKRUPT
                    </span>
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