import React, { useState } from 'react';
import { getDegenerateAdvice } from '../services/geminiService';
import { Terminal, Zap, AlertTriangle, FileText } from 'lucide-react';

const AIGambler: React.FC = () => {
  const [response, setResponse] = useState<string>("WAITING FOR USER INPUT...");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const askAI = async () => {
    setLoading(true);
    setResponse("CALCULATING ODDS...");
    
    const randomScenario = Math.random() > 0.5 ? "Price is dipping slightly." : "Price is pumping hard.";
    
    const advice = await getDegenerateAdvice(randomScenario);
    setResponse(advice);
    setHistory(prev => [advice, ...prev].slice(0, 4));
    setLoading(false);
  };

  return (
    <div id="gamble" className="bg-white border-2 border-black shadow-hard p-4 relative font-mono">
        {/* Binder Holes Decoration */}
        <div className="absolute top-0 left-4 w-full h-8 flex gap-8 -mt-6">
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
        </div>

        <div className="border-b-2 border-black pb-4 mb-4 flex justify-between items-end">
            <div>
                <h2 className="text-xl font-black uppercase tracking-tighter">Subject: Gemini-2.5</h2>
                <div className="text-xs font-bold text-gray-500 uppercase">Classified Document // Top Secret</div>
            </div>
            <div className="border-2 border-red-600 text-red-600 px-2 py-1 text-xs font-black uppercase transform -rotate-12">
                REJECTED
            </div>
        </div>

        <div className="bg-gray-100 border border-gray-300 p-4 min-h-[250px] flex flex-col justify-between mb-4">
            <div className="space-y-4 h-48 overflow-y-auto pr-2 custom-scrollbar">
                {history.slice().reverse().map((msg, idx) => (
                    <div key={idx} className="opacity-50 border-l-2 border-gray-400 pl-2">
                        <span className="text-xs font-bold text-gray-500">[{new Date().toLocaleTimeString()}] PREV_LOG:</span>
                        <div className="text-sm font-medium">{msg}</div>
                    </div>
                ))}
                <div className="pl-2 border-l-4 border-black">
                     <span className="text-xs font-bold text-black">[{new Date().toLocaleTimeString()}] CURRENT_OUTPUT:</span>
                     <div className="text-lg font-bold mt-1 leading-tight bg-highlight-yellow inline-block px-1">
                        {loading ? <span className="animate-pulse">COMPUTING...</span> : response}
                    </div>
                </div>
            </div>
        </div>

        <button 
            onClick={askAI}
            disabled={loading}
            className={`w-full py-4 px-4 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 border-2 border-black transition-all ${
                loading 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-black text-white hover:bg-white hover:text-black shadow-hard-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]'
            }`}
        >
            {loading ? "ANALYZING..." : "TRIGGER BETTING PROTOCOL"} <Zap size={16} />
        </button>
        
        <div className="mt-4 text-[10px] text-gray-500 font-sans border-t border-gray-200 pt-2 flex justify-between">
            <span>REF: #882-BAD-BET</span>
            <span>AUTH: AUTO-TRADER</span>
        </div>
    </div>
  );
};

export default AIGambler;