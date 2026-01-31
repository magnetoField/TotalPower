import React from 'react';

interface TitleScreenProps {
  onStart: () => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="border border-primary p-6 md:p-8 crt-glow max-w-5xl w-full">
        <pre className="text-responsive-xs md:text-responsive-sm text-glow text-center text-no-line mb-6">
{`
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║   █████████╗  ██████╗  █████████╗   ████╗   ████╗               ║
║   █████████║ ██╔═══██╗ █████████║  ██╔═██╗  ████║               ║
║      ███╔══╝ ██║   ██║    ███╔══╝ ████████╗ ████║               ║
║      ███║    ██║   ██║    ███║    ██╔══██╔╝ ████████╗           ║
║      ███║     ██████╔╝    ███║    ██║  ██║  ████████║           ║
║      ╚══╝     ╚═════╝     ╚══╝    ╚═╝  ╚═╝  ╚═══════╝           ║
║ █████████╗   ██████╗  ███╗           ███╗ █████████╗ ████████╗  ║
║ ███╔════██╗ ██╔═══██╗ ███║    ███╗   ███║ ███╔═════╝ ███╔══███╗ ║
║ ███║    ██║ ██║   ██║  ███╗  █████╗  ██╔╝ ██████╗    ███║  ███║ ║
║ █████████╔╝ ██║   ██║   ███╗██╔══██╗██╔╝  ███╔══╝    ████████╔╝ ║
║ ███╔═════╝   ██████╔╝    ████╔╝  ╚████║   █████████╗ ███╔══███╗ ║
║ ╚══╝         ╚═════╝     ╚═══╝    ╚═══╝   ╚════════╝ ╚══╝  ╚══╝ ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
`}
        </pre>
        
        <div className="text-responsive-base text-glow text-center mb-8 leading-relaxed">
          You are the newly elected President of a fragile democracy.
          <br />
          <br />
          The next election is in 48 months.
          <br />
          Will you preserve democracy... or seize absolute power?
        </div>
        
        <div className="border border-muted p-4 mb-8">
          <div className="text-responsive-sm text-muted-foreground mb-3 text-center">
            ══════ OBJECTIVES ══════
          </div>
          <div className="text-responsive-sm text-glow space-y-2">
            <div>► Maintain POPULARITY above 50% to win the election democratically</div>
            <div>► OR crush CIVIL RIGHTS below 20% and raise FEAR above 70% to become dictator</div>
            <div>► Don't let TREASURY reach 0 or face a military coup</div>
            <div>► Don't let POPULARITY reach 0 or face revolution</div>
            <div>► Don't let FEAR exceed 100 or your own guards will turn on you</div>
          </div>
        </div>
        
        <button
          onClick={onStart}
          className="w-full text-responsive-lg text-glow p-4 border border-primary 
                     hover:bg-primary hover:text-primary-foreground 
                     transition-colors duration-100
                     focus:outline-none focus:bg-primary focus:text-primary-foreground"
        >
          [PRESS TO BEGIN]
        </button>
        
        <div className="text-responsive-xs text-muted-foreground text-center mt-6">
          v1.0 │ AMBER TERMINAL SYSTEMS │ (C) 2024
        </div>
      </div>
    </div>
  );
};

export default TitleScreen;
