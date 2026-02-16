# EVIDENCE.md — Scientific Claims Registry

**Last Audited**: 2026-02-15
**Total Entries**: 17
**Fully Verified**: 12
**Pending Verification**: 5

> Every scientific claim in the MemoryForge app MUST have an entry here.
> No entry = claim cannot appear in the app. No exceptions.
> See `plugins/research-validator/skills/agent-governance/SKILL.md` for rules.

---

## Entry Template

```markdown
## Claim: [Plain-English statement]
- **Source**: [Author et al., Year]
- **DOI/PMID**: [URL or ID]
- **Evidence Level**: [I–VI]
- **Study Design**: [Meta-analysis / RCT / Cohort / Case Report / etc.]
- **Sample Size**: [N=X (or K=X studies for meta-analyses)]
- **Effect Size**: [d=X.XX / g=X.XX / SMD=X.XX / OR=X.XX / N/A]
- **Control Type**: [Active / Passive / None / N/A]
- **Replicated?**: [Yes / No / Partial]
- **Limitations**: [Brief statement]
- **Confidence**: [HIGH / MEDIUM / LOW]
```

---

## WORKING MEMORY NORMATIVE DATA

## Claim: Average adult forward digit span is 7 digits (range 5-9)
- **Source**: Wechsler (2008) WAIS-IV Technical Manual
- **DOI/PMID**: Wechsler manual (Pearson, copyrighted norms)
- **Evidence Level**: I (established normative data across thousands of standardization participants)
- **Study Design**: Normative standardization (WAIS-IV: N=2,200 stratified by age, education, region)
- **Sample Size**: N=2,200+ (WAIS-IV standardization sample)
- **Effect Size**: N/A (normative value, not intervention)
- **Control Type**: N/A
- **Replicated?**: Yes (consistent across WAIS-III, WAIS-IV, WAIS-V, and independent studies)
- **Limitations**: Western-normed; may vary across cultures and languages
- **Confidence**: HIGH
- **Note**: Miller (1956) "The Magical Number Seven, Plus or Minus Two" (doi:10.1037/h0043158) is about information chunks, not digit span specifically. Digit span norms are from Wechsler standardization samples. Miller's paper should NOT be cited as a source for digit span = 7.

## Claim: Average adult backward digit span is 5 digits (range 4-7)
- **Source**: Wechsler (2008) WAIS-IV Technical Manual
- **DOI/PMID**: Wechsler manual (Pearson, copyrighted norms)
- **Evidence Level**: I (normative standardization)
- **Study Design**: Normative standardization
- **Sample Size**: N=2,200+
- **Effect Size**: N/A
- **Control Type**: N/A
- **Replicated?**: Yes (consistent across WAIS versions)
- **Limitations**: Western-normed
- **Confidence**: HIGH

## Claim: Forward-backward digit span gap of 3+ indicates executive control deficit
- **Source**: Clinical convention; Lezak et al. (2012) Neuropsychological Assessment, 5th ed.
- **DOI/PMID**: ISBN 978-0195395525
- **Evidence Level**: VI (expert consensus / clinical convention)
- **Study Design**: Clinical practice guideline
- **Sample Size**: N/A
- **Effect Size**: N/A
- **Control Type**: N/A
- **Replicated?**: Partial (widely used clinically but exact cut-off lacks formal validation study)
- **Limitations**: Convention-based, not empirically derived from a single study
- **Confidence**: MEDIUM

## Claim: Corsi block forward span averages 5-6 blocks in adults
- **Source**: Kessels et al. (2000)
- **DOI/PMID**: https://doi.org/10.1016/S0010-9452(08)70493-3
- **Evidence Level**: III (normative standardization study)
- **Study Design**: Normative standardization with clinical comparison
- **Sample Size**: N=70 healthy controls + N=70 brain-lesion patients
- **Effect Size**: N/A (normative)
- **Control Type**: N/A
- **Replicated?**: Yes
- **Limitations**: Small normative sample (N=70); older studies; digital vs physical board may differ slightly
- **Confidence**: MEDIUM

## Claim: 2-back accuracy averages 85-95% in healthy adults
- **Source**: Aggregate from multiple N-back studies
- **DOI/PMID**: N/A (no single definitive normative paper exists)
- **Evidence Level**: MEDIUM (convergent estimate from multiple sources)
- **Study Design**: Aggregate from individual N-back experiments (not a formal normative study)
- **Sample Size**: Varies across studies
- **Effect Size**: N/A (normative range)
- **Control Type**: N/A
- **Replicated?**: Yes (consistent across N-back literature)
- **Limitations**: Range varies with stimuli type (verbal vs spatial vs figural); no single definitive normative paper exists. Owen et al. (2005, doi:10.1002/hbm.20131) is a neuroimaging meta-analysis identifying brain regions activated during N-back tasks, NOT a source of behavioral accuracy norms.
- **Confidence**: MEDIUM

