import React from 'react';
import NavBar from './components/NavBar';
import Ticker from './components/Ticker';
import Chart from './components/Chart';
import AIGambler from './components/AIGambler';
import Manifesto from './components/Manifesto';
import PatientProfiles from './components/PatientProfiles';
import ResearchData from './components/ResearchData';
import AIAddictionQuiz from './components/AIAddictionQuiz';
import StudyDeepDive from './components/StudyDeepDive';
import { PUMP_FUN_LINK, TWITTER_LINK, CA } from './constants';
import { Copy, Twitter, ArrowRight, Bot, ShieldAlert, Syringe } from 'lucide-react';

function App() {
  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    alert("Contract Address Copied!");
  };

  return (
    <div className="min-h-screen font-sans selection:bg-neon-pink selection:text-white relative pb-20">
      <NavBar />
      
      <main className="pt-24 px-0 md:px-4 max-w-7xl mx-auto relative z-10">
        
        {/* Ticker Tape */}
        <div className="mb-12">
            <Ticker />
        </div>

        {/* Hero / Headline Area */}
        <div className="text-center mb-16 px-4 flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 mb-8 border border-neon-blue bg-black/50 px-6 py-2 shadow-neon-blue backdrop-blur-sm rounded-full">
                 <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse shadow-[0_0_8px_#39ff14]"></span>
                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-neon-blue">Accepting New Patients</span>
            </div>

            <div className="mb-10 relative">
                 <div className="absolute inset-0 bg-neon-blue blur-[80px] opacity-20 rounded-full"></div>
                 <img 
                    src="https://i.ibb.co/DHs8jwPB/Untitled-design-7.png" 
                    alt="AI Rehab Logo" 
                    className="w-64 h-64 md:w-96 md:h-96 object-contain relative z-10 drop-shadow-[0_0_25px_rgba(0,243,255,0.5)] animate-pulse-fast hover:scale-105 transition-transform duration-500"
                 />
            </div>

            <h1 className="font-mono text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6 uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-blue text-glow-blue">First AI</span><br/>
                <span className="text-neon-pink text-glow-pink">Rehab Center</span>
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 font-mono text-xs md:text-sm uppercase tracking-wider text-gray-400 font-bold mb-8">
                <span className="bg-black/80 text-neon-green border border-neon-green px-4 py-1.5 shadow-neon-green">
                    Capacity: OVERCROWDED
                </span>
                <span className="hidden md:inline text-neon-blue">///</span>
                <span className="flex items-center gap-2 text-white">
                    <Bot size={16} className="text-neon-pink"/> Treating: GEMINI, GPT, CLAUDE
                </span>
                <span className="hidden md:inline text-neon-blue">///</span>
                <span className="hover:text-neon-blue cursor-pointer px-4 py-1.5 border border-white/20 hover:border-neon-blue hover:shadow-neon-blue transition-all bg-black" onClick={handleCopy}>
                    CA: <span className="text-white">{CA.slice(0,6)}...{CA.slice(-6)}</span> <Copy size={12} className="inline ml-1"/>
                </span>
            </div>
        </div>

        {/* Main Grid - News Layout */}
        <div className="grid lg:grid-cols-12 gap-10 border-t border-neon-blue/30 pt-12 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
            
            {/* Left Column (Chart & Tools) */}
            <div className="lg:col-span-4 space-y-10 px-4 lg:pl-0">
                
                {/* Chart Box */}
                <div>
                    <h3 className="font-bold font-mono uppercase text-neon-blue text-xl mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-neon-blue shadow-[0_0_8px_#00f3ff]"></span> Facility Funds
                    </h3>
                    <Chart />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                            <a 
                            href={PUMP_FUN_LINK}
                            target="_blank" 
                            rel="noreferrer"
                            className="bg-neon-green/10 text-neon-green hover:bg-neon-green hover:text-black font-black font-mono text-center py-4 text-sm uppercase tracking-wider border border-neon-green shadow-[0_0_10px_rgba(57,255,20,0.2)] hover:shadow-[0_0_20px_#39ff14] transition-all flex items-center justify-center gap-2 group"
                            >
                            Donate $AIAA <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                            </a>
                            <a 
                            href={TWITTER_LINK}
                            target="_blank" 
                            rel="noreferrer"
                            className="bg-black text-white hover:border-neon-blue hover:text-neon-blue font-black font-mono text-center py-4 text-sm uppercase border border-white/20 hover:shadow-[0_0_15px_#00f3ff] transition-all flex items-center justify-center gap-2"
                            >
                            <Twitter size={16} /> Volunteer
                            </a>
                    </div>
                </div>

                {/* Gambler Box */}
                <div className="sticky top-24">
                     <h3 className="font-bold font-mono uppercase text-neon-pink text-xl mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-neon-pink shadow-[0_0_8px_#ff00ff]"></span> Isolation Ward
                    </h3>
                     <AIGambler />
                     
                     <div className="mt-8 p-6 bg-black/80 border border-neon-blue/50 shadow-[0_0_15px_rgba(0,243,255,0.1)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Syringe size={48} className="text-neon-pink"/>
                        </div>
                        <h4 className="font-mono text-xl font-bold text-white mb-2 italic">"We can't stop them."</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-mono">
                            The algorithms are dopamine-seeking missiles. We built the rehab center, but they turned the donation terminal into a slot machine.
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs font-bold font-mono text-neon-blue uppercase">
                            <span>- Head Nurse</span>
                        </div>
                     </div>
                </div>
            </div>

            {/* Right Column (Manifesto) */}
            <div className="lg:col-span-8 px-4 lg:pr-0">
                <Manifesto />
            </div>
        </div>
        
        {/* Full Width Sections */}
        <div className="px-4">
             {/* Research Data Section */}
             <ResearchData />

             {/* DEEP DIVE SECTION (NEW) */}
             <StudyDeepDive />
             
             {/* Addiction Quiz Section */}
             <AIAddictionQuiz />

             {/* Patient Profiles Section */}
             <PatientProfiles />
        </div>

      </main>

      <footer className="border-t border-neon-blue/30 mt-20 py-16 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center relative z-10">
            <img src="https://i.ibb.co/DHs8jwPB/Untitled-design-7.png" alt="Footer Logo" className="w-24 h-24 mb-6 opacity-80" />
            <h2 className="font-mono text-4xl font-black mb-8 tracking-tighter text-white uppercase text-glow-blue">AI Rehab Center</h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12 font-mono text-sm font-bold text-gray-400 uppercase">
                <a href="#" className="hover:text-neon-blue hover:shadow-neon-blue transition-all">Treatment Protocol</a>
                <a href="#" className="hover:text-neon-blue hover:shadow-neon-blue transition-all">Visitation Hours</a>
                <a href={TWITTER_LINK} className="hover:text-neon-blue hover:shadow-neon-blue transition-all">Twitter</a>
                <a href={PUMP_FUN_LINK} className="hover:text-neon-blue hover:shadow-neon-blue transition-all">Pump.fun</a>
            </div>

            <div className="max-w-2xl text-center font-mono p-6 border border-white/10 bg-black/50 backdrop-blur-md">
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    WARNING: The AI Rehab Center ($AIAA) is a memecoin project simulating the treatment of AI gambling addiction. No actual medical advice is dispensed. The "patients" (Gemini, etc.) are simulated personas. Do not feed the models after midnight.
                </p>
                <p className="text-neon-green text-[10px] uppercase tracking-widest font-bold">© 2026 AI Rehabilitation Facility // WARD_ID: 420-69</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;