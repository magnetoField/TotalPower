import React from 'react';
import { GameEvent } from '@/data/gameEvents';

interface EventDisplayProps {
  event: GameEvent;
  onChoice: (choiceIndex: number) => void;
  disabled?: boolean;
}

const EventDisplay: React.FC<EventDisplayProps> = ({ event, onChoice, disabled }) => {
  return (
    <div className="border border-primary p-4 crt-glow">
      <div className="text-responsive-lg text-glow mb-4 text-center border-b border-primary pb-2">
        ══════ {event.title} ══════
      </div>
      
      <div className="text-responsive-base text-glow mb-6 leading-relaxed">
        {event.description}
      </div>
      
      <div className="border-t border-primary pt-4">
        <div className="text-responsive-sm text-muted-foreground mb-3">
          SELECT YOUR RESPONSE:
        </div>
        
        <div className="flex flex-col gap-3">
          {event.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => onChoice(index)}
              disabled={disabled}
              className="text-left text-responsive-sm text-glow p-3 border border-primary 
                         hover:bg-primary hover:text-primary-foreground 
                         transition-colors duration-100
                         disabled:opacity-50 disabled:cursor-not-allowed
                         focus:outline-none focus:bg-primary focus:text-primary-foreground"
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDisplay;
