import { useState } from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';

// React Bits
import BlurText from '../ui/BlurText';
import SpotlightCard from '../ui/SpotlightCard';
import MagneticButton from '../ui/MagneticButton';
import GlitchText from '../ui/GlitchText';
import TiltCard from '../ui/TiltCard';

export default function DicePanel() {
  const [expr, setExpr] = useState('2d6+3');
  const [count, setCount] = useState(1);

  const {
    diceHistory,
    rollCustom,
    quickRoll,
    quickRollAdv,
    quickRollDis,
    quickRollPool,
    clearDiceHistory,
    language,
  } = useTTRPGStore();

  const lastRoll = diceHistory[0];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <BlurText
          text={t('panel_dice', language)}
          className="text-4xl font-bold tracking-tighter"
          delay={80}
        />
        <p className="text-muted mt-2">
          {t('dice_subtitle', language)}
        </p>
      </div>

      {/* Quick Dice - using MagneticButton for nice feel */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:flex md:flex-wrap gap-2 md:gap-3 mb-8">
        {[4, 6, 8, 10, 12, 20, 100].map((s) => (
          <MagneticButton
            key={s}
            onClick={() => quickRoll(s)}
            className="dice-btn px-4 py-3 md:px-5 bg-surface2 hover:bg-surface3 border border-border rounded-2xl font-mono text-sm"
          >
            d{s}
          </MagneticButton>
        ))}
        <MagneticButton onClick={quickRollAdv} className="col-span-2 sm:col-span-1 px-3 py-3 text-xs border border-border rounded-2xl">
          d20 + Adv
        </MagneticButton>
        <MagneticButton onClick={quickRollDis} className="col-span-2 sm:col-span-1 px-3 py-3 text-xs border border-border rounded-2xl">
          d20 + Dis
        </MagneticButton>
        <MagneticButton onClick={quickRollPool} className="col-span-4 sm:col-span-2 px-3 py-3 text-xs border border-orange-800 text-orange-400 rounded-2xl">
          4d6kh3 (stat)
        </MagneticButton>
      </div>

      {/* Custom Roll */}
      <SpotlightCard className="p-6 mb-8 rounded-3xl border border-border bg-surface">
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="text-xs text-muted">{t('expression', language)}</label>
            <input
              value={expr}
              onChange={(e) => setExpr(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && rollCustom(expr, count)}
              className="w-full bg-surface2 border border-border focus:border-orange-500 rounded-2xl px-4 py-3 font-mono text-lg"
              placeholder="2d6+3"
            />
          </div>
          <div>
            <label className="text-xs text-muted">{t('times', language)}</label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
              onKeyDown={(e) => e.key === 'Enter' && rollCustom(expr, count)}
              className="w-20 bg-surface2 border border-border rounded-2xl px-3 py-3 text-center"
              min="1"
            />
          </div>
          <MagneticButton
            onClick={() => rollCustom(expr, count)}
            className="px-10 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-semibold"
          >
            {t('roll', language)}
          </MagneticButton>
        </div>
      </SpotlightCard>

      {/* Last Result - enhanced with React Bits effects */}
      {lastRoll && (
        <div className="mb-8" aria-live="polite">
          <TiltCard>
            <div className="panel p-6 rounded-3xl border border-orange-500/30 bg-black/40">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-muted">{lastRoll.expr}</div>
                  {lastRoll.detail && lastRoll.detail.includes('rolled ') ? (
                    <div>
                      {(() => {
                        // Robust parse for "rolled 12/19 → 15+2 (adv)" or "rolled 8/14 → 8 (dis)"
                        const m = lastRoll.detail.match(/rolled (\d+)\/(\d+) → ([^ (]+)/);
                        if (m) {
                          const [, r1s, r2s, keptRaw] = m;
                          const r1 = parseInt(r1s, 10);
                          const r2 = parseInt(r2s, 10);
                          // keptRaw may be "15" or "15+2", compute numeric kept for compare
                          const keptNumMatch = keptRaw.match(/(-?\d+)/);
                          const keptNum = keptNumMatch ? parseInt(keptNumMatch[1], 10) : lastRoll.total;
                          const isAdv = lastRoll.detail.includes('adv');
                          return (
                            <div>
                              <div className="flex items-baseline gap-3 mt-1">
                                <div className="flex items-baseline gap-1">
                                  <span className={`text-4xl font-mono tabular-nums ${r1 === keptNum ? 'text-orange-400 font-semibold' : 'text-muted line-through'}`}>{r1}</span>
                                  <span className="text-muted text-2xl mx-0.5">/</span>
                                  <span className={`text-4xl font-mono tabular-nums ${r2 === keptNum ? 'text-orange-400 font-semibold' : 'text-muted line-through'}`}>{r2}</span>
                                </div>
                                <div className="text-6xl font-bold tabular-nums mono text-orange-400 ml-1">→ {lastRoll.total}</div>
                              </div>
                              <div className="text-[10px] text-muted mt-0.5">
                                {isAdv ? t('advantage_kept', language) : t('disadvantage_kept', language)}
                              </div>
                            </div>
                          );
                        }
                        return <div className="text-6xl font-bold tabular-nums mono mt-2 text-orange-400"><GlitchText text={String(lastRoll.total)} className="text-6xl" /></div>;
                      })()}
                    </div>
                  ) : (
                    <div className="text-6xl font-bold tabular-nums mono mt-2 text-orange-400">
                      <GlitchText text={String(lastRoll.total)} className="text-6xl" />
                    </div>
                  )}
                </div>
                <div className="text-right text-sm max-w-[180px] text-muted">{lastRoll.detail}</div>
              </div>
            </div>
          </TiltCard>
        </div>
      )}

      {/* History + Stats */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <div className="section-title">{t('history', language)}</div>
          <button onClick={clearDiceHistory} className="text-xs text-muted">{t('clear', language)}</button>
        </div>
        <div className="panel rounded-2xl p-2 max-h-80 overflow-auto">
          {diceHistory.length === 0 && (
            <div className="p-3 text-muted">{t('no_rolls', language)}</div>
          )}
          {diceHistory.map((h, i) => (
            <div 
              key={i} 
              onClick={() => navigator.clipboard.writeText(`${h.expr} → ${h.total}${h.detail ? ' ' + h.detail : ''}`)}
              className={`px-3 py-[5px] flex justify-between text-sm items-center cursor-pointer hover:bg-surface2 ${i===0 ? 'text-white' : 'text-fg'}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-orange-400 mono font-medium">{h.expr}</span>
                <span className="text-muted">{h.detail || ''}</span>
              </div>
              <div className="font-semibold tabular-nums mono">{h.total}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