---

## COGNITIVE TRAINING EFFECTS

## Claim: WM training produces robust near-transfer (g=0.28-0.31 vs active controls)
- **Source**: Melby-Lervag et al. (2016)
- **DOI/PMID**: PMC4968033
- **Evidence Level**: I (meta-analysis of meta-analyses: 87 publications, 145 comparisons)
- **Study Design**: Systematic review and meta-analysis
- **Sample Size**: K=87 publications
- **Effect Size**: Verbal WM g=0.31, Visuospatial WM g=0.28 (vs active controls)
- **Control Type**: Active (key distinction — passive controls inflated to g=0.42-0.51)
- **Replicated?**: Yes (largest meta-analysis on this topic)
- **Limitations**: Heterogeneous training protocols; publication bias possible
- **Confidence**: HIGH

## Claim: WM training does NOT transfer to fluid intelligence (g=0.05 vs active controls)
- **Source**: Melby-Lervag et al. (2016)
- **DOI/PMID**: PMC4968033
- **Evidence Level**: I
- **Study Design**: Systematic review and meta-analysis
- **Sample Size**: K=87 publications
- **Effect Size**: g=0.05 (null — not statistically significant)
- **Control Type**: Active
- **Replicated?**: Yes (consistent null finding across multiple meta-analyses)
- **Limitations**: Some individual studies show small effects; overall evidence is null
- **Confidence**: HIGH

## Claim: Cogmed produces d=0.66 reading improvement at 24-month follow-up
- **Source**: Soderqvist & Bergman Nutley (2015)
- **DOI/PMID**: PMC4639603 (PMID 26617545)
- **Evidence Level**: III (quasi-experimental; classrooms assigned, not individuals)
- **Study Design**: Quasi-experimental with long-term follow-up (classrooms assigned to condition, not individual randomization)
- **Sample Size**: N=42
- **Effect Size**: d=0.66 (reading at 24 months)
- **Control Type**: Active (non-adaptive training)
- **Replicated?**: Partial (few studies have 24-month follow-up)
- **Limitations**: Small sample (N=42); classroom-level assignment (not individual randomization); single study; no independent replication at this timepoint
- **Confidence**: MEDIUM

## Claim: N-back training improves from ~2-back to ~3.3-back over 22 sessions
- **Source**: Lawlor-Savage & Goghari (2016)
- **DOI/PMID**: PMC4820261 (PMID 27043141); doi:10.1371/journal.pone.0151817
- **Evidence Level**: II (RCT)
- **Study Design**: Randomized controlled trial (dual N-back vs processing speed training in healthy adults)
- **Sample Size**: N=57
- **Effect Size**: Start 1.99, end 3.29 (trained task improvement)
- **Control Type**: Active (processing speed training)
- **Replicated?**: Yes (similar trajectories in other N-back studies)
- **Limitations**: NO statistical transfer to other WM tasks (Bayesian odds 4.8:1 to 40:1 favoring null)
- **Confidence**: HIGH (for trained task improvement), LOW (for transfer)
- **Note**: Previously misattributed to "Thompson et al. (2016)". Thompson TW, Waskom ML & Gabrieli (2016, PMC5724764) is a separate neuroimaging study of N-back training. NEEDS MANUAL VERIFICATION that the 2→3.3 progression data is from Lawlor-Savage & Goghari specifically.

---

## MEDICATION EFFECTS

## Claim: Methylphenidate improves WM in ADHD children with d=0.74 (d=1.17 at high load)
- **Source**: Campez et al. (2022)
- **DOI/PMID**: PMC8406432 (PMID 33475395); doi:10.1037/pha0000446
- **Evidence Level**: II (placebo-controlled crossover RCT)
- **Study Design**: Randomized crossover trial
- **Sample Size**: N=35 children, ages 7-12
- **Effect Size**: d=0.74 overall; d=1.17 at high WM load
- **Control Type**: Active (placebo)
- **Replicated?**: Yes (consistent with meta-analytic estimates g=0.34-0.59)
- **Limitations**: Children only; acute dosing; small sample
- **Confidence**: HIGH
- **Note**: Previously misattributed to "Bolden et al. (2021)". PubMed confirms PMC8406432 is Campez et al. (2022) "An evaluation of the effect of methylphenidate on working memory, time perception, and choice impulsivity in children with ADHD" in Experimental and Clinical Psychopharmacology. Bolden is a co-author on related ADHD WM studies (e.g., Kofler, Bolden et al. 2014, PMID 24588698) but not this specific methylphenidate RCT. NEEDS MANUAL VERIFICATION that effect sizes d=0.74/d=1.17 match the Campez paper specifically.

