# Research Validator — Connectors & Data Sources

**Note:** The reference names below are documentation conventions for human readability. Claude Code resolves MCP servers by their registered names in `~/.claude.json`, not by these reference names. The names exist to make this document easier to scan and cross-reference.

## Connector Categories

Skills and commands in this plugin reference the data sources listed below. MCP servers are configured globally in `~/.claude.json` and resolved by their registered server name at runtime.

| Reference Name | Description | Current Server | Alternative Options |
|----------------|-------------|---------------|---------------------|
| pubmed | PubMed/MEDLINE indexed articles (35M+ records) | `pubmed` MCP (@cyanheads/pubmed-mcp-server) | Direct NCBI E-Utilities API, Semantic Scholar |
| preprints | bioRxiv, medRxiv, Europe PMC preprints | `biomcp` MCP (biomcp-python) | Scientific-Papers MCP (@futurelab-studio/latest-science-mcp) |
| clinical-trials | ClinicalTrials.gov registered trials | `biomcp` MCP (biomcp-python) | Direct ClinicalTrials.gov API |
| citations | Citation networks, h-index, impact metrics | Not connected | Semantic Scholar MCP (@xbghc/semanticscholar-mcp), OpenAlex MCP |
| web-search | General web for grey literature, guidelines | Not connected | Brave Search MCP (free 2K/mo), Exa MCP |

## Data Source Tiers

### Tier 1: Connected & Verified (Use These)

**PubMed MCP** (reference name: pubmed)
- Server: `@cyanheads/pubmed-mcp-server` v1.4.5
- Access: Free, no API key required (10 req/sec; 30 req/sec with optional NCBI_API_KEY)
- Capabilities: Search by MeSH terms, keyword, author, date range; fetch abstracts; get article metadata
- Limitation: Returns abstracts only, NOT full-text PDFs. For full text, follow DOI links or use PMC.
- Verified: 2026-02-15 — returned 575 results for "working memory training ADHD"

**BioMCP** (reference names: preprints, clinical-trials)
- Server: `biomcp-python` v0.7.1
- Access: Free, no API key required
- Capabilities: Article search (keyword + disease + gene + chemical + variant), clinical trial search, preprint access
- Limitation: Requires Python 3.10+ (use `--python 3.11` flag with uv). First run downloads ~80 packages.
- Verified: 2026-02-15 — returned 7+ papers with DOIs for keyword="working memory" disease="ADHD"

### Tier 2: Not Connected (Future Expansion)

**Semantic Scholar** — 200M+ papers, citation networks, TL;DR summaries, h-index
- Package: `@xbghc/semanticscholar-mcp` (verified exists on npm)
- API key: Free at semanticscholar.org (recommended, 1 req/sec without)
- Would power: citations reference category

**OpenAlex** — 474M+ works, CC0 open data, institutional affiliations
- Package: `openalex-research-mcp` (via uvx)
- API key: Free at openalex.org (100K credits/day)
- Would power: citations reference category (alternative)

**Scientific Papers MCP** — arXiv + OpenAlex + PMC full-text + Europe PMC + CORE
- Package: `@futurelab-studio/latest-science-mcp` v0.1.40
- API key: None required
- Would power: preprints reference category (broader coverage)

**Brave Search** — General web search for guidelines, org websites, grey literature
- Package: `@anthropic/brave-search-mcp`
- API key: Free at brave.com/search/api/ (2K queries/month)
- Would power: web-search reference category

### Tier 3: Hard-Coded Data (No API Exists)

The following data has no live API and is encoded directly in SKILL.md files:

| Data | Location | Source |
|------|----------|--------|
| EBM evidence pyramid (Levels I–VI) | `skills/evidence-hierarchy/SKILL.md` | Oxford CEBM, widely accepted |
| Effect size interpretation thresholds | `skills/evidence-hierarchy/SKILL.md` | Cohen (1988), Sawilowsky (2009) |
| WM normative data (digit span, Corsi, N-back) | `skills/working-memory-science/SKILL.md` | Wechsler (2008), Kessels (2000) |
| ASRS-5 / ASRS v1.1 scoring thresholds | `skills/diagnostic-standards/SKILL.md` | Ustun et al. (2017), WHO (2005) |
| DSM-5 ADHD-Inattentive criteria | `skills/diagnostic-standards/SKILL.md` | APA DSM-5 (2013) |
| Medication dosages & effect sizes | `skills/pharmacology/SKILL.md` | Referenced meta-analyses and RCTs |

## Adding a New Connector

1. Find/verify the MCP server package (`npm view` or `uv pip show`)
2. Add entry to `.mcp.json` with command, args, env
3. Add a reference name entry to this file with status and capabilities
4. Test with a real query and document the verification date
5. Update skills that reference the category
