# New Project Briefing — AP English Literature & Composition Simulator

## Architecture & Stack
- Single-file React app (App.jsx) — no routing library, state-driven screens
- Vite build tool, deployed on Vercel (auto-deploys from GitHub main branch)
- All test data in src/data/tests.js (single export: ALL_TESTS array)
- AI scoring via Railway endpoint: https://ap-gov-simulator-production-edc0.up.railway.app/api/score
- CORS: Railway server uses `app.use(cors())` — allows all origins
- Design system: copy ALL tokens from ApHis.jsx verbatim (C{}, font, gradient, noiseBg, backBtn)

## Patterns to Follow (from ApHis.jsx)
- BetaBanner component at top of page
- useMobile() hook for responsive layout
- Timer component with countdown
- LandingScreen → ExamScreen → ResultsScreen flow
- Official exams grouped by year, with dynamic SET badge extracted from label
- Practice Simulations listed separately
- All counts (exam count, simulation count) derived dynamically from ALL_TESTS
- buildReportHTML() for downloadable teacher report
- ErrorBoundary class component wrapping the entire app

## Critical Lessons Learned (from AP English Lang, AP History, AP French)

### Data Format Bugs That Caused Black Screens
1. **Passage format**: PassageDisplay expects `passage: [{ lineStart, text }]` array.
   NEVER use a raw template literal string — it causes `h.map is not a function` crash.
2. **Footnotes format**: Must be array of strings `["1 text", "2 text"]`.
   Never use array of objects `[{ num, text }]` — crashes the renderer.
3. **FRQ type strings**: Must match exactly what the JSX checks:
   - `"poetry-analysis"` (not "poetry")
   - `"prose-analysis"` (not "prose" or "fiction-analysis")
   - `"literary-argument"` (not "argument" or "literary")

### Vercel Deployment Issues
4. **package.json must be in repo root** — not in a subfolder.
5. **Files needed in root**: index.html, package.json, vite.config.js
6. **Build command**: `npm run build` → outputs to `dist/`
7. **No-op commit trick**: Add a comment to App.jsx to trigger fresh deploy.

### Scoring Integration
8. **Railway endpoint**: POST to `https://ap-gov-simulator-production-edc0.up.railway.app/api/score`
9. **Request body**: `{ systemPrompt: "...", userPrompt: "..." }` with Content-Type: application/json
10. **Error handling**: Show graceful message if scoring fails, don't crash.

### UI/UX Patterns
11. **Bottom action buttons**: 3 equal-width buttons at page bottom (Retry, Download, All Exams)
12. **Download Report button**: Also inside score card, centered, 280px, purple
13. **Dynamic badge**: `test.label.match(/Set (\d+)/)?.[1] ?? "1"` for SET number
14. **Official exam page**: Groups by year, shows SET 1/SET 2 badges, dynamic count

### Visual Sources (Not applicable to AP Lit, but good to know)
15. Charts/graphs: Inline SVG components in SimFigures.jsx
16. Cartoons/illustrations: `<img>` tags pointing to `/figures/filename.png`
17. Rule comment at top of SimFigures.jsx documenting the convention

### Git & GitHub
18. **Always `npx vite build` before committing** — catches syntax errors
19. **Push to main** — Vercel auto-deploys
20. **Repo name**: fspadea/ap-english-lit-simulation

## What's Different About AP English Lit

| Feature | AP English Lang | AP English Lit |
|---------|----------------|----------------|
| MC count | 45 | 55 |
| MC choices | 4 (A-D) | 5 (A-E) |
| MC passages | Nonfiction | Fiction, poetry, drama |
| MC set types | Reading + Writing | All literary analysis |
| FRQ 1 | Synthesis (6 sources) | Poetry Analysis |
| FRQ 2 | Rhetorical Analysis | Prose Fiction Analysis |
| FRQ 3 | Argument (stimulus quote) | Literary Argument (pick own work) |
| Sources/synthesis | Yes | No |
| Visual sources | Yes (charts, cartoons) | No |
| Audio | No | No |

## Workflow for Adding Official Exams
1. User provides PDF from reference folder
2. Claude extracts all 3 FRQs verbatim
3. Passages formatted as `[{ lineStart, text }]` arrays
4. Added to ALL_TESTS with id like `official2025s1`
5. Build, commit, push — Vercel auto-deploys
6. No visual sources needed (AP Lit has no charts/cartoons)

## Reference Files Available
```
reference/ap-english-literature/
  ap-english-literature-and-composition-course-and-exam-description.pdf  ← CED
  ap25-frq-english-literature-set-1.pdf
  ap25-frq-english-literature-set-2.pdf
  ap25-sg-english-literature-set-1.pdf                                   ← Scoring guidelines
  ap25-apc-english-literature-q1-set-1.pdf through q3-set-2.pdf         ← Individual Q samples
  ap24-frq-english-lit-set-1.pdf
  ap24-frq-english-lit-set-2.pdf
  ap23-frq-english-lit-set-1.pdf
  ap23-frq-english-lit-set-2.pdf
```
