# Project Status: amsterdam-dallas-family-trip

## Current Phase
Phase 6 — QA Review (complete)

## Deliverable Type
Visual (website)

## Style Guide
website.md

## Interaction Mode
Autopilot

## Phase Log
- [x] Phase 0 — Setup (2026-03-11)
- [x] Phase 1 — Research (2026-03-11)
- [x] Phase 2 — Brief (2026-03-11)
- [x] Phase 3 — Find Images (2026-03-11)
- [x] Phase 4 — Generate Images (2026-03-11)
- [x] Phase 5 — Build Deliverable (2026-03-11) — all 11 pages complete
- [x] Phase 6 — QA Review (2026-03-11)

## Image Fixes Applied (2026-03-11)
- `hero-amsterdam-spring.jpg` replaced — was 450x600px (too low-res). Replaced with Pexels 4800×3200 Amsterdam canal + bicycles + spring tulips.
- `rijksmuseum-milkmaid.jpg` (Alamy watermark) → replaced with `rijksmuseum-interior.jpg` (Pexels, tourists at Rembrandt painting)
- art-museums.html: Stedelijk Museum was using `hortus-exterior.jpg` → fixed to `stedelijk-museum.jpg` (Wikimedia, correct exterior)
- art-museums.html: NEMO Science Museum was using `artis-penguins.jpg` → fixed to `nemo-museum-rooftop.jpg` (Wikimedia)
- art-museums.html: Miffy Museum was using `artis-giraffe-child.jpg` → fixed to `miffy-museum-entrance.jpg` (Wikimedia)
- music-events.html: Dutch National Opera was using `canal-cruise-autumn.jpg` → fixed to `stopera-opera-house.jpg` (Wikimedia, actual building)
- churches-spaces.html: Added `ons-lieve-heer-interior.jpg` to the hidden church details section
- dont-miss.html: Restructured from person-based layout to category-based layout
- Rules updated: `.claude/rules/03-find-images.md` (resolution/watermark/size hard disqualifiers), `.claude/rules/05-build-deliverable.md` (image-must-match-section rule)

## Phase 4 Round 2 — Image Generation (2026-03-11)
Generated 5 images for remaining gaps (all scored 90/90, resized to ≤3MB):
- `westerkerk-interior.png` — soaring white-walled Protestant nave with wooden gallery and arched windows
- `carre-theatre.png` — already existed as carre-theatre.webp; .png added as alternative
- `bimhuis-exterior.png` — contemporary black-glass cantilevered jazz hall on IJ waterfront at blue hour
- `haarlem-grote-markt.png` — already existed as .jpg; .png added as alternative
- `zaanse-schans-windmills.png` — already existed as .jpg; .png added as alternative

## Image Dedup Fixes (2026-03-11)
- `churches-spaces.html`: Westerkerk card updated from exterior canal image → `westerkerk-interior.png` (showing inside beauty)
- `index.html`: Don't Miss card changed from `hero-amsterdam-spring.jpg` (duplicate of page hero) → `westerkerk-canal.jpg`
- `art-museums.html`: Rijksmuseum featured card changed from `rijksmuseum-interior.jpg` (duplicate of page hero) → `rijksmuseum-garden.jpg`
- `art-museums.html`: Hero alt text corrected (was referencing Milkmaid, now matches actual interior image)
- `parks-outdoors.html`: img-row with 2 duplicate images removed by linter; single cargo-bike image remains
- All other pages: audit confirmed clean — no missing files, no page-level duplicates

## Image Dedup Round 2 (2026-03-11) — Post-QA fixes
Searched for 7 missing/wrong images; found 6 suitable found images + 1 generated:
- `carre-theatre.webp` — Koninklijk Theater Carré night shot (iamsterdam.com, 1800px) → music-events.html Carré card
- `bimhuis-concert.jpg` — live jazz concert on stage, Bimhuis 50 years (bimhuis.nl, 1920px) → music-events.html hero
- `bimhuis-stage.jpg` — empty stage with floor-to-ceiling IJ waterfront windows (Time Out, 1459px) → music-events.html Bimhuis card
- `haarlem-grote-markt.jpg` — Grote Markt with Sint Bavokerk (Rick Steves, resized to 1800px) → day-trips.html
- `zaanse-schans-windmills.jpg` — windmills and Dutch houses (Wikipedia, resized to 1800px) → day-trips.html
- `dutch-poffertjes.jpg` — plate of mini pancakes (Tara's Multicultural Table, 1300px) → food-markets.html Dutch food section
- `vondelpark-openluchttheater.jpg` — full performance at outdoor theater (iamsterdam.com, resized 1800px) → music-events.html + dont-miss.html
- `westerkerk-interior.png` — generated: white nave, round arches, pipe organ, 1600×1073px → churches-spaces.html Westerkerk card (all candidates watermarked/too small)

Per-page fixes:
- `music-events.html`: hero→bimhuis-concert.jpg; Carré card→carre-theatre.webp; Bimhuis card→bimhuis-stage.jpg; Vondelpark section→vondelpark-openluchttheater.jpg
- `art-museums.html`: linter changed Rijksmuseum card to rijksmuseum-garden.jpg (no more hero+card duplicate)
- `canals-cruises.html`: Blue Boat card→canal-cruise-autumn.jpg (was duplicate of hero)
- `index.html`: Don't Miss card→hero-amsterdam-spring.jpg (was duplicate of intro image)
- `day-trips.html`: .png placeholders→actual .jpg images for Haarlem + Zaanse Schans
- `food-markets.html`: Added dutch-poffertjes.jpg in Dutch food section
- `practical.html`: Added canal-boat-cruise.jpg (transport section) + vondelpark-playground.jpg 2-col grid (Bodhi section)
- `churches-spaces.html`: Westerkerk card→westerkerk-interior.png (interior, not exterior canal)
- `parks-outdoors.html`: Removed img-row containing 3 duplicate images (hero+card already showed them)
- `dont-miss.html`: Vondelpark Openluchttheater card→vondelpark-openluchttheater.jpg (was just park, now shows actual performance)

QA rules updated: `.claude/rules/07-qa-review.md` — per-page duplicate audit, semantic mismatch audit, every-named-item-needs-unique-image rule

## QA Fixes Applied (Phase 6)
- art-museums.html hero: last reference to `rijksmuseum-milkmaid.jpg` → `rijksmuseum-interior.jpg`
- practical.html: hero text rgba(255,255,255,0.9) → #fff, font-weight 300 → 400
- dont-miss.html: phantom `opera-stopera.jpg` → `stopera-opera-house.jpg`
- Em dash reduction across all 11 pages (from 14–46 per page → 12–27 per page): replaced in-sentence em dashes with commas, periods, semicolons, and colons. Retained legitimate definition-separator and label uses.
- No filler phrases detected. No broken image references remaining.

## Notes
- **Trip**: Jon, Jess (Zimbabwean), and Bodhi Bear (~2 years old) meeting Jon's dad Scott (69) and stepmom Edie (has Alzheimer's) in Amsterdam. 10 days together (May 23 - June 1, 2026). Jon/Jess/Bodhi staying longer in Europe after.
- **Context**: Family hasn't seen Bodhi since March 2025. This reunion is the primary purpose. Family is nomadic — lived in Chiang Mai, currently Cape Town, moving to Cuenca Ecuador before the trip.
- **Budget**: Jon has online job but taking 10 days off for the Amsterdam portion.
- **After Amsterdam**: England (meet Jess' family, friend's wedding, Bodhi's 2nd birthday June 7), Slovenia (friends Emma & Nikita), possibly Portugal/Spain/Germany sightseeing, then back to Cuenca.
