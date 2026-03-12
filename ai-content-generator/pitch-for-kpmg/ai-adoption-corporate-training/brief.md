# Brief: AI Bias in Practice

## Project Goal & Context

Create a single, polished lesson — "AI Bias in Practice" — as part of a larger course called **"Responsible AI & AI Governance for Business Leaders"**. This is a demo for KPMG's business incubator partner to showcase the AI course generation pipeline. The lesson must clearly signal it's one module within a broader course structure.

**Audience:** Executives, product managers, IT leaders, compliance teams at large enterprises
**Purpose:** Demonstrate AI agent team's course generation capability
**Deliverables:** HTML website (interactive lesson) + HTML presentation (slide deck)
**Style guide:** None — fresh design appropriate for enterprise corporate training

## Format & Technical Approach

### Website (Primary Deliverable)
- Single HTML file, all CSS/JS inline
- Mobile-first, responsive
- Sticky navigation showing course context (module position within larger course)
- Interactive elements: scenario quizzes, decision simulations, expandable case studies
- Self-contained, works offline after load

### Presentation (Secondary Deliverable)
- Single HTML file, slide-based with keyboard/click navigation
- Image-left, content-right layout for content slides
- Big background images for title/section slides
- Progressive reveal (bullets appear on click)
- Polling/reflection questions at natural points

## Design System

**Mood:** Authoritative, trustworthy, modern. The kind of courseware a Big Four firm would be proud to put their name on. Clean and sophisticated — not flashy, not boring. Think Bloomberg Terminal meets Harvard Business Review.

### Colors
- **Background:** #FFFFFF (White), #F8F9FA (Light gray for alternating sections)
- **Primary accent:** #0A2540 (Deep navy) — headers, nav, authority elements
- **Secondary accent:** #0066FF (Bright blue) — interactive elements, CTAs, links
- **Alert/Risk:** #DC3545 (Red) — risk indicators, warning callouts, bias alerts
- **Success:** #198754 (Green) — positive outcomes, correct answers
- **Text:** #1A1A2E (Near-black for body), #495057 (Gray for secondary text)
- **Cards/Surfaces:** #FFFFFF with subtle shadow, #F0F4F8 (blue-tinted gray for callout boxes)
- **Dark sections** (hero, section dividers): #0A2540 deep navy with white text

### Typography
- **Display:** Inter Bold/Semibold (via Google Fonts) — clean, modern, trustworthy
- **Body:** Inter Regular/Medium (via Google Fonts) — excellent readability
- **Monospace:** JetBrains Mono (for any code/data elements)
- **Scale:** 16px base, 1.6 line height for body. Headers: 2.5rem/2rem/1.5rem/1.25rem

### Icons
- **Library:** Lucide (clean, professional, consistent stroke weight)
- **CDN:** `<script src="https://unpkg.com/lucide@latest"></script>`

### Design Details
- Generous whitespace — content breathes
- Subtle card shadows: `0 1px 3px rgba(0,0,0,0.08)`
- Rounded corners: 8px on cards, 4px on buttons
- Thin borders: 1px solid #E2E8F0 for separation
- Progress indicators showing lesson completion
- Smooth transitions and hover states

## Content Structure

### Course Context Header
Both deliverables open with clear course framing:
- Course title: "Responsible AI & AI Governance for Business Leaders"
- Module indicator: "Module 3 of 5: AI Bias in Practice"
- Course nav bar showing all modules (current highlighted):
  Module 1 — Why AI Governance Matters | Module 2 — Understanding the EU AI Act | **Module 3 — AI Bias in Practice** | Module 4 — Building an AI Governance Framework | Module 5 — The Future of AI Regulation

### Lesson Sections

**1. Cold Open — "The Algorithm That Cut Off Care"**
- Hook with the Optum healthcare case: 200 million patients scored, Black patients systematically underserved
- Stat card: "17.7% → 46.5%" (Black patients flagged for extra care before/after recalibration)
- Framing: "This wasn't a malicious programmer. It was a reasonable-sounding business decision that encoded decades of inequality."

**2. What Is AI Bias? (The 60-Second Version)**
- Clear, no-jargon definition
- The core insight: "Bias isn't a bug — it's a system design failure"
- Visual: Simple diagram showing Data → Algorithm → Decision → Impact cycle
- Key point: AI doesn't create bias — it scales existing bias at machine speed

