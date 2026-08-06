# English Games

Interactive English practice for my students — an A1 course with grammar, vocabulary,
speaking and writing. Works on a phone, no login, nothing to install.

**Live site:** https://yerevent.github.io/english-games/

## The A1 course

Ten modules, following the syllabus:

| # | Module | Grammar | Writing task |
|---|--------|---------|--------------|
| 1 | Hello! | Subject pronouns, To be, Questions with To be | Introduce yourself |
| 2 | My Family | Possessive adjectives, Possessive 's, Demonstratives, Plurals | Describe your family · My best friend |
| 3 | My Home | There is/are, Articles, Some/Any, Prepositions of place | Describe your bedroom |
| 4 | Everyday Life | Present Simple, Adverbs of frequency, Telling the time | My daily routine |
| 5 | Free Time | Can/Can't, Like + verb-ing, Object pronouns | My hobby |
| 6 | Food | Countable & uncountable, Some/Any, Would like | My favourite food |
| 7 | Around Town | Imperatives, Prepositions of movement, Can for requests | My town |
| 8 | Clothes & Shopping | Demonstratives, Adjectives & simple comparisons | My favourite outfit |
| 9 | Weather & Seasons | Present Continuous, Present Simple vs Continuous | Today's weather |
| 10 | Health | Have got, Imperatives for advice | Healthy habits |

Every module also has six speaking activities: role-play, picture description,
question cards (on a spinning wheel), find someone who…, information gap, and
discussion questions.

## ABC & 123 — for young learners

A separate, bigger and brighter page for children who are still learning the
alphabet and numbers: **https://yerevent.github.io/english-games/abc.html**

| Screen | What the child does |
|--------|--------------------|
| Learn the alphabet | Steps through A–Z: big letter, small letter, a drawing and the word |
| Big & small letters | Matches **A** with **a** |
| Letters and pictures | Matches **A** with the apple — the word appears once it is right |
| Learn numbers | Steps through 1–20: the numeral, the word and that many things to count |
| Number & word | Matches **3** with **three** |
| Count and match | Counts the balls and matches them to the numeral |

Before every game the child (or you) chooses the range — **A–E**, **A–H**, **A–M**,
**A–Z**, or any two letters with the *from* and *to* boxes. Only those letters go into
the game, so it grows with what has been taught. Numbers work the same way, 1–20.

One round is 5–6 pairs picked at random from that range, so the same setting gives a
different game every time. There is no timer and no way to lose — a wrong pair just
shakes and can be tried again. Stars at the end reflect how many tries it took.

The 26 pictures are drawn in code, so there are no image files to lose and the page
works offline once opened. The letter and word are also read out loud using the
phone's own voice; the 🔊 button in the corner turns all sound off.

## Libraries

- **Grammar Library** — 25 topics, each with a rules table, examples, a "watch out"
  tip and its own practice games.
- **Vocabulary Library** — 16 themed sets with meanings and example sentences.
- **Irregular verbs** — typed drill plus a study list.

## The games

| Game | Where it works | What the student does |
|------|----------------|----------------------|
| Multiple Choice | grammar | Picks the right answer, gets an explanation |
| Fill in the Blanks | grammar | Types the missing word |
| Drag & Drop | grammar | Taps a word from the bank into the gap |
| Sentence Builder | grammar | Taps the words into the correct order |
| Error Correction | grammar | Taps the one wrong word in a sentence |
| Timed Challenge | grammar | Same questions, 15 seconds each |
| Memory Match | vocabulary | Matches word to meaning |
| Hidden Pairs | vocabulary | Turns cards over to find pairs |
| Flashcards | vocabulary | Flips through words and meanings |
| Unscramble | vocabulary | Puts the letters in order |
| Speaking Wheel | speaking | Spins for a question to answer out loud |

## Homework links

Open any topic and tap **Copy homework link**, or build one by hand:

```
https://yerevent.github.io/english-games/?g=present-simple
https://yerevent.github.io/english-games/?g=present-simple&game=build
https://yerevent.github.io/english-games/?v=family&game=memory
https://yerevent.github.io/english-games/?m=4
```

`g=` a grammar topic · `v=` a vocabulary set · `m=` a module number ·
`game=` mcq, gap, drag, build, fix, timed, match, memory, cards, unscramble

## Sending results

No accounts. At the end of a round the student sees their score and can send it with
the Share / Telegram / WhatsApp / Copy buttons. Writing tasks have a "Send to teacher"
button too. Nothing is sent automatically. Scores, streaks and saved writing stay in
the student's own browser.

## Adding or changing content

Open these files in Notepad — each one explains its format at the top, and adding
something means copying a line and changing the words.

- `content/a1-vocab.js` — vocabulary sets
- `content/a1-grammar-1.js` — grammar topics 1–13
- `content/a1-grammar-2.js` — grammar topics 14–25
- `content/a1-modules.js` — modules, speaking tasks, writing tasks

Grammar exercises use four formats: `mcq` (multiple choice), `gap` (fill the blank,
also used by Drag & Drop), `build` (just write the correct sentence — the game
scrambles it), and `fix` (a wrong sentence and its correction).

The older A2/B1/B2 material can also come from a Google Sheet — publish the tabs as
CSV and paste the links into `SHEET_CSV` near the top of `index.html`.

## Files

- `index.html` — the app: layout, styles and all game engines
- `abc.html` — the ABC & 123 page for young learners (its own file, nothing shared)
- `content/` — all the teaching content

To change a word in ABC & 123, open `abc.html` in Notepad and find `THE ALPHABET`
near the top of the script — each letter is one line. The drawings live just below it
under `THE DRAWINGS`, so a new word usually needs a new drawing to go with it.
