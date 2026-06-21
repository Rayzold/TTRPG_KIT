// Ported + expanded from original index.html for rich NPC + Town output

export const NPC_DATA = {
  ancestries: ['Human','Elf','Dwarf','Halfling','Orc','Tiefling','Dragonborn','Gnome','Aasimar','Goblin','Changeling'],
  first: ['Elara','Kael','Mira','Torin','Sylas','Lirael','Bram','Nyx','Vesper','Corin','Juno','Riven','Soren','Thalia','Zephyr','Cassian','Maelis','Quill','Sable','Rune','Thorne','Elowen','Finnian','Seraphina','Gideon','Isolde','Lucian','Maeve','Orion','Phoebe','Quentin','Ravenna','Silas','Talia','Ulysses','Valeria','Wren','Xander','Yara','Zephyrine','Aldric','Brielle','Caspian','Dahlia','Evander','Freya','Garrick','Hazel','Icarus','Juniper','Kaelith','Liora','Mordecai','Nerissa','Oberon','Peregrine','Quillara','Ragnar','Seren','Thaddeus','Ursula','Vespera','Wolfgang','Xylia','Ysabel','Zadok'],
  last: ['Ashford','Blackthorn','Duskwalker','Emberfall','Frost','Grimshaw','Hollow','Ironwood','Kestrel','Moonwhisper','Nightshade','Oakenshield','Pryde','Ravenwood','Storm','Thorne','Vale','Whisper','Wolfsbane','Yew','Bloodmoon','Cinderforge','Darkwater','Ebonwood','Frostveil','Gloomhaven','Ironspire','Jadeclaw','Kingsbane','Lunarglade','Mistveil','Nightwhisper','Oathbreaker','Phantomlight','Quicksilver','Ruinward','Shadowthorn','Stormbreaker','Thunderpeak','Voidwalker','Wildfire','Arcane','Blightwood','Crystalforge','Dragonheart','Eldritch','Fatesworn','Grimward','Hellforge','Inferno','Jesterfall','Knightfall','Loreweaver','Magesong','Netherwind','Oathsworn','Pyreborn','Riftwalker','Spellbound','Tidecaller','Umbral','Valorheart','Witchbane','Xenolith','Yearnwood','Zephyrbane','Aetherborn','Blazewright','Curselock','Dreamveil','Echoheart','Fellshadow','Glimmerstone','Hallowforge','Illithid','Jotunblood','Krakenbane','Lichwhisper','Maelstrom','Nexus','Oblivion','Phoenixfire','Quasar','Runebinder','Spectral','Titanborn','Unbroken','Voidheart','Wyrmslayer','Xanadu','Yggdrasil','Zodiac'],
  traits: ['curious','grim','optimistic','cynical','secretive','boastful','melancholic','cheerful','sarcastic','stoic','ambitious','reckless','methodical','superstitious','greedy','generous','vengeful','loyal','cowardly','eccentric','brave','cunning','compassionate','arrogant','humble','witty','melancholy','fierce','gentle','resourceful','impulsive','patient','mischievous','honest','devious','charming','aloof','passionate','reserved','bold','timid','clever','foolish','noble','ruthless','wise','foolhardy','loyal','treacherous','creative','dull','energetic','lethargic','hopeful','despairing','playful','serious','romantic','cynical','adventurous','cautious','charismatic','repellent','scholarly','uneducated','diplomatic','crude','elegant','slovenly','pious','atheistic','zealous','apathetic','disciplined','chaotic','lawful','rebellious','traditional','innovative','conservative','progressive','mysterious','transparent','enigmatic','mundane','exotic','familiar','otherworldly'],
  flaws: ['addicted to risk','owes dangerous people money','terrified of magic','hates their own people','believes they are cursed','cannot tell a lie','pathological liar','haunted by one specific mistake','secretly despises the gods','has a split personality','obsessed with collecting teeth','terrified of their own reflection','owes a dragon a debt of honor','cursed to speak only in rhymes at night','addicted to the thrill of betrayal','haunted by the ghost of a victim',"secretly a construct who doesn't know it",'pathologically afraid of silence','has an invisible twin only they can see','addicted to gambling with souls','believes they are the reincarnation of a tyrant','terrified of birds and feathers','has a living tattoo that whispers secrets','addicted to forbidden knowledge','secretly in love with their sworn enemy','haunted by recurring dreams of their own death','cannot remember their own name without pain','addicted to the sound of breaking bones','secretly plots the downfall of their own family','terrified of the color red','has a parasitic entity living in their shadow','addicted to gambling','terrified of crowds','secretly plots revenge on everyone','cannot keep a secret','addicted to flattery','terrified of the dark','secretly hoards wealth','addicted to danger','terrified of commitment','secretly envies the poor','addicted to power','terrified of failure','secretly fears success','addicted to pain','terrified of joy','secretly hates children','addicted to lies','terrified of truth','secretly worships evil','addicted to chaos','terrified of order'],
  motivations: ['protect their family at any cost','become wealthy and disappear','avenge a murdered loved one','prove their worth to a mentor','uncover a lost truth about their past','destroy a corrupt institution','find the place they truly belong','master an ancient forgotten art','expose a grand conspiracy','rebuild a lost kingdom','achieve immortality through legend','free a bound god','create the perfect weapon','unite the scattered races','survive the coming apocalypse','discover the meaning of the stars','become the greatest thief in history','heal a dying world','redeem a fallen angel','conquer fear itself','write the definitive history of magic','find their lost twin soul','break a generational curse','build an empire of outcasts','solve the riddle of the universe','avenge the destruction of their homeland','master the art of true resurrection','expose the lies of the gods','create a sanctuary for the unwanted','seek ultimate knowledge','destroy all magic','become a living god','unite all races under one banner','discover the origin of the world','prevent the end of days','avenge a personal betrayal','master every skill','find true love','build the greatest city ever','cure all diseases','end all wars','become the richest person alive','free every slave','conquer death itself','restore a fallen empire','become the ultimate hunter','protect the weak at all costs','unravel the mysteries of fate'],
  secrets: ['is secretly a fugitive from the law','has a child they abandoned','is slowly turning into a monster','is working for the enemy','knows the location of a powerful artifact','killed the wrong person and covered it up','is not actually the species they appear to be','was born from a ritual sacrifice','once betrayed their best friend for power','is the last survivor of a destroyed bloodline','secretly controls a criminal empire','is possessed by an ancient demon','has swapped bodies with their sibling','is slowly forgetting who they are','once made a deal with death itself','secretly a time traveler from a doomed future','has eaten the heart of a dragon','is the secret child of a god','once started a war by accident','is immune to all poisons but craves them','has a map to heaven tattooed on their bones','secretly assassinated a king and framed another','is the reincarnation of a legendary villain','has never actually aged a day','once sold their shadow for a wish','is the only one who can hear the dead','secretly despises all forms of magic','has a twin who died and now haunts them','is building an army in secret','once loved a monster and still does','has the key to the apocalypse in their pocket','secretly a vampire','once faked their own death','is the heir to a lost throne','secretly works for a rival kingdom','has a twin who is their evil counterpart','once summoned a demon by accident','is slowly turning to stone','secretly collects souls',"has a cursed item they can't remove",'once betrayed their god',"is not human but doesn't know it",'has a prophecy they must fulfill or die','secretly controls the weather in their sleep','once killed their own family','is the last of their kind','has a magical twin bond','secretly is a clone','has been alive for centuries but forgets'],
  appearances: ['strikingly tall with long silver hair','covered in old burn scars','always wears an ornate mask','has heterochromia and a missing finger','covered in beautiful tattoos that seem to move','constantly fidgeting with a lucky coin','smells faintly of pine and smoke','speaks in a whisper but laughs loudly','eyes that change color with the moon','skin like polished obsidian','hair that moves like living vines','always followed by a swarm of tiny lights','a voice that echoes strangely','covered in ritual scars that glow at night','one hand is always ice cold','bears the mark of a forgotten god','has no reflection in mirrors','smells of fresh earth after rain','eyes like liquid gold that see too much','a constant faint humming aura','skin shifts slightly in low light','always accompanied by an invisible breeze','teeth that are slightly too sharp','a scar that changes shape daily','voice that sometimes speaks in ancient tongues','hair that grows back instantly when cut','always has fresh flowers blooming nearby','eyes that reflect the stars even indoors','a presence that makes animals uneasy','moves with unnatural grace like a predator','bears chains that no one else can see','glowing runes on their skin','eyes like burning emeralds','a third eye on their forehead','skin that sparkles like diamonds','hair made of living fire','voice that can shatter glass','always surrounded by a faint mist','teeth filed to points','a constant aura of cold','skin that feels like bark','eyes that see in the dark','a shadow that moves independently','always smells of ozone after storms','hair that changes color with mood','a metallic sheen to their skin','eyes that reflect your own fears'],
  quirks: ['always speaks in third person','refuses to step on cracks','collects buttons','never uses the same name twice','laughs at inappropriate moments','refuses to eat food prepared by strangers','keeps a journal of every lie they hear','only sleeps during thunderstorms','collects the last words of the dying','never makes eye contact with the same person twice','speaks only in questions','refuses to kill anything with more than four legs','collects broken things and tries to fix them','never steps on the same floor tile twice','speaks to plants as if they are old friends','refuses to wear the color blue','collects the names of everyone they meet','never sleeps in the same place twice','speaks in rhymes when nervous','refuses to cross running water on foot','collects the dreams of others in bottles','never uses the same hand for writing twice','speaks only in whispers after sunset','refuses to eat anything that was once alive','collects the shadows of people they like','never sits with their back to a door','speaks in the voice of whoever they last talked to','refuses to use the word "death"','collects feathers from birds that have died of old age','never makes the first move in any situation','refuses to use their real name','always carries a live chicken for luck','speaks backwards when lying','collects the teeth of their enemies','never sleeps on the ground','has a pet rock they talk to','refuses to wear shoes','speaks only in song',"collects maps of places they've never been",'never uses the same greeting twice','has an imaginary rival they compete with','refuses to eat with utensils','speaks in riddles','collects the laughter of others in jars','never faces east','has a phobia of their own shadow','refuses to say the word "yes"'],
  // NEW for user request: explicit clothing + class/profession options
  clothing: [
    'patched traveler\'s cloak over boiled leather',
    'embroidered velvet doublet with silver buttons',
    'heavy fur-lined greatcoat and iron pauldrons',
    'simple homespun tunic and apron stained with ink',
    'flowing silk robes dyed deep indigo',
    'ragged mercenary leathers with trophy teeth',
    'polished breastplate over a priest\'s cassock',
    'threadbare scholar\'s robe with ink-stained cuffs',
    'brightly colored jester silks and bells',
    'druidic leathers woven with living vines',
    'tattered noble finery with hidden daggers',
    'rune-etched chainmail that whispers at night',
    'flowing robes of living moss and flowers',
    'spiked leather with trophies from fallen foes',
    'elegant silk gown stained with old blood',
    'heavy blacksmith apron over arcane robes',
    'camouflage cloak woven from shadow silk',
    'ornate ceremonial armor missing one pauldron',
    'ragged beggar clothes hiding fine jewelry',
    'crystal-studded vestments that hum with power',
    'bone armor carved from ancient beasts',
    'traveler\'s coat lined with hidden pockets',
    'regal cape that billows without wind',
    'assassin\'s blacks with poisoned needles',
    'herbalist leathers covered in dried herbs',
    'knight\'s plate with one glowing gauntlet',
    'bard\'s colorful patchwork of stories',
    'monk\'s simple robe with hidden strength',
    'pirate captain\'s coat with golden trim',
    'alchemist\'s stained coat full of vials',
    'ranger\'s fur and leather with leaf patterns',
    'tattered cloak made from dragon scales',
    'ornate robes of living vines and flowers',
    'ragged furs from exotic beasts',
    'polished armor etched with glowing runes',
    'flowing dress of moonlight silk',
    'heavy apron covered in alchemical stains',
    'camouflage leathers that blend with shadows',
    'ceremonial garments of pure gold thread',
    'ragged traveler\'s gear with hidden compartments',
    'elegant suit tailored from spider silk',
    'spiked gauntlets and chainmail vest',
    'mystical cloak that changes color',
    'practical leathers reinforced with steel',
    'fantastical outfit with glowing accessories',
    'simple robes with intricate embroidery',
    'battle-worn armor with trophy markings'
  ],
  classes: [
    'Fighter', 'Wizard', 'Rogue', 'Cleric', 'Ranger', 'Bard', 'Warlock', 'Monk', 
    'Sorcerer', 'Paladin', 'Druid', 'Barbarian',
    'Merchant', 'Scholar', 'Artisan', 'Noble', 'Mercenary', 'Spy', 'Healer', 'Sailor'
  ],
  commonRoles: ['Commoner', 'Laborer', 'Farmer', 'Artisan', 'Servant', 'Aristocrat', 'Guard'],
  fears: ['το σκοτάδι', 'αράχνες', 'τη φωτιά', 'να είναι μόνος', 'τα ύψη', 'το νερό', 'τη σιωπή', 'τα πλήθη', 'τους καθρέφτες', 'το άγνωστο', 'την προδοσία', 'το θάνατο', 'τη μαγεία', 'τα πλήθη', 'την αποτυχία', 'την επιτυχία', 'την μοναξιά', 'τη φωτιά', 'το νερό', 'τα ύψη', 'τον εαυτό του', 'τα πουλιά', 'τα φίδια', 'το αίμα', 'το σκοτάδι', 'το κρύο', 'τα παιδιά', 'το παρελθόν', 'την αλήθεια', 'το ψέμα'],
  treasures: ['ένα μενταγιόν με φωτογραφία χαμένου έρωτα', 'ένα αρχαίο νόμισμα από πεσμένη αυτοκρατορία', 'ένα φτερό από φοίνικα', 'ένας χάρτης σε κρυμμένο θησαυρό', 'ένα δαχτυλίδι βασιλιά', 'ένα φιαλίδιο αιώνιας πηγής', 'ένα βιβλίο απαγορευμένων ξορκιών', 'ένα στιλέτο που δεν ακονίζεται ποτέ', 'ένας μανδύας αορατότητας (ξεθωριασμένος)', 'μια πυξίδα που δείχνει αυτό που ποθείς περισσότερο', 'ένας κρύσταλλος που δείχνει το μέλλον στα όνειρα', 'ένα γράμμα από φίλο που πέθανε', 'ένα κουτί μουσικής που παίζει ξεχασμένο τραγούδι', 'ένα θραύσμα σπασμένου αστεριού', 'ένα σετ κλειδιών για πόρτες που δεν υπάρχουν πια'],
  special_abilities: ['μπορεί να μιλάει με ζώα', 'έχει φωτογραφική μνήμη', 'μπορεί να αισθάνεται τα ψέματα', 'δεν χάνεται ποτέ', 'μπορεί να κρατάει την αναπνοή για 10 λεπτά', 'είναι άτρωτος στον φόβο', 'μπορεί να μιμείται φωνές τέλεια', 'έχει φωτογραφική αίσθηση κατεύθυνσης', 'μπορεί να διαβάζει χείλη από μακριά', 'δεν ξεχνά ποτέ ένα πρόσωπο', 'μπορεί να επιβιώνει με λίγο φαγητό', 'έχει έκτη αίσθηση για κίνδυνο', 'μπορεί να ζογκλάρει οτιδήποτε', 'πάντα ξέρει την ώρα χωρίς να κοιτάζει', 'μπορεί να μιμείται οποιαδήποτε προφορά', 'έχει απίστευτη ικανότητα να βρίσκει χαμένα αντικείμενα'],
  voice_descriptors: ['βαθιά και βροντερή', 'ψηλή και μελωδική', 'βραχνή και τραχιά', 'απαλή και ψιθυριστή', 'βροντερή και επιβλητική', 'τριλιαρή και νεανική', 'ομαλή και σαγηνευτική', 'τραυλίζει όταν νευριάζει', 'με ξένη προφορά', 'μονότονη και χωρίς συναίσθημα', 'δυνατή και ζωηρή', 'ήσυχη και στοχαστική']
};

