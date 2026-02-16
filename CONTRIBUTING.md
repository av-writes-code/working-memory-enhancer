# Contributing to MemoryForge

## Before You Start

Read these files first:

1. [CLAUDE.md](CLAUDE.md) for project rules, the routing table, and workflow rules
2. [docs/project-awareness.md](docs/project-awareness.md) for how to adapt to this codebase
3. [docs/writing-principles.md](docs/writing-principles.md) for output quality standards
4. [docs/anti-patterns.md](docs/anti-patterns.md) for common mistakes to avoid

## The Evidence Requirement

This is a health-adjacent app. Every scientific claim displayed to users MUST have a corresponding entry in [EVIDENCE.md](EVIDENCE.md). No exceptions.

Before adding any health-related content:

1. Write the claim in plain English.
2. Run `/fact-check` to verify it against peer-reviewed literature.
3. Add the EVIDENCE.md entry with all required fields: source, DOI/PMID, evidence level, study design, sample size, effect size, and confidence.
4. Use the correct qualifier for the confidence level. HIGH confidence: "research shows." MEDIUM confidence: "research suggests." LOW confidence: "preliminary research suggests."
5. If confidence is INSUFFICIENT, the claim cannot appear in the app.

## Code Contributions

### Setup

```bash
git clone https://github.com/arpitvyas/working-memory-enhancer.git
cd working-memory-enhancer
npm install
npm run dev
npm test
```

### Before Submitting

Run through the self-review checklist in [docs/self-review.md](docs/self-review.md). Pay special attention to:

- The Evidence Check (for any health content)
- The Health Authorization Check (for any content users might act on)
- The Population Match Check (for any effect sizes or normative data)

### Testing

Follow the test pyramid: 70% unit, 20% integration, 10% E2E. Tests must pass before submitting.

### Commit Messages

Write messages that tell a story. Not "fix bug" or "update code." Something like "Fix digit span scoring: backward span was counting forward-only trials."

## What Not to Do

- Don't add health claims without EVIDENCE.md entries.
- Don't use passive-control effect sizes when active-control data exists.
- Don't present screening results as diagnoses.
- Don't recommend specific medications or dosages.
- Don't claim WM training improves IQ (it doesn't, g=0.05).
- Don't add "brain training makes you smarter" language.
- Don't skip disclaimers on assessment or medication screens.

## Questions?

Open an issue on GitHub.
