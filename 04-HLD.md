# High-Level Design (HLD)
# Project: MemoryForge - Working Memory Enhancement Platform

## Date: 2025-02-14
## Version: 1.0

---

## 1. Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                       │
│                                                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │Assessment│ │ Training  │ │ Strategy │ │ Progress │   │
│  │  Module  │ │ Modules   │ │  Library │ │Dashboard │   │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘   │
│       │             │            │             │          │
│  ┌────▼─────────────▼────────────▼─────────────▼─────┐   │
│  │              Core Engine                           │   │
│  │  ┌────────────┐ ┌──────────────┐ ┌─────────────┐ │   │
│  │  │  Adaptive   │ │   Session    │ │   Scoring   │ │   │
│  │  │  Difficulty │ │   Manager    │ │   Engine    │ │   │
│  │  └────────────┘ └──────────────┘ └─────────────┘ │   │
│  └───────────────────────┬───────────────────────────┘   │
│                          │                                │
│  ┌───────────────────────▼───────────────────────────┐   │
│  │              Data Layer                            │   │
│  │  ┌──────────────┐  ┌──────────────┐               │   │
│  │  │  IndexedDB    │  │  localStorage │               │   │
│  │  │  (sessions,   │  │  (settings,   │               │   │
│  │  │   scores,     │  │   preferences)│               │   │
│  │  │   progress)   │  │               │               │   │
│  │  └──────────────┘  └──────────────┘               │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │              Service Worker (PWA / Offline)        │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
└─────────────────────────────────────────────────────────┘
                          │
                          │ Static Deploy
                          ▼
              ┌───────────────────────┐
              │  Vercel / Cloudflare  │
              │  (Free Tier Hosting)  │
              └───────────────────────┘
```

### Key Design Decision: Zero-Server Architecture
- **No backend server** - everything runs in the browser
- **No database** - IndexedDB + localStorage for persistence
- **No API costs** - adaptive algorithms are deterministic, not ML-based
- **No auth server** - no accounts needed (optional future addition)
- This means: **$0 hosting cost** on Vercel/Cloudflare free tier

---

## 2. Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | SSR for landing page SEO, client-side for exercises. Most popular React meta-framework. |
| **Language** | TypeScript | Type safety for complex exercise logic and scoring algorithms |
| **Styling** | Tailwind CSS 4 | Rapid UI development, responsive by default, small bundle |
| **State Management** | Zustand | Lightweight, simple, no boilerplate. Perfect for local-first apps. |
| **Data Storage** | IndexedDB (via Dexie.js) | Structured storage for sessions, scores, history. Dexie wraps IndexedDB with clean API. |
| **Charts** | Recharts | Lightweight React charting for progress dashboard |
| **Audio** | Web Audio API + Speech Synthesis | For listening comprehension and verbal exercises (Phase 2) |
| **PWA** | next-pwa / Serwist | Service worker for offline support |
| **Testing** | Vitest + React Testing Library + Playwright | Unit + integration + E2E |
| **Deployment** | Vercel (free tier) | Zero-config Next.js deployment. Free for personal projects. |
| **CI/CD** | GitHub Actions | Free for public repos. Lint + test + deploy pipeline. |

---

## 3. Module Architecture

### 3.1 Assessment Module

```
Assessment Flow:
┌────────┐    ┌────────────┐    ┌────────────┐    ┌──────────┐
│Welcome │───▶│ Digit Span │───▶│ Math Chain │───▶│ Sentence │
│Screen  │    │ Test       │    │ Test       │    │ Recall   │
└────────┘    └─────┬──────┘    └─────┬──────┘    └────┬─────┘
                    │                  │                 │
                    ▼                  ▼                 ▼
              ┌─────────────────────────────────────────────┐
              │           Scoring Engine                     │
              │  - Raw scores per test                       │
              │  - Normalized WM Score (0-100)               │
              │  - Dimension scores (verbal, numerical,      │
              │    comprehension)                             │
              │  - Recommended training focus                 │
              └──────────────────────┬──────────────────────┘
                                     │
                                     ▼
              ┌──────────────────────────────────────────────┐
              │           Results Screen                      │
              │  - Plain-language explanation                  │
              │  - Personalized training plan                  │
              │  - "Start Training" CTA                        │
              └──────────────────────────────────────────────┘