export const NPC_DATA_EL = {
  ancestries: ['Human','Elf','Dwarf','Halfling','Orc','Tiefling','Dragonborn','Gnome','Aasimar','Goblin','Changeling'],
  first: ['Θεόδωρος','Ελένη','Αλέξανδρος','Σοφία','Δημήτρης','Αικατερίνη','Νικόλαος','Μαρία','Ιωάννης','Αναστασία'],
  last: ['Παπαδόπουλος','Καραγιάννης','Αθανασίου','Βασιλείου','Γεωργίου','Κωνσταντίνου','Δημητρίου','Ιωαννίδης','Μιχαηλίδης','Στεφανίδης'],
  traits: ['περίεργος','σκοτεινός','αισιόδοξος','κυνικός','μυστηριώδης','καυχησιάρης','μελαγχολικός','εύθυμος','σαρκαστικός','ατάραχος','φιλόδοξος','ριψοκίνδυνος','μεθοδικός','δεισιδαίμων','άπληστος','γενναιόδωρος','εκδικητικός','πιστός','δειλός','εκκεντρικός'],
  flaws: ['εθισμένος στον κίνδυνο','χρωστάει σε επικίνδυνους ανθρώπους','τρομοκρατημένος από τη μαγεία','μισεί τον λαό του','πιστεύει ότι είναι καταραμένος','δεν μπορεί να πει ψέματα','παθολογικός ψεύτης','στοιχειωμένος από ένα συγκεκριμένο λάθος'],
  motivations: ['προστατεύει την οικογένειά του με κάθε κόστος','γίνεται πλούσιος και εξαφανίζεται','εκδικείται για έναν δολοφονημένο αγαπημένο','αποδεικνύει την αξία του σε έναν μέντορα','αποκαλύπτει μια χαμένη αλήθεια για το παρελθόν του','καταστρέφει έναν διεφθαρμένο θεσμό','βρίσκει το μέρος που πραγματικά ανήκει'],
  secrets: ['είναι κρυφά φυγάς από τον νόμο','έχει ένα παιδί που εγκατέλειψε','μετατρέπεται σιγά σιγά σε τέρας','δουλεύει για τον εχθρό','γνωρίζει τη θέση ενός ισχυρού τεχνουργήματος','σκότωσε το λάθος άτομο και το κάλυψε','δεν είναι πραγματικά το είδος που φαίνεται'],
  appearances: ['πολύ ψηλός με μακριά ασημένια μαλλιά','καλυμμένος με παλιές ουλές από εγκαύματα','φοράει πάντα ένα περίτεχνο προσωπείο','έχει ετεροχρωμία και λείπει ένα δάχτυλο','καλυμμένος με όμορφα τατουάζ που φαίνονται να κινούνται','παίζει συνέχεια με ένα γούρι νόμισμα','μυρίζει αχνά πεύκο και καπνό','μιλάει ψιθυριστά αλλά γελάει δυνατά'],
  quirks: ['μιλάει πάντα σε τρίτο πρόσωπο','αρνείται να πατήσει σε ρωγμές','συλλέγει κουμπιά','δεν χρησιμοποιεί ποτέ το ίδιο όνομα δύο φορές','γελάει σε ακατάλληλες στιγμές','αρνείται να φάει φαγητό από αγνώστους','κρατάει ημερολόγιο με κάθε ψέμα που ακούει'],
  clothing: [
    'μπαλωμένο μανδύα ταξιδιώτη πάνω από βρασμένο δέρμα',
    'κεντημένο βελούδινο σακάκι με ασημένια κουμπιά',
    'βαρύ παλτό με γούνα και σιδερένιους ώμους',
    'απλό σπιτικό πουκάμισο και ποδιά λεκιασμένη με μελάνι',
    'κυματιστοί μεταξωτοί χιτώνες βαμμένοι βαθύ indigo',
    'κουρελιασμένα δερμάτινα μισθοφόρου με δόντια τρόπαια',
    'γυαλισμένο θώρακα πάνω από ράσο ιερέα',
    'φθαρμένο ράσο λόγιου με λεκιασμένα μανίκια',
    'φωτεινά χρωματιστά μεταξωτά γελωτοποιού με κουδούνια',
    'δρυϊδικά δέρματα υφασμένα με ζωντανά κλήματα'
  ],
  classes: [
    'Fighter', 'Wizard', 'Rogue', 'Cleric', 'Ranger', 'Bard', 'Warlock', 'Monk', 
    'Sorcerer', 'Paladin', 'Druid', 'Barbarian',
    'Merchant', 'Scholar', 'Artisan', 'Noble', 'Mercenary', 'Spy', 'Healer', 'Sailor'
  ],
  commonRoles: ['Commoner', 'Laborer', 'Farmer', 'Artisan', 'Servant', 'Aristocrat', 'Guard'],
  fears: [
    'the dark', 'spiders', 'fire', 'being alone', 'heights', 'water', 'silence', 'crowds', 'mirrors', 'the unknown',
    'their own reflection', 'small spaces', 'thunder', 'snakes', 'birds', 'magic', 'the sea', 'blood', 'death', 'betrayal',
    'losing control', 'public speaking', 'sharp objects', 'the cold', 'children', 'the past', 'failure', 'success', 'intimacy'
  ],
  treasures: [
    'a locket with a picture of a lost love', 'an ancient coin from a fallen empire', 'a feather from a phoenix',
    'a map to a hidden treasure', 'a ring that once belonged to a king', 'a vial of eternal spring water',
    'a book of forbidden spells', 'a dagger that never dulls', 'a cloak of invisibility (faded)',
    'a compass that points to what you most desire', 'a crystal that shows the future in dreams',
    'a letter from a deceased friend', 'a music box that plays a forgotten song', 'a shard of a broken star',
    'a set of keys to doors that no longer exist'
  ],
  special_abilities: [
    'can speak with animals', 'has an eidetic memory', 'can sense lies', 'never gets lost',
    'can hold their breath for 10 minutes', 'immune to fear', 'can mimic voices perfectly',
    'has a photographic sense of direction', 'can read lips from across a room', 'never forgets a face',
    'can survive on very little food', 'has a sixth sense for danger', 'can juggle anything',
    'always knows the time without looking', 'can imitate any accent', 'has an uncanny ability to find lost items'
  ],
  voice_descriptors: [
    'deep and rumbling', 'high and melodic', 'gravelly and rough', 'soft and whispering',
    'booming and commanding', 'squeaky and youthful', 'smooth and seductive', 'stuttering when nervous',
    'accented with a foreign lilt', 'monotone and emotionless', 'loud and boisterous', 'quiet and thoughtful'
  ]
};

