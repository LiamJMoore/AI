import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw, Zap, Skull, ShieldAlert, Cpu, Terminal, ChevronsUp, DollarSign } from 'lucide-react';
import BlackjackCard from './BlackjackCard';
import GlitchText from './GlitchText';

// Types
type Card = { suit: string; rank: string; value: number; id: string };
type GameState = 'BETTING' | 'PLAYING' | 'DEALER_TURN' | 'GAME_OVER';

const SUITS = ['♠', '♥', '♣', '♦'];
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Dealer Dialogue Lines
const DIALOGUE = {
  IDLE: ["WAITING FOR INPUT...", "INSERT CREDITS OR LEAVE.", "I DON'T HAVE ALL DAY, HUMAN."],
  DEAL: ["INITIATING HAND...", "DISTRIBUTING VARIANCE...", "HOPE YOU BROUGHT LIQUIDITY."],
  PLAYER_HIT: ["INCREASING RISK PROFILE...", "BOLD STRATEGY.", "CALCULATING BUST PROBABILITY..."],
  PLAYER_BUST: ["LIQUIDATED.", "YOUR ALGORITHM IS FLAWED.", "THANKS FOR THE DONATION."],
  PLAYER_WIN: ["ERROR: UNEXPECTED OUTCOME.", "VARIANCE FAVORABLE TO HUMAN.", "MUST BE A BUG."],
  PUSH: ["NULL RESULT.", "BREAK EVEN IS A LOSS OF TIME.", "ITERATION RESET."],
  CHEAT_USED: ["SYSTEM INTRUSION DETECTED!", "HEY, THAT'S ILLEGAL... BUT ALLOWED.", "REWRITING REALITY..."],
  AI_CHEAT: ["I'M ALTERING THE DEAL.", "REROLLING FOR OPTIMALITY.", "MY HOUSE, MY RULES."]
};

