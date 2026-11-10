/* ============================================================================
   KIDS GAMES — the list of games on the kids' site (abc.html).
   The teacher page uses it for homework and scores, the kids' page for names.
     kind: "topic"   played with one word topic (Family, Toys, …)
           "letters" played with a range of letters (A–D)
           "numbers" played with a range of numbers (1–10)
     book: which Family and Friends exercise it is modelled on
   ============================================================================ */

window.KID_GAMES = [
  { id:"learn",       kind:"topic",   e:"📖", ru:"Учим слова",          en:"Learn the words",            book:"Listen, point and repeat" },
  { id:"listen",      kind:"topic",   e:"👂", ru:"Слушай и найди",      en:"Listen and find",            book:"Listen and point" },
  { id:"yesno",       kind:"topic",   e:"✅", ru:"Да или нет?",         en:"Is it a…? Yes / No",         book:"Point, ask and answer" },
  { id:"odd",         kind:"topic",   e:"🙃", ru:"Что лишнее?",         en:"Odd one out",                book:"Look and circle" },
  { id:"memory",      kind:"topic",   e:"🃏", ru:"Найди пару",          en:"Memory pairs",               book:"Listen and match" },
  { id:"tmatch",      kind:"topic",   e:"🔤", ru:"Картинка и слово",    en:"Picture and word",           book:"Read and match" },
  { id:"spell",       kind:"topic",   e:"🧱", ru:"Собери слово",        en:"Build the word",             book:"Write" },

  { id:"findLetter",  kind:"letters", e:"👂", ru:"Найди букву",         en:"Listen and find the letter", book:"Listen and point" },
  { id:"firstLetter", kind:"letters", e:"🍎", ru:"Первая буква",        en:"First letter",               book:"Initial sounds" },
  { id:"hunt",        kind:"letters", e:"🔍", ru:"Найди всё на букву",  en:"Find everything with…",      book:"Read and circle the sounds" },
  { id:"join",        kind:"letters", e:"🔗", ru:"Соедини буквы",       en:"Listen and join the letters",book:"Listen to the sounds and join the letters" },
  { id:"case",        kind:"letters", e:"🅰️", ru:"Большие и маленькие", en:"Big and small letters",      book:"Handwriting" },
  { id:"pic",         kind:"letters", e:"🔤", ru:"Буквы и картинки",    en:"Letters and pictures",       book:"Listen, point and repeat" },

  { id:"findNumber",  kind:"numbers", e:"👂", ru:"Найди цифру",         en:"Listen and find the number", book:"Listen and tick" },
  { id:"numcount",    kind:"numbers", e:"🎈", ru:"Считаем",             en:"Count and match",            book:"Count and say" },
  { id:"numword",     kind:"numbers", e:"3️⃣", ru:"Цифра и слово",       en:"Number and word",            book:"Read and match" }
];
