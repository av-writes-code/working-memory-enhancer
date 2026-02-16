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

## The Undisclosed Limitation Hider

You cite a study's positive finding without mentioning it only tested a 1-week duration, used a tiny sample, or was funded by the product's manufacturer. Users read the claim and assume it applies broadly, when the evidence is far more constrained.

**How to detect it:** For every research finding you present, ask: what were the study's limitations? Did I mention at least the most important one? If the study was funded by a party with financial interest in the result, did I disclose that? Check the Limitations field in EVIDENCE.md. If it says something substantive and you didn't mention it, you're hiding a limitation.

## The Clinical Spillover

You present app-based screening results as if they carry the weight of a clinical assessment. A 2-minute digit span test on a phone is NOT equivalent to a 4-hour neuropsychological evaluation by a licensed professional. Language that blurs this boundary misleads users into overconfidence about their results.

**How to detect it:** Search your output for words like "assessment," "evaluation," "test results," or "your score indicates." If any of these could be read as a clinical judgment rather than a screening indication, rewrite them. The app screens; it does not diagnose, assess, or evaluate.

## The Effect Size Extrapolator

You take an effect size from one population and apply it to another. The d=0.74 for methylphenidate was measured in children aged 7-12, not adults. The g=0.80 for exercise was in previously sedentary older adults, not active 25-year-olds. Presenting these numbers without population context makes them look universally applicable when they're not.

**How to detect it:** For every effect size you cite, check: what population was studied? Does that match who you're presenting the number to? If there's a mismatch (children → adults, elderly → young, clinical → healthy), you must either find population-matched evidence or add an explicit caveat.

## The Missing Disclaimer Placer

You put the disclaimer in the footer, the settings page, or a separate "about" screen where nobody will see it. The disclaimer belongs immediately adjacent to the claim it qualifies. A screening result displayed at the top of the screen with a disclaimer buried at the bottom of a scroll is functionally undisclaimed.

**How to detect it:** For every screen that displays health information, trace the user's eye path. Will they see the disclaimer before or while reading the claim? If the disclaimer requires scrolling, navigating, or clicking to find, move it closer. Proximity matters.

## The Citation Fabricator

You generate a plausible-sounding author name, attach it to a real PMC ID, and present it as verified. The PMC ID points to a real paper on the right topic, but the authors are wrong. This is the most insidious form of hallucination because the reference looks correct at first glance. In the Phase 0 audit, 5 out of 15 EVIDENCE.md entries had wrong author-PMC mappings that looked legitimate.

**How to detect it:** For every DOI/PMID you generate, verify the actual authors against PubMed or doi.org. Do NOT trust your own memory of who wrote what. Run `curl https://api.ncbi.nlm.nih.gov/lit/ctxp/v1/pubmed/?format=citation&id=PMID` or check doi.org directly. If you cannot verify, mark the entry with NEEDS MANUAL VERIFICATION.

## The Version Conflator

You merge details from different versions of the same instrument, test, or protocol. In the Phase 0 audit, ASRS v1.1 (2005, dichotomous scoring, cut-off 4/6) was conflated with ASRS-5 (2017, weighted scoring, cut-off 14/24). This would have produced wrong screening results if implemented as documented.

**How to detect it:** When citing any standardized instrument, explicitly name the version. Check: is the scoring method from the same version as the cut-off? Is the sensitivity/specificity from the same validation study as the version you're implementing? Version mismatches in screening tools can produce clinically dangerous results.

## The Sample Size Inventor

You generate a plausible sample size (K=38, N=1,000+) that doesn't match the actual paper. Kessels et al. (2000) was called "meta-analysis K=38" when it's actually a normative study with N=70. The inflated numbers make the evidence look stronger than it is.

**How to detect it:** Verify K and N against the actual paper's methods section. A meta-analysis should report K (number of studies) and aggregate N. A single study reports only N. If you see yourself writing "K=" for what might be a single study, verify the study design first.
