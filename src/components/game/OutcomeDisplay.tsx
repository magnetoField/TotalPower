import React from 'react';

interface OutcomeDisplayProps {
  outcome: string;
  effects: {
    popularity?: number;
    civilRights?: number;
    fear?: number;
    money?: number;
  };
  onContinue: () => void;
}

const formatEffect = (value: number | undefined, label: string): string | null => {
  if (value === undefined || value === 0) return null;
  const sign = value > 0 ? '+' : '';
  return `${label}: ${sign}${value}`;
};

const OutcomeDisplay: React.FC<OutcomeDisplayProps> = ({ outcome, effects, onContinue }) => {
  const effectStrings = [
    formatEffect(effects.popularity, 'POPULARITY'),
    formatEffect(effects.civilRights, 'CIVIL RIGHTS'),
    formatEffect(effects.fear, 'FEAR'),
    formatEffect(effects.money, 'TREASURY'),
  ].filter(Boolean);

  return (
    <div className="border border-primary p-4 crt-glow">
      <div className="text-responsive-lg text-glow mb-4 text-center border-b border-primary pb-2">
        ══════ OUTCOME ══════
      </div>
      
      <div className="text-responsive-base text-glow mb-6 leading-relaxed">
        {outcome}
      </div>
      
      {effectStrings.length > 0 && (
        <div className="border border-muted p-3 mb-6">
          <div className="text-responsive-sm text-muted-foreground text-glow mb-2">
            EFFECTS:
          </div>
          <div className="grid gap-1">
            {effectStrings.map((effect, index) => (
              <div key={index} className="text-responsive-sm text-glow">
                ► {effect}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <button
        onClick={onContinue}
        className="w-full text-responsive-base text-glow p-3 border border-primary 
                   hover:bg-primary hover:text-primary-foreground 
                   transition-colors duration-100
                   focus:outline-none focus:bg-primary focus:text-primary-foreground"
      >
        [PRESS TO CONTINUE]
      </button>
    </div>
  );
};

export default OutcomeDisplay;
