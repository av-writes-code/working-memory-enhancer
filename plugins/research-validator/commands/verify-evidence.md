---
description: Audit EVIDENCE.md for completeness, correctness, and currency. Checks all entries have required fields, DOIs resolve, and no cited papers have been retracted.
argument-hint: "[--full | --entry N | --retraction-check]"
---

# /verify-evidence

> References skills: evidence-hierarchy, agent-governance

Audit the EVIDENCE.md file for structural completeness, data correctness, and source currency. Catches missing fields, broken DOIs, retracted papers, and outdated confidence ratings.

## Usage
```
/verify-evidence                         # Quick structural audit
/verify-evidence --full                  # Full audit including DOI resolution
/verify-evidence --entry 7               # Verify a single entry
/verify-evidence --retraction-check      # Check all papers for retractions
/verify-evidence --freshness             # Flag entries older than 2 years
```

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│  STEP 1: Parse EVIDENCE.md                               │
│  - Extract all entries using ## Claim: pattern            │
│  - Parse each field: Source, DOI, Level, N, d, etc.       │
│  - Count total entries                                    │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 2: Structural Checks                               │
│  For each entry verify presence of:                       │
│  ☐ Source (Author et al., Year)                           │
│  ☐ DOI/PMID (at least one)                                │
│  ☐ Evidence Level (I–VI)                                  │
│  ☐ Study Design                                           │
│  ☐ Sample Size (N=X)                                      │
│  ☐ Effect Size (d/g/SMD where applicable)                 │
│  ☐ Replicated? (Yes/No/Partial)                           │
│  ☐ Confidence (HIGH/MEDIUM/LOW)                           │
│  Flag any missing fields                                  │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 3: Consistency Checks                              │
│  - Evidence Level matches Study Design?                   │
│    (e.g., Level I must be meta-analysis/systematic review)│
│  - Confidence matches Evidence Level + quality?           │
│    (e.g., Level V cannot be HIGH confidence)              │
│  - Effect size is plausible for the domain?               │
│    (e.g., d>3.0 in behavioral science = suspicious)       │
│  - N matches study design expectations?                   │
│    (e.g., meta-analysis with N=20 = suspicious)           │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 4: Source Verification (--full only)                │
│  - Check each DOI resolves via doi.org                    │
│  - Check each PMID resolves via ~~pubmed                  │
│  - Check Retraction Watch database for flagged papers     │
│  - Check publication date (flag if >5 years for fast-     │
│    moving fields like neuroimaging)                       │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 5: Generate Audit Report                           │
└─────────────────────────────────────────────────────────┘
```

## Output Format

```markdown
## EVIDENCE.md Audit Report

### Summary
- Total entries: [N]
- Complete entries: [N] (X%)
- Incomplete entries: [N]
- Consistency warnings: [N]
- Source issues: [N] (--full only)

### Structural Issues
| Entry # | Claim | Missing Fields |
|---------|-------|---------------|
| 3 | "Exercise improves WM" | Effect Size, Replicated? |
| 11 | "tDCS + training..." | Sample Size |

### Consistency Warnings
| Entry # | Issue |
|---------|-------|
| 5 | Level I evidence but Confidence=LOW (should be at least MEDIUM) |
| 8 | Study Design="Case Report" but Level=III (should be Level V) |
| 14 | Effect size d=4.2 — implausibly large for behavioral intervention |

### Source Issues (--full only)
| Entry # | Issue |
|---------|-------|
| 2 | DOI does not resolve (404) |
| 9 | Paper retracted 2025-08-15 |
| 12 | Published 2012 — newer meta-analysis available (2023) |

### Action Items
1. [Priority] Fix Entry #9 — cited paper is RETRACTED
2. [High] Add missing Effect Size to Entry #3
3. [Medium] Update Entry #12 with newer source
4. [Low] Review confidence rating for Entry #5
```

## Consistency Rules

| Rule | Check | Auto-Fix Suggestion |
|------|-------|-------------------|
| Level I = Meta-analysis/Systematic Review | Study Design field | Downgrade Level or correct Design |
| Level II = RCT | Study Design field | Downgrade Level or correct Design |
| Level V–VI cannot be HIGH confidence | Confidence field | Downgrade to MEDIUM or LOW |
| d > 3.0 in behavioral science | Effect Size field | Verify — likely data entry error |
| Meta-analysis with N < 50 | Sample Size field | Verify — may be number of studies not participants |
| Preprint cannot be Level I or II | Evidence Level field | Add 1 to Level (preprint penalty) |

## Flags
| Flag | Effect |
|------|--------|
| `--full` | Include DOI resolution and retraction checks (slower, needs network) |
| `--entry N` | Check only entry number N |
| `--retraction-check` | Only check for retractions (uses ~~pubmed) |
| `--freshness` | Flag entries with sources older than 2 years |
| `--strict` | Exit 1 if any structural issues found — for CI pipeline |
| `--fix` | Interactive mode to fix issues one by one |

## Tips
1. Run before every PR that touches app content or EVIDENCE.md
2. Use `--strict` in CI to enforce evidence standards
3. Run `--retraction-check` quarterly
4. Run `--freshness` annually to catch outdated sources
