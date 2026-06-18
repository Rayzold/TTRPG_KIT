import { useState } from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import BlurText from '../ui/BlurText';
import MagneticButton from '../ui/MagneticButton';
import SpotlightCard from '../ui/SpotlightCard';

export default function OraclePanel() {
  const { askOracle, addToLog, language } = useTTRPGStore();
  const [question, setQuestion] = useState('Will the heist succeed?');
  const [result, setResult] = useState('');

  const consult = () => {
    const res = (askOracle(question) as unknown as string) || '';
    setResult(res);
    addToLog(res);
  };

  return (
    <div className="max-w-xl">
      <div className="mb-6">
        <BlurText text={t('fate_oracle', language)} className="text-3xl font-bold" />
        <p className="text-[#9ca3b8] text-sm">{t('oracle_subtitle', language)}</p>
      </div>

      <div className="panel p-5 rounded-2xl mb-4">
        <input
          value={question}
          onChange={e => setQuestion(e.target.value)}
          className="w-full bg-[#1c1c2a] border border-[#3a3a4f] px-4 py-3 rounded-xl mb-3"
          placeholder="Will we find the artifact before the cult?"
        />
        <MagneticButton onClick={consult} className="w-full py-3 bg-violet-600 rounded-2xl">{t('consult_oracle', language)}</MagneticButton>
      </div>

      {result && (
        <SpotlightCard className="p-5">
          <div className="text-sm text-[#9ca3b8] mb-1">{t('the_oracle_speaks', language)}</div>
          <div className="text-lg">{result}</div>
          <button onClick={() => navigator.clipboard.writeText(result)} className="mt-3 text-xs px-3 py-1 border border-[#3a3a4f] rounded">Copy</button>
        </SpotlightCard>
      )}
    </div>
  );
}
