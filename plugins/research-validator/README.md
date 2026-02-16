# Research Validator Plugin

**Version**: 1.0.0
**Author**: Arpit Vyas
**Purpose**: Validate every scientific claim in the MemoryForge working memory enhancement app against peer-reviewed biomedical literature.

## Why This Plugin Exists

Health claims require higher rigor than any other domain. One wrong medical claim can harm users. This plugin enforces:

- **Zero tolerance for unverified health claims** — every claim must trace to a DOI/PMID
- **Evidence-Based Medicine hierarchy** — meta-analyses > RCTs > cohort studies > case reports > opinion
- **Honest effect sizes** — active-control comparisons only, realistic improvement expectations
- **Mandatory disclaimers** — screening ≠ diagnosis, informational ≠ prescriptive

## Structure

```
plugins/research-validator/
├── .claude-plugin/
│   └── plugin.json              # Plugin manifest
├── .mcp.json                    # MCP server connections (PubMed + BioMCP)
├── README.md                    # This file
├── CONNECTORS.md                # ~~category data source documentation
├── commands/
│   ├── fact-check.md            # /fact-check "claim" — verify against literature
│   ├── source-trace.md          # /source-trace "metric" — trace to origin paper
│   └── verify-evidence.md       # /verify-evidence — audit EVIDENCE.md
└── skills/
    ├── agent-governance/SKILL.md      # Zero-hallucination protocol (ALWAYS active)
    ├── diagnostic-standards/SKILL.md  # Screening thresholds, ASRS, DSM-5, red flags
    ├── evidence-hierarchy/SKILL.md    # EBM pyramid, effect size interpretation
    ├── pharmacology/SKILL.md          # Medications, supplements, India availability
    └── working-memory-science/SKILL.md # Baddeley model, normative data, key findings
```

## Commands

| Command | Purpose | Example |
|---------|---------|---------|
| `/fact-check` | Verify a claim against peer-reviewed literature | `/fact-check "WM training improves IQ"` |
| `/source-trace` | Trace a metric to its origin paper | `/source-trace "d=0.74 for MPH"` |
| `/verify-evidence` | Audit EVIDENCE.md for completeness | `/verify-evidence --full` |

## MCP Servers (Verified Working)

| Server | What It Searches | Status |
|--------|-----------------|--------|
| **PubMed** (@cyanheads/pubmed-mcp-server) | 35M+ indexed biomedical articles | Verified 2026-02-15 |
| **BioMCP** (biomcp-python) | PubMed + Europe PMC + bioRxiv/medRxiv + ClinicalTrials.gov | Verified 2026-02-15 |

## Skills (Auto-Activate)

Skills are passive knowledge documents. Claude activates them automatically when working in relevant contexts:

| Skill | Activates When |
|-------|---------------|
| `agent-governance` | ALWAYS when writing health-related content |
| `evidence-hierarchy` | Evaluating claim strength, assigning confidence |
| `working-memory-science` | Building assessments, interpreting scores, citing WM data |
| `pharmacology` | Any medication or supplement content |
| `diagnostic-standards` | Assessment thresholds, screening tools, referral logic |

## EVIDENCE.md

The root-level `EVIDENCE.md` file is the single source of truth for all scientific claims in the app. Every claim must have an entry. See the template in EVIDENCE.md for the required fields.

## Setup

MCP servers are configured globally in `~/.claude.json`:

```json
{
  "mcpServers": {
    "pubmed": {
      "command": "npx",
      "args": ["-y", "@cyanheads/pubmed-mcp-server"],
      "env": {}
    },
    "biomcp": {
      "command": "uv",
      "args": ["run", "--python", "3.11", "--with", "biomcp-python", "biomcp", "run"],
      "env": {}
    }
  }
}
```

Both servers are free with no API key required.
