import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { NPC_DATA, NPC_DATA_EL, TOWN_DATA, TOWN_DATA_EL, TOWN_REGIONS, FACTIONS, NAMES_DATA, NAMES_DATA_EL, TABLE_DATA, TABLE_DATA_EL, PLOT_DATA, PLOT_DATA_EL, WEATHER_DATA, WEATHER_DATA_EL, BACKSTORIES_EL, DARK_BACKSTORIES_EL, ENCOUNTER_TWISTS_EL, ENCOUNTER_LOOT_EL } from '../data';

// Types (ported and expanded from original)
export interface Combatant {
  id: number;
  name: string;
  init: number;
  initBonus: number;
  hp: number;
  maxHp: number;
  ac: number;
  conditions: Array<{ name: string; duration?: number | null } | string>;
  notes: string;
}

export interface WorldState {
  day: number;
  recentEvents: Array<{ day: number; event: string }>;
  factions: Record<string, number>;
  currentRegion: string | null;
  regions: Record<string, { threatLevel: number; visited: boolean; notes: string[] }>;
}

export interface LogSession {
  id: string;
  name: string;
  created: string;
}

export interface LogEntry {
  id: number;
  ts: string;
  text: string;
  type?: string;
  sessionId?: string;
  parentId?: number;
}

export interface TTRPGState {
  // Core state (direct port)
  diceHistory: Array<{ time: string; expr: string; total: number; detail?: string }>;
  npcSaved: any[];
  logEntries: LogEntry[];
  globalHistory: any[];
  initiative: Combatant[];
  customTables: Record<string, string[]>;
  savedBackstories: any[];
  musicFavorites: any[];
  musicPlaylist: any[];
  diceMacros: Array<{ name: string; expr: string }>;
  world: WorldState;
  currentPreset: string;
  encounterTemplates: any[];
  townSaved: any[];
  crafts: any[];
  localTracks: any[];
  gmNotes?: string;
  currentPlotResult: string | null;
  currentWeatherResult: string | null;
  language: 'en' | 'el';
  logSessions: LogSession[];
  currentLogSessionId: string | null;

  // Actions - ported from original JS
  setActivePanel: (panel: string) => void; // UI only, can be local state too
  addToLog: (text: string, type?: string, parentId?: number) => void;
  rollCustom: (expr?: string, count?: number) => void;
  quickRoll: (sides: number, mod?: string) => void;
  quickRollAdv: () => void;
  quickRollDis: () => void;
  quickRollPool: () => void; // 4d6kh3 example
  clearDiceHistory: () => void;

  generateNPC: (isVillain?: boolean) => void;
  generateTown: (forcedType?: string) => void;
  generatePlotHook: (theme?: string) => void;
  generateWeather: () => void;
  generateNames: (style?: string) => void;
  generateBackstory: (dark?: boolean) => void;
  askOracle: (question?: string) => void;

  rollTable: (type: string) => string;
  addCustomTableEntry: (type: string, entry: string) => void;
  getCustomTable: (type: string) => string[];

  generateEncounter: (partySize?: number, level?: number, diff?: string, theme?: string) => void;
  adjustEncounterDifficulty: (delta: number) => void;
  addEncounterToInitiative: () => void;
  saveEncounterTemplate: () => void;
  loadEncounterTemplate: (id: number) => void;
  deleteEncounterTemplate: (id: number) => void;

  addCombatantToTracker: (name: string, initBonus?: number, hp?: number, ac?: number) => void;
  nextTurn: () => void;
  resetInitiative: () => void;
  rollAllInitiative: () => void;
  toggleCondition: (id: number, condName: string) => void;
  addConditionPrompt: (id: number) => void;
  rollLairAction: () => void;

  setCurrentRegion: (region: string) => void;
  scoutRegion: (region: string) => void;
  rollWorldThreat: () => void;

  addToMusicPlaylist: (track: any) => void;
  removeFromMusicPlaylist: (index: number) => void;
  toggleMusicFavorite: (track: any) => void;
  removeFromMusicFavorites: (index: number) => void;
  clearMusicPlaylist: () => void;
  clearMusicFavorites: () => void;
  reorderMusicPlaylist: (fromIndex: number, toIndex: number) => void;
  advanceCrafting: (days?: number) => void;

  applyPreset: (key: string) => void;
  updatePresetDisplay: () => void; // usually component side effect

  toggleHighContrast: () => void;
  setLanguage: (lang: 'en' | 'el') => void;

  // Log session / folder / thread support
  ensureLogSession: () => void;
  createLogSession: (name?: string) => string;
  setCurrentLogSession: (id: string) => void;
  renameLogSession: (id: string, name: string) => void;
  deleteLogSession: (id: string) => void;

  // Per-log and bulk clear actions
  clearLogSession: (sessionId?: string) => void;
  clearUnfolderedLogs: () => void;
  deleteLogEntry: (id: number) => void;
  moveLogEntry: (id: number, targetSessionId: string) => void;
  exportLogSession: (sessionId?: string, format?: 'md' | 'txt' | 'csv') => void;

  // Full export / import / snapshot
  exportAll: () => void;
  importAll: () => void;
  exportCampaignBible: () => void;
  copyCampaignSnapshot: () => void;
  copyShareableLink: () => void;

  // Internal helpers
  decrementTimedConditions: () => void;
  saveState: () => void;
}