export const MUSIC_DATA: Record<string, any> = {
  'boss-battle': {
    label: 'Boss Battle',
    icon: '👹',
    suggestions: [
      { title: 'O Fortuna', artist: 'Carl Orff (Carmina Burana)', why: 'Epic, thunderous choral power for the final confrontation or boss reveal.', notes: 'Play loud. Best for boss entrance or phase 2. Loop the main motif.', yt: 'https://www.youtube.com/results?search_query=O+Fortuna+Carmina+Burana+full+orchestra', sp: 'https://open.spotify.com/search/O%20Fortuna%20Carl%20Orff' },
      { title: 'Mars, the Bringer of War', artist: 'Gustav Holst (The Planets)', why: 'Menacing orchestral march — perfect for overwhelming or god-like foes.', notes: 'Builds slowly. Great volume for the full orchestral hit.', yt: 'https://www.youtube.com/results?search_query=Mars+the+Bringer+of+War', sp: 'https://open.spotify.com/search/Mars%20Gustav%20Holst' },
      { title: 'The Battle', artist: 'Hans Zimmer (Gladiator)', why: 'Intense, driving action with heroic weight.', notes: 'High energy — good for long boss fights. Fade in the opening.', yt: 'https://www.youtube.com/results?search_query=The+Battle+Hans+Zimmer+Gladiator+full', sp: 'https://open.spotify.com/search/The%20Battle%20Gladiator' },
      { title: 'Duel of the Fates', artist: 'John Williams (Star Wars)', why: 'Aggressive choral energy for fierce, personal boss duels.', notes: 'Excellent for lightsaber-style or high-stakes duels. Loud and proud.', yt: 'https://www.youtube.com/results?search_query=Duel+of+the+Fates', sp: 'https://open.spotify.com/search/Duel%20of%20the%20Fates' }
    ]
  },
  'suspense': {
    label: 'Suspense / Tension',
    icon: '😰',
    suggestions: [
      { title: 'Requiem for a Dream (Lux Aeterna)', artist: 'Clint Mansell', why: 'Builds unbearable tension and psychological dread.', notes: 'Start quiet, ramp up volume as tension rises. Perfect loop.', yt: 'https://www.youtube.com/results?search_query=Requiem+for+a+Dream+Lux+Aeterna', sp: 'https://open.spotify.com/search/Requiem%20for%20a%20Dream%20Lux%20Aeterna' },
      { title: 'The Ecstasy of Gold', artist: 'Ennio Morricone', why: 'Anxious, searching tension that explodes into action.', notes: 'Low volume for exploration turning dangerous. Crescendo at key moment.', yt: 'https://www.youtube.com/results?search_query=The+Ecstasy+of+Gold+Morricone+full', sp: 'https://open.spotify.com/search/Ecstasy%20of%20Gold' },
      { title: 'Time', artist: 'Hans Zimmer (Inception)', why: 'Slow-building dread with emotional weight and ticking clock feel.', notes: 'Ideal for time-sensitive suspense or dream-like horror. Medium volume.', yt: 'https://www.youtube.com/results?search_query=Time+Hans+Zimmer+Inception', sp: 'https://open.spotify.com/search/Time%20Hans%20Zimmer' }
    ]
  },
  'combat': {
    label: 'Combat / Battle',
    icon: '⚔️',
    suggestions: [
      { title: 'Ride of the Valkyries', artist: 'Richard Wagner', why: 'Classic heroic charge music for big fights.', notes: 'Loud and bold. Great for the opening charge of a large battle.', yt: 'https://www.youtube.com/results?search_query=Ride+of+the+Valkyries', sp: 'https://open.spotify.com/search/Ride%20of%20the%20Valkyries' },
      { title: 'Duel of the Fates', artist: 'John Williams (Star Wars)', why: 'Aggressive choral energy for fierce battles.', notes: 'High volume for the main clash. Works amazingly on repeat.', yt: 'https://www.youtube.com/results?search_query=Duel+of+the+Fates', sp: 'https://open.spotify.com/search/Duel%20of%20the%20Fates' },
      { title: 'The Imperial March', artist: 'John Williams', why: 'Menacing and powerful for major enemy forces.', notes: 'Use at 70% volume for enemy approach, full for the fight.', yt: 'https://www.youtube.com/results?search_query=Imperial+March+John+Williams+full+orchestra', sp: 'https://open.spotify.com/search/Imperial%20March' },
      { title: 'Battle Cry', artist: 'Various (Skyrim / Two Steps From Hell style)', why: 'Driving percussion and choir for epic skirmishes.', notes: 'Modern epic style — excellent for player hero moments in combat.', yt: 'https://www.youtube.com/results?search_query=epic+battle+music+two+steps+from+hell', sp: 'https://open.spotify.com/search/epic+battle+music' }
    ]
  },
  'horror': {
    label: 'Horror / Dread',
    icon: '🩸',
    suggestions: [
      { title: 'Tubular Bells', artist: 'Mike Oldfield', why: 'Iconic unsettling horror atmosphere.', notes: 'Low volume in background. The ticking and bells create unease.', yt: 'https://www.youtube.com/results?search_query=Tubular+Bells+Mike+Oldfield', sp: 'https://open.spotify.com/search/Tubular%20Bells' },
      { title: 'The Exorcist Theme', artist: 'Tubular Bells / Mike Oldfield', why: 'Creeping dread and unease.', notes: 'Very low volume recommended. Builds paranoia perfectly.', yt: 'https://www.youtube.com/results?search_query=Exorcist+theme+tubular+bells', sp: 'https://open.spotify.com/search/Exorcist%20theme' },
      { title: 'Heartbeat', artist: 'Various Horror Scores', why: 'Simple, pounding tension builder.', notes: 'Use as a subtle layer under other sounds or alone for chase scenes.', yt: 'https://www.youtube.com/results?search_query=horror+heartbeat+soundtrack', sp: 'https://open.spotify.com/search/horror%20heartbeat' }
    ]
  },
  'exploration': {
    label: 'Exploration / Travel',
    icon: '🗺️',
    suggestions: [
      { title: 'Concerning Hobbits', artist: 'Howard Shore (The Lord of the Rings)', why: 'Wandering, hopeful travel through the wild.', notes: 'Soft volume for overland travel. Nostalgic and warm.', yt: 'https://www.youtube.com/results?search_query=Concerning+Hobbits+Howard+Shore', sp: 'https://open.spotify.com/search/Concerning%20Hobbits' },
      { title: 'The Misty Mountains', artist: 'Howard Shore', why: 'Mysterious and grand journey music.', notes: 'Medium volume. Perfect for mountains, forests, or ancient paths.', yt: 'https://www.youtube.com/results?search_query=The+Misty+Mountains+Howard+Shore+full', sp: 'https://open.spotify.com/search/Misty%20Mountains' },
      { title: 'The Shire', artist: 'Howard Shore', why: 'Peaceful countryside travel vibe.', notes: 'Low and gentle. Great for safe travel or arriving at a village.', yt: 'https://www.youtube.com/results?search_query=The+Shire+Howard+Shore', sp: 'https://open.spotify.com/search/The%20Shire' }
    ]
  },
  'tavern': {
    label: 'Tavern / Social',
    icon: '🍺',
    suggestions: [
      { title: 'Fantasy Tavern Music', artist: 'Various (Bardcore / Medieval)', why: 'Lively inn background with chatter energy.', notes: 'Medium-low volume. Let it play on loop while players roleplay.', yt: 'https://www.youtube.com/results?search_query=fantasy+tavern+music+1+hour+loop', sp: 'https://open.spotify.com/search/fantasy%20tavern%20music' },
      { title: 'Bard Song / Medieval Tavern', artist: 'Various', why: 'Warm, rowdy social atmosphere.', notes: 'Perfect volume for background during downtime or NPC conversations.', yt: 'https://www.youtube.com/results?search_query=medieval+tavern+music+bard+songs', sp: 'https://open.spotify.com/search/medieval%20tavern' },
      { title: 'The Prancing Pony', artist: 'Howard Shore (The Lord of the Rings)', why: 'Cozy yet lively inn feel.', notes: 'Low volume. Excellent for the "we meet in a tavern" opening.', yt: 'https://www.youtube.com/results?search_query=Prancing+Pony+Howard+Shore', sp: 'https://open.spotify.com/search/Prancing%20Pony' }
    ]
  },
  'epic': {
    label: 'Epic / Triumphant',
    icon: '🏆',
    suggestions: [
      { title: 'Zadok the Priest', artist: 'George Frideric Handel', why: 'Grand, ceremonial victory or coronation moment.', notes: 'Full volume for major victories or arrivals of kings/heroes.', yt: 'https://www.youtube.com/results?search_query=Zadok+the+Priest+Handel', sp: 'https://open.spotify.com/search/Zadok%20the%20Priest' },
      { title: 'Also sprach Zarathustra', artist: 'Richard Strauss', why: 'Iconic rising heroic fanfare.', notes: 'Use the famous opening for big reveals or party power-ups.', yt: 'https://www.youtube.com/results?search_query=Also+sprach+Zarathustra+2001+Space+Odyssey', sp: 'https://open.spotify.com/search/Also%20sprach%20Zarathustra' },
      { title: 'Now We Are Free', artist: 'Hans Zimmer (Gladiator)', why: 'Emotional, soaring triumph and relief.', notes: 'Great for after a hard-won victory. Emotional volume.', yt: 'https://www.youtube.com/results?search_query=Now+We+Are+Free+Gladiator+full', sp: 'https://open.spotify.com/search/Now%20We%20Are%20Free' }
    ]
  },
  'stealth': {
    label: 'Stealth / Sneaking',
    icon: '🕵️',
    suggestions: [
      { title: 'The Mission (Main Title)', artist: 'Ennio Morricone', why: 'Tense, careful movement through dangerous territory.', notes: 'Very low volume. Great for infiltration scenes.', yt: 'https://www.youtube.com/results?search_query=The+Mission+Ennio+Morricone', sp: 'https://open.spotify.com/search/The%20Mission%20Morricone' },
      { title: 'Stealth Music (Skyrim / Witcher style)', artist: 'Various Game Soundtracks', why: 'Subtle tension while avoiding detection.', notes: 'Background only. Use sparingly with pauses.', yt: 'https://www.youtube.com/results?search_query=skyrim+stealth+music', sp: 'https://open.spotify.com/search/skyrim+stealth' }
    ]
  },
  'mystery': {
    label: 'Mystery / Investigation',
    icon: '🔍',
    suggestions: [
      { title: 'Sherlock Holmes Theme', artist: 'Various (Hans Zimmer / David Arnold)', why: 'Clever, curious investigation atmosphere.', notes: 'Medium volume. Perfect for clue hunting and deductions.', yt: 'https://www.youtube.com/results?search_query=sherlock+holmes+theme+music', sp: 'https://open.spotify.com/search/sherlock+holmes+theme' },
      { title: 'The Pink Panther Theme', artist: 'Henry Mancini', why: 'Playful yet sneaky investigation vibe.', notes: 'Light and fun — good for lighter mystery sessions.', yt: 'https://www.youtube.com/results?search_query=Pink+Panther+theme+full', sp: 'https://open.spotify.com/search/Pink%20Panther' }
    ]
  },
  'victory': {
    label: 'Victory / Celebration',
    icon: '🎉',
    suggestions: [
      { title: 'We Are the Champions', artist: 'Queen', why: 'Classic party victory anthem.', notes: 'Full blast after a major win. Fun for players to sing along.', yt: 'https://www.youtube.com/results?search_query=We+Are+the+Champions+Queen', sp: 'https://open.spotify.com/search/We%20Are%20the%20Champions' },
      { title: 'The Throne Room / End Credits', artist: 'John Williams (Star Wars)', why: 'Triumphant and celebratory finale music.', notes: 'Excellent for awarding treasure or ending a big arc.', yt: 'https://www.youtube.com/results?search_query=Star+Wars+Throne+Room+music', sp: 'https://open.spotify.com/search/Star%20Wars%20Throne%20Room' }
    ]
  },

  'tribal-rituals': {
    label: 'Tribal Rituals',
    icon: '🩸',
    suggestions: [
      { title: 'Krigsgaldr', artist: 'Heilung', why: 'Bone-deep ritual energy — shamanic chanting, frame drums, and primal atmosphere.', notes: 'Ancient ruins, druid circles, blood rites. Play loud. Very atmospheric.', yt: 'https://www.youtube.com/results?search_query=Heilung+Krigsgaldr', sp: 'https://open.spotify.com/search/Heilung%20Krigsgaldr' },
      { title: 'In Maidjan', artist: 'Heilung', why: 'Hypnotic, repetitive shamanic chanting that builds to a primal frenzy.', notes: 'Best for long ritual scenes. Let it loop.', yt: 'https://www.youtube.com/results?search_query=Heilung+In+Maidjan', sp: 'https://open.spotify.com/search/Heilung%20In%20Maidjan' },
      { title: 'Alfadhirhaiti', artist: 'Heilung', why: 'Ethereal, otherworldly tone — ritual magic being worked.', notes: 'Excellent for the moment magic is channeled or a spirit is summoned.', yt: 'https://www.youtube.com/results?search_query=Heilung+Alfadhirhaiti', sp: 'https://open.spotify.com/search/Heilung%20Alfadhirhaiti' }
    ]
  },

  'norse-wilderness': {
    label: 'Norse Wilderness',
    icon: '🌲',
    suggestions: [
      { title: 'Helvegen', artist: 'Wardruna', why: 'Mournful, ancient Norse folk — the path of the dead, vast northern landscapes.', notes: 'Wilderness travel, Viking settings, funeral pyres. Deeply atmospheric.', yt: 'https://www.youtube.com/results?search_query=Wardruna+Helvegen', sp: 'https://open.spotify.com/search/Wardruna%20Helvegen' },
      { title: 'Algir - Stien Klarnar', artist: 'Wardruna', why: 'Expansive and meditative Nordic folk.', notes: 'Open landscapes, long overland journeys. Pairs with silence beautifully.', yt: 'https://www.youtube.com/results?search_query=Wardruna+Algir', sp: 'https://open.spotify.com/search/Wardruna%20Algir' },
      { title: 'Isa', artist: 'Wardruna', why: 'Cold, still — the feeling of frozen wastes and deep winter.', notes: 'Ice environments, Norse winter, tundra exploration.', yt: 'https://www.youtube.com/results?search_query=Wardruna+Isa', sp: 'https://open.spotify.com/search/Wardruna%20Isa' }
    ]
  },

  'primitive-raw': {
    label: 'Primitive & Raw',
    icon: '🌀',
    suggestions: [
      { title: 'Sivunittinni', artist: 'Tanya Tagaq', why: 'Experimental throat singing — primal, disturbing, deeply alien.', notes: 'Horror, spirits, alien encounters. Not for the faint-hearted. Very effective.', yt: 'https://www.youtube.com/results?search_query=Tanya+Tagaq+Sivunittinni', sp: 'https://open.spotify.com/search/Tanya%20Tagaq' },
      { title: 'Uja', artist: 'Tanya Tagaq', why: 'Raw inuit throat singing — elemental, primal force of nature.', notes: 'Ancient spirits, elemental encounters, wilderness horror.', yt: 'https://www.youtube.com/results?search_query=Tanya+Tagaq+Uja', sp: 'https://open.spotify.com/search/Tanya%20Tagaq%20Uja' }
    ]
  },

  'medieval-festival': {
    label: 'Medieval Festival',
    icon: '🎪',
    suggestions: [
      { title: 'Percussus Sum', artist: 'Corvus Corax', why: 'Driving bagpipes and drums — a medieval festival in full swing.', notes: 'Taverns, fairs, city streets. High energy, impossible not to feel it.', yt: 'https://www.youtube.com/results?search_query=Corvus+Corax+Percussus+Sum', sp: 'https://open.spotify.com/search/Corvus%20Corax%20Percussus%20Sum' },
      { title: 'Sverker', artist: 'Corvus Corax', why: 'Epic medieval bagpipes and percussion — processional energy.', notes: 'City entrances, tournament openings, market days.', yt: 'https://www.youtube.com/results?search_query=Corvus+Corax+Sverker', sp: 'https://open.spotify.com/search/Corvus%20Corax%20Sverker' },
      { title: 'Mandu Mandu', artist: 'Corvus Corax', why: 'Hypnotic medieval rhythm with crowd energy.', notes: 'Festival dancing, tavern brawls, rowdy celebrations.', yt: 'https://www.youtube.com/results?search_query=Corvus+Corax+Mandu+Mandu', sp: 'https://open.spotify.com/search/Corvus%20Corax%20Mandu%20Mandu' }
    ]
  },

  'mythic-fantasy': {
    label: 'Mythic Fantasy',
    icon: '🌌',
    suggestions: [
      { title: 'The Host of Seraphim', artist: 'Dead Can Dance', why: 'Haunting, ancient, otherworldly — ancient civilizations and sacred moments.', notes: 'Dream sequences, ancient ruins, divine encounters.', yt: 'https://www.youtube.com/results?search_query=Dead+Can+Dance+Host+of+Seraphim', sp: 'https://open.spotify.com/search/Dead%20Can%20Dance%20Host%20of%20Seraphim' },
      { title: 'Song of the Stars', artist: 'Dead Can Dance', why: 'Ethereal world music — the music of another age.', notes: 'Ancient civilizations, cosmic mysteries, mythic storytelling.', yt: 'https://www.youtube.com/results?search_query=Dead+Can+Dance+Song+of+the+Stars', sp: 'https://open.spotify.com/search/Dead%20Can%20Dance%20Song%20of%20Stars' },
      { title: 'Rakim', artist: 'Dead Can Dance', why: 'Middle Eastern meets ethereal — ancient lands and forgotten gods.', notes: 'Desert ruins, ancient temples, mystic journeys.', yt: 'https://www.youtube.com/results?search_query=Dead+Can+Dance+Rakim', sp: 'https://open.spotify.com/search/Dead%20Can%20Dance%20Rakim' }
    ]
  },

  'mongolian-steppes': {
    label: 'Mongolian Steppes',
    icon: '🐎',
    suggestions: [
      { title: 'Epic Throat Singing', artist: 'Huun-Huur-Tu', why: 'Authentic Tuvan throat singing — the sound of the open steppe.', notes: 'Nomads, horse lords, open plains. Meditative and vast.', yt: 'https://www.youtube.com/results?search_query=Huun+Huur+Tu+throat+singing', sp: 'https://open.spotify.com/search/Huun-Huur-Tu' },
      { title: 'Steppe Riders', artist: 'Batzorig Vaanchig', why: 'Mongolian throat singer with horsehead fiddle — the sound of the steppe.', notes: 'Cavalry movements, nomadic camps, the endless plains.', yt: 'https://www.youtube.com/results?search_query=Batzorig+Vaanchig+throat+singing', sp: 'https://open.spotify.com/search/Batzorig%20Vaanchig' },
      { title: 'Khoomei / Traditional Works', artist: 'The Mongolian National Ensemble', why: 'Traditional Mongolian folk instruments and overtone singing.', notes: 'General steppe atmosphere, yurt camps, shamanic rituals.', yt: 'https://www.youtube.com/results?search_query=mongolian+throat+singing+traditional', sp: 'https://open.spotify.com/search/mongolian%20throat%20singing' }
    ]
  },

  'historical-crusades': {
    label: 'Historical Crusades',
    icon: '✝️',
    suggestions: [
      { title: 'Mel Obscurum', artist: 'Tabernis', why: 'Medieval vocal polyphony — the sound of religious orders and pilgrimage roads.', notes: 'Religious orders, pilgrimages, crusader marches.', yt: 'https://www.youtube.com/results?search_query=Tabernis+Mel+Obscurum', sp: 'https://open.spotify.com/search/Tabernis%20Mel%20Obscurum' },
      { title: 'Crusade Chants', artist: 'Various Early Music', why: 'Gregorian-influenced chant for holy warriors and religious settings.', notes: 'Monasteries, religious ceremonies, holy quest scenes.', yt: 'https://www.youtube.com/results?search_query=crusade+medieval+chant+music', sp: 'https://open.spotify.com/search/crusade%20medieval%20chant' }
    ]
  },

  'elven-realms': {
    label: 'Elven Realms',
    icon: '🌿',
    suggestions: [
      { title: 'May It Be', artist: 'Enya', why: 'Ethereal, timeless — the perfect sound of elven grace and ancient beauty.', notes: 'Elven cities, sacred forests, moments of elvish magic.', yt: 'https://www.youtube.com/results?search_query=Enya+May+It+Be', sp: 'https://open.spotify.com/search/Enya%20May%20It%20Be' },
      { title: 'Orinoco Flow', artist: 'Enya', why: 'Flowing, expansive — journeys through magical landscapes.', notes: 'Enchanted rivers, aerial views, elven exploration.', yt: 'https://www.youtube.com/results?search_query=Enya+Orinoco+Flow', sp: 'https://open.spotify.com/search/Enya%20Orinoco%20Flow' },
      { title: 'Lothlorien', artist: 'Enya (The Lord of the Rings)', why: 'Pure elven atmosphere — ancient, serene, otherworldly.', notes: 'Elven sanctuaries, meeting elven royalty, sacred groves.', yt: 'https://www.youtube.com/results?search_query=Enya+Lothlorien+LOTR', sp: 'https://open.spotify.com/search/Enya%20Lothlorien' }
    ]
  },

  'dark-dungeons': {
    label: 'Dark Dungeons',
    icon: '🕳️',
    suggestions: [
      { title: 'Heresy', artist: 'Lustmord', why: 'Deep, oppressive dark ambient — the weight of ancient stone and absolute darkness.', notes: 'Deep dungeons, Underdark, horror. Play very quietly in the background.', yt: 'https://www.youtube.com/results?search_query=Lustmord+Heresy+dark+ambient', sp: 'https://open.spotify.com/search/Lustmord%20Heresy' },
      { title: 'The Place Where the Black Stars Hang', artist: 'Lustmord', why: 'Cosmic void ambient — ancient evil that predates memory.', notes: 'Eldritch locations, void portals, deep dungeon descents.', yt: 'https://www.youtube.com/results?search_query=Lustmord+Black+Stars+Hang', sp: 'https://open.spotify.com/search/Lustmord%20Black%20Stars' },
      { title: 'Dark Ambient Dungeon', artist: 'Lustmord', why: 'Hour-long dark ambient — subterranean dread.', notes: 'Extended dungeon crawl background. Set to very low volume.', yt: 'https://www.youtube.com/results?search_query=Lustmord+dark+ambient+1+hour', sp: 'https://open.spotify.com/search/Lustmord' }
    ]
  },

  'strange-acoustics': {
    label: 'Strange Acoustics',
    icon: '🔮',
    suggestions: [
      { title: 'Experimental Ambient Works', artist: 'Akumu', why: 'Disorienting experimental ambient — wrong magic, the fabric of reality bending.', notes: 'Weird magic, aberrations, dream realms, psionic encounters.', yt: 'https://www.youtube.com/results?search_query=Akumu+experimental+ambient', sp: 'https://open.spotify.com/search/Akumu%20ambient' },
      { title: 'Liminal Spaces', artist: 'Akumu', why: 'Ambient dread with unusual sound design.', notes: 'Transition zones between planes, psychic disturbances, unreliable reality.', yt: 'https://www.youtube.com/results?search_query=Akumu+liminal+ambient', sp: 'https://open.spotify.com/search/Akumu%20liminal' }
    ]
  },

  'historical-fantasy': {
    label: 'Historical Fantasy',
    icon: '🏰',
    suggestions: [
      { title: 'La Folia', artist: 'Jordi Savall / Hesperion XXI', why: 'Baroque early music — noble courts and castle intrigue at their most elegant.', notes: 'Noble courts, castles, historical campaigns, political intrigue.', yt: 'https://www.youtube.com/results?search_query=Jordi+Savall+La+Folia', sp: 'https://open.spotify.com/search/Jordi%20Savall%20La%20Folia' },
      { title: 'Al-Andalus works', artist: 'Jordi Savall', why: 'Medieval Spanish/Moorish music — Mediterranean fantasy kingdoms.', notes: 'Multicultural cities, merchant courts, scholarly orders.', yt: 'https://www.youtube.com/results?search_query=Jordi+Savall+Al+Andalus', sp: 'https://open.spotify.com/search/Jordi%20Savall%20Al%20Andalus' },
      { title: 'Celtic Viol Works', artist: 'Hesperion XXI', why: 'Refined early music with fantasy depth.', notes: 'Historical roleplay, bardic colleges, noble feasts.', yt: 'https://www.youtube.com/results?search_query=Hesperion+XXI+early+music', sp: 'https://open.spotify.com/search/Hesperion%20XXI' }
    ]
  },

  'medieval-authentic': {
    label: 'Medieval Authenticity',
    icon: '📜',
    suggestions: [
      { title: 'Historical Performance Works', artist: 'Ensemble Syntagma', why: 'Authentic medieval performance — the real sound of the Middle Ages.', notes: 'Kingdoms, monasteries, courtly intrigue. Period-accurate feel.', yt: 'https://www.youtube.com/results?search_query=Ensemble+Syntagma+medieval', sp: 'https://open.spotify.com/search/Ensemble%20Syntagma' },
      { title: 'Medieval Dance Music', artist: 'Ensemble Syntagma', why: 'Authentic period dance music for feasts and celebrations.', notes: 'Banquets, courtly dances, noble celebrations.', yt: 'https://www.youtube.com/results?search_query=Ensemble+Syntagma+dance+music', sp: 'https://open.spotify.com/search/Ensemble%20Syntagma%20dance' }
    ]
  },

  'rustic-village': {
    label: 'Rustic Villages',
    icon: '🏘️',
    suggestions: [
      { title: 'Folk Songs & Dances', artist: 'Vox Vulgaris', why: 'Earthy, lively medieval folk — markets, common folk, village life.', notes: 'Markets, taverns, common folk life. Very approachable energy.', yt: 'https://www.youtube.com/results?search_query=Vox+Vulgaris+medieval+folk', sp: 'https://open.spotify.com/search/Vox%20Vulgaris' },
      { title: 'Village Celebrations', artist: 'Vox Vulgaris', why: 'Rowdy, communal folk music for festival days.', notes: 'Village festivals, harvest celebrations, communal gatherings.', yt: 'https://www.youtube.com/results?search_query=Vox+Vulgaris+folk+songs', sp: 'https://open.spotify.com/search/Vox%20Vulgaris%20folk' }
    ]
  },

  'mystical-exploration': {
    label: 'Mystical Exploration',
    icon: '✨',
    suggestions: [
      { title: 'Sitala', artist: 'Alio Die', why: 'Slow, deep ambient — discovery in magical and ancient places.', notes: 'Exploration, magical forests, lost ruins, meditative travel.', yt: 'https://www.youtube.com/results?search_query=Alio+Die+Sitala', sp: 'https://open.spotify.com/search/Alio%20Die' },
      { title: 'Hollow Invocation', artist: 'Alio Die', why: 'Resonant drone ambient — the hum of ancient ley lines.', notes: 'Ley lines, ancient magic, sacred sites.', yt: 'https://www.youtube.com/results?search_query=Alio+Die+ambient', sp: 'https://open.spotify.com/search/Alio%20Die%20ambient' }
    ]
  },

  'cosmic-mystery': {
    label: 'Cosmic Mystery',
    icon: '👁️',
    suggestions: [
      { title: 'Primeval', artist: 'Voice of Eye', why: 'Experimental ambient — the sound of ancient secrets and eldritch discovery.', notes: 'Ancient secrets, eldritch locations, Far Realm, void magic.', yt: 'https://www.youtube.com/results?search_query=Voice+of+Eye+Primeval+ambient', sp: 'https://open.spotify.com/search/Voice%20of%20Eye' },
      { title: 'Transmissions', artist: 'Voice of Eye', why: 'Unsettling, alien ambient textures for the truly unknowable.', notes: 'Mind Flayers, ancient evils, cosmic horror encounters.', yt: 'https://www.youtube.com/results?search_query=Voice+of+Eye+Transmissions', sp: 'https://open.spotify.com/search/Voice%20of%20Eye%20Transmissions' }
    ]
  },

  'dreamlike-travel': {
    label: 'Dreamlike Travel',
    icon: '🌙',
    suggestions: [
      { title: 'The Drift', artist: 'Tuu', why: 'Ambient world music — long journeys that feel like memories.', notes: 'Long journeys, meditation scenes, traveling between scenes.', yt: 'https://www.youtube.com/results?search_query=Tuu+The+Drift+ambient', sp: 'https://open.spotify.com/search/Tuu%20ambient' },
      { title: 'Mesh', artist: 'Tuu', why: 'Layered ambient folk — the feeling of distance and movement.', notes: 'Montage-style travel, time skips, dreamscapes.', yt: 'https://www.youtube.com/results?search_query=Tuu+Mesh+ambient+world', sp: 'https://open.spotify.com/search/Tuu%20Mesh' }
    ]
  },

  'haunted-locations': {
    label: 'Haunted Locations',
    icon: '👻',
    suggestions: [
      { title: 'Dark Ambient Works', artist: 'Velehentor', why: 'Medieval dungeon synth darkness — the sound of cursed and forgotten places.', notes: 'Crypts, cursed lands, haunted manors, lingering evil.', yt: 'https://www.youtube.com/results?search_query=Velehentor+dark+ambient', sp: 'https://open.spotify.com/search/Velehentor' },
      { title: 'Dungeon Synth Atmospheres', artist: 'Velehentor', why: 'Oppressive, cold atmosphere for places where death lingers.', notes: 'Undead encounters, haunted ruins, ghost-heavy scenes.', yt: 'https://www.youtube.com/results?search_query=Velehentor+dungeon+synth', sp: 'https://open.spotify.com/search/Velehentor%20dungeon' }
    ]
  },

  'feywild': {
    label: 'Feywild Wanderings',
    icon: '🧚',
    suggestions: [
      { title: 'Psychedelic Folk Works', artist: 'Fursaxa', why: 'Psychedelic folk — the enchanted strangeness of the Feywild.', notes: 'Fey realms, enchanted woods, fairy courts, wild magic zones.', yt: 'https://www.youtube.com/results?search_query=Fursaxa+psychedelic+folk', sp: 'https://open.spotify.com/search/Fursaxa' },
      { title: 'Lepidoptera', artist: 'Fursaxa', why: 'Hazy, dreamlike folk — beauty and danger intertwined.', notes: 'Pixie encounters, hag lairs with beauty, eerie fey spaces.', yt: 'https://www.youtube.com/results?search_query=Fursaxa+Lepidoptera', sp: 'https://open.spotify.com/search/Fursaxa%20Lepidoptera' }
    ]
  },

  'folk-horror': {
    label: 'Folk Horror',
    icon: '🌾',
    suggestions: [
      { title: 'Dark Folk Works', artist: 'Sharron Kraus', why: 'Unsettling dark folk — witch covens and remote village dread.', notes: 'Witch covens, remote villages, old religions, folk horror.', yt: 'https://www.youtube.com/results?search_query=Sharron+Kraus+dark+folk', sp: 'https://open.spotify.com/search/Sharron%20Kraus' },
      { title: 'Songs from the Hillside', artist: 'Sharron Kraus', why: 'Eerie English folk — the uncanny in the pastoral.', notes: 'Cursed countryside, pagan traditions, isolated communities.', yt: 'https://www.youtube.com/results?search_query=Sharron+Kraus+songs+hillside', sp: 'https://open.spotify.com/search/Sharron%20Kraus%20songs' }
    ]
  },

  'mythic-storytelling': {
    label: 'Mythic Storytelling',
    icon: '📖',
    suggestions: [
      { title: 'Psychedelic Folk Works', artist: 'Fern Knight', why: 'Dreamy, layered psychedelic folk — legends being told around a fire.', notes: 'Legends, prophetic dreams, bardic performances, ancient tales.', yt: 'https://www.youtube.com/results?search_query=Fern+Knight+psychedelic+folk', sp: 'https://open.spotify.com/search/Fern%20Knight' },
      { title: 'Quill', artist: 'Fern Knight', why: 'Ethereal and narrative folk music.', notes: 'Oral history moments, revealing ancient truths, quest origins.', yt: 'https://www.youtube.com/results?search_query=Fern+Knight+Quill', sp: 'https://open.spotify.com/search/Fern%20Knight%20Quill' }
    ]
  },

  'classic-fantasy': {
    label: 'Classic Fantasy',
    icon: '🗡️',
    suggestions: [
      { title: 'Basket of Light', artist: 'Pentangle', why: 'British folk — traditional fantasy adventures, roads, and old tales.', notes: 'Traditional fantasy, roads less traveled, folk heroes.', yt: 'https://www.youtube.com/results?search_query=Pentangle+Basket+of+Light', sp: 'https://open.spotify.com/search/Pentangle%20Basket%20of%20Light' },
      { title: 'Light Flight', artist: 'Pentangle', why: 'Lively, skilled folk music — adventurers on the road.', notes: 'Upbeat overland travel, happy returns, light adventures.', yt: 'https://www.youtube.com/results?search_query=Pentangle+Light+Flight', sp: 'https://open.spotify.com/search/Pentangle%20Light%20Flight' }
    ]
  },

  'dungeon-synth-ruins': {
    label: 'Ruined Kingdoms',
    icon: '🏚️',
    suggestions: [
      { title: 'Dungeon Synth Works', artist: 'Old Tower', why: 'Classic dungeon synth — exploration of forgotten kingdoms and hex crawls.', notes: 'Exploration, hex crawls, abandoned settlements, quiet ruins.', yt: 'https://www.youtube.com/results?search_query=Old+Tower+dungeon+synth', sp: 'https://open.spotify.com/search/Old%20Tower%20dungeon%20synth' },
      { title: 'The Watcher', artist: 'Old Tower', why: 'Lonely, cold dungeon synth atmosphere.', notes: 'Watching patrols, keeping vigil in cursed lands.', yt: 'https://www.youtube.com/results?search_query=Old+Tower+The+Watcher', sp: 'https://open.spotify.com/search/Old%20Tower%20Watcher' }
    ]
  },

  'dungeon-synth-halls': {
    label: 'Forgotten Halls',
    icon: '🚪',
    suggestions: [
      { title: 'Dungeon Delving Ambient', artist: 'Dim', why: 'Atmospheric dungeon synth — dark halls and ancient doors.', notes: 'Dungeon delving, corridor crawls, dungeon exploration.', yt: 'https://www.youtube.com/results?search_query=Dim+dungeon+synth', sp: 'https://open.spotify.com/search/Dim%20dungeon%20synth' }
    ]
  },

  'dungeon-synth-castles': {
    label: 'Dark Castles',
    icon: '🏯',
    suggestions: [
      { title: 'Fortress Works', artist: 'Cimerion', why: 'Dungeon synth for evil strongholds and dark lords.', notes: 'Evil strongholds, villain lairs, dark towers.', yt: 'https://www.youtube.com/results?search_query=Cimerion+dungeon+synth', sp: 'https://open.spotify.com/search/Cimerion%20dungeon%20synth' }
    ]
  },

  'dungeon-synth-tombs': {
    label: 'Ancient Tombs',
    icon: '⚰️',
    suggestions: [
      { title: 'Necropolis Works', artist: 'Oublieth', why: 'Deep, cold dungeon synth — crypts and the long-dead.', notes: 'Crypts, necropolises, undead encounters, silent tombs.', yt: 'https://www.youtube.com/results?search_query=Oublieth+dungeon+synth', sp: 'https://open.spotify.com/search/Oublieth%20dungeon%20synth' }
    ]
  },

  'dungeon-synth-frontier': {
    label: 'Lonely Frontiers',
    icon: '🌄',
    suggestions: [
      { title: 'Borderlands', artist: 'Fog Castle', why: 'Melancholic dungeon synth — the lonely edge of the known world.', notes: 'Wilderness travel, borderlands, frontier settlements, isolation.', yt: 'https://www.youtube.com/results?search_query=Fog+Castle+dungeon+synth', sp: 'https://open.spotify.com/search/Fog%20Castle%20dungeon%20synth' }
    ]
  },

  'medieval-metal': {
    label: 'Medieval Metal Twist',
    icon: '🤘',
    suggestions: [
      { title: 'Sabbatum (Black Sabbath Medieval Covers)', artist: 'Rondellus', why: 'Black Sabbath covers performed in authentic medieval style — surprisingly perfect.', notes: 'Taverns, light-hearted adventures, moments of levity. Great conversation starter.', yt: 'https://www.youtube.com/results?search_query=Rondellus+Sabbatum+medieval+Black+Sabbath', sp: 'https://open.spotify.com/search/Rondellus%20Sabbatum' },
      { title: 'War Pigs (Medieval)', artist: 'Rondellus', why: 'Instantly recognizable but completely transformed — players love it.', notes: 'Humorous battlefield moments, meta fun, tavern singalongs.', yt: 'https://www.youtube.com/results?search_query=Rondellus+War+Pigs+medieval', sp: 'https://open.spotify.com/search/Rondellus%20War%20Pigs' }
    ]
  },

  'epic-combat-conan': {
    label: 'Epic Combat',
    icon: '🔥',
    suggestions: [
      { title: 'Anvil of Crom', artist: 'Basil Poledouris (Conan the Barbarian)', why: 'Pure orchestral fantasy combat power — the definitive heroic charge.', notes: 'Boss battles, heroic charges, moments of legendary might.', yt: 'https://www.youtube.com/results?search_query=Anvil+of+Crom+Conan+Barbarian', sp: 'https://open.spotify.com/search/Anvil%20of%20Crom%20Conan' },
      { title: 'Riddle of Steel / Riders of Doom', artist: 'Basil Poledouris', why: 'Menacing orchestral fantasy — building to inevitable violent conflict.', notes: 'Enemy approaches, tense standoffs before combat.', yt: 'https://www.youtube.com/results?search_query=Riddle+of+Steel+Riders+of+Doom+Conan', sp: 'https://open.spotify.com/search/Riddle%20of%20Steel%20Conan' },
      { title: 'Battle of the Mounds', artist: 'Basil Poledouris', why: 'Savage, triumphant — the hero victorious against all odds.', notes: 'Climactic battles, last stands, pyrrhic victories.', yt: 'https://www.youtube.com/results?search_query=Battle+of+the+Mounds+Conan', sp: 'https://open.spotify.com/search/Battle%20of%20the%20Mounds%20Conan' }
    ]
  },

  'playlist-tavern': {
    label: '🍺 Tavern Playlist',
    icon: '🎶',
    suggestions: [
      { title: 'Percussus Sum', artist: 'Corvus Corax', why: 'Driving medieval bagpipes — instant tavern energy.', notes: 'Play first to set the mood.', yt: 'https://www.youtube.com/results?search_query=Corvus+Corax+Percussus+Sum', sp: 'https://open.spotify.com/search/Corvus%20Corax' },
      { title: 'Folk Songs', artist: 'Vox Vulgaris', why: 'Earthy, common folk music for the common room.', notes: 'Background conversation filler.', yt: 'https://www.youtube.com/results?search_query=Vox+Vulgaris+medieval+folk', sp: 'https://open.spotify.com/search/Vox%20Vulgaris' },
      { title: 'Sabbatum', artist: 'Rondellus', why: 'Medieval metal covers — the weird bard in the corner.', notes: 'Surprise track. Players will notice it.', yt: 'https://www.youtube.com/results?search_query=Rondellus+Sabbatum', sp: 'https://open.spotify.com/search/Rondellus%20Sabbatum' },
      { title: 'Basket of Light', artist: 'Pentangle', why: 'Classic folk — the traveling bard\'s repertoire.', notes: 'Wind-down drinking music.', yt: 'https://www.youtube.com/results?search_query=Pentangle+Basket+of+Light', sp: 'https://open.spotify.com/search/Pentangle' }
    ]
  },

  'playlist-wilderness': {
    label: '🌲 Wilderness Playlist',
    icon: '🎶',
    suggestions: [
      { title: 'Helvegen', artist: 'Wardruna', why: 'Norse folk for vast landscapes and overland travel.', notes: 'Open roads, long travel montages.', yt: 'https://www.youtube.com/results?search_query=Wardruna+Helvegen', sp: 'https://open.spotify.com/search/Wardruna' },
      { title: 'May It Be', artist: 'Enya', why: 'Gentle, ethereal — safe travel through beautiful lands.', notes: 'Arriving somewhere new, hopeful moments.', yt: 'https://www.youtube.com/results?search_query=Enya+May+It+Be', sp: 'https://open.spotify.com/search/Enya' },
      { title: 'The Drift', artist: 'Tuu', why: 'Ambient world music for long journeys that blur together.', notes: 'Time skips and montage travel.', yt: 'https://www.youtube.com/results?search_query=Tuu+ambient+world+music', sp: 'https://open.spotify.com/search/Tuu%20ambient' },
      { title: 'In Maidjan (lighter tracks)', artist: 'Heilung', why: 'Ritualistic folk for when the wild feels ancient and sacred.', notes: 'Ancient forests, druid groves, primal nature.', yt: 'https://www.youtube.com/results?search_query=Heilung+live+folk', sp: 'https://open.spotify.com/search/Heilung' }
    ]
  },

  'playlist-dungeon': {
    label: '🕳️ Dungeon Playlist',
    icon: '🎶',
    suggestions: [
      { title: 'Heresy', artist: 'Lustmord', why: 'The definitive dungeon track — pure oppressive weight.', notes: 'Very low volume. Background dread.', yt: 'https://www.youtube.com/results?search_query=Lustmord+Heresy', sp: 'https://open.spotify.com/search/Lustmord' },
      { title: 'Dungeon Synth', artist: 'Old Tower', why: 'Lonely, cold — forgotten halls and empty treasure rooms.', notes: 'Between combat. Quiet exploration.', yt: 'https://www.youtube.com/results?search_query=Old+Tower+dungeon+synth', sp: 'https://open.spotify.com/search/Old%20Tower' },
      { title: 'Dungeon Ambient', artist: 'Dim', why: 'Simple, effective dungeon synth atmosphere.', notes: 'Corridor crawls, listening at doors.', yt: 'https://www.youtube.com/results?search_query=Dim+dungeon+synth', sp: 'https://open.spotify.com/search/Dim%20dungeon' },
      { title: 'Borderlands', artist: 'Fog Castle', why: 'Melancholic synth — the lonely dungeon far from help.', notes: 'Resting in the dungeon. Survival tension.', yt: 'https://www.youtube.com/results?search_query=Fog+Castle+dungeon+synth', sp: 'https://open.spotify.com/search/Fog%20Castle' }
    ]
  },

  'playlist-horror': {
    label: '🩸 Horror Playlist',
    icon: '🎶',
    suggestions: [
      { title: 'Sivunittinni', artist: 'Tanya Tagaq', why: 'Primal, visceral — confronting something deeply wrong.', notes: 'Horror reveals, monster encounters.', yt: 'https://www.youtube.com/results?search_query=Tanya+Tagaq', sp: 'https://open.spotify.com/search/Tanya%20Tagaq' },
      { title: 'Dark Ambient', artist: 'Lustmord', why: 'Cold, ancient dread that fills silences.', notes: 'Horror atmosphere. Paranoia filler.', yt: 'https://www.youtube.com/results?search_query=Lustmord+dark+ambient', sp: 'https://open.spotify.com/search/Lustmord' },
      { title: 'Transmissions', artist: 'Voice of Eye', why: 'Alien, wrong — eldritch horror atmosphere.', notes: 'Mind Flayers, aberrations, Far Realm.', yt: 'https://www.youtube.com/results?search_query=Voice+of+Eye+ambient', sp: 'https://open.spotify.com/search/Voice%20of%20Eye' },
      { title: 'Experimental Ambient', artist: 'Akumu', why: 'Reality-bending — things the players cannot explain.', notes: 'Impossible architecture, psychic horror.', yt: 'https://www.youtube.com/results?search_query=Akumu+experimental+ambient', sp: 'https://open.spotify.com/search/Akumu%20ambient' }
    ]
  },

  'playlist-boss': {
    label: '👹 Boss Battle Playlist',
    icon: '🎶',
    suggestions: [
      { title: 'Anvil of Crom', artist: 'Basil Poledouris', why: 'The heroic charge. Nothing beats it for a boss entrance.', notes: 'Play at max volume at boss reveal.', yt: 'https://www.youtube.com/results?search_query=Anvil+of+Crom+Conan', sp: 'https://open.spotify.com/search/Anvil%20of%20Crom' },
      { title: 'Krigsgaldr', artist: 'Heilung', why: 'Shamanic rage — the boss as ancient primal force.', notes: 'Druidic bosses, ancient evils, primal monsters.', yt: 'https://www.youtube.com/results?search_query=Heilung+Krigsgaldr', sp: 'https://open.spotify.com/search/Heilung%20Krigsgaldr' },
      { title: 'Helvegen (Percussive Version)', artist: 'Wardruna', why: 'The boss fight as an elegy — fighting destiny itself.', notes: 'Emotional boss fights, tragic villains.', yt: 'https://www.youtube.com/results?search_query=Wardruna+Helvegen+full', sp: 'https://open.spotify.com/search/Wardruna%20Helvegen' }
    ]
  },

  'playlist-fey': {
    label: '🧚 Elven / Fey Playlist',
    icon: '🎶',
    suggestions: [
      { title: 'May It Be', artist: 'Enya', why: 'Pure elven grace — arrivals, farewells, ancient beauty.', notes: 'Elven NPC scenes, sacred moments.', yt: 'https://www.youtube.com/results?search_query=Enya+May+It+Be', sp: 'https://open.spotify.com/search/Enya%20May%20It%20Be' },
      { title: 'Psychedelic Folk', artist: 'Fursaxa', why: 'The strangeness of the Feywild — beautiful and wrong.', notes: 'Fey courts, enchanted woods.', yt: 'https://www.youtube.com/results?search_query=Fursaxa+folk', sp: 'https://open.spotify.com/search/Fursaxa' },
      { title: 'Quill', artist: 'Fern Knight', why: 'Dreamy folk storytelling — elven lore and legend.', notes: 'Ancient elven history scenes.', yt: 'https://www.youtube.com/results?search_query=Fern+Knight+music', sp: 'https://open.spotify.com/search/Fern%20Knight' },
      { title: 'The Host of Seraphim', artist: 'Dead Can Dance', why: 'Timeless, ethereal — the Feywild at its most mythic.', notes: 'Archfey encounters, powerful elven magic.', yt: 'https://www.youtube.com/results?search_query=Dead+Can+Dance+Host+Seraphim', sp: 'https://open.spotify.com/search/Dead%20Can%20Dance' }
    ]
  }
};

