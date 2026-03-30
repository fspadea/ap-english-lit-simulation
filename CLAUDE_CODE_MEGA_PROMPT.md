# AP English Literature & Composition — Simulator Build Prompt

## INSTRUCTIONS
Please follow the AP Simulator Framework v1.6 (attached).
Use the attached ApHis.jsx for all shared components, design tokens,
and patterns — copy them verbatim.

## SUBJECT
- Name: AP English Literature & Composition
- Short name: AP English Lit
- Emoji: 📖
- hasAudio: false
- hasConversation: false

## EXAM STRUCTURE

### SECTION I — Multiple Choice
- Questions: 55 total
- Time: 60 minutes
- Weight: 45% of exam score
- Answer choices: 5 options (A/B/C/D/E)
- Structure:
  - ~5 sets of literary passages (mix of poetry + prose fiction)
  - Each set: 1 passage/poem + 8–13 questions
  - Passages span pre-20th century to contemporary
  - Genres: poetry, short fiction excerpts, novel excerpts, drama excerpts
  - Questions test: character, setting, structure, narration, figurative language,
    literary argument, tone, theme, word choice, imagery, contrast/comparison

### SECTION II — Free Response (3 essays)
- Time: 2 hours total (no separate reading period)
- Weight: 55% of exam score
- Each essay scored 0–6 pts (Thesis 0–1, Evidence/Commentary 0–4, Sophistication 0–1)
- FRQ 1 — Poetry Analysis (~40 min):
    Given a poem, analyze how literary elements contribute to meaning
- FRQ 2 — Prose Fiction Analysis (~40 min):
    Given a prose fiction passage, analyze how literary elements contribute to meaning
- FRQ 3 — Literary Argument (~40 min):
    Given a literary concept/theme prompt, write an argument using evidence
    from a work of fiction chosen by the student (no passage provided)

## KEY DIFFERENCES FROM AP ENGLISH LANG
- This is LITERATURE (fiction, poetry, drama) not LANGUAGE (nonfiction, rhetoric)
- MC passages are fiction/poetry, NOT nonfiction
- 55 MC questions (not 45), 5 choices A-E (not 4 choices A-D)
- FRQ 1 = Poetry Analysis (not Synthesis — no sources)
- FRQ 2 = Prose Fiction Analysis (not Rhetorical Analysis of nonfiction)
- FRQ 3 = Literary Argument (student picks own work, not a provided stimulus quote)
- No sources/synthesis essay at all
- No "reading" vs "writing" MC sets — ALL sets are literary passage analysis

## SCORING
```
composite = (mcCorrect/55 * 45) + (frqTotal/18 * 55)
5: >= 75  |  4: >= 60  |  3: >= 45  |  2: >= 30  |  1: below 30
Always clamp to 1–5.
```

## MC FORMAT
ApHis/ApGov choices array uses interleaved format:
```js
choices: ["A","text A","B","text B","C","text C","D","text D","E","text E"]
```
5 choices per question (A/B/C/D/E).
answer field: "A" | "B" | "C" | "D" | "E"

## MC SET STRUCTURE
Each MC set has:
- A literary passage (poem or prose fiction excerpt)
- 8–13 questions about that passage
- mcSets array with: id, title, type ("poetry" or "prose"), passage (template literal string)

Suggested set layout for 55 questions across 5 sets:
- Set 1: Poetry (pre-20th century) — 11 Qs
- Set 2: Prose fiction (20th century) — 11 Qs
- Set 3: Poetry (20th/21st century) — 11 Qs
- Set 4: Prose fiction (pre-20th century) — 11 Qs
- Set 5: Prose fiction or drama (contemporary) — 11 Qs

## PASSAGE DISPLAY
- Poetry: display with line numbers on the left (same PassageDisplay component as AP English Lang)
- Prose fiction: display with line numbers on the left
- Both use the { lineStart, text } array format — NEVER raw strings (strings crash the app)