```

**Scoring Algorithm:**
- Digit Span: max sequence length recalled correctly (forward + backward averaged)
- Math Chain: max chain length solved correctly
- Sentence Recall: % of key details recalled from 3 sentences of increasing complexity
- WM Score = weighted average normalized to 0-100 scale

### 3.2 Training Modules (Each follows same pattern)

```
Module Pattern:
┌──────────────┐
│  Module Home  │  Shows current level, streak, strategy tip
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Exercise    │  Present stimulus → Wait → Collect response
│  Screen      │  Timer, progress bar, optional strategy hint
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Feedback    │  Correct/Incorrect, show correct answer,
│  Screen      │  strategy suggestion if wrong
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Adaptive    │  2-correct-in-a-row → increase difficulty
│  Engine      │  1-wrong → decrease difficulty
│  Decision    │  Track "sweet spot" (70-80% accuracy zone)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Session     │  10-15 trials per session
│  Summary     │  Score, best level, time, strategy used
└──────────────┘
```

### 3.3 Adaptive Difficulty Engine

**Algorithm: Psychometric Staircasing (2-up-1-down)**

```typescript
interface AdaptiveState {
  currentLevel: number;       // Current difficulty (e.g., digit length)
  consecutiveCorrect: number; // Counter for streak
  history: TrialResult[];     // Last N trials
  targetAccuracy: number;     // 0.75 (aim for 75% sweet spot)
}

function adjustDifficulty(state: AdaptiveState, correct: boolean): number {
  if (correct) {
    state.consecutiveCorrect++;
    if (state.consecutiveCorrect >= 2) {
      state.currentLevel++;        // 2 correct → go harder
      state.consecutiveCorrect = 0;
    }
  } else {
    state.currentLevel = Math.max(1, state.currentLevel - 1); // 1 wrong → go easier
    state.consecutiveCorrect = 0;
  }
  return state.currentLevel;
}
```

**Why 2-up-1-down?** This converges on ~70.7% accuracy - the sweet spot where training is challenging but not frustrating. This is a standard psychophysics method used in research.

### 3.4 Data Schema (IndexedDB via Dexie.js)

```typescript
// User profile and settings
interface UserProfile {
  id: string;                    // Auto-generated UUID
  createdAt: Date;
  settings: {
    dailyGoalMinutes: number;    // Default: 10
    reminderTime?: string;       // Optional HH:MM
    theme: 'light' | 'dark' | 'system';
  };
}

// Assessment results
interface AssessmentResult {
  id: string;
  date: Date;
  digitSpanForward: number;      // Max span achieved
  digitSpanBackward: number;
  mathChainMax: number;          // Max chain length
  sentenceRecallScore: number;   // 0-100
  overallWMScore: number;        // 0-100 composite
  dimensionScores: {
    verbal: number;
    numerical: number;
    comprehension: number;
  };
}

// Training session
interface TrainingSession {
  id: string;
  date: Date;
  moduleId: string;              // 'number-retention' | 'math-chains' | etc.
  durationSeconds: number;
  trialsCompleted: number;
  trialsCorrect: number;
  accuracy: number;              // 0-1
  maxLevel: number;              // Highest difficulty reached
  endLevel: number;              // Difficulty at session end
  strategyUsed?: string;         // Which strategy was prompted
}

