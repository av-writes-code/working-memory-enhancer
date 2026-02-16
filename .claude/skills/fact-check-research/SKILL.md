---
name: fact-check-research
description: Verify a scientific claim about working memory, ADHD, cognitive training, or related interventions against peer-reviewed literature. Searches PubMed and BioMCP, evaluates evidence quality using EBM hierarchy, and returns a structured verdict with confidence rating and EVIDENCE.md entry template.
allowed-tools: Read, Grep, Glob, WebSearch, WebFetch, Bash
argument-hint: [claim text in quotes]
disable-model-invocation: true
---

# Fact-Check Research Claim

Verify the claim: **$0**

## Process

### Step 1: Parse the Claim
- Extract the intervention/subject (e.g., "methylphenidate", "N-back training", "exercise")
- Extract the outcome (e.g., "improves working memory", "increases IQ", "reduces ADHD symptoms")
- Extract any quantifiers (e.g., "d=0.74", "30%", "significant")
- Note the target population if specified (e.g., "children", "adults with ADHD", "elderly")

### Step 2: Search Literature
Search using available MCP servers and web tools:
1. **PubMed**: Search for `[intervention] AND [outcome] AND (meta-analysis OR systematic review)` first
2. **BioMCP**: Search with keyword + disease parameters for broader coverage including preprints
3. **Web**: If MCP results insufficient, search PubMed directly via web
4. Collect the TOP 3-5 most relevant papers, prioritizing meta-analyses and RCTs

### Step 3: Evaluate Evidence
For each paper found:
- Assign Evidence Level (I-VI) per the evidence-hierarchy skill
- Note: Active vs passive control (prefer active-control effect sizes)
- Note: Sample size (flag N<20 per group as underpowered)
- Note: Replication status (has this been independently replicated?)
- Check for retractions

### Step 4: Assign Confidence
- **HIGH**: Level I-II, active control, N>100, replicated, d>0.30
- **MEDIUM**: Level II-III, OR Level I with caveats (small N, passive control, unreplicated)
- **LOW**: Level IV-V, OR single unreplicated study
- **INSUFFICIENT**: No peer-reviewed evidence found

### Step 5: Generate Report
Output using this exact format:

```markdown
## Fact-Check Report

### Claim
> [Original claim]

### Verdict: [SUPPORTED | PARTIALLY SUPPORTED | NOT SUPPORTED | INSUFFICIENT EVIDENCE | CONTRADICTED]

### Confidence: [HIGH | MEDIUM | LOW]

### Best Available Evidence
| Field | Value |
|-------|-------|
| Source | [Author et al., Year] |
| DOI/PMID | [Link] |
| Evidence Level | [I-VI] |
| Study Design | [Type] |
| Sample Size | N=[X] |
| Effect Size | [d/g/SMD=X.XX] |
| Control Type | [Active / Passive] |
| Replicated? | [Yes / No / Partial] |

### EVIDENCE.md Entry (ready to paste)
## Claim: [Statement]
- **Source**: [Author et al., Year]
- **DOI/PMID**: [Link]
- **Evidence Level**: [I-VI]
- **Study Design**: [Type]
- **Sample Size**: [N=X]
- **Effect Size**: [d/g=X.XX]
- **Replicated?**: [Yes/No/Partial]
- **Limitations**: [Brief]
- **Confidence**: [HIGH / MEDIUM / LOW]
```

### Step 6: Cross-Check
- Does the verdict match the evidence level and confidence?
- If claim included a specific number, does it match the literature?
- If INSUFFICIENT, explicitly state: "This claim should NOT appear in the app"
