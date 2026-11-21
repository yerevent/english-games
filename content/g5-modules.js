/* ============================================================================
   ENGLISH 5 — the six topics of Alex's school textbook, in the book's order.
   "English 5", M. Amiraghyan, K. Poghosyan, K. Tonoyan, G. Vardanyan (2023)

   grammar[] holds topic ids. Some come from this book's own file
   (content/g5-grammar.js, ids starting "g5-"), the rest reuse the grammar
   library that was already on the site — the book teaches those same points,
   so there is one page per topic instead of two copies.
   ============================================================================ */

window.G5_MODULES = [

{n:1, title:"Hobbies", ru:"Хобби", emoji:"🎨", pages:"p. 4–24",
 goal:"Talk about what you like and love doing, and how often you do it.",
 goalRu:"Рассказывать, что тебе нравится делать и как часто.",
 grammar:["like-ing", "present-simple-vs-continuous", "adverbs-frequency"],
 vocab:["g5-hobbies"]},

{n:2, title:"Jobs & Occupations", ru:"Профессии", emoji:"💼", pages:"p. 25–45",
 goal:"Describe jobs and the people who do them, and compare them.",
 goalRu:"Описывать профессии и людей, которые ими занимаются, и сравнивать их.",
 grammar:["adjectives-comparisons", "present-simple", "present-continuous"],
 vocab:["g5-jobs"]},

{n:3, title:"Community", ru:"Общество и природа", emoji:"🌍", pages:"p. 46–70",
 goal:"Talk about your town and the environment, and say what happened in the past.",
 goalRu:"Говорить о своём городе и природе и рассказывать о прошлом.",
 grammar:["some-any", "articles", "g5-possessive-pronouns", "g5-past-simple", "g5-past-continuous"],
 vocab:["g5-community"]},

{n:4, title:"Travelling", ru:"Путешествия", emoji:"✈️", pages:"p. 71–92",
 goal:"Talk about journeys, luggage and how people travel.",
 goalRu:"Рассказывать о поездках, багаже и способах передвижения.",
 grammar:["plurals", "countable", "g5-transport-prepositions"],
 vocab:["g5-travelling"]},

{n:5, title:"Animals", ru:"Животные", emoji:"🦊", pages:"p. 93–113",
 goal:"Describe wild and domestic animals, and ask questions about them.",
 goalRu:"Описывать диких и домашних животных и задавать о них вопросы.",
 grammar:["adjectives-comparisons", "g5-wh-questions"],
 vocab:["g5-animals"]},

{n:6, title:"Health", ru:"Здоровье", emoji:"🩺", pages:"p. 114–139",
 goal:"Say what is wrong, and give advice about staying healthy.",
 goalRu:"Говорить, что болит, и давать советы о здоровье.",
 grammar:["g5-must-should", "can"],
 vocab:["g5-health"]}

];
