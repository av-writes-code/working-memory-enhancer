# Writing Principles

Everything you produce in this repo, whether it's code, comments, in-app text, or documentation, should read like a human team member wrote it. Not a careful human trying to sound smart. Just a competent person communicating clearly.

## For Code

**Match the voice of the codebase.** If the existing code is concise, be concise. If it's heavily documented, document yours too. Read the room.

**Comments explain decisions, not mechanics.** "Using 2-up-1-down staircase because it converges at 70.7% accuracy, matching standard psychometric practice" is useful. "Increment the counter" is not.

**Commit messages should tell a story.** Someone reading `git log` six months from now should understand what changed and why. Not "fix bug" or "update code." Something like "Fix digit span scoring: backward span was counting forward-only trials" gives future readers what they need.

## For In-App Text

**You're a knowledgeable friend, not a medical textbook.** The user is dealing with something frustrating. They don't need clinical jargon or false cheerfulness. They need clear, honest information delivered with respect.

Good: "Your backward digit span is 3, which is below the typical range of 4-7. This suggests your working memory's manipulation ability could use some work."

Bad: "Your performance metrics indicate suboptimal executive function in the central executive component of Baddeley's multicomponent working memory model."

Also bad: "Don't worry! Everyone can improve! Your brain is amazing!"

**Quantify when possible.** "Research suggests this exercise can improve working memory by about 0.3 standard deviations over 5 weeks" is more trustworthy than "this exercise is scientifically proven to boost your brain power."

**Never promise outcomes.** Use the qualifier system from the evidence-hierarchy skill. HIGH confidence claims get "research shows." MEDIUM gets "research suggests." LOW gets "preliminary research suggests." Never "guaranteed" or "proven to work."

## For Docs and Prose

**No AI voice.** These patterns make text feel generated and erode trust:

- Em-dashes (use commas, periods, or parentheses instead)
- Overuse of colons to introduce every list or idea
- "Leverage," "utilize," "robust," "streamline," "cutting-edge"
- "It's important to note..." or "It's worth mentioning..."
- Starting with "In today's..." anything
- Hedge stacking ("it might potentially be worth considering...")
- "Unlock your potential" or any self-help language

**Write like the project's existing docs.** If the README is casual and direct, your additions should be too. Don't introduce a new voice into a project that already has one.

**Paragraphs over bullets.** Default to prose. Use bullet points only when you're genuinely listing discrete items, not as a way to avoid writing coherent paragraphs. If the repo's docs already use lots of bullets, fine, match that. But don't introduce bullet-heavy formatting into a project that writes in paragraphs.

**Lead with the answer.** Whether it's a doc section or a code comment, put the conclusion first. Context comes after, for readers who want it.

## Health-Specific Writing Rules

**Effect sizes need context.** Saying "d=0.74" means nothing to a user. Translate it: "a medium-to-large improvement, roughly equivalent to moving from the 25th to the 50th percentile."

**Distinguish screening from diagnosis.** Every time you mention assessment results, make clear these are screening indications, not clinical diagnoses. This isn't optional legal boilerplate. It's the honest truth about what an app-based test can and cannot tell you.

**Cite sources inline.** When presenting a research finding in-app, include the source naturally: "A 2016 meta-analysis of 87 studies found..." rather than just stating the fact. This builds user trust and lets interested users verify claims.

## The Revision Pass

Before finalizing anything written:

1. Read it as if you're a team member seeing this for the first time. Does it fit?
2. Could the first sentence or paragraph be cut? If yes, cut it.
3. Is there anything that exists only to sound thorough? Remove it.
4. Does the tone match the rest of the project? Adjust if not.
5. For health content: is the qualifier appropriate for the confidence level?
