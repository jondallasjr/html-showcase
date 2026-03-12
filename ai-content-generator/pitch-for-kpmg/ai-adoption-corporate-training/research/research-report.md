# Research Report: AI Bias in Practice

## Executive Summary

AI bias is one of the most urgent risks facing enterprises adopting AI. Real-world failures span healthcare (Optum's algorithm underserving Black patients), hiring (Workday class-action, Amazon's scrapped tool, iTutorGroup age discrimination), lending (mortgage algorithms requiring Black applicants to have 120-point higher credit scores), and housing (SafeRent's discriminatory tenant screening). The regulatory landscape is tightening fast: the EU AI Act began enforcement in February 2025 with fines up to 7% of global turnover, while US states have introduced 1,100+ AI bills. Frameworks from NIST, OECD, and ISO provide structure, and enterprise tools (IBM AIF360, Microsoft Fairlearn, Fiddler AI) make bias detection measurable. The core insight: bias isn't a data problem — it's a system design failure requiring governance, diverse teams, and continuous monitoring.

## Key Findings

### 1. Real-World AI Bias Cases

**Healthcare — Optum Risk Prediction Algorithm**
- Used healthcare costs as proxy for health needs; Black patients historically received less spending
- ~200 million patients/year scored; only 17.7% flagged for extra care were Black
- After recalibration using direct health measures, Black patient share rose to 46.5%
- Source: Science (2019)

**Hiring — Mobley v. Workday (2025)**
- Black applicant over 40 with disability applied to 80-100 jobs via Workday, rejected by all
- First major class-action alleging algorithmic hiring discrimination to survive dismissal
- Established that AI vendors (not just employers) can be liable under anti-discrimination law

**Hiring — EEOC v. iTutorGroup**
- AI automatically rejected women 55+ and men 60+ without human review
- 200+ qualified applicants screened out by age alone
- Settled for $365,000; one of first EEOC enforcement actions targeting AI discrimination

**Lending — Mortgage Discrimination**
- Lehigh University study: Black applicants need ~120 points higher credit scores for same approval rate
- UC Berkeley: fintech algorithms charged Black/Latinx borrowers ~5 basis points more
- ~$450 million/year in excess charges extracted from minority borrowers

**Housing — SafeRent Tenant Screening**
- AI disproportionately flagged Black/Hispanic applicants as high-risk
- $2 million settlement; court held AI vendor liable even though landlords made final decisions

**Amazon Hiring Tool (2018)** — Penalized resumes containing "women's"; scrapped entirely
**Google Photos (2015)** — Tagged Black couple as "gorillas"; Google removed primate labels entirely
**COMPAS Recidivism** — Misclassified Black defendants as high-risk at nearly 2x the rate of white defendants

### 2. Regulatory Landscape

**EU AI Act** (most comprehensive global regulation)
- Risk-based classification: unacceptable (banned), high-risk (heavy requirements), limited/minimal
- High-risk includes: employment, credit scoring, education, healthcare, law enforcement
- Requires representative datasets, bias examination, Fundamental Rights Impact Assessments
- Fines: up to 35M EUR or 7% global turnover
- Timeline: banned practices enforced Feb 2025; high-risk rules Aug 2026

**United States** (patchwork)
- NYC Local Law 144: annual bias audits for automated hiring tools
- California: 4-year data retention for automated decisions
- Colorado AI Act: impact assessments for high-risk AI (enforcement June 2026)
- Texas TRAIGA: comprehensive framework (effective Jan 2026)
- 1,100+ AI bills introduced across states in 2025

**Key compliance dates:**
- Feb 2025: EU banned practices enforced
- Aug 2025: EU general-purpose AI obligations
- Jan 2026: Texas TRAIGA
- Jun 2026: Colorado AI Act
- Aug 2026: EU high-risk AI rules

### 3. Types of AI Bias

**Data Bias:** Historical bias, representation/sample bias, measurement/label bias, reporting bias, selection bias, aggregation bias

**Algorithmic Bias:** Optimization bias, feedback loop bias, amplification bias

**Evaluation Bias:** Benchmark bias, metric blindness

**Generative/Interaction Bias:** Stereotypical output (DALL-E generated "CEO" as white men 97% of the time), prompt bias, user reinforcement bias

**Human/Societal Bias:** Confirmation bias, automation bias, gender bias, racial bias

### 4. Frameworks & Tools

**NIST AI RMF 1.0:** GOVERN → MAP → MEASURE → MANAGE
**OECD AI Principles:** Fairness, transparency, robustness, accountability
**ISO/IEC 42001:** AI management system standard

**Enterprise tools:**
- IBM AI Fairness 360 (open-source, 70+ metrics)
- Microsoft Fairlearn (open-source, Azure integration)
- Google What-If Tool (visual, no-code)
- Fiddler AI, Arthur AI, Truera (commercial monitoring)

**Key metrics:** Disparate impact ratio (80% rule), demographic parity, equalized odds, predictive parity, calibration

### 5. Mitigation Strategies

1. Audit datasets for representativeness and proxy variables
2. Apply fairness constraints during training (not just post-hoc)
3. Build diverse, multidisciplinary teams
4. Maintain human oversight for high-stakes decisions
5. Establish AI ethics boards and governance structures
6. Continuous monitoring post-deployment
7. Independent third-party audits

### 6. The 7-Step Bias Audit

1. Check the data (representativeness, provenance)
2. Examine the model (proxy variables, sensitive attributes)
3. Measure fairness (demographic parity, equalized odds)
4. Run bias detection (disparate impact tests, confusion matrices by group)
5. Check intersectional biases (compounded disadvantage)
6. Consider real-world impact (employment, finance, healthcare)
7. Write the report (findings, remediation, monitoring plan)

## Cross-Cutting Themes

1. **Proxy discrimination is the #1 mechanism** — algorithms rarely use race directly; they use correlated variables
2. **Historical data encodes historical injustice** — training on "what happened" teaches AI to replicate discrimination
3. **AI vendors are increasingly liable** — courts holding tool builders, not just deployers, responsible
4. **Auditing works, but only if you do it** — most bias was discoverable through demographic auditing before deployment
5. **"Neutral" does not mean "fair"** — removing protected characteristics is insufficient

## Sources

### Case Studies
- Dissecting racial bias in algorithm (Science, 2019)
- Quinn Emanuel: When Machines Discriminate
- Holland & Knight: Workday collective action
- ABA: Navigating AI Employment Bias Maze
- Lehigh University: AI mortgage underwriting bias
- RFK Human Rights: Bias in Code

### Regulations
- EU AI Act (artificialintelligenceact.eu)
- LegalNodes: EU AI Act 2026 Updates
- Orrick: 6 Steps Before Aug 2026
- CPO Magazine: 2026 AI Legal Forecast
- Greenberg Traurig: 2026 AI Outlook

### Frameworks & Tools
- NIST AI RMF 1.0 (nist.gov)
- OECD AI Principles (oecd.org)
- Hugging Face: Bias Taxonomy
- Google ML: Fairness Types of Bias
- OptiBlack: 7-Step AI Bias Audit
- PwC: Algorithmic Bias and Trust in AI
