---
Version: 1.0
Last updated: 2026-04-13
Status: Approved
---

# THE HIVE — WEEK-BY-WEEK ROADMAP

Now / Next / Later format. Dates are intentional ranges, not commitments.

---

## DEPENDENCY CHAIN (read before anything else)

```
Affiliate applications submitted
    → KYC approved on platforms
        → Personal offer testing begins
            → Referral redirect built (while waiting for approvals)
                → Affiliate approvals arrive → links go live
                    → Aggregator built with verified offers
                        → Blog published with working links
                            → Google indexes blog (3–6 weeks lag)
                                → Community channels driving traffic
                                    → First meaningful conversions
                                        → First affiliate commission paid
```

Breaking any link in this chain delays everything downstream. The only links you control are the first two. Start them on Day 1.

---

## PRE-LAUNCH — DAYS 1–7 (The Foundation Nobody Sees)

**Goal:** All blocking prerequisites unblocked before a single line of code is written.

| Day | Action | Why It Can't Wait |
|---|---|---|
| Day 1 | Submit Binance affiliate application | 3–7 day approval time. Every day delayed = later go-live. |
| Day 1 | Submit Freecash affiliate application | 1–3 day approval. |
| Day 1 | Submit JumpTask affiliate application | 3–5 day approval. |
| Day 1 | Begin Binance KYC (identity verification) | Blocks all crypto receiving and P2P. |
| Day 1 | Register .co.ke or .com domain | Needed before blog goes live. KES 1,000–1,500. |
| Day 2 | Begin Freecash KYC/account setup | Needed before task earnings can be withdrawn. |
| Day 2 | Begin JumpTask account setup | Needed before gig earnings can be tracked. |
| Day 3 | Begin Chipper Cash KYC | M-Pesa integration, local referral program. |
| Day 3–7 | Run Platform Discovery prompts (Perplexity) | Build raw platform list before building anything else. |
| Day 4–7 | Deep Research Directive on top 5 platforms | Verify before listing. |
| Day 6 | Begin personally completing Tier D offers | Zero capital required. First earnings + first content. |
| Day 7 | Document first offer results in Obsidian | Input for first blog post. |

**What you do NOT do this week:** Write any code. The infrastructure isn't there yet.

---

## NOW — WEEKS 1–3 (Build While Waiting)

**Theme:** Ship the minimum credible product.
**Hard deadline:** Aggregator live with 15 verified offers by end of Week 3.

### Week 1: Referral Infrastructure

| Task | Time | Output |
|---|---|---|
| Build `/go/:platform` redirect route | 2 hrs | Express route live, placeholder links |
| Set up PostgreSQL offers + personal_tests tables | 1 hr | Database schema deployed |
| Complete 5 more Tier D offers personally | 5 × 50 min | Real data for offer cards |
| Write first blog post (evergreen — educational) | 2 × 50 min | Draft ready |
| Begin Astro blog setup | 1 weekend session | Blog scaffold running |

**Affiliate approvals should arrive this week.** Swap placeholder links for real affiliate URLs immediately.

### Week 2: Aggregator Content

| Task | Time | Output |
|---|---|---|
| Build offer card UI (static, no DB yet) | 1 weekend session | Cards rendering correctly |
| Enter first 10 verified offers into database | 3 × 50 min | 10 live offer cards |
| Write second blog post (test result — from Week 1 testing) | 2 × 50 min | First personal experience post |
| Wire all offer links through referral redirect | 50 min | All affiliate links active |
| Set up Umami analytics | 50 min | Privacy-first tracking live |

### Week 3: Go-Live

| Task | Time | Output |
|---|---|---|
| Add 5 more offers (reach 15 total) | 2 × 50 min | 15 verified offers live |
| Publish blog with 3 posts | 50 min | Blog publicly accessible |
| Both EV calculators functional | 1 weekend session | Calculators working |
| Post in first Kenyan community channels | 50 min | First non-Google traffic |
| Write and publish third blog post | 50 min | Content cadence established |

---

## NEXT — WEEKS 4–8 (Build the Audience)

**Theme:** Traffic before features. No new features until existing ones drive results.

### Weeks 4–5: Content and Community

| Task | Output |
|---|---|
| Publish 2 more blog posts (1 evergreen, 1 test result) | 5 posts total |
| Cross-post best post to Medium | Medium Partner Program eligibility begins |
| Join and contribute to 3+ Kenyan Telegram/WhatsApp groups | Community presence established |
| Answer 5 Quora questions linking to relevant posts | Referral traffic from Quora |
| Add 5–10 more verified offers | 20–25 offers total |
| Sunday offer audit: all 15 original offers re-verified | Zero stale offers |

