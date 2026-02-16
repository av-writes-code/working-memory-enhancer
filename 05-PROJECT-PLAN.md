# Project Plan & Master TODO List
# Project: MemoryForge - Working Memory Enhancement Platform

## Date: 2025-02-14
## Last Updated: 2025-02-14

---

## Project Status: PLANNING COMPLETE - READY FOR IMPLEMENTATION

---

## Master Checklist

### PHASE 0: Research & Planning [COMPLETE]
- [x] Deep research on working memory conditions and cognitive science
- [x] Market research on existing tools (commercial + open-source)
- [x] Gap analysis and unique value proposition definition
- [x] Customer persona definition ("Arjun")
- [x] User stories creation (8 epics, 22 stories)
- [x] Business Requirements Document (BRD)
- [x] High-Level Design (HLD)
- [x] Tech stack selection
- [x] Project plan creation (this document)

### PHASE 1: Project Setup
- [ ] Initialize Git repository
- [ ] Create GitHub remote repo (public)
- [ ] Initialize Next.js 15 project with TypeScript + Tailwind CSS 4
- [ ] Configure ESLint + Prettier
- [ ] Set up Vitest + React Testing Library
- [ ] Set up Dexie.js for IndexedDB
- [ ] Set up Zustand for state management
- [ ] Create project CLAUDE.md with conventions
- [ ] Create TESTING.md
- [ ] Create initial folder structure
- [ ] First commit + push to GitHub
- [ ] Set up Vercel deployment (connect to GitHub repo)
- [ ] Verify deploy pipeline works (push → build → deploy)

### PHASE 2: Core Engine
- [ ] Build adaptive difficulty engine (2-up-1-down staircasing)
- [ ] Write unit tests for adaptive engine (10+ tests)
- [ ] Build scoring engine (per-module + composite WM Score)
- [ ] Write unit tests for scoring engine (10+ tests)
- [ ] Build session manager (start, track, end, save)
- [ ] Write unit tests for session manager
- [ ] Build data layer (Dexie.js schema, CRUD operations)
- [ ] Write unit tests for data layer
- [ ] Verify all tests pass: `npm test` → N/N passing

### PHASE 3: UI Foundation
- [ ] Build Layout component (Navbar, Footer, main content area)
- [ ] Build responsive navigation
- [ ] Build landing page (/) with SEO
- [ ] Build common exercise components:
  - [ ] StimulusDisplay (shows number/sentence/etc.)
  - [ ] ResponseInput (text input, button selection)
  - [ ] Timer component
  - [ ] FeedbackPanel (correct/incorrect + explanation)
  - [ ] StrategyHint component
  - [ ] ProgressBar component
- [ ] Write component tests
- [ ] Verify mobile responsiveness on 3 breakpoints
- [ ] Push to GitHub + verify Vercel deploy

### PHASE 4: Assessment Module
- [ ] Build AssessmentIntro screen
- [ ] Build DigitSpanTest (forward)
  - [ ] Generate random digit sequences
  - [ ] Present sequence → hide → collect response
  - [ ] Score: max length recalled correctly
- [ ] Build DigitSpanTest (backward)
- [ ] Build MathChainTest
  - [ ] Generate random arithmetic chains
  - [ ] Present step-by-step → collect final answer
  - [ ] Score: max chain length correct
- [ ] Build SentenceRecallTest
  - [ ] Create sentence bank (3 difficulty levels, 10+ per level)
  - [ ] Present sentence → hide → ask comprehension question
  - [ ] Score: % correct
- [ ] Build AssessmentResults screen
  - [ ] Calculate composite WM Score
  - [ ] Plain-language explanation
  - [ ] Recommended training focus
- [ ] Write tests for each assessment component
- [ ] E2E test: full assessment flow
- [ ] Push + deploy + manual QA

### PHASE 5: Training Module - Numbers
- [ ] Build Number Retention exercise
  - [ ] Random sequence generation (length = currentLevel)
  - [ ] Display for calculated time → hide → input
  - [ ] Integration with adaptive engine
  - [ ] Chunking strategy hints
