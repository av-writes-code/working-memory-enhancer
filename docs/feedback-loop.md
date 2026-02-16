# Feedback Loop

This doc describes how to learn from the project as you work in it, and how to get better at contributing to this specific codebase over time.

## Learning From the Repo Itself

The codebase is your best teacher. Every file you read is a lesson in how this team thinks.

**Notice patterns, not just syntax.** How does the team handle errors? Do they prefer early returns or nested conditionals? Are utility functions centralized or co-located? These choices aren't random. They reflect team preferences, and your work should reflect them too.

**Recent changes carry the most weight.** Code from three months ago might follow deprecated conventions. Code merged last week shows you what the team expects right now. When conventions conflict across the repo, favor the newer patterns, especially in the area you're working in.

**Tests reveal expectations.** The way tests are written tells you what the team considers important to verify. If they test behavior, not implementation, don't write implementation-coupled tests. Match the testing style that's already there.

**EVIDENCE.md reveals the scientific standard.** Look at how existing entries are structured, what level of detail they include, and how confidence ratings are assigned. New entries should be indistinguishable from existing ones.

## Learning From Corrections

When someone pushes back on your work, treat it like a config update, not a one-off fix.

**Categorize the correction.** Was it about:

- **Convention?** You missed a pattern that exists in the codebase. Go find three more examples of the right way so you internalize it.
- **Scope?** You did more or less than was asked. Recalibrate your sense of what "done" means for this team.
- **Quality?** The code worked but wasn't clean enough. Look at what "clean" means in this specific repo.
- **Evidence?** You made a scientific claim without proper backing, used the wrong qualifier, or cited passive-control effects. Go back to the evidence-hierarchy skill and recalibrate.
- **Tone?** Your writing didn't fit the project's voice. Re-read the existing docs and adjust.

**Ask if it's a one-time thing or a general rule.** Sometimes feedback is situational. Sometimes it reveals a principle you should apply everywhere. If you're not sure, ask.

## The Session Checkpoint

For tasks that span more than a handful of steps, pause at the midpoint and reflect:

- Am I still matching the project's conventions, or have I been drifting?
- Have I made any assumptions I haven't verified?
- Is the scope of my changes still aligned with what was asked?
- For health content: have I checked all my claims against EVIDENCE.md?
- If I showed this to a team member right now, what would they flag?

This isn't overhead. It's the cheapest form of quality control you have.

## Audit Lessons (Phase 0 → Phase 1 Transition)

The Phase 0 audit (2026-02-15) found that 5/15 EVIDENCE.md entries had wrong author-PMC ID mappings, and several scientific claims were inaccurate. These corrections shaped three new anti-patterns and two process rules.

**Lesson 1: Never trust AI-generated citations without PubMed verification.** AI agents confidently generate plausible author names attached to real PMC IDs. The only reliable check is querying the actual database. Added as "The Citation Fabricator" in anti-patterns.md.

**Lesson 2: Instrument version mismatches are clinically dangerous.** ASRS v1.1 and ASRS-5 have different scoring methods that produce different results. Conflating them would have given users wrong screening results. Added as "The Version Conflator" in anti-patterns.md.

**Lesson 3: Audit before building, not after shipping.** The decision to audit all 31 files before starting Phase 1 caught problems that would have been baked into the app's foundation. This should be a standard gate between phases: research → audit → build.

**Lesson 4: Sample sizes and study designs must be verified independently.** Calling a single-site study (N=70) a "meta-analysis (K=38)" inflates its evidence level. Added as "The Sample Size Inventor" in anti-patterns.md.

**Lesson 5: When copying architecture from another project, audit the conventions.** The ~~category syntax from the BESS plugin doesn't exist in Claude Code. Adopting patterns without verifying they work in the target environment creates dead code.

**Process rule added to CLAUDE.md (rules 7-13):** Population specificity, adverse effect disclosure, statistical vs clinical significance, conflict of interest transparency, outdated evidence removal, screening vs diagnosis language, recommendation authority boundary.

## Evolving These Docs

These instruction files are not static. They should grow with the project.

When you encounter a pattern that isn't covered here but should be, note it. When a correction reveals a gap in these docs, suggest an addition. The goal is that every lesson learned gets encoded somewhere, so the same mistake doesn't repeat.

If a health claim error keeps appearing in corrections, it belongs in `anti-patterns.md`. If a scientific convention keeps getting missed, it belongs in the evidence-hierarchy skill. Write it down.
