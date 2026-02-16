# Business Requirements Document (BRD)
# Project: MemoryForge - Working Memory Enhancement Platform

## Date: 2025-02-14
## Version: 1.0

---

## 1. Executive Summary

**MemoryForge** is a free, open-source, web-based working memory training platform that takes a fundamentally different approach from existing brain-training tools. Instead of abstract puzzle games (Lumosity-style), it trains working memory through **practical real-world tasks** - the exact scenarios where users actually struggle: remembering numbers, mental arithmetic, reading comprehension, and following instructions.

The tool combines task-specific training with **evidence-based compensatory strategy teaching**, addressing the biggest gap in the market: no free tool exists that bridges cognitive science research and practical daily-life utility.

---

## 2. Problem Statement

### The User's Problem:
Adults with working memory deficits experience daily frustration:
- Can't hold phone numbers long enough to use them
- Lose track during mental calculations
- Re-read paragraphs because meaning slips away
- Can't accurately recall verbal information (lyrics, instructions, names)
- Feel "intellectually inadequate" despite having normal intelligence

### The Market Problem:
| Current Options | Why They Fail |
|---|---|
| Lumosity, Peak, etc. | Abstract games that don't transfer to real life. Paywalled. |
| Cogmed | $1,500+ with mandatory coach. Inaccessible. |
| N-back apps | Single paradigm. No practical tasks. No strategy teaching. |
| Open-source tools | Dated UI, researcher-focused, not consumer-friendly |
| Brain Workshop | 2008 desktop app. N-back only. |

### The Scientific Problem:
Meta-analyses (Melby-Lervag 2016, Soveri 2017, Deng 2025) consistently show that abstract brain training does NOT transfer to real-world cognition. The only approach with evidence for practical benefit is:
1. Training on the **actual tasks** you want to improve
2. Teaching **compensatory strategies** (chunking, rehearsal, external aids)
3. **Structured, adaptive protocols** over multiple weeks

No existing tool combines all three.

---

## 3. Business Objectives

| Objective | Metric | Target |
|---|---|---|
| Create a free, accessible WM training tool | Cost to user | $0 |
| Provide research-backed training | Literature-supported task designs | 100% of exercises cite research basis |
| Cover practical WM scenarios | Real-world task coverage | 6+ practical task categories |
| Enable measurable improvement | Pre/post assessment | Users can track WM score over time |
| Open-source community | GitHub stars + contributors | Open for community contribution |
| Mobile accessibility | Device coverage | Works on phone, tablet, desktop |

---

## 4. Scope

### In Scope (MVP - Phase 1):
1. **Baseline Assessment Module** - Digit span, arithmetic chain, sentence recall
2. **Number Training Module** - Number retention, mental math chains, reverse digit span
3. **Reading Training Module** - Sentence comprehension, passage retention
4. **Strategy Library** - Chunking, rehearsal, visualization, external aids
5. **Progress Dashboard** - Charts, streak tracking, re-assessment
6. **Responsive Web App** - Works on all devices, PWA-capable
7. **Local-first data** - No account required, data in browser storage

### In Scope (Phase 2):
1. **Verbal/Auditory Module** - Word recall, instruction following, listening comprehension
2. **Classic N-Back Module** - Dual N-back implementation
3. **Information Updating Module** - Track changing information
4. **Strategy Practice Mode** - Guided strategy application in exercises
5. **Cloud Sync** - Optional account for cross-device sync
6. **Periodic Re-Assessment** - Automated bi-weekly assessments

### Out of Scope:
- Clinical diagnostic tools (we are NOT a medical device)
- ADHD diagnosis or medication recommendations
- Gamification elements (badges, leaderboards, competition)
- Social features (sharing, groups, coaching)
- Native mobile apps (web-first, PWA covers mobile)
- Paid features (everything is free)

---

## 5. Target User

### Primary Persona: "Arjun"
- Adult (18-65) with noticeable working memory difficulties
- Normal intelligence, normal long-term memory
- Struggles specifically with: numbers, mental math, reading retention, verbal recall
- May or may not have an ADHD diagnosis
- Tech-comfortable enough to use a web app
- Motivated to improve but frustrated by lack of affordable tools

### Secondary Personas:
- **Students** struggling with exam retention and reading comprehension
- **Professionals** who need to retain meeting details and instructions
- **Older adults** experiencing age-related working memory decline
- **ADHD-diagnosed individuals** looking for non-pharmacological support