## Claim: Atomoxetine reaches d=0.82 by month 6 at 80mg for ADHD symptoms
- **Source**: Wietecha et al. (2016)
- **DOI/PMID**: PMC5069588 (PMID 26922462); doi:10.1111/cns.12533
- **Evidence Level**: II (pooled analysis of two double-blind, placebo-controlled RCTs)
- **Study Design**: Pooled analysis of two RCTs with open-label extension (up to 6 months)
- **Sample Size**: N=445 (RCT phase)
- **Effect Size**: SMD=-0.45 at 12 weeks; d=0.82 at 6 months (80mg subgroup)
- **Control Type**: Active (placebo in RCT phase)
- **Replicated?**: Yes (multiple RCTs confirm gradual onset)
- **Limitations**: d=0.82 is specifically the 80mg subgroup from open-label extension data (not blinded); previously listed under PMC4141744 which is actually Adler et al. (2014) — a BRIEF-A executive function study, not the same pooled efficacy analysis
- **Confidence**: MEDIUM
- **Note**: Previously attributed to "Camporeale et al. (2015)". PMC5069588 is actually Wietecha, Clemow, Buchanan et al. (2016) "Atomoxetine Increased Effect over Time in Adults with ADHD Treated for up to 6 Months: Pooled Analysis of Two Double-Blind, Placebo-Controlled, Randomized Trials" in CNS Neuroscience & Therapeutics. NEEDS MANUAL VERIFICATION that the d=0.82 at 6 months figure matches this paper.

---

## NON-PHARMACOLOGICAL INTERVENTIONS

## Claim: Aerobic exercise produces g=0.80 for memory in previously sedentary adults
- **Source**: Hoffmann, Petrov & Lee (2021)
- **DOI/PMID**: PMC8327129 (PMID 34377632); doi:10.1016/j.pmedr.2021.101496
- **Evidence Level**: I (meta-analysis)
- **Study Design**: Systematic review and meta-analysis of RCTs
- **Sample Size**: K=9 studies (N=547)
- **Effect Size**: Memory g=0.80; Executive Function g=0.37; meeting 150+ min/week g=1.21
- **Control Type**: Mixed (active and passive)
- **Replicated?**: Partial (effect sizes in this meta-analysis are larger than most exercise meta-analyses)
- **Limitations**: Small number of included studies (K=9, N=547); g=1.21 for 150+ min/week is from subgroup analysis and likely driven by 2-3 studies; g=0.80 is an exploratory finding that should be interpreted with caution; "sedentary" definition varies across included studies
- **Confidence**: MEDIUM
- **Note**: Previously misattributed to "Huang et al. (2021)" with K=42 RCTs. PubMed confirms PMC8327129 is Hoffmann, Petrov & Lee (2021) "Aerobic physical activity to improve memory and executive function in sedentary adults without cognitive impairment" in Preventive Medicine Reports with only K=9 studies. The g=1.21 for 150+ min/week is a subgroup analysis, not the primary finding. K=42 was incorrect.

## Claim: Sleep deprivation impairs WM accuracy with g=-0.555
- **Source**: Lim & Dinges (2010)
- **DOI/PMID**: PMC3290659
- **Evidence Level**: I (meta-analysis)
- **Study Design**: Systematic review and meta-analysis
- **Sample Size**: K=70+ studies
- **Effect Size**: WM accuracy g=-0.555; WM RT g=-0.515
- **Control Type**: Within-subjects (sleep vs no-sleep)
- **Replicated?**: Yes (robust, well-established finding)
- **Limitations**: Lab-based deprivation (total or partial); real-world chronic partial sleep loss may differ
- **Confidence**: HIGH

## Claim: Mindfulness meditation RCT improves WM and GRE performance
- **Source**: Mrazek et al. (2013)
- **DOI/PMID**: PMID 23538911; doi:10.1177/0956797612459659
- **Evidence Level**: II (RCT)
- **Study Design**: Randomized controlled trial
- **Sample Size**: N=48
- **Effect Size**: +16 GRE percentile points (reading comprehension)
- **Control Type**: Active (nutrition class)
- **Replicated?**: Partial (some independent replications show smaller effects)
- **Limitations**: Small sample (N=48); single study; GRE percentile change is a proxy measure, not a direct WM span metric
- **Confidence**: MEDIUM

