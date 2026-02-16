# MCP Servers & Research Validation Tools

## Date: 2025-02-15

---

## 1. RECOMMENDED MCP SERVERS FOR MEDICAL/NEUROSCIENCE RESEARCH

### Tier 1: Essential (Install First, ALL FREE)

| Server | Sources | API Key | Install Command |
|--------|---------|---------|-----------------|
| **BioMCP** | PubMed + ClinicalTrials.gov + bioRxiv/medRxiv + genomic variants | None needed | `claude mcp add-json "biomcp" '{"command":"uv","args":["run","--with","biomcp-python","biomcp","run"]}'` |
| **Semantic Scholar MCP** | 200M+ papers, citation networks, h-index, TL;DR | Free (recommended) | `claude mcp add-json "semantic-scholar" '{"command":"npx","args":["-y","@jackkuo666/semanticscholar-mcp-server"]}'` |
| **PubMed MCP** (cyanheads) | Deep PubMed with MeSH terms | Free NCBI key | `claude mcp add-json "pubmed" '{"command":"npx","args":["@cyanheads/pubmed-mcp-server"],"env":{"NCBI_API_KEY":"YOUR_KEY"}}'` |

### Tier 2: Broader Coverage (ALL FREE)

| Server | Sources | Install |
|--------|---------|---------|
| **Scientific-Papers-MCP** | arXiv + OpenAlex + PMC full-text + Europe PMC + bioRxiv/medRxiv + CORE | `claude mcp add-json "scientific-papers" '{"command":"npx","args":["-y","@futurelab-studio/latest-science-mcp@latest"]}'` |
| **arXiv MCP** | Preprints, local storage | `npx -y @smithery/cli install arxiv-mcp-server --client claude` |
| **OpenAlex MCP** | 474M+ works, CC0 data | `claude mcp add-json "openalex" '{"command":"uvx","args":["openalex-research-mcp"]}'` |

### Tier 3: Web Research + Verification (Some Paid)

| Server | Purpose | Cost |
|--------|---------|------|
| **Brave Search MCP** | General web search | Free (2K queries/mo) |
| **Perplexity MCP** | AI-synthesized research | Paid |
| **Exa MCP** | Dedicated `research_paper_search` tool | Free tier available |
| **Reka Research MCP** | AI fact-checking claims | Paid |

### Free API Keys Needed

| Service | URL | Free? |
|---------|-----|-------|
| NCBI/PubMed | https://www.ncbi.nlm.nih.gov/account/ | Yes (10 req/sec) |
| Semantic Scholar | semanticscholar.org account settings | Yes (1 req/sec) |
| OpenAlex | https://openalex.org/settings/api | Yes (100K credits/day) |
| Brave Search | https://brave.com/search/api/ | Yes (2K queries/month) |

---

## 2. RESEARCH VALIDATION FRAMEWORK

### Evidence Pyramid (Standard EBM Hierarchy)

| Level | Evidence Type | Weight |
|-------|-------------|--------|
| **I** | Systematic Reviews / Meta-Analyses | Highest |
| **II** | Randomized Controlled Trials (RCTs) | High |
| **III** | Non-Randomized Controlled Studies | Moderate |
| **IV** | Cohort / Case-Control Studies | Moderate-Low |
| **V** | Case Reports / Case Series | Low |
| **VI** | Expert Opinion / Narrative Reviews | Lowest |

### Claim Verification Template

For every scientific claim in our app:

```markdown
## Claim: [Statement]
- **Source**: [Author et al., Year]
- **DOI/PMID**: [Link]
- **Evidence Level**: [I-VI]
- **Study Design**: [Meta-analysis / RCT / Cohort / etc.]
- **Sample Size**: [N=X]
- **Effect Size**: [d=X.XX or g=X.XX]
- **Replicated?**: [Yes/No/Partial]
- **Limitations**: [Brief]
- **Confidence**: [HIGH / MEDIUM / LOW]
```

### EVIDENCE.md File (Mandatory for This Project)

We will maintain an `EVIDENCE.md` file in the repo root that tracks EVERY scientific claim made in the app, using the template above. This becomes our source-of-truth for research validation.

---

## 3. PLUGIN ARCHITECTURE DECISION

### What Exists in av-writes-code

The BESS Factory DPR repo demonstrates a production-grade plugin system:
- **2 plugins** (boq-constructor, project-finance-dpr) with 34 skills + 17 commands
- **Self-documenting skills** (SKILL.md pattern)
- **Agent governance** (CLAUDE.md with immovable facts, routing tables)
- **Source tracing** (every number tagged with origin)
- **Zero hallucination protocol**

### Recommendation for This Project

**YES, create a lightweight plugin** - but adapted for health/research context, not full BOQ-scale. Specifically:

1. **`fact-check-research` skill** (adapted from existing `fact-check-architecture`):
   - Takes a claim as input
   - Uses MCP servers (PubMed, Semantic Scholar) to find supporting evidence
   - Returns: paper, DOI, N, effect size, evidence level
   - Flags claims with insufficient evidence

2. **`source-trace` command** (adapted from existing `source-trace`):
   - Every metric in the app can be traced to its origin paper
   - EVIDENCE.md is the tracker (like FINANCIAL_SOURCE_TRACING.md in BESS)

3. **NOT overkill** because:
   - Health claims require HIGHER rigor than construction BOQs
   - One wrong medical claim could harm users
   - The plugin pattern is already proven in your other projects
   - It's 2-3 skill files, not 34

### What NOT to Build (Would Be Overkill):
- Full BOQ-style multi-agent orchestration
- 20+ skills for different research domains
- Automated systematic review engine
- Real-time paper monitoring pipeline
