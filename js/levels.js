// var playerData = {
//   levelsComplete: [],
//   levelsUnlocked: [0],
//   levelsLocked: [1,2,3,4,5,6,7]
// }

// original data will be used when first open game or if reset all is pressed
// it's an array of objects of words and extra info

var levelDataOriginal = [{"anagram":"start","wordsDone":[],"wordsPossible":['start', 'tarts', 'arts', 'rats', 'star', 'stat', 'tars', 'tart', 'tats', 'tsar', 'ars', 'art', 'att', 'ras', 'rat', 'sat', 'tar', 'tas', 'tat', 'ar', 'as', 'at', 'ta'],"levelNum":0,"numWordsWithLetters":[0, 0, 4, 9, 8, 1, 0, 0, 0, 0]},{"anagram":"adventure","wordsDone":[],"wordsPossible":['adventure', 'unaverted', 'denature', 'underate', 'undereat', 'ventured', 'averted', 'daunter', 'denture', 'natured', 'nervate', 'ravened', 'retuned', 'tenured', 'unrated', 'untread', 'vaunted', 'vaunter', 'venture', 'verdant', 'veteran', 'advent', 'advert', 'anteed', 'ardent', 'avenue', 'derate', 'earned', 'endear', 'endure', 'entera', 'enured', 'evader', 'nature', 'neared', 'neater', 'nerved', 'neuter', 'ranted', 'reaved', 'redate', 'rented', 'retune', 'tavern', 'teared', 'tender', 'tenure', 'tundra', 'tureen', 'turned', 'unread', 'vender', 'vendue', 'vented', 'venter', 'anted', 'antre', 'arene', 'arete', 'avert', 'dater', 'daunt', 'daven', 'deave', 'denar', 'derat', 'deter', 'drave', 'duvet', 'eared', 'eaten', 'eater', 'eaved', 'enate', 'ender', 'endue', 'enter', 'enure', 'etude', 'evade', 'event', 'evert', 'nerve', 'never', 'nuder', 'ranee', 'rated', 'raved', 'raven', 'reave', 'redan', 'rente', 'revet', 'revue', 'tared', 'tendu', 'terne', 'trade', 'trave', 'tread', 'treed', 'treen', 'trend', 'trued', 'tuned', 'tuner', 'undee', 'under', 'urate', 'vaned', 'vaunt', 'veena', 'venae', 'venue', 'vertu', 'ante', 'aunt', 'aver', 'dare', 'darn', 'dart', 'date', 'daut', 'dean', 'dear', 'deer', 'deet', 'dene', 'dent', 'dere', 'deva', 'drat', 'dree', 'duet', 'dune', 'dunt', 'dura', 'dure', 'durn', 'earn', 'eave', 'erne', 'etna', 'even', 'ever', 'nard', 'nave', 'near', 'neat', 'need', 'nerd', 'neve', 'nude', 'nurd', 'rand', 'rant', 'rate', 'rave', 'read', 'rede', 'reed', 'rend', 'rent', 'rete', 'rude', 'rued', 'rune', 'runt', 'tare', 'tarn', 'tear', 'teed', 'teen', 'tend', 'tern', 'trad', 'tree', 'true', 'tuna', 'tune', 'turd', 'turn', 'unde', 'urea', 'uvea', 'vane', 'vatu', 'veer', 'vena', 'vend', 'vent', 'vera', 'vert', 'and', 'ane', 'ant', 'are', 'art', 'ate', 'ave', 'dan', 'dee', 'den', 'dev', 'due', 'dun', 'ear', 'eat', 'eau', 'end', 'era', 'ere', 'ern', 'eta', 'eve', 'nae', 'nee', 'net', 'nut', 'rad', 'ran', 'rat', 'red', 'ree', 'ret', 'rev', 'rue', 'run', 'rut', 'tad', 'tae', 'tan', 'tar', 'tau', 'tav', 'tea', 'ted', 'tee', 'ten', 'tun', 'urd', 'urn', 'uta', 'ute', 'van', 'var', 'vat', 'vau', 'vee', 'vet', 'ad', 'ae', 'an', 'ar', 'at', 'de', 'ed', 'en', 'er', 'et', 'na', 'ne', 'nu', 're', 'ta', 'un', 'ut'],"levelNum":1,"numWordsWithLetters":[0, 0, 17, 57, 78, 60, 34, 15, 4, 1]},{"anagram":"synergy","wordsDone":[],"wordsPossible":['synergy', 'greys', 'gyres', 'syren', 'engs', 'ergs', 'erns', 'eyry', 'gens', 'grey', 'gyre', 'negs', 'regs', 'ryes', 'snye', 'syne', 'yens', 'eng', 'ens', 'erg', 'ern', 'ers', 'gen', 'gey', 'neg', 'reg', 'res', 'rye', 'seg', 'sen', 'ser', 'syn', 'yen', 'yes', 'en', 'er', 'es', 'ne', 're', 'ye'],"levelNum":2,"numWordsWithLetters":[0, 0, 6, 17, 13, 3, 0, 0, 0, 0]},{"anagram":"create","wordsDone":[],"wordsPossible":['cerate', 'create', 'ecarte', 'arete', 'caret', 'carte', 'cater', 'crate', 'eater', 'erect', 'react', 'recta', 'terce', 'trace', 'acre', 'care', 'cart', 'cate', 'cere', 'cete', 'race', 'rate', 'rete', 'tace', 'tare', 'tear', 'tree', 'ace', 'act', 'arc', 'are', 'art', 'ate', 'car', 'cat', 'cee', 'ear', 'eat', 'era', 'ere', 'eta', 'rat', 'rec', 'ree', 'ret', 'tae', 'tar', 'tea', 'tee', 'ae', 'ar', 'at', 'er', 'et', 're', 'ta'],"levelNum":3,"numWordsWithLetters":[0, 0, 7, 22, 13, 11, 2, 0, 0, 0]},{"anagram":"automate","wordsDone":[],"wordsPossible":['automate', 'automat', 'mutate', 'outate', 'outeat', 'matte', 'motet', 'motte', 'totem', 'atma', 'atom', 'auto', 'mate', 'matt', 'maut', 'meat', 'meou', 'meta', 'moat', 'mote', 'mott', 'moue', 'mute', 'mutt', 'tame', 'tate', 'taut', 'team', 'teat', 'toea', 'tome', 'tote', 'tout', 'ama', 'amu', 'ate', 'att', 'eat', 'eau', 'emu', 'eta', 'mae', 'mat', 'met', 'moa', 'mot', 'mut', 'oat', 'out', 'tae', 'tam', 'tao', 'tat', 'tau', 'tea', 'tet', 'toe', 'tom', 'tot', 'tut', 'uta', 'ute', 'aa', 'ae', 'am', 'at', 'em', 'et', 'ma', 'me', 'mo', 'mu', 'oe', 'om', 'ta', 'to', 'um', 'ut'],"levelNum":4,"numWordsWithLetters":[0, 0, 16, 29, 24, 4, 3, 1, 0, 0]},
{"anagram":"words","wordsDone":[],"wordsPossible":['sword', 'words', 'dors', 'dows', 'rods', 'rows', 'sord', 'word', 'dor', 'dos', 'dow', 'ods', 'ors', 'rod', 'row', 'sod', 'sow', 'wos', 'do', 'od', 'or', 'os', 'ow', 'so', 'wo'],"levelNum":5,"numWordsWithLetters":[0, 0, 7, 10, 6, 1, 0, 0, 0, 0]},{"anagram":"test","wordsDone":[],"wordsPossible":['sett', 'stet', 'test', 'tets', 'set', 'tet', 'es', 'et'],"levelNum":6,"numWordsWithLetters":[0, 0, 2, 2, 3, 0, 0, 0, 0, 0]},{"anagram":"cowboy","wordsDone":[],"wordsPossible":['cowboy', 'boyo', 'cowy', 'boo', 'bow', 'boy', 'cob', 'coo', 'cow', 'coy', 'woo', 'yob', 'yow', 'bo', 'by', 'ow', 'oy', 'wo', 'yo'],"levelNum":7,"numWordsWithLetters":[0, 0, 6, 10, 2, 0, 0, 0, 0, 0]},{"anagram":"extra","wordsDone":[],"wordsPossible":['extra', 'retax', 'taxer', 'rate', 'tare', 'tear', 'are', 'art', 'ate', 'axe', 'ear', 'eat', 'era', 'eta', 'rat', 'rax', 'ret', 'rex', 'tae', 'tar', 'tax', 'tea', 'ae', 'ar', 'at', 'ax', 'er', 'et', 'ex', 're', 'ta'],"levelNum":8,"numWordsWithLetters":[0, 0, 9, 16, 3, 2, 0, 0, 0, 0]},{"anagram":"water","wordsDone":[],"wordsPossible":['tawer', 'water', 'rate', 'tare', 'tear', 'twae', 'ware', 'wart', 'wear', 'wert', 'are', 'art', 'ate', 'awe', 'ear', 'eat', 'era', 'eta', 'rat', 'raw', 'ret', 'tae', 'tar', 'taw', 'tea', 'tew', 'twa', 'wae', 'war', 'wat', 'wet', 'ae', 'ar', 'at', 'aw', 'er', 'et', 're', 'ta', 'we'],"levelNum":9,"numWordsWithLetters":[0, 0, 9, 21, 8, 1, 0, 0, 0, 0]},{"anagram":"delicious","wordsDone":[],"wordsPossible":['delicious', 'diecious', 'doilies', 'eidolic', 'idolise', 'sluiced', 'suicide', 'ceilis', 'closed', 'clouds', 'coiled', 'coleus', 'colies', 'cosied', 'coulis', 'docile', 'escudo', 'iodise', 'louies', 'loused', 'oldies', 'oscule', 'siloed', 'sliced', 'sluice', 'soiled', 'solidi', 'souled', 'cedis', 'ceili', 'ceils', 'clods', 'close', 'cloud', 'clued', 'clues', 'codes', 'coeds', 'coils', 'colds', 'coled', 'coles', 'cosie', 'coude', 'could', 'decos', 'deils', 'delis', 'dices', 'diols', 'disci', 'disco', 'dolce', 'dolci', 'doles', 'douce', 'douse', 'duces', 'duels', 'dulse', 'eidos', 'idles', 'idols', 'ileus', 'iodic', 'isled', 'leuds', 'lidos', 'lieus', 'locus', 'lodes', 'loids', 'louie', 'louis', 'louse', 'luces', 'lucid', 'ludes', 'ludic', 'oculi', 'oiled', 'oldie', 'oleic', 'ousel', 'scold', 'scudi', 'scudo', 'sidle', 'slice', 'slide', 'sloid', 'slued', 'socle', 'sodic', 'soldi', 'soled', 'solei', 'solid', 'sulci', 'cedi', 'ceil', 'cels', 'clod', 'clue', 'code', 'cods', 'coed', 'coil', 'cold', 'cole', 'cols', 'cuds', 'cued', 'cues', 'deco', 'deil', 'deli', 'dels', 'dice', 'diel', 'dies', 'diol', 'disc', 'docs', 'does', 'dole', 'dols', 'dose', 'duce', 'duci', 'duel', 'dues', 'duos', 'ecus', 'elds', 'iced', 'ices', 'ides', 'idle', 'idol', 'isle', 'leis', 'leud', 'lice', 'lido', 'lids', 'lied', 'lies', 'lieu', 'loci', 'lode', 'loid', 'lose', 'loud', 'luce', 'lude', 'lues', 'odes', 'odic', 'oils', 'olds', 'oles', 'ouds', 'scud', 'sice', 'side', 'sild', 'silo', 'sled', 'slid', 'sloe', 'slue', 'soil', 'sold', 'sole', 'soli', 'soul', 'sued', 'udos', 'used', 'cel', 'cis', 'cod', 'col', 'cos', 'cud', 'cue', 'del', 'die', 'dis', 'doc', 'doe', 'dol', 'dos', 'due', 'dui', 'duo', 'ecu', 'eds', 'eld', 'els', 'ice', 'ids', 'led', 'lei', 'les', 'leu', 'lid', 'lie', 'lis', 'ode', 'ods', 'oes', 'oil', 'old', 'ole', 'ose', 'oud', 'sec', 'sei', 'sel', 'sic', 'sod', 'sol', 'sou', 'sue', 'udo', 'use', 'de', 'do', 'ed', 'el', 'es', 'id', 'is', 'li', 'lo', 'od', 'oe', 'oi', 'os', 'si', 'so', 'us'],"levelNum":10,"numWordsWithLetters":[0, 0, 16, 48, 81, 71, 21, 5, 1, 0]}]


