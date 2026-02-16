# Clinical Diagnostic Guide: Working Memory & Related Conditions

## Date: 2025-02-14

---

## 1. GOLD STANDARD ASSESSMENT BATTERIES

### WAIS-IV/V Working Memory Index (WMI)

**Subtests:**
- Digit Span Forward (phonological store)
- Digit Span Backward (central executive manipulation)
- Digit Span Sequencing (ordering/executive control)
- Arithmetic (WM under timed numerical reasoning)
- Letter-Number Sequencing (supplemental)

**Score Classification (Mean=100, SD=15):**

| Score | Classification | Percentile |
|-------|---------------|------------|
| 130+ | Very Superior | 98th+ |
| 120-129 | Superior | 91st-97th |
| 110-119 | High Average | 75th-90th |
| 90-109 | Average | 25th-74th |
| 80-89 | Low Average | 9th-24th |
| 70-79 | Borderline | 2nd-8th |
| <70 | Extremely Low | <2nd |

**Key diagnostic signal:** WMI 15+ points below other indices (e.g., Verbal Comprehension) = specific WM weakness, not global limitation.

### WMS-IV (Wechsler Memory Scale)
- Focuses on VISUAL working memory (vs WAIS which is auditory)
- Co-normed with WAIS for direct comparison
- Uniquely measures delayed memory (20-30 min delay)
- Use when: known/suspected memory disorder, need modality-specific profile

### CANTAB (Cambridge Neuropsychological)
- Spatial Working Memory, Stockings of Cambridge, PAL
- Research/clinical tool, NOT consumer-available
- Paradigms are public-domain concepts we can adapt

### NIH Toolbox Cognition Battery
- List Sorting Working Memory Test
- Ages 3-85, <5 min per subtest
- Designed for broad accessibility

---

## 2. TESTS FOR EACH CONDITION

### Working Memory Deficit

| Test | What It Measures | Adult Average | Impairment Flag |
|------|-----------------|---------------|-----------------|
| Digit Span Forward | Phonological store | **7 digits** (range 5-9) | **Below 5** |
| Digit Span Backward | Central executive | **5 digits** (range 4-7) | **Below 3** |
| Digit Span Sequencing | Ordering ability | ~5 digits | Below 3 |
| Corsi Blocks Forward | Visuospatial WM | **5-6 blocks** | Below 4 |
| Corsi Blocks Backward | Spatial manipulation | ~5 blocks | Below 4 |
| OSPAN (automated) | Complex span | **~40 of 75** | Below 20 |
| Reading Span | Verbal complex span | **~3.0 items** | Below 2.0 |
| 2-back accuracy | Updating | **85-95%** | Below 70% |

**Critical ratio:** Forward-Backward digit span gap of 3+ = executive control deficit.

### ADHD Inattentive - DSM-5 Criteria (5+ of 9 for adults)

1. Fails to give close attention to details / careless mistakes
2. Difficulty sustaining attention in tasks
3. Does not seem to listen when spoken to directly
4. Does not follow through on instructions / fails to finish
5. Difficulty organizing tasks and activities
6. Avoids tasks requiring sustained mental effort
7. Often loses things necessary for tasks
8. Easily distracted by extraneous stimuli
9. Often forgetful in daily activities

**Plus:** Several symptoms before age 12, present in 2+ settings, clear functional interference.

### ADHD Screening Tools

| Tool | Type | Cutoff | Sensitivity/Specificity |
|------|------|--------|------------------------|
| **ASRS v1.1 (6Q)** | Self-report | 14+ (Likert) | **90% / 88%** |
| CAARS | Self+observer | T-score 65+ | Variable |
| TOVA | Computer CPT | >1.5 SD | 80% / 72% |
| QbTest | CPT + motion | FDA-cleared | Decision aid |

**ASRS is FREE (WHO), legally usable in apps with citation.**

### Dyscalculia vs WM-Related Math Difficulty

