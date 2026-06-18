# TTRPG Kit - React Port

This is the React version of the TTRPG Kit GM Session Tools app, recreated following the detailed port guide in `../ttrpg-kit/REACT_TTRPG_KIT_PORT_GUIDE.md` and leveraging **React Bits** (from your reactbits-guide.md) for beautiful animations and effects.

## Features Ported
- All original panels (Dice, NPC, Town, Plot, Weather, Tables, Music with Playlist + Projector, Encounters with loot/tactics/templates, Initiative with timers/lair, Log, etc.)
- World state, Regions interactive map, Presets system
- Full persistence with Zustand
- PWA ready
- Collaboration via shareable URL hash
- High contrast mode + strong a11y
- React Bits integration for "astounding" visuals (Aurora backgrounds, BlurText, SpotlightCard, CountUp, MagneticButton, Particles, etc.)

## Setup

```bash
# If not already created:
npm create vite@latest . -- --template react-ts
npm install
npm install tailwindcss postcss autoprefixer zustand lucide-react sonner framer-motion
npx tailwindcss init -p
```

Install React Bits components (using shadcn CLI as per your guide):

```bash
npx shadcn@latest add @react-bits/BlurText-TS-TW
npx shadcn@latest add @react-bits/Aurora-TS-TW
npx shadcn@latest add @react-bits/SpotlightCard-TS-TW
npx shadcn@latest add @react-bits/CountUp-TS-TW
npx shadcn@latest add @react-bits/MagneticButton-TS-TW
npx shadcn@latest add @react-bits/Particles-TS-TW
npx shadcn@latest add @react-bits/FadeContent-TS-TW
npx shadcn@latest add @react-bits/TiltCard-TS-TW
```

Add Vite PWA for offline:

```bash
npm install -D vite-plugin-pwa
```

Update `vite.config.ts` (see example below).

## Running

```bash
npm run dev
```

Open the app, it should feel very close to the original but much more polished with React Bits.

## Key Architecture

- **State**: Zustand store (`src/store/useTTRPGStore.ts`) - direct port of the original unified state.
- **Data**: Moved to `src/data/`
- **Panels**: Separate components in `src/components/panels/`
- **React Bits**: Heavily used for visual delight while keeping functionality identical.

See the full detailed port guide at `../ttrpg-kit/REACT_TTRPG_KIT_PORT_GUIDE.md` for the complete breakdown.

## Next Steps (Follow the full guide)

1. `cd ttrpg-kit-react`
2. `npm install`
3. Copy the files from this folder into your project (the store, App, DicePanel, data, css, etc. are ready).
4. Replace your `src/main.tsx`, `src/App.tsx`, `src/index.css`, `vite.config.ts`, and `package.json`.
5. Run `npm run dev`.
6. Start implementing the remaining panels using the store and React Bits patterns shown in DicePanel.tsx.
7. Refer to `../ttrpg-kit/REACT_TTRPG_KIT_PORT_GUIDE.md` for the complete detailed port instructions.

All core state, generators, persistence, presets, and React Bits examples are included as starters.

**New Effects Added (more!):**
- Particles layered over Aurora for ambient fantasy feel
- GlitchText on dice results for dramatic rolls
- DecryptText + extra Particles in Music Projector
- TiltCard on initiative, NPCs, towns, regions
- FadeContent for list reveals
- GradientText + RotatingText in header
- Particles + Hyperspeed in Encounters panel for boss battles (toggle "Boss Mode" for intensified effect)
- MagicCard wrapping generator sections (NPC, Town, Encounters)
- InfiniteScroll on Log entries
- More BlurText, SpotlightCard, MagneticButton, CountUp throughout
- Boss Mode toggle in Encounters for Hyperspeed warp effect on deadly fights

Enjoy your React TTRPG Kit!