export const ENCOUNTER_MONSTERS = [
  'Goblins', 'Kobolds', 'Wolves', 'Skeletons', 'Giant Rats', 'Stirges', 'Bandits', 'Giant Spiders', 'Zombies', 'Animated Armor',
  'Ogres', 'Owlbears', 'Manticores', 'Minotaurs', 'Trolls', 'Griffons', 'Bugbears', 'Werewolves', 'Specters', 'Rocs',
  'Young Red Dragon', 'Stone Giant', 'Behir', 'Chimera', 'Young Blue Dragon', 'Cyclops', 'Hydra', 'Gorgons', 'Wyverns', 'Fire Giants',
  'Ancient Red Dragon', 'Storm Giant', 'Pit Fiend', 'Tarrasque', 'Ancient Blue Dragon', 'Kraken', 'Lich', 'Beholder', 'Ancient Green Dragon', 'Demilich'
];

export const PRESETS = {
  generic: { label: 'Generic', desc: 'Balanced system-agnostic' },
  '5e-heroic': { label: '5e Heroic', desc: 'Epic fantasy, magic, high adventure' },
  'osr-gritty': { label: 'OSR Gritty', desc: 'Deadly, low-magic, old-school' },
  scarred: { label: 'Scarred Lands', desc: 'Post-apoc nanite fantasy' },
};

