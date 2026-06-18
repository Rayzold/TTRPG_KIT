import React, { useState } from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import SpotlightCard from '../ui/SpotlightCard';
import MagneticButton from '../ui/MagneticButton';
import BlurText from '../ui/BlurText';
import Particles from '../ui/Particles';
import MagicCard from '../ui/MagicCard';
import Hyperspeed from '../ui/Hyperspeed';

export default function EncountersPanel() {
  const { 
    generateEncounter, 
    adjustEncounterDifficulty, 
    addEncounterToInitiative, 
    saveEncounterTemplate,
    loadEncounterTemplate,
    encounterTemplates,
    language
  } = useTTRPGStore();

  const [bossMode, setBossMode] = useState(false);
  const [currentEncounter, setCurrentEncounter] = useState<any>(null);
  const [partySize, setPartySize] = useState(4);
  const [level, setLevel] = useState(5);
  const [difficulty, setDifficulty] = useState('medium');
  const [theme, setTheme] = useState('generic');

  const handleGenerate = () => {
    generateEncounter(partySize, level, difficulty, theme);
    // After generate, the store sets window._lastEncounter; refresh display
    const e = (window as any)._lastEncounter;
    if (e) setCurrentEncounter(e);
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6 relative">
        <BlurText text={t('encounter_builder', language)} className="text-3xl font-bold" />
        <p className="text-[#9ca3b8]">{t('encounter_subtitle', language)}</p>
        <Particles className="opacity-20" particleCount={40} />
        <Hyperspeed className={bossMode ? "opacity-40" : "opacity-10"} />
      </div>

      <MagicCard className="p-4 mb-6" gradientColor="#ef4444">
        <div className="flex gap-3">
          <select 
            value={partySize} 
            onChange={e => setPartySize(parseInt(e.target.value))}
            className="bg-[#1c1c2a] border border-[#3a3a4f] px-4 py-2 rounded-xl">
            {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} PCs</option>)}
          </select>
          <select 
            value={level} 
            onChange={e => setLevel(parseInt(e.target.value))}
            className="bg-[#1c1c2a] border border-[#3a3a4f] px-4 py-2 rounded-xl">
            {[1,3,5,8,10,15,20].map(n => <option key={n} value={n}>Level {n}</option>)}
          </select>
          <select 
            value={difficulty} 
            onChange={e => setDifficulty(e.target.value)}
            className="bg-[#1c1c2a] border border-[#3a3a4f] px-4 py-2 rounded-xl">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="deadly">Deadly</option>
          </select>
          <select 
            value={theme} 
            onChange={e => setTheme(e.target.value)}
            className="bg-[#1c1c2a] border border-[#3a3a4f] px-4 py-2 rounded-xl">
            <option value="generic">{t('generic', language)}</option>
            <option value="undead">{t('undead', language)}</option>
            <option value="dragon">{t('dragon', language)}</option>
            <option value="forest">{t('forest', language)}</option>
          </select>
          <MagneticButton onClick={handleGenerate} className="px-8 bg-red-600">{t('generate', language)}</MagneticButton>
          <button 
            onClick={() => setBossMode(!bossMode)} 
            className={`px-4 py-2 rounded-xl border ${bossMode ? 'bg-red-900 border-red-500 text-red-400' : 'border-[#3a3a4f]'}`}
          >
            {bossMode ? t('boss_mode_on', language) : t('boss_mode', language)}
          </button>
        </div>
      </MagicCard>

      {currentEncounter && (
        <div className="panel p-5 rounded-2xl mb-6">
          <div className="uppercase text-xs tracking-widest text-red-400">ENCOUNTER — {(currentEncounter.diff || 'unknown').toUpperCase()} {currentEncounter.theme ? `(${t('theme', language)}: ${currentEncounter.theme})` : ''}</div>
          <div className="text-xl font-semibold mt-1">{(currentEncounter.creatures || []).join(' + ')}</div>
          <div className="text-sm text-[#9ca3b8] mt-0.5">Terrain: {currentEncounter.terrain || ''}</div>
          <div className="mt-2 text-xs">Target XP: ~{currentEncounter.targetXP || '?'} | Actual ~{currentEncounter.actualXP || '?'}</div>
          <div className="mt-4 pt-3 border-t border-[#3a3a4f] text-sm">
            <div className="text-[#9ca3b8]">Tactics / Complication</div>
            <div>{currentEncounter.twist || ''}</div>
          </div>
          <div className="mt-2 text-xs">
            <div className="text-[#9ca3b8]">Group Tactics:</div>
            <div>{currentEncounter.groupTactics || ''}</div>
          </div>
          <div className="mt-2 text-xs">
            <div className="text-[#9ca3b8]">{t('special', language)}:</div>
            <div>{currentEncounter.specialAbility || ''}</div>
          </div>
          <div className="mt-2 text-xs">
            <div className="text-[#9ca3b8]">Loot:</div>
            <div>{(currentEncounter.loot || []).join(' • ')}</div>
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={addEncounterToInitiative} className="px-4 py-1 bg-emerald-700 rounded-xl text-sm">{t('add_to_initiative', language)}</button>
            <button onClick={saveEncounterTemplate} className="px-4 py-1 border border-teal-800 text-teal-400 rounded-xl text-sm">{t('save_template', language)}</button>
          </div>
        </div>
      )}

      <div className="flex gap-2 mb-8">
        <button onClick={() => { adjustEncounterDifficulty(-1); if (currentEncounter) setCurrentEncounter({...currentEncounter, diff: 'easy'}); }} className="px-4 py-2 border rounded">{t('easier', language)}</button>
        <button onClick={() => { adjustEncounterDifficulty(1); if (currentEncounter) setCurrentEncounter({...currentEncounter, diff: 'deadly'}); }} className="px-4 py-2 border rounded">{t('harder', language)}</button>
      </div>

      <div>
        <div className="section-title mb-2">{t('saved_templates', language)}</div>
        <div className="text-xs">
          {encounterTemplates.length === 0 ? t('no_templates', language) : encounterTemplates.map((t: any, i: number) => (
            <div key={i} className="mb-1 flex gap-2">
              <span>{t.name}</span>
              <button onClick={() => { loadEncounterTemplate(t.id); setCurrentEncounter(t); }} className="text-teal-400">Load</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
