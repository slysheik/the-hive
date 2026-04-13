---
Version: 1.0
Last updated: 2026-04-13
Status: Draft
Owner: Project founder
---

### Changelog
| Version | Date | Change |
|---|---|---|
| 1.0 | 2026-04-13 | Initial PRD — Linear project spec format |

---

# THE HIVE — PRODUCT REQUIREMENTS DOCUMENT

Format: Linear Project Spec (short, outcome-focused, explicit non-goals)

---

## DACI Matrix

| Role | Who | Responsibility |
|---|---|---|
| Driver | Project founder | Owns this document, drives decisions |
| Approver | Project founder | Final sign-off (single person) |
| Contributor | Claude (AI) | Technical implementation guidance |
| Informed | Blog readers, offer users | Downstream audience — not part of decisions |

---

## PROBLEM

Kenyan side-hustle seekers use earning platforms (Freecash, JumpTask, Binance deposit bonuses, mobile game offers) but have no reliable way to compare them. The information that exists is either:

1. In USD (useless for Kenyan budgeting after conversion friction)
2. From platform marketing (biased — hides withdrawal fees and lock periods)
3. From US/UK review sites (inapplicable — different platforms, different payment methods)

The result: users deposit money, complete tasks, or grind through games — then discover fees and conversion losses ate 30–50% of what they expected to earn. Trust breaks. Users quit.

**Why now:** Binance P2P has matured the Kenya crypto on/off ramp. JumpTask and Freecash have expanded African availability. The infrastructure for earning in KES via crypto is better in 2026 than ever. The aggregator infrastructure doesn't exist yet.

---

## JOB STORIES (Intercom format)

**Primary:**
> When I hear about an earning platform online, I want to see the actual KES I'll walk away with after all fees, so I can decide in 30 seconds if it's worth my time.

**Secondary:**
> When I have an hour free, I want to know which available offer pays the best hourly rate in KES right now, so I don't waste time on something that pays below minimum wage.

**Tertiary:**
> When I'm deciding between two platforms, I want to see a verified record of someone actually completing the offer, so I know it's real and not a scam.

---

## PROPOSED SOLUTION

**Phase 1 — The Aggregator (Weeks 1–3):**
A public, anonymous web page listing 15 verified earning opportunities across three tiers, with:
- Net KES after full conversion chain
- Safety rating and Kenya accessibility clearly marked
- Hourly rate for time-dependent offers
- Last-verified date and personal test note where applicable
- All links routed through `/go/:platform` referral redirect

**Phase 2 — The Blog (Weeks 2–4):**
An Astro-powered static blog publishing:
- Evergreen educational posts (written while offer tests run)
- Test result posts (written after personal completion)
- Discovery posts (platform comparisons, surface underhyped options)

**Phase 3 — Automation (Weeks 6–10):**
- Terms-change crawler monitoring 10–25 offer URLs daily
- Alert system when terms change
- Dashboard reporting on earned totals, offer performance, crawler status

---

## SUCCESS METRICS

| Metric | Week 3 target | Month 3 target | Month 6 target |
|---|---|---|---|
| Offers live and verified | 15 | 30+ | 50+ |
| Blog posts published | 3 | 12+ | 24+ |
| Monthly affiliate commissions (KES) | 0 | 3,000–15,000 | 10,000–50,000+ |
| Offer accuracy rate | 100% | 95%+ | 95%+ |
| Last-verified staleness | 0 offers >7 days stale | 0 offers >14 days stale | Crawler handles this |

---

## NON-GOALS (explicit)

These are not in scope. If anyone (including Claude) suggests these, defer them.

- **User accounts or login.** Anonymous site. Period.
- **AdSense from day one.** Affiliate links earn more per user. AdSense comes later.
- **ML or "AI intelligence layer."** It's a PostgreSQL table with good queries. Not ML.
- **Running crawlers from Android.** Crawlers run on Replit server-side.
- **Listing casino/gambling offers on The Hive.** Those go on The Edge (separate brand).
- **Multi-currency display.** KES only. USD is shown only in conversion math.
- **Social features, comments, or ratings.** Out of scope for MVP and likely forever.
- **Mobile app.** The site is mobile-responsive. No native app.
- **Automated offer discovery via crawler.** Manual discovery via prompts until Month 3+.

---

## OPEN QUESTIONS

| Question | Impact | Resolution deadline |
|---|---|---|
| Which domain name and registrar for the .co.ke domain? | Medium — needed before launch | End of Week 1 |
| Will Binance affiliate approve the application for a new site with zero traffic? | High — primary revenue depends on this | Week 1–2 (apply Day 1) |
| What is Chipper Cash's exact referral program structure? | Medium — affects Tier A offer content | Week 1 research |
| Does Freecash's ToS allow promotion via affiliate comparison sites? | High — could invalidate the model | Week 1 research |
| What Kenyan side-hustle Facebook groups and Telegram channels have the highest engagement? | Medium — traffic strategy during SEO lag | Week 2 |

---

## ALTERNATIVES CONSIDERED

| Alternative | Why it was rejected |
|---|---|
| Build a cashback aggregator (original Pillar 7 concept) | Too many established competitors (TopCashback, Honey). No Kenya-specific differentiation. |
| List casino deposit bonuses alongside Tier A offers | Legal exposure. Brand risk. Moved to separate "The Edge" project. |
| Use WordPress for the blog | Too heavy, too slow. Astro delivers better Core Web Vitals and no plugin maintenance. |
| Build user accounts for personalised offer tracking | Adds GDPR liability, auth complexity, and maintenance overhead. Anonymous is faster and simpler. |
| Show earnings in USD | Removes the competitive moat. USD is meaningless to Kenyan users making budgeting decisions. |

---

## SCOPE ESTIMATES (T-shirt sizing)

| Component | Size | Rationale |
|---|---|---|
| Referral redirect route (`/go/:platform`) | XS | Single Express route, 20 lines of code |
| Offer database schema | S | 2 tables, straightforward PostgreSQL |
| Offer card UI (15 offers) | S | Static data, simple card layout, no auth |
| EV Calculator (Tier A) | S | Formula implementation, no external data |
| Hourly rate calculator (Tier C/D) | XS | Simpler formula, same component |
| Astro blog setup | S | Framework scaffold + 3 initial posts |
| Terms-change crawler (10 URLs) | S | Node.js + cron + hash comparison + alert |
| Dashboard (Week 10+) | M | React + chart library + DB queries |
| Programmatic SEO pages | M | SSR routes + data + schema markup |

---

## ACCEPTANCE CRITERIA — MVP (Week 3)

```
Given a user visits an offer card
When they view the net profit figure
Then it shows KES amount after the full USD → crypto → P2P → KES conversion chain
And it shows the last-verified date
And it includes the affiliate disclosure

Given a user clicks an offer link
When they are redirected
Then they pass through /go/:platform
And the redirect is logged with timestamp and platform
And they land on the partner site with referral tracking active

Given an offer term changes on a partner platform
When the Sunday manual audit runs
Then the last_verified date is updated
And any changed offers are flagged as "unconfirmed"
And the offer card status reflects the change within 24 hours

Given a reader arrives from a blog post
When they click through to the aggregator
Then the referral source is logged
And the offer card they reach is the one linked from the post
```