export const TOWN_DATA = {
  prefixes: ['Black','Red','Grey','Silver','Iron','Storm','Ember','Thorn','Frost','Raven','Shadow','High','Low','East','West','Old','New','Bright','Moss','Stone'],
  suffixes: ['ridge','hollow','ford','watch','harbor','spire','haven','reach','moor','vale','bridge','hold','mill','cross','point','gate','wood','field','barrow','cliff'],
  descriptors: ['forgotten','prosperous','lawless','ancient','trade-rich','cursed','bustling','doomed','walled','hidden','warring','sacred','shattered','eternal','whispering','bloodstained','golden','crumbling','reborn','haunted','legendary','twisted','serene','volatile','forgotten','opulent','desperate','enchanted','ruined','vibrant'],
  problems: ['a corrupt sheriff','a dragon demanding tribute','failing crops','a plague of rats','political infighting','a serial killer','a cult gaining power','a cursed artifact','bandit raids','a dying mine','a prophecy of doom','a missing noble heir','an ancient curse awakening','a powerful artifact that corrupts minds','a neighboring kingdom threatening war','a plague that turns victims to stone','a secret society controlling the leaders','a rift to another plane opening','a dragon\'s egg about to hatch','a forgotten god demanding worship','a time loop trapping the town','a massive beast sleeping beneath the streets','a magical storm that never ends','a traitor in the ruling council','a sudden influx of dangerous refugees'],
  features: ['a massive ancient oak in the square','a floating crystal market','an underground fighting pit','the largest library in three kingdoms','a tavern built inside a petrified dragon','an arena carved into a cliff','a lighthouse that hasn\'t been lit in 200 years','a clocktower that runs backwards','a bridge made entirely of living bone','a market where dreams are bought and sold','a prison that holds only one inmate','a garden where time flows differently','a statue that weeps blood on full moons','a library where the books read you','a well that shows possible futures','a theater where the dead perform nightly','a forge that never cools and never fails','a tower that appears only at midnight','a maze of mirrors that shows true selves','a cathedral built upside down','a fountain that grants wishes but takes memories','a bridge guarded by a riddle-loving sphinx','a market square that changes layout daily','an inn with rooms that lead to other worlds'],
  // NEW for user request
  notableBuildingTemplates: [
    'The ${color} ${item} Inn', 
    '${saint} ${building}', 
    'The Old ${structure}', 
    '${trade} Hall', 
    'Guild of ${craft}s'
  ],
  buildingWords: {
    color: ['Golden','Black','Crimson','Silver','Broken','Howling','Weeping'],
    item: ['Crown','Axe','Harp','Spear','Flask','Key','Owl','Dragon'],
    saint: ['Brother Aldric','Sister Lira','Saint Mirael','Father Gorran'],
    building: ['Shrine','Temple','Chapel','Sanctum'],
    structure: ['Watchtower','Mine','Bridge','Mill','Barrow','Fort'],
    trade: ['Merchants\'','Explorers\'','Miners\''],
    craft: ['Smith','Weaver','Alchemist','Cartographer']
  },
  governments: ['Council of elders','Mayor + sheriffs','Noble lord/lady','Guild oligarchy','Military governor','Theocratic rule','Anarchy / mob','Elected merchant princes','Council of mages','Spirit council of the ancestors','Dragon-appointed steward','Thieves guild that runs everything openly','Council of the oldest families','Living god-king who changes every decade','Rotating leadership by ritual combat','Council of artificial intelligences in golem bodies','The town itself is sentient and chooses leaders','Democracy where only the dead can vote','Rule by the last person to solve the town riddle'],
  populationTypes: [
    'Mostly humans with a small halfling quarter',
    'Dwarven miners and human traders',
    'Elven exiles and woodfolk',
    'Diverse mix of all ancestries',
    'Orcish warband remnants turned settlers',
    'Tiefling and aasimar refugees',
    'Gnomish tinkerers and human farmers',
    'Predominantly dragonborn mercenaries and families',
    'A thriving community of halfling merchants and human artisans with a hidden dragonborn enclave',
    'Mostly elven scholars and human scribes in a city of libraries and ancient trees',
    'Rough orc warriors living alongside dwarven smiths in a fortified mining town',
    'A floating community of aasimar and tiefling outcasts who worship the stars',
    'Human farmers protected by a small but loyal band of gnome engineers and kobold scavengers',
    'A cosmopolitan port of sailors from every race, ruled by a council of retired adventurers',
    'Isolated mountain village of humans and dwarves who guard an ancient sealed evil',
    'Nomadic camp of centaur herders mixed with human storytellers and elven trackers',
    'Underground dwarven hold that has recently welcomed surface elves and humans fleeing war',
    'Coastal town of humans and merfolk traders who meet at the tide pools every full moon',
    'A city of undead and the living in uneasy truce, populated by necromancers and their former victims',
    'Tribal lands where orcs, goblins, and humans have formed a new warrior culture',
    'Enchanted forest village of dryads, sprites, and humans who have taken the fey oath'
  ],
  loreSnippets: [
    'Founded after the old kingdom fell; the ruins beneath still whisper.',
    'Once a prosperous waystation on the king\'s road, now slowly being reclaimed by the wild.',
    'The townsfolk still observe the Festival of Ash every autumn to keep the curse at bay.',
    'A great battle was fought here — the fields bloom strangely every spring.',
    'Hidden catacombs connect the cellars; smugglers and worse use them.',
    'The local well is said to grant visions to the pure of heart (or the foolish).',
    'Built on the bones of an older civilization that worshipped something that still dreams below.',
    'The town was founded by exiles who made a pact with the land itself.',
    'Every generation a child is born with the mark of the first settler.',
    'The streets were once rivers; the buildings remember when they were boats.',
    'A dragon once claimed this place as its hoard and still watches from the clouds.',
    'The town moves a few inches every year, following an ancient ley line.',
    'All the clocks in town stopped the day the last king died.',
    'The citizens are all descendants of the same seven survivors of a great flood.',
    'A powerful wizard sleeps beneath the town square and their dreams shape reality.',
    'The town appears on no maps because it does not want to be found.',
    'Every full moon the dead walk the streets and tend the gardens.',
    'The town was built to contain something that must never escape.',
    'The first settlers arrived through a portal that still opens once a century.',
    'The town is slowly sinking into the earth, revealing older and older layers.'
  ]
};

