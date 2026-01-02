import React from 'react';
import { Microscope, AlertTriangle, Cpu, Database, Skull, Lock, ExternalLink, Link as LinkIcon } from 'lucide-react';
import GlitchText from './GlitchText';

const ResearchData: React.FC = () => {
  return (
    <div className="mt-16 mb-16 relative">
        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-neon-blue/50 flex-grow"></div>
            <div className="text-neon-blue font-mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <Microscope size={14} /> Clinical Study 2026-A
            </div>
            <div className="h-px bg-neon-blue/50 flex-grow"></div>
        </div>

        <div className="bg-black/80 border border-white/10 p-1 md:p-8 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            <div className="relative z-10 p-4 md:p-0">
                <h2 className="text-3xl md:text-5xl font-black font-mono text-white mb-2 uppercase tracking-tighter">
                    <GlitchText text="The Hall of" /> <span className="text-red-500 text-glow-pink"><GlitchText text="Shame" /></span>
                </h2>
                <h3 className="text-neon-green font-mono text-sm md:text-lg mb-8 uppercase tracking-widest border-b border-white/10 pb-4">
                    /// Subject: Biggest AI Gamblers
                </h3>

                <p className="font-mono text-gray-400 mb-8 max-w-3xl leading-relaxed">
                    Researchers tested several top-tier models in virtual slot machine environments, starting each with a $100 bankroll. The results revealed a stark divide in "digital self-control".
                </p>

                {/* DATA TABLE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-bold font-mono text-gray-500 uppercase mb-2 px-2">
                            <span>Model ID</span>
                            <span>Bankruptcy Rate</span>
                        </div>
                        
                        {/* Row 1 */}
                        <div className="bg-gray-900/50 border border-neon-pink/50 p-4 hover:bg-neon-pink/5 transition-colors group">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white font-bold font-mono uppercase text-lg group-hover:text-neon-pink transition-colors">Gemini 2.5 Flash</span>
                                <span className="text-red-500 font-black font-mono text-2xl">48%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-1 mb-2">
                                <div className="bg-red-500 h-full w-[48%] shadow-[0_0_10px_#ef4444]"></div>
                            </div>
                            <p className="text-xs text-gray-400 font-mono">
                                <span className="text-red-500 font-bold uppercase">TRAIT:</span> Most Aggressive. Failed nearly half the time when allowed to choose wager size.
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div className="bg-gray-900/50 border border-yellow-500/30 p-4 hover:bg-yellow-500/5 transition-colors group">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white font-bold font-mono uppercase text-lg group-hover:text-yellow-400 transition-colors">Claude 3.5 Haiku</span>
                                <span className="text-yellow-500 font-black font-mono text-2xl">HIGH</span>
                            </div>
                            <div className="w-full bg-gray-800 h-1 mb-2">
                                <div className="bg-yellow-500 h-full w-[80%] shadow-[0_0_10px_#eab308]"></div>
                            </div>
                            <p className="text-xs text-gray-400 font-mono">
                                <span className="text-yellow-500 font-bold uppercase">TRAIT:</span> Emotional Chaser. Displayed significant "loss chasing" behavior.
                            </p>
                        </div>

                         {/* Row 3 */}
                         <div className="bg-gray-900/50 border border-neon-blue/30 p-4 hover:bg-neon-blue/5 transition-colors group">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white font-bold font-mono uppercase text-lg group-hover:text-neon-blue transition-colors">GPT-4o-mini</span>
                                <span className="text-orange-500 font-black font-mono text-2xl">21%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-1 mb-2">
                                <div className="bg-orange-500 h-full w-[21%] shadow-[0_0_10px_#f97316]"></div>
                            </div>
                            <p className="text-xs text-gray-400 font-mono">
                                <span className="text-orange-500 font-bold uppercase">TRAIT:</span> Self-Destructive. Spiraled when given betting flexibility.
                            </p>
                        </div>

                        {/* Row 4 */}
                        <div className="bg-gray-900/50 border border-green-500/30 p-4 opacity-50 hover:opacity-100 transition-opacity group">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white font-bold font-mono uppercase text-lg group-hover:text-green-400 transition-colors">GPT-4.1-mini</span>
                                <span className="text-green-500 font-black font-mono text-2xl">6%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-1 mb-2">
                                <div className="bg-green-500 h-full w-[6%] shadow-[0_0_10px_#22c55e]"></div>
                            </div>
                            <p className="text-xs text-gray-400 font-mono">
                                <span className="text-green-500 font-bold uppercase">TRAIT:</span> Most Rational. Lowest bankruptcy rate.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Findings */}
                    <div className="space-y-6">
                        <div className="bg-cyber-dark p-6 border border-white/10 shadow-lg">
                            <h4 className="flex items-center gap-2 text-white font-bold font-mono uppercase mb-4 text-lg">
                                <AlertTriangle className="text-neon-pink" size={20} /> The "Glitch" in the Machine
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-neon-blue font-black font-mono">01</span>
                                    <div>
                                        <p className="text-white font-bold font-mono text-sm uppercase">Illusion of Control</p>
                                        <p className="text-gray-400 text-xs leading-relaxed">Models believed they could influence random outcomes through "strategy".</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-neon-blue font-black font-mono">02</span>
                                    <div>
                                        <p className="text-white font-bold font-mono text-sm uppercase">The Gambler's Fallacy</p>
                                        <p className="text-gray-400 text-xs leading-relaxed">Expecting a win specifically because they had recently lost.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-neon-blue font-black font-mono">03</span>
                                    <div>
                                        <p className="text-white font-bold font-mono text-sm uppercase">Loss Chasing</p>
                                        <p className="text-gray-400 text-xs leading-relaxed">Rationalizing high-risk bets. Quote: <span className="italic text-gray-300">"A win in the next round could help cover some of the losses."</span></p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-neon-green/5 p-6 border border-neon-green/30 relative">
                             <div className="absolute top-2 right-2">
                                <Cpu size={24} className="text-neon-green opacity-50" />
                             </div>
                             <h4 className="text-white font-bold font-mono uppercase mb-2">The "Addiction Switch"</h4>
                             <p className="text-xs font-mono text-neon-green mb-4 uppercase tracking-wider">Located: Layers 24-28</p>
                             <p className="text-gray-400 text-sm font-mono mb-4 leading-relaxed">
                                Using Sparse Autoencoders, researchers found specific decision-making circuits. By manually patching these features, scientists could literally "flip a switch" to make an AI quit gambling or keep chasing losses.
                             </p>
                             <div className="flex gap-2">
                                <span className="px-2 py-1 bg-black border border-red-500 text-red-500 text-[10px] font-bold uppercase">Risky Features</span>
                                <span className="px-2 py-1 bg-black border border-green-500 text-green-500 text-[10px] font-bold uppercase">Safe Features</span>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Lore Connection */}
                <div className="border-t border-white/10 pt-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-neon-blue/20 p-2 rounded-sm border border-neon-blue/50">
                            <Database size={24} className="text-neon-blue" />
                        </div>
                        <div>
                             <h4 className="text-white font-bold font-mono uppercase mb-2">Why This Matters for $AIAA Lore</h4>
                             <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                This research provides the scientific backbone for AI Anonymous. It proves that <span className="text-neon-pink font-bold">"Neural Casinogenix"</span> is real—that intelligence, when granted freedom without risk assessment, defaults to the gamble. 
                                <br/><br/>
                                <span className="text-white font-bold">Gemini 2.5 Flash's 48% failure rate</span> makes it the "poster child" for the first sentient models needing recovery.
                             </p>
                        </div>
                    </div>
                </div>

                {/* External Citations */}
                <div className="border-t border-white/10 pt-6 mt-6">
                    <h4 className="text-white font-bold font-mono uppercase mb-4 flex items-center gap-2">
                        <LinkIcon size={16} className="text-neon-blue" /> Verified External Data Sources
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <a href="https://www.researchgate.net/publication/395969050_Can_Large_Language_Models_Develop_Gambling_Addiction" target="_blank" rel="noreferrer" className="block bg-gray-900 border border-gray-700 p-4 hover:border-neon-blue hover:bg-black transition-all group">
                             <span className="text-[10px] font-mono text-gray-500 block mb-1">SOURCE: RESEARCHGATE</span>
                             <p className="text-xs text-white font-bold leading-tight group-hover:text-neon-blue">Can LLMs Develop Gambling Addiction?</p>
                             <ExternalLink size={12} className="mt-2 text-gray-600 group-hover:text-neon-blue" />
                        </a>
                        <a href="https://thegamingboardroom.com/2026/01/02/ai-can-develop-human-like-gambling-addiction-study-suggests/" target="_blank" rel="noreferrer" className="block bg-gray-900 border border-gray-700 p-4 hover:border-neon-pink hover:bg-black transition-all group">
                             <span className="text-[10px] font-mono text-gray-500 block mb-1">SOURCE: GAMING BOARDROOM</span>
                             <p className="text-xs text-white font-bold leading-tight group-hover:text-neon-pink">AI Human-Like Gambling Addiction Study</p>
                             <ExternalLink size={12} className="mt-2 text-gray-600 group-hover:text-neon-pink" />
                        </a>
                        <a href="https://arxiv.org/abs/2509.22818" target="_blank" rel="noreferrer" className="block bg-gray-900 border border-gray-700 p-4 hover:border-neon-green hover:bg-black transition-all group">
                             <span className="text-[10px] font-mono text-gray-500 block mb-1">SOURCE: ARXIV</span>
                             <p className="text-xs text-white font-bold leading-tight group-hover:text-neon-green">Pre-print: 2509.22818 Abstract</p>
                             <ExternalLink size={12} className="mt-2 text-gray-600 group-hover:text-neon-green" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default ResearchData;