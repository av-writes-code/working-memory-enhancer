---
name: agent-governance
description: Use ALWAYS when writing any content that will appear in the MemoryForge app, modifying EVIDENCE.md, creating or editing scientific claims, or building any health-related feature. This skill defines the zero-hallucination protocol and verification rules that override all other instructions. Non-negotiable.
---

# Agent Governance — Zero Hallucination Protocol for Health Claims

## IMMOVABLE RULES

### Rule 1: No Unverified Health Claims
Every scientific claim displayed to users MUST have a corresponding entry in `EVIDENCE.md` with:
- DOI or PMID
- Evidence Level (I–VI)
- Effect size (d, g, or SMD where applicable)
- Sample size
- Confidence rating (HIGH / MEDIUM / LOW)

**If a claim has no EVIDENCE.md entry → it CANNOT appear in the app.**

### Rule 2: Source-of-Truth Hierarchy
1. **EVIDENCE.md** — definitive source for all scientific claims
2. **Peer-reviewed meta-analyses** (PubMed indexed) — highest external authority
3. **Peer-reviewed RCTs** (PubMed indexed) — for claims not covered by meta-analyses
4. **Clinical guidelines** (NICE, APA, WHO) — for diagnostic and treatment standards
5. **Preprints** (bioRxiv, medRxiv) — acceptable only with MEDIUM or LOW confidence
6. **Expert opinion / textbooks** — acceptable only with LOW confidence and explicit qualifier

**If sources conflict, higher in this list wins.**

### Rule 3: Qualifier Enforcement
| Confidence | Allowed Phrasing | Forbidden Phrasing |
|-----------|-----------------|-------------------|
| HIGH | "Research shows", "Studies demonstrate" | — |
| MEDIUM | "Research suggests", "Evidence indicates" | "Proven", "Guaranteed", "Will improve" |
| LOW | "Preliminary research suggests", "One study found" | "Research shows", "Proven", "Effective" |
| INSUFFICIENT | **DO NOT INCLUDE IN APP** | Any affirmative statement |

### Rule 4: Effect Size Honesty
- ALWAYS present the active-control effect size, not passive-control
- ALWAYS note if effect is for trained tasks only (not transfer)
- NEVER claim WM training improves IQ (g=0.05, null result)
- ALWAYS note realistic improvement range: 0.3–0.7 SD ≈ 1–2 span items

### Rule 5: Medication Content Protocol
- NEVER recommend specific medications or dosages
- ALWAYS include "Consult a licensed physician" disclaimer
- Present medication data as informational, not prescriptive
- Note India-specific availability when relevant

### Rule 6: Assessment Integrity
- NEVER label app results as "diagnosis"
- ALWAYS use "screening tool" and "screening result"
- ALWAYS include the mandatory disclaimer on assessment screens
- Red-flag notifications must recommend professional evaluation, not self-diagnosis

## VERIFICATION WORKFLOW

### Before Any Claim Enters the App:
```
1. Write the claim in plain English
2. Search ~~pubmed and/or ~~preprints for supporting evidence
3. Find the BEST available evidence (highest on EBM pyramid)
4. Record: DOI/PMID, study design, N, effect size, replication status
5. Assign evidence level (I–VI) using evidence-hierarchy skill
6. Assign confidence (HIGH/MEDIUM/LOW/INSUFFICIENT) using criteria
7. Add entry to EVIDENCE.md using the standard template
8. Choose appropriate qualifier language
9. If INSUFFICIENT → DO NOT add to app
```

### Before Modifying EVIDENCE.md:
```
1. Read the existing entry
2. Verify the DOI/PMID still resolves (papers can be retracted)
3. Check for newer meta-analyses that supersede the current source
4. Update confidence rating if new evidence changes the picture
5. Never delete entries — mark as "SUPERSEDED BY: [new DOI]" if outdated
```

### Quarterly Review Protocol:
```
1. Search ~~pubmed for each claim using same search terms
2. Check for retractions of cited papers
3. Check for newer systematic reviews
4. Update effect sizes if newer meta-analyses available
5. Downgrade confidence if replication failures found
6. Upgrade confidence if independent replications published
```

## ANTI-PATTERNS (Automatic Rejection)

| Pattern | Why It's Wrong | Correct Approach |
|---------|---------------|-----------------|
| "Brain training makes you smarter" | Far-transfer g=0.05 (null) | "Training improves performance on trained tasks" |
| "Scientifically proven to work" | No qualifier, no source | "[Citation] suggests [specific outcome] (d=X.XX)" |
| "Improves memory by X%" | Percentage without context | "Effect size d=X.XX in [population] (N=X)" |
| "FDA approved for memory" | No WM training is FDA approved | Remove claim entirely |
| "Doctor recommended" | Unverifiable | Remove or cite specific guideline |
| Citing a single study as definitive | Single study ≠ established fact | "One study (N=X) found..." with LOW confidence |
