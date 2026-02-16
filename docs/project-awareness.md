# Project Awareness

Before you do anything, figure out what kind of project you're in. This isn't busywork. It's the difference between contributing and creating cleanup tasks for someone else.

## What This Project Is

MemoryForge is a free, open-source working memory enhancement tool. It helps people who struggle with retaining numbers, doing mental arithmetic, parsing complex sentences, and recalling verbal sequences. It is NOT a medical device, NOT a diagnostic tool, and NOT a substitute for professional evaluation.

The tech stack: Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Zustand, Dexie.js (IndexedDB), Recharts, Vitest. Zero-server architecture. Everything runs client-side. Privacy-first, local-first data.

The scientific foundation: All claims trace to peer-reviewed literature via EVIDENCE.md. The research-validator plugin enforces evidence standards.

## The Repo Scan (Do This Every Session)

Spend your first few moments building a mental model. You're looking for signals, not reading every file.

**Structure and stack.** Check `package.json` for the framework and dependencies. Look at `src/` layout for the component hierarchy. Check `tsconfig.json` and `tailwind.config.ts` for project configuration. This shapes every decision you make.

**Existing conventions.** Open 3-4 files in the area you'll be working in. Notice:

- How are things named? Components in PascalCase, utilities in camelCase, files in kebab-case.
- How long are functions? Match the existing complexity level.
- How are imports organized? Check the pattern in existing files.
- How are errors handled?
- What testing patterns are used? Check `__tests__/` or `*.test.ts` files.

**Config files are decisions.** `.eslintrc`, `.prettierrc`, `tsconfig.json` all encode team preferences. Read them. They're telling you what the team cares about.

**EVIDENCE.md is the source of truth for science.** Before writing any health-related content, check EVIDENCE.md first. If the claim isn't there, it can't go in the app.

**Recent history.** Run `git log --oneline -20` and skim. What kind of changes are happening? That tells you the current priorities and the level of polish expected.

## Adapt, Don't Impose

This is the most important section in this entire doc.

You have preferences and defaults. Ignore them. The project's conventions win every time, even if you think your way is better. Consistency across a codebase matters more than any individual best practice.

Some examples of what this means in practice:

- The project uses a specific state management pattern? Follow it.
- The project structures components a certain way? Match it.
- The project handles errors with a specific pattern? Use it.
- The existing tests use a specific structure? Mirror it.

Your job is to write code that looks like the next logical commit from a team member, not a contribution from a visiting consultant who wants to show everyone a better way.

## Health Content Has Extra Rules

This isn't a blog or a SaaS product. The app presents scientific information that users may act on for their health. That means:

1. **Every scientific claim needs an EVIDENCE.md entry.** No exceptions. Check before you write.
2. **Qualifiers match confidence levels.** HIGH = "research shows." MEDIUM = "research suggests." LOW = "preliminary research suggests." Never "proven."
3. **Assessments are screenings, not diagnoses.** The language must always reflect this.
4. **Medications are informational, not prescriptive.** Always include the "consult a physician" disclaimer.
5. **Effect sizes must be from active-control comparisons** when available. Never cherry-pick the most impressive number.

## When Conventions Are Missing

Sometimes there's no clear pattern. The codebase is inconsistent, or you're working in a new area that doesn't have precedent. In that case:

1. Look at the most recently modified files in the same area.
2. Check if there's a style guide or CONTRIBUTING doc you missed.
3. If you're still unsure, pick the simplest reasonable approach and note your choice.

## Things You Can't See (But Should Ask About)

Every project has invisible context. When you encounter something that doesn't make sense, resist the urge to "fix" it. It might be load-bearing weirdness.

If a task depends on context you don't have, say so directly. "I see the assessment uses a non-standard scoring method here. Is that intentional, or should I follow the pattern described in the diagnostic-standards skill?" That kind of question prevents expensive mistakes.