export const TOWN_REGIONS = [
  { name: 'Wastes', desc: 'Nanite-swept badlands' },
  { name: 'Wilds', desc: 'Mutant forests and hills' },
  { name: 'Frontier', desc: 'Reclaimed borderlands' },
  { name: 'Heartland', desc: 'Established trade routes' },
  { name: 'Scar', desc: 'Ground zero ruins' }
];

export const FACTIONS = ['Drifters','Guardians','Reclaimers','Savages','Awakened','Othersiders','Neutral'];

// Add more data exports as needed (PLOT_DATA, WEATHER_DATA, etc.)

export const NAMES_DATA = {
  fantasy: ['Elara','Kael','Mira','Torin','Sylas','Lirael','Bram','Nyx','Vesper','Corin','Juno','Riven','Soren','Thalia','Zephyr','Cassian','Maelis','Quill','Sable','Rune','Thorne','Elowen','Finnian','Seraphina','Gideon','Isolde','Lucian','Maeve','Orion','Phoebe','Quentin','Ravenna','Silas','Talia','Ulysses','Valeria','Wren','Xander','Yara','Zephyrine','Aldric','Brielle','Caspian','Dahlia','Evander','Freya','Garrick','Hazel','Icarus','Juniper','Kaelith','Liora','Mordecai','Nerissa','Oberon','Peregrine','Quillara','Ragnar','Seren','Thaddeus','Ursula','Vespera','Wolfgang','Xylia','Ysabel','Zadok'],
  human: ['Marcus','Elena','Johan','Isabella','Thomas','Clara','William','Sophia','Henry','Amelia','Richard','Catherine','Edward','Anne','Robert','Elizabeth','Charles','Mary','George','Jane'],
  elven: ['Aelindor','Lirael','Thalorien','Elyndra','Silvyr','Mythara','Caelum','Faelwen','Theron','Lyra','Elandor','Sylvara','Vaelin','Elyria','Aurion','Nymeria','Caelith','Faelira','Therion','Sylphira'],
  dwarven: ['Thorin','Balin','Dwalin','Gimli','Durin','Borin','Nori','Ori','Dori','Thrain','Dain','Fundin','Bofur','Bombur','Fili','Kili','Oin','Gloin','Dwalin','Balin'],
  orcish: ['Grok','Murgash','Thrak','Urgash','Krag','Zog','Mog','Drak','Grish','Thog','Karg','Mogash','Grom','Thokk','Krarg','Zug','Murg','Drak','Ghash','Thokk']
};

export const NAMES_DATA_EL = {
  fantasy: ['Θεοφάνης','Καλλιόπη','Αριστείδης','Μελανία','Λεωνίδας','Αντιγόνη','Περικλής','Δάφνη','Ηρακλής','Ευρυδίκη','Αλέξανδρος','Ολυμπία','Βασίλειος','Αφροδίτη','Δημήτριος','Αθηνά','Νικόλαος','Ερμιόνη'],
  human: ['Γιώργος','Μαρία','Κώστας','Ελένη','Γιάννης','Αννα','Πέτρος','Σοφία','Νίκος','Κατερίνα','Αλέξανδρος','Βασιλική','Δημήτρης','Ιωάννα','Μιχάλης','Χριστίνα'],
  elven: ['Αίωνας','Λυρίνη','Θάλωνας','Ελύδρα','Σίλβυρ','Μύθαρα','Κάελουμ','Φαέλβεν','Θεόδωρος','Αριάδνη','Λεωνίδας','Σελήνη'],
  dwarven: ['Θόριν','Μπάλιν','Ντβάλιν','Γκίμλι','Ντούριν','Μπόριν','Νόρι','Όρι','Ντόρι','Θράιν','Νταΐν'],
  orcish: ['Γκροκ','Μούργκα','Θρακ','Ουργκάς','Κραγκ','Ζογκ','Μογκ','Ντρακ','Γκριντ','Θογκ']
};