---

## 6. Functional Requirements

### FR-1: Assessment Engine
- FR-1.1: Digit span test (forward and backward)
- FR-1.2: Arithmetic chain test (multi-step mental math)
- FR-1.3: Sentence/passage recall test
- FR-1.4: Scoring algorithm producing WM Score (0-100 scale)
- FR-1.5: Plain-language results explanation

### FR-2: Training Modules
- FR-2.1: Number sequence retention (adaptive 3-12+ digits)
- FR-2.2: Mental math chains (adaptive 2-6+ steps)
- FR-2.3: Reverse digit span (adaptive)
- FR-2.4: Sentence comprehension (simple to complex/nested)
- FR-2.5: Passage retention (with timed disappearance)
- FR-2.6: Each module must have adaptive difficulty (increase on success, decrease on failure)

### FR-3: Strategy Teaching
- FR-3.1: Strategy library with 5+ strategies (chunking, rehearsal, visualization, external aids, simplification)
- FR-3.2: Contextual tips before/during exercises
- FR-3.3: Guided mode showing strategy prompts during tasks

### FR-4: Progress Tracking
- FR-4.1: Per-module progress charts (line graphs over time)
- FR-4.2: Daily streak counter
- FR-4.3: Session history (date, duration, scores)
- FR-4.4: Baseline vs. current comparison

### FR-5: Data Management
- FR-5.1: All data stored in browser (IndexedDB/localStorage)
- FR-5.2: Data export as JSON
- FR-5.3: Data deletion (full reset)
- FR-5.4: No server-side data collection without explicit opt-in

---

## 7. Non-Functional Requirements

| Requirement | Specification |
|---|---|
| Performance | Page load < 2s on 3G. Exercise transitions < 100ms. |
| Accessibility | WCAG 2.1 AA compliant. Screen reader support. |
| Browser Support | Chrome 90+, Safari 14+, Firefox 90+, Edge 90+ |
| Mobile | Fully responsive. Touch targets >= 44px. |
| Offline | Core exercises work offline via service worker. |
| Privacy | No tracking cookies. No analytics without consent. GDPR-aware. |
| SEO | Server-rendered landing page for discoverability. |
| Bundle Size | < 500KB initial load (gzipped). |

---

## 8. Technical Constraints

- **Budget**: $0 (free hosting required - Vercel free tier, GitHub Pages, or Cloudflare Pages)
- **Stack**: Modern web technologies (no server dependency for core features)
- **Hosting**: Static/JAMstack deployment (no database server costs)
- **Audio**: Web Audio API for listening exercises (no server-side audio processing)
- **No AI/ML dependency**: Adaptive difficulty via deterministic algorithms (no API costs)

---

## 9. Success Criteria

### MVP Success (Phase 1):
- [ ] 5 working training modules deployed and accessible
- [ ] Assessment produces meaningful baseline score
- [ ] Adaptive difficulty adjusts within 3 attempts
- [ ] Works on mobile Chrome and desktop Chrome
- [ ] Data persists across sessions in browser
- [ ] Page loads in < 2s on fast connection
- [ ] 0 critical bugs

### Phase 2 Success:
- [ ] 8+ training modules
- [ ] Audio-based exercises functional
- [ ] Re-assessment shows score trends
- [ ] PWA installable on mobile
- [ ] < 5% user-reported bugs in first month

---

## 10. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| "Brain training doesn't work" criticism | HIGH | MEDIUM | Be transparent about research. Focus on practical tasks + strategies, not abstract training. Cite evidence. Include disclaimer. |
| Users expect medical-grade tool | MEDIUM | HIGH | Clear disclaimers: "Not a medical device. Consult a professional for diagnosis." |
| Adaptive difficulty too easy/hard | MEDIUM | MEDIUM | Use proven psychometric staircasing (2-up-1-down method). User can override. |
| Browser storage limits | LOW | LOW | IndexedDB supports GBs. Offer export for safety. |
| Scope creep | HIGH | HIGH | Strict MVP scope. Phase 2 only after Phase 1 complete and verified. |

---

## 11. Disclaimer (Required in App)

> MemoryForge is an educational tool designed to help practice and improve working memory skills. It is NOT a medical device, diagnostic tool, or substitute for professional evaluation. If you suspect you have ADHD, a learning disability, or a cognitive impairment, please consult a qualified healthcare professional. Results from this tool should not be used for clinical decision-making.
