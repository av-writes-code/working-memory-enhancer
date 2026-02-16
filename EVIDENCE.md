# EVIDENCE.md — Scientific Claims Registry

**Last Audited**: 2026-02-15
**Total Entries**: 15
**Fully Verified**: 15
**Pending Verification**: 0

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
- **Source**: Miller (1956); Wechsler (2008) WAIS-IV Technical Manual
- **DOI/PMID**: https://doi.org/10.1037/h0043158 (Miller); Wechsler manual (Pearson)
- **Evidence Level**: I (established normative data across thousands of standardization participants)
- **Study Design**: Normative standardization (WAIS-IV: N=2,200 stratified by age, education, region)
- **Sample Size**: N=2,200+ (WAIS-IV standardization sample)
- **Effect Size**: N/A (normative value, not intervention)
- **Control Type**: N/A
- **Replicated?**: Yes (consistent across WAIS-III, WAIS-IV, WAIS-V, and independent studies since 1956)
- **Limitations**: Western-normed; may vary across cultures and languages
- **Confidence**: HIGH

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
- **Evidence Level**: I (meta-analysis of Corsi block studies)
- **Study Design**: Meta-analysis
- **Sample Size**: K=38 studies, aggregate N>1,000
- **Effect Size**: N/A (normative)
- **Control Type**: N/A
- **Replicated?**: Yes
- **Limitations**: Older studies; digital vs physical board may differ slightly
- **Confidence**: HIGH

## Claim: 2-back accuracy averages 85-95% in healthy adults
- **Source**: Owen et al. (2005)
- **DOI/PMID**: https://doi.org/10.1002/hbm.20131
- **Evidence Level**: I (meta-analysis of N-back neuroimaging studies)
- **Study Design**: Meta-analysis
- **Sample Size**: K=24 studies
- **Effect Size**: N/A (normative range)
- **Control Type**: N/A
- **Replicated?**: Yes (consistent across N-back literature)
- **Limitations**: Range varies with stimuli type (verbal vs spatial vs figural)
- **Confidence**: HIGH

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
- **Source**: Holmes & Gathercole (2014)
- **DOI/PMID**: PMC4639603
- **Evidence Level**: II (RCT with long-term follow-up)
- **Study Design**: Randomized controlled trial
- **Sample Size**: N=42
- **Effect Size**: d=0.66 (reading at 24 months)
- **Control Type**: Active (non-adaptive training)
- **Replicated?**: Partial (few studies have 24-month follow-up)
- **Limitations**: Small sample; single study; no independent replication at this timepoint
- **Confidence**: MEDIUM

## Claim: N-back training improves from ~2-back to ~3.3-back over 22 sessions
- **Source**: Thompson et al. (2016)
- **DOI/PMID**: PMC4820261
- **Evidence Level**: II (RCT)
- **Study Design**: Randomized controlled trial
- **Sample Size**: N=57
- **Effect Size**: Start 1.99, end 3.29 (trained task improvement)
- **Control Type**: Active
- **Replicated?**: Yes (similar trajectories in other N-back studies)
- **Limitations**: NO statistical transfer to other WM tasks (Bayesian odds 4.8:1 to 40:1 favoring null)
- **Confidence**: HIGH (for trained task improvement), LOW (for transfer)

---

## MEDICATION EFFECTS

## Claim: Methylphenidate improves WM in ADHD children with d=0.74 (d=1.17 at high load)
- **Source**: Bolden et al. (2021)
- **DOI/PMID**: PMC8406432
- **Evidence Level**: II (placebo-controlled crossover RCT)
- **Study Design**: Randomized crossover trial
- **Sample Size**: N=35 children, ages 7-12
- **Effect Size**: d=0.74 overall; d=1.17 at high WM load
- **Control Type**: Active (placebo)
- **Replicated?**: Yes (consistent with meta-analytic estimates g=0.34-0.59)
- **Limitations**: Children only; acute dosing; small sample
- **Confidence**: HIGH

## Claim: Atomoxetine reaches d=0.82 by month 6 at 80mg for ADHD symptoms
- **Source**: Camporeale et al. (2015); Kratochvil et al. (2002)
- **DOI/PMID**: PMC4141744
- **Evidence Level**: II (RCT, open-label extension)
- **Study Design**: RCT + open-label extension
- **Sample Size**: N=445 (RCT phase)
- **Effect Size**: SMD=-0.45 at 12 weeks; d=0.82 at 6 months (80mg)
- **Control Type**: Active (placebo in RCT phase)
- **Replicated?**: Yes (multiple RCTs confirm gradual onset)
- **Limitations**: Effect size at 6 months from open-label data (not blinded)
- **Confidence**: MEDIUM

---

## NON-PHARMACOLOGICAL INTERVENTIONS

## Claim: Aerobic exercise produces g=0.80 for memory in previously sedentary adults
- **Source**: Huang et al. (2021)
- **DOI/PMID**: PMC8327129
- **Evidence Level**: I (meta-analysis)
- **Study Design**: Systematic review and meta-analysis of RCTs
- **Sample Size**: K=42 RCTs (older adults subset)
- **Effect Size**: Memory g=0.80; Executive Function g=0.37; meeting 150+ min/week g=1.21
- **Control Type**: Mixed (active and passive)
- **Replicated?**: Yes (consistent across exercise meta-analyses)
- **Limitations**: Heterogeneous exercise protocols; "sedentary" definition varies
- **Confidence**: HIGH

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

## Claim: Mindfulness meditation improves WM with g=0.438
- **Source**: Mrazek et al. (2013); meta-analysis of 29 studies
- **DOI/PMID**: PubMed 23538911
- **Evidence Level**: I (meta-analysis) + II (Mrazek RCT)
- **Study Design**: Meta-analysis + individual RCT
- **Sample Size**: K=29 studies (meta); N=48 (Mrazek RCT: +16 GRE percentile points)
- **Effect Size**: g=0.438 (meta-analysis); +16 percentile points GRE reading (Mrazek)
- **Control Type**: Mixed
- **Replicated?**: Yes (multiple meta-analyses converge on small-to-medium effect)
- **Limitations**: Heterogeneous meditation types; focused attention better for WM than open monitoring
- **Confidence**: MEDIUM

## Claim: ASRS v1.1 Part A has 91.4% sensitivity and 96.0% specificity at cut-off 14+
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
