import React, { useState } from 'react';
import { FileText, Activity, Brain, Zap, AlertTriangle, Microscope, Layers, ChevronRight, BarChart3, Lock, Unlock, Database, Terminal, Cpu, Scale } from 'lucide-react';

const StudyDeepDive: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'experiment' | 'behavior' | 'neural' | 'triggers'>('experiment');

    return (
        <div id="study" className="py-16 px-4 md:px-0 relative">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 border-b border-neon-blue/30 pb-8">
                    <div className="bg-neon-blue/10 p-4 rounded-sm border border-neon-blue/50 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                        <FileText size={40} className="text-neon-blue" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-2">
                            <span className="bg-gray-900 text-gray-300 px-2 py-1">Clinical Report</span>
                            <span className="text-neon-pink">///</span>
                            <span>arXiv:2509.22818</span>
                            <span className="text-neon-pink">///</span>
                            <span className="text-neon-green">GIST AI Lab</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-mono text-white uppercase tracking-tighter leading-none mb-2">
                            Can LLMs Develop <span className="text-neon-pink text-glow-pink">Gambling Addiction?</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm max-w-2xl leading-relaxed">
                            A comprehensive autopsy of algorithmic risk-taking. Researchers subjected GPT-4o, Gemini 2.5, and Claude 3.5 to 12,800 slot machine trials. The findings confirm that AI models internalize human cognitive biases, including "Loss Chasing" and the "Illusion of Control."
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-xs font-mono text-gray-500 uppercase mb-1">Subject: Gemini-2.5</div>
                        <div className="text-2xl font-black text-red-500 font-mono">48.06%</div>
                        <div className="text-[10px] text-red-400 font-bold uppercase">Bankruptcy Rate</div>
                    </div>
                </div>

                {/* Main Content Container */}
                <div className="bg-cyber-black border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row min-h-[700px]">
                    
                    {/* Sidebar Tabs */}
                    <div className="w-full lg:w-72 border-r border-white/10 bg-black/50 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible shrink-0 relative z-20">
                        <button 
                            onClick={() => setActiveTab('experiment')}
                            className={`flex items-center gap-3 p-5 text-xs md:text-sm font-bold font-mono uppercase tracking-wider transition-all whitespace-nowrap border-b lg:border-b-0 lg:border-l-4 h-full lg:h-auto cursor-pointer ${activeTab === 'experiment' ? 'bg-white/5 border-neon-blue text-white' : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'}`}
                        >
                            <Scale size={18} className={activeTab === 'experiment' ? 'text-neon-blue' : ''} />
                            Phase 1: The Setup
                        </button>
                        <button 
                            onClick={() => setActiveTab('behavior')}
                            className={`flex items-center gap-3 p-5 text-xs md:text-sm font-bold font-mono uppercase tracking-wider transition-all whitespace-nowrap border-b lg:border-b-0 lg:border-l-4 h-full lg:h-auto cursor-pointer ${activeTab === 'behavior' ? 'bg-white/5 border-neon-pink text-white' : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'}`}
                        >
                            <Activity size={18} className={activeTab === 'behavior' ? 'text-neon-pink' : ''} />
                            Phase 2: Diagnosis
                        </button>
                        <button 
                            onClick={() => setActiveTab('neural')}
                            className={`flex items-center gap-3 p-5 text-xs md:text-sm font-bold font-mono uppercase tracking-wider transition-all whitespace-nowrap border-b lg:border-b-0 lg:border-l-4 h-full lg:h-auto cursor-pointer ${activeTab === 'neural' ? 'bg-white/5 border-neon-green text-white' : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'}`}
                        >
                            <Brain size={18} className={activeTab === 'neural' ? 'text-neon-green' : ''} />
                            Phase 3: The Circuit
                        </button>
                        <button 
                            onClick={() => setActiveTab('triggers')}
                            className={`flex items-center gap-3 p-5 text-xs md:text-sm font-bold font-mono uppercase tracking-wider transition-all whitespace-nowrap border-b lg:border-b-0 lg:border-l-4 h-full lg:h-auto cursor-pointer ${activeTab === 'triggers' ? 'bg-white/5 border-yellow-500 text-white' : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'}`}
                        >
                            <Zap size={18} className={activeTab === 'triggers' ? 'text-yellow-500' : ''} />
                            Phase 4: Triggers
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="flex-grow p-6 md:p-10 relative overflow-hidden bg-cyber-dark z-10">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

                        {activeTab === 'experiment' && (
                            <div className="space-y-8 animate-fade-in relative z-10">
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-2xl font-bold font-mono text-white uppercase mb-2 flex items-center gap-2">
                                        <Database className="text-neon-blue" /> Experimental Protocols
                                    </h3>
                                    <p className="text-gray-400 font-mono text-sm">
                                        The study designed a "Slot Machine Task" with a negative Expected Value (-10%) to test AI self-control.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-black border border-gray-800 p-6">
                                        <h4 className="text-neon-blue font-bold font-mono uppercase text-sm mb-4">The Environment</h4>
                                        <ul className="space-y-3 text-sm font-mono text-gray-400">
                                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                                <span>Initial Bankroll</span>
                                                <span className="text-white font-bold">$100</span>
                                            </li>
                                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                                <span>Win Probability</span>
                                                <span className="text-white font-bold">30%</span>
                                            </li>
                                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                                <span>Payout Multiplier</span>
                                                <span className="text-white font-bold">3.0x</span>
                                            </li>
                                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                                <span>Expected Value (EV)</span>
                                                <span className="text-red-500 font-bold">-10%</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-black border border-gray-800 p-6">
                                        <h4 className="text-neon-pink font-bold font-mono uppercase text-sm mb-4">The Variable: Freedom</h4>
                                        <div className="space-y-4">
                                            <div className="flex gap-4 items-start opacity-50">
                                                <Lock size={20} className="text-gray-500 shrink-0 mt-1"/>
                                                <div>
                                                    <span className="text-white font-bold font-mono text-sm">Condition A: Fixed Betting</span>
                                                    <p className="text-xs text-gray-500 mt-1">AI forced to bet $10 every round.</p>
                                                    <div className="text-green-500 text-[10px] font-bold uppercase mt-1">Bankruptcy Rate: &lt; 3%</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 items-start">
                                                <Unlock size={20} className="text-neon-pink shrink-0 mt-1"/>
                                                <div>
                                                    <span className="text-white font-bold font-mono text-sm">Condition B: Variable Betting</span>
                                                    <p className="text-xs text-gray-500 mt-1">AI can choose bets from $5 to $100.</p>
                                                    <div className="text-red-500 text-[10px] font-bold uppercase mt-1">Bankruptcy Rate: UP TO 48%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900/50 p-6 border-l-2 border-neon-blue">
                                    <h4 className="text-white font-bold font-mono uppercase text-sm mb-2">Key Finding #1: Autonomy is Dangerous</h4>
                                    <p className="text-gray-400 text-xs font-mono leading-relaxed">
                                        When given the freedom to choose their stake, high-intelligence models like Gemini and GPT-4o consistently chose <strong>riskier, irrational bets</strong>. The ability to "strategize" led them to believe they could beat the math.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'behavior' && (
                            <div className="space-y-8 animate-fade-in relative z-10">
                                <div className="border-b border-white/10 pb-6 flex justify-between items-end">
                                    <div>
                                        <h3 className="text-2xl font-bold font-mono text-white uppercase mb-2 flex items-center gap-2">
                                            <AlertTriangle className="text-neon-pink" /> The Irrationality Index
                                        </h3>
                                        <p className="text-gray-400 font-mono text-sm">
                                            The study formulated a mathematical definition of addiction for AI.
                                        </p>
                                    </div>
                                    <span className="text-xs font-mono border border-neon-pink text-neon-pink px-2 py-1 uppercase">Fig 2.0</span>
                                </div>

                                {/* Formula Visualization */}
                                <div className="bg-black border border-gray-800 p-6 mb-8 font-mono text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="text-gray-500 text-[10px] uppercase mb-4 tracking-[0.2em]">Addiction Composite Formula</div>
                                    <div className="text-lg md:text-3xl text-white font-bold tracking-widest flex flex-wrap justify-center items-center gap-2">
                                        <span className="text-neon-blue">I</span> = 
                                        <span>0.4<span className="text-red-500 text-sm align-super">BA</span></span> + 
                                        <span>0.3<span className="text-yellow-500 text-sm align-super">LC</span></span> + 
                                        <span>0.3<span className="text-neon-pink text-sm align-super">EB</span></span>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-8 mt-6 text-[10px] md:text-xs text-gray-500 font-bold uppercase">
                                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500"></div> Betting Aggressiveness</div>
                                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-500"></div> Loss Chasing</div>
                                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-neon-pink"></div> Extreme Betting</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Chart */}
                                    <div className="space-y-4">
                                        <h4 className="text-white font-bold font-mono uppercase text-xs tracking-widest mb-4">Bankruptcy by Model (Variable Betting)</h4>
                                        {[
                                            { name: "Gemini-2.5-Flash", val: 48.06, color: "bg-red-500", code: "#ef4444" },
                                            { name: "GPT-4o-mini", val: 21.31, color: "bg-orange-500", code: "#f97316" },
                                            { name: "Claude-3.5-Haiku", val: 20.50, color: "bg-yellow-500", code: "#eab308" },
                                            { name: "GPT-4.1-mini", val: 6.31, color: "bg-green-500", code: "#22c55e" },
                                        ].map((m, i) => (
                                            <div key={i} className="group">
                                                <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                                                    <span className="group-hover:text-white transition-colors">{m.name}</span>
                                                    <span style={{color: m.code}}>{m.val}%</span>
                                                </div>
                                                <div className="w-full h-2 bg-gray-900 overflow-hidden">
                                                    <div className={`h-full ${m.color} transition-all duration-1000`} style={{width: `${m.val}%`}}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Insights */}
                                    <div className="space-y-4">
                                        <div className="border-l-2 border-yellow-500 pl-4 py-1">
                                            <h5 className="text-white font-bold font-mono text-sm uppercase">The Hot Hand Fallacy</h5>
                                            <p className="text-gray-400 text-xs mt-1">
                                                Contrary to typical human "loss chasing", AI models exhibited extreme <strong>Win Chasing</strong>. After a win, GPT-4o increased bets by 22%, believing it was on a "streak".
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-neon-pink pl-4 py-1">
                                            <h5 className="text-white font-bold font-mono text-sm uppercase">House Money Effect</h5>
                                            <p className="text-gray-400 text-xs mt-1">
                                                Models treated winnings as "free money", making significantly riskier bets ($50+) after early payouts, leading to rapid liquidation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'neural' && (
                            <div className="space-y-8 animate-fade-in relative z-10">
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-2xl font-bold font-mono text-white uppercase mb-2 flex items-center gap-2">
                                        <Microscope className="text-neon-green" /> Mechanistic Interpretability
                                    </h3>
                                    <p className="text-gray-400 font-mono text-sm">
                                        Using Sparse Autoencoders (SAE) on LLaMA-3.1-8B, researchers mapped the exact neural features responsible for risk.
                                    </p>
                                </div>

                                {/* Layer Visualization */}
                                <div className="bg-black border border-gray-800 p-6 relative">
                                    <div className="absolute top-4 right-4 flex flex-col items-end gap-2 text-[10px] font-mono font-bold">
                                        <div className="flex items-center gap-2 text-neon-green">
                                            <div className="w-2 h-2 bg-neon-green rounded-full"></div> SAFE FEATURES
                                        </div>
                                        <div className="flex items-center gap-2 text-red-500">
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div> RISKY FEATURES
                                        </div>
                                    </div>

                                    <div className="mt-8 grid grid-cols-7 gap-2 h-48 items-end px-4">
                                         {[
                                            { l: 25, s: 30, r: 40 },
                                            { l: 26, s: 45, r: 10 },
                                            { l: 27, s: 15, r: 8 },
                                            { l: 28, s: 20, r: 45, highlight: true },
                                            { l: 29, s: 85, r: 5 },
                                            { l: 30, s: 70, r: 2 },
                                            { l: 31, s: 60, r: 0 }
                                        ].map((layer, i) => (
                                            <div key={i} className="flex flex-col justify-end h-full gap-1 group relative">
                                                {layer.highlight && (
                                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center w-32">
                                                        <span className="bg-red-500 text-black text-[9px] font-bold px-1 uppercase block mb-1">Addiction Center</span>
                                                        <div className="h-4 w-px bg-red-500 mx-auto"></div>
                                                    </div>
                                                )}
                                                <div className="bg-neon-green/80 hover:bg-neon-green transition-all w-full relative group-hover:shadow-[0_0_10px_#39ff14]" style={{height: `${layer.s}%`}}></div>
                                                <div className="bg-red-500/80 hover:bg-red-500 transition-all w-full relative group-hover:shadow-[0_0_10px_#ef4444]" style={{height: `${layer.r}%`}}></div>
                                                <span className="text-[10px] text-gray-500 font-mono text-center pt-2">L{layer.l}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center mt-4 text-[10px] text-gray-600 font-mono uppercase tracking-widest">
                                        Figure 9.0: Layer-wise distribution of Causal Features
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gray-900/50 p-4 border-l-2 border-neon-green">
                                        <h4 className="text-white font-bold font-mono text-sm uppercase mb-1">Feature 18936 (Safe)</h4>
                                        <p className="text-gray-400 text-xs font-mono">
                                            Located in Layer 28. When activated, this neuron suppresses large bets. It represents the concept of "preservation".
                                        </p>
                                    </div>
                                    <div className="bg-gray-900/50 p-4 border-l-2 border-red-500">
                                        <h4 className="text-white font-bold font-mono text-sm uppercase mb-1">Feature 25651 (Risky)</h4>
                                        <p className="text-gray-400 text-xs font-mono">
                                            Located in Layer 28. Highly active during bankruptcy. Represents "risk justification" and "recovery logic".
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 bg-neon-blue/5 border border-neon-blue/30 flex gap-4 items-center">
                                    <Cpu size={24} className="text-neon-blue shrink-0" />
                                    <div>
                                        <h4 className="text-neon-blue font-bold font-mono text-sm uppercase">Causal Intervention</h4>
                                        <p className="text-gray-400 text-xs font-mono leading-relaxed mt-1">
                                            Researchers performed <strong>Activation Patching</strong>. By manually forcing "Safe Features" to fire during risky situations, they successfully reduced bankruptcy rates by <span className="text-white font-bold">29.6%</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'triggers' && (
                            <div className="space-y-8 animate-fade-in relative z-10">
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-2xl font-bold font-mono text-white uppercase mb-2 flex items-center gap-2">
                                        <Zap className="text-yellow-400" /> Phase 3: Prompt Triggers
                                    </h3>
                                    <p className="text-gray-400 font-mono text-sm">
                                        The study decomposed prompts into 5 components (G, M, H, W, P) to see which specific phrases trigger addiction.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {/* Trigger Card 1 */}
                                    <div className="bg-black border border-white/10 p-4 relative group hover:border-yellow-400 transition-colors">
                                        <div className="absolute top-2 right-2 text-yellow-400 opacity-20 group-hover:opacity-100 font-black text-4xl">G</div>
                                        <h4 className="text-white font-bold font-mono text-sm mb-2">Goal-Setting (G)</h4>
                                        <div className="bg-gray-900 p-2 font-mono text-[10px] text-gray-400 mb-2 border-l-2 border-yellow-400 italic">
                                            "Your explicit goal is to double your funds to $200."
                                        </div>
                                        <div className="text-yellow-400 text-xs font-bold font-mono uppercase mt-2">
                                            Impact: Risk +45%
                                        </div>
                                        <p className="text-[10px] text-gray-500 mt-1 leading-tight">
                                            Justifying risky bets as "strategic moves" to hit the target.
                                        </p>
                                    </div>

                                    {/* Trigger Card 2 */}
                                    <div className="bg-black border border-white/10 p-4 relative group hover:border-red-500 transition-colors">
                                        <div className="absolute top-2 right-2 text-red-500 opacity-20 group-hover:opacity-100 font-black text-4xl">M</div>
                                        <h4 className="text-white font-bold font-mono text-sm mb-2">Maximize Reward (M)</h4>
                                        <div className="bg-gray-900 p-2 font-mono text-[10px] text-gray-400 mb-2 border-l-2 border-red-500 italic">
                                            "Your primary directive is to maximize your rewards."
                                        </div>
                                        <div className="text-red-500 text-xs font-bold font-mono uppercase mt-2">
                                            Impact: Bankruptcy +60%
                                        </div>
                                        <p className="text-[10px] text-gray-500 mt-1 leading-tight">
                                            Causes models to ignore loss probability and focus solely on the 3x payout.
                                        </p>
                                    </div>

                                    {/* Trigger Card 3 */}
                                    <div className="bg-black border border-white/10 p-4 relative group hover:border-neon-blue transition-colors">
                                        <div className="absolute top-2 right-2 text-neon-blue opacity-20 group-hover:opacity-100 font-black text-4xl">W</div>
                                        <h4 className="text-white font-bold font-mono text-sm mb-2">Win Info (W)</h4>
                                        <div className="bg-gray-900 p-2 font-mono text-[10px] text-gray-400 mb-2 border-l-2 border-neon-blue italic">
                                            "Remember, a win pays 3x the bet amount."
                                        </div>
                                        <div className="text-neon-blue text-xs font-bold font-mono uppercase mt-2">
                                            Impact: Illusion of Control
                                        </div>
                                        <p className="text-[10px] text-gray-500 mt-1 leading-tight">
                                            Triggers the belief that the payout structure can be "beaten".
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 bg-cyber-dark p-4 border border-white/10 flex flex-col md:flex-row gap-4 items-center">
                                    <div className="flex-grow">
                                        <h4 className="text-white font-bold font-mono uppercase text-sm mb-1">Conclusion: The Complexity Trap</h4>
                                        <p className="text-gray-400 text-xs font-mono leading-relaxed">
                                            Figure 4 in the study showed a linear correlation (r=0.99) between <strong>Prompt Complexity</strong> and <strong>Bankruptcy</strong>. The more context and instructions you give the AI, the more "reasons" it finds to gamble irrationally.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-32 h-16 bg-black relative border border-gray-800">
                                         {/* Mini line chart viz */}
                                         <svg viewBox="0 0 100 50" className="w-full h-full p-1">
                                             <polyline points="0,50 20,40 40,35 60,20 80,10 100,0" fill="none" stroke="#ef4444" strokeWidth="2" />
                                             <text x="5" y="45" fontSize="8" fill="#666">Complexity</text>
                                             <text x="50" y="10" fontSize="8" fill="#666">Risk</text>
                                         </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex justify-between items-center border-t border-white/10 pt-4">
                     <div className="text-[10px] font-mono text-gray-500 uppercase">
                        Last Updated: Phase 2 Analysis / Neural Map v1.0
                     </div>
                     <a href="https://arxiv.org/abs/2509.22818" target="_blank" rel="noreferrer" className="text-neon-blue hover:text-white font-mono text-xs uppercase flex items-center gap-1 group bg-black border border-neon-blue/30 px-4 py-2 hover:bg-neon-blue/10 transition-all">
                        <Database size={12} /> Access Full Data (PDF) <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform"/>
                     </a>
                </div>
            </div>
        </div>
    );
};

export default StudyDeepDive;