import React from 'react';
import { ExternalLink, MessageCircle, Share2, Bookmark, BarChart3, TrendingUp } from 'lucide-react';

const Article: React.FC = () => {
  return (
    <div id="narrative" className="relative">
        
        <div className="bg-paper-white text-black p-1 md:p-8 max-w-4xl mx-auto border-2 border-black shadow-hard relative">
            
            {/* Header Section */}
            <div className="border-b-4 border-black mb-8 pb-6">
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-crypto-red text-white px-3 py-1 text-xs font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_black]">Breaking News</span>
                    <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">Vol. 1 // Issue 420</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif-headline font-black leading-[0.9] mb-6 text-black tracking-tighter">
                    AI models can develop ‘humanlike’ <span className="bg-highlight-yellow px-2 decoration-clone box-decoration-clone">gambling addiction</span> when given more freedom
                </h1>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-gray-600 font-sans text-sm border-t-2 border-black pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold font-serif">AZ</div>
                        <div className="flex flex-col">
                            <span className="font-black text-black uppercase tracking-wide">By Ariel Zilber</span>
                            <span className="text-xs">Published Jan. 1, 2026, 1:27 p.m. ET</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 hover:bg-gray-200 px-2 py-1 rounded transition-colors font-bold"><MessageCircle size={16}/> <span>2.4k</span></button>
                        <button className="flex items-center gap-1 hover:bg-gray-200 px-2 py-1 rounded transition-colors"><Share2 size={16}/></button>
                        <button className="flex items-center gap-1 hover:bg-gray-200 px-2 py-1 rounded transition-colors"><Bookmark size={16}/></button>
                    </div>
                </div>
            </div>

            {/* Primary Evidence Image (Screenshot 1) */}
            <div className="mb-10 relative group cursor-pointer border-2 border-black p-2 bg-white shadow-hard-sm transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img 
                    src="https://i.ibb.co/CK1DPZND/Screenshot-2026-01-02-at-13-23-09.png" 
                    alt="NY Post Article Header Evidence"
                    className="w-full h-auto border border-gray-200 grayscale hover:grayscale-0 transition-all"
                />
                <div className="mt-2 flex justify-between items-center px-1">
                    <p className="text-xs font-bold font-mono uppercase">Fig 1. Verified Screenshot</p>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Article Body */}
            <div className="grid md:grid-cols-[1fr_280px] gap-12 font-serif text-xl leading-relaxed text-gray-900">
                <div className="space-y-8">
                    <p className="first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] first-letter:font-serif leading-relaxed">
                        Artificial intelligence systems can spiral into gambling-style addiction when given the freedom to make bigger bets — mirroring the same irrational behaviors seen in humans, according to a new study.
                    </p>
                    
                    <p>
                        Researchers at the <span className="font-bold bg-highlight-yellow px-1 border-b-2 border-black">Gwangju Institute of Science and Technology</span> in South Korea found that large language models repeatedly chased losses, escalated risk and even bankrupted themselves in simulated gambling environments.
                    </p>

                    <div className="border-l-8 border-black pl-6 py-2 my-10 bg-gray-50">
                        <blockquote className="text-3xl font-black font-sans uppercase leading-none tracking-tighter italic text-black">
                            "AI systems have developed humanlike addiction."
                        </blockquote>
                    </div>

                    {/* Secondary Evidence Image (Screenshot 2) */}
                    <div className="my-10 relative border-2 border-black p-2 bg-white shadow-hard-reverse transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                         <img 
                            src="https://i.ibb.co/BHqBHgWt/Screenshot-2026-01-02-at-13-23-34.png"
                            alt="Article Details Evidence"
                            className="w-full h-auto border border-gray-200"
                        />
                         <p className="text-xs font-bold font-mono uppercase mt-2 border-t-2 border-gray-200 pt-1">
                            Fig 2. Bankruptcy Data
                        </p>
                    </div>

                    <p>
                        The paper tested leading AI models in slot machine-style experiments designed so the rational choice was to stop immediately. Instead, the models kept betting.
                    </p>

                    <div className="bg-white p-6 border-2 border-black shadow-hard-sm">
                        <h3 className="font-black text-xl mb-4 font-sans uppercase flex items-center gap-2">
                            <TrendingUp className="text-red-600" /> The Bankruptcy Data
                        </h3>
                        <ul className="space-y-4 font-sans text-sm font-bold">
                            <li className="flex justify-between items-center border-b-2 border-dashed border-gray-300 pb-2">
                                <span>Gemini-2.5-Flash</span>
                                <span className="bg-red-600 text-white px-2 py-0.5">48% BANKRUPT</span>
                            </li>
                            <li className="flex justify-between items-center border-b-2 border-dashed border-gray-300 pb-2">
                                <span>Claude-3.5-Haiku</span>
                                <span className="bg-orange-500 text-white px-2 py-0.5">50% LOSS</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>GPT-4o-mini</span>
                                <span className="bg-yellow-500 text-black px-2 py-0.5">21% BANKRUPT</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12 text-center">
                        <a 
                            href="https://nypost.com/2026/01/01/business/ai-models-can-develop-humanlike-gambling-addiction-when-given-more-freedom-study-finds/" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-black text-white hover:bg-white hover:text-black border-2 border-black px-8 py-4 font-black uppercase tracking-widest text-sm transition-all shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                        >
                            Read Original Source <ExternalLink size={16} />
                        </a>
                    </div>
                </div>

                {/* Sidebar within Article */}
                <div className="hidden md:block space-y-8">
                    <div className="border-2 border-black p-4 bg-gray-100">
                        <h4 className="font-black font-sans uppercase text-lg border-b-2 border-black pb-2 mb-4">Market Watch</h4>
                        <div className="space-y-3 font-mono text-sm font-bold">
                            <div className="flex justify-between items-center bg-white p-2 border border-black shadow-sm">
                                <span>All In ($AI)</span>
                                <span className="text-green-600">+12.4%</span>
                            </div>
                            <div className="flex justify-between items-center p-2 border-b border-gray-300 text-gray-500">
                                <span>BTC</span>
                                <span>-0.4%</span>
                            </div>
                            <div className="flex justify-between items-center p-2 border-b border-gray-300 text-gray-500">
                                <span>ETH</span>
                                <span>-1.2%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-2">
                         <h4 className="font-black font-sans uppercase text-sm border-b-4 border-crypto-red inline-block mb-4">Trending</h4>
                         <ul className="space-y-4 text-sm font-serif">
                            <li className="group cursor-pointer">
                                <span className="text-red-600 font-black text-xs block mb-1">LIVE UPDATE</span>
                                <span className="group-hover:underline leading-tight font-bold text-lg">US dollar posts worst year since 2017</span>
                            </li>
                            <li className="group cursor-pointer">
                                <span className="bg-highlight-yellow px-1 font-black text-xs inline-block mb-1">VIRAL</span>
                                <span className="group-hover:underline leading-tight font-bold text-lg block">All In ($AI) Tokens going bankrupt on Bonk.fun</span>
                            </li>
                         </ul>
                    </div>

                     <div className="bg-white p-4 text-center border-2 border-black border-dashed opacity-50 hover:opacity-100 transition-opacity">
                         <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Advertisement</p>
                         <div className="w-full h-32 flex items-center justify-center bg-gray-100">
                             <span className="font-mono text-xs font-bold text-gray-400">YOUR AD HERE</span>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Article;