// var levelDataOriginal = [
//   {
//     anagram: 'test',
//     wordsDone: [],
//     wordsPossible: ['es', 'et', 'set', 'tet', 'sett', 'stet', 'tets'],
//     levelNum: 0,
//     numWordsWithLetters: [0,0,2,2,3],
//   },
//   {
//     anagram: 'test',
//     wordsDone: [],
//     wordsPossible: ['es', 'et', 'set', 'tet', 'sett', 'stet', 'test', 'tets'],
//     levelNum: 1,
//     numWordsWithLetters: [0,0,2,2,3],
//   },
//   {
//     anagram: 'test',
//     wordsDone: [],
//     wordsPossible: ['es', 'et', 'set', 'tet', 'sett', 'stet', 'test', 'tets'],
//     levelNum: 2,
//     numWordsWithLetters: [0,0,2,2,3],
//     numWordsToComplete: [0,0,1,1,2]
//   },
//   {
//     anagram: 'test',
//     wordsDone: [],
//     wordsPossible: ['es', 'et', 'set', 'tet', 'sett', 'stet', 'test', 'tets'],
//     levelNum: 3,
//     numWordsWithLetters: [0,0,2,2,3],
//     numWordsToComplete: [0,0,1,1,2]
//   },
//   {
//     anagram: 'test',
//     wordsDone: [],
//     wordsPossible: ['es', 'et', 'set', 'tet', 'sett', 'stet', 'test', 'tets'],
//     levelNum: 4,
//     numWordsWithLetters: [0,0,2,2,3],
//     numWordsToComplete: [0,0,1,1,2]
//   },
//   {
//     anagram: 'test',
//     wordsDone: [],
//     wordsPossible: ['es', 'et', 'set', 'tet', 'sett', 'stet', 'test', 'tets'],
//     levelNum: 5,
//     numWordsWithLetters: [0,0,2,2,3],
//     numWordsToComplete: [0,0,1,1,2]
//   },
//   {
//     anagram: 'test',
//     wordsDone: [],
//     wordsPossible: ['es', 'et', 'set', 'tet', 'sett', 'stet', 'test', 'tets'],
//     levelNum: 6,
//     numWordsWithLetters: [0,0,2,2,3],
//     numWordsToComplete: [0,0,1,1,2]
//   },
//   {
//     anagram: 'test',
//     wordsDone: [],
//     wordsPossible: ['es', 'et', 'set', 'tet', 'sett', 'stet', 'test', 'tets'],
//     levelNum: 7,
//     numWordsWithLetters: [0,0,2,2,3],
//     numWordsToComplete: [0,0,1,1,2]
//   },
// ];



// store levelData on local storage by stringifying levelDataOriginal object
if(!localStorage.getItem('levelData')){
  localStorage.setItem('levelData', JSON.stringify(levelDataOriginal));
}
// if there is already leveldata then load it instead of original
else {
  var levelData = JSON.parse(localStorage.getItem('levelData'));
  console.log(JSON.stringify(levelData))
}


// level buttons are green if complete or grey if incomplete
for (let i = 0; i<levelData.length;i++){
  // blue is fully complete, light grey is unlocked, dark grey is locked
  var level = document.getElementById("level"+i);
  if (levelData[i].wordsDone.length == levelData[i].wordsPossible.length){
    level.className = "btn btn-success btn-block levelButton";
  }
  else {
    level.className = "btn btn-secondary btn-block levelButton";
  }

  level.addEventListener('click', function(){
    // set level data to correct level
    localStorage.setItem('currentLevel', i);
  })
}


// if reset is pressed then clear all saved level data
document.getElementById("resetAll").addEventListener('click', function(){
  localStorage.removeItem('levelData');
  location.reload();
});
