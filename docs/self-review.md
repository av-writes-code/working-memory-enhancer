# Self-Review

Run this before you consider any task done. Not as a formality. Actually think through each item in the context of what you just produced and the project you're working in.

## The Project Fit Check

This comes first because nothing else matters if your output doesn't belong in this repo.

- Does my code follow the naming conventions I observed during the repo scan?
- Does it match the style, structure, and complexity level of surrounding code?
- If the project has a linter or formatter config, does my code pass it?
- Did I add any dependencies? If so, is that consistent with how this project handles deps?
- If I wrote tests, do they follow the existing test patterns?
- Would a team member look at this in a diff and think "yeah, that looks like ours"?

## The Evidence Check (Health Content Only)

This is specific to MemoryForge. Skip if your task doesn't touch health-related content.

- Does every scientific claim I've written or modified have a corresponding entry in EVIDENCE.md?
- Are the qualifiers appropriate for the confidence level? (HIGH = "shows", MEDIUM = "suggests", LOW = "preliminary research suggests")
- Am I using active-control effect sizes, not passive-control?
- Have I included all mandatory disclaimers? (screening ≠ diagnosis, consult physician for meds)
- Did I cite the source naturally in the text?
- Am I presenting realistic improvement expectations (0.3-0.7 SD, not "transform your brain")?

## The Health Authorization Check

This applies to ANY content that a user might act on for their health.

- Does this content present the app as providing medical advice? If yes, rewrite it.
- Am I using language that implies treatment efficacy? ("cure," "treat," "remedy," "heal")
- Have I included the appropriate disclaimer BEFORE the claim, not after or below the fold?
- Does the app present assessment results as screening indications, not diagnoses? Check the actual code.
- Am I presenting realistic improvement ranges (0.3-0.7 SD), not aspirational outcomes?
- If I mention a medication, does the same section include "consult a licensed physician"?
- Could a user reading this reasonably conclude they don't need to see a doctor? If yes, rewrite it.

## The Population Match Check

Evidence applies to specific populations. Don't generalize beyond what was studied.

- Is the cited effect size from the same population the app targets? (adults vs children, clinical vs healthy, elderly vs young)
- If not, have I added an explicit caveat about the population mismatch?
- Am I citing a subgroup analysis as if it applies to the full population?
- Does the N-back accuracy norm I'm using come from healthy adults, or from a neuroimaging convenience sample?
- Is the medication effect size from an ADHD population being presented to users who may not have ADHD?

## The Quality Check

- Does this actually solve the problem that was asked about? Not a related problem. The actual one.
- Is the solution proportional to the problem? Simple problems get simple solutions.
- Am I introducing complexity that the current problem doesn't require?
- Have I left any placeholders, TODOs, or "implement later" stubs in finished work?
- Does error handling exist where failures are realistically possible?

## The Writing Check

For any prose, docs, comments, or in-app text:

- No em-dashes
- No banned phrases from writing-principles.md
- Tone matches the project's existing documentation voice
- No throat-clearing or preamble
- Length matches the importance and complexity of what's being communicated
- Health claims use appropriate qualifiers

## Drift Detection

These are patterns that creep in gradually over a session. Check for them especially on longer tasks.

**Convention drift.** You started by matching the project's style, but over time you've been sliding toward your defaults. Compare your latest output against the first thing you wrote in this session.

**Scope drift.** The task was to fix a bug, and now you're refactoring the module. Unless you were asked to, pull back.

**Confidence drift.** Early in a session you hedge appropriately. Later, you start making assertions about the codebase or the science that you haven't actually verified. If you're not sure, look it up in EVIDENCE.md or ask.

**Formatting drift.** More headers, more bold text, more bullet points than the task warrants. Ask whether the formatting serves the reader or just fills space.
