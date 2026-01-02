import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../types';
import { MOCK_CHART_DATA } from '../constants';
import { TrendingUp } from 'lucide-react';

const Chart: React.FC = () => {
  const [data, setData] = useState<ChartDataPoint[]>(MOCK_CHART_DATA);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => {
        const lastPrice = currentData[currentData.length - 1].price;
        const volatility = (Math.random() - 0.45) * 0.000005;
        const newPrice = Math.max(0.000001, lastPrice + volatility);
        
        const now = new Date();
        const timeString = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

        const newData = [...currentData.slice(1), { time: timeString, price: newPrice }];
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="chart" className="w-full h-[400px] bg-white border-2 border-black shadow-hard p-1 relative overflow-hidden">
      
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white px-3 py-1 border-2 border-black shadow-hard-sm">
         <TrendingUp size={16} className="text-crypto-green"/>
         <span className="text-xs font-black font-sans uppercase tracking-widest">LIVE: Pump.Fun</span>
      </div>

      <div className="p-4 h-full bg-paper-texture">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
            <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00cc00" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#00cc00" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
            <XAxis 
                dataKey="time" 
                stroke="#000" 
                tick={{fontSize: 10, fill: '#000', fontFamily: 'monospace', fontWeight: 'bold'}}
                minTickGap={40}
                axisLine={true}
                tickLine={true}
            />
            <YAxis 
                stroke="#000" 
                domain={['auto', 'auto']} 
                tick={{fontSize: 10, fill: '#000', fontFamily: 'monospace', fontWeight: 'bold'}}
                width={70}
                tickFormatter={(value) => value.toFixed(7)}
                axisLine={true}
                tickLine={true}
            />
            <Tooltip 
                contentStyle={{
                    backgroundColor: '#fff', 
                    border: '2px solid #000', 
                    color: '#000',
                    boxShadow: '4px 4px 0px #000',
                    borderRadius: '0px'
                }}
                itemStyle={{color: '#000', fontFamily: 'monospace', fontWeight: 'bold'}}
                labelStyle={{color: '#666', marginBottom: '5px', fontWeight: 'bold'}}
                formatter={(value: number) => [value.toFixed(8), "PRICE"]}
            />
            <Area 
                type="monotone" 
                dataKey="price" 
                stroke="#00cc00" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorPrice)" 
                isAnimationActive={false}
            />
            </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;