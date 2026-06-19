import React, { useState, useEffect } from 'react';
import { useTTRPGStore } from './store/useTTRPGStore';
import { t, languages } from './i18n';

// Tracks a CSS media query reactively (e.g. reduced-motion preference, viewport width).
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

// React Bits imports (install via shadcn as per guide)
import Aurora from './components/ui/Aurora';
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileHistoryOpen, setMobileHistoryOpen] = useState(false);
  const {
    currentPreset, applyPreset, language, setLanguage,
    highContrast, toggleHighContrast,
    reduceMotion, toggleReduceMotion,
    logEntries,
    deleteLogEntry,
  } = useTTRPGStore();

  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isMobile = useMediaQuery('(max-width: 767px)');
  // Kill the animated backgrounds if the user asked to reduce motion (in-app
  // toggle or OS setting). On phones we also thin out the particle field for battery.
  const motionOff = reduceMotion || prefersReducedMotion;
  const particleCount = isMobile ? 30 : 80;

  // Apply persisted display prefs to <body> and keep <html lang> in sync with the
  // language switch — a single effect, so they can't drift from the store on reload.
  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);
  useEffect(() => {
    document.body.classList.toggle('reduce-motion', reduceMotion);
  }, [reduceMotion]);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Latest session-log entries, newest first, for the right-hand history rail.
  const recentHistory = [...logEntries].slice(-50).reverse();

  return (
    <div className="min-h-screen bg-bg text-fg relative overflow-hidden">
      {/* Background layer - behind everything. Skipped entirely when motion is reduced. */}
      {!motionOff && (
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <Aurora
            colorStops={['#1a1a38', '#3a2a1f', '#0a0a12']}
            blend={0.55}
            speed={0.35}
          />
          <Particles
            className="opacity-30"
            particleCount={particleCount}
            speed={0.8}
          />
        </div>
      )}

      {/* Content layer */}
      <div className="relative z-10 flex h-screen">
        {/* Mobile backdrops */}
        {(mobileNavOpen || mobileHistoryOpen) && (
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => {
              setMobileNavOpen(false);
              setMobileHistoryOpen(false);
            }}
          />
        )}

        {/* Sidebar (desktop always visible, mobile as drawer) */}
        <div 
          className={`fixed md:static inset-y-0 left-0 z-50 w-64 flex-shrink-0 bg-surface border-r border-border flex flex-col p-4 overflow-auto transform transition-transform duration-200 md:transform-none md:translate-x-0 ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        >
          <div className="flex items-center justify-between mb-6 md:mb-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎲</div>
              <div>
                <div className="font-bold text-xl">{t('app_title', language)}</div>
                <div className="text-xs text-muted">{t('react_edition', language)}</div>
              </div>
            </div>
            <button 
              onClick={() => setMobileNavOpen(false)} 
              className="md:hidden text-xl p-1"
            >
              ✕
            </button>
          </div>

          {categories.map((cat, idx) => (
            <div key={cat.titleKey} className={idx === 0 ? "mb-1" : "mt-2 mb-1"}>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted">{t(cat.titleKey, language)}</div>
              {panels
                .filter(p => cat.ids.includes(p.id))
                .map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActivePanel(p.id);
                      setMobileNavOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 md:py-1.5 rounded mb-0.5 flex items-center gap-2 text-sm hover:bg-surface2 transition active:bg-surface3 ${activePanel === p.id ? 'bg-orange-900/30 text-orange-400' : ''}`}
                  >
                    {t(p.labelKey, language)}
                  </button>
                ))}
            </div>
          ))}

          <div className="mt-auto pt-4 border-t border-border text-xs">
            <div className="mb-2">{t('preset', language)}: <span className="font-medium text-purple-400">{currentPreset}</span></div>
            {/* Preset switching — reachable here on mobile, where the top-bar buttons are hidden */}
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => applyPreset('5e-heroic')}
                className={`flex-1 py-1.5 border rounded ${currentPreset === '5e-heroic' ? 'border-purple-500 text-purple-300' : 'border-purple-800'}`}
              >
                5e Heroic
              </button>
              <button
                onClick={() => applyPreset('osr-gritty')}
                className={`flex-1 py-1.5 border rounded ${currentPreset === 'osr-gritty' ? 'border-purple-500 text-purple-300' : 'border-purple-800'}`}
              >
                OSR Gritty
              </button>
            </div>
            <button
              onClick={toggleHighContrast}
              aria-pressed={highContrast}
              className={`w-full py-1 text-left hover:text-white ${highContrast ? 'text-orange-400' : ''}`}
            >
              {highContrast ? '✓ ' : ''}{t('toggle_high_contrast', language)}
            </button>
            <button
              onClick={toggleReduceMotion}
              aria-pressed={reduceMotion}
              className={`w-full py-1 text-left hover:text-white ${reduceMotion ? 'text-orange-400' : ''}`}
            >
              {reduceMotion ? '✓ ' : ''}{t('toggle_reduce_motion', language)}
            </button>
          </div>
        </div>

        {/* Mobile History Drawer (right side) */}
        <div
          className={`fixed md:hidden inset-y-0 right-0 z-50 w-64 flex-shrink-0 bg-surface border-l border-border flex flex-col p-4 overflow-auto transform transition-transform duration-200 ${mobileHistoryOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold">{t('session_history', language)}</div>
            <button
              onClick={() => setMobileHistoryOpen(false)}
              className="text-xl p-1"
            >
              ✕
            </button>
          </div>
          {recentHistory.length === 0 ? (
            <div className="text-sm text-muted">{t('history_placeholder', language)}</div>
          ) : (
            <div className="space-y-1">
              {recentHistory.map(h => (
                <div key={h.id} className="text-sm py-1 border-b border-border/40 flex items-start justify-between gap-2 group">
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <span className="text-xs text-muted">{h.ts}</span>
                    <span className="break-words">{h.text}</span>
                  </div>
                  <button
                    onClick={() => deleteLogEntry(h.id)}
                    className="text-xs text-red-400/50 hover:text-red-400 shrink-0 py-0.5"
                    title="Delete entry"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden overflow-x-hidden min-w-0 bg-bg">
          {/* Top Bar */}
          <div className="h-14 border-b border-border bg-surface px-3 md:px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              {/* Hamburger for mobile nav */}
              <button 
                onClick={() => setMobileNavOpen(true)} 
                className="md:hidden text-xl px-2 py-1 -ml-1"
                aria-label="Open navigation"
              >
                ☰
              </button>
              <div className="flex items-center gap-3 md:gap-4 min-w-0">
                <GradientText 
                  text={t(panels.find(p => p.id === activePanel)?.labelKey || 'app_title', language)} 
                  className="text-xl md:text-2xl truncate" 
                />
                <div className="hidden sm:block text-xs px-2 md:px-3 py-1 bg-[#1c1c2a] rounded-full text-muted whitespace-nowrap">
                  <RotatingText texts={["React + React Bits", "Epic Encounters", "Roll for Initiative"]} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 md:gap-2 text-xs">
              {/* Language switcher */}
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-1.5 md:px-2 py-0.5 border rounded ${language === l.code ? 'border-orange-500 text-orange-400' : 'border-border'}`}
                >
                  {l.label}
                </button>
              ))}

              {/* Preset buttons (compact on mobile) */}
              <button onClick={() => applyPreset('5e-heroic')} className="hidden sm:inline px-2 py-1 text-xs border border-purple-800 rounded">5e</button>
              <button onClick={() => applyPreset('osr-gritty')} className="hidden sm:inline px-2 py-1 text-xs border border-purple-800 rounded">OSR</button>

              {/* Mobile history button */}
              <button
                onClick={() => setMobileHistoryOpen(true)}
                className="md:hidden ml-1 px-2 py-1 text-xs border border-muted rounded hover:border-fg"
                aria-label="Open session history"
              >
                📋
              </button>
            </div>
          </div>

          {/* Panel Content */}
          <div className="flex-1 overflow-auto p-4 md:p-6">
            {panels.map(p => {
              if (p.id === activePanel && p.Component) {
                const Comp = p.Component;
                return <Comp key={p.id} />;
              }
              return null;
            })}
          </div>
        </div>

        {/* Right Sidebar (History) - hidden on mobile/tablet */}
        <aside className="hidden xl:block w-80 flex-shrink-0 border-l border-border bg-surface p-4 overflow-auto">
          <div className="font-semibold mb-2">{t('session_history', language)}</div>
          {recentHistory.length === 0 ? (
            <div className="text-sm text-muted">{t('history_placeholder', language)}</div>
          ) : (
            <div className="space-y-1">
              {recentHistory.map(h => (
                <div key={h.id} className="text-sm py-1 border-b border-border/40 flex gap-2 items-start group">
                  <span className="text-xs text-muted shrink-0 tabular-nums">{h.ts}</span>
                  <span className="min-w-0 break-words flex-1">{h.text}</span>
                  <button
                    onClick={() => deleteLogEntry(h.id)}
                    className="text-xs text-red-400/50 hover:text-red-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Delete entry"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
