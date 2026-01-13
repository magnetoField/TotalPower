import React, { useState, useCallback } from 'react';
import TitleScreen from '@/components/game/TitleScreen';
import StatsDisplay from '@/components/game/StatsDisplay';
import EventDisplay from '@/components/game/EventDisplay';
import OutcomeDisplay from '@/components/game/OutcomeDisplay';
import GameOver from '@/components/game/GameOver';
import { GameEvent, getRandomEvent } from '@/data/gameEvents';

interface GameState {
  popularity: number;
  civilRights: number;
  fear: number;
  money: number;
  month: number;
  usedEventIds: string[];
}

type GamePhase = 'title' | 'event' | 'outcome' | 'gameover';

const initialState: GameState = {
  popularity: 50,
  civilRights: 70,
  fear: 20,
  money: 60,
  month: 0,
  usedEventIds: [],
};

const Index: React.FC = () => {
  const [gamePhase, setGamePhase] = useState<GamePhase>('title');
  const [gameState, setGameState] = useState<GameState>(initialState);
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null);
  const [lastOutcome, setLastOutcome] = useState<{
    outcome: string;
    effects: GameEvent['choices'][0]['effects'];
  } | null>(null);
  const [gameResult, setGameResult] = useState<{
    won: boolean;
    isDictator: boolean;
  } | null>(null);

  const clamp = (value: number, min: number, max: number) => 
    Math.max(min, Math.min(max, value));

  const checkGameOver = useCallback((state: GameState): { isOver: boolean; won: boolean; isDictator: boolean } => {
    // Lose conditions
    if (state.money <= 0) {
      return { isOver: true, won: false, isDictator: false };
    }
    if (state.popularity <= 0) {
      return { isOver: true, won: false, isDictator: false };
    }
    if (state.fear > 100) {
      return { isOver: true, won: false, isDictator: false };
    }

    // Check if 48 months passed
    if (state.month >= 48) {
      // Dictator victory
      if (state.civilRights < 20 && state.fear > 70) {
        return { isOver: true, won: true, isDictator: true };
      }
      // Democratic victory
      if (state.popularity >= 50) {
        return { isOver: true, won: true, isDictator: false };
      }
      // Lost election
      return { isOver: true, won: false, isDictator: false };
    }

    return { isOver: false, won: false, isDictator: false };
  }, []);

  const startGame = useCallback(() => {
    setGameState(initialState);
    setGamePhase('event');
    
    const event = getRandomEvent([]);
    setCurrentEvent(event);
  }, []);

  const handleChoice = useCallback((choiceIndex: number) => {
    if (!currentEvent) return;

    const choice = currentEvent.choices[choiceIndex];
    
    setGameState(prev => {
      const newState = {
        ...prev,
        popularity: clamp(prev.popularity + (choice.effects.popularity || 0), 0, 100),
        civilRights: clamp(prev.civilRights + (choice.effects.civilRights || 0), 0, 100),
        fear: clamp(prev.fear + (choice.effects.fear || 0), 0, 150),
        money: clamp(prev.money + (choice.effects.money || 0), 0, 100),
        usedEventIds: [...prev.usedEventIds, currentEvent.id],
      };
      return newState;
    });

    setLastOutcome({
      outcome: choice.outcome,
      effects: choice.effects,
    });
    setGamePhase('outcome');
  }, [currentEvent]);

  const handleContinue = useCallback(() => {
    setGameState(prev => {
      const newState = {
        ...prev,
        month: prev.month + 1,
      };

      const result = checkGameOver(newState);
      if (result.isOver) {
        setGameResult({ won: result.won, isDictator: result.isDictator });
        setGamePhase('gameover');
      } else {
        // Get next event
        const event = getRandomEvent(newState.usedEventIds);
        if (event) {
          setCurrentEvent(event);
          setGamePhase('event');
        } else {
          // Reset used events if we've seen them all
          const freshEvent = getRandomEvent([]);
          setCurrentEvent(freshEvent);
          newState.usedEventIds = [];
          setGamePhase('event');
        }
      }

      return newState;
    });
  }, [checkGameOver]);

  const handleRestart = useCallback(() => {
    setGameState(initialState);
    setCurrentEvent(null);
    setLastOutcome(null);
    setGameResult(null);
    setGamePhase('title');
  }, []);

  return (
    <div className="min-h-screen bg-background crt-scanlines crt-flicker">
      {gamePhase === 'title' && (
        <TitleScreen onStart={startGame} />
      )}

      {(gamePhase === 'event' || gamePhase === 'outcome') && (
        <div className="min-h-screen p-4 flex flex-col">
          <div className="text-responsive-xl text-glow text-center mb-4 border-b border-primary pb-2">
            PRESIDE FOR LIFE
          </div>
          
          <div className="flex-1 grid md:grid-cols-2 gap-4 max-w-6xl mx-auto w-full">
            <div className="order-2 md:order-1">
              <StatsDisplay
                popularity={gameState.popularity}
                civilRights={gameState.civilRights}
                fear={gameState.fear}
                money={gameState.money}
                month={gameState.month}
              />
            </div>
            
            <div className="order-1 md:order-2">
              {gamePhase === 'event' && currentEvent && (
                <EventDisplay
                  event={currentEvent}
                  onChoice={handleChoice}
                />
              )}
              
              {gamePhase === 'outcome' && lastOutcome && (
                <OutcomeDisplay
                  outcome={lastOutcome.outcome}
                  effects={lastOutcome.effects}
                  onContinue={handleContinue}
                />
              )}
            </div>
          </div>
          
          <div className="text-responsive-xs text-muted-foreground text-center mt-4 pt-2 border-t border-primary">
            AMBER TERMINAL v1.0 │ CLASSIFIED │ EYES ONLY
          </div>
        </div>
      )}

      {gamePhase === 'gameover' && gameResult && (
        <div className="min-h-screen p-4 flex items-center justify-center">
          <GameOver
            won={gameResult.won}
            isDictator={gameResult.isDictator}
            stats={{
              popularity: gameState.popularity,
              civilRights: gameState.civilRights,
              fear: gameState.fear,
              money: gameState.money,
            }}
            onRestart={handleRestart}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