| Feature | True Dyscalculia | Math Difficulty from WM |
|---------|------------------|------------------------|
| Number comparison (which bigger: 7 or 4?) | **Impaired/slow** | Normal |
| Dot enumeration (subitizing) | **Impaired** | Normal |
| Multi-step calculation | Impaired | **Impaired** |
| Non-numerical WM tasks | Normal | **Impaired** |
| Reading/language | Usually normal | May be affected |

### APD vs WM Deficit

| Feature | APD | WM Deficit |
|---------|-----|-----------|
| Performance in quiet | Normal | **Still impaired** |
| Performance in noise | **Significantly impaired** | Somewhat impaired |
| Visual WM tasks | Normal | **May be impaired** |
| Silent reading comprehension | Usually normal | **Often impaired** |
| Written instruction following | Normal | **Impaired** |

---

## 3. SELF-ASSESSMENT (What We Can Build Into the App)

### Legally Implementable (Public Domain Concepts):
- Digit Span (forward + backward + sequencing) - custom implementation
- Corsi Block Test - custom touchscreen version
- N-back - widely implemented
- Operation Span (OSPAN) - research paradigm
- ASRS v1.1 - FREE with WHO citation

### NOT Implementable (Copyrighted):
- WAIS-IV/V specific items and norms (Pearson)
- CANTAB (Cambridge Cognition license)
- Conners CPT-3 (Pearson)

### Our App Should Include:
1. **Digit Span Test** (forward + backward) - primary WM screen
2. **Corsi Block Test** - visuospatial WM screen
3. **Mental Math Chain** - central executive screen
4. **Sentence Comprehension** - reading WM screen
5. **ASRS v1.1 embed** - ADHD self-screen (with disclaimer)
6. **Dyscalculia mini-screen** - number comparison + subitizing tasks

---

## 4. THE DIAGNOSTIC JOURNEY

### Step 1: Self-Screening (Our App)
- Complete WM assessment in app
- Complete ASRS v1.1 if ADHD suspected
- Document specific examples of daily functional impact

### Step 2: GP / Primary Care
- What to say: "Persistent difficulties with concentration, memory, and organization affecting daily functioning"
- Bring: ASRS screener results, specific impact examples
- Ask for: Referral + basic bloodwork (thyroid, B12, iron, folate)

### Step 3: Specialist Referral
- **Neuropsychologist** → Full WM/cognitive assessment
- **Psychiatrist** → ADHD diagnosis + medication
- **Neurologist** → Rule out neurological causes
- **Audiologist** → If APD suspected

### Step 4: Full Neuropsychological Evaluation
- 4-8 hours of testing, 1-2 days
- WAIS-V, WMS-IV, attention tests, achievement tests, questionnaires
- Result: Detailed cognitive profile + diagnosis + recommendations

### Cost:
| | India | USA |
|---|---|---|
| Doctor consult | INR 500-1,500 | $200-$400 |
| Full assessment (government) | INR 200-500 | N/A |
| Full assessment (private) | INR 3,000-10,000 | $2,000-$7,000 |
| NIMHANS/AIIMS | INR 200-500 | N/A |

---

## 5. RED FLAGS (App Should Trigger "See a Professional")

### HIGH confidence (any single criterion):
- Forward digit span consistently **below 4**
- Backward digit span consistently **below 2**
- ASRS Part A score **14+**
- Cannot maintain >50% accuracy at 2-back after practice
- Corsi forward span **below 3**

### MEDIUM confidence (2+ criteria needed):
- Forward digit span of 5 (low-normal)
- Backward digit span of 3 (low-normal)
- ASRS 10-13
- Forward-backward gap of 3+ digits
- Reading speed below 150 wpm with comprehension difficulties

### URGENT:
- Sudden WM decline over weeks/months → neurological evaluation
- WM difficulties + mood symptoms → mental health evaluation

### Disclaimer (mandatory):
"These are screening tools, NOT diagnostic instruments. Only a licensed professional can make a clinical diagnosis. Environmental factors (fatigue, distraction, anxiety) affect results. Always retest on a different day before drawing conclusions."
