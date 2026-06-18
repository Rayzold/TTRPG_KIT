# TTRPG Kit React Port - Completion Roadmap

**Status:** Partial port of original single-file TTRPG GM Toolkit (index.html).
Current implemented panels (as of latest): Dice, NPC (enhanced), Town (enhanced), Encounters, Initiative (partial), Music (greatly expanded), Plot+Weather, Log, Regions/World (partial).

**Goal:** Full feature parity + React Bits polish + Zustand state + PWA + shareable state. No new invented features.

## Current Gaps (compared to original)

### 1. Missing Panels / Tools (High Priority)
- **Names Generator** (`generateNames(style)`)
  - Fantasy, Human, Elven, Dwarven, Orcish etc.
  - Separate panel + quick buttons.
- **Oracle / Fate** (`askOracle(question)`)
  - Yes/no with twist (and/but/however).
  - Input + result display.
- **Backstories** (`generateBackstory(dark?)`)
  - Rich backstory generator.
  - Saved backstories list.
- **Quick Tables** (separate from generators)
  - encounter, loot, quirk, rumor, travel, etc. `rollTable(type)`
  - Quick roll buttons + results.
- **Crafting Tracker**
  - `crafts` state array.
  - Add craft, advance days (1/7), costs, progress.
  - List + controls.
- **Custom Tables**
  - User-defined tables in `customTables`.
  - Create, roll, edit, save.

### 2. Incomplete Core Features
- **Dice Roller** (`rollCustom`, `parseDice`)
  - Full parser: XdY, XdY+Z, XdY!, XdY>N successes, adv/dis, khN.
  - Two-roll display for adv/dis already improved but full expression parsing stubby (uses crude random now).
  - History, stats, macros (diceMacros state exists but UI weak).
- **Initiative Tracker**
  - Full: edit HP/AC, damage buttons, addConditionPrompt (currently uses prompt()).
  - Proper round/turn tracking, decrementTimedConditions.
  - Export log.
  - Drag reorder is partial (console.log only in some places; now has store reorder for music but need for init).
- **Encounters**
  - `adjustEncounterDifficulty`, full template save/load/delete.
  - Better add to initiative integration.
  - Level scaling is good but more loot tables, tactics variety.
- **Music**
  - Recently expanded (good). Still could use:
    - Full openAllPlaylist.
    - More 1h specific links, export MD.
- **Plot & Weather**
  - More variety, season selector for weather, hook from town/NPC integration.
- **Regions & World**
  - `world` state, factions, advanceWorld, threats, currentRegion bias.
  - Interactive map (currently stub?).
  - Full dashboard.
- **Presets**
  - `applyPreset` is minimal (just sets key + log). Needs to bias names, tables, ancestries, encounter monsters etc. as in original.
- **Log**
  - Full pinning from everywhere, filters, markdown export, structure (recap/threads).
- **Right sidebar / Global History**
  - Currently placeholder. Port globalHistory display.

### 3. State & Store Gaps
- Many actions declared but not (fully) implemented:
  - generateNames, generateBackstory, askOracle, rollTable
  - adjustEncounterDifficulty, full nextTurn/round logic
  - exportAll, importAll, exportCampaignBible, copyCampaignSnapshot, copyShareableLink (some partial)
  - decrementTimedConditions (stub)
  - updatePresetDisplay
- `customTables`, `savedBackstories`, `crafts`, `diceMacros`, `localTracks` (music local handled in panel), `gmNotes`
- Full diceHistory with proper expr parsing + rolls arrays for adv.

### 4. Sharing, Persistence, PWA, Polish
- URL hash base64 full state load/merge (copyShareableLink exists partially).
- Import file + drag-drop state.
- PWA: manifest, service worker, offline indicator (vite-plugin-pwa present in config?).
- High contrast already toggleable.
- Full mobile/responsive tweaks.
- More React Bits: everywhere possible (e.g. more Tilt/Magic on missing panels, Hyperspeed on high-stakes).
- Right sidebar: Session History + quick actions.
- Preset buttons bias actual generators.

### 5. Integration & Polish
- Cross-tool: "Generate town for NPC", "Plot from town", "Add encounter to initiative" full.
- "Add to Log" everywhere consistent.
- Edit modals for NPCs/towns (currently view only mostly).
- Conditions full duration timers in initiative.
- Local audio in music more robust.
- Tables custom creation UI.
- Crafting full.
- World advance button + effects.

### 6. Other / Nice-to-haves from original
- "Add to Initiative" from NPC/Town/Encounters more places.
- Export MD for more things (Bible, town, log).
- Keyboard shortcuts more places.
- Toast notifications (sonner is in deps history).
- Full data port (TABLE_DATA etc still partial in data/index.ts).

## Proposed Implementation Roadmap (Phased)

### Phase 1: Core Missing Generators & Panels (High Impact, Quick Wins)
- Implement missing actions in store: generateNames, askOracle, generateBackstory, rollTable (with data).
- Add panels: NamesGenerator.tsx, OraclePanel.tsx, BackstoryGenerator.tsx, TablesPanel.tsx.
- Wire into App.tsx sidebar + panels list.
- Basic UI using existing patterns (MagneticButton, SpotlightCard, TiltCard, FadeContent, addToLog).
- Populate more in data/index.ts (NAMES_DATA, TABLE_DATA full, etc.).

### Phase 2: Complete Existing Panels & Logic
- Finish Dice: proper parseDice + rolls detail for history/last result.
- Initiative: implement addConditionPrompt nicely (modal), edit, full nextTurn + round counter, damage.
- Encounters: more complete adjust, templates.
- RegionsWorld: implement world advance, factions, threat rolls.
- Presets: make applyPreset actually bias (e.g. change name pools, monster lists in store).
- Log: enhance with more pins, filters, export.
- Share: finish copyShareableLink + load from hash on start (useEffect in App or main).
- Right sidebar: globalHistory list + quick pins.

### Phase 3: Advanced Tools
- Custom Tables UI + CRUD.
- Crafting Tracker full panel + logic (advance days, list).
- More integrations (e.g. generate plot from current town/NPC).
- Full export/import buttons in UI.

### Phase 4: Polish, Sharing, PWA, Final
- PWA enhancements + offline notice.
- URL collab full + merge.
- More React Bits polish + responsive.
- Audit vs original index.html for 100%.
- Update README + APP_REVIEW (create if missing).
- Test all buttons, persistence, share link.

**Estimated remaining effort:** Large (10-20 panels/features + deep logic). Prioritize Phase 1 immediately.

## Current Progress Snapshot (post recent work)
- Music: Excellent (recent expansion).
- NPC/Town: Good (recent clothing/class, buildings/lore).
- Dice/Init/Encounters: Partial (adv/dis display good, scaling good).
- Store: ~60% actions real.
- Panels in UI: ~9/15.
- State sharing/presets: Partial.

Next immediate actions (in this session):
1. Create this roadmap.
2. Implement generateNames + Names panel.
3. Implement askOracle + Oracle panel.
4. Implement generateBackstory + Backstory panel.
5. Add Quick Tables.
6. Wire them + update App nav.
7. Flesh a few store actions + dice parser start.
8. Update README status.

Run `npm run dev` after changes to test.

Let's get to 100%!
