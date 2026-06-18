import React, { useState } from 'react';
import { useTTRPGStore } from './store/useTTRPGStore';
import { t, languages } from './i18n';

// React Bits imports (install via shadcn as per guide)
import BlurText from './components/ui/BlurText';
import Aurora from './components/ui/Aurora';
import SpotlightCard from './components/ui/SpotlightCard';
import Particles from './components/ui/Particles';
import GradientText from './components/ui/GradientText';
import RotatingText from './components/ui/RotatingText'; // stub for fun flavor text

import DicePanel from './components/panels/DicePanel';
import NPCGenerator from './components/panels/NPCGenerator';
import TownGenerator from './components/panels/TownGenerator';
import InitiativeTracker from './components/panels/InitiativeTracker';
import MusicPanel from './components/panels/MusicPanel';
import EncountersPanel from './components/panels/EncountersPanel';
import RegionsWorld from './components/panels/RegionsWorld';
import PlotWeather from './components/panels/PlotWeather';
import LogPanel from './components/panels/LogPanel';
import NamesGenerator from './components/panels/NamesGenerator';
import OraclePanel from './components/panels/OraclePanel';
import BackstoryGenerator from './components/panels/BackstoryGenerator';
import TablesPanel from './components/panels/TablesPanel';

const panels: Array<{ id: string; labelKey: string; Component?: React.FC<any> }> = [
  { id: 'dice', labelKey: 'panel_dice', Component: DicePanel },
  { id: 'npc', labelKey: 'panel_npc', Component: NPCGenerator },
  { id: 'town', labelKey: 'panel_town', Component: TownGenerator },
  { id: 'encounters', labelKey: 'panel_encounters', Component: EncountersPanel },
  { id: 'initiative', labelKey: 'panel_initiative', Component: InitiativeTracker },
  { id: 'music', labelKey: 'panel_music', Component: MusicPanel },
  { id: 'regions', labelKey: 'panel_regions', Component: RegionsWorld },
  { id: 'plot', labelKey: 'panel_plot', Component: PlotWeather },
  { id: 'log', labelKey: 'panel_log', Component: LogPanel },
  { id: 'names', labelKey: 'panel_names', Component: NamesGenerator },
  { id: 'oracle', labelKey: 'panel_oracle', Component: OraclePanel },
  { id: 'backstory', labelKey: 'panel_backstory', Component: BackstoryGenerator },
  { id: 'tables', labelKey: 'panel_tables', Component: TablesPanel },
];

const categories: Array<{ titleKey: string; ids: string[] }> = [
  {
    titleKey: 'cat_dice_tables',
    ids: ['dice', 'tables']
  },
  {
    titleKey: 'cat_generators',
    ids: ['npc', 'town', 'names', 'backstory', 'plot', 'oracle']
  },
  {
    titleKey: 'cat_encounters',
    ids: ['encounters', 'initiative']
  },
  {
    titleKey: 'cat_world',
    ids: ['regions', 'music', 'log']
  },
];

export default function App() {
  const [activePanel, setActivePanel] = useState('dice');
  const { currentPreset, applyPreset, toggleHighContrast, language, setLanguage } = useTTRPGStore();

  return (
    <div className="min-h-screen bg-[#0a0a12] text-[#f1f1f7] relative overflow-hidden">
      {/* Background layer - behind everything */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <Aurora 
          colorStops={['#1a1a38', '#3a2a1f', '#0a0a12']} 
          blend={0.55} 
          speed={0.35} 
        />
        <Particles 
          className="opacity-30" 
          particleCount={80} 
          speed={0.8} 
        />
      </div>

      {/* Content layer - explicit flex row for reliable 3-column layout */}
      <div className="relative z-10 flex h-screen">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0 bg-[#0f0f19] border-r border-[#3a3a4f] flex flex-col p-4 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-3xl">🎲</div>
            <div>
              <div className="font-bold text-xl">{t('app_title', language)}</div>
              <div className="text-xs text-[#9ca3b8]">{t('react_edition', language)}</div>
            </div>
          </div>

          {categories.map((cat, idx) => (
            <div key={cat.titleKey} className={idx === 0 ? "mb-1" : "mt-2 mb-1"}>
              <div className="mb-1 text-xs uppercase tracking-widest text-[#9ca3b8]">{t(cat.titleKey, language)}</div>
              {panels
                .filter(p => cat.ids.includes(p.id))
                .map(p => (
                  <button
                    key={p.id}
                    onClick={() => setActivePanel(p.id)}
                    className={`w-full text-left px-3 py-1.5 rounded mb-0.5 flex items-center gap-2 text-sm hover:bg-[#1c1c2a] transition ${activePanel === p.id ? 'bg-orange-900/30 text-orange-400' : ''}`}
                  >
                    {t(p.labelKey, language)}
                  </button>
                ))}
            </div>
          ))}

          <div className="mt-auto pt-4 border-t border-[#3a3a4f] text-xs">
            <div className="mb-2">{t('preset', language)}: <span className="font-medium text-purple-400">{currentPreset}</span></div>
            <button onClick={toggleHighContrast} className="w-full py-1 text-left hover:text-white">{t('toggle_high_contrast', language)}</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0 bg-[#0a0a12]">
          {/* Top Bar */}
          <div className="h-14 border-b border-[#3a3a4f] bg-[#0f0f19] px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4">
              <GradientText 
                text={t(panels.find(p => p.id === activePanel)?.labelKey || 'app_title', language)} 
                className="text-2xl" 
              />
              <div className="text-xs px-3 py-1 bg-[#1c1c2a] rounded-full text-[#9ca3b8]">
                <RotatingText texts={["React + React Bits", "Epic Encounters", "Roll for Initiative"]} />
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Language switcher */}
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 py-0.5 text-xs border rounded ${language === l.code ? 'border-orange-500 text-orange-400' : 'border-[#3a3a4f]'}`}
                >
                  {l.label}
                </button>
              ))}

              {/* World status, Share, Preset buttons etc. */}
              <button onClick={() => applyPreset('5e-heroic')} className="px-3 py-1 text-xs border border-purple-800 rounded">5e Heroic</button>
              <button onClick={() => applyPreset('osr-gritty')} className="px-3 py-1 text-xs border border-purple-800 rounded">OSR Gritty</button>
              {/* Add World, Regions, Snapshot buttons */}
            </div>
          </div>

          {/* Panel Content */}
          <div className="flex-1 overflow-auto p-6">
            {panels.map(p => {
              if (p.id === activePanel && p.Component) {
                const Comp = p.Component;
                return <Comp key={p.id} />;
              }
              return null;
            })}
          </div>
        </div>

        {/* Right Sidebar (History + Controls) */}
        <div className="w-80 flex-shrink-0 border-l border-[#3a3a4f] bg-[#0f0f19] p-4 overflow-auto">
          <div className="font-semibold mb-2">{t('session_history', language)}</div>
          {/* Port global history list */}
          <div className="text-sm text-[#6b7280]">
            {t('history_placeholder', language)}
          </div>
        </div>
      </div>
    </div>
  );
}
