import { useState } from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import BlurText from '../ui/BlurText';
import MagneticButton from '../ui/MagneticButton';
import SpotlightCard from '../ui/SpotlightCard';
import FadeContent from '../ui/FadeContent';

const styles = ['fantasy', 'human', 'elven', 'dwarven', 'orcish'];

export default function NamesGenerator() {
  const { generateNames, addToLog, language } = useTTRPGStore();
  const [results, setResults] = useState<string[]>([]);
  const [lastStyle, setLastStyle] = useState('');

  const handleGenerate = (style: string) => {
    const namesStr = (generateNames(style) as unknown as string) || '';
    if (namesStr) {
      setResults(namesStr.split(', '));
      setLastStyle(style);
    }
  };

  const pin = () => {
    if (results.length) {
      addToLog(`Names (${lastStyle}): ${results.join(', ')}`);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <BlurText text={t('name_generator', language)} className="text-3xl font-bold" />
        <p className="text-[#9ca3b8]">{t('names_subtitle', language)}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {styles.map(s => (
          <MagneticButton key={s} onClick={() => handleGenerate(s)} className="px-4 py-2 border border-[#3a3a4f] capitalize">
            {s}
          </MagneticButton>
        ))}
        <button onClick={() => handleGenerate('fantasy')} className="px-6 py-2 bg-orange-600 rounded-2xl">{t('random_style', language)}</button>
      </div>

      {results.length > 0 && (
        <FadeContent>
          <SpotlightCard className="p-6 mb-4">
            <div className="text-xs text-[#9ca3b8] mb-1">{t('generated_names', language)} ({lastStyle})</div>
            <div className="flex flex-wrap gap-2">
              {results.map((n, i) => (
                <span key={i} className="px-3 py-1 bg-[#1c1c2a] rounded-xl border border-[#3a3a4f] text-sm">{n}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <button onClick={pin} className="text-xs px-3 py-1 border border-[#3a3a4f] rounded">{t('log', language)}</button>
              <button onClick={() => navigator.clipboard.writeText(results.join(', '))} className="text-xs px-3 py-1 border border-[#3a3a4f] rounded">{t('copy', language)}</button>
            </div>
          </SpotlightCard>
        </FadeContent>
      )}

      <div className="text-xs text-[#6b7280]">{t('click_style_hint', language)}</div>
    </div>
  );
}
