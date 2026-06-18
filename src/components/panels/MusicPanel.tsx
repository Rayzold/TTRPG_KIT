import React, { useState, useEffect, useRef } from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import SpotlightCard from '../ui/SpotlightCard';
import BlurText from '../ui/BlurText';
import MagneticButton from '../ui/MagneticButton';
import Modal from '../shared/Modal';
import DecryptText from '../ui/DecryptText';
import Particles from '../ui/Particles';
import { MUSIC_DATA } from '../../data';

export default function MusicPanel() {
  const { 
    musicPlaylist, 
    musicFavorites, 
    addToMusicPlaylist, 
    removeFromMusicPlaylist,
    toggleMusicFavorite,
    removeFromMusicFavorites,
    clearMusicPlaylist,
    clearMusicFavorites,
    addToLog,
    language
  } = useTTRPGStore();

  // Dynamic mood results
  const [activeSuggestions, setActiveSuggestions] = useState<any[]>([]);
  const [activeMoodLabel, setActiveMoodLabel] = useState('');
  const [mix1, setMix1] = useState('boss-battle');
  const [mix2, setMix2] = useState('tavern');

  // Custom search
  const [customQuery, setCustomQuery] = useState('');

  // Projector
  const [isProjectorOpen, setIsProjectorOpen] = useState(false);
  const [currentProjIndex, setCurrentProjIndex] = useState(0);

  // Local audio (ephemeral blobs + player)
  const [localTracks, setLocalTracks] = useState<any[]>([]);
  const [currentLocalTrack, setCurrentLocalTrack] = useState<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingLocal, setIsPlayingLocal] = useState(false);
  const [localVolume, setLocalVolume] = useState(0.8);
  const [localLoop, setLocalLoop] = useState(false);

  const moodKeys = Object.keys(MUSIC_DATA);
  const playlist = musicPlaylist.length > 0 ? musicPlaylist : musicFavorites;

  // Helpers
  const make1hLoop = (track: any) => {
    if (!track) return '#';
    const q = encodeURIComponent(`${track.title} ${track.artist} 1 hour loop extended`);
    return `https://www.youtube.com/results?search_query=${q}`;
  };

  const openBoth = (yt: string, sp: string) => {
    if (yt) window.open(yt, '_blank');
    setTimeout(() => { if (sp) window.open(sp, '_blank'); }, 280);
  };

  const loadMood = (key: string) => {
    const mood = MUSIC_DATA[key];
    if (!mood) return;
    setActiveSuggestions(mood.suggestions || []);
    setActiveMoodLabel(mood.label);
  };

  const randomMood = () => {
    const key = moodKeys[Math.floor(Math.random() * moodKeys.length)];
    loadMood(key);
  };

  const mixMoods = () => {
    const m1 = MUSIC_DATA[mix1]?.suggestions || [];
    const m2 = MUSIC_DATA[mix2]?.suggestions || [];
    const combined = [...m1, ...m2].sort(() => Math.random() - 0.5).slice(0, 5);
    setActiveSuggestions(combined);
    setActiveMoodLabel(`Mix: ${MUSIC_DATA[mix1]?.label} + ${MUSIC_DATA[mix2]?.label}`);
  };

  const addSuggestionToPlaylist = (sug: any) => {
    addToMusicPlaylist({ 
      title: sug.title, 
      artist: sug.artist, 
      yt: sug.yt, 
      sp: sug.sp,
      why: sug.why,
      notes: sug.notes 
    });
  };

  const toggleFav = (sug: any) => {
    toggleMusicFavorite({ title: sug.title, artist: sug.artist, yt: sug.yt, sp: sug.sp, why: sug.why, notes: sug.notes });
  };

  // Projector controls
  const openProjector = () => {
    const source = musicPlaylist.length > 0 ? musicPlaylist : musicFavorites;
    if (source.length === 0) {
      alert('Add tracks to playlist or favorites first');
      return;
    }
    setCurrentProjIndex(0);
    setIsProjectorOpen(true);
  };

  const projNext = () => setCurrentProjIndex((i) => (i + 1) % playlist.length);
  const projPrev = () => setCurrentProjIndex((i) => (i - 1 + playlist.length) % playlist.length);
  const projPlay = () => {
    const track = playlist[currentProjIndex];
    if (track?.yt) window.open(track.yt, '_blank');
  };

  // Keyboard support for projector
  useEffect(() => {
    if (!isProjectorOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsProjectorOpen(false);
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') projNext();
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') projPrev();
      if (e.key === 'Enter') projPlay();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isProjectorOpen, currentProjIndex, playlist]);

  // Local audio helpers
  const playLocal = (track: any) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(track.url);
    }
    const audio = audioRef.current;
    audio.src = track.url;
    audio.loop = localLoop;
    audio.volume = localVolume;
    audio.play().then(() => {
      setCurrentLocalTrack(track);
      setIsPlayingLocal(true);
    }).catch(() => {});
  };

  const toggleLocalPlay = () => {
    const audio = audioRef.current;
    if (!audio || !currentLocalTrack) return;
    if (isPlayingLocal) {
      audio.pause();
      setIsPlayingLocal(false);
    } else {
      audio.play().then(() => setIsPlayingLocal(true));
    }
  };

  const stopLocal = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlayingLocal(false);
    setCurrentLocalTrack(null);
  };

  const updateLocalVolume = (val: number) => {
    setLocalVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  const toggleLocalLoop = (checked: boolean) => {
    setLocalLoop(checked);
    if (audioRef.current) audioRef.current.loop = checked;
  };

  const handleLocalFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const files = Array.from(e.target.files);
    const newTracks = files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file),
      mood: 'ambience'
    }));
    setLocalTracks(prev => [...prev, ...newTracks]);
    // Auto play first new one
    if (newTracks[0]) playLocal(newTracks[0]);
  };

  const removeLocalTrack = (idx: number) => {
    const t = localTracks[idx];
    if (currentLocalTrack?.url === t?.url) stopLocal();
    // Revoke url to free memory
    try { URL.revokeObjectURL(t.url); } catch {}
    setLocalTracks(prev => prev.filter((_, i) => i !== idx));
  };

  const customSearch = () => {
    const q = customQuery.trim();
    if (!q) return;
    const ytQ = encodeURIComponent(q + ' fantasy music');
    const spQ = encodeURIComponent(q);
    window.open(`https://www.youtube.com/results?search_query=${ytQ}`, '_blank');
    setTimeout(() => window.open(`https://open.spotify.com/search/${spQ}`, '_blank'), 200);
    addToLog(`Custom music search: ${q}`);
  };

  // Playlist reorder helpers
  const movePlaylistItem = (index: number, dir: number) => {
    const target = index + dir;
    if (target < 0 || target >= musicPlaylist.length) return;
    const store = useTTRPGStore.getState() as any;
    if (store.reorderMusicPlaylist) {
      store.reorderMusicPlaylist(index, target);
    }
  };

  return (
    <div className="max-w-5xl">
      <div className="flex justify-between mb-6">
        <div>
          <BlurText text={t('music_suggestions', language)} className="text-3xl font-bold" />
          <p className="text-[#9ca3b8] text-sm">{t('music_subtitle', language)}</p>
        </div>
        <div className="flex gap-2">
          <MagneticButton onClick={openProjector} className="px-5 py-2 border border-orange-800 text-orange-400">
            {t('open_projector', language)}
          </MagneticButton>
          <button onClick={() => { clearMusicPlaylist(); clearMusicFavorites(); }} className="text-xs px-3 py-1 border border-red-800 text-red-400 rounded">{t('clear_all', language)}</button>
        </div>
      </div>

      {/* Mood Buttons + Random */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="section-title">{t('moods', language)}</div>
          <button onClick={randomMood} className="text-xs px-3 py-1 border border-orange-800 text-orange-400 rounded">{t('random', language)}</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {moodKeys.map(key => {
            const m = MUSIC_DATA[key];
            const isActive = activeMoodLabel === m.label;
            return (
              <button
                key={key}
                onClick={() => loadMood(key)}
                className={`px-3 py-1.5 text-sm rounded-xl border flex items-center gap-1.5 transition ${isActive ? 'bg-violet-900/40 border-violet-600' : 'border-[#3a3a4f] bg-[#1c1c2a] hover:bg-violet-900/30'}`}
              >
                <span>{m.icon}</span> {m.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mood Mixer */}
      <div className="mb-6 panel p-4 rounded-2xl">
        <div className="text-xs font-medium mb-2 text-[#9ca3b8]">{t('mood_mixer', language)}</div>
        <div className="flex gap-2 items-center flex-wrap">
          <select value={mix1} onChange={e => setMix1(e.target.value)} className="bg-[#1c1c2a] border border-[#3a3a4f] rounded px-3 py-1 text-sm">
            {moodKeys.map(k => <option key={k} value={k}>{MUSIC_DATA[k].label}</option>)}
          </select>
          <span>+</span>
          <select value={mix2} onChange={e => setMix2(e.target.value)} className="bg-[#1c1c2a] border border-[#3a3a4f] rounded px-3 py-1 text-sm">
            {moodKeys.map(k => <option key={k} value={k}>{MUSIC_DATA[k].label}</option>)}
          </select>
          <button onClick={mixMoods} className="px-4 py-1 bg-[#242436] hover:bg-violet-900/30 border border-[#3a3a4f] rounded text-sm">{t('mix_suggestions', language)}</button>
        </div>
      </div>

      {/* Results Area */}
      {activeSuggestions.length > 0 && (
        <div className="mb-8">
          <div className="section-title mb-3">{activeMoodLabel || t('Suggestions', language) || 'Suggestions'}</div>
          <div className="space-y-3">
            {activeSuggestions.map((sug, idx) => {
              const isFav = musicFavorites.some((f: any) => f.title === sug.title && f.artist === sug.artist);
              const loopUrl = make1hLoop(sug);
              return (
                <SpotlightCard key={idx} className="p-4">
                  <div className="flex justify-between">
                    <div className="flex-1">
                      <div className="font-medium">{sug.title} — <span className="text-[#9ca3b8]">{sug.artist}</span></div>
                      {sug.why && <div className="text-sm mt-1">{sug.why}</div>}
                      {sug.notes && <div className="text-xs mt-1 text-amber-300/80">💡 {sug.notes}</div>}
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs ml-4">
                      <div className="flex gap-1">
                        <a href={sug.yt} target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 border border-red-800 rounded hover:bg-red-900/30">YT</a>
                        <a href={sug.sp} target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 border border-green-800 rounded hover:bg-green-900/30">SP</a>
                        <a href={loopUrl} target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 border border-blue-800 rounded hover:bg-blue-900/30">1h</a>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => addSuggestionToPlaylist(sug)} className="px-2 py-0.5 border border-teal-800 text-teal-400 rounded">+Playlist</button>
                        <button 
                          onClick={() => toggleFav(sug)} 
                          className={`px-2 py-0.5 border rounded ${isFav ? 'border-red-600 text-red-400' : 'border-[#3a3a4f]'}`}
                        >
                          {isFav ? '♥' : '♡'}
                        </button>
                        <button onClick={() => openBoth(sug.yt, sug.sp)} className="px-2 py-0.5 border border-[#3a3a4f] rounded">YT+SP</button>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      )}

      {/* Favorites + Playlist side-by-side on larger screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Favorites */}
        <div>
          <div className="flex justify-between mb-2">
            <div className="section-title">{t('favorites', language)}</div>
            <button onClick={clearMusicFavorites} className="text-xs text-red-400">{t('clear', language)}</button>
          </div>
          <div className="panel p-3 min-h-[90px] space-y-1 text-sm">
            {musicFavorites.length === 0 && <div className="text-[#575c6f] text-xs">Heart tracks from mood results.</div>}
            {musicFavorites.map((fav: any, i: number) => (
              <div key={i} className="flex justify-between items-center py-0.5 border-b border-[#3a3a4f] last:border-none">
                <div className="truncate">{fav.title} — {fav.artist}</div>
                <div className="flex gap-2 text-xs">
                  <a href={fav.yt} target="_blank" className="text-red-400">YT</a>
                  <button onClick={() => addToMusicPlaylist(fav)} className="text-teal-400">+PL</button>
                  <button onClick={() => removeFromMusicFavorites(i)} className="text-red-400">×</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session Playlist */}
        <div>
          <div className="flex justify-between mb-2">
            <div className="section-title">{t('session_playlist', language)} ({musicPlaylist.length})</div>
            <div className="flex gap-2">
              <button onClick={openProjector} className="text-xs border px-2 py-0.5 rounded">{t('panel_music', language)}</button>
              <button onClick={clearMusicPlaylist} className="text-xs text-red-400">{t('clear', language)}</button>
            </div>
          </div>
          <div className="panel p-3 min-h-[90px] text-sm">
            {musicPlaylist.length === 0 ? (
              <div className="text-[#575c6f] text-xs">Use +Playlist from any mood or favorites.</div>
            ) : (
              musicPlaylist.map((track: any, index: number) => (
                <div key={index} className="flex justify-between py-1 border-b last:border-none items-center">
                  <div className="truncate pr-2">{track.title} — {track.artist}</div>
                  <div className="flex gap-1.5 text-xs items-center shrink-0">
                    <a href={track.yt} target="_blank" rel="noopener noreferrer" className="px-1.5 py-px border border-red-800 rounded text-red-400">YT</a>
                    <a href={track.sp} target="_blank" rel="noopener noreferrer" className="px-1.5 py-px border border-green-800 rounded text-green-400">SP</a>
                    <button onClick={() => movePlaylistItem(index, -1)} className="px-1">↑</button>
                    <button onClick={() => movePlaylistItem(index, 1)} className="px-1">↓</button>
                    <button onClick={() => removeFromMusicPlaylist(index)} className="text-red-400">×</button>
                  </div>
                </div>
              ))
            )}
          </div>
          {musicPlaylist.length > 0 && (
            <button 
              onClick={() => { if (musicPlaylist.length) window.open(musicPlaylist[0].yt, '_blank'); }} 
              className="mt-1 text-xs px-2 py-0.5 border border-blue-800 rounded"
            >
              Open All YT (first)
            </button>
          )}
        </div>
      </div>

      {/* Custom Search + Local Audio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Custom Search */}
        <div className="panel p-4 rounded-2xl">
          <div className="font-medium mb-2 text-sm">Quick Custom Search</div>
          <div className="flex gap-2">
            <input 
              value={customQuery} 
              onChange={e => setCustomQuery(e.target.value)} 
              onKeyDown={e => e.key === 'Enter' && customSearch()}
              placeholder="dark forest ambience, tavern songs..." 
              className="flex-1 bg-[#1c1c2a] border border-[#3a3a4f] rounded-xl px-3 py-2 text-sm" 
            />
            <button onClick={customSearch} className="px-4 border border-[#3a3a4f] rounded-xl text-sm">Search YT+SP</button>
          </div>
          <div className="text-[10px] text-[#6b7280] mt-1">Opens YouTube + Spotify searches. Add "1h loop" for extended tracks.</div>
        </div>

        {/* Local Audio */}
        <div className="panel p-4 rounded-2xl">
          <div className="font-medium mb-2 text-sm">Local Audio (upload .mp3 etc)</div>
          <input type="file" accept="audio/*" multiple onChange={handleLocalFiles} className="text-xs mb-2" />
          
          {localTracks.length > 0 && (
            <div className="space-y-1 text-xs max-h-28 overflow-auto mb-2">
              {localTracks.map((t, i) => (
                <div key={i} className={`flex justify-between items-center px-2 py-0.5 rounded ${currentLocalTrack?.name === t.name ? 'bg-[#242436]' : ''}`}>
                  <span className="truncate cursor-pointer" onClick={() => playLocal(t)}>{t.name}</span>
                  <button onClick={() => removeLocalTrack(i)} className="text-red-400">×</button>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-2 items-center text-xs">
            <button onClick={toggleLocalPlay} disabled={!currentLocalTrack} className="px-3 py-1 border border-[#3a3a4f] rounded">{isPlayingLocal ? '⏸ Pause' : '▶ Play'}</button>
            <button onClick={stopLocal} className="px-2 py-1 border border-[#3a3a4f] rounded">Stop</button>
            <label className="ml-2">Vol</label>
            <input type="range" min="0" max="1" step="0.05" value={localVolume} onChange={e => updateLocalVolume(parseFloat(e.target.value))} className="w-20" />
            <label className="flex items-center gap-1"><input type="checkbox" checked={localLoop} onChange={e => toggleLocalLoop(e.target.checked)} /> Loop</label>
          </div>
          {currentLocalTrack && <div className="text-[10px] text-teal-400 mt-1 truncate">Now: {currentLocalTrack.name}</div>}
        </div>
      </div>

      {/* Projector Modal - enhanced */}
      <Modal isOpen={isProjectorOpen} onClose={() => setIsProjectorOpen(false)} title="Music Projector" className="max-w-5xl bg-black text-white">
        <div className="text-center py-8 relative min-h-[320px]">
          <Particles className="absolute inset-0" particleCount={140} speed={1.8} />
          
          <div className="text-5xl md:text-6xl font-bold mb-2 relative z-10 tracking-tighter">
            <DecryptText text={playlist[currentProjIndex]?.title || '—'} speed={22} />
          </div>
          <div className="text-2xl opacity-80 mb-6 relative z-10">{playlist[currentProjIndex]?.artist}</div>
          
          <div className="flex justify-center gap-4 relative z-10 mb-8">
            <button onClick={projPrev} className="text-xl px-6 py-2 border rounded hover:bg-white/10">◀ PREV</button>
            <MagneticButton onClick={projPlay} className="text-xl px-10 py-3 bg-orange-600">▶ OPEN ON YT</MagneticButton>
            <button onClick={projNext} className="text-xl px-6 py-2 border rounded hover:bg-white/10">NEXT ▶</button>
          </div>

          <div className="text-xs opacity-60 relative z-10">
            Keyboard: ← → or n/p • Enter to open YT • ESC close
          </div>
          {playlist[currentProjIndex]?.notes && (
            <div className="mt-4 text-xs text-amber-300/70 max-w-md mx-auto relative z-10">{playlist[currentProjIndex].notes}</div>
          )}
        </div>
      </Modal>
    </div>
  );
}