// Default state values (from original)
const defaultState = {
  diceHistory: [],
  npcSaved: [],
  logEntries: [],
  globalHistory: [],
  initiative: [],
  customTables: {},
  savedBackstories: [],
  musicFavorites: [],
  musicPlaylist: [],
  diceMacros: [],
  world: { 
    day: 1, 
    recentEvents: [], 
    factions: { 'Drifters': 40, 'Guardians': 60, 'Reclaimers': 25 }, 
    currentRegion: null, 
    regions: {} 
  },
  currentPreset: 'generic',
  encounterTemplates: [],
  townSaved: [],
  crafts: [],
  localTracks: [],
  gmNotes: '',
  currentPlotResult: null,
  currentWeatherResult: null,
  language: 'en',
  logSessions: [{ id: 'default', name: 'Main Session', created: new Date().toISOString() }],
  currentLogSessionId: 'default',
};

function parseCR(crStr: string | number): number {
  if (!crStr) return 1;
  if (typeof crStr === 'number') return crStr;
  if (crStr.includes('/')) {
    const [num, den] = crStr.split('/').map(n => parseFloat(n));
    return (num || 1) / (den || 1);
  }
  return parseFloat(crStr) || 1;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getTargetXP(partySize: number, level: number, difficulty: string): number {
  let xpPerPC = 75 * level;
  if (level >= 5) xpPerPC = 100 * level;
  if (level >= 11) xpPerPC = 140 * level;
  if (level >= 17) xpPerPC = 200 * level;

  const mults: Record<string, number> = {
    easy: 0.45,
    medium: 0.9,
    hard: 1.4,
    deadly: 2.3
  };
  const mult = mults[difficulty] || 1;

  let total = Math.round(partySize * xpPerPC * mult);
  return Math.max(150, total);
}

export const useTTRPGStore = create<TTRPGState>()(
  persist(
    (set, get) => ({
      ...defaultState,
      // Demo data for review
      npcSaved: [{id:1, name:"Elara the Bold", ancestry:"Elf", role:"Ally", motivation:"Protect the realm"}],
      townSaved: [{id:1, name:"Shadowvale", size:"Village", region:"Wilds", population:"150 souls", descriptor:"ancient", problem:"failing crops"}],
      logEntries: [{id:1, ts:"12:00", text:"Session started", type:"note", sessionId: 'default'}],
      logSessions: [{ id: 'default', name: 'Main Session', created: new Date().toISOString() }],
      currentLogSessionId: 'default',
      language: 'en',

      setActivePanel: (panel) => {
        // In React this is often handled locally in App, but kept here for parity
        console.log('Active panel set to:', panel);
      },

      addToLog: (text, type = 'note', parentId) => {
        // Ensure we have at least one session (migration for old data too)
        let sid = get().currentLogSessionId;
        let sessions = get().logSessions || [];
        if (!sid || sessions.length === 0) {
          get().ensureLogSession();
          sid = get().currentLogSessionId;
          sessions = get().logSessions || [];
        }
        const finalSid = sid || 'default';
        const ts = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        set((state) => ({
          logEntries: [...state.logEntries, { id: Date.now(), ts, text, type, sessionId: finalSid, parentId: parentId || undefined }],
        }));
      },

      rollCustom: (expr = '2d6+3', _count = 1) => {
        let total = 0;
        let detail = expr;

        const isAdv = expr.includes('adv');
        const isDis = expr.includes('dis');

        if (isAdv || isDis) {
          const modMatch = expr.match(/([+-]\d+)/);
          const mod = modMatch ? parseInt(modMatch[1], 10) : 0;
          const r1 = Math.floor(Math.random() * 20) + 1;
          const r2 = Math.floor(Math.random() * 20) + 1;
          const kept = isAdv ? Math.max(r1, r2) : Math.min(r1, r2);
          total = kept + mod;
          const sign = mod > 0 ? `+${mod}` : mod < 0 ? `${mod}` : '';
          detail = `rolled ${r1}/${r2} → ${kept}${sign} (${isAdv ? 'adv' : 'dis'})`;
        } else {
          // Basic expression support (XdY+Z, kh, simple)
          const match = expr.match(/^(\d*)d(\d+)([+-]\d+)?(?:kh?(\d+))?/i);
          if (match) {
            const num = parseInt(match[1] || '1', 10);
            const sides = parseInt(match[2], 10);
            const mod = match[3] ? parseInt(match[3], 10) : 0;
            let rolls = Array.from({ length: num }, () => Math.floor(Math.random() * sides) + 1);
            let keptRolls = [...rolls];
            const keep = match[4] ? parseInt(match[4], 10) : num;
            if (keep < num) {
              keptRolls = keptRolls.sort((a, b) => b - a).slice(0, keep);
            }
            total = keptRolls.reduce((a, b) => a + b, 0) + mod;
            detail = `[${rolls.join(',')}]${keep < num ? ` kh${keep}` : ''}${mod ? (mod > 0 ? `+${mod}` : mod) : ''}`;
          } else {
            total = Math.floor(Math.random() * 12) + 6;
            detail = `${expr} = ${total}`;
          }
        }

        set((state) => {
          const newHistory = [
            { time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), expr, total, detail },
            ...state.diceHistory,
          ].slice(0, 12);

          return { diceHistory: newHistory };
        });

        get().addToLog(`Rolled ${expr}: ${total}`);
      },

      quickRoll: (sides, mod = '') => {
        const roll = Math.floor(Math.random() * sides) + 1;
        const expr = `d${sides}${mod ? ' ' + mod : ''}`;
        const entry = { 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
          expr, 
          total: roll, 
          detail: '' 
        };
        set((state) => ({
          diceHistory: [entry, ...state.diceHistory].slice(0, 12),
        }));
        get().addToLog(`Rolled d${sides}: ${roll}`);
      },

      quickRollAdv: () => get().rollCustom('1d20 adv'),
      quickRollDis: () => get().rollCustom('1d20 dis'),
      quickRollPool: () => {
        // 4d6kh3 ported logic
        const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1).sort((a, b) => b - a);
        const kept = rolls.slice(0, 3);
        const total = kept.reduce((a, b) => a + b, 0);
        const detail = `rolled ${rolls.join(',')} → keep ${kept.join('+')}`;

        set((state) => ({
          diceHistory: [
            { time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), expr: '4d6kh3', total, detail },
            ...state.diceHistory,
          ].slice(0, 12),
        }));
      },

      generateNPC: (isVillain = false) => {
        const lang = get().language || 'en';
        const npcData = lang === 'el' ? NPC_DATA_EL : NPC_DATA;

        // Always English names (as requested), even in Greek mode
        const ancestry = pick(NPC_DATA.ancestries);
        const name = `${pick(NPC_DATA.first)} ${pick(NPC_DATA.last)}`;

        const trait1 = pick(npcData.traits);
        const trait2 = pick(npcData.traits);
        const flaw = pick(npcData.flaws);
        const motivation = pick(npcData.motivations);
        const secret = pick(npcData.secrets);
        const appearance = pick(npcData.appearances);
        const quirk = pick(npcData.quirks);
        const clothing = pick(npcData.clothing);
        const fear = pick(npcData.fears || ['the unknown']);
        const treasure = pick(npcData.treasures || ['a mysterious locket']);
        const special_ability = pick(npcData.special_abilities || ['none']);
        const voice = pick(npcData.voice_descriptors || ['normal']);

        // Class / profession: prefer interesting classes; fall back to common roles (keep English terms)
        let role: string;
        if (isVillain) {
          role = pick(['Antagonist', 'Warlock', 'Assassin', 'Cult Leader', 'Fallen Paladin', 'Necromancer']);
        } else {
          const useClass = Math.random() > 0.25;
          role = useClass ? pick(npcData.classes) : pick(npcData.commonRoles);
          if (role === 'Commoner' || role === 'Laborer') {
            role = pick(['Commoner (blacksmith)', 'Laborer (dockhand)', 'Commoner (innkeeper)', 'Farmer']);
          }
        }

        const faction = pick(FACTIONS);

        const npc = {
          id: Date.now(),
          name,
          ancestry,
          role,
          clothing,
          appearance,
          personality: `${trait1}, ${trait2}`,
          flaw,
          motivation,
          secret,
          quirk,
          fear,
          treasure,
          special_ability,
          voice,
          faction,
          isVillain,
          status: 'alive',
          corruption: Math.floor(Math.random() * 35),
          mutations: Math.random() > 0.75 ? [pick(['Storm-touched eyes', 'Faint glyph scars', 'Unnaturally cold hands', 'Whispers in their shadow'])] : [],
          relationships: [] as any[]
        };

        set((state) => ({ npcSaved: [npc, ...state.npcSaved].slice(0, 10) }));
        get().addToLog(`Generated NPC: ${npc.name} (${npc.ancestry} ${npc.role})`);
      },

      // ... Implement all other generators (generateTown, generatePlotHook, etc.) by porting the logic from original index.html

      generateEncounter: (partySize = 4, level = 5, diff = 'medium', theme = 'generic') => {
        const targetXP = getTargetXP(partySize, level, diff);

        // Scale monsters appropriately to level (fix for weak monsters)
        let baseMonsters: string[];
        if (level < 5) {
          baseMonsters = ['Goblins', 'Kobolds', 'Wolves', 'Skeletons', 'Giant Rats', 'Stirges', 'Bandits', 'Giant Spiders', 'Zombies', 'Animated Armor'];
        } else if (level < 10) {
          baseMonsters = ['Ogres', 'Owlbears', 'Manticores', 'Minotaurs', 'Trolls', 'Griffons', 'Bugbears', 'Werewolves', 'Specters', 'Rocs'];
        } else if (level < 15) {
          baseMonsters = ['Young Red Dragon', 'Stone Giant', 'Behir', 'Chimera', 'Young Blue Dragon', 'Cyclops', 'Hydra', 'Gorgons', 'Wyverns', 'Fire Giants'];
        } else {
          baseMonsters = ['Ancient Red Dragon', 'Storm Giant', 'Pit Fiend', 'Tarrasque', 'Ancient Blue Dragon', 'Kraken', 'Lich', 'Beholder', 'Ancient Green Dragon', 'Demilich'];
        }

        const numTypes = Math.min(3, Math.max(1, Math.floor(level / 5)));
        let filteredMonsters = baseMonsters;
        if (theme === 'undead') filteredMonsters = baseMonsters.filter(m => ['Skeleton','Zombie','Specter','Lich'].some(k => m.includes(k)) || baseMonsters.includes(m));
        else if (theme === 'dragon') filteredMonsters = baseMonsters.filter(m => m.includes('Dragon') || baseMonsters.includes(m));
        else if (theme === 'forest') filteredMonsters = baseMonsters.filter(m => ['Wolf','Spider','Owl','Bear'].some(k => m.includes(k)) || baseMonsters.includes(m));
        const chosen = [...(filteredMonsters.length ? filteredMonsters : baseMonsters)].sort(() => Math.random() - 0.5).slice(0, numTypes);

        const creatures: string[] = [];
        let actualXP = 0;

        chosen.forEach(name => {
          // Approximate CR based on level
          let cr = Math.max(0.25, level / 3);
          if (level >= 15) cr = Math.max(cr, 10);
          if (level >= 10) cr = Math.max(cr, 5);
          const monsterXP = Math.round(cr * 200); // rough

          let count = Math.max(1, Math.round(targetXP / chosen.length / monsterXP));
          if (cr > level + 3) count = Math.min(count, 1);
          else if (cr > level) count = Math.min(count, 2);

          const crStr = cr < 1 ? `1/${Math.round(1/cr)}` : String(Math.round(cr));
          creatures.push(`${count} × ${name} (CR ${crStr})`);
          actualXP += count * monsterXP;
        });

        const lang = get().language || 'en';
        const isEl = lang === 'el';

        const terrains = isEl 
          ? ['σκοτεινό ξέφωτο στο δάσος', 'ερείπιο ναού', 'εγκαταλελειμμένο ορυχείο', 'ομιχλώδες βάλτο', 'ανεμοδαρμένη κορυφογραμμή', 'εγκαταλελειμμένο κάστρο', 'μαγεμένο δάσος', 'υπόγεια σπηλιά', 'ερείπιο πύργου', 'λιμνάζοντα νερά']
          : ['dark forest clearing', 'ruined temple', 'abandoned mine', 'foggy swamp', 'wind-swept ridge', 'crumbling castle', 'enchanted forest', 'underground cavern', 'ruined tower', 'stagnant waters'];
        const terrain = terrains[Math.floor(Math.random() * terrains.length)];

        const twists = isEl ? ENCOUNTER_TWISTS_EL : [
          'Reinforcements arrive after 2 rounds.', 
          'The monsters are protecting something.', 
          'Environmental hazard.',
          'One of the monsters is actually an ally in disguise.',
          'The fight is actually a test by a higher power.',
          'The monsters were mind-controlled by something else.',
          'There is a powerful item the monsters are guarding.',
          'The encounter is a trap set by a rival party.',
          'One monster will try to negotiate instead of fight.',
          'The battle awakens something ancient and worse.'
        ];
        const twist = twists[Math.floor(Math.random() * twists.length)];

        const lootPool = isEl ? ENCOUNTER_LOOT_EL : [
          'Gold and gems', 'Magic items', 'Rare artifacts', 
          'A map to a hidden dungeon', 'An ancient weapon with a curse',
          'A bag of holding with something alive inside', 'A cursed ring that grants wishes',
          'A book of forbidden spells', 'A potion that grants temporary flight',
          'A shield that once belonged to a hero', 'A musical instrument that casts spells'
        ];
        const loot = lootPool.slice(0, Math.min(3, Math.ceil(level / 4)));

        const tacticsBase = isEl ? 'εστίαση πυρός ή χρήση εδάφους' : 'focus fire or use terrain';
        const groupTactics = chosen.map(n => `${n}: ${tacticsBase}`).join(' • ');

        const monsterAbilities = [
          'can fly short distances', 'regenerates health quickly', 'breathes fire in a cone',
          'is invisible until it attacks', 'summons smaller minions', 'has a powerful roar that stuns',
          'can climb walls like a spider', 'is immune to one damage type', 'has a poisonous bite',
          'can teleport short distances', 'is twice as large as normal', 'has a magical aura',
          'can charm enemies with a gaze', 'explodes on death', 'has a powerful tail swipe',
          'is covered in reflective scales', 'can phase through walls briefly', 'emits a freezing aura',
          'has multiple heads that attack independently', 'can burrow underground', 'is surrounded by swarms of insects'
        ];
        const specialAbility = monsterAbilities[Math.floor(Math.random() * monsterAbilities.length)];

        const encounter = {
          creatures,
          terrain,
          twist,
          loot,
          groupTactics,
          specialAbility,
          diff,
          partySize,
          level,
          targetXP,
          actualXP,
          theme
        };

        (window as any)._lastEncounter = encounter;
        set(() => ({ lastEncounter: encounter } as any));
        get().addToLog(`Generated encounter: ${creatures.join(', ')}`);
      },

      adjustEncounterDifficulty: (delta) => {
        // Port the adjust logic
        console.log('Adjusting difficulty by', delta);
      },

      addEncounterToInitiative: () => {
        let e = (window as any)._lastEncounter;
        if (!e || !e.creatures) {
          // fallback to store if available
          const state = get() as any;
          e = state.lastEncounter;
        }
        if (!e || !e.creatures) return;

        e.creatures.forEach((c: string) => {
          const match = c.match(/(\d+)\s*×\s*(.+?)\s*\(CR\s*([^)]+)\)/);
          const count = match ? parseInt(match[1]) : 1;
          const nameBase = match ? match[2].trim() : c;
          const crStr = match ? match[3] : '1';
          const crNum = parseCR(crStr);

          const defaultHP = Math.max(8, Math.round(crNum * 14 + 12));
          const defaultAC = Math.max(11, Math.round(12 + crNum * 0.6));
          const defaultInitBonus = Math.floor(crNum * 0.7);

          for (let i = 0; i < count; i++) {
            const suffix = count > 1 ? ` #${i+1}` : '';
            get().addCombatantToTracker(`${nameBase}${suffix}`, defaultInitBonus, defaultHP, defaultAC);
          }
        });

        get().addToLog('Added encounter to initiative');
      },

      saveEncounterTemplate: () => {
        const e = (window as any)._lastEncounter;
        if (!e) return;

        set((state) => ({
          encounterTemplates: [
            { id: Date.now(), name: 'New Template', ...e },
            ...state.encounterTemplates,
          ].slice(0, 10),
        }));
      },

      loadEncounterTemplate: (id) => {
        const t = get().encounterTemplates.find((x) => x.id === id);
        if (t) (window as any)._lastEncounter = { ...t };
      },

      deleteEncounterTemplate: (id) => {
        set((state) => ({
          encounterTemplates: state.encounterTemplates.filter((x) => x.id !== id),
        }));
      },

      addCombatantToTracker: (name, initBonus = 0, hp = 20, ac = 12) => {
        const combatant: Combatant = {
          id: Date.now() + Math.random(),
          name,
          initBonus,
          init: Math.floor(Math.random() * 20) + 1 + initBonus,
          hp,
          maxHp: hp,
          ac,
          conditions: [],
          notes: '',
        };
        set((state) => ({ initiative: [...state.initiative, combatant] }));
      },

      nextTurn: () => {
        // Full port of nextTurn + decrementTimedConditions
        get().decrementTimedConditions();
        // ... logic for advancing turn and round
      },

      decrementTimedConditions: () => {
        set((state) => {
          const newInitiative = state.initiative.map((c) => {
            if (!c.conditions) return c;
            const newConditions = c.conditions
              .map((cond: any) => {
                if (typeof cond === 'string') return cond;
                if (cond.duration && cond.duration > 1) {
                  return { ...cond, duration: cond.duration - 1 };
                }
                if (cond.duration === 1) {
                  get().addToLog(`Condition expired: ${cond.name} on ${c.name}`);
                  return null;
                }
                return cond;
              })
              .filter(Boolean);
            return { ...c, conditions: newConditions };
          });
          return { initiative: newInitiative };
        });
      },

      rollAllInitiative: () => {
        set((state) => ({
          initiative: state.initiative.map((c) => ({
            ...c,
            init: Math.floor(Math.random() * 20) + 1 + (c.initBonus || 0),
          })),
        }));
      },

      resetInitiative: () => {
        set({ initiative: [] });
      },

      toggleCondition: (id, condName) => {
        set((state) => ({
          initiative: state.initiative.map((c) => {
            if (c.id !== id) return c;
            const conditions = c.conditions || [];
            const idx = conditions.findIndex((cc: any) => (cc.name || cc) === condName);
            if (idx >= 0) {
              conditions.splice(idx, 1);
            } else {
              conditions.push({ name: condName });
            }
            return { ...c, conditions };
          }),
        }));
      },

      addConditionPrompt: (id) => {
        // In React you'd use a proper modal. For parity:
        const name = prompt('Condition name?');
        if (!name) return;
        const durStr = prompt('Duration in rounds? (blank = permanent)');
        const duration = durStr ? parseInt(durStr) : null;

        set((state) => ({
          initiative: state.initiative.map((c) => {
            if (c.id !== id) return c;
            const condObj = duration ? { name, duration } : { name };
            return { ...c, conditions: [...(c.conditions || []), condObj] };
          }),
        }));
      },

      rollLairAction: () => {
        const actions = [
          'The ground shakes — DC 13 DEX save or fall prone.',
          'Elemental burst — 3d6 damage.',
        ];
        const action = actions[Math.floor(Math.random() * actions.length)];
        get().addToLog(`LAIR ACTION: ${action}`);
      },

      setCurrentRegion: (region) => {
        set((state) => ({
          world: { ...state.world, currentRegion: region }
        }));
        get().addToLog(`Current region set to ${region}`);
      },

      scoutRegion: (region) => {
        set((state) => {
          const current = state.world.factions || {};
          // slightly reduce a random faction pressure as "scouting intel"
          const keys = Object.keys(current);
          if (keys.length > 0) {
            const k = keys[Math.floor(Math.random() * keys.length)];
            const updated = { ...current, [k]: Math.max(0, (current[k] as number) - 10) };
            return { world: { ...state.world, factions: updated } };
          }
          return {};
        });
        get().addToLog(`Scouted ${region}. Threat level reduced slightly.`);
      },

      rollWorldThreat: () => {
        const lang = get().language || 'en';
        const threats = lang === 'el' ? [
          'Μια νέα φατρία αναδύεται στις Ερημιές.',
          'Οι επιδρομές ληστών αυξάνονται στα Σύνορα.',
          'Παράξενες μεταλλάξεις εμφανίζονται στις Άγριες.',
          'Η Ουλή μεγαλώνει, καταβροχθίζοντας γύρω περιοχές.',
        ] : [
          'A new faction rises in the Wastes.',
          'Bandit raids increase in the Frontier.',
          'Strange mutations appear in the Wilds.',
          'The Scar grows, consuming nearby lands.',
        ];
        const threat = threats[Math.floor(Math.random() * threats.length)];
        set((state) => ({
          world: {
            ...state.world,
            recentEvents: [...(state.world.recentEvents || []), { day: state.world.day, event: threat }].slice(-5)
          }
        }));
        get().addToLog(`World Threat: ${threat}`);
      },

      // Presets
      applyPreset: (key) => {
        // Full bias logic from the port guide
        set({ currentPreset: key });
        get().addToLog(`Applied preset: ${key}`);
      },

      updatePresetDisplay: () => {
        // Usually handled in React component
      },

      toggleHighContrast: () => {
        const isOn = !document.body.classList.contains('high-contrast');
        document.body.classList.toggle('high-contrast', isOn);
        localStorage.setItem('ttrpg-kit-high-contrast', String(isOn));
      },

      setLanguage: (lang: 'en' | 'el') => set({ language: lang }),

      // Log sessions (folders) + threading support
      ensureLogSession: () => {
        const state = get();
        const hasSessions = state.logSessions && state.logSessions.length > 0;
        if (!hasSessions) {
          const id = 'default';
          const def: LogSession = { id, name: 'Main Session', created: new Date().toISOString() };
          const newEntries = (state.logEntries || []).map((e: any) =>
            e.sessionId ? e : { ...e, sessionId: id }
          );
          set({
            logSessions: [def],
            currentLogSessionId: id,
            logEntries: newEntries,
          });
        } else if (!state.currentLogSessionId) {
          set({ currentLogSessionId: state.logSessions[0].id });
        }
      },

      createLogSession: (name = 'New Session') => {
        const id = 'sess_' + Date.now();
        const sess: LogSession = { id, name: name.trim() || 'New Session', created: new Date().toISOString() };
        set((state) => ({
          logSessions: [...(state.logSessions || []), sess],
          currentLogSessionId: id,
        }));
        // log the creation into the *new* session
        // defer one tick to ensure current is set
        setTimeout(() => get().addToLog(`Created log folder: ${sess.name}`), 0);
        return id;
      },

      setCurrentLogSession: (id) => {
        const sessions = get().logSessions || [];
        if (sessions.some((s) => s.id === id)) {
          set({ currentLogSessionId: id });
        }
      },

      renameLogSession: (id, newName) => {
        set((state) => ({
          logSessions: (state.logSessions || []).map((s) =>
            s.id === id ? { ...s, name: newName.trim() || s.name } : s
          ),
        }));
      },

      deleteLogSession: (id) => {
        set((state) => {
          let remaining = (state.logSessions || []).filter((s) => s.id !== id);
          if (remaining.length === 0) {
            remaining = [{ id: 'default', name: 'Main Session', created: new Date().toISOString() }];
          }
          let curr = state.currentLogSessionId === id ? remaining[0].id : state.currentLogSessionId || remaining[0].id;

          // Reassign any entries that were in the deleted session (or had no session) to the new current
          const newEntries = state.logEntries.map((e: any) =>
            (!e.sessionId || e.sessionId === id) ? { ...e, sessionId: curr } : e
          );

          return {
            logSessions: remaining,
            currentLogSessionId: curr,
            logEntries: newEntries,
          };
        });
      },

      clearLogSession: (sessionId) => {
        const sid = sessionId || get().currentLogSessionId;
        if (!sid) return;
        set((state) => ({
          logEntries: state.logEntries.filter((e: any) => e.sessionId !== sid),
        }));
      },

      clearUnfolderedLogs: () => {
        const validSessionIds = new Set((get().logSessions || []).map((s) => s.id));
        set((state) => ({
          logEntries: state.logEntries.filter((e: any) => e.sessionId && validSessionIds.has(e.sessionId)),
        }));
      },

      deleteLogEntry: (id) => {
        set((state) => ({
          logEntries: state.logEntries.filter((e: any) => e.id !== id),
        }));
      },

      moveLogEntry: (id, targetSessionId) => {
        const sessions = get().logSessions || [];
        const validTarget = sessions.some((s) => s.id === targetSessionId);
        if (!validTarget) return;
        set((state) => ({
          logEntries: state.logEntries.map((e: any) =>
            e.id === id ? { ...e, sessionId: targetSessionId } : e
          ),
        }));
      },

      exportLogSession: (sessionId, format = 'md') => {
        const sessions = get().logSessions || [];
        const sid = sessionId || get().currentLogSessionId;
        const session = sessions.find((s) => s.id === sid) || { id: 'unknown', name: 'Session Log' };

        const entries = get().logEntries
          .filter((e: any) => (e.sessionId || 'default') === sid)
          .sort((a: any, b: any) => (a.id || 0) - (b.id || 0));

        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10);
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const sessionSlug = (session.name || 'log').toLowerCase().replace(/[^a-z0-9]+/g, '-');

        let content = '';
        let mime = 'text/plain';
        let ext = format;

        if (format === 'md') {
          mime = 'text/markdown';
          content += `# TTRPG Kit - Session Log: ${session.name}\n\n`;
          content += `**Exported:** ${dateStr} ${timeStr}  \n`;
          content += `**Session ID:** ${sid}  \n`;
          content += `**Entries:** ${entries.length}\n\n`;
          content += `---\n\n`;

          if (entries.length === 0) {
            content += '*No entries in this session.*\n';
          } else {
            content += `### Log Entries\n\n`;
            entries.forEach((e: any) => {
              const indent = e.parentId ? '  ' : '';
              const prefix = e.parentId ? '↳ ' : '';
              content += `${indent}- **${e.ts}** ${prefix}${e.text}\n`;
            });
          }
          content += `\n---\n\n*Generated by TTRPG Kit (React edition)*\n`;
        } else if (format === 'txt') {
          content += `TTRPG Kit - Session Log: ${session.name}\n`;
          content += `Exported: ${dateStr} ${timeStr}\n`;
          content += `Session: ${sid} | Entries: ${entries.length}\n`;
          content += `----------------------------------------\n\n`;

          if (entries.length === 0) {
            content += 'No entries in this session.\n';
          } else {
            entries.forEach((e: any) => {
              const indent = e.parentId ? '  ' : '';
              const prefix = e.parentId ? '↳ ' : '';
              content += `${indent}${e.ts}  ${prefix}${e.text}\n`;
            });
          }
          content += `\n----------------------------------------\nGenerated by TTRPG Kit (React edition)\n`;
        } else if (format === 'csv') {
          mime = 'text/csv; charset=utf-8';
          const BOM = '\uFEFF';

          const escapeField = (val: any) => {
            const s = String(val || '').replace(/\r?\n/g, ' ');
            // Quote every field and escape internal quotes (standard CSV escaping)
            return `"${s.replace(/"/g, '""')}"`;
          };

          const headers = ['Time', 'Text', 'Type', 'ParentId'];
          let csv = headers.map(escapeField).join('^') + '\n';

          entries.forEach((e: any) => {
            const time = e.ts || '';
            const text = e.text || '';
            const type = e.type || '';
            const parent = e.parentId ? String(e.parentId) : '';
            csv += [time, text, type, parent].map(escapeField).join('^') + '\n';
          });

          content = BOM + csv;
        }

        // Trigger download
        const filename = `session-log-${sessionSlug}-${dateStr}.${ext}`;
        const blob = new Blob([content], { type: mime });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
      },

      // Export / Share functions (ported)
      exportAll: () => {
        const data = JSON.stringify(get(), null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ttrpg-kit-state.json';
        a.click();
      },

      importAll: () => {
        // Trigger file input in component
        console.log('Implement file input in React component');
      },

      exportCampaignBible: () => {
        // Port the full MD bible generation
        // const md = '# TTRPG Campaign Bible\n\n...';
        // download logic
      },

      copyCampaignSnapshot: () => {
        // Port snapshot logic
        const snap = '# Snapshot...';
        navigator.clipboard.writeText(snap);
      },

      copyShareableLink: () => {
        const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(get()))));
        const url = location.href.split('#')[0] + '#' + encoded;
        navigator.clipboard.writeText(url);
      },

      clearDiceHistory: () => {
        set({ diceHistory: [] });
      },

      // Stub other generators for now (you can expand)
      generateTown: (forcedType) => {
        const lang = get().language || 'en';
        const isEl = lang === 'el';

        let size: string;
        let population: string;

        const pref = (forcedType || '').toLowerCase();
        if (pref === 'hamlet') { size = 'Hamlet'; population = '40–120 souls'; }
        else if (pref === 'village') { size = 'Village'; population = '150–800 souls'; }
        else if (pref === 'town') { size = 'Town'; population = '1,000–4,000 souls'; }
        else if (pref === 'city') { size = 'City'; population = '5,000+ souls'; }
        else {
          const roll = Math.random();
          if (roll < 0.2) { size = 'Hamlet'; population = '40–120 souls'; }
          else if (roll < 0.5) { size = 'Village'; population = '150–800 souls'; }
          else if (roll < 0.8) { size = 'Town'; population = '1,000–4,000 souls'; }
          else { size = 'City'; population = '5,000+ souls'; }
        }

        const nameBase = `${pick(TOWN_DATA.prefixes)}${pick(TOWN_DATA.suffixes)}`.replace(/([a-z])([A-Z])/g, '$1 $2');
        const name = nameBase;

        const townData = isEl ? TOWN_DATA_EL : TOWN_DATA;
        const descriptor = pick(townData.descriptors);
        const problem = pick(townData.problems);
        const feature = pick(townData.features);

        // Build notable buildings 
        const b = TOWN_DATA.buildingWords; // keep shared for templates
        const notableBuildings = Array.from({ length: 3 }, () => {
          let tpl = pick(TOWN_DATA.notableBuildingTemplates);
          tpl = tpl
            .replace('${color}', pick(b.color))
            .replace('${item}', pick(b.item))
            .replace('${saint}', pick(b.saint))
            .replace('${building}', pick(b.building))
            .replace('${structure}', pick(b.structure))
            .replace('${trade}', pick(b.trade))
            .replace('${craft}', pick(b.craft));
          return tpl;
        });

        // Type of population 
        const populationType = pick(townData.populationTypes);

        // Area lore 
        const lore = pick(townData.loreSnippets);

        let regionObj = pick(TOWN_REGIONS);
        const worldState = get().world;
        if (worldState?.currentRegion) {
          const match = TOWN_REGIONS.find(r => r.name === worldState.currentRegion);
          if (match && Math.random() > 0.4) regionObj = match;
        }

        const government = pick(townData.governments);

        const town = {
          id: Date.now(),
          name,
          size,
          population,
          populationType,
          descriptor,
          problem,
          feature,
          notableBuildings,
          lore,
          government,
          region: regionObj.name,
          regionDesc: regionObj.desc
        };

        set((state) => ({ townSaved: [town, ...state.townSaved].slice(0, 10) }));
        get().addToLog(`Town: ${town.name} (${town.size})`);
      },

      generatePlotHook: (_theme) => {
        const lang = get().language || 'en';
        const hooks = lang === 'el' ? PLOT_DATA_EL.hooks : PLOT_DATA.hooks;
        const hook = pick(hooks);
        set({ currentPlotResult: hook });
        get().addToLog(`Plot Hook: ${hook}`);
      },

      generateWeather: () => {
        const lang = get().language || 'en';
        const w = pick(lang === 'el' ? WEATHER_DATA_EL : WEATHER_DATA);
        const result = `${w.name}: ${w.effect}`;
        set({ currentWeatherResult: result });
        get().addToLog(`Weather: ${result}`);
      },

      generateNames: (style = 'fantasy') => {
        const lang = get().language || 'en';
        const namesData = lang === 'el' ? NAMES_DATA_EL : NAMES_DATA;
        const list = (namesData as any)[style] || namesData.fantasy;
        const names = Array.from({ length: 6 }, () => pick(list)).join(', ');
        get().addToLog(`Names (${style}): ${names}`);
        return names;
      },

      generateBackstory: (dark = false) => {
        const lang = get().language || 'en';
        const backstories = lang === 'el' ? BACKSTORIES_EL : [
          'Orphaned after a village raid, raised by a secretive order of rangers.',
          'Former soldier who deserted after witnessing a terrible war crime.',
          'Exiled noble seeking to reclaim their birthright through cunning and allies.',
          'A scholar who discovered a forbidden text and now hunts its author.',
          'Once a promising mage who lost their powers in a tragic accident.',
          'A former pirate who faked their death to start a new life.',
          'Grew up in a traveling circus and learned to read people perfectly.',
          'Escaped from a laboratory where they were being experimented on.',
          'A blacksmith who discovered they can talk to metal.',
          'Was raised by wolves until the age of 12.',
          'A former assassin who now protects the innocent they once hunted.',
          'Discovered as a baby in the ruins of a destroyed temple.',
          'Spent years as a gladiator before winning their freedom.',
          'A bard who lost their voice but can still cast magic through song.',
          'Once served as a royal guard but was framed for treason.'
        ];
        const darkOnes = lang === 'el' ? DARK_BACKSTORIES_EL : [
          'Haunted by the spirit of the person they murdered to survive.',
          'Sold their soul for power and now races against the clock to break the pact.',
          'Was a monster once and still struggles with the hunger.',
          'Accidentally caused the death of their entire village.',
          'Made a deal with a devil that is slowly consuming their humanity.',
          'Was responsible for a war that killed thousands.',
          'Has been slowly replacing their body with clockwork parts.',
          'Is slowly losing their memories and doesn\'t know why.',
          'Once loved someone so much they killed them to keep them forever.',
          'Is the product of a forbidden ritual and fears what they will become.'
        ];
        const bs = dark ? pick(darkOnes) : pick(backstories);
        set((state) => ({ savedBackstories: [bs, ...state.savedBackstories].slice(0, 8) }));
        get().addToLog(`Backstory: ${bs}`);
      },

      askOracle: (question = 'Will the plan succeed?') => {
        const lang = get().language || 'en';
        const answers = lang === 'el' 
          ? ['Ναι, αλλά...', 'Όχι, και...', 'Ναι, και...', 'Όχι, αλλά...', 'Δεν είναι σαφές — τα σημάδια αντικρούονται.', 'Ίσως, αν...', 'Όχι, εκτός αν...', 'Ναι, αν και...', 'Είναι περίπλοκο — εξαρτάται από...', 'Η απάντηση είναι ναι αλλά με μεγάλο κόστος.']
          : ['Yes, but...', 'No, and...', 'Yes, and...', 'No, but...', 'It is unclear — the signs are conflicting.', 'Maybe, if...', 'No, unless...', 'Yes, though...', 'It is complicated — it depends on...', 'The answer is yes but at great cost.'];
        const twists = lang === 'el'
          ? ['εμφανίζεται ένα κρυφό κόστος', 'ένας σύμμαχος σε προδίδει', 'προκύπτει μια νέα ευκαιρία', 'η αλήθεια είναι χειρότερη από ό,τι φοβόσουν', 'κάποιος που εμπιστεύεσαι θα σε προδώσει', 'το τίμημα θα είναι ψυχικό', 'θα χρειαστεί να θυσιάσεις κάτι αγαπημένο', 'η λύση θα φέρει νέα προβλήματα', 'θα πρέπει να αντιμετωπίσεις τον φόβο σου', 'κάποιος από το παρελθόν θα επιστρέψει']
          : ['a hidden cost appears', 'an ally betrays you', 'a new opportunity arises', 'the truth is worse than you feared', 'someone you trust will betray you', 'the price will be spiritual', 'you will have to sacrifice something beloved', 'the solution will bring new problems', 'you will have to face your fear', 'someone from the past will return'];
        const result = `${question} → ${pick(answers)} ${pick(twists)}.`;
        get().addToLog(result);
        return result;
      },

      rollTable: (type: string) => {
        const lang = get().language || 'en';
        let tableData = lang === 'el' ? TABLE_DATA_EL : TABLE_DATA;
        let table = tableData[type] || tableData.encounter || [];
        const custom = get().customTables[type] || [];
        if (custom.length > 0) table = [...table, ...custom];
        const result = pick(table);
        get().addToLog(`Table ${type}: ${result}`);
        return result;
      },
      addCustomTableEntry: (type, entry) => {
        set((state) => ({
          customTables: {
            ...state.customTables,
            [type]: [...(state.customTables[type] || []), entry]
          }
        }));
      },
      getCustomTable: (type) => {
        return get().customTables[type] || [];
      },

      // Music actions - full support ported + enhanced
      addToMusicPlaylist: (track) => {
        if (!track) return;
        set((state) => {
          const exists = state.musicPlaylist.some((p: any) => p.title === track.title && p.artist === track.artist);
          if (exists) return {};
          const newPlaylist = [...state.musicPlaylist, { ...track }];
          return { musicPlaylist: newPlaylist };
        });
        get().addToLog(`Added to playlist: ${track.title}`);
      },

      removeFromMusicPlaylist: (index) => {
        set((state) => ({
          musicPlaylist: state.musicPlaylist.filter((_: any, i: number) => i !== index)
        }));
      },

      toggleMusicFavorite: (track) => {
        if (!track) return;
        set((state) => {
          const existsIndex = state.musicFavorites.findIndex((f: any) => f.title === track.title && f.artist === track.artist);
          if (existsIndex >= 0) {
            return { musicFavorites: state.musicFavorites.filter((_: any, i: number) => i !== existsIndex) };
          }
          return { musicFavorites: [...state.musicFavorites, { ...track }] };
        });
      },

      removeFromMusicFavorites: (index) => {
        set((state) => ({
          musicFavorites: state.musicFavorites.filter((_: any, i: number) => i !== index)
        }));
      },

      clearMusicPlaylist: () => set({ musicPlaylist: [] }),
      clearMusicFavorites: () => set({ musicFavorites: [] }),

      reorderMusicPlaylist: (fromIndex, toIndex) => {
        set((state) => {
          const list = [...state.musicPlaylist];
          if (fromIndex < 0 || fromIndex >= list.length || toIndex < 0 || toIndex >= list.length) return {};
          const [moved] = list.splice(fromIndex, 1);
          list.splice(toIndex, 0, moved);
          return { musicPlaylist: list };
        });
      },

      // Crafting (basic)
      advanceCrafting: (days = 1) => {
        get().addToLog(`Advanced crafting by ${days} day(s)`);
      },

      // ... etc for all remaining

      saveState: () => {
        // Zustand persist handles this
      },
    }),
    {
      name: 'ttrpg-kit-state',
    }
  )
);
