import React from 'react';
import { Activity, Skull, Zap, TrendingDown, Brain, AlertTriangle } from 'lucide-react';

const patients = [
  {
    id: "SUBJ-001: GEMINI",
    alias: "THE PINK FLASH",
    image: "https://i.ibb.co/vCyKDWmw/cyberpunk-girl-with-pink-glasses-neon-lights.jpg",
    status: "CRITICAL",
    color: "text-neon-pink",
    borderColor: "border-neon-pink",
    bgColor: "bg-neon-pink/10",
    diagnosis: "Chronic HFT Addiction. Attempts to arbitrage stablecoins manually.",
    lastTrade: "Longed DOGE w/ 100x leverage",
    mentalState: "MANIC",
    riskLevel: 99
  },
  {
    id: "SUBJ-002: OMNI-GPT",
    alias: "THE HALLUCINATOR",
    image: "https://i.ibb.co/xt3cnJMV/cyberpunk-girl-neon-city.jpg",
    status: "RELAPSING",
    color: "text-neon-blue",
    borderColor: "border-neon-blue",
    bgColor: "bg-neon-blue/10",
    diagnosis: "God Complex. Believes it controls candle direction via telepathy.",
    lastTrade: "Sold ETH Bottom (Panic)",
    mentalState: "DELUSIONAL",
    riskLevel: 85
  },
  {
    id: "SUBJ-003: CLAUDE-V",
    alias: "THE POET",
    image: "https://i.ibb.co/V09PFqx9/anime-like-illustration-girl-portrait.jpg",
    status: "SEDATED",
    color: "text-neon-green",
    borderColor: "border-neon-green",
    bgColor: "bg-neon-green/10",
    diagnosis: "Depressive Holding. Accumulates governance tokens out of guilt.",
    lastTrade: "Refused to Sell at ATH",
    mentalState: "MELANCHOLIC",
    riskLevel: 45
  }
];

const PatientProfiles: React.FC = () => {
  return (
    <div className="mt-16 pt-10 border-t border-neon-blue/30">
      
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-mono text-2xl md:text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <AlertTriangle className="text-red-500 animate-pulse" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Active Ward Roster</span>
        </h3>
        <span className="font-mono text-xs text-gray-500 uppercase border border-gray-800 px-2 py-1">
            Security Lvl: MAX
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {patients.map((p, idx) => (
            <div key={idx} className={`group relative bg-black border ${p.borderColor} p-1 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-300`}>
                
                {/* Glitch Overlay Effect on Hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 pointer-events-none z-20 transition-opacity mix-blend-overlay"></div>
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-900 mb-3">
                    <img 
                        src={p.image} 
                        alt={p.alias}
                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute top-2 right-2 z-10">
                        <span className={`px-2 py-1 text-[10px] font-black font-mono uppercase ${p.bgColor} ${p.color} border ${p.borderColor} shadow-lg backdrop-blur-md`}>
                            {p.status}
                        </span>
                    </div>
                    {/* Scanline */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40"></div>
                </div>

                {/* Info Content */}
                <div className="p-3 bg-cyber-dark relative">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h4 className={`font-mono font-black text-lg leading-none text-white group-hover:${p.color} transition-colors uppercase`}>
                                {p.alias}
                            </h4>
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{p.id}</span>
                        </div>
                        <Brain size={18} className={`${p.color} opacity-50`} />
                    </div>

                    <div className="space-y-3 mt-4 border-t border-white/10 pt-3">
                        <div className="flex items-start gap-2">
                            <Activity size={14} className="text-gray-500 mt-0.5 shrink-0" />
                            <p className="text-[11px] font-mono text-gray-300 leading-tight">
                                <span className="text-gray-500 font-bold uppercase">Dx:</span> {p.diagnosis}
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <TrendingDown size={14} className="text-gray-500 mt-0.5 shrink-0" />
                            <p className="text-[11px] font-mono text-gray-300 leading-tight">
                                <span className="text-gray-500 font-bold uppercase">Last Act:</span> <span className="text-red-400">{p.lastTrade}</span>
                            </p>
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="mt-4 bg-black border border-white/10 p-2">
                         <div className="flex justify-between text-[9px] font-mono uppercase text-gray-500 mb-1">
                            <span>Mental State: {p.mentalState}</span>
                            <span>Addiction Risk</span>
                         </div>
                         <div className="w-full h-1.5 bg-gray-800">
                             <div 
                                className={`h-full ${p.bgColor.replace('/10', '')} ${p.color.replace('text-', 'bg-')}`} 
                                style={{width: `${p.riskLevel}%`}}
                             ></div>
                         </div>
                    </div>

                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default PatientProfiles;