## FRQ TASK COMPONENTS

### PoetryAnalysisTask
- Shows the poem with line numbers (PassageDisplay component)
- Shows context intro + prompt
- Student writes essay in textarea
- Include footnotes when present

### ProseAnalysisTask
- Shows prose fiction passage with line numbers (PassageDisplay component)
- Shows context intro + prompt
- Student writes essay in textarea
- Include footnotes when present

### LiteraryArgumentTask
- Shows the prompt ONLY (no passage provided)
- Prompt gives a literary concept/theme and asks student to pick a work
- Student writes essay in textarea
- Include standard instruction: "In your response you should do the following..."

## FRQ DATA FORMAT IN tests.js
```js
{
  num: 1,
  type: "poetry-analysis",
  title: "Poetry Analysis",
  points: 6,
  suggestedTime: 40,
  author: "Author Name",
  source: "Poem title and publication info",
  context: "Context paragraph about poet and poem...",
  prompt: "Write an essay that analyzes how [poet] uses literary elements and techniques to...",
  passage: [
    { lineStart: 1, text: "First line of poem" },
    { lineStart: 2, text: "Second line of poem" },
    ...
  ],
  footnotes: ["1 footnote text", "2 footnote text"],
  rubric: [...],
  scoringPrompt: "..."
}
```

## AI SCORING RUBRIC (same structure for all 3 FRQ types)
Row 1 — Thesis (0–1 pt): defensible interpretation/claim
Row 2 — Evidence & Commentary (0–4 pts):
  0: no evidence; 1: general evidence; 2: specific evidence;
  3: specific + explanation; 4: specific + thorough commentary
Row 3 — Sophistication (0–1 pt): complex literary understanding,
  nuanced interpretation, effective style, illuminating comparison

### Tailored scoring by type:
- Poetry Analysis: look for analysis of literary elements (imagery, metaphor,
  tone, structure, diction, sound devices) and how they contribute to meaning
- Prose Fiction Analysis: look for analysis of narrative techniques (point of view,
  characterization, setting, pacing, syntax, diction, figurative language)
- Literary Argument: look for a clear interpretive claim supported by evidence
  from a self-selected literary work (novel, play, epic poem). Student must
  demonstrate knowledge of the work, not just summarize plot.

## FILE STRUCTURE
```
ap-english-lit-simulation/
  src/
    App.jsx
    main.jsx
    data/tests.js
    figures/SimFigures.jsx
  public/
    figures/
  index.html
  package.json
  vite.config.js
```

## OFFICIAL EXAM DATA
Do NOT include official exams in the first build.
Start with 1 full simulation only.
Official exams will be added one at a time from PDFs in:
  /Users/federico.spadea/Documents/EazyAP/reference/ap-english-literature/

Available PDFs:
- 2025 Set 1 & Set 2 (full FRQ + scoring guidelines + individual question samples)
- 2024 Set 1 & Set 2
- 2023 Set 1 & Set 2

## IMPORTANT NOTES
- No audio needed
- No synthesis essay (that's AP Lang, not AP Lit)
- FRQ 3 provides NO passage — student picks their own literary work
- All MC passages must be literary (fiction, poetry, drama) — NO nonfiction
- Use the Railway scoring endpoint pattern from ApHis.jsx
- SimFigures.jsx: create the file even if empty (no visual sources in AP Lit)
- Include ErrorBoundary component (learned from AP English Lang crashes)

## QUALITY CHECKS
Before finishing, verify:
- Exactly 55 MC questions (count them)
- Zero duplicate question IDs
- Zero duplicate question content
- All passages are literary (fiction/poetry/drama) — NO nonfiction
- 5 answer choices per MC question (A/B/C/D/E)
- FRQ passages use array format { lineStart, text } — NOT strings
- FRQ 3 has no passage (literary argument = student picks own work)
- Landing page counts are dynamic from ALL_TESTS
- Set number badges are dynamic from test.label
