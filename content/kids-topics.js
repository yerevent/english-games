/* ============================================================================
   KIDS TOPICS — the vocabulary of Family and Friends 1 (2nd edition),
   one topic per unit, used by abc.html (the kids' site).

   Each word:  { w:"pen", ru:"ручка", e:"🖊️" }
     w   the English word (what is shown and said)
     ru  Russian, shown small under the word
     e   an emoji picture  — OR —  svg:"name" for a drawing in TOPIC_SVG below
         — OR —  color:"#e5384f" for a colour blob (colours topic)
   To add a word: copy a line and change it. To add a topic: copy a block.
   Units 10 (hair words) and 11's big/tall/little are left out: they need
   real pictures of people to make sense.
   ============================================================================ */

window.TOPICS = [
  { id:"colours", unit:"Starter", ru:"Цвета", en:"Colours", e:"🎨", words:[
    { w:"red",    ru:"красный",    color:"#e5384f" },
    { w:"yellow", ru:"жёлтый",     color:"#ffd93d" },
    { w:"pink",   ru:"розовый",    color:"#ff8fc0" },
    { w:"green",  ru:"зелёный",    color:"#43bf63" },
    { w:"purple", ru:"фиолетовый", color:"#9b5de5" },
    { w:"orange", ru:"оранжевый",  color:"#ff9f1a" },
    { w:"blue",   ru:"синий",      color:"#3f8cff" }
  ]},
  { id:"school", unit:"1", ru:"Школа", en:"School things", e:"✏️", words:[
    { w:"pen",    ru:"ручка",    e:"🖊️" },
    { w:"rubber", ru:"ластик",   svg:"rubber" },
    { w:"pencil", ru:"карандаш", e:"✏️" },
    { w:"ruler",  ru:"линейка",  e:"📏" },
    { w:"book",   ru:"книга",    e:"📕" }
  ]},
  { id:"toys", unit:"2", ru:"Игрушки", en:"Toys", e:"🧸", words:[
    { w:"doll",   ru:"кукла",     e:"🪆" },
    { w:"ball",   ru:"мяч",       e:"⚽" },
    { w:"teddy",  ru:"мишка",     e:"🧸" },
    { w:"puzzle", ru:"пазл",      e:"🧩" },
    { w:"car",    ru:"машинка",   e:"🚗" }
  ]},
  { id:"body", unit:"3", ru:"Тело", en:"My body", e:"👃", words:[
    { w:"arms",  ru:"руки",  e:"💪" },
    { w:"nose",  ru:"нос",   e:"👃" },
    { w:"face",  ru:"лицо",  e:"🙂" },
    { w:"legs",  ru:"ноги",  e:"🦵" },
    { w:"ears",  ru:"уши",   e:"👂" }
  ]},
  { id:"jobs", unit:"4", ru:"Профессии", en:"Jobs", e:"🧑‍🚒", words:[
    { w:"teacher",   ru:"учитель",     e:"🧑‍🏫" },
    { w:"pupil",     ru:"ученик",      e:"🧑‍🎓" },
    { w:"housewife", ru:"домохозяйка", e:"👩‍🍳" },
    { w:"fireman",   ru:"пожарный",    e:"🧑‍🚒" },
    { w:"pilot",     ru:"лётчик",      e:"🧑‍✈️" }
  ]},
  { id:"park", unit:"5", ru:"Парк", en:"The park", e:"🌳", words:[
    { w:"seesaw", ru:"качалка",  svg:"seesaw" },
    { w:"slide",  ru:"горка",    e:"🛝" },
    { w:"net",    ru:"сетка",    e:"🥅" },
    { w:"swing",  ru:"качели",   svg:"swing" },
    { w:"tree",   ru:"дерево",   e:"🌳" }
  ]},
  { id:"family", unit:"6", ru:"Семья", en:"My family", e:"👨‍👩‍👧", words:[
    { w:"mum",     ru:"мама",    e:"👩" },
    { w:"dad",     ru:"папа",    e:"👨" },
    { w:"sister",  ru:"сестра",  e:"👧" },
    { w:"brother", ru:"брат",    e:"👦" },
    { w:"grandma", ru:"бабушка", e:"👵" },
    { w:"grandpa", ru:"дедушка", e:"👴" }
  ]},
  { id:"clothes", unit:"7", ru:"Одежда", en:"Clothes", e:"👕", words:[
    { w:"dress",    ru:"платье",   e:"👗" },
    { w:"socks",    ru:"носки",    e:"🧦" },
    { w:"T-shirt",  ru:"футболка", e:"👕" },
    { w:"trousers", ru:"брюки",    e:"👖" },
    { w:"shorts",   ru:"шорты",    e:"🩳" }
  ]},
  { id:"house", unit:"8", ru:"Дом", en:"My house", e:"🏠", words:[
    { w:"kitchen",     ru:"кухня",    e:"🍳" },
    { w:"living room", ru:"гостиная", e:"🛋️" },
    { w:"dining room", ru:"столовая", e:"🍽️" },
    { w:"bedroom",     ru:"спальня",  e:"🛏️" },
    { w:"bathroom",    ru:"ванная",   e:"🛁" },
    { w:"garden",      ru:"сад",      e:"🌷" }
  ]},
  { id:"lunch", unit:"9", ru:"Обед", en:"Lunchtime", e:"🍱", words:[
    { w:"lunch box", ru:"ланч-бокс", e:"🍱" },
    { w:"sandwich",  ru:"бутерброд", e:"🥪" },
    { w:"drinks",    ru:"напитки",   e:"🧃" },
    { w:"apple",     ru:"яблоко",    e:"🍏" },
    { w:"banana",    ru:"банан",     e:"🍌" },
    { w:"biscuit",   ru:"печенье",   e:"🍪" }
  ]},
  { id:"zoo", unit:"11", ru:"Зоопарк", en:"The zoo", e:"🐘", words:[
    { w:"elephant", ru:"слон",     e:"🐘" },
    { w:"giraffe",  ru:"жираф",    e:"🦒" },
    { w:"monkey",   ru:"обезьяна", e:"🐒" }
  ]},
  { id:"food", unit:"12", ru:"Еда", en:"Dinnertime", e:"🥕", words:[
    { w:"rice",    ru:"рис",    e:"🍚" },
    { w:"meat",    ru:"мясо",   e:"🥩" },
    { w:"carrots", ru:"морковь", e:"🥕" },
    { w:"yogurt",  ru:"йогурт", svg:"yogurt" },
    { w:"fish",    ru:"рыба",   e:"🐟" },
    { w:"bread",   ru:"хлеб",   e:"🍞" }
  ]},
  { id:"bedroom", unit:"13", ru:"Моя комната", en:"My bedroom", e:"🛏️", words:[
    { w:"rug",      ru:"коврик",   svg:"rug" },
    { w:"bed",      ru:"кровать",  e:"🛏️" },
    { w:"cupboard", ru:"шкаф",     svg:"cupboard" },
    { w:"shelf",    ru:"полка",    svg:"shelf" },
    { w:"pillow",   ru:"подушка",  svg:"pillow" },
    { w:"blanket",  ru:"одеяло",   svg:"blanket" }
  ]},
  { id:"actions", unit:"14", ru:"Действия", en:"I can…", e:"🏃", words:[
    { w:"run",   ru:"бегать",      e:"🏃" },
    { w:"fly",   ru:"летать",      e:"🕊️" },
    { w:"walk",  ru:"ходить",      e:"🚶" },
    { w:"talk",  ru:"говорить",    e:"🗣️" },
    { w:"swim",  ru:"плавать",     e:"🏊" },
    { w:"climb", ru:"лазать",      e:"🧗" }
  ]},
  { id:"beach", unit:"15", ru:"Пляж", en:"The beach", e:"🏖️", words:[
    { w:"sandcastle", ru:"замок из песка", e:"🏰" },
    { w:"beach",      ru:"пляж",           e:"🏖️" },
    { w:"crab",       ru:"краб",           e:"🦀" },
    { w:"sea",        ru:"море",           e:"🌊" },
    { w:"boat",       ru:"лодка",          e:"🚣" },
    { w:"shell",      ru:"ракушка",        e:"🐚" }
  ]}
];