// Daily summary (for streaks and dashboard)
interface DailySummary {
  date: string;                  // YYYY-MM-DD
  totalMinutes: number;
  sessionsCompleted: number;
  modulesUsed: string[];
  averageAccuracy: number;
}
```

---

## 4. Page Structure

```
/                          → Landing page (SSR, SEO-optimized)
/assess                    → Baseline assessment flow
/assess/results            → Assessment results + plan
/train                     → Training hub (module selection)
/train/numbers             → Number retention exercises
/train/math                → Mental math chain exercises
/train/reverse-digits      → Reverse digit span exercises
/train/sentences           → Sentence comprehension exercises
/train/passages            → Passage retention exercises
/train/n-back              → Dual N-back (Phase 2)
/train/listening           → Listening comprehension (Phase 2)
/train/instructions        → Instruction following (Phase 2)
/strategies                → Strategy library
/strategies/[slug]         → Individual strategy detail
/progress                  → Progress dashboard + charts
/settings                  → User preferences
```

---

## 5. Component Hierarchy

```
<App>
├── <Layout>
│   ├── <Navbar />            (Logo, nav links, streak counter)
│   ├── <main>
│   │   └── [Page Content]
│   └── <Footer />            (Disclaimer, GitHub link, version)
│
├── <AssessmentFlow>
│   ├── <AssessmentIntro />
│   ├── <DigitSpanTest />
│   ├── <MathChainTest />
│   ├── <SentenceRecallTest />
│   └── <AssessmentResults />
│
├── <TrainingHub>
│   ├── <ModuleCard />         (Per module: icon, name, level, last score)
│   └── <DailyPlan />         (Suggested today's exercises)
│
├── <ExerciseScreen>           (Shared exercise wrapper)
│   ├── <StimulusDisplay />    (Shows the stimulus: number, sentence, etc.)
│   ├── <ResponseInput />      (Text input, button click, selection)
│   ├── <Timer />              (Optional countdown)
│   ├── <StrategyHint />       (Contextual tip)
│   └── <FeedbackPanel />      (Correct/incorrect + explanation)
│
├── <ProgressDashboard>
│   ├── <WMScoreCard />        (Current overall score)
│   ├── <StreakCard />          (Current streak)
│   ├── <ModuleProgressChart /> (Per-module line charts)
│   └── <SessionHistory />     (Recent sessions table)
│
└── <StrategyLibrary>
    ├── <StrategyCard />       (Preview card per strategy)
    └── <StrategyDetail />     (Full explanation + examples)
```

---

## 6. Exercise Content Generation

### Numbers/Sequences:
- **Generated algorithmically** at runtime (random digit sequences of length N)
- No pre-stored content needed

### Mental Math:
- **Generated algorithmically** - random operations ensuring solvable integer results
- Operators: +, -, x, / (division only when result is integer)
- Constraints: no negative intermediate results at lower levels

### Sentences:
- **Pre-authored content bank** (100+ sentences at 5 difficulty levels)
- Stored as JSON in the codebase
- Levels based on: sentence length, clause nesting depth, vocabulary complexity
- Can crowdsource more via GitHub contributions

### Passages:
- **Pre-authored or curated** from public domain texts
- 50+ passages at 5 difficulty levels
- Paired with comprehension questions (gist + detail)

### Strategy Content:
- **Pre-authored** educational content
- 5-8 strategies with examples, illustrations, and practice suggestions

---

## 7. Deployment Architecture

```
Developer                    GitHub                     Vercel
   │                           │                          │
   │  git push                 │                          │
   ├──────────────────────────▶│                          │
   │                           │  GitHub Actions          │
   │                           │  (lint + test)           │
   │                           │──────────┐               │
   │                           │          │               │
   │                           │◀─────────┘               │
   │                           │                          │
   │                           │  Webhook trigger         │
   │                           ├─────────────────────────▶│
   │                           │                          │  Build + Deploy
   │                           │                          │──────┐
   │                           │                          │      │
   │                           │                          │◀─────┘
   │                           │                          │
   │                           │        Live at           │
   │                           │  memoryforge.vercel.app  │
   │                           │                          │
```

### Hosting: Vercel Free Tier
- 100GB bandwidth/month (more than enough)
- Automatic HTTPS
- Preview deployments per PR
- Zero config for Next.js

### Domain (Optional):
- Custom domain can be added later (free with Vercel)
- Or use default: `memoryforge.vercel.app`

---

## 8. Performance Budget

| Metric | Target | Strategy |
|---|---|---|
| First Contentful Paint | < 1.5s | SSR landing page, minimal JS |
| Largest Contentful Paint | < 2.5s | Optimize images, lazy load modules |
| Total Bundle Size | < 300KB gzipped | Tree shaking, dynamic imports per module |
| Time to Interactive | < 3s | Code split exercise modules |
| Cumulative Layout Shift | < 0.1 | Fixed layouts, font preload |

---

## 9. Security Considerations

| Concern | Mitigation |
|---|---|
| XSS in user-generated input | Sanitize all inputs. React's default escaping. CSP headers. |
| Data privacy | Local-only storage. No server transmission. |
| Content injection | Exercise content is static/algorithmic, not user-submitted. |
| Service worker hijacking | Strict CSP. Vercel's automatic HTTPS. |

---

## 10. Phase Plan

### Phase 1 (MVP) - Target: 4-6 weeks
- Landing page
- Assessment module (3 tests + scoring)
- Number retention trainer
- Mental math chains trainer
- Sentence comprehension trainer
- Strategy library (5 strategies)
- Basic progress dashboard
- Mobile-responsive
- Deploy to Vercel

### Phase 2 - Target: 4-6 weeks after MVP
- Reverse digit span trainer
- Passage retention trainer
- Dual N-back module
- Listening comprehension (audio)
- Instruction following module
- Information updating module
- Strategy practice mode (guided)
- PWA + offline support
- Periodic re-assessment
- Session reminders

### Phase 3 (Future) - Community-driven
- Content crowdsourcing (more sentences, passages)
- Multi-language support
- Accessibility audit + fixes
- Optional cloud sync
- Research collaboration features
