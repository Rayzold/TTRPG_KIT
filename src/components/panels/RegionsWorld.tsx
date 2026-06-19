import { useState } from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import SpotlightCard from '../ui/SpotlightCard';
import Modal from '../shared/Modal';
import TiltCard from '../ui/TiltCard';

const REGIONS = [
  { name: 'Wastes',    en: 'Nanite-swept badlands',       el: 'Ερημιά σαρωμένη από νανίτες' },
  { name: 'Wilds',     en: 'Mutant forests and hills',    el: 'Δάση και λόφοι μεταλλαγμένων' },
  { name: 'Frontier',  en: 'Reclaimed borderlands',       el: 'Ανακτημένα σύνορα' },
  { name: 'Heartland', en: 'Established trade routes',    el: 'Καθιερωμένες εμπορικές οδοί' },
  { name: 'Scar',      en: 'Ground zero ruins',           el: 'Ερείπια στο σημείο μηδέν' },
];

export default function RegionsWorld() {
  const {
    world,
    setCurrentRegion,
    scoutRegion,
    rollWorldThreat,
    updateFactionPressure,
    addFaction,
    removeFaction,
    updateRegionNotes,
    advanceDay,
    language,
  } = useTTRPGStore();

  const [isWorldOpen, setIsWorldOpen] = useState(false);
  const [isRegionsOpen, setIsRegionsOpen] = useState(false);
  const [newFactionName, setNewFactionName] = useState('');
  const [editingNotes, setEditingNotes] = useState<Record<string, string>>({});

  const factions = world.factions || {};
  const regionData = world.regions || {};

  const handleNotesChange = (regionName: string, value: string) => {
    setEditingNotes(prev => ({ ...prev, [regionName]: value }));
  };

  const handleNotesSave = (regionName: string) => {
    updateRegionNotes(regionName, editingNotes[regionName] ?? (regionData[regionName]?.notes?.[0] || ''));
  };

  const getRegionNotes = (regionName: string) =>
    editingNotes[regionName] ?? (regionData[regionName]?.notes?.[0] || '');

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-8">
        <button onClick={() => setIsWorldOpen(true)} className="px-5 py-2 border border-teal-800 text-teal-400 rounded hover:bg-teal-900/30 transition-colors">
          {t('world_dashboard', language)}
        </button>
        <button onClick={() => setIsRegionsOpen(true)} className="px-5 py-2 border border-teal-800 text-teal-400 rounded hover:bg-teal-900/30 transition-colors">
          {t('regions', language)}
        </button>
        <button onClick={rollWorldThreat} className="px-5 py-2 border border-teal-800 text-teal-400 rounded hover:bg-teal-900/30 transition-colors">
          {t('roll_new_threat', language)}
        </button>
        <button
          onClick={() => advanceDay(1)}
          className="px-5 py-2 border border-border text-muted rounded hover:bg-surface2 transition-colors text-sm"
          title="Advance campaign by one day"
        >
          +1 Day (Day {world.day})
        </button>
      </div>

      {/* Recent events preview */}
      {world.recentEvents && world.recentEvents.length > 0 && (
        <div className="mb-6 p-4 bg-surface rounded-2xl border border-border">
          <div className="text-xs uppercase tracking-widest text-muted mb-2">Recent World Events</div>
          <div className="space-y-1">
            {[...world.recentEvents].reverse().map((e, i) => (
              <div key={i} className="text-sm flex gap-3">
                <span className="text-muted shrink-0">Day {e.day}</span>
                <span>{e.event}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* World Dashboard Modal */}
      <Modal isOpen={isWorldOpen} onClose={() => setIsWorldOpen(false)} title={t('world_status', language)}>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-muted text-sm">{t('day', language)}: </span>
              <strong className="text-2xl">{world.day}</strong>
            </div>
            <div className="flex gap-2 ml-auto">
              <button
                onClick={() => advanceDay(1)}
                className="px-3 py-1 text-xs border border-teal-800 text-teal-400 rounded hover:bg-teal-900/30"
              >
                +1 Day
              </button>
              <button
                onClick={() => advanceDay(7)}
                className="px-3 py-1 text-xs border border-border text-muted rounded hover:bg-surface2"
              >
                +1 Week
              </button>
            </div>
          </div>

          <div>
            <span className="text-muted text-sm">{t('current_region', language)}: </span>
            <strong>{world.currentRegion || 'None'}</strong>
          </div>

          {/* Faction sliders — fully controlled */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium">{t('faction_pressures', language)}</div>
            </div>
            <div className="space-y-3">
              {Object.entries(factions).map(([name, pressure]) => (
                <div key={name} className="flex items-center gap-3 text-sm">
                  <span className="w-28 shrink-0">{name}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={pressure as number}
                    onChange={(e) => updateFactionPressure(name, parseInt(e.target.value))}
                    className="flex-1 accent-teal-500"
                  />
                  <span className="w-10 text-right tabular-nums">{pressure}%</span>
                  <button
                    onClick={() => removeFaction(name)}
                    className="text-red-400/50 hover:text-red-400 text-xs ml-1"
                    title={`Remove ${name}`}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Add faction */}
            <div className="flex gap-2 mt-4">
              <input
                value={newFactionName}
                onChange={(e) => setNewFactionName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && newFactionName.trim()) {
                    addFaction(newFactionName);
                    setNewFactionName('');
                  }
                }}
                placeholder="New faction name…"
                className="flex-1 bg-surface2 border border-border rounded-xl px-3 py-1.5 text-sm"
              />
              <button
                onClick={() => {
                  if (newFactionName.trim()) {
                    addFaction(newFactionName);
                    setNewFactionName('');
                  }
                }}
                className="px-3 py-1.5 text-xs bg-teal-700/60 hover:bg-teal-600/60 rounded-xl"
              >
                Add
              </button>
            </div>
          </div>

          {/* Recent events */}
          {world.recentEvents && world.recentEvents.length > 0 && (
            <div>
              <div className="text-sm font-medium mb-2">Recent Events</div>
              <div className="space-y-1 text-sm">
                {[...world.recentEvents].reverse().map((e, i) => (
                  <div key={i} className="flex gap-3 text-sm py-1 border-b border-border/30">
                    <span className="text-muted shrink-0 tabular-nums">Day {e.day}</span>
                    <span>{e.event}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* Regions Modal */}
      <Modal isOpen={isRegionsOpen} onClose={() => setIsRegionsOpen(false)} title={t('world_regions', language)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REGIONS.map((r) => {
            const data = regionData[r.name];
            const isActive = world.currentRegion === r.name;
            return (
              <TiltCard key={r.name}>
                <SpotlightCard className={`p-4 ${isActive ? 'border border-teal-500/60' : ''}`}>
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <div className="font-semibold flex items-center gap-2">
                        {r.name}
                        {isActive && <span className="text-[10px] bg-teal-900/60 text-teal-400 px-1.5 py-0.5 rounded">CURRENT</span>}
                        {data?.visited && !isActive && <span className="text-[10px] text-muted">visited</span>}
                      </div>
                      <div className="text-xs text-muted mt-0.5">{language === 'el' ? r.el : r.en}</div>
                    </div>
                  </div>

                  {/* Threat level */}
                  {data && (
                    <div className="flex items-center gap-2 mt-2 mb-2">
                      <span className="text-xs text-muted w-16">Threat</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={data.threatLevel}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          useTTRPGStore.setState((state) => ({
                            world: {
                              ...state.world,
                              regions: {
                                ...state.world.regions,
                                [r.name]: { ...data, threatLevel: val }
                              }
                            }
                          }));
                        }}
                        className="flex-1 accent-red-500"
                      />
                      <span className="text-xs tabular-nums w-8 text-right">{data.threatLevel}</span>
                    </div>
                  )}

                  {/* Notes */}
                  <textarea
                    value={getRegionNotes(r.name)}
                    onChange={(e) => handleNotesChange(r.name, e.target.value)}
                    onBlur={() => handleNotesSave(r.name)}
                    placeholder="Region notes…"
                    rows={2}
                    className="w-full bg-surface2 border border-border/50 rounded-lg px-2 py-1.5 text-xs mt-2 resize-none"
                  />

                  <div className="flex gap-2 text-xs mt-2">
                    <button
                      onClick={() => scoutRegion(r.name)}
                      className="px-3 py-1 border border-border rounded hover:bg-surface3 transition-colors"
                    >
                      {t('scout', language)}
                    </button>
                    <button
                      onClick={() => setCurrentRegion(r.name)}
                      className={`px-3 py-1 border rounded transition-colors ${isActive ? 'border-teal-500 text-teal-300' : 'border-teal-800 text-teal-400 hover:bg-teal-900/30'}`}
                    >
                      {isActive ? 'Here' : t('set_current', language)}
                    </button>
                  </div>
                </SpotlightCard>
              </TiltCard>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
