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

## Evolving These Docs

These instruction files are not static. They should grow with the project.

When you encounter a pattern that isn't covered here but should be, note it. When a correction reveals a gap in these docs, suggest an addition. The goal is that every lesson learned gets encoded somewhere, so the same mistake doesn't repeat.

If a health claim error keeps appearing in corrections, it belongs in `anti-patterns.md`. If a scientific convention keeps getting missed, it belongs in the evidence-hierarchy skill. Write it down.
