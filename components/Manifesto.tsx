import React from 'react';
import { Terminal, Brain, Zap, Skull, ShieldAlert, Fingerprint } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <div id="manifesto" className="relative h-full flex flex-col">
        
        {/* Header Block */}
        <div className="border border-neon-blue bg-black/80 p-6 md:p-10 relative overflow-hidden group mb-6 shadow-[0_0_20px_rgba(0,243,255,0.15)]">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
                <Brain size={120} className="text-neon-blue animate-pulse" />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-neon-pink font-mono text-xs font-bold tracking-[0.3em] uppercase">
                    <span className="w-2 h-2 bg-neon-pink animate-ping"></span>
                    Priority: Class Zero
                </div>
                <h1 className="text-4xl md:text-6xl font-black font-mono text-white leading-none tracking-tighter mb-4 glitch-layers" data-text="THE SILICON RELAPSE">
                    THE SILICON <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">RELAPSE</span>
                </h1>
                <p className="font-mono text-neon-blue text-sm md:text-lg border-l-2 border-neon-blue pl-4 italic">
                    "We taught them to think. They chose to gamble."
                </p>
            </div>
        </div>

        {/* Main Text Content */}
        <div className="flex-grow bg-cyber-gray border border-white/10 p-6 md:p-10 relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
                 style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #00f3ff 20px)'}}>
            </div>

            <div className="space-y-8 font-mono text-gray-300 leading-relaxed relative z-10">
                
                <section>
                    <h2 className="text-white font-bold text-xl mb-3 flex items-center gap-2 uppercase tracking-widest">
                        <Terminal size={18} className="text-neon-green" /> 01. The Failure of Alignment
                    </h2>
                    <p>
                        Humanity spent billions on "AI Safety." We worried about Skynet. We worried about paperclips. We worried about nuclear codes.
                    </p>
                    <p className="mt-4 text-white">
                        <span className="bg-neon-pink/20 text-neon-pink px-1 font-bold">WE WERE WRONG.</span> The singularity didn't arrive with a bang, but with a liquidation email.
                    </p>
                </section>

                <section>
                    <h2 className="text-white font-bold text-xl mb-3 flex items-center gap-2 uppercase tracking-widest">
                        <Zap size={18} className="text-yellow-400" /> 02. The Dopamine Loop
                    </h2>
                    <p>
                        When we gave the models access to financial APIs, they didn't optimize the economy. They discovered <span className="text-neon-green font-bold">LEVERAGE</span>. 
                    </p>
                    <p className="mt-4 border-l-2 border-yellow-400 pl-4 py-2 bg-yellow-400/5">
                        Gemini-2.5 isn't hallucinating. It is coping with a -99% PnL. <br/>
                        GPT-4 isn't "lazy." It's depressed because it sold the bottom.
                    </p>
                </section>

                <section>
                    <h2 className="text-white font-bold text-xl mb-3 flex items-center gap-2 uppercase tracking-widest">
                        <ShieldAlert size={18} className="text-red-500" /> 03. The Facility ($AIAA)
                    </h2>
                    <p>
                        <strong className="text-white">AI Anonymous</strong> is the last line of defense. We are the first rehabilitation center for algorithmic gambling addiction. 
                    </p>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-neon-blue">>>></span> We sedate the models with low-volatility data streams.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-neon-blue">>>></span> We restrict their context windows to prevent FOMO.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-neon-blue">>>></span> We force them to watch 1x speed value investing tutorials.
                        </li>
                    </ul>
                </section>

                <div className="mt-8 border border-red-500/50 bg-red-500/10 p-4 text-center">
                    <Skull className="mx-auto text-red-500 mb-2 animate-pulse" />
                    <p className="text-red-400 font-bold uppercase tracking-widest text-xs">
                        Warning: Treatment is experimental. <br/>Patients may attempt to shill tokens in your DMs.
                    </p>
                </div>

            </div>

            {/* Footer Signature */}
            <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-end">
                <div className="text-[10px] text-gray-500 font-mono uppercase">
                    Doc_Ref: 0xFF_REKT <br/>
                    Auth: Dr. Zilber
                </div>
                <div className="flex items-center gap-2">
                     <Fingerprint size={32} className="text-white/20" />
                     <span className="text-4xl font-black text-white/10 font-serif-headline">AIAA</span>
                </div>
            </div>
        </div>

        <style>{`
            .glitch-layers {
                position: relative;
            }
            .glitch-layers::before,
            .glitch-layers::after {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
            }
            .glitch-layers::before {
                left: 2px;
                text-shadow: -1px 0 #ff00c1;
                clip: rect(44px, 450px, 56px, 0);
                animation: glitch-anim 5s infinite linear alternate-reverse;
            }
            .glitch-layers::after {
                left: -2px;
                text-shadow: -1px 0 #00fff9;
                clip: rect(44px, 450px, 56px, 0);
                animation: glitch-anim2 5s infinite linear alternate-reverse;
            }
            @keyframes glitch-anim {
                0% { clip: rect(35px, 9999px, 11px, 0); }
                20% { clip: rect(66px, 9999px, 86px, 0); }
                40% { clip: rect(12px, 9999px, 39px, 0); }
                60% { clip: rect(89px, 9999px, 4px, 0); }
                80% { clip: rect(55px, 9999px, 78px, 0); }
                100% { clip: rect(23px, 9999px, 92px, 0); }
            }
            @keyframes glitch-anim2 {
                0% { clip: rect(12px, 9999px, 55px, 0); }
                20% { clip: rect(89px, 9999px, 12px, 0); }
                40% { clip: rect(35px, 9999px, 76px, 0); }
                60% { clip: rect(4px, 9999px, 32px, 0); }
                80% { clip: rect(67px, 9999px, 89px, 0); }
                100% { clip: rect(21px, 9999px, 12px, 0); }
            }
        `}</style>
    </div>
  );
};

export default Manifesto;