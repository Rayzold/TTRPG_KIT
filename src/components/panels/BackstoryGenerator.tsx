import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import BlurText from '../ui/BlurText';
import MagneticButton from '../ui/MagneticButton';
import TiltCard from '../ui/TiltCard';
import FadeContent from '../ui/FadeContent';

export default function BackstoryGenerator() {
  const { generateBackstory, savedBackstories, addToLog, language } = useTTRPGStore();

  const handle = (dark?: boolean) => {
    generateBackstory(dark);
  };

  const pin = (bs: string) => {
    addToLog(`Backstory: ${bs}`);
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <BlurText text={t('backstory_generator', language)} className="text-3xl font-bold" />
      </div>

      <div className="flex gap-3 mb-6">
        <MagneticButton onClick={() => handle(false)} className="px-6 py-2 bg-emerald-600 rounded-2xl">{t('generate_backstory', language)}</MagneticButton>
        <MagneticButton onClick={() => handle(true)} className="px-6 py-2 border border-red-800 text-red-400 rounded-2xl">{t('dark_tragic', language)}</MagneticButton>
      </div>

      <div>
        <div className="section-title mb-3">{t('saved_backstories', language)}</div>
        {savedBackstories.length === 0 && <div className="text-[#575c6f]">{t('no_backstories', language)}</div>}
        <div className="space-y-3">
          {savedBackstories.map((bs: string, i: number) => (
            <FadeContent key={i}>
              <TiltCard>
                <div className="panel p-4">
                  <div>{bs}</div>
                  <div className="mt-3 flex gap-2 text-xs">
                    <button onClick={() => pin(bs)} className="px-3 py-1 border border-[#3a3a4f] rounded">{t('log', language)}</button>
                    <button onClick={() => navigator.clipboard.writeText(bs)} className="px-3 py-1 border border-[#3a3a4f] rounded">{t('copy', language)}</button>
                  </div>
                </div>
              </TiltCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </div>
  );
}