/* drawings for words that have no good emoji */
window.TOPIC_SVG = {
rubber:`<svg viewBox="0 0 100 100"><g transform="rotate(-18 50 50)"><rect x="14" y="34" width="72" height="34" rx="8" fill="#ff9ec4"/><rect x="50" y="34" width="36" height="34" rx="0" fill="#5b8cff"/><rect x="78" y="34" width="8" height="34" rx="4" fill="#5b8cff"/><rect x="20" y="40" width="22" height="6" rx="3" fill="#fff" opacity=".6"/></g></svg>`,
seesaw:`<svg viewBox="0 0 100 100"><path d="M40 78 50 52 60 78z" fill="#a878ff"/><g transform="rotate(-14 50 52)"><rect x="8" y="46" width="84" height="9" rx="4.5" fill="#ff9f1a"/><rect x="12" y="38" width="5" height="10" rx="2" fill="#e5384f"/><rect x="83" y="38" width="5" height="10" rx="2" fill="#e5384f"/></g><rect x="6" y="78" width="88" height="5" rx="2.5" fill="#43bf63"/></svg>`,
swing:`<svg viewBox="0 0 100 100"><path d="M18 90 30 12M82 90 70 12" stroke="#e5384f" stroke-width="6" stroke-linecap="round"/><path d="M26 12h48" stroke="#e5384f" stroke-width="6" stroke-linecap="round"/><path d="M40 13v50M60 13v50" stroke="#6b7391" stroke-width="2.5"/><rect x="34" y="62" width="32" height="8" rx="4" fill="#ffd93d"/></svg>`,
yogurt:`<svg viewBox="0 0 100 100"><path d="M24 36h52l-7 50H31z" fill="#fff" stroke="#cfd6e8" stroke-width="3"/><path d="M27 54h46l-3 20H30z" fill="#ffe08a"/><ellipse cx="50" cy="36" rx="27" ry="8" fill="#fff8e7" stroke="#cfd6e8" stroke-width="3"/><path d="M62 34 78 10" stroke="#5b8cff" stroke-width="5" stroke-linecap="round"/><ellipse cx="44" cy="64" rx="7" ry="4" fill="#ffd93d"/></svg>`,
rug:`<svg viewBox="0 0 100 100"><g transform="rotate(-8 50 50)"><rect x="12" y="26" width="76" height="50" rx="6" fill="#ff9f1a"/><rect x="20" y="33" width="60" height="36" rx="4" fill="#e5384f"/><circle cx="50" cy="51" r="11" fill="#ffd93d"/><path d="M12 30h-6M12 40h-6M12 50h-6M12 60h-6M12 70h-6M88 30h6M88 40h6M88 50h6M88 60h6M88 70h6" stroke="#ff9f1a" stroke-width="3"/></g></svg>`,
cupboard:`<svg viewBox="0 0 100 100"><rect x="22" y="10" width="56" height="78" rx="4" fill="#4ecb71"/><rect x="26" y="14" width="23" height="70" rx="2" fill="#5ed67f"/><rect x="51" y="14" width="23" height="70" rx="2" fill="#5ed67f"/><circle cx="45" cy="50" r="3" fill="#2f9b53"/><circle cx="55" cy="50" r="3" fill="#2f9b53"/><rect x="26" y="88" width="6" height="6" fill="#2f9b53"/><rect x="68" y="88" width="6" height="6" fill="#2f9b53"/></svg>`,
shelf:`<svg viewBox="0 0 100 100"><rect x="10" y="54" width="80" height="8" rx="2" fill="#b07d45"/><path d="M22 62v14M78 62v14" stroke="#8a5524" stroke-width="5" stroke-linecap="round"/><rect x="18" y="30" width="9" height="24" fill="#e5384f"/><rect x="28" y="34" width="9" height="20" fill="#5b8cff"/><rect x="38" y="28" width="8" height="26" fill="#ffd93d"/><circle cx="66" cy="45" r="9" fill="#43bf63"/></svg>`,
pillow:`<svg viewBox="0 0 100 100"><path d="M14 30q36-10 72 0 6 20 0 40-36 10-72 0-6-20 0-40z" fill="#fff3a8" stroke="#f0d36a" stroke-width="3"/><path d="M26 40q24-6 48 0" stroke="#f0d36a" stroke-width="2.5" fill="none"/></svg>`,
blanket:`<svg viewBox="0 0 100 100"><path d="M12 30h76v44q-38 10-76 0z" fill="#a878ff"/><path d="M12 30h76v12H12z" fill="#c9a8ff"/><path d="M30 42v30M50 42v32M70 42v30" stroke="#8f5ce6" stroke-width="2.5"/><path d="M12 56h76" stroke="#8f5ce6" stroke-width="2.5"/></svg>`
};
