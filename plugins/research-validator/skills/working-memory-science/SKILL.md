---
name: working-memory-science
description: Use when building, reviewing, or discussing working memory assessments, training tasks, normative data, or the neuroscience of working memory. Activates for assessment module design, training task calibration, interpreting user scores, and any claim about WM capacity, components, or improvement. Also use for /fact-check when the claim is about WM specifically.
---

# Working Memory Science — Normative Data & Key Findings

## Baddeley's Multicomponent Model (2000, 2012)

| Component | Function | Assessment | MemoryForge Target |
|-----------|----------|------------|-------------------|
| **Phonological Loop** | Stores/rehearses verbal-acoustic info (~2 sec buffer) | Digit Span Forward, word lists | Number retention, lyrics recall |
| **Central Executive** | Manipulates, updates, switches attention | Digit Span Backward/Sequencing, N-back, OSPAN | Mental math, complex sentence parsing |
| **Visuospatial Sketchpad** | Stores visual/spatial layouts | Corsi Blocks, Visual Patterns Test | NOT primary target (user reports intact) |
| **Episodic Buffer** | Integrates info across subsystems and LTM | Sentence recall, prose memory | Sentence comprehension (partial target) |

## Normative Data for App-Based Assessments

### Digit Span (Primary WM Screen)

| Measure | Adult Average | Range | Impairment Flag | Source |
|---------|--------------|-------|-----------------|--------|
| Forward span | **7 digits** | 5–9 | **Below 5** | Wechsler (2008)¹ |
| Backward span | **5 digits** | 4–7 | **Below 3** | Wechsler (2008) |
| Sequencing span | ~5 digits | 3–7 | Below 3 | WAIS-IV manual |
| **Forward − Backward gap** | 1–2 digits | 0–3 | **Gap ≥ 3** = executive deficit | Clinical convention |

> ¹ Note: Miller (1956) 'Magical Number Seven' concerns information chunks, not digit span norms specifically.

### Corsi Block Test (Visuospatial WM)

| Measure | Average | Range | Impairment | Source |
|---------|---------|-------|------------|--------|
| Forward span | **5–6 blocks** | 4–8 | Below 4 | Kessels et al. (2000) (normative study, N=70, not a meta-analysis) |
| Backward span | **~5 blocks** | 3–7 | Below 4 | Kessels et al. (2000) (normative study, N=70, not a meta-analysis) |

### N-Back (Updating/Monitoring)

| Measure | Average | Range | Impairment | Source |
|---------|---------|-------|------------|--------|
| 2-back accuracy | **85–95%** | 70–100% | Below 70% | Aggregate from N-back literature (no single definitive normative study exists); see EVIDENCE.md |
| 2-back d' (sensitivity) | 2.0–3.0 | 1.0–4.0 | Below 1.5 | Various |
| Typical training start | 2-back | — | — | Thompson et al. (2016) |
| Typical training ceiling | 3-back (mean 3.29) | 2–6 | — | Thompson et al. (2016): 52% reach 4-back, 15% reach 6-back |

### Operation Span (OSPAN — Complex Span)

| Measure | Average | Range | Impairment | Source |
|---------|---------|-------|------------|--------|
| Absolute score (of 75) | **~40** | 15–75 | Below 20 | Unsworth et al. (2005) |
| Reading span | **~3.0 items** | 2.0–5.0 | Below 2.0 | Daneman & Carpenter (1980) |

### Reading Speed (Context for Comprehension)

| Population | Average WPM | Impairment Flag | Source |
|-----------|------------|-----------------|--------|
| College-educated adults | 238–300 wpm | Below 150 wpm with comprehension difficulty | Brysbaert (2019) |

## Key Research Findings (For App Claims)

### What WM Training CAN Do (Near-Transfer)
- Improve performance on trained tasks: g=0.80–1.88 (Melby-Lervag 2016)
- Modest near-transfer to untrained WM tasks: **g=0.28–0.31** (active controls)
- Some long-term academic gains with Cogmed: d=0.66 reading at 24 months (Holmes & Gathercole 2014)
- N-back level improves: 2-back → 3.29 over 22 sessions (Thompson et al. 2016)

### What WM Training CANNOT Do (Far-Transfer)
- Improve fluid intelligence: **g=0.05** (null, active controls) — Melby-Lervag 2016
- Improve reading comprehension: g=0.15 (negligible) — Melby-Lervag 2016
- Improve arithmetic: g=0.06 (null) — Melby-Lervag 2016
- Move digit span from 4 to 7 through any single intervention

### Realistic Improvement Expectations
- **Typical improvement**: 0.3–0.7 SD ≈ 1–2 additional items on span tasks
- **Best combined outcomes**: Medication + training + exercise + sleep
- **Timeline**: Training gains appear by week 3–5; medication effects within hours (stimulants) to months (atomoxetine)

### Critical Counterevidence (Intellectual Honesty)
- Sala & Gobet (2020): When controlling for study quality (active controls, blinding, pre-registration), cognitive training effects approach null
- Simons et al. (2016): Consensus statement from leading researchers — evidence does NOT support claims that brain-training improves general cognitive abilities
- These findings do NOT negate near-transfer benefits but constrain what we can honestly claim

### Inverted-U Dose-Response for Dopamine (Arnsten 2011)
- Too LITTLE prefrontal dopamine: poor WM (understimulated)
- OPTIMAL level: peak WM performance (D1 receptor engagement)
- Too MUCH: impaired WM (overstimulated, anxious, scattered)
- Implication: More stimulant ≠ better WM. Dose must be individually titrated.

## Adaptive Difficulty Algorithm

### 2-Up-1-Down Staircase (Standard Psychometric)
```
Converges at ~70.7% accuracy threshold
- 2 consecutive correct → increase difficulty by 1
- 1 incorrect → decrease difficulty by 1
- Minimum level: 1
- No maximum cap (let users discover their ceiling)
```

### Session Structure
- 20–25 trials per session (optimal for learning + engagement)
- 3–5 sessions per week minimum for measurable gains
- 5–7 sessions per week optimal (per COGITO study: 100+ sessions, 6 months)
- Each session: 15–30 minutes (per Cogmed/COGITO protocols)
