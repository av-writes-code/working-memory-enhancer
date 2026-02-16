# MemoryForge

MemoryForge is a free, open-source web app that helps adults who struggle with working memory. If you lose track of numbers mid-calculation, forget what someone said by the end of their sentence, or can't hold a phone number in your head long enough to dial it, this tool gives you structured assessment and training grounded in cognitive science. It runs entirely in your browser, stores all data on your device, and never sends anything to a server.

## What This Is (And What It Isn't)

MemoryForge is a free tool for working memory screening and training. It measures your phonological loop and central executive function, identifies where you fall relative to published norms, and provides adaptive training exercises based on peer-reviewed protocols.

It is not a medical device. It is not a diagnostic tool. The assessments in this app are screening indications, not clinical diagnoses. A licensed psychologist with standardized instruments (WAIS-IV, WMS-IV) is the only path to a formal working memory diagnosis. MemoryForge can help you understand where you stand and give you a structured way to practice, but it cannot replace professional evaluation.

## The Science

Every scientific claim in this app traces back to peer-reviewed literature through our [EVIDENCE.md](EVIDENCE.md) registry. We take this seriously because health-adjacent apps that make unsourced claims erode trust and can cause real harm.

Here is what the research actually shows. Working memory training produces reliable near-transfer effects: you get better at the types of tasks you train on, with effect sizes around g=0.28-0.31 when measured against active controls. That is a real, meaningful improvement. In practical terms, expect gains of 0.3-0.7 standard deviations, roughly 1-2 additional span items on digit or spatial tasks.

What the research does not show is far-transfer to general intelligence. The effect size for IQ improvement from WM training is g=0.05, which is effectively zero. We will never claim that training with this app makes you smarter in a general sense. It makes you better at specific working memory tasks, and for people who struggle with those tasks daily, that matters.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Zustand (state management)
- Dexie.js (IndexedDB, all data stays on your device)
- Recharts (progress visualization)
- Vitest + Playwright (testing)

## Project Structure

```
/
├── src/                    Application source code
├── plugins/
│   └── research-validator/ Evidence validation plugin with commands and skills
├── docs/                   Agent governance and writing standards
│   ├── anti-patterns.md
│   ├── feedback-loop.md
│   ├── project-awareness.md
│   ├── self-review.md
│   └── writing-principles.md
├── EVIDENCE.md             Scientific claims registry (source of truth)
├── CLAUDE.md               Project rules and agent routing
├── 01-RESEARCH-SUMMARY.md  Cognitive science research
├── 02-USER-STORIES.md      User stories and epics
├── 03-BRD.md               Business requirements
├── 04-HLD.md               High-level design
├── 05-PROJECT-PLAN.md      Master project checklist
└── 06 through 09-*.md      Metrics, diagnostics, treatment protocols, MCP setup
```

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# Clone the repository
git clone https://github.com/arpitvyas/working-memory-enhancer.git
cd working-memory-enhancer

# Install dependencies
npm install

# Start the development server
npm run dev

# Run tests
npm test
```

## Evidence Standards

Every scientific claim displayed to users must have a corresponding entry in [EVIDENCE.md](EVIDENCE.md). Each entry includes the source, DOI or PMID, evidence level, study design, sample size, effect size, and confidence rating. No claim enters the app without this.

Three commands support the evidence workflow:

- `/fact-check` verifies a claim against peer-reviewed literature
- `/source-trace` traces a specific metric or number back to its source paper
- `/verify-evidence` audits the full EVIDENCE.md registry for completeness and accuracy

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Governance

This project uses an agent governance framework adapted from production projects. See:

- [CLAUDE.md](CLAUDE.md) for project rules and routing
- [docs/](docs/) for anti-patterns, writing principles, self-review, project awareness, and feedback loop documentation

## License

MIT. See [LICENSE](LICENSE).

## Disclaimer

MemoryForge is not a medical device and does not provide medical advice, diagnosis, or treatment. It is a screening and training tool for informational purposes only. Assessment results are screening indications, not clinical diagnoses. Always consult a licensed healthcare professional for medical decisions. Environmental factors (fatigue, distraction, anxiety) affect results. Retest on a different day before drawing conclusions.
