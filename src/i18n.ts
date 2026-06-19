export type Lang = 'en' | 'el';

interface Translations {
  [key: string]: string;
}

const en: Translations = {
  // App / Shell
  app_title: 'TTRPG Kit',
  react_edition: 'REACT EDITION',
  tools: 'Tools',
  preset: 'Preset',
  toggle_high_contrast: 'Toggle High Contrast',
  toggle_reduce_motion: 'Reduce Effects',
  session_history: 'SESSION HISTORY',
  history_placeholder: 'History items will appear here...',

  // Panel labels (keep game terms)
  panel_dice: 'Dice Roller',
  panel_npc: 'NPC Generator',
  panel_town: 'Town Generator',
  panel_encounters: 'Encounters',
  panel_initiative: 'Initiative',
  panel_music: 'Music',
  panel_regions: 'Regions & World',
  panel_plot: 'Plot & Weather',
  panel_log: 'Session Log',
  panel_names: 'Names',
  panel_oracle: 'Oracle / Fate',
  panel_backstory: 'Backstories',
  panel_tables: 'Quick Tables',

  // Sidebar categories
  cat_dice_tables: 'Dice & Tables',
  cat_generators: 'Generators',
  cat_encounters: 'Encounters & Combat',
  cat_world: 'World & Session',

  // Common
  generate: 'Generate',
  add: '+ Add',
  copy: 'Copy',
  clear: 'clear',
  log: '+ Log',
  roll: 'ROLL',
  re_roll: 'Re-roll',
  reset: 'Reset',
  next_turn: 'Next Turn →',
  name: 'Name',

  // Dice
  dice_subtitle: 'All the classics + advanced expressions. Powered by React Bits.',
  expression: 'Expression',
  times: 'Times',
  history: 'History',
  no_rolls: 'No rolls yet',
  advantage_kept: 'Advantage: kept the higher roll',
  disadvantage_kept: 'Disadvantage: kept the lower roll',

  // Initiative
  initiative_tracker: 'Initiative Tracker',
  round_current: 'Round • Current Turn',
  lair_action: 'Lair Action',
  add_combatant: 'Add Combatant',
  init_bonus: 'Init Bonus',
  no_combatants: 'No combatants. Add some above or from Encounters.',
  drag_reorder_hint: 'Drag to reorder • Click conditions to toggle • Use Lair button on round starts for bosses',
  edit: 'Edit',
  hp_minus: 'HP -',

  // Encounters
  encounter_builder: 'Encounter Builder',
  encounter_subtitle: 'Level-aware. Generates loot, tactics, and lair support.',
  boss_mode: 'Boss Mode',
  boss_mode_on: 'Boss Mode On',
  add_to_initiative: 'Add to Initiative',
  save_template: 'Save Template',
  easier: 'Easier',
  harder: 'Harder',
  saved_templates: 'Saved Templates',
  no_templates: 'No templates saved.',
  special: 'SPECIAL',
  custom_table: 'Custom Table',
  theme: 'Θέμα',
  generic: 'Γενικό',
  undead: 'Ανέβια',
  dragon: 'Δράκος',
  forest: 'Δάσος',

  // Music
  music_suggestions: 'Music Suggestions',
  music_subtitle: 'Moods • Playlists • Projector • Local Audio • 1h Loops',
  open_projector: '🖥️ Open Projector',
  clear_all: 'Clear All',
  moods: 'Moods',
  random: '🎲 Random',
  mood_mixer: 'MOOD MIXER',
  mix_suggestions: 'Mix Suggestions',
  favorites: 'Favorites ❤️',
  session_playlist: 'Session Playlist',
  quick_custom_search: 'Quick Custom Search',
  local_audio: 'Local Audio (upload .mp3 etc)',
  vol: 'Vol',
  play: '▶ Play',
  pause: '⏸ Pause',
  stop: 'Stop',
  loop: 'Loop',
  now_playing: 'Now: ',
  music_projector: 'Music Projector',
  prev: '◀ PREV',
  open_yt: '▶ OPEN ON YT',
  next: 'NEXT ▶',
  projector_keyboard: 'Keyboard: ← → or n/p • Enter to open YT • ESC close',
  add_tracks_first: 'Add tracks to playlist or favorites first',

  // NPC
  npc_subtitle: 'Generate rich NPCs — class, clothing, secrets, personality & more',
  generate_npc: 'Generate NPC',
  generate_villain: 'Generate Villain',
  saved_npcs: 'Saved NPCs',
  no_npcs_saved: 'No NPCs saved yet.',
  wears: 'WEARS',
  appearance: 'APPEARANCE',
  personality: 'PERSONALITY',
  flaw: 'FLAW',
  motivation: 'MOTIVATION',
  secret: 'SECRET',
  quirk: 'QUIRK',
  fear: 'FEAR',
  treasure: 'TREASURE',
  special_ability: 'SPECIAL ABILITY',
  voice: 'VOICE',

  // Town
  town_subtitle: 'Generate settlements — notable buildings, population type, area lore & more',
  saved_towns: 'Saved Towns',
  no_towns_saved: 'No towns saved.',
  lore: 'LORE',
  problem: 'PROBLEM',
  signature: 'SIGNATURE',
  government: 'GOVERNMENT',
  notable_buildings: 'NOTABLE BUILDINGS',

  // Log
  add_note: 'Add a note...',
  log_sessions: 'Log Sessions',
  new_session: '+ New Session',
  rename: 'Rename',
  delete: 'Delete',
  reply_to: 'Reply',
  no_log_entries: 'No entries in this session yet.',
  session: 'Session',
  clear_logs: 'Clear logs',
  clear_unfoldered: 'Clear un-foldered',
  delete_entry: 'Delete entry',
  move: 'Move',
  move_to: 'Move to...',
  cancel: 'Cancel',
  export_log: 'Export',
  export_md: '.md',
  export_txt: '.txt',
  export_csv: '.csv',

  // Regions
  world_dashboard: '🌍 World Dashboard',
  regions: '🗺️ Regions',
  roll_new_threat: 'Roll New Threat',
  world_status: 'World Status',
  world_regions: 'World Regions',
  day: 'Day',
  current_region: 'Current Region',
  faction_pressures: 'Faction Pressures',
  scout: 'Scout',
  set_current: 'Set Current',

  // Plot & Weather
  plot_weather: 'Plot & Weather',
  generate_plot_hook: 'Generate Plot Hook',
  generate_weather: 'Generate Weather',
  click_to_generate_plot: 'Click button to generate a plot hook.',
  click_to_generate_weather: 'Click button to generate weather.',

  // Names
  name_generator: 'Name Generator',
  names_subtitle: 'Quick names for NPCs, places, or items',
  random_style: 'Random',
  generated_names: 'Generated',
  click_style_hint: 'Click a style to generate 6 names. Use them for NPCs, taverns, etc.',

  // Oracle
  fate_oracle: 'Fate Oracle',
  oracle_subtitle: 'Ask yes/no questions. Answers include twist (and / but / however).',
  consult_oracle: 'Consult the Oracle',
  the_oracle_speaks: 'THE ORACLE SPEAKS',

  // Backstory
  backstory_generator: 'Backstory Generator',
  generate_backstory: 'Generate Backstory',
  dark_tragic: 'Dark / Tragic',
  saved_backstories: 'Saved Backstories',
  no_backstories: 'No backstories yet.',

  // Tables
  quick_tables: 'Quick Tables',
  tables_subtitle: 'Fast inspiration rolls',
};

