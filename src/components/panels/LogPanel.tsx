import { useRef, useEffect, useState } from 'react';
import { useTTRPGStore } from '../../store/useTTRPGStore';
import { t } from '../../i18n';
import Particles from '../ui/Particles';

export default function LogPanel() {
  const {
    logEntries,
    logSessions,
    currentLogSessionId,
    addToLog,
    language,
    createLogSession,
    setCurrentLogSession,
    renameLogSession,
    deleteLogSession,
    clearLogSession,
    clearUnfolderedLogs,
    deleteLogEntry,
    moveLogEntry,
    exportLogSession,
    ensureLogSession,
  } = useTTRPGStore();

  const [input, setInput] = useState('');
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [movingEntryId, setMovingEntryId] = useState<number | null>(null);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Ensure sessions exist (handles migration of flat old logs)
  useEffect(() => {
    ensureLogSession();
  }, [ensureLogSession]);

  const sessions = logSessions && logSessions.length ? logSessions : [];
  const activeSessionId = currentLogSessionId || sessions[0]?.id || 'default';
  const currentSession = sessions.find((s) => s.id === activeSessionId) || sessions[0];
  const otherSessions = sessions.filter((s) => s.id !== activeSessionId);

  const visibleEntries = logEntries
    .filter((e: any) => !e.sessionId || e.sessionId === activeSessionId)
    .sort((a: any, b: any) => (a.id || 0) - (b.id || 0));

  const handleAdd = () => {
    if (input.trim()) {
      addToLog(input.trim(), 'note', replyTo || undefined);
      setInput('');
      setReplyTo(null);
    }
  };

  const handleNewSession = () => {
    const name = prompt(t('new_session', language).replace('+ ', '') + ' name?', 'New Session');
    if (name && name.trim()) {
      createLogSession(name.trim());
      setMovingEntryId(null);
    }
  };

  const handleRename = () => {
    if (!currentSession) return;
    const name = prompt('Rename session to:', currentSession.name);
    if (name && name.trim()) {
      renameLogSession(currentSession.id, name.trim());
    }
  };

  const handleDelete = () => {
    if (!currentSession) return;
    if (sessions.length <= 1) {
      alert('Cannot delete the last session.');
      return;
    }
    if (confirm(`Delete session "${currentSession.name}"? Entries will move to another session.`)) {
      deleteLogSession(currentSession.id);
      setMovingEntryId(null);
    }
  };

  const handleClearLogs = () => {
    if (!currentSession) return;
    if (confirm(`Clear all logs in "${currentSession.name}"?`)) {
      clearLogSession(currentSession.id);
      setReplyTo(null);
      setMovingEntryId(null);
    }
  };

  const handleClearUnfoldered = () => {
    if (confirm('Clear all un-foldered / orphaned logs?')) {
      clearUnfolderedLogs();
      setReplyTo(null);
      setMovingEntryId(null);
    }
  };

  const handleExportLog = (format: 'md' | 'txt' | 'csv' = 'md') => {
    exportLogSession(activeSessionId, format);
  };

  const handleMoveEntry = (id: number, targetSessionId: string) => {
    if (!targetSessionId) return;
    moveLogEntry(id, targetSessionId);
    if (replyTo === id) setReplyTo(null);
    setMovingEntryId(null);
  };

  const handleSwitch = (id: string) => {
    setCurrentLogSession(id);
    // clear transient states when switching folders
    setReplyTo(null);
    setMovingEntryId(null);
  };

  const startReply = (entryId: number) => {
    setReplyTo(entryId);
    inputRef.current?.focus();
  };

  // Auto-scroll to bottom when new log entries (or session switch) happen
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logEntries, currentLogSessionId]);

  return (
    <div className="relative">
      <Particles className="opacity-10" particleCount={30} />

      {/* Session / Folder selector - folders for logs */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="text-xs uppercase tracking-widest text-muted mr-1">{t('session', language)}:</div>

        {sessions.length > 0 && (
          <select
            value={activeSessionId}
            onChange={(e) => handleSwitch(e.target.value)}
            className="bg-surface2 border border-border rounded-xl px-3 py-1 text-sm"
          >
            {sessions.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        )}

        <button
          onClick={handleNewSession}
          className="px-3 py-1 text-xs bg-emerald-700/70 hover:bg-emerald-600 rounded-xl"
          title="Create a new log folder/session"
        >
          {t('new_session', language)}
        </button>

        <button
          onClick={handleRename}
          className="px-2.5 py-1 text-xs border border-border hover:bg-surface2 rounded-xl"
          disabled={!currentSession}
        >
          {t('rename', language)}
        </button>

        <button
          onClick={handleDelete}
          className="px-2.5 py-1 text-xs border border-red-900/60 hover:bg-red-950 text-red-400 rounded-xl"
          disabled={!currentSession || sessions.length <= 1}
        >
          {t('delete', language)}
        </button>

        <button
          onClick={handleClearLogs}
          className="px-2.5 py-1 text-xs border border-amber-800/60 hover:bg-amber-900/40 text-amber-400 rounded-xl"
          disabled={!currentSession}
          title="Clear all entries in the current log session/folder"
        >
          {t('clear_logs', language)}
        </button>

        <button
          onClick={handleClearUnfoldered}
          className="px-2.5 py-1 text-xs border border-slate-700/60 hover:bg-slate-800 text-slate-400 rounded-xl"
          title="Remove logs that are not assigned to any session/folder (orphaned from older data)"
        >
          {t('clear_unfoldered', language)}
        </button>

        <div className="flex items-center gap-1">
          <span className="text-[10px] text-muted mr-0.5">{t('export_log', language)}:</span>
          <button
            onClick={() => handleExportLog('md')}
            className="px-2 py-1 text-xs border border-emerald-800/60 hover:bg-emerald-900/40 text-emerald-400 rounded-xl"
            disabled={!currentSession || visibleEntries.length === 0}
            title="Export current session as Markdown (.md)"
          >
            {t('export_md', language)}
          </button>
          <button
            onClick={() => handleExportLog('txt')}
            className="px-2 py-1 text-xs border border-emerald-800/60 hover:bg-emerald-900/40 text-emerald-400 rounded-xl"
            disabled={!currentSession || visibleEntries.length === 0}
            title="Export current session as plain text (.txt)"
          >
            {t('export_txt', language)}
          </button>
          <button
            onClick={() => handleExportLog('csv')}
            className="px-2 py-1 text-xs border border-emerald-800/60 hover:bg-emerald-900/40 text-emerald-400 rounded-xl"
            disabled={!currentSession || visibleEntries.length === 0}
            title="Export current session as CSV (.csv)"
          >
            {t('export_csv', language)}
          </button>
        </div>

        <div className="ml-auto text-[10px] text-muted">
          {visibleEntries.length} entries • move entries between folders with →
        </div>
      </div>

      {/* Reply context */}
      {replyTo && (
        <div className="mb-2 text-xs px-3 py-1 bg-surface2 border border-border rounded-xl inline-flex items-center gap-2">
          <span>{t('reply_to', language)} #{replyTo}</span>
          <button onClick={() => setReplyTo(null)} className="text-red-400 hover:text-red-300">✕</button>
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          placeholder={t('add_note', language)}
          className="flex-1 bg-surface2 border border-border rounded-2xl px-4 py-2"
        />
        <button onClick={handleAdd} className="px-6 bg-emerald-600 rounded-2xl">{t('add', language)}</button>
      </div>

      {/* Log list - vertical, filtered to current session/folder + indented for linked replies */}
      <div 
        ref={logContainerRef}
        className="max-h-[500px] overflow-y-auto flex flex-col gap-2 pr-1"
      >
        {visibleEntries.length === 0 && (
          <div className="text-sm text-muted italic p-2">{t('no_log_entries', language)}</div>
        )}
        {visibleEntries.map((entry: any) => {
          const isReply = !!entry.parentId;
          return (
            <div 
              key={entry.id} 
              className={`panel p-3 text-sm ${isReply ? 'ml-6 border-l-2 border-border' : ''}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs text-muted mr-2">{entry.ts}</span>
                  {isReply && <span className="text-muted mr-1">↳</span>}
                  {entry.text}
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {movingEntryId === entry.id ? (
                    <>
                      <select
                        className="text-xs bg-surface2 border border-border rounded px-2 py-0.5"
                        onChange={(e) => handleMoveEntry(entry.id, e.target.value)}
                        defaultValue=""
                      >
                        <option value="" disabled>{t('move_to', language)}</option>
                        {otherSessions.map((s) => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </select>
                      <button
                        onClick={() => setMovingEntryId(null)}
                        className="text-xs px-1.5 py-0.5 opacity-70 hover:opacity-100 rounded hover:bg-surface3"
                      >
                        {t('cancel', language)}
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => startReply(entry.id)} 
                        className="text-xs px-1.5 py-0.5 opacity-60 hover:opacity-100 rounded hover:bg-surface3"
                        title={t('reply_to', language)}
                      >
                        ↩
                      </button>
                      <button 
                        onClick={() => deleteLogEntry(entry.id)} 
                        className="text-xs px-1.5 py-0.5 text-red-400/70 hover:text-red-400 hover:bg-red-950/50 rounded"
                        title={t('delete_entry', language)}
                      >
                        ✕
                      </button>
                      {otherSessions.length > 0 && (
                        <button 
                          onClick={() => setMovingEntryId(entry.id)} 
                          className="text-xs px-1.5 py-0.5 opacity-60 hover:opacity-100 rounded hover:bg-surface3"
                          title={t('move', language)}
                        >
                          →
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
