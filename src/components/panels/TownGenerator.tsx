import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import BlurText from '../ui/BlurText';
import TiltCard from '../ui/TiltCard';
import FadeContent from '../ui/FadeContent';
import MagicCard from '../ui/MagicCard';

export default function TownGenerator() {
  const { townSaved, generateTown, addToLog, language } = useTTRPGStore();

  const pinTownToLog = (town: any) => {
    const buildings = (town.notableBuildings || []).map((b: string) => `• ${b}`).join('\n');
    const text = `Town: ${town.name} — ${town.size} (${town.population})
Population: ${town.populationType || town.population}
Region: ${town.region} — ${town.regionDesc || ''}
Lore: ${town.lore || town.descriptor}
Problem: ${town.problem}
Notable buildings:\n${buildings}
Government: ${town.government || ''}`;
    addToLog(text, 'note');
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <BlurText text={t('panel_town', language)} className="text-3xl font-bold" />
        <p className="text-muted">{t('town_subtitle', language)}</p>
      </div>

      <div className="flex gap-3 mb-6">
        {['hamlet', 'village', 'town', 'city'].map(size => (
          <button 
            key={size}
            onClick={() => generateTown(size)}
            className="px-4 py-2 border border-border rounded-xl hover:bg-surface2 capitalize"
          >
            {size}
          </button>
        ))}
        <button onClick={() => generateTown()} className="px-6 py-2 bg-orange-600 rounded-2xl">Random</button>
      </div>

      <div>
        <div className="section-title mb-3">{t('saved_towns', language)}</div>
        {townSaved.length === 0 ? (
          <div className="text-muted">{t('no_towns_saved', language)}</div>
        ) : (
          <div className="space-y-4">
            {townSaved.map((town, i) => (
              <FadeContent key={i}>
                <TiltCard>
                  <MagicCard className="p-4" gradientColor="#f97316">
                    <div>
                      <div className="font-semibold text-lg">{town.name} — {town.size}</div>
                      <div className="text-sm text-muted">{town.region} • {town.population} • {town.populationType}</div>
                    </div>

                    <div className="mt-3 grid grid-cols-1 gap-y-2 text-sm">
                      <div><span className="text-muted text-xs">{t('lore', language)}:</span> {town.lore || town.descriptor}</div>
                      <div><span className="text-muted text-xs">{t('problem', language)}:</span> <span className="text-red-300">{town.problem}</span></div>
                      <div><span className="text-muted text-xs">{t('signature', language)}:</span> {town.feature}</div>
                      <div><span className="text-muted text-xs">{t('government', language)}:</span> {town.government}</div>
                    </div>

                    {/* Notable buildings - user request */}
                    {town.notableBuildings && town.notableBuildings.length > 0 && (
                      <div className="mt-3">
                        <div className="text-xs text-muted mb-1">{t('notable_buildings', language)}</div>
                        <ul className="list-disc pl-5 text-sm space-y-px">
                          {town.notableBuildings.map((b: string, idx: number) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 flex gap-2 text-xs">
                      <button onClick={() => pinTownToLog(town)} className="px-3 py-1 border border-border rounded hover:bg-surface3">{t('log', language)}</button>
                      <button onClick={() => navigator.clipboard.writeText(JSON.stringify(town, null, 2))} className="px-3 py-1 border border-border rounded hover:bg-surface3">{t('copy', language)}</button>
                    </div>
                  </MagicCard>
                </TiltCard>
              </FadeContent>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
