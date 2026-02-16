---
name: diagnostic-standards
description: Use when building or reviewing assessment modules, screening tools, diagnostic thresholds, red-flag logic, or any claim about clinical cut-offs and test sensitivity/specificity. Activates for /fact-check of diagnostic claims, assessment module calibration, and when the app must decide whether to recommend professional evaluation. Also activates for ASRS implementation, digit span scoring, and differential diagnosis logic.
---

# Diagnostic Standards & Screening Thresholds

## Gold Standard Batteries (NOT Implementable — Reference Only)

### WAIS-IV/V Working Memory Index (WMI)
- **Subtests**: Digit Span (Forward + Backward + Sequencing), Arithmetic, Letter-Number Sequencing
- **Score classification** (Mean=100, SD=15):

| Score | Classification | Percentile |
|-------|---------------|------------|
| 130+ | Very Superior | 98th+ |
| 120–129 | Superior | 91st–97th |
| 110–119 | High Average | 75th–90th |
| 90–109 | Average | 25th–74th |
| 80–89 | Low Average | 9th–24th |
| 70–79 | Borderline | 2nd–8th |
| <70 | Extremely Low | <2nd |

- **Key signal**: WMI 15+ points below other indices = specific WM weakness
- **Copyright**: Pearson — items and norms NOT reproducible in app

## Implementable Screening Tools

### ASRS-5 (DSM-5 Version, Ustun et al. 2017)

| Property | Data |
|----------|------|
| Type | Self-report, 6-question screener (Part A) + 12 additional (Part B) |
| Developer | WHO (World Health Organization) |
| License | **FREE** — public domain with citation required |
| Scoring | **Weighted scoring — NOT uniform Likert**. Items have different maximum scores (range 2-5 per item). A simple 0-4 sum will produce INCORRECT results. |
| Cut-off (Part A) | **14+ = positive screen** (weighted score, max 24) |
| Sensitivity | **91.4%** |
| Specificity | **96.0%** |
| Source | Ustun et al. 2017 (JAMA Psychiatry, N=3,015 updated validation) |

**CRITICAL**: Do NOT implement as simple 0-4 Likert sum. Each question has a different weight mapping. Refer to Ustun et al. 2017 supplementary materials for exact item weights. Implementing uniform weights will give users WRONG screening results.

**ASRS v1.1 alternative**: The original ASRS v1.1 (Kessler 2005) uses dichotomous 'shaded box' scoring with cut-off 4/6 on Part A. This is simpler to implement correctly. Consider using v1.1 if weighted scoring cannot be accurately implemented.

**Implementation requirements:**
1. All 6 Part A questions must be presented exactly as published
2. WHO citation required on screen
3. Disclaimer: "This is a screening tool, NOT a diagnosis"
4. Score must NOT be labeled "ADHD diagnosis" — only "screen positive/negative"

### DSM-5 ADHD-Inattentive Criteria (9 Symptoms)

For educational reference in app (NOT for self-diagnosis):

1. Fails to give close attention to details / careless mistakes
2. Difficulty sustaining attention in tasks
3. Does not seem to listen when spoken to directly
4. Does not follow through on instructions / fails to finish
5. Difficulty organizing tasks and activities
6. Avoids tasks requiring sustained mental effort
7. Often loses things necessary for tasks
8. Easily distracted by extraneous stimuli
9. Often forgetful in daily activities

**Diagnosis requires**: 5+ of 9 (adults), several before age 12, present in 2+ settings, clear functional interference.

## App-Based Assessment Thresholds

### Red Flags — HIGH Confidence (Any Single Criterion → "See a Professional")

| Test | Threshold | Rationale |
|------|-----------|-----------|
| Forward digit span | Consistently **below 4** | Below 2nd percentile, severe impairment |
| Backward digit span | Consistently **below 2** | Near floor, suggests neurological concern |
| ASRS Part A | **14+** | Validated cut-off, 91% sensitivity |
| 2-back accuracy | **<50%** after practice | Below chance performance |
| Corsi forward span | **Below 3** | Below 2nd percentile |

### Red Flags — MEDIUM Confidence (2+ Criteria → Recommend Professional)

| Test | Threshold | Rationale |
|------|-----------|-----------|
| Forward digit span | 5 (low-normal) | 9th percentile |
| Backward digit span | 3 (low-normal) | ~9th percentile |
| ASRS Part A | 10–13 | Sub-threshold but elevated |
| Forward − Backward gap | ≥3 digits | Executive control deficit signal |
| Reading speed | <150 wpm with comprehension difficulty | Below functional threshold |

### Urgent Referral Triggers

| Pattern | Referral Type |
|---------|--------------|
| Sudden WM decline over weeks/months | **Neurological evaluation** (rule out stroke, TBI, tumor) |
| WM difficulties + persistent low mood/anxiety | **Mental health evaluation** |
| WM + math difficulty + impaired number comparison | **Dyscalculia assessment** |
| WM + hearing difficulty in noise specifically | **Audiological evaluation** (APD screen) |

## Differential Diagnosis Decision Tree

### WM Deficit vs ADHD-Inattentive

| Feature | Primary WM Deficit | ADHD-Inattentive |
|---------|-------------------|------------------|
| Digit span impaired | **Yes** (core feature) | Often, but secondary |
| Sustained attention | May be normal | **Impaired** (core feature) |
| Organization | Variable | **Consistently poor** |
| Onset | Can be identified at any age | Before age 12 (DSM-5) |
| Response to stimulants | May help WM manipulation | **Robust improvement** |

### WM-Related Math Difficulty vs Dyscalculia

| Feature | WM-Related Math Difficulty | True Dyscalculia |
|---------|--------------------------|-------------------|
| Number comparison (7 vs 4?) | Normal speed | **Slow/impaired** |
| Dot enumeration (subitizing) | Normal | **Impaired** |
| Multi-step calculation | **Impaired** | Impaired |
| Non-numerical WM tasks | **Impaired** | Normal |
| Reading/language | May be affected | Usually normal |

### WM Deficit vs Auditory Processing Disorder (APD)

| Feature | WM Deficit | APD |
|---------|-----------|-----|
| Performance in quiet | **Still impaired** | Normal |
| Performance in noise | Somewhat impaired | **Significantly impaired** |
| Visual WM tasks | **May be impaired** | Normal |
| Silent reading comprehension | **Often impaired** | Usually normal |
| Written instruction following | **Impaired** | Normal |

## Mandatory Disclaimers (Must Appear in App)

**On every assessment screen:**
> "These are screening tools, NOT diagnostic instruments. Only a licensed professional can make a clinical diagnosis. Environmental factors (fatigue, distraction, anxiety) affect results. Always retest on a different day before drawing conclusions."

**On ASRS screen:**
> "The ASRS was developed by the World Health Organization. A positive screen does NOT mean you have ADHD. Please discuss results with a healthcare provider."

**On any red-flag notification:**
> "This result suggests you may benefit from professional evaluation. This is NOT a diagnosis. Many factors can affect test performance."
