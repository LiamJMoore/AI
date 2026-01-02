import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../types';
import { MOCK_CHART_DATA } from '../constants';
import { TrendingUp, Activity } from 'lucide-react';

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
    <div id="chart" className="w-full h-[400px] bg-cyber-gray border border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.15)] p-1 relative overflow-hidden rounded-sm group">
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-20"></div>

      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/80 px-3 py-1 border border-neon-green/50 shadow-[0_0_10px_rgba(57,255,20,0.3)] backdrop-blur-sm">
         <Activity size={16} className="text-neon-green animate-pulse"/>
         <span className="text-xs font-black font-mono uppercase tracking-widest text-neon-green">LIVE: Pump.Fun</span>
      </div>

      <div className="p-4 h-full bg-cyber-black relative z-10">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
            <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#39ff14" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#39ff14" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis 
                dataKey="time" 
                stroke="#666" 
                tick={{fontSize: 10, fill: '#666', fontFamily: 'monospace', fontWeight: 'bold'}}
                minTickGap={40}
                axisLine={false}
                tickLine={false}
            />
            <YAxis 
                stroke="#666" 
                domain={['auto', 'auto']} 
                tick={{fontSize: 10, fill: '#666', fontFamily: 'monospace', fontWeight: 'bold'}}
                width={70}
                tickFormatter={(value) => value.toFixed(7)}
                axisLine={false}
                tickLine={false}
            />
            <Tooltip 
                contentStyle={{
                    backgroundColor: '#000', 
                    border: '1px solid #39ff14', 
                    color: '#39ff14',
                    boxShadow: '0 0 10px #39ff14',
                    borderRadius: '0px'
                }}
                itemStyle={{color: '#39ff14', fontFamily: 'monospace', fontWeight: 'bold'}}
                labelStyle={{color: '#fff', marginBottom: '5px', fontWeight: 'bold'}}
                formatter={(value: number) => [value.toFixed(8), "VALUE"]}
                cursor={{stroke: '#39ff14', strokeWidth: 1}}
            />
            <Area 
                type="step" 
                dataKey="price" 
                stroke="#39ff14" 
                strokeWidth={2}
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