import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import BlurText from '../ui/BlurText';
import MagneticButton from '../ui/MagneticButton';
import FadeContent from '../ui/FadeContent';
import TiltCard from '../ui/TiltCard';
import MagicCard from '../ui/MagicCard';

export default function NPCGenerator() {
  const { 
    npcSaved, 
    generateNPC, 
    addToLog,
    language,
  } = useTTRPGStore();

  const handleGenerate = (isVillain: boolean) => {
    generateNPC(isVillain);
  };

  const pinToLog = (npc: any) => {
    const text = `NPC: ${npc.name} (${npc.ancestry} ${npc.role})
Wears: ${npc.clothing || ''}
Appearance: ${npc.appearance}
Personality: ${npc.personality} • Flaw: ${npc.flaw}
Motivation: ${npc.motivation}
Secret: ${npc.secret}
Fear: ${npc.fear || ''} • Treasure: ${npc.treasure || ''} • Ability: ${npc.special_ability || ''}`;
    addToLog(text, 'note');
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <BlurText text={t('panel_npc', language)} className="text-3xl font-bold" />
        <p className="text-muted">{t('npc_subtitle', language)}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
        <MagneticButton 
          onClick={() => handleGenerate(false)}
          className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-2xl"
        >
          {t('generate_npc', language)}
        </MagneticButton>
        <MagneticButton 
          onClick={() => handleGenerate(true)}
          className="px-8 py-3 border border-red-800 text-red-400 rounded-2xl"
        >
          {t('generate_villain', language)}
        </MagneticButton>
      </div>

      <div>
        <div className="section-title mb-3">{t('saved_npcs', language)}</div>
        <div className="space-y-3">
          {npcSaved.length === 0 && (
            <div className="text-muted">{t('no_npcs_saved', language)}</div>
          )}
          {npcSaved.map((npc, index) => (
            <FadeContent key={index}>
              <TiltCard>
                <MagicCard className="p-4" gradientColor="#f97316">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-lg">{npc.name}</div>
                      <div className="flex flex-wrap gap-2 text-xs mt-1">
                        <span className="tag">{npc.ancestry}</span>
                        <span className="tag bg-orange-900/30 border-orange-800">{npc.role}</span>
                        {npc.isVillain && <span className="tag text-red-400 border-red-800">VILLAIN</span>}
                        {npc.faction && <span className="tag">{npc.faction}</span>}
                      </div>

                      {/* Clothing & appearance - user request focus */}
                      {npc.clothing && (
                        <div className="mt-3 text-sm">
                          <span className="text-muted text-xs">{t('wears', language)}:</span> {npc.clothing}
                        </div>
                      )}
                      {npc.appearance && (
                        <div className="mt-1 text-sm"><span className="text-muted text-xs">{t('appearance', language)}:</span> {npc.appearance}</div>
                      )}

                      <div className="mt-2 text-sm space-y-0.5">
                        <div><span className="text-muted text-xs">{t('personality', language)}:</span> {npc.personality}</div>
                        <div><span className="text-muted text-xs">{t('flaw', language)}:</span> {npc.flaw}</div>
                        <div><span className="text-muted text-xs">{t('motivation', language)}:</span> {npc.motivation}</div>
                        <div className="pt-1 border-t border-border/60 text-amber-300/90 text-sm"><span className="text-muted text-xs">{t('secret', language)}:</span> {npc.secret}</div>
                        {npc.quirk && <div><span className="text-muted text-xs">{t('quirk', language)}:</span> {npc.quirk}</div>}
                        {npc.fear && <div><span className="text-muted text-xs">{t('fear', language)}:</span> {npc.fear}</div>}
                        {npc.treasure && <div><span className="text-muted text-xs">{t('treasure', language)}:</span> {npc.treasure}</div>}
                        {npc.special_ability && <div><span className="text-muted text-xs">{t('special_ability', language)}:</span> {npc.special_ability}</div>}
                        {npc.voice && <div><span className="text-muted text-xs">{t('voice', language)}:</span> {npc.voice}</div>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-xs ml-3 shrink-0">
                      <button onClick={() => pinToLog(npc)} className="px-3 py-1 border border-border rounded hover:bg-surface3">{t('log', language)}</button>
                      <button onClick={() => navigator.clipboard.writeText(JSON.stringify(npc, null, 2))} className="px-3 py-1 border border-border rounded hover:bg-surface3">{t('copy', language)}</button>
                    </div>
                  </div>
                </MagicCard>
              </TiltCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </div>
  );
}
