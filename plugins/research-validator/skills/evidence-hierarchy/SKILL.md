---
name: evidence-hierarchy
description: Use when evaluating the strength of any scientific claim, assigning evidence levels, interpreting effect sizes, assessing study quality, or determining confidence ratings. Activates for /fact-check, /source-trace, /verify-evidence commands and when writing or reviewing EVIDENCE.md entries.
---

# Evidence-Based Medicine Hierarchy & Effect Size Interpretation

## Evidence Pyramid (Oxford CEBM, Modified)

| Level | Evidence Type | Weight | Example |
|-------|-------------|--------|---------|
| **I** | Systematic Reviews / Meta-Analyses of RCTs | Highest | Melby-Lervag et al. 2016 (87 publications, 145 comparisons) |
| **II** | Individual Randomized Controlled Trials (RCTs) | High | Klingberg et al. 2005 (N=53, double-blind, active control) |
| **III** | Non-Randomized Controlled Studies | Moderate | Quasi-experimental, matched-group designs |
| **IV** | Cohort Studies / Case-Control Studies | Moderate-Low | Prospective longitudinal, retrospective |
| **V** | Case Reports / Case Series | Low | Anderson et al. 2020 (N=6, brain injury) |
| **VI** | Expert Opinion / Narrative Reviews / Editorials | Lowest | Not acceptable as sole evidence for health claims |

## Classification Rules

### Assigning Evidence Level
1. Start at the TOP of the pyramid. Only go lower if no higher evidence exists.
2. A meta-analysis of low-quality RCTs is still Level I, but flag quality concerns.
3. An RCT with N<20 is still Level II, but flag underpowered sample.
4. If multiple levels exist for the same claim, cite the HIGHEST level.
5. Preprints are NOT peer-reviewed — assign one level below their study design.

### Active vs Passive Control Distinction (CRITICAL)
- **Active control**: Comparison group does an alternative task (e.g., quiz games)
- **Passive control**: Comparison group does nothing (waitlist)
- **Rule**: ALWAYS prefer effect sizes from active-control comparisons. Passive-control effects are inflated by expectancy/novelty.
- **Example**: WM training near-transfer: g=0.31 (active) vs g=0.42 (passive) — use 0.31.

## Effect Size Interpretation

### Cohen's d / Hedges' g Thresholds

| Value | Classification | Practical Meaning |
|-------|---------------|-------------------|
| **d < 0.20** | Negligible | Not noticeable in daily life |
| **d = 0.20** | Small | Detectable in careful measurement |
| **d = 0.50** | Medium | Noticeable to attentive observer |
| **d = 0.80** | Large | Obvious to anyone |
| **d = 1.20** | Very Large | Transformative |
| **d = 2.00** | Huge | Rare in behavioral science |

Source: Cohen (1988), Sawilowsky (2009)

### Standardized Mean Difference (SMD) vs Cohen's d
- **SMD**: Generic term for any standardized effect size (includes d, g, Glass's Δ)
- **Hedges' g**: Corrected for small-sample bias (preferred for N<20)
- **Cohen's d**: Uncorrected. Fine for N>30. Most commonly reported.
- For this project: Treat d and g as interchangeable when N>30.

### Odds Ratio / Risk Ratio (for diagnostic studies)
| OR | Interpretation |
|----|---------------|
| 1.0 | No association |
| 1.5-2.0 | Small association |
| 2.0-4.0 | Moderate association |
| >4.0 | Strong association |

## Study Quality Assessment (Simplified Jadad + GRADE)

### For RCTs — Check These 5 Items:

| Item | Question | Red Flag If Missing |
|------|----------|-------------------|
| **Randomization** | Was allocation truly random? | "Alternating" or "by chart number" = not random |
| **Blinding** | Were participants AND assessors blinded? | Open-label = expectancy bias |
| **Control type** | Active or passive control? | Passive-only = inflated effect |
| **Sample size** | N per group? | N<15 per group = underpowered |
| **Attrition** | >20% dropout? | High dropout = selection bias |

### For Meta-Analyses — Check These 4 Items:

| Item | Question | Red Flag |
|------|----------|----------|
| **Heterogeneity** | I² statistic? | I²>75% = studies too different to combine |
| **Publication bias** | Funnel plot symmetric? | Asymmetric = missing null-result studies |
| **Search scope** | How many databases? | Single database = incomplete literature |
| **Inclusion criteria** | What was excluded? | Excluding non-English = sampling bias |

## Confidence Rating System (For EVIDENCE.md Entries)

| Rating | Criteria | Action |
|--------|----------|--------|
| **HIGH** | Level I–II evidence, active control, N>100, replicated, d>0.30 | Safe to present as established fact (with citation) |
| **MEDIUM** | Level II–III, OR Level I with caveats (small N, passive control, unreplicated) | Present with qualifiers ("research suggests", "evidence indicates") |
| **LOW** | Level IV–V, OR conflicting evidence, OR single unreplicated study | Present as preliminary ("early research suggests", "one study found") |
| **INSUFFICIENT** | Level VI only, OR no peer-reviewed evidence found | DO NOT include in app. Flag for removal. |

## Mandatory Qualifiers by Confidence

- **HIGH**: "Research shows..." / "Studies demonstrate..." / "Evidence supports..."
- **MEDIUM**: "Research suggests..." / "Evidence indicates..." / "Studies have found..."
- **LOW**: "Preliminary research suggests..." / "One study found..." / "Early evidence hints..."
- **INSUFFICIENT**: Not usable. Remove from app or mark as "unverified claim."
