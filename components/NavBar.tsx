import React, { useState } from 'react';
import { Menu, X, Copy, Check, Zap } from 'lucide-react';
import { CA, PUMP_FUN_LINK, TWITTER_LINK } from '../constants';

const NavBar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="fixed w-full z-50 bg-paper-white border-b-2 border-black shadow-hard z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 group">
                <div className="bg-black text-white font-serif font-black text-3xl px-3 py-1 tracking-tighter uppercase transform group-hover:-rotate-2 transition-transform border-2 border-transparent group-hover:border-black group-hover:bg-crypto-green group-hover:text-black">
                    All In ($AI)
                </div>
            </a>
            <div className="hidden md:flex items-center gap-2 text-xs font-bold font-mono text-black border-l-2 border-black pl-4">
               <span className="w-3 h-3 bg-crypto-green border border-black rounded-full animate-pulse"></span>
               MARKET: OPEN
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#narrative" className="text-black font-bold hover:bg-highlight-yellow px-1 transition-colors font-sans text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-black">
                The Story
              </a>
              <a href="#gamble" className="text-black font-bold hover:bg-highlight-yellow px-1 transition-colors font-sans text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-black">
                The Addict
              </a>
              <button 
                onClick={copyToClipboard}
                className="bg-gray-100 hover:bg-white text-black px-4 py-2 text-xs font-mono border-2 border-black shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2 active:bg-crypto-green"
              >
                {copied ? <Check size={14}/> : <Copy size={14}/>}
                <span className="font-bold">{CA.slice(0, 4)}...{CA.slice(-4)}</span>
              </button>
              <a 
                href={PUMP_FUN_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-crypto-green text-black px-6 py-2.5 font-black uppercase text-sm border-2 border-black shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2"
              >
                 Buy All In <Zap size={16} fill="black" />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-black hover:bg-gray-200 focus:outline-none border-2 border-black shadow-hard-sm"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-paper-white border-b-2 border-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#narrative" className="text-black hover:bg-highlight-yellow block px-3 py-2 font-black font-sans text-xl uppercase border-b border-black">The Story</a>
            <a href="#gamble" className="text-black hover:bg-highlight-yellow block px-3 py-2 font-black font-sans text-xl uppercase border-b border-black">The Addict</a>
             <a href={PUMP_FUN_LINK} target="_blank" rel="noreferrer" className="bg-crypto-green text-black block px-3 py-4 font-black uppercase mt-4 text-center border-2 border-black shadow-hard-sm">BUY ALL IN ($AI)</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;