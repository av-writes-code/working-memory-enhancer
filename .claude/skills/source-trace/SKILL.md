---
name: source-trace
description: Trace a metric, number, or scientific claim in the MemoryForge app back to its origin peer-reviewed paper. Produces an audit trail from app code → EVIDENCE.md → primary literature. Use when verifying data integrity of any displayed number or scientific assertion.
allowed-tools: Read, Grep, Glob, WebSearch, WebFetch, Bash
argument-hint: [metric or claim to trace] [--file path (optional)]
disable-model-invocation: true
---

# Source Trace

Trace the origin of: **$0**

## Process

### Step 1: Locate in Codebase
- Search all `.tsx`, `.ts`, and `.md` files in `src/` for the metric or claim
- Record: file path, line number, exact text, surrounding context
- If `--file` argument provided ($1), scan only that file

### Step 2: Cross-Reference EVIDENCE.md
- Read `EVIDENCE.md` at project root
- Search for a matching entry (by claim text, effect size, or metric value)
- If found: extract DOI/PMID, source author, confidence rating
- If NOT found: mark as **UNTRACED** — this is a critical finding

### Step 3: Verify Primary Source
- Check the DOI resolves (search web for the DOI URL)
- Verify the cited value matches what the paper actually reports
- Check for retractions or corrections
- Check if newer systematic reviews supersede this source

### Step 4: Generate Trace Report
Output using this exact format:

```markdown
## Source Trace Report

### Target
> [The metric or claim being traced]

### Trace Chain
| Step | Location | Value |
|------|----------|-------|
| App Display | `[file:line]` | "[exact text]" |
| EVIDENCE.md | Claim: "[matching claim text]" | "[entry summary]" |
| Primary Source | [Author (Year)] | [finding as stated in paper] |
| DOI/PMID | [link] | [Verified ✓ / Not Found ✗] |

### Status: [FULLY TRACED | TRACED WITH DISCREPANCY | UNTRACED | BROKEN CHAIN]

### Discrepancies
[List any mismatches between app display, EVIDENCE.md, and primary source]

### Action Required
[What needs to be done, if anything]
```

### Step 5: If UNTRACED
- This claim MUST either get an EVIDENCE.md entry or be removed from the app
- Search PubMed for supporting evidence
- If evidence found: create draft EVIDENCE.md entry
- If no evidence: flag for removal with specific file:line reference