## Claim: Mindfulness meditation improves WM with g=0.438 (meta-analytic estimate)
- **Source**: Meta-analysis source needs identification — g=0.438 from 29-study meta-analysis (authors TBD pending verification)
- **DOI/PMID**: NEEDS MANUAL VERIFICATION
- **Evidence Level**: I (meta-analysis)
- **Study Design**: Meta-analysis of 29 studies
- **Sample Size**: K=29 studies
- **Effect Size**: g=0.438
- **Control Type**: Mixed
- **Replicated?**: Yes (multiple meta-analyses converge on small-to-medium effect; Zainal & Newman 2024 meta-analysis of 111 RCTs also supports mindfulness-cognition link, PMID 37578065)
- **Limitations**: Heterogeneous meditation types; focused attention better for WM than open monitoring; the specific 29-study meta-analysis yielding g=0.438 needs source identification
- **Confidence**: MEDIUM
- **Note**: Previously conflated with Mrazek et al. (2013), which is an individual RCT, NOT the meta-analysis. The g=0.438 figure comes from a separate meta-analytic review. NEEDS MANUAL VERIFICATION to identify the correct meta-analysis authors.

## Claim: ASRS-5 (DSM-5 version) Part A has 91.4% sensitivity and 96.0% specificity at cut-off 14+
- **Source**: Ustun et al. (2017)
- **DOI/PMID**: JAMA Psychiatry, doi:10.1001/jamapsychiatry.2017.0298
- **Evidence Level**: II (validation study)
- **Study Design**: Cross-sectional diagnostic validation
- **Sample Size**: N=3,015
- **Effect Size**: Sensitivity 91.4%, Specificity 96.0%
- **Control Type**: N/A (diagnostic accuracy study)
- **Replicated?**: Yes (updated from original 2005 validation; consistent performance)
- **Limitations**: Validated against clinical interview; self-report inherently subjective
- **Confidence**: HIGH
- **Note on scoring**: The ASRS-5 (DSM-5 version, Ustun 2017) uses DIFFERENTIAL item weights — items have different maximum scores (range 2-5 per item). A simple uniform 0-4 Likert sum will produce INCORRECT results. This is distinct from the earlier ASRS v1.1, which uses dichotomous scoring with a cut-off of 4/6 on Part A screener items.

---

## COUNTEREVIDENCE AND CRITICAL REVIEWS

## Claim: Cognitive training effects are null or near-zero when controlling for study quality
- **Source**: Sala & Gobet (2019)
- **DOI/PMID**: PMID 30471868; doi:10.1016/j.tics.2018.10.004
- **Evidence Level**: I (meta-analytic review / critical synthesis)
- **Study Design**: Meta-analytic review published in Trends in Cognitive Sciences
- **Sample Size**: Review of multiple meta-analyses
- **Effect Size**: Near-zero far-transfer effects after correcting for study quality (active controls, blinding, etc.)
- **Control Type**: N/A (review)
- **Replicated?**: Yes (consistent with Melby-Lervag et al. 2016 null finding for far transfer)
- **Limitations**: This is a critical review/perspective, not a primary meta-analysis; some researchers contest the conclusions
- **Confidence**: HIGH (for the null far-transfer finding)
- **Note**: Sala & Gobet (2020, PMID 31939109) also published a multilevel meta-analysis in Psychonomic Bulletin & Review specifically on WM training in typically developing children, reaching similar conclusions. Their 2020 music training meta-analysis (PMID 32728850, PMC7683441) also found null far-transfer effects.

## Claim: "Brain-training" programs lack sufficient evidence for broad cognitive benefits
- **Source**: Simons et al. (2016)
- **DOI/PMID**: PMID 27697851; doi:10.1177/1529100616661983
- **Evidence Level**: I (expert consensus statement / comprehensive review)
- **Study Design**: Consensus statement and comprehensive review in Psychological Science in the Public Interest
- **Sample Size**: Review of the entire brain-training literature
- **Effect Size**: N/A (qualitative review concluding insufficient evidence for far transfer)
- **Control Type**: N/A (review)
- **Replicated?**: Yes (consistent with Melby-Lervag et al. 2016 and Sala & Gobet 2019)
- **Limitations**: This is a narrative/consensus review, not a quantitative meta-analysis; some industry-funded studies contest the conclusions
- **Confidence**: HIGH
- **Note**: Authors include Simons DJ, Boot WR, Charness N, Gathercole SE, Chabris CF, Hambrick DZ, and Stine-Morrow EA. Key conclusion: while some training programs improve performance on trained tasks, evidence for broad cognitive transfer is weak. This is directly relevant to MemoryForge's claims about training benefits.
