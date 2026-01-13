import React from 'react';

interface StatsDisplayProps {
  popularity: number;
  civilRights: number;
  fear: number;
  money: number;
  month: number;
}

const StatBar: React.FC<{ label: string; value: number; max?: number }> = ({ 
  label, 
  value, 
  max = 100 
}) => {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));
  const barLength = 20;
  const filledBars = Math.round((percentage / 100) * barLength);
  const emptyBars = barLength - filledBars;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-responsive-sm">
        <span className="text-glow">{label}</span>
        <span className="text-glow">{value}%</span>
      </div>
      <div className="font-mono text-responsive-sm">
        <span className="text-primary text-glow">
          [{'█'.repeat(filledBars)}{'░'.repeat(emptyBars)}]
        </span>
      </div>
    </div>
  );
};

const StatsDisplay: React.FC<StatsDisplayProps> = ({
  popularity,
  civilRights,
  fear,
  money,
  month
}) => {
  const monthsRemaining = 48 - month;
  
  return (
    <div className="border border-primary p-4 crt-glow">
      <div className="text-responsive-lg text-glow mb-4 text-center border-b border-primary pb-2">
        ══════ STATUS REPORT ══════
      </div>
      
      <div className="text-responsive-base text-glow mb-4 text-center">
        MONTH: {month}/48 │ ELECTION IN: {monthsRemaining} MONTHS
      </div>
      
      <div className="grid gap-3">
        <StatBar label="POPULARITY" value={popularity} />
        <StatBar label="CIVIL RIGHTS" value={civilRights} />
        <StatBar label="FEAR" value={fear} />
        <StatBar label="TREASURY" value={money} />
      </div>
      
      <div className="mt-4 pt-2 border-t border-primary text-responsive-xs text-muted-foreground text-center">
        {popularity < 30 && "⚠ WARNING: LOW POPULARITY"}
        {money < 20 && "⚠ WARNING: TREASURY DEPLETED"}
        {civilRights < 20 && "⚠ CIVIL UNREST LIKELY"}
        {fear > 80 && "⚠ REGIME STABILITY CRITICAL"}
      </div>
    </div>
  );
};

export default StatsDisplay;