const el: Translations = {
  // App / Shell
  app_title: 'TTRPG Kit',
  react_edition: 'ΕΚΔΟΣΗ REACT',
  tools: 'Εργαλεία',
  preset: 'Προεπιλογή',
  toggle_high_contrast: 'Εναλλαγή Υψηλής Αντίθεσης',
  toggle_reduce_motion: 'Μείωση Εφέ',
  session_history: 'ΙΣΤΟΡΙΚΟ ΣΥΝΕΔΡΙΑΣ',
  history_placeholder: 'Τα στοιχεία ιστορικού θα εμφανιστούν εδώ...',

  // Panel labels (keep terms like Initiative, NPC, etc.)
  panel_dice: 'Dice Roller',
  panel_npc: 'NPC Generator',
  panel_town: 'Town Generator',
  panel_encounters: 'Encounters',
  panel_initiative: 'Initiative',
  panel_music: 'Music',
  panel_regions: 'Regions & World',
  panel_plot: 'Plot & Weather',
  panel_log: 'Session Log',
  panel_names: 'Names',
  panel_oracle: 'Oracle / Fate',
  panel_backstory: 'Backstories',
  panel_tables: 'Quick Tables',

  // Sidebar categories
  cat_dice_tables: 'Ζάρια & Πίνακες',
  cat_generators: 'Γεννήτριες',
  cat_encounters: 'Συναντήσεις & Μάχη',
  cat_world: 'Κόσμος & Συνεδρία',

  // Common
  generate: 'Δημιουργία',
  add: '+ Προσθήκη',
  copy: 'Αντιγραφή',
  clear: 'καθαρισμός',
  log: '+ Καταγραφή',
  roll: 'ΡΙΨΗ',
  re_roll: 'Επαναρίψη',
  reset: 'Επαναφορά',
  next_turn: 'Επόμενη Σειρά →',
  name: 'Όνομα',

  // Dice
  dice_subtitle: 'Όλα τα κλασικά + προηγμένες εκφράσεις. Με την υποστήριξη React Bits.',
  expression: 'Έκφραση',
  times: 'Φορές',
  history: 'Ιστορικό',
  no_rolls: 'Δεν υπάρχουν ρίψεις ακόμα',
  advantage_kept: 'Πλεονέκτημα: κρατήθηκε η υψηλότερη ρίψη',
  disadvantage_kept: 'Μειονέκτημα: κρατήθηκε η χαμηλότερη ρίψη',

  // Initiative - keep "Initiative"
  initiative_tracker: 'Initiative Tracker',
  round_current: 'Γύρος • Τρέχουσα Σειρά',
  lair_action: 'Lair Action',
  add_combatant: 'Προσθήκη Μαχητή',
  init_bonus: 'Init Bonus',
  no_combatants: 'Δεν υπάρχουν μαχητές. Προσθέστε παραπάνω ή από Encounters.',
  drag_reorder_hint: 'Σύρετε για αναδιάταξη • Κάντε κλικ στις συνθήκες για εναλλαγή • Χρησιμοποιήστε το κουμπί Lair στην αρχή γύρων για bosses',
  edit: 'Επεξεργασία',
  hp_minus: 'HP -',

  // Encounters
  encounter_builder: 'Encounter Builder',
  encounter_subtitle: 'Ευαισθησία επιπέδου. Δημιουργεί λάφυρα, τακτικές και υποστήριξη lair.',
  boss_mode: 'Boss Mode',
  boss_mode_on: 'Boss Mode On',
  add_to_initiative: 'Προσθήκη στο Initiative',
  save_template: 'Αποθήκευση Προτύπου',
  easier: 'Ευκολότερο',
  harder: 'Δυσκολότερο',
  saved_templates: 'Αποθηκευμένα Πρότυπα',
  no_templates: 'Δεν υπάρχουν αποθηκευμένα πρότυπα.',

  // Music
  music_suggestions: 'Music Suggestions',
  music_subtitle: 'Διαθέσεις • Λίστες • Προβολέας • Τοπικός Ήχος • 1h Loops',
  open_projector: '🖥️ Άνοιγμα Προβολέα',
  clear_all: 'Καθαρισμός Όλων',
  moods: 'Διαθέσεις',
  random: '🎲 Τυχαία',
  mood_mixer: 'MOOD MIXER',
  mix_suggestions: 'Ανάμειξη Προτάσεων',
  favorites: 'Favorites ❤️',
  session_playlist: 'Session Playlist',
  quick_custom_search: 'Quick Custom Search',
  local_audio: 'Local Audio (upload .mp3 etc)',
  vol: 'Vol',
  play: '▶ Play',
  pause: '⏸ Pause',
  stop: 'Stop',
  loop: 'Loop',
  now_playing: 'Now: ',
  music_projector: 'Music Projector',
  prev: '◀ PREV',
  open_yt: '▶ OPEN ON YT',
  next: 'NEXT ▶',
  projector_keyboard: 'Keyboard: ← → or n/p • Enter to open YT • ESC close',
  add_tracks_first: 'Προσθέστε κομμάτια στη λίστα ή στα αγαπημένα πρώτα',

  // NPC
  npc_subtitle: 'Δημιουργήστε πλούσιους NPCs — τάξη, ένδυμα, μυστικά, προσωπικότητα & περισσότερα',
  generate_npc: 'Δημιουργία NPC',
  generate_villain: 'Δημιουργία Κακού',
  saved_npcs: 'Αποθηκευμένοι NPCs',
  no_npcs_saved: 'Δεν υπάρχουν αποθηκευμένοι NPCs ακόμα.',
  wears: 'ΦΟΡΑΕΙ',
  appearance: 'ΕΜΦΑΝΙΣΗ',
  personality: 'ΠΡΟΣΩΠΙΚΟΤΗΤΑ',
  flaw: 'ΑΔΥΝΑΜΙΑ',
  motivation: 'ΚΙΝΗΤΡΟ',
  secret: 'ΜΥΣΤΙΚΟ',
  quirk: 'ΙΔΙΟΡΡΥΘΜΙΑ',
  fear: 'ΦΟΒΟΣ',
  treasure: 'ΘΗΣΑΥΡΟΣ',
  special_ability: 'ΕΙΔΙΚΗ ΙΚΑΝΟΤΗΤΑ',
  voice: 'ΦΩΝΗ',

  // Town
  town_subtitle: 'Δημιουργήστε οικισμούς — σημαντικά κτίρια, τύπος πληθυσμού, τοπική ιστορία & περισσότερα',
  saved_towns: 'Αποθηκευμένες Πόλεις/Χωριά',
  no_towns_saved: 'Δεν υπάρχουν αποθηκευμένες πόλεις.',
  lore: 'ΙΣΤΟΡΙΑ ΠΕΡΙΟΧΗΣ',
  problem: 'ΠΡΟΒΛΗΜΑ',
  signature: 'ΧΑΡΑΚΤΗΡΙΣΤΙΚΟ',
  government: 'ΚΥΒΕΡΝΗΣΗ',
  notable_buildings: 'ΣΗΜΑΝΤΙΚΑ ΚΤΙΡΙΑ',

  // Log
  add_note: 'Προσθήκη σημείωσης...',
  log_sessions: 'Συνεδρίες Καταγραφής',
  new_session: '+ Νέα Συνεδρία',
  rename: 'Μετονομασία',
  delete: 'Διαγραφή',
  reply_to: 'Απάντηση',
  no_log_entries: 'Δεν υπάρχουν καταγραφές σε αυτή τη συνεδρία ακόμα.',
  session: 'Συνεδρία',
  clear_logs: 'Καθαρισμός καταγραφών',
  clear_unfoldered: 'Καθαρισμός χωρίς φάκελο',
  delete_entry: 'Διαγραφή καταγραφής',
  move: 'Μετακίνηση',
  move_to: 'Μετακίνηση σε...',
  cancel: 'Ακύρωση',
  export_log: 'Εξαγωγή',
  export_md: '.md',
  export_txt: '.txt',
  export_csv: '.csv',

  // Regions
  world_dashboard: '🌍 World Dashboard',
  regions: '🗺️ Regions',
  roll_new_threat: 'Roll New Threat',
  world_status: 'World Status',
  world_regions: 'World Regions',
  day: 'Ημέρα',
  current_region: 'Τρέχουσα Περιοχή',
  faction_pressures: 'Πιέσεις Φατριών',
  scout: 'Scout',
  set_current: 'Set Current',

  // Plot & Weather
  plot_weather: 'Plot & Weather',
  generate_plot_hook: 'Generate Plot Hook',
  generate_weather: 'Generate Weather',
  click_to_generate_plot: 'Κάντε κλικ για να δημιουργήσετε ένα plot hook.',
  click_to_generate_weather: 'Κάντε κλικ για να δημιουργήσετε καιρό.',

  // Names
  name_generator: 'Name Generator',
  names_subtitle: 'Γρήγορα ονόματα για NPCs, μέρη ή αντικείμενα',
  random_style: 'Τυχαία',
  generated_names: 'Generated',
  click_style_hint: 'Κάντε κλικ σε ένα στυλ για να δημιουργήσετε 6 ονόματα.',

  // Oracle
  fate_oracle: 'Fate Oracle',
  oracle_subtitle: 'Κάντε ερωτήσεις ναι/όχι. Οι απαντήσεις περιλαμβάνουν twist (and / but / however).',
  consult_oracle: 'Consult the Oracle',
  the_oracle_speaks: 'THE ORACLE SPEAKS',

  // Backstory
  backstory_generator: 'Backstory Generator',
  generate_backstory: 'Generate Backstory',
  dark_tragic: 'Dark / Tragic',
  saved_backstories: 'Saved Backstories',
  no_backstories: 'No backstories yet.',

  // Tables
  quick_tables: 'Quick Tables',
  tables_subtitle: 'Fast inspiration rolls',
};

const translations: Record<Lang, Translations> = { en, el };

export function t(key: string, lang: Lang = 'en'): string {
  return translations[lang][key] || translations['en'][key] || key;
}

export const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'el', label: 'EL' },
];