- [ ] Build Mental Math Chains exercise
  - [ ] Chain generation (ensure integer results, no negatives)
  - [ ] Step-by-step presentation
  - [ ] Integration with adaptive engine
  - [ ] Strategy hints (rounding, decomposition)
- [ ] Build module home screen (level, streak, tip)
- [ ] Build session summary screen
- [ ] Write unit tests for generators (10+ tests)
- [ ] Write component tests
- [ ] E2E test: complete a number training session
- [ ] Push + deploy + manual QA

### PHASE 6: Training Module - Reading
- [ ] Create sentence content bank
  - [ ] 20+ simple sentences (Level 1-2)
  - [ ] 20+ moderate sentences (Level 3)
  - [ ] 20+ complex/nested sentences (Level 4-5)
  - [ ] Comprehension questions for each
- [ ] Build Sentence Comprehension exercise
  - [ ] Display sentence → comprehension question
  - [ ] Adaptive difficulty (sentence complexity)
  - [ ] Strategy hints (clause identification)
- [ ] Build Passage Retention exercise (if time)
  - [ ] Create passage bank (10+ passages, 3 difficulty levels)
  - [ ] Timed display → questions
  - [ ] Gist vs. detail question types
- [ ] Write content validation tests
- [ ] Write component tests
- [ ] Push + deploy + manual QA

### PHASE 7: Strategy Library
- [ ] Write strategy content:
  - [ ] Chunking (with examples for numbers, text, instructions)
  - [ ] Subvocal Rehearsal (repeat in your head)
  - [ ] Visualization (convert to mental images)
  - [ ] External Aids (when and how to use notes/apps)
  - [ ] Simplification (break complex into simple)
- [ ] Build Strategy Library page (/strategies)
- [ ] Build individual Strategy Detail pages
- [ ] Link strategies to relevant training modules
- [ ] Push + deploy

### PHASE 8: Progress Dashboard
- [ ] Build WM Score card (current score from latest assessment)
- [ ] Build streak tracker (consecutive days trained)
- [ ] Build per-module progress charts (Recharts line graphs)
- [ ] Build session history table
- [ ] Build data export feature (JSON download)
- [ ] Build data reset feature (with confirmation)
- [ ] Write tests for chart data transformations
- [ ] Push + deploy

### PHASE 9: Polish & Ship MVP
- [ ] Full manual QA on desktop Chrome
- [ ] Full manual QA on mobile Chrome
- [ ] Full manual QA on Safari
- [ ] Fix any responsive issues
- [ ] Add medical disclaimer to landing page + footer
- [ ] Add "About" section explaining the science
- [ ] Write README.md for GitHub
- [ ] Create CONTRIBUTING.md
- [ ] Lighthouse audit (target: 90+ all categories)
- [ ] Final push + deploy
- [ ] Announce / share

### PHASE 10: Post-MVP (Phase 2 Features)
- [ ] Reverse digit span trainer
- [ ] Passage retention trainer (if not done in Phase 6)
- [ ] Dual N-back module
- [ ] Word sequence recall
- [ ] Instruction following module
- [ ] Information updating module
- [ ] Listening comprehension (Web Audio API)
- [ ] Strategy practice mode (guided)
- [ ] PWA + service worker (offline)
- [ ] Periodic re-assessment (bi-weekly prompt)
- [ ] Session reminders (browser notifications)

---

## Development Conventions

### Branching Strategy:
- `main` - production (auto-deploys to Vercel)
- `develop` - integration branch
- `feature/xxx` - feature branches off develop
- PR from feature → develop → main

### Commit Convention:
```
feat: add number retention exercise
fix: correct adaptive engine edge case at level 1
test: add unit tests for scoring engine
docs: update README with setup instructions
style: responsive fixes for mobile nav
refactor: extract common exercise wrapper component
```

### Testing Rules (from CLAUDE.md):
1. Build → Verify → Proceed (always run tests before moving on)
2. Mark Complete = Show Proof (paste test output)
3. No "Fix Later" (fix failures immediately)
4. Test pyramid: 70% Unit | 20% Integration | 10% E2E

