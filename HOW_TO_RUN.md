# How to Run the React TTRPG Kit App (Beginner Guide)

You said you've never used it before, so here's a **complete, step-by-step** guide to get it running and review the effects.

## Prerequisites (One-time setup)
1. **Install Node.js** (required to run React/Vite apps):
   - Go to https://nodejs.org/
   - Download the **LTS** version (long-term support).
   - Run the installer (accept defaults, including adding to PATH).
   - **Restart your computer or at least close/reopen PowerShell** after install.
   - Verify: Open PowerShell and type `node -v` and `npm -v`. You should see version numbers.

2. The project is ready at: `C:\Users\marko\ttrpg-kit-react`

## Step-by-Step to Run

1. **Open PowerShell**:
   - Press Windows key, type "PowerShell", open "Windows PowerShell".

2. **Navigate to the project folder**:
   ```
   cd C:\Users\marko\ttrpg-kit-react
   ```

3. **Install dependencies** (this downloads all packages, including React Bits stubs and Tailwind):
   ```
   npm install
   ```
   - This may take 1-2 minutes the first time. You'll see lots of text – that's normal.

4. **Start the development server**:
   ```
   npm run dev
   ```

5. **Open the app in your browser**:
   - The terminal will show something like:
     ```
     ➜  Local:   http://localhost:5173/
     ```
   - **Copy and paste that URL** into Chrome, Edge, or Firefox.
   - The app should load with a dark fantasy theme, Aurora background, particles, etc.

## Exploring the App & Effects

- **Sidebar (left)**: Click the panel names to switch (Dice, NPC, Town, Encounters, Initiative, Music, Regions & World, Plot & Weather, Session Log).
- **Top bar**: See rotating subtitle, preset buttons, etc.
- **Right sidebar**: History and controls.

**Key Effects to Test**:
- **Dice Panel**: Click dice buttons or "4d6kh3 (stat)". See GlitchText on the result number, TiltCard on the card.
- **NPC / Town Generators**: Click Generate. Saved items use MagicCard, TiltCard, FadeContent (smooth pop-ins).
- **Encounters**: Select "deadly", click Generate. Toggle "Boss Mode" – watch Hyperspeed intensify + Particles. Use Adjust buttons.
- **Music**: Add to playlist (use +Playlist if implemented or buttons). Click "Open Projector" – full screen with DecryptText scrambling titles + dense Particles.
- **Initiative**: Add combatants. See TiltCard on entries. Current turn highlights.
- **Log**: Add notes. Watch InfiniteScroll (seamless looping list).
- **Regions & World**: Click buttons for modals with TiltCards.
- **Global**: Toggle high contrast in sidebar tips. Particles everywhere. Aurora background.

**Note**: This is a **starter implementation**. Many generators (full logic, data) are simplified or stubbed based on the original HTML app. The store has core state. Expand by copying logic from the original `index.html` into the store and panels (see REACT_TTRPG_KIT_PORT_GUIDE.md).

## Common Issues & Fixes
- "npm not recognized": Restart PowerShell or PC after Node install.
- Port already in use: Run `npm run dev` again or change port (add `--port 3000`).
- No effects visible: Make sure you're on localhost:5173, and try clicking things. Some are hover/click triggered.
- To stop the app: In PowerShell, press Ctrl+C.
- To rebuild: `npm run build` then serve the `dist` folder if needed.

## Next
Once running, play with it. If you want me to flesh out more full logic (e.g., complete generateNPC in store), add even more components (e.g., CountUp for stats, another background), or fix anything, just tell me!

Enjoy the app – it should look and feel way more dynamic than the original single-file version thanks to all the React Bits effects. 🎲

If it doesn't run, paste any error here.