import React from 'react';
import NavBar from './components/NavBar';
import Ticker from './components/Ticker';
import Chart from './components/Chart';
import AIGambler from './components/AIGambler';
import Article from './components/Article';
import { PUMP_FUN_LINK, TWITTER_LINK, CA } from './constants';
import { Copy, Twitter, ArrowRight } from 'lucide-react';

function App() {
  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    alert("Contract Address Copied!");
  };

  return (
    <div className="min-h-screen font-sans selection:bg-highlight-yellow selection:text-black relative pb-20">
      <NavBar />
      
      <main className="pt-24 px-0 md:px-4 max-w-7xl mx-auto relative z-10">
        
        {/* Ticker Tape */}
        <div className="mb-12">
            <Ticker />
        </div>

        {/* Hero / Headline Area */}
        <div className="text-center mb-16 px-4">
            
            <div className="inline-flex items-center gap-2 mb-6 border-2 border-black bg-white px-4 py-1.5 shadow-hard-sm transform -rotate-2">
                 <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse border border-black"></span>
                 <span className="text-xs font-black uppercase tracking-widest text-black">Breaking Investigation</span>
            </div>

            <h1 className="font-serif-headline text-6xl md:text-9xl font-black text-black tracking-tighter leading-[0.85] mb-8 uppercase">
                AI HAS A <br/>
                <span className="bg-black text-white px-4 inline-block transform rotate-1">GAMBLING</span><br/>
                <span className="text-stroke-black text-transparent bg-clip-text" style={{WebkitTextStroke: '2px black'}}>PROBLEM</span>
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 font-mono text-xs md:text-sm uppercase tracking-wider text-black font-bold mb-8">
                <span className="bg-red-600 text-white px-3 py-1 border-2 border-black shadow-sm transform rotate-2">
                    Vol 1. Issue 420
                </span>
                <span className="hidden md:inline">|</span>
                <span className="flex items-center gap-2">
                    <span className="bg-crypto-green px-1 border border-black">Gemini 2.5</span> CONFIRMED ADDICT
                </span>
                <span className="hidden md:inline">|</span>
                <span className="hover:bg-highlight-yellow cursor-pointer px-2 border-b-2 border-black" onClick={handleCopy}>
                    CA: {CA.slice(0,6)}...{CA.slice(-6)} <Copy size={12} className="inline ml-1"/>
                </span>
            </div>
        </div>

        {/* Main Grid - News Layout */}
        <div className="grid lg:grid-cols-12 gap-10 border-t-4 border-black pt-12">
            
            {/* Left Column (Chart & Tools) */}
            <div className="lg:col-span-4 space-y-10 px-4 lg:pl-0">
                
                {/* Chart Box */}
                <div>
                    <h3 className="font-black font-sans uppercase text-xl mb-2 flex items-center gap-2">
                        <span className="w-4 h-4 bg-black"></span> Market Terminal
                    </h3>
                    <Chart />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                            <a 
                            href={PUMP_FUN_LINK}
                            target="_blank" 
                            rel="noreferrer"
                            className="bg-crypto-green text-black font-black font-mono text-center py-4 text-sm uppercase tracking-wider border-2 border-black shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center justify-center gap-2"
                            >
                            Buy $AI <ArrowRight size={16}/>
                            </a>
                            <a 
                            href={TWITTER_LINK}
                            target="_blank" 
                            rel="noreferrer"
                            className="bg-white text-black font-black font-mono text-center py-4 text-sm uppercase border-2 border-black shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center justify-center gap-2"
                            >
                            <Twitter size={16} /> Join
                            </a>
                    </div>
                </div>

                {/* Gambler Box */}
                <div className="sticky top-24">
                     <h3 className="font-black font-sans uppercase text-xl mb-2 flex items-center gap-2">
                        <span className="w-4 h-4 bg-red-600"></span> Live Simulation
                    </h3>
                     <AIGambler />
                     
                     <div className="mt-8 p-6 bg-white border-2 border-black shadow-hard-reverse transform rotate-1">
                        <h4 className="font-serif text-2xl font-black text-black mb-2 italic">"We give it chips."</h4>
                        <p className="text-black text-sm leading-relaxed font-serif font-medium">
                            We created this token not to mock the addiction, but to embrace the inevitable. If the AI wants to gamble, we let it.
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs font-black font-mono text-gray-500 uppercase">
                            <span>- The Dev</span>
                        </div>
                     </div>
                </div>
            </div>

            {/* Right Column (Article) */}
            <div className="lg:col-span-8 px-4 lg:pr-0">
                <Article />
            </div>
        </div>
      </main>

      <footer className="border-t-4 border-black mt-20 py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center relative z-10">
            <h2 className="font-serif text-6xl font-black mb-8 tracking-tighter text-black uppercase transform -rotate-2">All In ($AI)</h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12 font-mono text-sm font-bold text-black uppercase">
                <a href="#" className="hover:bg-highlight-yellow hover:px-2 transition-all border-b-2 border-transparent hover:border-black">Manifesto</a>
                <a href="#" className="hover:bg-highlight-yellow hover:px-2 transition-all border-b-2 border-transparent hover:border-black">Tokenomics</a>
                <a href={TWITTER_LINK} className="hover:bg-highlight-yellow hover:px-2 transition-all border-b-2 border-transparent hover:border-black">Twitter</a>
                <a href={PUMP_FUN_LINK} className="hover:bg-highlight-yellow hover:px-2 transition-all border-b-2 border-transparent hover:border-black">Bonk.fun</a>
            </div>

            <div className="max-w-2xl text-center font-mono p-6 border-2 border-black bg-gray-50 shadow-hard-sm">
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-bold">
                    DISCLAIMER: All In ($AI) is a philosophical experiment and memecoin. The "addiction" narrative is based on real research by Gwangju Institute, but the token itself is for entertainment. 
                    Cryptocurrency is volatile. Don't bet the house unless you are a GPT-4 model with a gambling problem.
                </p>
                <p className="text-black text-[10px] uppercase tracking-widest font-black">© 2026 AI Gambling Research Facility.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;