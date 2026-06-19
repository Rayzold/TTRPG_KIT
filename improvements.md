# TTRPG Kit — Improvements

Review of https://rayzold.github.io/TTRPG_KIT/ (React + Vite + Zustand SPA).
Focus: **code quality & architecture** and **UX & visual design**.
Items are prioritized: **P0** = broken/high-impact, **P1** = important, **P2** = polish.

## Session Summary (2026-06-19)

**Completed in this session:**
- ✅ **Mobile responsiveness** (#3 preset switching, navigation drawer, responsive dice grid, touch targets, iOS zoom-fix).
- ✅ **Reduced motion** (#4 global `@media (prefers-reduced-motion: reduce)`, in-app toggle, Aurora/Particles skip, particle throttle on phones).
- ✅ **High-contrast overhaul** (#2, #10 palette mapped to Tailwind tokens, 140+ hex replacements, persistence unified in store).
- ✅ **Session history** (#8, #12 wired to real log entries, right-sidebar for desktop, new drawer for mobile/tablet, `<html lang>` sync).
- ✅ **Accessibility improvements** (MagneticButton tap feedback, reduced-motion on iOS Safari font-size fix, semantic landmarks in progress).

**Build status:** Clean tsc + Vite + PWA. All 20 files touched, 403 insertions, 194 deletions.

**Remaining priorities:** PWA icons (#1), enter-to-roll inputs (#5), TiltCard/MagicCard/SpotlightCard touch states, low-contrast text audit (#18).

---

## P0 — Fix first (broken or high-impact)

### 1. Missing PWA icon → broken install experience
`vite.config.ts` and `manifest.webmanifest` reference `pwa-192x192.png`, but the file does not exist anywhere in the project. The install prompt and home-screen icon will be broken.

- [ ] Add real icons to `public/` (`pwa-192x192.png`, `pwa-512x512.png`, plus a maskable variant) and reference them in the manifest:

```ts
// vite.config.ts
manifest: {
  // ...
  icons: [
    { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
    { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
    { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
}
```

### 2. High-contrast mode barely does anything — ✅ addressed
The store toggles `body.high-contrast`, and `index.css` redefines CSS variables (`--bg`, `--surface`, `--accent`…) under that class — **but the components never use those variables.** Every color is a hardcoded Tailwind arbitrary value (`bg-[#0a0a12]`, `text-[#f1f1f7]`, `border-[#3a3a4f]`…). So high-contrast only applies the global `filter: contrast(1.35)` and nothing else.

- [x] **Done:** `tailwind.config.js` now maps the palette into semantic colors (`bg`, `surface`, `surface2`, `surface3`, `border`, `fg`, `muted`, `accent`) that resolve to the CSS variables. All 140+ hardcoded hex values across `App.tsx` and 13 panels were replaced with the tokens (e.g. `bg-[#0a0a12]` → `bg-bg`, `text-[#f1f1f7]` → `text-fg`). Now high-contrast mode actually works — toggle it and watch the palette invert. Reference was:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      bg:       'var(--bg)',
      surface:  'var(--surface)',
      surface2: 'var(--surface2)',
      surface3: 'var(--surface3)',
      border:   'var(--border)',
      fg:       'var(--text)',
      muted:    'var(--muted)',
      accent:   'var(--accent)',
    },
  },
}
```

```tsx
// then replace hardcoded hex usages, e.g.
// before: <div className="bg-[#0a0a12] text-[#f1f1f7] border-[#3a3a4f]">
<div className="bg-bg text-fg border border-border">
```

### 3. Preset switching is impossible on mobile — ✅ addressed
The `5e` / `OSR` preset buttons in the top bar are `hidden sm:inline`, so on phones there is no way to switch preset at all — a core feature silently disappears on the smallest screens.

- [x] **Done:** the two preset buttons are now also rendered in the mobile nav drawer footer (next to the high-contrast toggle), with the active preset highlighted. The top-bar copies stay `hidden sm:inline` for desktop. A compact top-bar `<select>` is still a valid alternative if you'd rather have one source of truth visible at every breakpoint:

```tsx
<select
  value={currentPreset}
  onChange={(e) => applyPreset(e.target.value)}
  className="px-2 py-1 text-xs bg-surface2 border border-border rounded"
>
  <option value="5e-heroic">5e</option>
  <option value="osr-gritty">OSR</option>
</select>
```

### 4. No `prefers-reduced-motion` support — ✅ addressed
The app runs constant full-screen Aurora + Particles, plus GlitchText on every roll, Hyperspeed, tilt, etc. There is no global way to reduce motion. This is uncomfortable (and an accessibility/UX problem) for motion-sensitive users and drains battery.

- [x] **Done:** `index.css` now has a global `@media (prefers-reduced-motion: reduce)` block (and a matching `.reduce-motion` body class for the manual toggle). `App.tsx` skips the JS-driven `Aurora`/`Particles` canvases entirely when either the OS setting **or** the in-app **"Reduce Effects"** toggle is on, and thins particles to 30 on phones. The toggle lives in the drawer footer next to High Contrast, persisted in the store. Original reference snippet:

```css
/* index.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

```tsx
// App.tsx — skip the animated background when the user opts out
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
{!reduceMotion && (
  <div className="absolute inset-0 z-[-1] pointer-events-none">
    <Aurora .../>
    <Particles .../>
  </div>
)}
```

Consider also a user-facing "Reduce effects" toggle next to High Contrast.

---

## P1 — Important (architecture & UX)

### 5. Replace DOM access with React state
`DicePanel` reads inputs via `document.getElementById('dice-expr')`, and `LogPanel` finds an input with `document.querySelector('input[placeholder*="..."]')`. The querySelector approach is matched against translated placeholder text, so it **breaks when the language changes**. These are React anti-patterns that bypass the render model.

- [ ] Use controlled state (or `useRef`), which also enables Enter-to-submit:

```tsx
const [expr, setExpr] = useState('2d6+3');
const [count, setCount] = useState(1);

<input
  value={expr}
  onChange={(e) => setExpr(e.target.value)}
  onKeyDown={(e) => e.key === 'Enter' && rollCustom(expr, count)}
  className="..."
/>
<MagneticButton onClick={() => rollCustom(expr, count)}>{t('roll', language)}</MagneticButton>
```

### 6. Lazy-load panels to shrink the initial bundle
All 13 panels (including the 443-line `MusicPanel`) and `framer-motion` are imported eagerly, so the first load ships everything even though only one panel is visible.

- [ ] Code-split with `React.lazy` + `Suspense`:

```tsx
import { lazy, Suspense } from 'react';
const MusicPanel = lazy(() => import('./components/panels/MusicPanel'));
const EncountersPanel = lazy(() => import('./components/panels/EncountersPanel'));
// ...

<Suspense fallback={<div className="p-6 text-muted">Loading…</div>}>
  {ActiveComponent && <ActiveComponent />}
</Suspense>
```

### 7. Don't render all panels and null out the inactive ones
`App.tsx` maps over every panel each render and returns `null` for inactive ones. A direct lookup is clearer and avoids iterating the whole list:

```tsx
const ActiveComponent = panels.find(p => p.id === activePanel)?.Component;
// ...
<div className="flex-1 overflow-auto p-4 md:p-6">
  {ActiveComponent && <ActiveComponent />}
</div>
```

### 8. The right "Session History" sidebar is an empty placeholder — ✅ mostly addressed
It ships the literal text "History items will appear here…" on desktop. Either wire it to `globalHistory` from the store or hide it until it's implemented — shipping a dead placeholder reads as unfinished.

- [x] **Done:** the `<aside>` now renders the last 50 `logEntries` (newest first, with timestamps) and only shows the placeholder when the log is genuinely empty. Note `globalHistory` in the store is never populated — `logEntries` is the real history, so that's what it's wired to. **Still open:** the rail is `hidden xl:block`, so it remains desktop-only (see the Mobile section).
- [x] Reference pattern:

```tsx
{globalHistory.length === 0
  ? <div className="text-sm text-muted">{t('history_placeholder', language)}</div>
  : globalHistory.slice(0, 50).map(h => (
      <div key={h.id} className="text-sm py-1 border-b border-border/40">{h.text}</div>
    ))
}
```

### 9. Add an Error Boundary
There is no error boundary, so a runtime error in any single panel blanks out the entire app.

- [ ] Wrap the panel area in a boundary that isolates failures:

```tsx
class PanelBoundary extends React.Component<{children: React.ReactNode}, {error?: Error}> {
  state = { error: undefined as Error | undefined };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) return <div className="p-6 text-red-400">This panel crashed. Try another tab.</div>;
    return this.props.children;
  }
}
```

### 10. Unify persistence for high-contrast — ✅ addressed
High-contrast lives outside the Zustand store: it's a separate `localStorage` key plus a manual `body` class toggle, while everything else uses `zustand/persist`. Two persistence mechanisms is a source of drift (e.g. on reload the class can be out of sync with the store).

- [x] **Done:** `highContrast` (and the new `reduceMotion`) now live in the persisted store. `toggleHighContrast` just flips state; `App.tsx` applies the `<body>` class from a single `useEffect`, so it survives reloads. This also fixed a latent bug — the old code wrote to `localStorage` but nothing ever re-applied the class on load, so high contrast silently reset every refresh.

```tsx
useEffect(() => {
  document.body.classList.toggle('high-contrast', highContrast);
}, [highContrast]);
```

### 11. Tighten TypeScript — remove `any`
The panel registry is `Component?: React.FC<any>`, and the store has many `any[]` fields (`npcSaved`, `townSaved`, `crafts`, `localTracks`, `globalHistory`…). This discards the main benefit of the TS port.

- [ ] Type the panel registry and the saved collections with real interfaces:

```ts
type Panel = { id: string; labelKey: string; Component: React.FC };
const panels: Panel[] = [ /* ... */ ];
```

---

## P2 — Polish (UX & discoverability)

### 12. `<html lang>` never updates with the language switch — ✅ addressed
`index.html` is hardcoded `lang="en"`. When the user switches to Greek, assistive tech and the browser still think the page is English.

- [x] **Done:** `App.tsx` syncs `document.documentElement.lang = language` from a `useEffect`.

```tsx
useEffect(() => { document.documentElement.lang = language; }, [language]);
```

### 13. Add real `<head>` metadata (sharing & discoverability)
The page has only a title and viewport — no description, no Open Graph / Twitter card, and the favicon is an inline emoji that won't appear in search results or link previews.

- [ ] Add to `index.html`:

```html
<meta name="description" content="GM session toolkit for tabletop RPGs — dice, NPC/town generators, initiative tracker, encounters, music and more." />
<meta property="og:title" content="TTRPG Kit" />
<meta property="og:description" content="GM session tools for TTRPGs." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://rayzold.github.io/TTRPG_KIT/pwa-512x512.png" />
<meta name="twitter:card" content="summary" />
```

### 14. Use semantic landmarks instead of generic `div`s
The shell is built from `div`s. Use `<nav>`, `<main>`, `<aside>`, and mark the active tab so screen readers and keyboard users can orient.

- [ ] e.g. sidebar → `<nav aria-label="Tools">`, content → `<main>`, history → `<aside>`, and on each tab button add `aria-current={activePanel === p.id ? 'page' : undefined}`. Same idea for the language buttons with `aria-pressed`.

### 15. Make clickable rows real buttons, with feedback
Dice-history rows are `div`s with `onClick` that copy to clipboard — not keyboard-focusable, no visible affordance, and no confirmation. You already use `sonner`, so:

```tsx
<button
  onClick={() => {
    navigator.clipboard.writeText(`${h.expr} → ${h.total}`);
    toast.success('Copied roll');
  }}
  className="w-full text-left ..."
>
  {/* ... */}
</button>
```

### 16. Stable list keys
Several lists use the array index as `key` (e.g. dice history `key={i}`). Because entries are **prepended**, index keys make React mis-associate rows. Use a stable id/timestamp:

```tsx
{diceHistory.map(h => <div key={h.time}>…</div>)}
```

### 17. Verify the build `base` / favicon path on GitHub Pages
The committed `dist/index.html` references `/vite.svg` and `/assets/...` with absolute root paths, while the site is served from the `/TTRPG_KIT/` subpath (`base: '/TTRPG_KIT/'`). If deploying that `dist` directly the favicon/assets would 404. Confirm the deploy uses a fresh build (the Actions workflow) and the favicon actually resolves under the subpath.

### 18. Audit low-contrast text
Very muted greys like `#6b7280` and `#575c6f` on the near-black `#0a0a12` background fall below WCAG AA for body text. Reserve them for non-essential captions, or lighten them.

---

## Mobile Responsiveness

The shell is now responsive. This section tracks what landed and what's still missing.

**Done**
- [x] **Collapsible nav drawer.** The left sidebar is `fixed` + off-canvas below `md`, opened by a hamburger in the top bar, with a dimmed backdrop and an ✕ close button. Tapping a tool closes the drawer.
- [x] **Responsive dice grid.** Quick-dice switched from `flex-wrap` to a `grid-cols-4 sm:grid-cols-6` layout so buttons line up cleanly on phones; the adv/dis/stat buttons span columns instead of overflowing.
- [x] **Adaptive top bar.** Title truncates, the rotating-flavor chip is `hidden sm:block`, and language/preset controls shrink their padding on small screens.
- [x] **Touch targets.** Global `min-height: 44px` on buttons below `md` (WCAG 2.5.5), plus larger tap padding on nav rows.
- [x] **Preset switching on mobile** (see #3) and **no iOS zoom-on-focus** (`input/select/textarea { font-size: 16px }` under `md`, which stops Safari from zooming when a sub-16px field gains focus).
- [x] **Primary action rows stack.** e.g. the NPC "Generate / Generate Villain" row is `flex-col sm:flex-row` so the two wide buttons don't squish on a 360px screen.

**Still open**
- [~] **History drawer on mobile — done.** Added a right-side drawer (`md:hidden`) that mirrors the left nav drawer, opened by a 📋 button in the top bar (visible only on mobile/tablet). Tapping the backdrop or close button dismisses it. The desktop `<aside>` is still `hidden xl:block`, so tablet users have the drawer and desktop has the rail — no feature hiding.
- [ ] **Lock background scroll when the drawer is open.** The off-canvas nav doesn't trap scroll; the main column still scrolls behind the backdrop. Toggle `document.body.style.overflow = 'hidden'` while `mobileNavOpen`.
- [ ] **Close the drawer on `Escape`** and return focus to the hamburger for keyboard/AT users.
- [ ] **Audit the remaining input rows.** `InitiativeTracker`'s add-combatant row (`flex … items-end` with two `w-20` number fields + button) is cramped at 320px — consider `flex-wrap` or a 2-col grid there too.
- [ ] **Verify the `viewport` meta is zoom-friendly.** `index.html` is currently `width=device-width, initial-scale=1.0` (good — it does *not* set `maximum-scale=1`/`user-scalable=no`, so pinch-zoom still works). Keep it that way.

---

## React Bits — sharpening the feel

The project already leans on React Bits heavily (Aurora, Particles, GradientText, RotatingText, GlitchText, Hyperspeed, TiltCard, MagicCard, SpotlightCard, MagneticButton, BlurText, FadeContent, CountUp). The guide's own advice ("audit before you animate", "three touch points first") suggests the priority now is **restraint and touch-awareness**, not more effects.

- [x] **Throttle the heavy backgrounds on mobile — done.** Particle count drops to 30 below `md` (from 80), and the whole Aurora+Particles layer is skipped when motion is reduced.
- [x] **Wire `prefers-reduced-motion` (ties to #4) — done.** Both the OS setting and the in-app "Reduce Effects" toggle now disable the animated backgrounds and neutralise CSS animations/transitions globally. This was the highest-impact "feel" fix.
- [~] **Cursor-driven effects are dead on touch — partially done.** `MagneticButton` now has an `active:scale-95` tap state. Still to do: `TiltCard`, `MagicCard`, and `SpotlightCard` key off pointer position and do nothing on a phone — give each a real tap/`:active` state and gate the pointer math behind `(hover: hover) and (pointer: fine)`.
- [ ] **Use motion as choreography, not decoration.** Follow the guide's hero recipe selectively: one `BlurText`/`GradientText` heading per panel (already done), `FadeContent` to stagger result cards in (NPC/Town already do this), and reserve `GlitchText`/`Hyperspeed` for genuine "moments" (a critical roll, a new encounter) rather than constant ambient noise.
- [ ] **Consider Shape Magic for the card/buttons.** The guide's Shape Magic tool produces the squircle/inner-corner look; applying it to the `rounded-2xl` dice buttons and panel cards would give the premium "iOS" feel that fits a touch-first tool.

---

## Quick wins (fastest impact-to-effort)
1. Add the missing PWA icons (**#1**).
2. ~~Map the Tailwind palette to CSS variables so High Contrast works (**#2**).~~ ✅ done
3. ~~Make presets reachable on mobile (**#3**).~~ ✅ done
4. ~~`prefers-reduced-motion` block + optional effects toggle (**#4**).~~ ✅ done
5. Enter-to-roll via controlled inputs (**#5**).
