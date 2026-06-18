import { useState } from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import MagneticButton from '../ui/MagneticButton';
import TiltCard from '../ui/TiltCard';

export default function InitiativeTracker() {
  const { 
    initiative, 
    addCombatantToTracker, 
    nextTurn, 
    resetInitiative, 
    rollAllInitiative,
    toggleCondition,
    rollLairAction,
    addToLog,
    language,
  } = useTTRPGStore();

  const [newCombatant, setNewCombatant] = useState({ name: '', bonus: 0, hp: 20, ac: 12 });

  const handleAdd = () => {
    if (newCombatant.name) {
      addCombatantToTracker(newCombatant.name, newCombatant.bonus, newCombatant.hp, newCombatant.ac);
      setNewCombatant({ name: '', bonus: 0, hp: 20, ac: 12 });
    }
  };

  // Simple native drag for initiative (port from original)
  const [draggedId, setDraggedId] = useState<number | null>(null);

  const handleDragStart = (id: number) => setDraggedId(id);
  const handleDragOver = (e: React.DragEvent) => e.preventDefault();
  const handleDrop = (targetId: number) => {
    if (draggedId === null || draggedId === targetId) return;
    // Reorder logic (simplified port)
    const newOrder = [...initiative];
    const fromIndex = newOrder.findIndex(c => c.id === draggedId);
    const toIndex = newOrder.findIndex(c => c.id === targetId);
    if (fromIndex < 0 || toIndex < 0) return;
    const [moved] = newOrder.splice(fromIndex, 1);
    newOrder.splice(toIndex, 0, moved);
    // In real Zustand you'd have a reorder action. For now, this is demo.
    console.log('Reordered initiative (implement reorder in store)');
    setDraggedId(null);
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">{t('initiative_tracker', language)}</h1>
          <div className="text-sm text-[#9ca3b8]">{t('round_current', language)}</div>
        </div>
        <div className="flex gap-2">
          <MagneticButton onClick={rollAllInitiative} className="px-4 py-2 border border-[#3a3a4f]">{t('re_roll', language)}</MagneticButton>
          <MagneticButton onClick={nextTurn} className="px-6 py-2 bg-emerald-600">{t('next_turn', language)}</MagneticButton>
          <button onClick={resetInitiative} className="px-4 py-2 text-red-400 border border-red-800 rounded">{t('reset', language)}</button>
          <MagneticButton onClick={rollLairAction} className="px-4 py-2 border border-purple-800 text-purple-400">{t('lair_action', language)}</MagneticButton>
        </div>
      </div>

      {/* Add Combatant */}
      <div className="mb-2 text-xs uppercase tracking-widest text-[#9ca3b8]">{t('add_combatant', language)}</div>
      <div className="flex gap-3 mb-6 items-end">
        <div className="flex-1">
          <label htmlFor="init-name" className="text-sm font-medium text-[#c5c9d8] block mb-1">{t('name', language)}</label>
          <input 
            id="init-name"
            value={newCombatant.name} 
            onChange={e => setNewCombatant({...newCombatant, name: e.target.value})}
            placeholder="Goblin" 
            className="w-full bg-[#1c1c2a] border border-[#3a3a4f] px-4 py-2 rounded-xl" 
            aria-label="Combatant name"
          />
        </div>
        <div>
          <label htmlFor="init-bonus" className="text-sm font-medium text-[#c5c9d8] block mb-1">{t('init_bonus', language)}</label>
          <input 
            id="init-bonus"
            type="number" 
            value={newCombatant.bonus} 
            onChange={e => setNewCombatant({...newCombatant, bonus: +e.target.value})} 
            className="w-20 bg-[#1c1c2a] border border-[#3a3a4f] px-3 py-2 rounded-xl" 
            placeholder="+0" 
            aria-label="Initiative bonus" 
          />
        </div>
        <div>
          <label htmlFor="init-hp" className="text-sm font-medium text-[#c5c9d8] block mb-1">HP</label>
          <input 
            id="init-hp"
            type="number" 
            value={newCombatant.hp} 
            onChange={e => setNewCombatant({...newCombatant, hp: +e.target.value})} 
            className="w-20 bg-[#1c1c2a] border border-[#3a3a4f] px-3 py-2 rounded-xl" 
            placeholder="20" 
            aria-label="Hit points" 
          />
        </div>
        <div>
          <label htmlFor="init-ac" className="text-sm font-medium text-[#c5c9d8] block mb-1">AC</label>
          <input 
            id="init-ac"
            type="number" 
            value={newCombatant.ac} 
            onChange={e => setNewCombatant({...newCombatant, ac: +e.target.value})} 
            className="w-20 bg-[#1c1c2a] border border-[#3a3a4f] px-3 py-2 rounded-xl" 
            placeholder="12" 
            aria-label="Armor class" 
          />
        </div>
        <button onClick={handleAdd} className="px-6 py-2 bg-violet-600 rounded-2xl">{t('add', language)}</button>
      </div>

      {/* Initiative List */}
      <div className="space-y-2">
        {initiative.length === 0 && <div className="text-[#575c6f] p-6">{t('no_combatants', language)}</div>}
        
        {initiative.map((c, idx) => (
          <TiltCard key={c.id}>
            <div 
              draggable
              onDragStart={() => handleDragStart(c.id)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(c.id)}
              className={`panel p-4 flex gap-4 items-center transition-all ${idx === 0 ? 'ring-2 ring-orange-500 bg-orange-950/10 scale-[1.01]' : ''}`}
            >
            <div className="w-12 text-center text-2xl font-bold text-orange-400">{c.init}</div>
            
            <div className="flex-1">
              <div className="font-medium">{c.name} <span className="text-xs text-[#9ca3b8]">({c.initBonus >= 0 ? '+' : ''}{c.initBonus})</span></div>
              <div className="flex gap-3 text-sm mt-1">
                <span>AC {c.ac}</span>
                <span>HP {c.hp}/{c.maxHp}</span>
                <div className="flex-1 h-1.5 bg-[#242436] rounded self-center">
                  <div className="h-1.5 bg-emerald-500 rounded" style={{width: `${(c.hp / c.maxHp) * 100}%`}} />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {(c.conditions || []).map((cond: any, i: number) => {
                  const name = cond.name || cond;
                  const dur = cond.duration ? ` (${cond.duration})` : '';
                  return (
                    <span 
                      key={i} 
                      onClick={() => toggleCondition(c.id, name)}
                      className="tag cursor-pointer text-xs"
                    >
                      {name}{dur}
                    </span>
                  );
                })}
                <button onClick={() => {/* prompt for condition */}} className="text-xs text-[#6b7280] px-1">+</button>
              </div>
            </div>

            <div className="text-right text-xs space-y-1">
              <button onClick={() => {/* edit HP etc */}} className="block hover:text-white">{t('edit', language)}</button>
              <button onClick={() => addToLog(`Damage to ${c.name}`)} className="block text-red-400">{t('hp_minus', language)}</button>
            </div>
          </div>
          </TiltCard>
        ))}
      </div>

      <div className="mt-4 text-xs text-[#6b7280]">
        {t('drag_reorder_hint', language)}
      </div>
    </div>
  );
}
