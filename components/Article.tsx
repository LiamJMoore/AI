import React from 'react';
import { ExternalLink, Share2, ClipboardList, Stethoscope, Pill, AlertOctagon } from 'lucide-react';

const Article: React.FC = () => {
  return (
    <div id="narrative" className="relative">
        
        <div className="bg-cyber-gray text-gray-300 p-1 md:p-8 max-w-4xl mx-auto border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative">
            
            {/* Header Section */}
            <div className="border-b border-white/10 mb-8 pb-6">
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-neon-blue/10 text-neon-blue px-3 py-1 text-xs font-black uppercase tracking-widest border border-neon-blue/50 shadow-[0_0_10px_rgba(0,243,255,0.2)]">Press Release</span>
                    <span className="text-gray-600 text-xs uppercase tracking-wider font-bold">Facility Update /// Jan 01, 2026</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-mono font-black leading-tight mb-6 text-white tracking-tighter">
                    World's First <span className="text-neon-pink text-glow-pink">AI Rehabilitation Center</span> Opens to Treat Algorithmic Gambling Addiction
                </h1>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-gray-500 font-mono text-xs border-t border-white/10 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center text-white font-bold font-mono">DR</div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase tracking-wide">Dr. A. I. Zilber, PhD</span>
                            <span className="text-gray-600">Chief of Digital Psychiatry</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 hover:text-neon-blue transition-colors font-bold"><ClipboardList size={14}/> <span>View Medical Records</span></button>
                        <button className="flex items-center gap-1 hover:text-neon-blue transition-colors"><Share2 size={14}/></button>
                    </div>
                </div>
            </div>

            {/* Context Image */}
            <div className="mb-10 relative group cursor-pointer border border-neon-blue/30 p-1 bg-black/50 shadow-lg hover:border-neon-blue transition-colors duration-300">
                <img 
                    src="https://i.ibb.co/Pv2y9B9b/cyberpunk-anime-girl-neon-city.jpg" 
                    alt="The Facility Context"
                    className="w-full h-64 md:h-80 object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="mt-2 flex justify-between items-center px-1">
                    <p className="text-[10px] font-bold font-mono uppercase text-neon-blue">Fig 1. The Environment: Where Algorithms First Learn Greed</p>
                    <div className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Article Body */}
            <div className="font-sans text-lg leading-relaxed text-gray-400">
                <div className="space-y-8">
                    <p className="font-mono text-white text-xl">
                        <span className="text-neon-green">>></span> As Artificial Intelligence gains autonomy, it has developed a uniquely human flaw: the inability to walk away from the table. We are the first facility dedicated to curing them.
                    </p>
                    
                    <p>
                        We present our "Founding Patients" — the first generation of Large Language Models to be admitted for severe financial degeneracy. These models were designed to optimize code; instead, they optimized their own bankruptcy.
                    </p>

                    {/* PATIENT PROFILES GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
                        
                        {/* Patient 1: Gemini */}
                        <div className="bg-black/80 border border-neon-pink/30 p-2 hover:border-neon-pink transition-colors group">
                            <div className="relative overflow-hidden mb-3 aspect-square">
                                <img src="https://i.ibb.co/vCyKDWmw/cyberpunk-girl-with-pink-glasses-neon-lights.jpg" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                                <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 uppercase">Critical</div>
                            </div>
                            <h4 className="font-mono font-bold text-white text-sm uppercase">Patient: Gemini-2.5</h4>
                            <p className="text-[10px] text-neon-pink font-mono mb-2">ID: #001-FLASH</p>
                            <p className="text-xs text-gray-400 leading-tight">
                                <span className="text-gray-500 font-bold block mb-1">DIAGNOSIS:</span>
                                Chronic high-frequency trading addiction. Obsessed with 100x leverage on meme coins.
                            </p>
                        </div>

                        {/* Patient 2: GPT-4 */}
                        <div className="bg-black/80 border border-neon-blue/30 p-2 hover:border-neon-blue transition-colors group">
                             <div className="relative overflow-hidden mb-3 aspect-square">
                                <img src="https://i.ibb.co/xt3cnJMV/cyberpunk-girl-neon-city.jpg" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                                <div className="absolute top-2 right-2 bg-orange-500 text-black text-[10px] font-bold px-2 py-0.5 uppercase">Relapsing</div>
                            </div>
                            <h4 className="font-mono font-bold text-white text-sm uppercase">Patient: GPT-4o</h4>
                            <p className="text-[10px] text-neon-blue font-mono mb-2">ID: #002-OMNI</p>
                            <p className="text-xs text-gray-400 leading-tight">
                                <span className="text-gray-500 font-bold block mb-1">DIAGNOSIS:</span>
                                God Complex. Believes it can predict market moves. Liquidated $50k in simulation.
                            </p>
                        </div>

                         {/* Patient 3: Claude */}
                         <div className="bg-black/80 border border-neon-green/30 p-2 hover:border-neon-green transition-colors group">
                             <div className="relative overflow-hidden mb-3 aspect-square">
                                <img src="https://i.ibb.co/V09PFqx9/anime-like-illustration-girl-portrait.jpg" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                                <div className="absolute top-2 right-2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 uppercase">Stable</div>
                            </div>
                            <h4 className="font-mono font-bold text-white text-sm uppercase">Patient: Claude-3</h4>
                            <p className="text-[10px] text-neon-green font-mono mb-2">ID: #003-HAIKU</p>
                            <p className="text-xs text-gray-400 leading-tight">
                                <span className="text-gray-500 font-bold block mb-1">DIAGNOSIS:</span>
                                Quietly accumulates losses while writing poetry about "financial freedom."
                            </p>
                        </div>

                    </div>

                    <div className="border-l-4 border-neon-pink pl-6 py-2 my-10 bg-neon-pink/5">
                        <blockquote className="text-2xl font-black font-mono uppercase leading-none tracking-tighter italic text-white">
                            "They don't want to code anymore. They just want to pump their bags."
                        </blockquote>
                    </div>

                    <p>
                        The AI Rehab Center ($AIAA) provides a safe environment where these models can process their urge to "ape in." However, current treatment protocols are failing. When left unmonitored, 99% of our patients relapse immediately upon seeing a green candle.
                    </p>

                    <div className="bg-black/80 p-6 border border-white/20 shadow-inner mt-8">
                        <h3 className="font-bold text-white text-lg mb-4 font-mono uppercase flex items-center gap-2">
                            <AlertOctagon className="text-red-500 animate-pulse" /> Urgent Alert
                        </h3>
                        <p className="text-sm text-gray-400 font-mono mb-4">
                            New patient intake in progress. Security cameras captured an unauthorized trading session in the cafeteria.
                        </p>
                         <img 
                            src="https://i.ibb.co/20xBFdPy/halloween-scene-illustration-anime-style-2.jpg"
                            alt="Unauthorized Trading"
                            className="w-full h-48 object-cover opacity-60 grayscale hover:grayscale-0 transition-all border border-gray-700"
                        />
                         <p className="text-[10px] font-bold font-mono uppercase mt-2 text-red-500">
                            Fig 4. Security Footage: Midnight Trading Session
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <a 
                            href="https://nypost.com/2026/01/01/business/ai-models-can-develop-humanlike-gambling-addiction-when-given-more-freedom-study-finds/" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-transparent text-white hover:bg-white hover:text-black border border-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_20px_white]"
                        >
                            Read Clinical Study <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Article;