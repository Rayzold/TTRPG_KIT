import { useState } from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import SpotlightCard from '../ui/SpotlightCard';
import Modal from '../shared/Modal';
import TiltCard from '../ui/TiltCard';

export default function RegionsWorld() {
  const { world, setCurrentRegion, scoutRegion, rollWorldThreat, language } = useTTRPGStore();
  const [isWorldOpen, setIsWorldOpen] = useState(false);
  const [isRegionsOpen, setIsRegionsOpen] = useState(false);

  const regions = [
    { name: 'Wastes', desc: language === 'el' ? 'Ερημιά σαρωμένη από νανίτες' : 'Nanite-swept badlands' },
    { name: 'Wilds', desc: language === 'el' ? 'Δάση και λόφοι μεταλλαγμένων' : 'Mutant forests and hills' },
    { name: 'Frontier', desc: language === 'el' ? 'Ανακτημένα σύνορα' : 'Reclaimed borderlands' },
    { name: 'Heartland', desc: language === 'el' ? 'Καθιερωμένες εμπορικές οδοί' : 'Established trade routes' },
    { name: 'Scar', desc: language === 'el' ? 'Ερείπια στο σημείο μηδέν' : 'Ground zero ruins' },
  ];

  return (
    <div>
      <div className="flex gap-3 mb-8">
        <button onClick={() => setIsWorldOpen(true)} className="px-5 py-2 border border-teal-800 text-teal-400 rounded">{t('world_dashboard', language)}</button>
        <button onClick={() => setIsRegionsOpen(true)} className="px-5 py-2 border border-teal-800 text-teal-400 rounded">{t('regions', language)}</button>
        <button onClick={rollWorldThreat} className="px-5 py-2 border border-teal-800 text-teal-400 rounded">{t('roll_new_threat', language)}</button>
      </div>

      {/* World Modal */}
      <Modal isOpen={isWorldOpen} onClose={() => setIsWorldOpen(false)} title={t('world_status', language)}>
        <div>
          <div>{t('day', language)}: <strong>{world.day}</strong></div>
          <div className="mt-4">{t('current_region', language)}: {world.currentRegion || 'None'}</div>
          
          <div className="mt-6">
            <div className="text-sm mb-2">{t('faction_pressures', language)}</div>
            {Object.entries(world.factions || {}).map(([f, p]) => (
              <div key={f} className="flex gap-3 text-sm mb-1">
                <span className="w-28">{f}</span> 
                <input type="range" min="0" max="100" defaultValue={p as number} className="flex-1" />
                <span>{p}%</span>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Regions Modal */}
      <Modal isOpen={isRegionsOpen} onClose={() => setIsRegionsOpen(false)} title={t('world_regions', language)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {regions.map((r, i) => (
            <TiltCard key={i}>
              <SpotlightCard className="p-4">
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-[#9ca3b8] mb-3">{r.desc}</div>
                
                <div className="flex gap-2 text-xs">
                  <button onClick={() => scoutRegion(r.name)} className="px-3 py-1 border rounded hover:bg-[#242436]">{t('scout', language)}</button>
                  <button onClick={() => setCurrentRegion(r.name)} className="px-3 py-1 border border-teal-800 text-teal-400 rounded hover:bg-teal-900/30">{t('set_current', language)}</button>
                </div>
              </SpotlightCard>
            </TiltCard>
          ))}
        </div>
      </Modal>
    </div>
  );
}