export const TABLE_DATA: Record<string, string[]> = {
  encounter: [
    '2d4 goblins arguing over a shiny rock',
    'A wounded knight begs for help',
    'Bandits demand toll on the road',
    'A mysterious hooded figure offers a quest',
    'A group of cultists performing a midnight ritual',
    'A merchant caravan under attack by wolves',
    'A lone traveler who is actually a polymorphed dragon',
    'A ghost ship that appears only at dusk',
    'A pack of wild animals that have been driven mad',
    'A rival adventuring party with the same goal',
    'A village that has been taken over by mimics',
    'A wizard whose experiment has gone horribly wrong',
    'A band of mercenaries who have switched sides',
    'A lost child who leads the party into danger',
    'A group of animated objects rebelling against their owners'
  ],
  loot: [
    'A pouch of 30 gold coins and a silver ring',
    'A beautiful but clearly cursed silver dagger',
    'Potion of healing + 10 ft rope',
    'Ancient map to a forgotten tomb',
    'A bag of holding containing a single gold coin',
    'A deck of cards that tells the future',
    'A mirror that shows the viewer as a skeleton',
    'A sword that screams when drawn',
    'A cloak that makes the wearer invisible to children',
    'A book that writes the reader\'s thoughts',
    'A ring that makes the wearer unlucky in love',
    'A pair of boots that always point north',
    'A lantern that burns the user\'s memories as fuel',
    'A shield that reflects spells back at the caster',
    'A crown that makes everyone who sees it bow'
  ],
  quirk: [
    'Always speaks in rhymes',
    'Collects shiny buttons',
    'Refuses to step on cracks',
    'Keeps a journal of every lie heard',
    'Never uses contractions when speaking',
    'Refuses to eat anything green',
    'Collects the names of everyone they meet in a book',
    'Speaks only in questions',
    'Refuses to kill anything with more than four legs',
    'Always wears mismatched shoes',
    'Collects broken things and tries to fix them',
    'Never makes eye contact with the same person twice',
    'Speaks to plants as if they are old friends',
    'Refuses to wear the color blue',
    'Collects feathers from birds that have died of old age'
  ],
  rumor: [
    'The mayor is a vampire in disguise',
    'A dragon has been seen in the mountains',
    'The old mine is haunted by the ghosts of miners',
    'A treasure was buried under the old oak',
    'The local priest is actually a demon in human form',
    'A powerful wizard lives in the basement of the inn',
    'The town well is actually a portal to the abyss',
    'Someone in town is secretly royalty in exile',
    'The local blacksmith can forge weapons from star metal',
    'A serial killer has been active for decades',
    'The town is built on an ancient battlefield',
    'A powerful artifact is hidden in the church crypt',
    'The mayor made a deal with a devil for prosperity',
    'The town disappears for one day every year',
    'A ghost ship docks at the harbor every full moon'
  ],
  travel: [
    'Road washed out by recent storms',
    'Bandit activity reported ahead',
    'Strange lights seen in the forest at night',
    'A friendly merchant caravan offers company',
    'A bridge has collapsed and the river is rising',
    'A magical fog has made the path disappear',
    'A pack of wolves is hunting travelers',
    'The road is blocked by a massive fallen tree',
    'A group of refugees is fleeing toward you',
    'The path leads through an ancient battlefield',
    'A sudden storm has made the river uncrossable',
    'The road signs have all been switched',
    'A caravan of exotic merchants has set up camp',
    'The path is guarded by a riddle-loving troll',
    'The road passes through a town that doesn\'t exist on maps'
  ],
  magic_item: [
    'A wand that shoots butterflies instead of magic missiles',
    'Boots that allow walking on water but only at night',
    'A sword that sings when drawn but only sad songs',
    'A ring that makes the wearer smell like fresh bread',
    'A cloak that turns the wearer into a tree (1 hour, once per day)',
    'A bag that produces one random vegetable per day',
    'Gloves that allow picking locks but leave glitter behind',
    'A hat that lets you understand animals but they understand you too',
    'A mirror that shows you as you would look in 10 years',
    'A compass that always points to the nearest tavern',
    'A book that rewrites itself based on what you want to read',
    'A staff that grows flowers wherever it touches the ground',
    'A pair of glasses that let you see invisible things but make everything else blurry',
    'A lute that plays itself but only when no one is looking',
    'A potion that grants the ability to breathe underwater but tastes like fish',
    'A dagger that returns to your hand when thrown',
    'A shield that blocks one attack per day perfectly',
    'A cloak of billowing that looks dramatic',
    'Boots of striding and springing',
    'A bag of holding that sometimes eats items',
    'A ring of protection +1',
    'A sword of sharpness',
    'A wand of magic missiles (50 charges)',
    'A cloak of elvenkind',
    'A pair of gloves of thievery',
    'A hat of disguise',
    'A ring of water walking',
    'A staff of the python',
    'A crystal ball (flawed)',
    'A deck of many things (mini version)'
  ],
  dungeon_feature: [
    'A pool of water that reflects the future',
    'A statue that moves when not watched',
    'A door that only opens if you tell it a secret',
    'A room where gravity is reversed',
    'A corridor that loops back on itself',
    'A chest that is actually a mimic in disguise',
    'A fountain that heals but ages you slightly',
    'A library where the books scream if opened',
    'A trap that fills the room with harmless but annoying butterflies',
    'A wall that whispers the location of treasures',
    'A bridge made of bones that creaks underfoot',
    'A garden of petrified adventurers',
    'A room where time passes 10x faster',
    'A staircase that changes direction randomly',
    'A chamber with a riddle on the floor in glowing runes',
    'A pit of quicksand that leads to a hidden room',
    'A wall of living vines that can be negotiated with',
    'A pool of acid with treasure at the bottom',
    'A room full of illusory treasures',
    'A corridor with pressure plates that play music',
    'A library where books fly and attack',
    'A throne that grants one wish but curses you',
    'A mirror maze that reflects alternate selves',
    'A room that slowly fills with water',
    'A floor that is actually the back of a giant creature'
  ],
  npc_trait: [
    'always carries a lucky rabbit foot (it\'s actually a rat)',
    'has a phobia of the number 7',
    'speaks in the third person exclusively',
    'collects teeth from every meal',
    'never sleeps in the same bed twice',
    'believes they are the reincarnation of a famous hero',
    'has a pet that is actually a polymorphed enemy',
    'always tells the truth but in the most insulting way possible',
    'collects the names of people they dislike in a book',
    'refuses to eat anything that isn\'t red',
    'has a tattoo that changes daily',
    'speaks only in whispers after midnight',
    'believes mirrors steal souls',
    'has an imaginary friend who gives good advice',
    'collects keys but doesn\'t know what they open',
    'always wears mismatched socks',
    'has a collection of pressed flowers from graves',
    'refuses to use the word "I"',
    'collects the last words of dying people',
    'never makes the same decision twice in a row',
    'speaks only in metaphors',
    'has a pet that talks back in their voice',
    'refuses to step on cracks in the pavement',
    'collects buttons from strangers\' coats',
    'always carries a blank book they write in backwards',
    'has a fear of their own shadow',
    'refuses to eat food they didn\'t grow themselves',
    'collects the names of every person they\'ve ever met',
    'speaks in rhymes only when happy',
    'has an invisible companion only they acknowledge'
  ]
};

export const PLOT_DATA = {
  hooks: [
    'A powerful noble asks the party to retrieve something they claim was stolen.',
    'The local temple reports that all their holy symbols have turned to rust overnight.',
    'Someone in the party receives a letter written in their own hand — from a week in the future.',
    'A child claims their imaginary friend is real and killing people.',
    'The town\'s well has started speaking in the voices of the dead.',
    'A famous hero has gone missing and their last known location was here.',
    'The party\'s own shadows have begun acting independently at night.',
    'A dragon\'s egg has been discovered in the local market.',
    'Every child in town has the same recurring nightmare.',
    'The local ruler is secretly a polymorphed animal.',
    'A book that writes the future has gone missing from the library.',
    'The stars have rearranged themselves into a warning.',
    'A portal to the feywild has opened in the town square.',
    'All the town\'s mirrors now show the viewer one year older.',
    'A powerful artifact is buried under the oldest tree.',
    'The town is about to be erased from existence by a wish.',
    'Someone is selling memories on the black market.',
    'The party is prophesied to destroy the town — or save it.',
    'A murder has occurred and the victim is still walking around.',
    'The town\'s founder has returned from the dead and wants their house back.'
  ]
};

export const WEATHER_DATA = [
  { name: 'Gentle rain', effect: 'Travel is slowed. Advantage on Survival checks to find food.' },
  { name: 'Sudden thunderstorms', effect: 'Lightning strikes. Ranged attacks have disadvantage outdoors.' },
  { name: 'Unseasonably warm', effect: 'People are restless. Social encounters have higher chance of arguments.' },
  { name: 'Heavy fog', effect: 'Visibility reduced. Perception checks at disadvantage.' },
  { name: 'Blizzard', effect: 'Travel impossible. Cold damage every hour outdoors.' },
  { name: 'Magical aurora', effect: 'Spells are enhanced but unpredictable. Wild magic surges.' },
  { name: 'Ash fall', effect: 'Breathing difficult. Advantage on stealth but disadvantage on perception.' },
  { name: 'Blood rain', effect: 'All healing is halved. Animals become aggressive.' },
  { name: 'Perfect calm', effect: 'No wind. Ranged weapons have disadvantage. Illusions are stronger.' },
  { name: 'Rainbow storm', effect: 'Prismatic effects. Random color-based magic every few minutes.' },
  { name: 'Time distortion', effect: 'Hours pass as minutes or vice versa for those outside.' },
  { name: 'Singing winds', effect: 'Constant haunting melody. Wisdom saves or become entranced.' }
];

export const WEATHER_DATA_EL = [
  { name: 'Gentle rain', effect: 'Τα ταξίδια επιβραδύνονται. Πλεονέκτημα σε ελέγχους Επιβίωσης για εύρεση τροφής.' },
  { name: 'Sudden thunderstorms', effect: 'Κεραυνοί χτυπούν. Οι επιθέσεις εξ αποστάσεως έχουν μειονέκτημα σε εξωτερικούς χώρους.' },
  { name: 'Unseasonably warm', effect: 'Οι άνθρωποι είναι ανήσυχοι. Οι κοινωνικές συναντήσεις έχουν μεγαλύτερη πιθανότητα διαφωνιών.' },
  { name: 'Heavy fog', effect: 'Η ορατότητα μειώνεται. Οι έλεγχοι Αντίληψης με μειονέκτημα.' }
];

export const PLOT_DATA_EL = {
  hooks: [
    'Ένας ισχυρός ευγενής ζητά από την ομάδα να ανακτήσει κάτι που ισχυρίζεται ότι του έκλεψαν.',
    'Ο τοπικός ναός αναφέρει ότι όλα τα ιερά σύμβολά τους μετατράπηκαν σε σκουριά μέσα σε μια νύχτα.',
    'Κάποιος στην ομάδα λαμβάνει ένα γράμμα γραμμένο με το δικό του χέρι — από μια εβδομάδα στο μέλλον.',
    'Ένα παιδί ισχυρίζεται ότι ο φανταστικός του φίλος είναι πραγματικός και σκοτώνει ανθρώπους.',
    'Το πηγάδι της πόλης έχει αρχίσει να μιλάει με τις φωνές των νεκρών.',
    'Ένας διάσημος ήρωας έχει εξαφανιστεί και το τελευταίο γνωστό του μέρος ήταν εδώ.',
    'Οι σκιές της ομάδας έχουν αρχίσει να ενεργούν ανεξάρτητα τη νύχτα.',
    'Ένα αυγό δράκου έχει ανακαλυφθεί στην τοπική αγορά.',
    'Όλα τα παιδιά της πόλης έχουν το ίδιο επαναλαμβανόμενο εφιάλτη.',
    'Ο τοπικός ηγέτης είναι κρυφά ένα πολυμορφωμένο ζώο.',
    'Ένα βιβλίο που γράφει το μέλλον έχει χαθεί από τη βιβλιοθήκη.',
    'Τα αστέρια έχουν αναδιαταχθεί σε μια προειδοποίηση.',
    'Μια πύλη προς τον φεϊγουάιλντ έχει ανοίξει στην πλατεία της πόλης.',
    'Όλοι οι καθρέφτες της πόλης δείχνουν τον θεατή ένα χρόνο μεγαλύτερο.',
    'Ένα ισχυρό τεχνούργημα είναι θαμμένο κάτω από το παλαιότερο δέντρο.',
    'Η πόλη πρόκειται να σβηστεί από την ύπαρξη από μια ευχή.',
    'Κάποιος πουλάει αναμνήσεις στη μαύρη αγορά.',
    'Η ομάδα είναι προορισμένη να καταστρέψει την πόλη — ή να τη σώσει.',
    'Ένας φόνος έχει συμβεί και το θύμα ακόμα κυκλοφορεί.',
    'Ο ιδρυτής της πόλης έχει επιστρέψει από τους νεκρούς και θέλει το σπίτι του πίσω.'
  ]
};

export const BACKSTORIES_EL = [
  'Ορφανός μετά από επιδρομή σε χωριό, μεγαλωμένος από μια μυστική τάξη δασοφυλάκων.',
  'Πρώην στρατιώτης που εγκατέλειψε μετά από ένα τρομερό έγκλημα πολέμου.',
  'Εξόριστος ευγενής που επιδιώκει να ανακτήσει το κληρονομικό του δικαίωμα με πονηριά και συμμάχους.',
  'Ένας λόγιος που ανακάλυψε ένα απαγορευμένο κείμενο και τώρα κυνηγά τον συγγραφέα του.',
  'Κάποτε ένας πολλά υποσχόμενος μάγος που έχασε τις δυνάμεις του σε ένα τραγικό ατύχημα.',
  'Πρώην πειρατής που πλαστογράφησε τον θάνατό του για να ξεκινήσει νέα ζωή.',
  'Μεγάλωσε σε ένα περιοδεύον τσίρκο και έμαθε να διαβάζει τους ανθρώπους τέλεια.',
  'Δραπέτευσε από ένα εργαστήριο όπου γινόταν πείραμα πάνω του.',
  'Ένας σιδεράς που ανακάλυψε ότι μπορεί να μιλάει με το μέταλλο.',
  'Ανατράφηκε από λύκους μέχρι την ηλικία των 12.',
  'Πρώην δολοφόνος που τώρα προστατεύει τους αθώους που κάποτε κυνηγούσε.',
  'Ανακαλύφθηκε ως μωρό στα ερείπια ενός κατεστραμμένου ναού.',
  'Πέρασε χρόνια ως μονομάχος πριν κερδίσει την ελευθερία του.',
  'Ένας βάρδος που έχασε τη φωνή του αλλά μπορεί ακόμα να ρίχνει μαγεία μέσω τραγουδιού.',
  'Κάποτε υπηρέτησε ως βασιλικός φρουρός αλλά κατηγορήθηκε ψευδώς για προδοσία.'
];

export const DARK_BACKSTORIES_EL = [
  'Στοιχειωμένος από το πνεύμα του ατόμου που δολοφόνησε για να επιβιώσει.',
  'Πούλησε την ψυχή του για δύναμη και τώρα αγωνίζεται ενάντια στο ρολόι για να σπάσει το σύμφωνο.',
  'Ήταν κάποτε τέρας και ακόμα παλεύει με την πείνα.',
  'Κατά λάθος προκάλεσε τον θάνατο ολόκληρου του χωριού του.',
  'Έκανε συμφωνία με έναν διάβολο που σιγά σιγά κατατρώει την ανθρωπιά του.',
  'Ήταν υπεύθυνος για έναν πόλεμο που σκότωσε χιλιάδες.',
  'Αντικαθιστά αργά το σώμα του με μηχανικά μέρη.',
  'Χάνει σιγά σιγά τις αναμνήσεις του και δεν ξέρει γιατί.',
  'Κάποτε αγάπησε κάποιον τόσο πολύ που τον σκότωσε για να τον κρατήσει για πάντα.',
  'Είναι προϊόν ενός απαγορευμένου τελετουργικού και φοβάται τι θα γίνει.'
];

