# English Games

Short interactive English exercises for my students — vocabulary, grammar and
irregular verbs. Works on a phone, no login, nothing to install.

**Not published yet** — running locally only. When it goes on GitHub Pages the
address will be `https://yerevent.github.io/english-games/`.

## What's in it

- **Match the pairs** — tap a word, tap its meaning
- **Fill in the blank** — multiple choice, with an explanation after every answer
- **Grammar practice** — Present Simple, Past Simple, Present Perfect, Articles,
  Comparatives, Modal verbs, Conditionals
- **Irregular verbs** — type the past simple and past participle, plus a study list

Levels are shown as `A1 — Beginner` through `C1 — Advanced`. Only levels and topics
that actually have content appear.

## Homework links

Open any exercise and tap **Copy homework link**, or build one by hand:

```
index.html?level=A2&grammar=Past%20Simple
index.html?level=A1&topic=Food&game=match
index.html?game=verbs&level=A2
```

The link opens straight into that exercise — no menus.

## Sending results

There are no accounts. At the end of a round the student sees their score and can
send it to me with the Share / Telegram / WhatsApp / Copy buttons. Nothing is sent
automatically. Scores and streaks are stored only in the student's own browser.

## Adding content

Right now the content lives inside `index.html`, in the `SAMPLE` section.

To switch to a Google Sheet instead:

1. Make a sheet with three tabs — `Vocabulary`, `Quiz`, `IrregularVerbs`:
   - **Vocabulary:** Level, Topic, English, Meaning, ImageURL
   - **Quiz:** Level, Topic, Grammar, Question, Correct, Wrong1, Wrong2, Wrong3, Explanation
   - **IrregularVerbs:** Infinitive, PastSimple, PastParticiple, Level, Meaning
2. **File → Share → Publish to web**, pick a tab, choose **Comma-separated values (.csv)**.
3. Paste each link into `SHEET_CSV` near the top of `index.html`.

Use `___` to mark the gap in a Quiz question, e.g. `She ___ to school every day.`
The site loads the live sheet first, falls back to the last saved copy if it can't
reach it, and falls back to the built-in samples after that.

## Files

- `index.html` — the whole site: layout, styles and games in one file