### Weeks 6–7: First Automation

| Task | Output |
|---|---|
| Build terms-change crawler (10 URLs, daily hash check) | Automated staleness detection |
| Set up email/WhatsApp alert on change detected | Protection against stale data |
| Review first affiliate commission dashboards | Know which programs are converting |
| Analyse first Umami traffic data | Understand what's working |
| Use Tier D earnings to fund first Tier A offer test | Real $20–30 deposit test underway |

### Week 8: Expand and Assess

| Task | Output |
|---|---|
| Add 10 more verified offers (30+ total) | Enough for meaningful SEO coverage |
| Expand crawler to 25 monitored URLs | Full offer portfolio monitored |
| Publish Tier A test result post | Highest-trust content type |
| RICE prioritisation review: what to build next? | Clear decision on Phase 3 priorities |

---

## LATER — MONTHS 3–6 (Intelligence and Scale)

These are directional. Exact timing depends on Phase 2 results.

- **Month 3:** Dashboard + reporting view (Pillar 1+3 merged)
- **Month 3:** Pattern analysis — which offers earn most per hour, which platforms are reliable
- **Month 3:** Begin "The Edge" research (casino affiliate — separate brand)
- **Month 4:** Programmatic SEO pages (`/platforms/[slug]`, `/earn/[category]/kenya`)
- **Month 4–5:** Build "The Edge" site
- **Month 6:** Launch "The Edge" to The Hive's audience (via separate channel — no cross-branding)
- **Month 6+:** Medium Partner Program income + Ezoic display ads on low-conversion pages

---

## IF AFFILIATE APPLICATIONS ARE REJECTED

High probability for a new site with zero traffic. This is not a crisis — it's a sequencing problem.

**If rejected immediately (most common reason: no existing traffic or content):**
1. Do not reapply immediately — rejections have cooldown periods.
2. Build the blog first. Publish 5–10 posts. Establish the domain.
3. Apply again in Month 2 with live content to show.
4. In the meantime: use direct platform referral links (Binance, Freecash, JumpTask all have in-app referral codes that don't require affiliate program approval). These pay less but work immediately.

**If rejected with no reason given:**
1. Email the affiliate team with a short note: "I'm building a Kenya-specific offer aggregator. Here's the domain: [URL]. Here's the content: [link to 3 posts]. Requesting reconsideration."
2. Some programs approve on manual review what their automated system rejected.

**If Binance affiliate specifically rejects (most impactful rejection):**
1. Use the Binance referral code system instead — available inside any Binance account, no application required.
2. You earn a percentage of referred users' trading fees. Lower than the formal affiliate rate but active from day one.
3. Apply for the formal affiliate program once the blog has 20+ posts and measurable traffic.

---

## WHAT TRIGGERS A PIVOT

If by Week 8 these signals appear, reassess the strategy:

| Signal | What it means | Response |
|---|---|---|
| Zero affiliate commissions despite 30+ offers live | Either traffic is too low or offers aren't converting | Double down on community channels; audit offer card CTAs |
| Affiliate applications rejected (no approvals) | Need existing traffic/audience to qualify | Build traffic first via blog; reapply in Month 2 |
| Tier D offer earnings are <KES 500/week | Task platforms not viable for this market | Shift focus to Tier A with minimal capital |
| Google search traffic still zero at Month 3 | SEO lag longer than expected | Accelerate community and Quora strategy |

---

## RICE PRIORITISATION — CURRENT BACKLOG

Effort unit: person-weeks (1 person working 50-minute daily sessions + one 2-hour weekend block per week).

| Feature | Reach | Impact | Confidence | Effort (person-wks) | RICE Score |
|---|---|---|---|---|---|
| Referral redirect system | 100 | 3 | 100% | 0.1 | 3,000 |
| 15 verified offer cards | 100 | 3 | 90% | 1 | 270 |
| EV Calculator (Tier A) | 80 | 2 | 80% | 0.5 | 256 |
| Blog (3 posts) | 60 | 2 | 80% | 1 | 96 |
| Terms-change crawler | 40 | 2 | 70% | 1 | 56 |
| Programmatic SEO pages | 50 | 2 | 60% | 2 | 30 |
| Dashboard (Week 10+) | 20 | 1 | 60% | 3 | 4 |

Build in RICE score order. Dashboard is last for a reason. Referral redirect first — 2 hours of work that unlocks every subsequent revenue event.
