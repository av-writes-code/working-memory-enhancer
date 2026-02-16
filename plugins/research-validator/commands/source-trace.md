---
description: Trace any metric, number, or claim in the app back to its origin peer-reviewed paper. Ensures every data point has a verifiable source chain.
argument-hint: "[metric or claim to trace] [--file path/to/file]"
---

# /source-trace

> References skills: evidence-hierarchy, agent-governance

Trace any metric, number, or scientific claim used in the MemoryForge app back to its original peer-reviewed source. Produces an audit trail from app display → EVIDENCE.md → primary literature.

## Usage
```
/source-trace "digit span average of 7"
/source-trace "d=0.74 for methylphenidate"
/source-trace --file src/components/AssessmentResults.tsx
/source-trace --audit
```

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│  INPUT: Metric/Claim/File                                │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 1: Locate in Codebase                              │
│  - If text: grep for the metric in all .tsx/.ts/.md files │
│  - If --file: scan file for all numeric claims            │
│  - Record: file path, line number, surrounding context    │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 2: Cross-Reference EVIDENCE.md                     │
│  - Find matching entry in EVIDENCE.md                     │
│  - If found: extract DOI/PMID, source, confidence         │
│  - If NOT found: flag as UNTRACED (critical finding)      │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 3: Verify Primary Source                           │
│  - Check DOI/PMID resolves to a real paper                │
│  - Verify the cited number matches the paper's finding    │
│  - Check for retractions or corrections                   │
│  - Check if newer evidence supersedes this source         │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 4: Generate Trace Report                           │
│  - Full chain: App → EVIDENCE.md → Paper → Finding        │
│  - Flag any broken links in the chain                     │
│  - Flag any discrepancies (e.g., app says d=0.8 but       │
│    paper says d=0.74)                                     │
└─────────────────────────────────────────────────────────┘
```

## Output Format

### Single Trace
```markdown
## Source Trace Report

### Target
> [The metric or claim being traced]

### Trace Chain
| Step | Location | Value |
|------|----------|-------|
| App Display | `src/components/X.tsx:42` | "average digit span of 7" |
| EVIDENCE.md | Claim: "Average adult forward digit span is 7 digits..." | HIGH confidence |
| Primary Source | Miller (1956) + Wechsler (2008) | Established normative data |
| DOI/PMID | PMID: [link] | Verified ✓ |

### Status: FULLY TRACED ✓
### Discrepancies: None
```

### File Audit (--file)
```markdown
## Source Trace Audit: [filename]

| Line | Claim/Metric | EVIDENCE.md Claim | Source | Status |
|------|-------------|-------------------|--------|--------|
| 15 | "7 digits" | Claim: "Average adult forward digit span..." | Miller (1956) | ✓ TRACED |
| 28 | "85-95% accuracy" | Claim: "Healthy adults achieve 85-95% accuracy..." | Owen et al. (2005) | ✓ TRACED |
| 42 | "improves by 30%" | — | — | ✗ UNTRACED |
| 55 | "d=0.74" | Claim: "Methylphenidate improves WM with d=0.74..." | Bolden et al. (2021) | ✓ TRACED |

### Summary
- Traced: 3/4 (75%)
- UNTRACED: 1 (Line 42: "improves by 30%")
- Action Required: Add EVIDENCE.md entry for line 42 or remove claim
```

### Full Audit (--audit)
Scans ALL `.tsx`, `.ts`, and `.md` files in `src/` for numeric claims, percentages, effect sizes, and scientific assertions. Produces a complete traceability matrix.

## Flags
| Flag | Effect |
|------|--------|
| `--file <path>` | Audit all claims in a specific file |
| `--audit` | Full codebase audit of all traceable claims |
| `--fix` | Interactively add missing EVIDENCE.md entries for UNTRACED claims |
| `--strict` | Fail (exit 1) if ANY claim is UNTRACED — useful for CI pipeline |

**Implementation note:** These flags are interpreted by Claude during command execution, not by a built-in parser. Claude reads the flag documentation and adjusts behavior accordingly. There is no automated flag parsing.

## Trace Status Definitions

| Status | Meaning | Action |
|--------|---------|--------|
| **FULLY TRACED** | App → EVIDENCE.md → DOI → Paper finding all match | None |
| **TRACED WITH DISCREPANCY** | Chain exists but values don't match | Fix the discrepancy |
| **UNTRACED** | No EVIDENCE.md entry for this claim | Add entry or remove claim |
| **BROKEN CHAIN** | EVIDENCE.md entry exists but DOI invalid or paper retracted | Find replacement source |
| **SUPERSEDED** | Newer evidence available that changes the finding | Update EVIDENCE.md |

## Tips
1. Run `--audit` before every release to catch untraced claims
2. Use `--strict` in CI/CD to block deploys with unverified claims
3. When adding new features, run `--file` on each new component
4. EVIDENCE.md entries use `## Claim:` headers — reference them by claim text snippet
