export interface GameEvent {
  id: string;
  title: string;
  description: string;
  choices: {
    text: string;
    effects: {
      popularity?: number;
      civilRights?: number;
      fear?: number;
      money?: number;
    };
    outcome: string;
  }[];
}

export const gameEvents: GameEvent[] = [
  {
    id: "media_criticism",
    title: "MEDIA CRITICISM",
    description: "A major newspaper publishes an article criticizing your policies. Your advisors await your response.",
    choices: [
      {
        text: "[A] Ignore it - freedom of press is sacred",
        effects: { popularity: -5, civilRights: 5 },
        outcome: "You maintain the high road. Some supporters are disappointed by your inaction."
      },
      {
        text: "[B] Sue the newspaper for defamation",
        effects: { popularity: -10, civilRights: -10, fear: 5, money: -15 },
        outcome: "The lawsuit backfires. Critics call you thin-skinned."
      },
      {
        text: "[C] Pass a 'media responsibility' law",
        effects: { popularity: -5, civilRights: -20, fear: 15, money: 5 },
        outcome: "The law passes. Journalists now think twice before publishing."
      }
    ]
  },
  {
    id: "economic_crisis",
    title: "ECONOMIC DOWNTURN",
    description: "The economy shows signs of recession. Unemployment rises. People look to you for solutions.",
    choices: [
      {
        text: "[A] Implement austerity measures",
        effects: { popularity: -15, money: 25, civilRights: -5 },
        outcome: "The budget improves but people suffer. Protests erupt."
      },
      {
        text: "[B] Print more money and increase spending",
        effects: { popularity: 10, money: -20, fear: -5 },
        outcome: "Short term relief but inflation looms on the horizon."
      },
      {
        text: "[C] Blame foreign powers and seize their assets",
        effects: { popularity: 5, money: 15, civilRights: -15, fear: 10 },
        outcome: "Nationalistic fervor rises. International relations sour."
      }
    ]
  },
  {
    id: "protest_movement",
    title: "STREET PROTESTS",
    description: "Thousands gather in the capital demanding reform. The crowd grows larger each day.",
    choices: [
      {
        text: "[A] Meet with protest leaders",
        effects: { popularity: 10, civilRights: 10, fear: -10 },
        outcome: "Dialogue begins. Some see you as reasonable, others as weak."
      },
      {
        text: "[B] Wait for protests to die down",
        effects: { popularity: -5, civilRights: 0, fear: -5 },
        outcome: "The protests continue for weeks before slowly dispersing."
      },
      {
        text: "[C] Deploy riot police",
        effects: { popularity: -20, civilRights: -25, fear: 25, money: -10 },
        outcome: "Order is restored. But the images spread worldwide."
      }
    ]
  },
  {
    id: "election_reform",
    title: "ELECTION COMMISSION",
    description: "The election commission proposes reforms to increase transparency. Your party opposes them.",
    choices: [
      {
        text: "[A] Support the reforms publicly",
        effects: { popularity: 15, civilRights: 15, fear: -10 },
        outcome: "You gain credibility as a democrat. Your party is furious."
      },
      {
        text: "[B] Quietly block them in committee",
        effects: { popularity: -5, civilRights: -10, fear: 5 },
        outcome: "The reforms die. Few notice but the opposition does."
      },
      {
        text: "[C] Replace the commission members",
        effects: { popularity: -15, civilRights: -30, fear: 20 },
        outcome: "Your loyalists now control elections. Democracy weakens."
      }
    ]
  },
  {
    id: "military_coup_rumor",
    title: "COUP RUMORS",
    description: "Intelligence reports suggest generals are meeting secretly. Their loyalty is questioned.",
    choices: [
      {
        text: "[A] Increase military pay and benefits",
        effects: { popularity: -5, money: -25, fear: -10 },
        outcome: "The military is placated. Your treasury suffers."
      },
      {
        text: "[B] Purge suspected disloyal officers",
        effects: { popularity: -10, civilRights: -20, fear: 30, money: -5 },
        outcome: "Fear grips the barracks. No one dares speak against you."
      },
      {
        text: "[C] Create a personal guard unit",
        effects: { popularity: -15, civilRights: -15, fear: 25, money: -15 },
        outcome: "Your new praetorians answer only to you."
      }
    ]
  },
  {
    id: "foreign_aid",
    title: "FOREIGN AID OFFER",
    description: "A powerful nation offers substantial aid in exchange for 'closer cooperation'.",
    choices: [
      {
        text: "[A] Accept with conditions",
        effects: { popularity: 5, money: 30, civilRights: -5 },
        outcome: "Money flows in. Critics call you a puppet."
      },
      {
        text: "[B] Reject to maintain sovereignty",
        effects: { popularity: 10, money: -10, civilRights: 5 },
        outcome: "National pride soars but the budget suffers."
      },
      {
        text: "[C] Accept and use money for 'security'",
        effects: { popularity: -5, money: 20, civilRights: -20, fear: 15 },
        outcome: "New surveillance systems are installed nationwide."
      }
    ]
  },
  {
    id: "corruption_scandal",
    title: "CORRUPTION EXPOSED",
    description: "Documents leak showing your allies embezzling funds. The evidence is damning.",
    choices: [
      {
        text: "[A] Prosecute your own allies",
        effects: { popularity: 20, civilRights: 10, fear: -15, money: 10 },
        outcome: "You gain respect but lose powerful friends."
      },
      {
        text: "[B] Claim the documents are forgeries",
        effects: { popularity: -15, civilRights: -10, fear: 5 },
        outcome: "Few believe you. Trust erodes further."
      },
      {
        text: "[C] Arrest the whistleblowers",
        effects: { popularity: -25, civilRights: -30, fear: 25 },
        outcome: "The leaks stop. So does investigative journalism."
      }
    ]
  },
  {
    id: "pandemic",
    title: "HEALTH CRISIS",
    description: "A disease outbreak threatens the population. Quick action is needed.",
    choices: [
      {
        text: "[A] Implement strict lockdowns",
        effects: { popularity: -10, civilRights: -15, money: -20, fear: 10 },
        outcome: "Lives are saved but the economy crashes."
      },
      {
        text: "[B] Focus on the economy, minimal restrictions",
        effects: { popularity: 5, civilRights: 5, money: 5, fear: -5 },
        outcome: "Deaths mount. History will judge harshly."
      },
      {
        text: "[C] Use crisis to expand emergency powers",
        effects: { popularity: -5, civilRights: -25, fear: 20, money: -10 },
        outcome: "Your powers grow. The emergency never quite ends."
      }
    ]
  },
  {
    id: "tech_surveillance",
    title: "TECH PROPOSAL",
    description: "A tech company offers to build a citizen monitoring system 'for safety'.",
    choices: [
      {
        text: "[A] Reject - privacy is paramount",
        effects: { popularity: 10, civilRights: 15, fear: -10 },
        outcome: "Civil liberties groups celebrate. Crime continues."
      },
      {
        text: "[B] Implement with 'oversight'",
        effects: { popularity: -5, civilRights: -20, fear: 15, money: -15 },
        outcome: "Cameras watch everywhere. The oversight is theater."
      },
      {
        text: "[C] Build it in secret",
        effects: { popularity: 0, civilRights: -30, fear: 25, money: -20 },
        outcome: "No one knows they're being watched. Yet."
      }
    ]
  },
  {
    id: "opposition_leader",
    title: "RISING OPPONENT",
    description: "A charismatic opposition leader gains popularity. Polls show them ahead.",
    choices: [
      {
        text: "[A] Debate them publicly",
        effects: { popularity: 5, civilRights: 10, fear: -10 },
        outcome: "A fair fight. May the best ideas win."
      },
      {
        text: "[B] Dig up dirt and leak it",
        effects: { popularity: -5, civilRights: -10, fear: 10 },
        outcome: "Their reputation suffers. So does political discourse."
      },
      {
        text: "[C] Have them arrested on 'charges'",
        effects: { popularity: -30, civilRights: -35, fear: 35 },
        outcome: "Your rival disappears. So does democracy."
      }
    ]
  },
  {
    id: "natural_disaster",
    title: "NATURAL DISASTER",
    description: "Floods devastate the countryside. Thousands are homeless and need aid.",
    choices: [
      {
        text: "[A] Mobilize full government response",
        effects: { popularity: 15, money: -25, civilRights: 5 },
        outcome: "The response is praised. The budget is strained."
      },
      {
        text: "[B] Request international aid",
        effects: { popularity: 5, money: 10, civilRights: 0 },
        outcome: "Help arrives slowly. Some see it as weakness."
      },
      {
        text: "[C] Blame local officials and seize control",
        effects: { popularity: 0, civilRights: -15, fear: 15, money: -10 },
        outcome: "Centralization increases. Democracy decays."
      }
    ]
  },
  {
    id: "religious_tension",
    title: "RELIGIOUS CONFLICT",
    description: "Tensions between religious groups escalate. Violence threatens to erupt.",
    choices: [
      {
        text: "[A] Promote dialogue and unity",
        effects: { popularity: 10, civilRights: 10, fear: -5 },
        outcome: "Peace holds, for now. Extremists on both sides are angry."
      },
      {
        text: "[B] Side with the majority group",
        effects: { popularity: 5, civilRights: -20, fear: 10 },
        outcome: "You gain supporters but minorities feel threatened."
      },
      {
        text: "[C] Ban 'extremist' religious practices",
        effects: { popularity: -10, civilRights: -30, fear: 20 },
        outcome: "Freedom of religion becomes a memory."
      }
    ]
  },
  {
    id: "union_strike",
    title: "WORKERS' STRIKE",
    description: "Major unions call a general strike. The economy grinds to a halt.",
    choices: [
      {
        text: "[A] Negotiate in good faith",
        effects: { popularity: 10, civilRights: 10, money: -15 },
        outcome: "A deal is reached. Workers win concessions."
      },
      {
        text: "[B] Wait them out",
        effects: { popularity: -10, civilRights: -5, money: -10 },
        outcome: "Both sides suffer. Eventually, work resumes."
      },
      {
        text: "[C] Outlaw the unions",
        effects: { popularity: -20, civilRights: -30, fear: 25, money: 10 },
        outcome: "Workers have no voice. Production continues."
      }
    ]
  },
  {
    id: "assassination_attempt",
    title: "ASSASSINATION PLOT",
    description: "Security uncovers a plot against your life. The suspects are in custody.",
    choices: [
      {
        text: "[A] Public trial with full transparency",
        effects: { popularity: 10, civilRights: 10, fear: -5 },
        outcome: "Justice is served openly. Some call you soft."
      },
      {
        text: "[B] Military tribunal in secret",
        effects: { popularity: -5, civilRights: -20, fear: 15 },
        outcome: "Swift justice. No one knows what really happened."
      },
      {
        text: "[C] Use it to purge all opponents",
        effects: { popularity: -25, civilRights: -35, fear: 35, money: -10 },
        outcome: "Anyone who ever disagreed with you is now a 'conspirator'."
      }
    ]
  },
  {
    id: "internet_freedom",
    title: "ONLINE CRITICISM",
    description: "Social media fills with criticism and 'fake news' about your government.",
    choices: [
      {
        text: "[A] Counter with facts and transparency",
        effects: { popularity: 5, civilRights: 10, fear: -5 },
        outcome: "Some minds are changed. The noise continues."
      },
      {
        text: "[B] Require platform 'content moderation'",
        effects: { popularity: -5, civilRights: -15, fear: 10 },
        outcome: "Criticism decreases. So does free speech."
      },
      {
        text: "[C] Create a national firewall",
        effects: { popularity: -15, civilRights: -35, fear: 25, money: -20 },
        outcome: "The internet is now 'safe'. And state-controlled."
      }
    ]
  }
];

export const getRandomEvent = (usedEventIds: string[]): GameEvent | null => {
  const availableEvents = gameEvents.filter(e => !usedEventIds.includes(e.id));
  if (availableEvents.length === 0) return null;
  return availableEvents[Math.floor(Math.random() * availableEvents.length)];
};
