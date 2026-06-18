import React from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import BlurText from '../ui/BlurText';

export default function PlotWeather() {
  const { 
    generatePlotHook, 
    generateWeather, 
    currentPlotResult, 
    currentWeatherResult,
    addToLog,
    language
  } = useTTRPGStore();

  return (
    <div>
      <div className="mb-6">
        <BlurText text={t('plot_weather', language)} className="text-3xl font-bold" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <button 
            onClick={() => generatePlotHook()} 
            className="w-full py-3 bg-violet-600 hover:bg-violet-500 rounded-2xl mb-4"
          >
            {t('generate_plot_hook', language)}
          </button>
          <div className="panel p-4 min-h-[120px]">
            {currentPlotResult || t('click_to_generate_plot', language)}
          </div>
        </div>
        <div>
          <button 
            onClick={() => generateWeather()} 
            className="w-full py-3 bg-sky-600 hover:bg-sky-500 rounded-2xl mb-4"
          >
            {t('generate_weather', language)}
          </button>
          <div className="panel p-4 min-h-[120px]">
            {currentWeatherResult || t('click_to_generate_weather', language)}
          </div>
        </div>
      </div>
    </div>
  );
}
