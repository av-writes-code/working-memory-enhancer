# User Stories: Working Memory Enhancer

## Date: 2025-02-14

---

## Customer Persona

### "Arjun" - The Working Memory Struggler

**Demographics**: Adult professional/student
**Cognitive Profile**:
- Phonological loop deficit (can't hold numbers, words, sequences in mind)
- Central executive partially impaired (mental math, complex sentence integration)
- Long-term memory is OK
- Gets the "gist" of things when explained simply
- Struggles with precision/detail retention

**Daily Frustrations**:
- Can't remember a phone number long enough to dial it
- Loses track during mental multiplication (forgets intermediate results)
- Can't accurately recall lyrics or quotes even after hearing them many times
- Re-reads paragraphs multiple times because meaning slips away mid-sentence
- Struggles in meetings when rapid-fire information is shared
- Feels "dumb" despite actually being intelligent (the gist understanding proves this)

**Goals**:
- Improve ability to hold numbers in mind
- Get better at mental arithmetic
- Improve reading comprehension for complex material
- Retain spoken/heard information more accurately
- Build confidence in cognitive abilities

---

## Epic 1: Onboarding & Assessment

### US-1.1: Initial Working Memory Assessment
**As** Arjun,
**I want** to take a quick baseline assessment when I first open the app,
**So that** the tool knows my starting working memory capacity and personalizes my training.

**Acceptance Criteria**:
- Assessment takes < 10 minutes
- Tests: digit span (forward + backward), simple arithmetic chain, sentence recall
- Produces a baseline "WM Score" across 3 dimensions (verbal, numerical, comprehension)
- Results explained in plain, non-clinical language
- No jargon like "phonological loop" - just "Your number memory is at level X"

### US-1.2: Personalized Training Plan
**As** Arjun,
**I want** to receive a personalized multi-week training plan based on my assessment,
**So that** I have a clear structure to follow and can see a path to improvement.

**Acceptance Criteria**:
- Plan shows which modules to focus on (based on weakest areas)
- Daily session length: 10-15 minutes
- Shows weekly milestones
- Can adjust intensity (light/moderate/intensive)

### US-1.3: Understanding My Condition
**As** Arjun,
**I want** to understand WHY I struggle with working memory (in simple terms),
**So that** I don't feel broken and understand this is a specific, trainable capacity.

**Acceptance Criteria**:
- Simple visual explanation of working memory (animated or illustrated)
- "You're not dumb - your short-term holding capacity is just smaller than average"
- Links to strategies that help (chunking, external aids)
- Optional: suggests professional evaluation if symptoms match ADHD

---

## Epic 2: Number & Sequence Training

### US-2.1: Number Retention Practice
**As** Arjun,
**I want** to practice remembering number sequences of increasing length,
**So that** I can eventually hold phone numbers and PINs in my mind.

**Acceptance Criteria**:
- Shows a number sequence for a few seconds, then asks to recall
- Starts at 3 digits, progresses to 10+
- Adaptive: adjusts based on performance (gets harder on success, easier on failure)
- Teaches chunking strategy: "Try grouping 4155551234 as 415-555-1234"
- Tracks progress over time (graph showing digit span growth)

### US-2.2: Mental Math Chains
**As** Arjun,
**I want** to practice multi-step mental arithmetic,
**So that** I can hold intermediate results and perform calculations without paper.

**Acceptance Criteria**:
- Chain format: "Start with 7. Multiply by 3. Add 12. Divide by 3. What's the answer?"
- Starts with 2-step chains, progresses to 5+ steps
- Shows the chain step-by-step (not all at once - that tests reading, not WM)
- Option for audio mode (hear the steps, don't read them)
- Teaches strategy: "Round numbers first, adjust later" (e.g., 17x13 = 17x10 + 17x3)
- Difficulty adapts to performance

### US-2.3: Reverse Digit Span
**As** Arjun,
**I want** to practice repeating number sequences in reverse order,
**So that** I strengthen my central executive (manipulation, not just storage).

**Acceptance Criteria**:
- Hear/see sequence, type it backwards
- Starts at 2 digits, progresses based on performance
- Harder than forward span (tests manipulation, not just recall)

---

## Epic 3: Reading & Comprehension Training

### US-3.1: Sentence Comprehension Trainer
**As** Arjun,
**I want** to practice understanding complex sentences,
**So that** I don't lose meaning when reading long or nested sentences.

**Acceptance Criteria**:
- Shows one sentence at a time (not full paragraphs initially)
- Asks comprehension question about the sentence
- Starts with simple sentences, progresses to complex/nested ones
- "The man whom the dog that the cat chased bit ran away" - who ran away?
- Teaches strategy: break sentence into chunks, identify subject-verb-object
- Adaptive difficulty

### US-3.2: Passage Retention
**As** Arjun,
**I want** to read short passages and answer questions WITHOUT re-reading,
**So that** I can retain information from what I read.

**Acceptance Criteria**:
- Passage disappears after reading (timed based on passage length)
- Questions test both gist (should be easy for Arjun) and detail
- Passage complexity increases over time
- Teaches strategy: mentally summarize each paragraph as you read
- Tracks: gist accuracy vs. detail accuracy (expect gist > detail)

### US-3.3: Speed-Controlled Reading
**As** Arjun,
**I want** to practice reading at controlled speeds with comprehension checks,
**So that** I find my optimal reading pace where comprehension doesn't drop.

**Acceptance Criteria**:
- Text appears word-by-word or phrase-by-phrase at adjustable speed (RSVP)
- Comprehension questions after each passage
- Helps find the speed where comprehension stays above 70%
- Teaches: faster isn't better if comprehension drops

---

## Epic 4: Verbal & Auditory Training

### US-4.1: Word Sequence Recall
**As** Arjun,
**I want** to practice remembering sequences of words,
**So that** I can better retain lyrics, instructions, and verbal information.

**Acceptance Criteria**:
- Hear/see a list of words, recall them in order
- Starts with 3 words, progresses
- Includes both common words and less common ones
- Teaches: create a visual story linking the words (memory palace technique)

### US-4.2: Instruction Following
**As** Arjun,
**I want** to practice receiving and executing multi-step instructions,
**So that** I can follow directions in real life without asking people to repeat.

**Acceptance Criteria**:
- Text or audio instructions: "Click the red circle, then the blue square, then type the number 4"
- Starts with 2 steps, progresses to 6+
- Must execute from memory (instructions disappear)
- Teaches: repeat instructions back to yourself mentally (rehearsal strategy)

### US-4.3: Listening Comprehension
**As** Arjun,
**I want** to listen to short audio clips and answer questions,
**So that** I can better retain information from conversations and meetings.

**Acceptance Criteria**:
- Audio clips of 30s-3min (simulating meetings, lectures)
- Questions test both gist and specific details
- Can't replay (tests WM, not repeated listening)
- Teaches: take mental notes on key points as you listen

---

## Epic 5: Classic Cognitive Training

### US-5.1: Dual N-Back
**As** Arjun,
**I want** to practice dual N-back training (the most researched WM paradigm),
**So that** I have access to the standard research-backed approach alongside practical tasks.

**Acceptance Criteria**:
- Visual position + auditory letter dual N-back
- Starts at 2-back, adaptive progression
- Clear instructions for beginners (this task is confusing at first)
- Session stats: accuracy, N-level reached, time

### US-5.2: Information Updating
**As** Arjun,
**I want** to practice tracking and updating changing information,
**So that** I can handle real-world scenarios where info changes rapidly.

**Acceptance Criteria**:
- "The meeting is at 3pm" -> "Changed to 4pm" -> "Also, room changed to B204" -> "What time and room?"
- Starts with 1 item + 1 update, progresses to multiple items + multiple updates
- Simulates: calendar changes, score tracking, order modifications

---

## Epic 6: Strategy & Education

### US-6.1: Compensatory Strategy Library
**As** Arjun,
**I want** to learn proven strategies for managing working memory limitations,
**So that** I can apply them in daily life beyond just training.

**Acceptance Criteria**:
- Strategies with examples:
  - **Chunking**: group information into meaningful units
  - **Rehearsal**: repeat info subvocally to keep it alive
  - **Visualization**: convert words/numbers to images
  - **External aids**: when and how to use notes, apps, voice memos
  - **Simplification**: break complex tasks into steps
- Each strategy linked to relevant training modules
- "Tip of the day" before each training session

### US-6.2: Strategy Practice Mode
**As** Arjun,
**I want** training exercises that explicitly teach me to USE strategies,
**So that** I build habits, not just raw capacity.

**Acceptance Criteria**:
- Same tasks as Epics 2-5 but with strategy prompts:
  - "Try chunking this number into groups of 3"
  - "Create a mental image linking these words"
  - "Summarize each paragraph in one sentence before moving on"
- Guided mode (strategies shown) vs. free mode (apply on your own)

---

## Epic 7: Progress Tracking & Motivation

### US-7.1: Progress Dashboard
**As** Arjun,
**I want** to see my progress over time across all training modules,
**So that** I stay motivated and can see that training is working.

**Acceptance Criteria**:
- Charts showing: digit span over time, math chain length, comprehension scores
- Daily streak counter
- Weekly/monthly summaries
- Comparison to baseline assessment

### US-7.2: Periodic Re-Assessment
**As** Arjun,
**I want** to retake the baseline assessment periodically,
**So that** I can objectively measure my improvement.

**Acceptance Criteria**:
- Same assessment as US-1.1, offered every 2 weeks
- Shows before/after comparison
- Tracks WM Score trend over time

### US-7.3: Session Reminders
**As** Arjun,
**I want** gentle daily reminders to train,
**So that** I maintain consistency (the key to any training).

**Acceptance Criteria**:
- Optional browser notifications or email reminders
- Customizable time
- No guilt-tripping, just a simple "Time for your 10-minute WM session"

---

## Epic 8: Accessibility & Deployment

### US-8.1: Mobile-Responsive Web App
**As** Arjun,
**I want** to use this on my phone, tablet, or computer,
**So that** I can train anywhere.

**Acceptance Criteria**:
- Fully responsive design
- Works on Chrome, Safari, Firefox, Edge
- No app store installation needed (PWA)
- Touch-friendly on mobile

### US-8.2: Offline Capability
**As** Arjun,
**I want** the app to work offline or with poor connectivity,
**So that** I can train during my commute or in low-signal areas.

**Acceptance Criteria**:
- Service worker caches core app
- Training data syncs when back online
- Core exercises work without internet

### US-8.3: Privacy-First Data
**As** Arjun,
**I want** my training data stored locally on my device,
**So that** I don't worry about cognitive performance data being shared.

**Acceptance Criteria**:
- All data in localStorage/IndexedDB by default
- Optional cloud sync (user explicitly opts in)
- No tracking, no analytics without consent
- Can export/delete all data

---

## Story Map Summary

| Epic | Stories | Priority |
|------|---------|----------|
| 1. Onboarding & Assessment | US-1.1, US-1.2, US-1.3 | **P0 - Must Have** |
| 2. Number & Sequence Training | US-2.1, US-2.2, US-2.3 | **P0 - Must Have** |
| 3. Reading & Comprehension | US-3.1, US-3.2, US-3.3 | **P0 - Must Have** |
| 4. Verbal & Auditory | US-4.1, US-4.2, US-4.3 | **P1 - Should Have** |
| 5. Classic Cognitive Training | US-5.1, US-5.2 | **P1 - Should Have** |
| 6. Strategy & Education | US-6.1, US-6.2 | **P0 - Must Have** |
| 7. Progress Tracking | US-7.1, US-7.2, US-7.3 | **P1 - Should Have** |
| 8. Accessibility & Deploy | US-8.1, US-8.2, US-8.3 | **P0 - Must Have** |