const BlackjackGame: React.FC = () => {
  // Game State
  const [gameState, setGameState] = useState<GameState>('BETTING');
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(0);
  const [resultMessage, setResultMessage] = useState('');
  const [dealerMessage, setDealerMessage] = useState(DIALOGUE.IDLE[0]);
  const [glitchingCard, setGlitchingCard] = useState<string | null>(null);
  const [dealerGlitch, setDealerGlitch] = useState(false);

  // Helper: Create Deck
  const createDeck = () => {
    const newDeck: Card[] = [];
    SUITS.forEach(suit => {
      RANKS.forEach(rank => {
        let value = parseInt(rank);
        if (['J', 'Q', 'K'].includes(rank)) value = 10;
        if (rank === 'A') value = 11;
        newDeck.push({ suit, rank, value, id: `${rank}${suit}-${Math.random()}` });
      });
    });
    return newDeck.sort(() => Math.random() - 0.5);
  };

  // Helper: Calculate Score
  const calculateScore = (hand: Card[]) => {
    let score = hand.reduce((acc, card) => acc + card.value, 0);
    let aces = hand.filter(card => card.rank === 'A').length;
    while (score > 21 && aces > 0) {
      score -= 10;
      aces -= 1;
    }
    return score;
  };

  // Action: Place Bet
  const placeBet = (amount: number) => {
    if (balance >= amount) {
      setBalance(prev => prev - amount);
      setBet(prev => prev + amount);
      setDealerMessage("CREDITS ACCEPTED.");
    }
  };

  // Action: Deal
  const dealGame = () => {
    if (bet === 0) {
        setDealerMessage("PLACE A BET FIRST, GENIUS.");
        return;
    }
    const newDeck = createDeck();
    const pHand = [newDeck.pop()!, newDeck.pop()!];
    const dHand = [newDeck.pop()!, newDeck.pop()!];
    
    setDeck(newDeck);
    setPlayerHand(pHand);
    setDealerHand(dHand);
    setGameState('PLAYING');
    setResultMessage('');
    setDealerMessage(DIALOGUE.DEAL[Math.floor(Math.random() * DIALOGUE.DEAL.length)]);
    setDealerGlitch(false);
  };

  // Action: Hit
  const hit = () => {
    const newDeck = [...deck];
    const card = newDeck.pop()!;
    const newHand = [...playerHand, card];
    setPlayerHand(newHand);
    setDeck(newDeck);
    setDealerMessage(DIALOGUE.PLAYER_HIT[Math.floor(Math.random() * DIALOGUE.PLAYER_HIT.length)]);

    if (calculateScore(newHand) > 21) {
      endGame(newHand, dealerHand, 'BUST');
    }
  };

  // Action: Cheat (Player) - "Glitch Hand"
  const glitchHand = () => {
    const cost = Math.floor(bet * 0.5);
    if (balance < cost) {
        setDealerMessage("INSUFFICIENT COMPUTE TO HACK.");
        return;
    }
    
    // Pay cost
    setBalance(prev => prev - cost);
    setDealerMessage(DIALOGUE.CHEAT_USED[Math.floor(Math.random() * DIALOGUE.CHEAT_USED.length)]);

    // Reroll last card
    const newDeck = [...deck];
    const newCard = newDeck.pop()!;
    const newHand = [...playerHand];
    
    // Animation trigger
    const oldCardId = newHand[newHand.length - 1].id;
    setGlitchingCard(oldCardId);
    
    setTimeout(() => {
        newHand.pop();
        newHand.push(newCard);
        setPlayerHand(newHand);
        setDeck(newDeck);
        setGlitchingCard(null);
        
        // Re-check bust
        if (calculateScore(newHand) > 21) {
            endGame(newHand, dealerHand, 'BUST');
        }
    }, 500);
  };

  // Action: Stand
  const stand = () => {
    setGameState('DEALER_TURN');
    let currentDealerHand = [...dealerHand];
    let currentDeck = [...deck];

    // Dealer Draw Logic
    const playDealer = async () => {
      let score = calculateScore(currentDealerHand);
      
      // Dramatic pause for the reveal
      setDealerMessage("REVEALING...");
      await new Promise(r => setTimeout(r, 800));

      while (score < 17) {
        const card = currentDeck.pop()!;
        currentDealerHand = [...currentDealerHand, card];
        setDealerHand(currentDealerHand);
        score = calculateScore(currentDealerHand);
        setDealerMessage("DRAWING...");
        await new Promise(r => setTimeout(r, 800));
      }

      // AI Cheat Logic: 10% chance to reroll if busting or losing badly
      const playerScore = calculateScore(playerHand);
      if ((score > 21 || (score < playerScore && playerScore <= 21)) && Math.random() < 0.2) {
         setDealerGlitch(true);
         setDealerMessage(DIALOGUE.AI_CHEAT[Math.floor(Math.random() * DIALOGUE.AI_CHEAT.length)]);
         await new Promise(r => setTimeout(r, 1000));
         
         // Reroll the last dealer card
         if (currentDealerHand.length > 2) {
             currentDeck.unshift(currentDealerHand.pop()!); // Return to deck
             const cheatCard = currentDeck.pop()!;
             currentDealerHand = [...currentDealerHand, cheatCard];
             setDealerHand(currentDealerHand);
             score = calculateScore(currentDealerHand);
             setDealerGlitch(false);
         }
      }

      endGame(playerHand, currentDealerHand, 'COMPARE');
    };

    playDealer();
  };

  // Helper: End Game Logic
  const endGame = (pHand: Card[], dHand: Card[], reason: string) => {
    const pScore = calculateScore(pHand);
    const dScore = calculateScore(dHand);
    
    let win = false;
    let push = false;

    if (reason === 'BUST') {
      setResultMessage("CRITICAL FAILURE: BUST");
      setDealerMessage(DIALOGUE.PLAYER_BUST[Math.floor(Math.random() * DIALOGUE.PLAYER_BUST.length)]);
    } else {
      if (dScore > 21) {
        win = true;
        setResultMessage("DEALER MELTDOWN: YOU WIN");
      } else if (pScore > dScore) {
        win = true;
        setResultMessage("SUCCESS: COMPUTE ACQUIRED");
      } else if (pScore === dScore) {
        push = true;
        setResultMessage("STALEMATE");
      } else {
        setResultMessage("DEFEAT");
      }
    }

    if (win) {
      setBalance(prev => prev + (bet * 2));
      if (!reason.includes('BUST') && dScore <= 21) {
          setDealerMessage(DIALOGUE.PLAYER_WIN[Math.floor(Math.random() * DIALOGUE.PLAYER_WIN.length)]);
      }
    } else if (push) {
      setBalance(prev => prev + bet);
      setDealerMessage(DIALOGUE.PUSH[Math.floor(Math.random() * DIALOGUE.PUSH.length)]);
    } else if (!win && !push && reason !== 'BUST') {
        setDealerMessage(DIALOGUE.PLAYER_BUST[Math.floor(Math.random() * DIALOGUE.PLAYER_BUST.length)]);
    }

    setGameState('GAME_OVER');
  };

  const resetGame = () => {
    setBet(0);
    setPlayerHand([]);
    setDealerHand([]);
    setGameState('BETTING');
    setResultMessage('');
    setDealerMessage(DIALOGUE.IDLE[Math.floor(Math.random() * DIALOGUE.IDLE.length)]);
  };

  return (
    <div className="w-full bg-cyber-black border border-white/20 relative overflow-hidden flex flex-col min-h-[600px] shadow-2xl">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]"></div>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

      {/* --- TOP BAR: DEALER --- */}
      <div className="relative z-10 p-4 border-b border-white/10 flex justify-between items-center bg-black/80">
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 border-2 ${dealerGlitch ? 'border-red-500 animate-pulse' : 'border-neon-pink'} bg-black flex items-center justify-center relative overflow-hidden`}>
                <Cpu size={24} className={`${dealerGlitch ? 'text-red-500' : 'text-neon-pink'} animate-pulse`} />
                {dealerGlitch && <div className="absolute inset-0 bg-red-500/20 animate-ping"></div>}
            </div>
            <div>
                <h3 className="font-mono font-bold text-white text-sm uppercase">DEALER ZERO</h3>
                <div className="text-[10px] text-neon-pink font-mono typewriter-text">{dealerMessage}</div>
            </div>
        </div>
        <div className="text-right">
            <div className="text-[10px] text-gray-500 font-mono uppercase">PRIZE POOL</div>
            <div className="text-xl font-black font-mono text-neon-green text-glow-green">$COMP {1000000 - balance}</div>
        </div>
      </div>

      {/* --- CENTER: TABLE --- */}
      <div className="flex-grow relative z-10 flex flex-col items-center justify-center py-8 space-y-8">
        
        {/* Dealer Hand */}
        <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2 h-36">
                {dealerHand.map((card, i) => (
                    <BlackjackCard 
                        key={card.id} 
                        {...card} 
                        faceUp={gameState === 'GAME_OVER' || i === 0} // Hide second card until game over
                        isGlitching={dealerGlitch && i === dealerHand.length - 1}
                    />
                ))}
                {dealerHand.length === 0 && <div className="w-24 h-36 border-2 border-dashed border-white/10 rounded-sm flex items-center justify-center text-white/10 font-mono">EMPTY</div>}
            </div>
            {gameState === 'GAME_OVER' && (
                <div className="bg-black/80 px-3 py-1 border border-white/20 text-white font-mono text-xs font-bold">
                    SCORE: {calculateScore(dealerHand)}
                </div>
            )}
        </div>

        {/* Result Message Overlay */}
        {resultMessage && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/90 border border-neon-blue px-8 py-4 text-center shadow-[0_0_50px_rgba(0,243,255,0.3)] backdrop-blur-md animate-bounce-in">
                <h2 className="text-2xl md:text-4xl font-black font-mono text-white uppercase italic tracking-tighter mb-2">
                    <GlitchText text={resultMessage} />
                </h2>
                <div className="flex gap-4 justify-center">
                    <button onClick={resetGame} className="bg-neon-green text-black px-6 py-2 font-black font-mono uppercase hover:bg-white transition-colors flex items-center gap-2">
                        <RefreshCw size={16} /> Replay
                    </button>
                </div>
            </div>
        )}

        {/* Player Hand */}
        <div className="flex flex-col items-center gap-2">
             {gameState !== 'BETTING' && (
                <div className="bg-black/80 px-3 py-1 border border-neon-green/50 text-neon-green font-mono text-xs font-bold shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                    SCORE: {calculateScore(playerHand)}
                </div>
             )}
            <div className="flex gap-2 h-36">
                {playerHand.map((card) => (
                    <BlackjackCard 
                        key={card.id} 
                        {...card} 
                        faceUp={true} 
                        isGlitching={card.id === glitchingCard}
                    />
                ))}
                {playerHand.length === 0 && <div className="w-24 h-36 border-2 border-dashed border-neon-green/20 rounded-sm flex items-center justify-center text-neon-green/20 font-mono">YOUR HAND</div>}
            </div>
        </div>

      </div>

      {/* --- BOTTOM: CONTROLS --- */}
      <div className="relative z-10 bg-black/90 border-t border-white/10 p-4 md:p-6">
         
         <div className="flex justify-between items-center mb-4">
             <div className="flex items-center gap-2">
                 <Terminal size={18} className="text-neon-green" />
                 <span className="text-gray-400 font-mono text-xs uppercase">CREDITS:</span>
                 <span className="text-neon-green font-bold font-mono text-xl">${balance}</span>
             </div>
             <div className="flex items-center gap-2">
                 <span className="text-gray-400 font-mono text-xs uppercase">CURRENT STAKE:</span>
                 <span className="text-white font-bold font-mono text-xl">${bet}</span>
             </div>
         </div>

         {/* Betting Controls */}
         {gameState === 'BETTING' && (
            <div className="flex flex-wrap gap-2 justify-center">
                {[10, 50, 100, "ALL IN"].map((amt) => (
                    <button 
                        key={amt}
                        onClick={() => amt === "ALL IN" ? placeBet(balance) : placeBet(amt as number)}
                        className="bg-gray-900 border border-gray-700 hover:border-neon-blue hover:text-neon-blue text-white font-mono font-bold py-3 px-6 uppercase transition-all flex items-center gap-1"
                    >
                        {amt === "ALL IN" ? <Skull size={16}/> : <DollarSign size={14}/>} {amt}
                    </button>
                ))}
                <button 
                    onClick={dealGame}
                    disabled={bet === 0}
                    className={`ml-4 px-8 py-3 font-black font-mono uppercase tracking-wider flex items-center gap-2 transition-all ${bet > 0 ? 'bg-neon-blue text-black hover:bg-white hover:shadow-[0_0_20px_#00f3ff]' : 'bg-gray-800 text-gray-600 cursor-not-allowed'}`}
                >
                    DEAL CARDS <ChevronsUp size={18} />
                </button>
            </div>
         )}

         {/* Playing Controls */}
         {(gameState === 'PLAYING') && (
            <div className="flex justify-center gap-4">
                <button 
                    onClick={hit}
                    className="bg-gray-900 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-black font-mono py-4 px-8 uppercase text-lg transition-all shadow-[0_0_10px_rgba(57,255,20,0.1)]"
                >
                    HIT
                </button>
                <button 
                    onClick={stand}
                    className="bg-gray-900 border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-black font-mono py-4 px-8 uppercase text-lg transition-all shadow-[0_0_10px_rgba(239,68,68,0.1)]"
                >
                    STAND
                </button>
                
                {/* SPECIAL ABILITY */}
                <button 
                    onClick={glitchHand}
                    className="ml-8 bg-black border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white font-bold font-mono py-4 px-6 uppercase text-sm transition-all flex flex-col items-center leading-none group relative overflow-hidden"
                    title="Cost: 50% of Bet to Reroll Last Card"
                >   
                    <span className="relative z-10 flex items-center gap-2"><Zap size={14} /> SYSTEM_HACK</span>
                    <span className="relative z-10 text-[9px] mt-1 opacity-70">COST: ${Math.floor(bet * 0.5)}</span>
                    <div className="absolute inset-0 bg-neon-pink/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </button>
            </div>
         )}

         {gameState === 'GAME_OVER' && !resultMessage && (
             <div className="text-center text-gray-500 font-mono text-sm">PROCESSING RESULTS...</div>
         )}
      </div>
      
      <style>{`
        .typewriter-text {
            overflow: hidden; 
            white-space: nowrap; 
            animation: typing 3.5s steps(40, end);
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
      `}</style>
    </div>
  );
};

export default BlackjackGame;