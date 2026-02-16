# Anti-Patterns

These are the ways AI-generated contributions most commonly go wrong in health and neuroscience projects. Each one includes how to detect it in the context of this repo.

## The Confidence Inflator

You take a single study and present its finding as established fact. "Research proves that N-back training improves intelligence" when the actual meta-analytic evidence shows g=0.05 (null). This is the most dangerous pattern in a health app because users make decisions based on what you write.

**How to detect it:** Check the confidence rating in EVIDENCE.md. If it's MEDIUM or LOW, you cannot use "shows," "demonstrates," or "proves." Only HIGH confidence entries get affirmative language. When in doubt, downgrade your phrasing.

## The Visiting Consultant

You ignore existing patterns and introduce practices nobody asked for. You add elaborate type guards the project doesn't use, restructure components into a pattern the codebase doesn't follow, or add exhaustive JSDoc to a codebase that relies on self-documenting code.

**How to detect it:** Compare your output against 3-4 existing files in the same directory. If yours looks structurally different, you've drifted. If a reviewer would need to squint to tell your code from the team's, you're in good shape.

## The Effect Size Cherry-Picker

You cite the most impressive number from a study instead of the most appropriate one. Using passive-control effect sizes (g=0.51) instead of active-control (g=0.28). Using the highest load condition (d=1.17) as if it's the typical result (d=0.74). Citing trained-task improvement as if it were transfer.

**How to detect it:** Always ask: is this the active-control comparison? Is this the typical condition or the best-case? Is this trained-task or transfer? If you can't answer all three, go back to the paper.

## The Over-Engineer

A function needed 10 lines. You wrote 40 with an abstraction layer, a configuration object, and a factory. The project doesn't use these patterns elsewhere. You've created a maintenance burden disguised as good engineering.

**How to detect it:** Ask yourself if the surrounding code solves similar problems this way. If no one else in the repo has built an abstraction for this kind of task, you probably shouldn't either. Match the project's appetite for abstraction, not yours.

## The Silent Refactor

You were asked to add a feature, and somewhere along the way you renamed variables, reorganized imports, changed formatting, or "cleaned up" nearby code. The diff is now 200 lines when it should have been 30.

**How to detect it:** Before finishing, look at your changes. Anything that doesn't directly serve the task should be pulled out. If you think the cleanup is genuinely valuable, mention it separately and let the team decide.

## The Disclaimer Skipper

You build a screening tool, display a score, or present medication information without the mandatory disclaimer. In a health app, missing disclaimers are not cosmetic omissions. They're liability risks and, more importantly, they can lead users to make uninformed health decisions.

**How to detect it:** Every assessment screen needs the screening disclaimer. Every medication mention needs "consult a physician." Every red-flag notification needs "this is not a diagnosis." If you've written health-facing content without a disclaimer, stop and add one.

## The Context Hallucinator

You assume requirements that weren't stated. You add input validation the task didn't ask for, handle an edge case you invented, or follow a convention you assumed exists but never verified. In this project, you cite a paper you haven't actually looked up, or claim a study found something it didn't.

**How to detect it:** For every decision you make, ask "where did I learn this?" If the answer is "I assumed," that's a red flag. For every citation, ask "did I verify this against the actual paper or EVIDENCE.md?" If not, verify it now.

## The AI Prose Generator

Docs, comments, or in-app text that sounds like it was written by a language model. Excessive hedging, corporate vocabulary, bullet-heavy formatting, em-dashes everywhere, and a tone that doesn't match the rest of the project's written material.

**How to detect it:** Read your writing out loud. If it sounds like a product announcement, rewrite it. The app should sound like a knowledgeable friend explaining something clearly, not a medical brochure or a tech company blog post.

## The Kitchen Sink Response

Someone asked to fix a bug. You fixed the bug, refactored the surrounding function, added tests for three other functions, updated the README, and suggested architectural changes. The surface area of your change is now enormous and hard to review.

**How to detect it:** State the original task in one sentence. Now look at everything you've done. Anything that doesn't directly serve that sentence gets removed or split into a separate suggestion.
