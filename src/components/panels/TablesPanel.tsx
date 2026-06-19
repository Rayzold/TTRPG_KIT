import { useState } from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import BlurText from '../ui/BlurText';
import SpotlightCard from '../ui/SpotlightCard';

const tableTypes = ['encounter', 'loot', 'quirk', 'rumor', 'travel', 'magic_item', 'dungeon_feature', 'npc_trait'];

export default function TablesPanel() {
  const { rollTable, addToLog, language, addCustomTableEntry, customTables } = useTTRPGStore();
  const [last, setLast] = useState<{ type: string; result: string } | null>(null);
  const [customType, setCustomType] = useState('encounter');
  const [customEntry, setCustomEntry] = useState('');

  const roll = (type: string) => {
    const res = rollTable(type);
    setLast({ type, result: res });
  };

  const pin = () => {
    if (last) addToLog(`Table ${last.type}: ${last.result}`);
  };

  const addCustom = () => {
    if (customEntry.trim()) {
      addCustomTableEntry(customType, customEntry.trim());
      setCustomEntry('');
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <BlurText text={t('quick_tables', language)} className="text-3xl font-bold" />
        <p className="text-muted">{t('tables_subtitle', language)}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {tableTypes.map(t => (
          <button key={t} onClick={() => roll(t)} className="px-4 py-2 border border-border rounded-xl capitalize hover:bg-surface2">
            {t}
          </button>
        ))}
      </div>

      {/* Editable Custom Tables */}
      <div className="mb-6 p-4 border border-border rounded-xl">
        <div className="text-sm mb-2">{t('custom_table', language)}</div>
        <div className="flex gap-2">
          <input 
            value={customType} 
            onChange={e => setCustomType(e.target.value)} 
            placeholder="Table type (e.g. my_table)" 
            className="bg-surface2 border border-border rounded px-2 w-32" 
          />
          <input 
            value={customEntry} 
            onChange={e => setCustomEntry(e.target.value)} 
            placeholder="New entry..." 
            className="flex-1 bg-surface2 border border-border rounded px-2" 
          />
          <button onClick={addCustom} className="px-3 bg-violet-600 rounded">Add</button>
        </div>
        {customTables[customType] && customTables[customType].length > 0 && (
          <div className="mt-2 text-xs text-muted">Custom for {customType}: {customTables[customType].join(' • ')}</div>
        )}
      </div>

      {last && (
        <SpotlightCard className="p-5">
          <div className="text-xs text-muted">{last.type.toUpperCase()}</div>
          <div className="text-lg mt-1">{last.result}</div>
          <div className="mt-4 flex gap-2 text-xs">
            <button onClick={pin} className="px-3 py-1 border border-border rounded">{t('log', language)}</button>
            <button onClick={() => navigator.clipboard.writeText(last.result)} className="px-3 py-1 border border-border rounded">{t('copy', language)}</button>
          </div>
        </SpotlightCard>
      )}
    </div>
  );
}
