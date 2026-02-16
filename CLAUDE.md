# CLAUDE.md — MemoryForge

Free, open-source working memory enhancement tool. Helps people who struggle with retaining numbers, mental arithmetic, parsing complex sentences, and recalling verbal sequences.

**This is a health-adjacent app. Every scientific claim must trace to peer-reviewed literature. No exceptions.**

---

## Agent Governance — Read Before Writing Anything

You are working inside a project that presents health-related scientific information to users. What you write may influence health decisions. Before you write a single line of code or text, orient yourself.

Every time you start a task, spend a moment looking around. What does the existing code look like? What patterns are in place? Match them. Check EVIDENCE.md before writing any scientific claim. Read the governance docs before producing anything.

| Doc | What it helps with |
|-----|-------------------|
| [docs/project-awareness.md](docs/project-awareness.md) | How to read the repo and adapt to its conventions |
| [docs/writing-principles.md](docs/writing-principles.md) | Output quality standards for code, prose, and in-app text |
| [docs/self-review.md](docs/self-review.md) | Pre-submission checklist tied to project context |
| [docs/anti-patterns.md](docs/anti-patterns.md) | Common AI mistakes, with health-specific detection |
| [docs/feedback-loop.md](docs/feedback-loop.md) | How corrections should reshape your future work |

You're not generating output. You're contributing to a project where inaccurate claims can harm real people. Your job is to produce work that is scientifically honest, properly sourced, and fits so naturally that nobody can tell an AI wrote it.

---

## IMMOVABLE — These do not change

### Project Facts
- Name: MemoryForge
- Type: Free, open-source web app (NOT a medical device, NOT a diagnostic tool)
- Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Zustand, Dexie.js, Recharts, Vitest
- Architecture: Zero-server, client-only, local-first data, PWA-capable
- Deploy: Vercel free tier
- Target user: Adults with working memory difficulties (phonological loop + central executive deficits)

### Source of Truth (strict hierarchy)
| Priority | File | What it masters |
|----------|------|-----------------|
| 1 | `EVIDENCE.md` | Every scientific claim in the app |
| 2 | `plugins/research-validator/` | How claims are verified and maintained |
| 3 | Research docs (`01-` through `09-`) | Deep research backing the project |
| 4 | `src/` | The app itself |

**Rules:**
- Never add a scientific claim to the app without an EVIDENCE.md entry.
- Never modify a claim without updating EVIDENCE.md.
- Never present a screening result as a diagnosis.
- Never recommend a specific medication or dosage.
- When in doubt about a number, check EVIDENCE.md first.

### Zero Hallucination Protocol
Every scientific claim must carry a source: DOI, PMID, or specific reference. Never invent statistics, effect sizes, or study findings. If unknown, state "evidence not found" and flag for research. See `plugins/research-validator/skills/agent-governance/SKILL.md` for the full protocol.

### Qualifier Rules
- **HIGH confidence**: "Research shows..." / "Studies demonstrate..."
- **MEDIUM confidence**: "Research suggests..." / "Evidence indicates..."
- **LOW confidence**: "Preliminary research suggests..." / "One study found..."
- **INSUFFICIENT**: DO NOT include in app. Period.

---

## DYNAMIC — These evolve as the project progresses

### Current Phase
Phase 1: Project scaffolding (Next.js 15 + TypeScript + Tailwind + Vitest + Dexie.js + Zustand)

### Key Research Findings (Verified in EVIDENCE.md)
- WM training near-transfer: g=0.28-0.31 (active controls) — works for trained tasks
- WM training far-transfer to IQ: g=0.05 — does NOT work
- Methylphenidate for WM: d=0.74 (up to d=1.17 at high load)
- Exercise for memory: g=0.80 in sedentary adults
- Sleep deprivation WM impact: g=-0.555
- Realistic improvement range: 0.3-0.7 SD ≈ 1-2 additional span items

---

## File Map

```
/
├── CLAUDE.md                          ← you are here
├── EVIDENCE.md                        ← scientific claims registry (source of truth)
├── .gitignore
├── 01-RESEARCH-SUMMARY.md            ← cognitive science research
├── 02-USER-STORIES.md                ← 8 epics, 22 user stories
├── 03-BRD.md                         ← business requirements
├── 04-HLD.md                         ← high-level design
├── 05-PROJECT-PLAN.md                ← master checklist (10 phases)
├── 06-IMPROVEMENT-CASES-AND-METRICS.md ← documented cases with effect sizes
├── 07-DIAGNOSTIC-GUIDE.md            ← clinical diagnostic standards
├── 08-TREATMENT-PROTOCOLS.md         ← medication and intervention guide
├── 09-MCP-SERVERS-AND-RESEARCH-TOOLS.md ← MCP server setup
├── docs/                              ← agent governance (5 docs)
│   ├── anti-patterns.md
│   ├── feedback-loop.md
│   ├── project-awareness.md
│   ├── self-review.md
│   └── writing-principles.md
├── plugins/
│   └── research-validator/            ← evidence validation plugin
│       ├── .claude-plugin/plugin.json
│       ├── .mcp.json
│       ├── README.md
│       ├── CONNECTORS.md
│       ├── commands/                  ← /fact-check, /source-trace, /verify-evidence
│       └── skills/                    ← 5 knowledge skills
└── .claude/
    └── skills/                        ← 2 root-level callable skills
        ├── fact-check-research/
        └── source-trace/
```

---

## Skills — When to Reach for What

**"I need to verify a scientific claim"**
→ `.claude/skills/fact-check-research` or command `/fact-check`

**"I need to trace where a number came from"**
→ `.claude/skills/source-trace` or command `/source-trace`

**"I need to audit EVIDENCE.md"**
→ Command `/verify-evidence`

**"I need to understand WM science for building features"**
→ Skill `working-memory-science` (auto-activates)

**"I need medication/supplement data"**
→ Skill `pharmacology` (auto-activates)

**"I need screening thresholds or diagnostic criteria"**
→ Skill `diagnostic-standards` (auto-activates)

**"I need to evaluate study quality or assign evidence levels"**
→ Skill `evidence-hierarchy` (auto-activates)

**"I need the zero-hallucination rules"**
→ Skill `agent-governance` (always active for health content)

### Creating New Skills
After completing a multi-step task that required custom logic not covered above, ask: would a future session need to do this again? If yes, create a skill in `.claude/skills/` following the existing SKILL.md pattern, then add a routing line to this section.

---

## Workflow Rules

1. **Evidence-first** — check EVIDENCE.md before writing any health claim. If the claim isn't there, run `/fact-check` first.
2. **Source-trace every number** — any scientific metric displayed to users gets traced via `/source-trace`.
3. **Qualifier enforcement** — match phrasing to confidence level. No "research shows" for MEDIUM confidence claims.
4. **Disclaimer on every screen** — assessments, medications, red flags all need appropriate disclaimers.
5. **Active-control effect sizes only** — never cite passive-control comparisons as primary evidence.
6. **No far-transfer claims** — WM training does NOT improve IQ (g=0.05). Never claim otherwise.
