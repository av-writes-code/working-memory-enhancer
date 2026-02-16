---
description: Verify a scientific claim against peer-reviewed literature. Searches PubMed and BioMCP, evaluates evidence quality, and returns a structured verdict with confidence rating.
argument-hint: "[claim text in quotes]"
---

# /fact-check

> References skills: evidence-hierarchy, agent-governance, working-memory-science, pharmacology, diagnostic-standards

Verify a scientific claim against peer-reviewed biomedical literature and return a structured evidence report.

## Usage
```
/fact-check "Working memory training improves fluid intelligence"
/fact-check "Methylphenidate improves working memory with effect size d=0.74"
/fact-check "Bacopa monnieri improves working memory in healthy adults"
```

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│                    INPUT: Claim Text                     │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 1: Parse Claim                                     │
│  - Extract subject (drug/intervention/tool)               │
│  - Extract predicate (improves/reduces/causes)            │
│  - Extract object (WM/cognition/ADHD symptoms)            │
│  - Extract quantifier if present (d=X.XX, X%, etc.)       │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 2: Search Literature                               │
│  - ~~pubmed: MeSH-term query for subject + object         │
│  - ~~preprints: BioMCP keyword + disease search           │
│  - Prioritize: meta-analyses > RCTs > cohort studies      │
│  - Collect: DOI, N, study design, effect size, year       │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 3: Evaluate Evidence                               │
│  - Assign EBM level (I–VI) per evidence-hierarchy skill   │
│  - Check active vs passive control                        │
│  - Check sample size adequacy                             │
│  - Check replication status                               │
│  - Flag any retracted papers                              │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 4: Rate Confidence                                 │
│  HIGH: Level I–II, active control, N>100, replicated     │
│  MEDIUM: Level II–III, or Level I with caveats           │
│  LOW: Level IV–V, or single unreplicated study           │
│  INSUFFICIENT: No peer-reviewed evidence found           │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 5: Generate Verdict                                │
│  - SUPPORTED / PARTIALLY SUPPORTED / NOT SUPPORTED /     │
│    INSUFFICIENT EVIDENCE / CONTRADICTED                  │
│  - If claim includes effect size, verify it matches lit   │
│  - Suggest corrected phrasing if needed                  │
│  - Provide EVIDENCE.md entry template                    │
└─────────────────────────────────────────────────────────┘
```

## Output Format

```markdown
## Fact-Check Report

### Claim
> [Original claim text]

### Verdict: [SUPPORTED | PARTIALLY SUPPORTED | NOT SUPPORTED | INSUFFICIENT EVIDENCE | CONTRADICTED]

### Confidence: [HIGH | MEDIUM | LOW]

### Best Available Evidence
| Field | Value |
|-------|-------|
| Source | [Author et al., Year] |
| DOI/PMID | [Link] |
| Evidence Level | [I–VI] |
| Study Design | [Meta-analysis / RCT / Cohort / etc.] |
| Sample Size | N=[X] |
| Effect Size | [d/g/SMD=X.XX] |
| Control Type | [Active / Passive / None] |
| Replicated? | [Yes / No / Partial] |

### Supporting Studies
1. [Author Year] — [Brief finding] (PMID: XXXXX)
2. [Author Year] — [Brief finding] (PMID: XXXXX)

### Contradicting Studies (if any)
1. [Author Year] — [Brief finding] (PMID: XXXXX)

### Corrected Phrasing (if needed)
> [Suggested evidence-appropriate rewording]

### EVIDENCE.md Entry
[Pre-formatted entry ready to paste into EVIDENCE.md]
```

## Verdict Definitions

| Verdict | Criteria |
|---------|----------|
| **SUPPORTED** | Level I–II evidence directly confirms claim including any quantifiers |
| **PARTIALLY SUPPORTED** | Evidence supports the direction but not magnitude, or only in specific populations |
| **NOT SUPPORTED** | Level I–II evidence found null effect (e.g., far-transfer g=0.05) |
| **INSUFFICIENT EVIDENCE** | No Level I–IV evidence found; only expert opinion or no results |
| **CONTRADICTED** | Evidence shows opposite effect or claim is based on retracted paper |

## Flags
| Flag | Effect |
|------|--------|
| `--strict` | Only accept Level I–II evidence; flag everything else as insufficient |
| `--india` | Include India-specific availability/pricing data for pharmacological claims |
| `--update` | Also update EVIDENCE.md with the result (prompts before writing) |
| `--preprints` | Include preprints in search (default: peer-reviewed only) |

## Tips
1. Quote the full claim including any numbers — the command verifies quantifiers too
2. Use `--strict` for claims that will appear prominently in the app (headlines, key metrics)
3. Run on ALL claims before they enter EVIDENCE.md
4. If verdict is INSUFFICIENT, do NOT add the claim to the app
