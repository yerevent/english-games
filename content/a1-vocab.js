/* A1 Vocabulary Library — themed sets.

   Each word:  en (English), meaning (simple English definition), ex (example sentence)
   Module 1 sets are adapted for Russian speakers and for younger learners:
       ru    = Russian translation, shown INSTEAD of the English definition
       pic   = a picture (emoji or a big character)
   A set with  mode:"ru"  uses the Russian translation in all its games.
   A set with  kid:true   turns on the bigger, brighter, more colourful layout.
   color = the colour used for that set's cards.

   To add a word, copy a line and change the words. */

window.A1_VOCAB = [

/* ===================== MODULE 1 — Russian + pictures + kid mode ===================== */

{id:"greetings", title:"Greetings", ru:"Приветствия", emoji:"👋", module:1,
 mode:"ru", kid:true, color:"#ff6b9d", words:[
  {en:"hello", ru:"привет / здравствуйте", pic:"👋", meaning:"a friendly word you say when you meet someone", ex:"Hello! Nice to meet you."},
  {en:"good morning", ru:"доброе утро", pic:"🌅", meaning:"a greeting before 12 o'clock", ex:"Good morning, Mr Petrosyan."},
  {en:"good afternoon", ru:"добрый день", pic:"☀️", meaning:"a greeting between 12 and 6 o'clock", ex:"Good afternoon, everyone."},
  {en:"good evening", ru:"добрый вечер", pic:"🌆", meaning:"a greeting after 6 o'clock", ex:"Good evening! Come in, please."},
  {en:"goodbye", ru:"до свидания", pic:"🚶", meaning:"what you say when you leave", ex:"Goodbye! See you tomorrow."},
  {en:"nice to meet you", ru:"приятно познакомиться", pic:"🤝", meaning:"what you say when you meet a person for the first time", ex:"I'm Anna. Nice to meet you."},
  {en:"how are you?", ru:"как дела?", pic:"🙂", meaning:"a question about someone's health or feelings", ex:"Hi Sara! How are you?"},
  {en:"see you later", ru:"до скорого / увидимся", pic:"👀", meaning:"an informal goodbye", ex:"I'm going home. See you later!"},
  {en:"please", ru:"пожалуйста", pic:"🙏", meaning:"a polite word when you ask for something", ex:"Can I have some water, please?"},
  {en:"thank you", ru:"спасибо", pic:"💐", meaning:"a polite word when someone helps you", ex:"Thank you for your help."}
]},

{id:"countries", title:"Countries & Nationalities", ru:"Страны и национальности", emoji:"🌍", module:1,
 mode:"ru", kid:true, color:"#4dabf7", words:[
  {en:"Armenia — Armenian", ru:"Армения — армянин / армянский", pic:"🇦🇲", meaning:"the country, then the people and language", ex:"I'm from Armenia. I'm Armenian."},
  {en:"Britain — British", ru:"Великобритания — британец / британский", pic:"🇬🇧", meaning:"the country, then the people", ex:"Tom is British. He lives in London."},
  {en:"France — French", ru:"Франция — француз / французский", pic:"🇫🇷", meaning:"the country, then the people and language", ex:"She is French. She speaks French."},
  {en:"Spain — Spanish", ru:"Испания — испанец / испанский", pic:"🇪🇸", meaning:"the country, then the people and language", ex:"They are Spanish."},
  {en:"Italy — Italian", ru:"Италия — итальянец / итальянский", pic:"🇮🇹", meaning:"the country, then the people and language", ex:"Marco is Italian."},
  {en:"Germany — German", ru:"Германия — немец / немецкий", pic:"🇩🇪", meaning:"the country, then the people and language", ex:"Hans is German."},
  {en:"Russia — Russian", ru:"Россия — русский", pic:"🇷🇺", meaning:"the country, then the people and language", ex:"My teacher is Russian."},
  {en:"Japan — Japanese", ru:"Япония — японец / японский", pic:"🇯🇵", meaning:"the country, then the people and language", ex:"Yuki is Japanese."},
  {en:"country", ru:"страна", pic:"🗺️", meaning:"a place like Armenia, France or Japan", ex:"What country are you from?"},
  {en:"nationality", ru:"национальность", pic:"🪪", meaning:"the country you belong to", ex:"My nationality is Armenian."}
]},

{id:"jobs", title:"Jobs", ru:"Профессии", emoji:"💼", module:1,
 mode:"ru", kid:true, color:"#ffa94d", words:[
  {en:"teacher", ru:"учитель", pic:"👩‍🏫", meaning:"a person who helps students learn", ex:"My mother is a teacher."},
  {en:"doctor", ru:"врач", pic:"👨‍⚕️", meaning:"a person who helps sick people", ex:"The doctor is in the hospital."},
  {en:"engineer", ru:"инженер", pic:"👷", meaning:"a person who designs machines or buildings", ex:"He is an engineer."},
  {en:"student", ru:"студент / ученик", pic:"🎒", meaning:"a person who studies", ex:"I'm a student at the university."},
  {en:"waiter", ru:"официант", pic:"🍽️", meaning:"a person who brings food in a restaurant", ex:"The waiter is very friendly."},
  {en:"nurse", ru:"медсестра", pic:"👩‍⚕️", meaning:"a person who takes care of sick people", ex:"My sister is a nurse."},
  {en:"driver", ru:"водитель", pic:"🚕", meaning:"a person who drives a car or bus", ex:"The bus driver is nice."},
  {en:"shop assistant", ru:"продавец", pic:"🛍️", meaning:"a person who helps you in a shop", ex:"Ask the shop assistant for a bigger size."}
]},

{id:"classroom", title:"Classroom Objects", ru:"Школьные предметы", emoji:"✏️", module:1,
 mode:"ru", kid:true, color:"#69db7c", words:[
  {en:"book", ru:"книга", pic:"📕", meaning:"you read it", ex:"Open your book, please."},
  {en:"notebook", ru:"тетрадь", pic:"📓", meaning:"you write in it", ex:"My notebook is on the desk."},
  {en:"pen", ru:"ручка", pic:"🖊️", meaning:"you write with it, in ink", ex:"Can I borrow a pen?"},
  {en:"pencil", ru:"карандаш", pic:"✏️", meaning:"you write with it and you can erase it", ex:"This pencil is broken."},
  {en:"desk", ru:"парта", pic:"🪑", meaning:"a table you work at", ex:"Put your bag under the desk."},
  {en:"chair", ru:"стул", pic:"💺", meaning:"you sit on it", ex:"There are twelve chairs in the room."},
  {en:"board", ru:"доска", pic:"📋", meaning:"the teacher writes on it", ex:"Look at the board, please."},
  {en:"bag", ru:"сумка / рюкзак", pic:"🎒", meaning:"you carry your things in it", ex:"My bag is very heavy."},
  {en:"ruler", ru:"линейка", pic:"📏", meaning:"you use it to draw straight lines", ex:"Where is my ruler?"},
  {en:"rubber", ru:"ластик", pic:"🧽", meaning:"you use it to remove pencil marks", ex:"Can I use your rubber?"}
]},

{id:"numbers", title:"Numbers 0–100", ru:"Числа 0–100", emoji:"🔢", module:1,
 mode:"ru", kid:true, color:"#9775fa", words:[
  {en:"three", ru:"три", pic:"3", meaning:"the number 3", ex:"I have three books."},
  {en:"five", ru:"пять", pic:"5", meaning:"the number 5", ex:"There are five chairs."},
  {en:"seven", ru:"семь", pic:"7", meaning:"the number 7", ex:"There are seven days in a week."},
  {en:"ten", ru:"десять", pic:"10", meaning:"the number 10", ex:"My brother is ten years old."},
  {en:"twelve", ru:"двенадцать", pic:"12", meaning:"the number 12", ex:"There are twelve months in a year."},
  {en:"fifteen", ru:"пятнадцать", pic:"15", meaning:"the number 15", ex:"She is fifteen years old."},
  {en:"twenty", ru:"двадцать", pic:"20", meaning:"the number 20", ex:"There are twenty students."},
  {en:"thirty", ru:"тридцать", pic:"30", meaning:"the number 30", ex:"My father is thirty years old."},
  {en:"fifty", ru:"пятьдесят", pic:"50", meaning:"the number 50", ex:"This book has fifty pages."},
  {en:"seventy", ru:"семьдесят", pic:"70", meaning:"the number 70", ex:"My grandmother is seventy."},
  {en:"ninety", ru:"девяносто", pic:"90", meaning:"the number 90", ex:"Ninety percent is a good result."},
  {en:"a hundred", ru:"сто", pic:"100", meaning:"the number 100", ex:"I can count to a hundred."}
]},

{id:"personal-info", title:"Personal Information", ru:"Личные данные", emoji:"🪪", module:1,
 mode:"ru", kid:true, color:"#22b8cf", words:[
  {en:"name", ru:"имя", pic:"🏷️", meaning:"what people call you", ex:"My name is Ani."},
  {en:"surname", ru:"фамилия", pic:"👨‍👩‍👦", meaning:"your family name", ex:"My surname is Petrosyan."},
  {en:"age", ru:"возраст", pic:"🎂", meaning:"how old you are", ex:"What is your age?"},
  {en:"address", ru:"адрес", pic:"🏠", meaning:"where you live", ex:"My address is 12 Abovyan Street."},
  {en:"phone number", ru:"номер телефона", pic:"📱", meaning:"the numbers people call you on", ex:"What's your phone number?"},
  {en:"email", ru:"электронная почта", pic:"📧", meaning:"your address on the internet", ex:"Send me your email, please."},
  {en:"nationality", ru:"национальность", pic:"🌍", meaning:"the country you belong to", ex:"Her nationality is French."}
]},

/* ===================== MODULES 2–10 — English definitions ===================== */

{id:"family", title:"Family", emoji:"👨‍👩‍👧", module:2, words:[
  {en:"mother", meaning:"your female parent", ex:"My mother is a doctor."},
  {en:"father", meaning:"your male parent", ex:"My father works in a bank."},
  {en:"parents", meaning:"your mother and father together", ex:"My parents live in Gyumri."},
  {en:"sister", meaning:"your parents' daughter", ex:"I have two sisters."},
  {en:"brother", meaning:"your parents' son", ex:"My brother is ten years old."},
  {en:"aunt", meaning:"your mother's or father's sister", ex:"My aunt lives in Moscow."},
  {en:"uncle", meaning:"your mother's or father's brother", ex:"My uncle has a big car."},
  {en:"cousin", meaning:"the child of your aunt or uncle", ex:"My cousin is my best friend."},
  {en:"grandparents", meaning:"the parents of your parents", ex:"I visit my grandparents on Sunday."},
  {en:"married", meaning:"having a husband or a wife", ex:"My sister is married."}
]},

{id:"house", title:"House & Furniture", emoji:"🏠", module:3, words:[
  {en:"kitchen", meaning:"the room where you cook", ex:"My mother is in the kitchen."},
  {en:"bathroom", meaning:"the room where you wash", ex:"The bathroom is next to my bedroom."},
  {en:"bedroom", meaning:"the room where you sleep", ex:"There are two bedrooms in our flat."},
  {en:"living room", meaning:"the room where the family sits together", ex:"We watch TV in the living room."},
  {en:"sofa", meaning:"a long soft seat for two or three people", ex:"The cat is on the sofa."},
  {en:"chair", meaning:"a seat for one person", ex:"There are four chairs in the kitchen."},
  {en:"table", meaning:"furniture with a flat top and legs", ex:"Put the plates on the table."},
  {en:"bed", meaning:"furniture you sleep on", ex:"My bed is near the window."},
  {en:"window", meaning:"the glass opening in a wall", ex:"Please open the window."},
  {en:"fridge", meaning:"the machine that keeps food cold", ex:"There is milk in the fridge."}
]},

{id:"routine", title:"Daily Routine", emoji:"⏰", module:4, words:[
  {en:"wake up", meaning:"to stop sleeping", ex:"I wake up at seven o'clock."},
  {en:"get up", meaning:"to get out of bed", ex:"He gets up very early."},
  {en:"brush my teeth", meaning:"to clean your teeth", ex:"I brush my teeth twice a day."},
  {en:"have breakfast", meaning:"to eat the first meal of the day", ex:"We have breakfast at eight."},
  {en:"go to work", meaning:"to travel to your job", ex:"She goes to work by bus."},
  {en:"study", meaning:"to learn something", ex:"I study English every evening."},
  {en:"cook", meaning:"to make food", ex:"My father cooks on Sundays."},
  {en:"go to bed", meaning:"to go and sleep", ex:"I go to bed at eleven."},
  {en:"sleep", meaning:"to rest with your eyes closed", ex:"I sleep eight hours."}
]},

{id:"time", title:"Days, Months & Time", emoji:"📅", module:4, words:[
  {en:"Monday", meaning:"the first day of the working week", ex:"I have English on Monday."},
  {en:"Saturday", meaning:"the sixth day of the week", ex:"On Saturday I don't work."},
  {en:"week", meaning:"seven days", ex:"See you next week."},
  {en:"month", meaning:"about four weeks — January, February…", ex:"March is a cold month."},
  {en:"January", meaning:"the first month of the year", ex:"My birthday is in January."},
  {en:"July", meaning:"the seventh month of the year", ex:"We travel in July."},
  {en:"o'clock", meaning:"used for exact hours", ex:"It's three o'clock."},
  {en:"half past", meaning:"thirty minutes after the hour", ex:"It's half past six."},
  {en:"quarter to", meaning:"fifteen minutes before the hour", ex:"It's quarter to nine."},
  {en:"always / never", meaning:"all the time / at no time", ex:"I always have coffee. I never drink tea."}
]},

{id:"hobbies", title:"Hobbies & Free Time", emoji:"🎧", module:5, words:[
  {en:"read", meaning:"to look at words and understand them", ex:"I like reading books."},
  {en:"swim", meaning:"to move in water", ex:"She can swim very well."},
  {en:"dance", meaning:"to move your body to music", ex:"They love dancing."},
  {en:"sing", meaning:"to make music with your voice", ex:"He sings in a band."},
  {en:"draw", meaning:"to make a picture with a pencil", ex:"My sister draws every day."},
  {en:"travel", meaning:"to go to other places", ex:"We travel in summer."},
  {en:"play football", meaning:"to play the game with a ball and two teams", ex:"I play football on Sundays."},
  {en:"listen to music", meaning:"to hear music because you want to", ex:"I listen to music on the bus."},
  {en:"watch films", meaning:"to look at movies", ex:"We watch films at home."},
  {en:"take photos", meaning:"to make pictures with a camera", ex:"He takes photos of the city."}
]},

{id:"food", title:"Food & Drink", emoji:"🍎", module:6, words:[
  {en:"fruit", meaning:"food like apples, bananas and oranges", ex:"I eat fruit every day."},
  {en:"vegetables", meaning:"food like carrots, potatoes and tomatoes", ex:"Vegetables are good for you."},
  {en:"meat", meaning:"food from animals", ex:"He doesn't eat meat."},
  {en:"cheese", meaning:"a food made from milk", ex:"There is cheese in the fridge."},
  {en:"bread", meaning:"food made from flour and baked", ex:"We buy fresh bread every morning."},
  {en:"water", meaning:"the drink with no colour and no taste", ex:"Can I have some water, please?"},
  {en:"coffee", meaning:"a hot brown drink", ex:"I drink coffee in the morning."},
  {en:"breakfast", meaning:"the first meal of the day", ex:"Breakfast is at eight o'clock."},
  {en:"lunch", meaning:"the meal in the middle of the day", ex:"We have lunch at one."},
  {en:"dinner", meaning:"the main evening meal", ex:"Dinner is ready!"},
  {en:"menu", meaning:"the list of food in a restaurant", ex:"Can I see the menu, please?"},
  {en:"bill", meaning:"the paper that shows how much you pay", ex:"Could we have the bill, please?"}
]},

{id:"town", title:"Places in Town & Transport", emoji:"🚌", module:7, words:[
  {en:"supermarket", meaning:"a big shop for food", ex:"The supermarket is open until ten."},
  {en:"pharmacy", meaning:"the shop where you buy medicine", ex:"Is there a pharmacy near here?"},
  {en:"bank", meaning:"the place where you keep money", ex:"The bank is opposite the park."},
  {en:"park", meaning:"a green place with trees", ex:"We walk in the park."},
  {en:"station", meaning:"the place where trains stop", ex:"The station is behind the hotel."},
  {en:"airport", meaning:"the place where planes arrive and leave", ex:"The airport is far from the city."},
  {en:"car", meaning:"a vehicle for a small number of people", ex:"My father has an old car."},
  {en:"bus", meaning:"a big vehicle for many people", ex:"I go to school by bus."},
  {en:"train", meaning:"a long vehicle on rails", ex:"The train leaves at six."},
  {en:"bicycle", meaning:"a vehicle with two wheels and pedals", ex:"She rides a bicycle to work."},
  {en:"turn left", meaning:"to go to the left side", ex:"Turn left at the traffic lights."},
  {en:"go straight on", meaning:"to continue forward", ex:"Go straight on for 200 metres."}
]},

{id:"clothes", title:"Clothes & Colours", emoji:"👕", module:8, words:[
  {en:"shirt", meaning:"clothing for the top of your body, with buttons", ex:"He wears a white shirt at work."},
  {en:"trousers", meaning:"clothing for your legs", ex:"These trousers are too big."},
  {en:"dress", meaning:"clothing for women, one piece", ex:"She has a beautiful red dress."},
  {en:"shoes", meaning:"you wear them on your feet", ex:"My shoes are black."},
  {en:"jacket", meaning:"a short coat", ex:"Take your jacket — it's cold."},
  {en:"socks", meaning:"soft clothing for your feet, inside shoes", ex:"I need new socks."},
  {en:"red / blue / green", meaning:"colours", ex:"I like the blue one."},
  {en:"black / white", meaning:"colours", ex:"A black jacket and white shoes."},
  {en:"size", meaning:"how big or small something is", ex:"Do you have this in a bigger size?"},
  {en:"cheap / expensive", meaning:"low price / high price", ex:"This shirt is cheap, that one is expensive."},
  {en:"try on", meaning:"to put clothes on in a shop to test them", ex:"Can I try on this jacket?"}
]},

{id:"weather", title:"Weather & Seasons", emoji:"🌤️", module:9, words:[
  {en:"sunny", meaning:"with a lot of sun", ex:"It's sunny today."},
  {en:"cloudy", meaning:"with a lot of clouds", ex:"It's cloudy and grey."},
  {en:"rainy", meaning:"with a lot of rain", ex:"It's rainy — take an umbrella."},
  {en:"snowy", meaning:"with a lot of snow", ex:"January is snowy in Armenia."},
  {en:"windy", meaning:"with a lot of wind", ex:"It's very windy today."},
  {en:"hot", meaning:"with a high temperature", ex:"It's hot in July."},
  {en:"cold", meaning:"with a low temperature", ex:"It's cold in winter."},
  {en:"summer", meaning:"the hot season", ex:"We swim in summer."},
  {en:"winter", meaning:"the cold season", ex:"I like winter."},
  {en:"spring", meaning:"the season when flowers grow", ex:"Spring starts in March."},
  {en:"autumn", meaning:"the season when leaves fall", ex:"Autumn is my favourite season."}
]},

{id:"health", title:"Health & the Body", emoji:"🩺", module:10, words:[
  {en:"head", meaning:"the top part of your body", ex:"My head hurts."},
  {en:"stomach", meaning:"the part of the body where food goes", ex:"I have a stomach ache."},
  {en:"arm", meaning:"the part of the body from the shoulder to the hand", ex:"My arm is broken."},
  {en:"leg", meaning:"the part of the body you walk with", ex:"My legs are tired."},
  {en:"cough", meaning:"a loud noise from your throat when you are ill", ex:"I have a bad cough."},
  {en:"fever", meaning:"a high body temperature", ex:"She has a fever."},
  {en:"headache", meaning:"a pain in your head", ex:"I have a terrible headache."},
  {en:"medicine", meaning:"what you take to feel better", ex:"Take this medicine twice a day."},
  {en:"healthy", meaning:"good for your body", ex:"Fruit is healthy."},
  {en:"tired", meaning:"needing rest or sleep", ex:"I'm very tired today."}
]}

];
