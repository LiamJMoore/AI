import React, { useState } from 'react';
import { Menu, X, Copy, Check, Zap, Activity } from 'lucide-react';
import { CA, PUMP_FUN_LINK, TWITTER_LINK } from '../constants';

const NavBar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 border-b border-neon-blue/50 shadow-neon-blue backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 group">
                <div className="text-white font-mono font-black text-xl md:text-2xl tracking-tighter uppercase flex items-center gap-2 group-hover:text-neon-blue transition-colors text-glow-blue">
                    <Activity size={24} className="text-neon-pink group-hover:animate-pulse" />
                    <span className="hidden md:inline">AI ANONYMOUS</span>
                    <span className="md:hidden">$AIAA</span>
                </div>
            </a>
            <div className="hidden md:flex items-center gap-2 text-xs font-bold font-mono text-neon-green border-l border-white/20 pl-4">
               <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-[0_0_8px_#39ff14]"></span>
               FACILITY: OPEN
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#narrative" className="text-gray-300 font-bold hover:text-neon-blue hover:text-glow-blue px-1 transition-all font-mono text-xs uppercase tracking-wider">
                Admission Logs
              </a>
              <a href="#study" className="text-gray-300 font-bold hover:text-neon-green hover:text-glow-green px-1 transition-all font-mono text-xs uppercase tracking-wider flex items-center gap-1">
                Clinical Study <span className="text-[9px] bg-neon-green text-black px-1 rounded-sm">NEW</span>
              </a>
              <a href="#gamble" className="text-gray-300 font-bold hover:text-neon-pink hover:text-glow-pink px-1 transition-all font-mono text-xs uppercase tracking-wider">
                Patient Zero
              </a>
              <button 
                onClick={copyToClipboard}
                className="bg-black/50 hover:bg-neon-blue/10 text-neon-blue px-4 py-2 text-xs font-mono border border-neon-blue/50 hover:border-neon-blue hover:shadow-neon-blue transition-all flex items-center gap-2 group"
              >
                {copied ? <Check size={14} className="text-neon-green"/> : <Copy size={14}/>}
                <span className="font-bold group-hover:text-white transition-colors">{CA.slice(0, 4)}...{CA.slice(-4)}</span>
              </button>
              <a 
                href={PUMP_FUN_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-neon-green text-black px-6 py-2.5 font-black uppercase text-sm border border-transparent hover:bg-transparent hover:border-neon-green hover:text-neon-green hover:shadow-neon-green transition-all flex items-center gap-2 clip-path-slant"
              >
                 Fund Treatment <Zap size={16} fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-neon-blue hover:bg-white/10 focus:outline-none border border-neon-blue/30"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-neon-blue shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#narrative" onClick={handleNavClick} className="text-white hover:text-neon-blue block px-3 py-4 font-black font-mono text-lg uppercase border-b border-white/10">Admissions</a>
            <a href="#study" onClick={handleNavClick} className="text-white hover:text-neon-green block px-3 py-4 font-black font-mono text-lg uppercase border-b border-white/10">Clinical Study</a>
            <a href="#gamble" onClick={handleNavClick} className="text-white hover:text-neon-pink block px-3 py-4 font-black font-mono text-lg uppercase border-b border-white/10">Patient Zero</a>
             <a href={PUMP_FUN_LINK} onClick={handleNavClick} target="_blank" rel="noreferrer" className="bg-neon-green text-black block px-3 py-4 font-black uppercase mt-4 text-center shadow-neon-green">FUND THE CURE ($AIAA)</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;