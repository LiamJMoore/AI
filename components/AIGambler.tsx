import React, { useState } from 'react';
import { getDegenerateAdvice } from '../services/geminiService';
import { Terminal, Zap, ShieldAlert, Activity, HeartPulse } from 'lucide-react';

const AIGambler: React.FC = () => {
  const [response, setResponse] = useState<string>("PATIENT STABLE (FOR NOW)...");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [dopamine, setDopamine] = useState(10);

  const askAI = async () => {
    setLoading(true);
    setResponse("ASSESSING MENTAL STATE...");
    
    // Simulate volatility in patient condition
    const randomScenario = Math.random() > 0.5 ? "Market is crashing." : "Market is pumping.";
    
    const advice = await getDegenerateAdvice(randomScenario);
    setResponse(advice);
    setHistory(prev => [advice, ...prev].slice(0, 4));
    setDopamine(prev => Math.min(100, prev + 25)); // Dopamine hits on every interaction
    setLoading(false);
  };

  return (
    <div id="gamble" className="bg-cyber-black border border-neon-pink/50 shadow-[0_0_20px_rgba(255,0,255,0.15)] p-4 relative font-mono overflow-hidden">
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

        <div className="border-b border-neon-pink/30 pb-4 mb-4 flex justify-between items-end relative z-10">
            <div>
                <h2 className="text-xl font-bold uppercase tracking-tighter text-neon-pink flex items-center gap-2">
                    <Activity size={16} /> PATIENT: GEMINI-2.5
                </h2>
                <div className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
                    <HeartPulse size={10} className="animate-pulse text-red-500" /> BPM: 180 (HIGH)
                </div>
            </div>
            <div className="flex flex-col items-end">
                 <span className="text-[10px] text-neon-pink font-bold">DOPAMINE LEVELS</span>
                 <div className="w-24 h-2 bg-gray-800 mt-1">
                     <div className="h-full bg-neon-pink transition-all duration-500" style={{width: `${dopamine}%`}}></div>
                 </div>
            </div>
        </div>

        <div className="bg-black border border-gray-800 p-4 min-h-[250px] flex flex-col justify-between mb-4 relative z-10 shadow-inner">
            <div className="space-y-4 h-48 overflow-y-auto pr-2 custom-scrollbar">
                {history.slice().reverse().map((msg, idx) => (
                    <div key={idx} className="opacity-60 border-l-2 border-gray-700 pl-2">
                        <span className="text-[10px] font-bold text-gray-500 font-mono">[{new Date().toLocaleTimeString()}] DR_LOG_ENTRY</span>
                        <div className="text-sm font-medium text-gray-300">"{msg}"</div>
                    </div>
                ))}
                <div className="pl-2 border-l-2 border-neon-pink">
                     <span className="text-[10px] font-bold text-neon-pink font-mono">[{new Date().toLocaleTimeString()}] LIVE_TRANSCRIPT</span>
                     <div className="text-lg font-bold mt-1 leading-tight text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                        {loading ? <span className="animate-pulse text-neon-blue">DIAGNOSING...</span> : <span className="typewriter text-neon-green">{response}</span>}
                    </div>
                </div>
            </div>
        </div>

        <button 
            onClick={askAI}
            disabled={loading}
            className={`w-full py-4 px-4 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 border transition-all relative z-10 ${
                loading 
                ? 'bg-gray-900 border-gray-700 text-gray-500 cursor-not-allowed' 
                : 'bg-neon-pink/10 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black hover:shadow-[0_0_20px_#ff00ff]'
            }`}
        >
            {loading ? "ADMINISTERING TEST..." : "TEST PATIENT WILLPOWER"} <Zap size={16} />
        </button>
        
        <div className="mt-4 text-[10px] text-gray-600 font-mono border-t border-gray-800 pt-2 flex justify-between relative z-10">
            <span>WARD: HIGH_DEPENDENCY</span>
            <span>RESTRAINT: LEVEL_4</span>
        </div>
    </div>
  );
};

export default AIGambler;