### Definition of Done (per phase):
- [ ] All code written and reviewed
- [ ] All tests passing (show `npm test` output)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Mobile responsive verified
- [ ] Pushed to GitHub
- [ ] Deployed on Vercel
- [ ] TESTING.md updated

---

## File Structure (Target)

```
memoryforge/
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   └── icons/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Landing page
│   │   ├── assess/
│   │   │   ├── page.tsx                # Assessment flow
│   │   │   └── results/page.tsx        # Results
│   │   ├── train/
│   │   │   ├── page.tsx                # Training hub
│   │   │   ├── numbers/page.tsx
│   │   │   ├── math/page.tsx
│   │   │   ├── sentences/page.tsx
│   │   │   ├── passages/page.tsx
│   │   │   └── n-back/page.tsx
│   │   ├── strategies/
│   │   │   ├── page.tsx                # Strategy library
│   │   │   └── [slug]/page.tsx         # Strategy detail
│   │   ├── progress/
│   │   │   └── page.tsx                # Dashboard
│   │   └── settings/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── exercise/
│   │   │   ├── StimulusDisplay.tsx
│   │   │   ├── ResponseInput.tsx
│   │   │   ├── Timer.tsx
│   │   │   ├── FeedbackPanel.tsx
│   │   │   ├── StrategyHint.tsx
│   │   │   └── ProgressBar.tsx
│   │   ├── assessment/
│   │   │   ├── DigitSpanTest.tsx
│   │   │   ├── MathChainTest.tsx
│   │   │   └── SentenceRecallTest.tsx
│   │   ├── dashboard/
│   │   │   ├── WMScoreCard.tsx
│   │   │   ├── StreakCard.tsx
│   │   │   └── ModuleProgressChart.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   ├── engine/
│   │   ├── adaptive.ts                 # Adaptive difficulty algorithm
│   │   ├── scoring.ts                  # Scoring logic
│   │   ├── session.ts                  # Session management
│   │   └── generators/
│   │       ├── digits.ts               # Random digit generation
│   │       ├── mathChains.ts           # Math chain generation
│   │       └── sentences.ts            # Sentence selection
│   ├── data/
│   │   ├── db.ts                       # Dexie.js database setup
│   │   ├── sentences.json              # Sentence content bank
│   │   ├── passages.json               # Passage content bank
│   │   └── strategies.json             # Strategy content
│   ├── store/
│   │   ├── useAppStore.ts              # Global app state (Zustand)
│   │   └── useExerciseStore.ts         # Exercise session state
│   ├── hooks/
│   │   ├── useTimer.ts
│   │   ├── useAdaptive.ts
│   │   └── useSession.ts
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts                    # Shared TypeScript types
├── tests/
│   ├── unit/
│   │   ├── adaptive.test.ts
│   │   ├── scoring.test.ts
│   │   ├── generators.test.ts
│   │   └── session.test.ts
│   ├── integration/
│   │   ├── assessment-flow.test.tsx
│   │   └── training-session.test.tsx
│   └── e2e/
│       ├── assessment.spec.ts
│       └── training.spec.ts
├── .github/
│   └── workflows/
│       └── ci.yml                      # Lint + test + type-check
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
├── package.json
├── CLAUDE.md
├── TESTING.md
├── README.md
├── CONTRIBUTING.md
└── LICENSE                             # MIT
```

---

## Estimated Timeline

| Phase | Description | Estimated Effort |
|---|---|---|
| Phase 0 | Research & Planning | DONE |
| Phase 1 | Project Setup | 1 session |
| Phase 2 | Core Engine | 1-2 sessions |
| Phase 3 | UI Foundation | 1-2 sessions |
| Phase 4 | Assessment Module | 2-3 sessions |
| Phase 5 | Number Training | 2-3 sessions |
| Phase 6 | Reading Training | 2-3 sessions |
| Phase 7 | Strategy Library | 1 session |
| Phase 8 | Progress Dashboard | 1-2 sessions |
| Phase 9 | Polish & Ship | 1-2 sessions |
| **Total MVP** | | **~12-18 sessions** |