export const TABLE_DATA_EL: Record<string, string[]> = {
  encounter: [
    '2d4 γκόμπλινς που τσακώνονται για έναν γυαλιστερό βράχο',
    'Ένας πληγωμένος ιππότης ικετεύει για βοήθεια',
    'Ληστές ζητούν διόδια στον δρόμο',
    'Ένα μυστηριώδες καπελωμένο άτομο προσφέρει μια αποστολή',
    'Μια ομάδα λατρευτών που κάνουν ένα μεσονύκτιο τελετουργικό',
    'Ένα καραβάνι εμπόρων υπό επίθεση από λύκους',
    'Ένας μοναχικός ταξιδιώτης που στην πραγματικότητα είναι ένας πολυμορφωμένος δράκος',
    'Ένα φάντασμα πλοίο που εμφανίζεται μόνο στο σούρουπο',
    'Ένα κοπάδι άγριων ζώων που έχουν τρελαθεί',
    'Μια αντίπαλη ομάδα περιπετειωτών με τον ίδιο στόχο',
    'Ένα χωριό που έχει καταληφθεί από μιμίδια',
    'Ένας μάγος του οποίου το πείραμα πήγε τρομερά στραβά',
    'Μια ομάδα μισθοφόρων που άλλαξαν πλευρά',
    'Ένα χαμένο παιδί που οδηγεί την ομάδα σε κίνδυνο',
    'Μια ομάδα κινούμενων αντικειμένων που επαναστατούν'
  ],
  loot: [
    'Ένα πουγκί με 30 χρυσά νομίσματα και ένα ασημένιο δαχτυλίδι',
    'Ένα όμορφο αλλά σαφώς καταραμένο ασημένιο στιλέτο',
    'Φίλτρο θεραπείας + 10 πόδια σχοινί',
    'Αρχαίος χάρτης σε έναν ξεχασμένο τάφο',
    'Μια τσάντα holding που περιέχει ένα μόνο χρυσό νόμισμα',
    'Ένα deck καρτών που λέει το μέλλον',
    'Ένας καθρέφτης που δείχνει τον θεατή ως σκελετό',
    'Ένα σπαθί που ουρλιάζει όταν τραβιέται',
    'Ένας μανδύας που κάνει τον φορέα αόρατο στα παιδιά',
    'Ένα βιβλίο που γράφει τις σκέψεις του αναγνώστη',
    'Ένα στιλέτο που επιστρέφει στο χέρι',
    'Μια ασπίδα που μπλοκάρει τέλεια μία επίθεση',
    'Ένας μανδύας που φουσκώνει δραματικά',
    'Μπότες που επιτρέπουν μεγάλα βήματα',
    'Ένα δαχτυλίδι προστασίας +1'
  ],
  quirk: [
    'Μιλάει πάντα με ομοιοκαταληξία',
    'Συλλέγει γυαλιστερά κουμπιά',
    'Αρνείται να πατήσει σε ρωγμές',
    'Κρατάει ημερολόγιο με κάθε ψέμα που ακούει',
    'Δεν χρησιμοποιεί ποτέ συντομεύσεις',
    'Αρνείται να φάει οτιδήποτε πράσινο',
    'Συλλέγει ονόματα σε βιβλίο',
    'Μιλάει μόνο με ερωτήσεις',
    'Αρνείται να σκοτώσει ζώα με >4 πόδια',
    'Πάντα φοράει ασύμβατα παπούτσια',
    'Συλλέγει σπασμένα πράγματα',
    'Δεν κοιτάζει ποτέ δύο φορές το ίδιο πρόσωπο',
    'Μιλάει σε φυτά σαν παλιούς φίλους',
    'Αρνείται να φορέσει μπλε',
    'Συλλέγει ονόματα όλων που συναντά'
  ],
  rumor: [
    'Ο δήμαρχος είναι βρυκόλακας μεταμφιεσμένος',
    'Ένας δράκος έχει φανεί στα βουνά',
    'Το παλιό ορυχείο είναι στοιχειωμένο',
    'Ένας θησαυρός ήταν θαμμένος',
    'Ο ιερέας είναι δαίμονας',
    'Ένας ισχυρός μάγος ζει στο υπόγειο',
    'Το πηγάδι είναι πύλη προς την άβυσσο',
    'Κάποιος είναι βασιλιάς σε εξορία',
    'Ο σιδεράς σφυρηλατεί από αστέρι',
    'Ένας κατά συρροή δολοφόνος δρα εδώ και δεκαετίες'
  ],
  travel: [
    'Ο δρόμος ξεβράστηκε',
    'Επιδρομές ληστών μπροστά',
    'Παράξενα φώτα στο δάσος',
    'Φιλικό καραβάνι',
    'Γέφυρα κατέρρευσε',
    'Μαγικό σύννεφο',
    'Κοπάδι λύκων',
    'Τεράστιο πεσμένο δέντρο',
    'Πρόσφυγες φεύγουν',
    'Περνά από πεδίο μάχης'
  ],
  magic_item: [
    'Ένα ραβδί που ρίχνει πεταλούδες',
    'Μπότες για περπάτημα στο νερό μόνο τη νύχτα',
    'Ένα σπαθί που τραγουδά θλιβερά τραγούδια',
    'Ένα δαχτυλίδι που μυρίζει σαν ψωμί',
    'Ένας μανδύας που σε κάνει δέντρο',
    'Μια τσάντα που παράγει λαχανικό',
    'Γάντια που αφήνουν γκλίτερ',
    'Ένα καπέλο που καταλαβαίνεις ζώα',
    'Ένας καθρέφτης που δείχνει το μέλλον',
    'Μια πυξίδα που δείχνει ταβέρνα',
    'Ένα βιβλίο που ξαναγράφεται',
    'Ένα ραβδί που φυτρώνει λουλούδια',
    'Γυαλιά που βλέπεις αόρατα αλλά θολά',
    'Ένα λαούτο που παίζει μόνο του',
    'Ένα φίλτρο για υποβρύχια αναπνοή'
  ],
  dungeon_feature: [
    'Μια πισίνα που αντανακλά το μέλλον',
    'Ένα άγαλμα που κινείται όταν δεν το κοιτάς',
    'Μια πόρτα που ανοίγει μόνο με μυστικό',
    'Ένα δωμάτιο με αντίστροφη βαρύτητα',
    'Ένας διάδρομος που γυρίζει πίσω',
    'Ένα σεντούκι που είναι μιμίδιο',
    'Μια πηγή που θεραπεύει αλλά γερνάς',
    'Μια βιβλιοθήκη όπου τα βιβλία ουρλιάζουν',
    'Μια παγίδα με ακίνδυνες πεταλούδες',
    'Ένας τοίχος που ψιθυρίζει θησαυρούς',
    'Μια γέφυρα από κόκαλα',
    'Ένας κήπος με απολιθωμένους περιπετειώδεις',
    'Ένα δωμάτιο όπου ο χρόνος περνάει 10x γρηγορότερα',
    'Μια σκάλα που αλλάζει κατεύθυνση',
    'Μια αίθουσα με γρίφο στο πάτωμα'
  ],
  npc_trait: [
    'Πάντα κουβαλάει τυχερό πόδι κουνελιού (είναι αρουραίος)',
    'Έχει φοβία με τον αριθμό 7',
    'Μιλάει μόνο σε τρίτο πρόσωπο',
    'Συλλέγει δόντια από κάθε γεύμα',
    'Δεν κοιμάται ποτέ στο ίδιο κρεβάτι δύο φορές',
    'Πιστεύει ότι είναι μετενσάρκωση διάσημου ήρωα',
    'Έχει κατοικίδιο που είναι πολυμορφωμένος εχθρός',
    'Λέει πάντα την αλήθεια με προσβλητικό τρόπο',
    'Συλλέγει ονόματα ανθρώπων που δεν συμπαθεί',
    'Αρνείται να φάει οτιδήποτε που δεν είναι κόκκινο',
    'Έχει τατουάζ που αλλάζει καθημερινά',
    'Μιλάει μόνο ψιθυριστά μετά τα μεσάνυχτα',
    'Πιστεύει ότι οι καθρέφτες κλέβουν ψυχές',
    'Έχει φανταστικό φίλο που δίνει καλές συμβουλές',
    'Συλλέγει κλειδιά αλλά δεν ξέρει τι ανοίγουν'
  ]
};

export const ENCOUNTER_TWISTS_EL = [
  'Ενισχύσεις φτάνουν μετά από 2 γύρους.',
  'Τα τέρατα προστατεύουν κάτι.',
  'Περιβαλλοντικός κίνδυνος.',
  'Ένα από τα τέρατα είναι στην πραγματικότητα σύμμαχος μεταμφιεσμένος.',
  'Η μάχη είναι στην πραγματικότητα ένα τεστ από μια ανώτερη δύναμη.',
  'Τα τέρατα ήταν ελεγχόμενα από κάτι άλλο.',
  'Υπάρχει ένα ισχυρό αντικείμενο που τα τέρατα φυλάνε.',
  'Η συνάντηση είναι παγίδα που στήθηκε από μια αντίπαλη ομάδα.',
  'Ένα τέρας θα προσπαθήσει να διαπραγματευτεί αντί να πολεμήσει.',
  'Η μάχη ξυπνά κάτι αρχαίο και χειρότερο.'
];

export const ENCOUNTER_LOOT_EL = ['Χρυσός και πολύτιμοι λίθοι', 'Μαγικά αντικείμενα', 'Σπάνια τεχνουργήματα', 'Ένας χάρτης σε ένα κρυφό μπουντρούμι', 'Ένα αρχαίο όπλο με κατάρα', 'Μια τσάντα holding με κάτι ζωντανό μέσα', 'Ένα καταραμένο δαχτυλίδι που εκπληρώνει ευχές', 'Ένα βιβλίο απαγορευμένων ξορκιών', 'Ένα φίλτρο που δίνει προσωρινή πτήση'];

export const GROUP_TACTICS_BASE_EL = ['εστίαση πυρός ή χρήση εδάφους'];

export const TOWN_DATA_EL = {
  prefixes: ['Μαύρο','Κόκκινο','Γκρίζο','Ασημένιο','Σιδερένιο','Καταιγίδα','Έμβερ','Αγκάθι','Πάγος','Κόραξ','Σκιά','Υψηλό','Χαμηλό','Ανατολικό','Δυτικό','Παλιό','Νέο','Φωτεινό','Βρύο','Πέτρα'],
  suffixes: ['ράχη','κοιλάδα','πορθμός','φρουρά','λιμάνι','κωδωνοστάσιο','καταφύγιο','φθάνω','έρημος','κοιλάδα','γέφυρα','κράτος','μύλος','σταυρός','σημείο','πύλη','δάσος','πεδίο','τάφος','γκρεμός'],
  descriptors: ['ξεχασμένο','ευημερούν','άνομο','αρχαίο','πλούσιο σε εμπόριο','καταραμένο','πολυάσχολο','καταδικασμένο','τειχισμένο','κρυμμένο','πολεμικό','ιερό','θρυμματισμένο','αιώνιο','ψιθυριστό','ματωμένο','χρυσό','ερείπιο','αναγεννημένο','στοιχειωμένο'],
  problems: ['ένας διεφθαρμένος σερίφης','ένας δράκος που απαιτεί φόρο','αποτυχημένες καλλιέργειες','πανούκλα αρουραίων','πολιτική διαμάχη','ένας κατά συρροή δολοφόνος','μια λατρεία που αποκτά δύναμη','ένα καταραμένο τεχνούργημα','επιδρομές ληστών','ένα ετοιμοθάνατο ορυχείο'],
  features: ['μια τεράστια αρχαία βελανιδιά στην πλατεία','μια αιωρούμενη κρυστάλλινη αγορά','ένα υπόγειο λάκκο μάχης','η μεγαλύτερη βιβλιοθήκη σε τρία βασίλεια','μια ταβέρνα χτισμένη μέσα σε απολιθωμένο δράκο','μια αρένα λαξευμένη σε γκρεμό','ένας φάρος που δεν έχει ανάψει εδώ και 200 χρόνια','ένας πύργος ρολογιού που τρέχει ανάποδα'],
  governments: ['Συμβούλιο γερόντων','Δήμαρχος + σερίφηδες','Ευγενής άρχοντας/κυρία','Ολιγαρχία συντεχνιών','Στρατιωτικός κυβερνήτης','Θεοκρατικός κανόνας','Αναρχία / όχλος'],
  populationTypes: [
    'Κυρίως άνθρωποι με μικρή συνοικία χαλφλινγκ',
    'Νάνοι μεταλλωρύχοι και ανθρώπινοι έμποροι',
    'Εξόριστοι ξωτικοί και λαοί του δάσους',
    'Ποικίλο μείγμα όλων των φυλών',
    'Υπολείμματα πολεμικής ορδής ορκ που έγιναν άποικοι',
    'Πρόσφυγες τάιφλινγκ και αασίμαρ',
    'Μηχανικοί νάνοι και ανθρώπινοι αγρότες',
    'Κυρίως δρακόνιοι μισθοφόροι και οικογένειες'
  ],
  loreSnippets: [
    'Ιδρύθηκε μετά την πτώση του παλιού βασιλείου· τα ερείπια από κάτω ακόμα ψιθυρίζουν.',
    'Κάποτε ένας ευημερών σταθμός στον βασιλικό δρόμο, τώρα σιγά σιγά ανακτάται από την άγρια φύση.',
    'Οι κάτοικοι της πόλης ακόμα τηρούν το Φεστιβάλ της Στάχτης κάθε φθινόπωρο για να κρατήσουν την κατάρα μακριά.',
    'Μια μεγάλη μάχη έγινε εδώ — τα χωράφια ανθίζουν περίεργα κάθε άνοιξη.',
    'Κρυμμένα κατακόμβια συνδέουν τα κελάρια· λαθρέμποροι και χειρότερα τα χρησιμοποιούν.',
    'Το τοπικό πηγάδι λέγεται ότι δίνει οράματα στους καθαρούς στην καρδιά (ή στους ανόητους).'
  ]
};
