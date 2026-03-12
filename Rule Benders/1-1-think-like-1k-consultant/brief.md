# Brief — Lesson 1.1: Think Like a £1,000/Day Consultant

**Project:** Rule Benders Academy > The High Paid Consultant > Section 1 > Lesson 1.1
**Style guides:** rule-benders (parent) + rule-benders-will-richardson (instructor)
**Format:** Multi-page click-through website (course lesson)
**Date:** 2026-03-12

---

## Goal

Deliver the opening lesson of The High Paid Consultant course. This is the first thing paying students see — it needs to hook them, validate their purchase, and deliver an immediate psychological shift. The lesson introduces the gap between "hired help" and "premium advisor" and begins rewiring how they think about their value.

The research shows this identity shift is the single highest-leverage change a consultant can make — 80% of consultants who do deliberate positioning work raise their rates within 90 days. This lesson plants the seed.

## Audience

Paying course students — professionals (ages 20-40) who've already committed financially. Mix of:
- Entry-level professionals wanting a shortcut to high-paid work
- Career changers moving into consulting
- Current consultants stuck under £1,000/day

They're motivated but likely carry employee-mindset baggage: waiting for permission, pricing by the hour, competing on availability. 67% of consultants struggle with pricing confidence. This lesson needs to name that struggle and crack it open.

## Tone & Voice

Will Richardson's voice throughout — first person, direct, experience-driven, anti-establishment. Short punchy sentences. Specific numbers over vague claims. Lead with transformation, not theory.

Key phrases to use: "Here's what I've learned...", "The reality is...", "Most people think X, but...", "After 17 years of...", "What actually works is..."

Credibility woven into storytelling: "When I was billing £2,000/day at the Treasury...", "After building three consulting businesses..."

---

## Format & Technical Approach

### Multi-page click-through lesson
- **8 pages**, navigated with Previous/Next buttons
- Each page = a section with a few paragraphs + visual, some scrolling allowed
- **Progress bar** at top showing position in lesson (page dots or numbered steps)
- **Page titles** visible in the progress indicator
- Keyboard arrow navigation supported
- Mobile swipe navigation

### Interactive elements
- **Reveal-on-click reflections** — prompts where students think first, then click to reveal Will's perspective
- **Clickable self-assessment choices** — multiple choice with personalized feedback on selection
- **Clickable blocker cards** — select what resonates, get tailored responses
- **Expandable details** (`<details>`/`<summary>`) for supplementary context and deep-dives

