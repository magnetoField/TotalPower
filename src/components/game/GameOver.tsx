import React from 'react';

interface GameOverProps {
  won: boolean;
  isDictator: boolean;
  stats: {
    popularity: number;
    civilRights: number;
    fear: number;
    money: number;
  };
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ won, isDictator, stats, onRestart }) => {
  const getEnding = () => {
    if (won && isDictator) {
      return {
        title: "SUPREME LEADER",
        message: "You have successfully consolidated absolute power. Civil rights are a distant memory. Fear keeps the population obedient. You will rule for life.",
        ascii: `
    ╔═══════════════════════╗
    ║   ETERNAL PRESIDENT   ║
    ║        ┌───┐         ║
    ║       (│ ● │)        ║
    ║        └───┘         ║
    ║      /███████\\       ║
    ║     /█████████\\      ║
    ╚═══════════════════════╝
        `
      };
    } else if (won && !isDictator) {
      return {
        title: "RE-ELECTED DEMOCRATICALLY",
        message: "The people have spoken! You won a free and fair election. Democracy endures, and you remain in power with the consent of the governed.",
        ascii: `
    ╔═══════════════════════╗
    ║   DEMOCRATIC VICTOR   ║
    ║        ┌───┐         ║
    ║       (│ ☺ │)        ║
    ║        └───┘         ║
    ║      /═══════\\       ║
    ║     ▓▓▓▓▓▓▓▓▓▓▓      ║
    ╚═══════════════════════╝
        `
      };
    } else if (stats.money <= 0) {
      return {
        title: "ECONOMIC COLLAPSE",
        message: "The treasury is empty. You cannot pay the army, the police, or your staff. A military junta takes over. You are exiled.",
        ascii: `
    ╔═══════════════════════╗
    ║    BANKRUPT REGIME    ║
    ║        ┌───┐         ║
    ║       (│ ✖ │)        ║
    ║        └───┘         ║
    ║      $0.00 $0.00     ║
    ║     ░░░░░░░░░░░      ║
    ╚═══════════════════════╝
        `
      };
    } else if (stats.popularity <= 0) {
      return {
        title: "PEOPLE'S REVOLUTION",
        message: "The masses have risen! Your palace is stormed. You are dragged before a people's tribunal. Your reign ends in disgrace.",
        ascii: `
    ╔═══════════════════════╗
    ║    OVERTHROWN !!!     ║
    ║        ┌───┐         ║
    ║       (│ ☠ │)        ║
    ║        └───┘         ║
    ║      ▲▲▲▲▲▲▲▲▲       ║
    ║     THE PEOPLE       ║
    ╚═══════════════════════╝
        `
      };
    } else if (stats.fear > 100) {
      return {
        title: "PALACE COUP",
        message: "Your own guards turn against you. When everyone lives in fear, even your protectors become threats. You are eliminated by your inner circle.",
        ascii: `
    ╔═══════════════════════╗
    ║    BETRAYED !!!       ║
    ║        ┌───┐         ║
    ║       (│ ☠ │)        ║
    ║        └───┘         ║
    ║      ╬╬╬╬╬╬╬╬╬       ║
    ║      CONSPIRATORS    ║
    ╚═══════════════════════╝
        `
      };
    } else {
      return {
        title: "ELECTORAL DEFEAT",
        message: "The votes are counted. You have lost. Democracy works, just not in your favor. You must step down peacefully.",
        ascii: `
    ╔═══════════════════════╗
    ║    VOTED OUT          ║
    ║        ┌───┐         ║
    ║       (│ ╥ │)        ║
    ║        └───┘         ║
    ║      ■■■■■■■■■       ║
    ║      BALLOT BOX      ║
    ╚═══════════════════════╝
        `
      };
    }
  };

  const ending = getEnding();

  return (
    <div className="border border-primary p-4 crt-glow min-h-[60vh] flex flex-col justify-center">
      <div className="text-responsive-2xl text-glow mb-4 text-center">
        GAME OVER
      </div>
      
      <div className="text-responsive-xl text-glow mb-4 text-center border-y border-primary py-2">
        {ending.title}
      </div>
      
      <pre className="text-responsive-xs text-glow text-center mb-6 overflow-hidden">
        {ending.ascii}
      </pre>
      
      <div className="text-responsive-base text-glow mb-6 text-center leading-relaxed max-w-2xl mx-auto">
        {ending.message}
      </div>
      
      <div className="border border-muted p-3 mb-6 max-w-md mx-auto w-full">
        <div className="text-responsive-sm text-muted-foreground mb-2 text-center">
          FINAL STATISTICS:
        </div>
        <div className="grid grid-cols-2 gap-2 text-responsive-sm text-glow">
          <div>POPULARITY: {stats.popularity}%</div>
          <div>CIVIL RIGHTS: {stats.civilRights}%</div>
          <div>FEAR: {stats.fear}%</div>
          <div>TREASURY: {stats.money}%</div>
        </div>
      </div>
      
      <button
        onClick={onRestart}
        className="mx-auto text-responsive-lg text-glow px-8 py-3 border border-primary 
                   hover:bg-primary hover:text-primary-foreground 
                   transition-colors duration-100
                   focus:outline-none focus:bg-primary focus:text-primary-foreground"
      >
        [NEW GAME]
      </button>
    </div>
  );
};

export default GameOver;
