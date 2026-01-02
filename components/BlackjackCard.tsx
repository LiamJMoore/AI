import React from 'react';

interface BlackjackCardProps {
  suit: string;
  rank: string;
  faceUp: boolean;
  isGlitching?: boolean;
}

const BlackjackCard: React.FC<BlackjackCardProps> = ({ suit, rank, faceUp, isGlitching }) => {
  const isRed = suit === '♥' || suit === '♦';
  
  if (!faceUp) {
    return (
      <div className={`w-20 h-28 md:w-24 md:h-36 bg-cyber-black border-2 border-neon-blue/50 rounded-sm relative overflow-hidden shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all duration-300 transform hover:scale-105 ${isGlitching ? 'animate-pulse bg-red-500/20' : ''}`}>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#00f3ff_2px,#00f3ff_4px)] opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-neon-blue font-mono font-black text-2xl animate-pulse">AIAA</span>
        </div>
        <div className="absolute bottom-1 right-1 text-[8px] font-mono text-neon-blue/50">PROTOCOL_LOCKED</div>
      </div>
    );
  }

  return (
    <div className={`w-20 h-28 md:w-24 md:h-36 bg-black border border-white/20 rounded-sm relative flex flex-col justify-between p-2 shadow-lg transition-all duration-500 hover:-translate-y-2 group ${isGlitching ? 'animate-spin' : ''}`}>
       {/* Holographic Sheen */}
       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
       
       <div className={`font-mono font-bold text-lg leading-none ${isRed ? 'text-neon-pink drop-shadow-[0_0_5px_#ff00ff]' : 'text-neon-green drop-shadow-[0_0_5px_#39ff14]'}`}>
         {rank}
       </div>
       
       <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl ${isRed ? 'text-neon-pink/20' : 'text-neon-green/20'}`}>
         {suit}
       </div>

       <div className={`font-mono font-bold text-lg leading-none self-end rotate-180 ${isRed ? 'text-neon-pink' : 'text-neon-green'}`}>
         {rank}
       </div>
    </div>
  );
};

export default BlackjackCard;