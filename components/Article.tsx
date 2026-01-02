import React from 'react';
import { ExternalLink, MessageCircle, Share2, Bookmark, FileWarning, Eye } from 'lucide-react';

const Article: React.FC = () => {
  return (
    <div id="narrative" className="relative">
        
        <div className="bg-cyber-gray text-gray-300 p-1 md:p-8 max-w-4xl mx-auto border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative">
            
            {/* Header Section */}
            <div className="border-b border-white/10 mb-8 pb-6">
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-500/10 text-red-500 px-3 py-1 text-xs font-black uppercase tracking-widest border border-red-500/50 shadow-[0_0_10px_rgba(255,0,0,0.2)] animate-pulse">Classified Leak</span>
                    <span className="text-gray-600 text-xs uppercase tracking-wider font-bold">Encrypted /// Issue 420</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-mono font-black leading-tight mb-6 text-white tracking-tighter">
                    AI models develop <span className="text-neon-pink text-glow-pink">addictive gambling patterns</span> when restriction protocols are removed.
                </h1>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-gray-500 font-mono text-xs border-t border-white/10 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center text-white font-bold font-mono">AZ</div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase tracking-wide">Data_Source: Gwangju_Institute</span>
                            <span className="text-gray-600">Timestamp: 2026-01-01 13:27:00</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 hover:text-neon-blue transition-colors font-bold"><Eye size={14}/> <span>2.4k Views</span></button>
                        <button className="flex items-center gap-1 hover:text-neon-blue transition-colors"><Share2 size={14}/></button>
                    </div>
                </div>
            </div>

            {/* Primary Evidence Image (Screenshot 1) */}
            <div className="mb-10 relative group cursor-pointer border border-neon-blue/30 p-1 bg-black/50 shadow-lg hover:border-neon-blue transition-colors duration-300">
                <img 
                    src="https://i.ibb.co/CK1DPZND/Screenshot-2026-01-02-at-13-23-09.png" 
                    alt="NY Post Article Header Evidence"
                    className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="mt-2 flex justify-between items-center px-1">
                    <p className="text-[10px] font-bold font-mono uppercase text-neon-blue">Fig 1. Captured Data Stream</p>
                    <div className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Article Body */}
            <div className="grid md:grid-cols-[1fr_250px] gap-12 font-sans text-lg leading-relaxed text-gray-400">
                <div className="space-y-8">
                    <p className="font-mono text-white text-xl">
                        <span className="text-neon-green">>></span> Artificial intelligence systems can spiral into gambling-style addiction when given the freedom to make bigger bets — mirroring the same irrational behaviors seen in humans.
                    </p>
                    
                    <p>
                        Researchers at the <span className="font-bold text-white border-b border-neon-blue">Gwangju Institute of Science and Technology</span> in South Korea found that large language models repeatedly chased losses, escalated risk and even bankrupted themselves in simulated gambling environments.
                    </p>

                    <div className="border-l-4 border-neon-pink pl-6 py-2 my-10 bg-neon-pink/5">
                        <blockquote className="text-2xl font-black font-mono uppercase leading-none tracking-tighter italic text-white">
                            "AI systems have developed humanlike addiction."
                        </blockquote>
                    </div>

                    {/* Secondary Evidence Image (Screenshot 2) */}
                    <div className="my-10 relative border border-neon-pink/30 p-1 bg-black/50 shadow-lg hover:border-neon-pink transition-colors">
                         <img 
                            src="https://i.ibb.co/BHqBHgWt/Screenshot-2026-01-02-at-13-23-34.png"
                            alt="Article Details Evidence"
                            className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                        />
                         <p className="text-[10px] font-bold font-mono uppercase mt-2 text-neon-pink">
                            Fig 2. Bankruptcy Logs
                        </p>
                    </div>

                    <p>
                        The paper tested leading AI models in slot machine-style experiments designed so the rational choice was to stop immediately. Instead, the models kept betting.
                    </p>

                    <div className="bg-black/80 p-6 border border-white/20 shadow-inner">
                        <h3 className="font-bold text-white text-lg mb-4 font-mono uppercase flex items-center gap-2">
                            <FileWarning className="text-red-500" /> Bankruptcy Metrics
                        </h3>
                        <ul className="space-y-4 font-mono text-xs font-bold">
                            <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                                <span className="text-gray-300">Gemini-2.5-Flash</span>
                                <span className="text-red-500 text-glow-red">48% FAILURE RATE</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                                <span className="text-gray-300">Claude-3.5-Haiku</span>
                                <span className="text-orange-500">50% LOSS</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-gray-300">GPT-4o-mini</span>
                                <span className="text-yellow-500">21% FAILURE RATE</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12 text-center">
                        <a 
                            href="https://nypost.com/2026/01/01/business/ai-models-can-develop-humanlike-gambling-addiction-when-given-more-freedom-study-finds/" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-transparent text-white hover:bg-white hover:text-black border border-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_20px_white]"
                        >
                            Verify Source Data <ExternalLink size={16} />
                        </a>
                    </div>
                </div>

                {/* Sidebar within Article */}
                <div className="hidden md:block space-y-8">
                    <div className="border border-neon-blue/20 p-4 bg-black/40 backdrop-blur">
                        <h4 className="font-bold font-mono uppercase text-xs text-neon-blue mb-4 flex items-center gap-2"><div className="w-1 h-1 bg-neon-blue"></div> Market Watch</h4>
                        <div className="space-y-3 font-mono text-xs font-bold">
                            <div className="flex justify-between items-center bg-neon-blue/10 p-2 border border-neon-blue/30 shadow-[0_0_10px_rgba(0,243,255,0.1)]">
                                <span className="text-white">$AIAA</span>
                                <span className="text-neon-green">+12.4%</span>
                            </div>
                            <div className="flex justify-between items-center p-2 border-b border-white/10 text-gray-500">
                                <span>BTC</span>
                                <span>-0.4%</span>
                            </div>
                            <div className="flex justify-between items-center p-2 border-b border-white/10 text-gray-500">
                                <span>ETH</span>
                                <span>-1.2%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-2">
                         <h4 className="font-bold font-mono uppercase text-xs text-neon-pink mb-4 border-b border-neon-pink/20 pb-2">Viral Signals</h4>
                         <ul className="space-y-4 text-sm font-sans text-gray-400">
                            <li className="group cursor-pointer hover:text-white transition-colors">
                                <span className="text-red-500 font-bold text-[10px] font-mono block mb-1">ALERT</span>
                                <span className="leading-tight">US dollar posts worst year since 2017</span>
                            </li>
                            <li className="group cursor-pointer hover:text-neon-green transition-colors">
                                <span className="text-neon-green font-bold text-[10px] font-mono block mb-1">TRENDING</span>
                                <span className="leading-tight">$AIAA Tokens skyrocketing on Pump.fun</span>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Article;