### Technical
- Single HTML file with all pages as sections, shown/hidden via JS
- Inline CSS/JS, no build system
- Responsive, mobile-first (touch targets min 44px)
- Google Fonts: Montserrat (display), Inter (body)
- Icon library: Lucide Icons via CDN (clean, professional, minimal)
- Dark professional aesthetic (Rule Benders Black #000000, Charcoal #1A1A1A base)
- `addEventListener` for all interactions (no inline onclick)
- Proper z-index on any overlays

---

## Design System

### Colors
- **Background:** #000000 (primary), #1A1A1A (cards/elevated surfaces)
- **Text:** #FFFFFF (headings), #E5E5E5 (body text), #999999 (secondary/muted)
- **Accent 1:** #2B5CE6 (Strategic Blue — links, progress bar, interactive highlights)
- **Accent 2:** #E85D00 (Action Orange — CTAs, key numbers, pull quotes, emphasis)
- **Success/positive:** #22C55E (for correct/advisor choices in interactions)
- **Warning/negative:** #EF4444 (for employee-trap choices in interactions)
- **Borders/dividers:** #333333
- **Card hover:** #222222

### Typography
- **Display/headings:** Montserrat Bold (700) / Semibold (600). ALL CAPS for lesson label/nav.
- **Body:** Inter Regular (400) / Medium (500)
- **Labels/nav:** Inter Medium ALL CAPS, letter-spacing +0.5px
- **Key numbers/stats:** Montserrat Bold, Action Orange, oversized (2-3rem)
- **Pull quotes:** Montserrat Semibold, larger size, left border accent

### Layout
- Max content width: ~720px centered
- Generous padding (40-60px vertical between sections)
- Cards: #1A1A1A background, 1px #333 border or no border with subtle shadow
- Full-bleed hero images with dark gradient overlay for text legibility
- Stat cards: centered, oversized number, short label beneath
- Interactive elements: visually distinct with blue border/highlight, clear tap targets

---

## Content Structure

Research-informed content for each page. Will's voice throughout — the research provides the frameworks and data, Will's experience and style guide personality bring it to life.

### Page 1: The Hook
**Title:** "You're Not Expensive Enough"

- **Cold open:** Will's story of the moment he realized he was undercharging. Early in his career, billing modest day rates, doing the same calibre work as consultants earning 3x more. The difference wasn't skill — it was how he showed up.
- **The gap:** Most consultants think like employees and price like contractors. Research shows 67% struggle with pricing confidence. Imposter syndrome alone costs consultants ~£30K/year in undercharging.
- **The promise:** By the end of this lesson, you'll see exactly why you've been leaving money on the table — and what to do about it.
- **Stat card:** "67% of consultants struggle with pricing confidence. You're about to join the other 33%."
- **Visual:** Hero image — confident consultant in a premium dark setting, dramatic cinematic lighting

### Page 2: The Two Consultants
**Title:** "Same Skills. Different Bank Accounts."

- **Side-by-side:** Two consultants, identical qualifications. Consultant A bills £400/day, waits for briefs, tracks hours, says "What do you want me to do?" Consultant B bills £1,500/day, reframes problems, prices on value, says "Here's what you need to do."
- **What's actually different?** Not skills, not experience, not qualifications — mindset and positioning. Research confirms: one consultant increased fees by 350% with identical deliverables, changing only the pricing model.
- **Will's journey:** Junior business analyst → £1,500/day consultant → £4,000/day consultancy founder. "The work didn't change. I did."
- **The insight:** Clients don't pay for what you do. They pay for what you represent. (Maister: "Act like a true professional, aiming for true excellence, and the money will follow.")
- **Visual:** Contrasting professional environments — the two paths
- **Interactive — self-assessment:** "Which consultant sounds more like you right now?" 4 options ranging from "I'm definitely Consultant A" to "I'm already closer to B but want to level up." Each gets a tailored response from Will.

### Page 3: The Employee Trap
**Title:** "The Mindset That's Costing You £100K/Year"

- **The employee mindset defined:** Research identifies the core pattern — employees wait for direction, complete tasks, derive identity from their title, seek comfort, and need external validation. Consultants define problems, solve them, derive identity from value delivered, and cultivate internal certainty.
- **Why it's comfortable:** The employee mindset is safe. Someone else defines success. Someone else takes the risk. But comfort is the enemy — "discomfort and growth are synonymous" (Consulting Success).
- **The three tells** that instantly mark you as "hired help" (drawn from research):
  1. You ask "What do you want me to do?" instead of diagnosing the problem yourself
  2. You price by the hour/day instead of by the outcome
  3. You wait to be invited instead of proactively identifying what needs fixing
- **The cascade:** Failing to make the identity shift recreates the boss-subordinate dynamic inside what should be an independent practice. You end up working at the client's whims.
- **Will's example:** A specific moment from his early career where he caught himself in employee mode — and what it cost him.
- **Visual:** Corporate constraint — cubicle, open-plan grind, or someone looking trapped in a standard office setting
- **Interactive — reveal-on-click:** "What are the three tells?" Prompt students to think first. Three cards, each reveals on click with Will's commentary and a concrete example.

### Page 4: The Advisor Mindset
**Title:** "Think Like Their Most Trusted Advisor"

- **The shift:** From "pair of hands" to "leader of process" (Betsy Jordyn's framework). You own HOW decisions get made. The client owns the decisions. "He who has the marker controls the world."
- **The Trust Equation** (simplified for this lesson): Trustworthiness = (Credibility + Reliability + Intimacy) / Self-Orientation. The denominator is the killer — your trustworthiness plummets the moment you prioritize your interests over the client's.
- **The reframe in action:** Client says "We need training." Employee-consultant quotes a training programme. Advisor-consultant says "Satisfaction needs to go from 80% to 85%, that's £1M in profitability. Training is one lever." Four-figure contract → six-figure engagement.
- **The language shift** — specific phrases:
  - Employee: "What do you want me to do?" → Advisor: "Here's what you need to do"
  - Employee: "I'll get that done for you" → Advisor: "The real problem is..."
  - Employee: "How would you like me to approach it?" → Advisor: "Based on my experience across similar organisations..."
- **Will's framework:** "When I walked into the Treasury billing £2,000/day, here's how I thought about every interaction — I wasn't there to take orders. I was there because they needed someone who could see what they couldn't."
- **Visual:** Executive advisory setting — boardroom, high-level strategic conversation
- **Expandable detail:** Full advisor vs. employee language swap table (8-10 examples)

### Page 5: The Value Equation
**Title:** "Why Clients Happily Pay £1,000/Day"

- **The fundamental shift:** It's not about you — it's about what you save, earn, or protect for them. Hourly billing punishes efficiency. The faster you solve a problem, the less you earn. That's backwards.
- **The maths:** A consultant charging £300/hour earns £3,000 for a 10-hour project. If that project saves the client £200,000, a value-based fee of 20% nets £40,000 — 13x more for the same work.
- **The ROI framework:** Your fee should deliver 3-10x ROI for the client. When you can demonstrate £500K in impact, a £50K fee is an easy decision.
- **The psychology:** 95% of buying decisions are subconscious. Price signals quality. Higher fees actually increase client commitment and results — the sunk cost effect works in your favour.
- **Will's example:** "The framework that saved taxpayers £500 million. I didn't bill for my time. I billed for the outcome."
- **Stat cards:** "13x" (value-based vs hourly gap) and "£30K/year" (cost of undercharging)
- **Visual:** High-value business impact — something suggesting scale, major operations, significant outcomes
- **Interactive — reflection:** "Think about your last project. What was the business impact in pounds? Now look at what you charged. What's the ratio?" Prompt with a text reflection, then reveal Will's commentary on typical ratios.

### Page 6: The Scenario
**Title:** "What Would You Do?"

- **Setup:** Two realistic consulting scenarios where the student must choose between employee-thinking and advisor-thinking responses.
- **Scenario 1:** You're in a kickoff meeting. The client hands you a detailed brief and says "Can you deliver this by Friday?" You have three response options — one employee, one advisor, one in between. Each reveals Will's take and the real-world consequence.
- **Scenario 2:** A senior stakeholder challenges your recommendation in front of the team. Three response options. Each reveals what happens next and what it signals about your positioning.
- **Key teaching moment:** 90% of consultants are hired for political reasons, not just economic ones. The advisor sees the politics. The employee just sees the task.
- **Visual:** Professional decision-point imagery
- **Interactive:** Multiple choice scenarios with consequence reveals. Green highlight for advisor responses, red for employee-trap responses, with Will's explanation for each.

### Page 7: Mental Blocker Check
**Title:** "The Voice That Keeps You Cheap"

- **The five blockers** (research-backed, Will's voice):
  1. **"I don't have enough experience"** — Will's counter: "I started billing £1,000/day before most of my competitors had half my years. Experience is a story you tell yourself."
  2. **"Clients won't pay that much"** — Research: one consultant LOST a project because fees were too low. The client assumed low value. 24% of consultants don't raise rates due to fear of rejection — but the fear is almost always assumption-based.
  3. **"I need more qualifications"** — Will's counter: "I didn't get my biggest contracts because of certifications. I got them because I walked in thinking like an advisor, not an applicant."
  4. **"It's easy for me, so it can't be worth that much"** — The "easy for me" trap. "While it may be easy for us, it's not easy for them. That's why they're coming to us."
  5. **"I should be grateful for any work"** — The scarcity mindset. Low-paying clients don't just limit income — they block access to premium opportunities and drain your energy.
- **The confidence-competence cycle:** Higher rates → better clients → more demanding work → greater expertise → justifies premium pricing. The inverse is equally destructive.
- **Visual:** Introspective/breakthrough moment — overcoming doubt
- **Interactive — clickable blocker cards:** Students select which blockers resonate with them. Each selected card expands with Will's specific response and a concrete counter-action.

### Page 8: Your Action Plan
**Title:** "Do This Before Lesson 1.2"

- **The one shift:** Stop thinking about what you do. Start thinking about what it's worth to them. That's the foundation everything else builds on.
- **Three actions this week:**
  1. **Audit your language:** In your next client interaction, catch yourself. Are you asking "What do you want me to do?" or telling them "Here's what needs to happen"? Write down every instance.
  2. **Calculate your value ratio:** Take your last three projects. Estimate the business impact in pounds. Divide by what you charged. If the ratio is above 10:1, you're dramatically underpriced.
  3. **Name your blocker:** Pick the one mental blocker from Page 7 that hit hardest. Write it down. Then write Will's counter-argument next to it. Read it every morning this week.
- **Transition to 1.2:** "Now you know the gap. Lesson 1.2 is about the specific rate ceiling — the £500/day trap — and how to break through it. The mindset shift you just made is the foundation. Next, we get tactical."
- **Final beat from Will:** "I've been where you are. Billing less than I was worth because I didn't think I could ask for more. The moment I stopped thinking like an employee was the moment everything changed. You've just taken the first step. Don't stop."
- **Visual:** Forward-looking, aspirational — open road, horizon, momentum
- **CTA button:** "Continue to Lesson 1.2 →" (non-functional placeholder for now)

---

## Image Strategy

**Style:** Dark Professional – Rebel (from Rule Benders visual standards)
- Black backgrounds with blue/orange edge elements
- Dramatic cinematic lighting, sophisticated ambient
- Canon 5D Mark IV aesthetic, 50mm–85mm lens feel
- Real practitioners over stock. Authentic, documentary style.
- Subjects should look like real consultants — not models, not generic stock people

**Themes to source (8 images needed):**

| Page | Theme folder | Description | Search priority |
|------|-------------|-------------|-----------------|
| 1 | confident-consultant-hero | Confident professional in premium dark setting, dramatic lighting, solo figure, power/contemplative | Real consultant/exec photos first |
| 2 | two-paths-contrast | Visual contrast of two professional environments or paths — the gap between average and premium | Editorial/documentary style |
| 3 | employee-trap-corporate | Corporate cubicle, open-plan office grind, someone looking constrained in a standard grey office | Candid office photography |
| 4 | boardroom-advisor | Executive meeting, boardroom, or high-level advisory conversation — premium environment | Real boardroom/meeting photos |
| 5 | business-impact-scale | High-value outcomes — could be a city skyline, major infrastructure, trading floor, or something suggesting significant financial impact | Editorial/business photography |
| 6 | professional-decision | Professional at a decision point, crossroads moment — figurative or literal | Documentary/editorial |
| 7 | breaking-through | Breaking through constraints, overcoming mental barriers — could be introspective moment or breakthrough imagery | Dark, cinematic style |
| 8 | forward-momentum | Looking ahead, open road, horizon, new beginning — aspirational and forward-moving | Cinematic/landscape |

**Notes:**
- All images should feel premium and cinematic, not generic stock
- Prefer dark/moody tones consistent with Rule Benders dark professional aesthetic
- No watermarks, min 1200px wide, max 5MB per image
- Hero image (Page 1) needs to be at least 1600px wide for full-bleed treatment

---

## Constraints & Requirements

- Fully functional offline after initial load
- Must work beautifully on mobile (course students will use phones)
- Touch-friendly navigation (swipe + large tap targets, min 44px)
- Keyboard navigation (left/right arrow keys) for desktop
- Progress state doesn't need to persist (no backend)
- No external dependencies beyond Google Fonts and Lucide Icons CDN
- Self-contained single HTML file
- All text over images must have legibility treatment (gradient scrim or semi-transparent overlay)
- Interactive elements must be visually distinct and obviously clickable/tappable

---

## Style Guide Reference

- **Parent:** `style-guides/projects/rule-benders.md`
- **Instructor:** `style-guides/projects/rule-benders-will-richardson.md`
- **Content type:** `style-guides/content-types/website.md`
- Resolution: content-type → parent → instructor-specific (more specific wins)