**3. The Bias Taxonomy — Where It Hides**
- Interactive expandable sections for each major type:
  - **Data Bias** — Historical, representation, measurement (with examples)
  - **Algorithmic Bias** — Optimization, feedback loops (with Spotify/Facebook examples)
  - **Evaluation Bias** — Benchmark bias, metric blindness (Apple Card example)
  - **Human Bias** — Confirmation bias, automation bias
- Key insight: "Proxy discrimination is the #1 mechanism" — algorithms rarely use race directly

**4. Case Studies — When Bias Hits the Bottom Line**
- Interactive cards (click to expand) for 4 cases:
  - **Hiring:** Workday class-action (2025) — first to establish AI vendor liability
  - **Lending:** Mortgage algorithms requiring 120-point higher credit scores for Black applicants
  - **Housing:** SafeRent's $2M settlement for discriminatory tenant screening
  - **Healthcare:** Optum's cost-as-proxy failure
- Each card: What happened → Who was affected → Consequences → What should have been done
- Stat card: "$450 million/year in excess charges from biased lending algorithms"

**5. Scenario Simulation — "You Are the Chief Risk Officer"**
- Interactive decision exercise:
  - Scenario: Your company is deploying an AI credit scoring model
  - Decision points: What data to include? How to test? When to involve humans?
  - Branching outcomes showing consequences of each choice
  - Reveal: the "right" answers map to the 7-step bias audit framework

**6. The Practical Playbook — What Your Organization Does Monday Morning**
- Actionable checklist format:
  1. Audit your data (representativeness, proxy variables)
  2. Measure fairness (80% rule, demographic parity)
  3. Build diverse teams (not just engineers)
  4. Maintain human oversight for high-stakes decisions
  5. Monitor continuously (bias drifts over time)
  6. Get independent audits
- Tool callout boxes: IBM AIF360, Microsoft Fairlearn, Google What-If Tool

**7. The Regulatory Reality**
- Timeline visualization: EU AI Act milestones (Feb 2025 → Aug 2027)
- Key numbers: "35M EUR or 7% global turnover" maximum fines
- US patchwork: NYC, California, Colorado, Texas mapped
- Callout: "1,100+ AI bills introduced across US states in 2025"

**8. Module Wrap-Up & What's Next**
- 3 key takeaways (stat cards)
- "Next module" teaser: Module 4 — Building an AI Governance Framework
- Final action: "This week, identify every AI system in your organization that makes decisions about people. That's your audit starting list."

## Image Strategy

**Themes needed (8-10 images):**
1. **Hero/Title** — Professional corporate/tech scene, clean and authoritative
2. **Healthcare** — Medical/clinical setting (for Optum case)
3. **Hiring/Recruitment** — Interview or job application setting (for Workday case)
4. **Finance/Lending** — Banking or financial setting (for mortgage bias case)
5. **Data/Algorithm** — Data visualization or analytics dashboard (for taxonomy section)
6. **Boardroom/Governance** — Executive meeting or strategy session (for playbook section)
7. **Regulation/Compliance** — Legal/regulatory visual (for regulatory section)
8. **Decision-making** — Leader evaluating options (for simulation section)

**Style:** Clean, professional, well-lit. Real photography. Modern corporate environments. Diverse subjects. Think annual report or McKinsey Quarterly — credible, polished, not stock-photo-cheesy.

## Tone & Voice

- **Authoritative but accessible** — an expert explaining to smart non-specialists
- Clear, direct sentences — no fluff, no hedging
- Real cases over theory — every claim backed by a specific example
- No corporate buzzwords: no "leveraging synergies" or "paradigm shifts"
- Actionable: every section ends with something the learner can do
- Serious where needed (real harm, real consequences) but not preachy
- Occasionally provocative — challenge assumptions, surface uncomfortable truths

## Constraints & Requirements

- Both deliverables must clearly show this is Module 3 of a 5-module course
- Website must include interactive elements (quizzes, expandable sections, decision sim)
- Presentation must work as a standalone walkthrough of the same content
- All stats and cases must be accurate per research report
- Mobile-friendly (touch targets 44px+, no horizontal scroll)
- No external dependencies beyond Google Fonts, Lucide CDN
