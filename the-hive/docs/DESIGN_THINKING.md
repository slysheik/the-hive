---
Version: 1.0
Last updated: 2026-04-13
Framework: JTBD Switch Interview (Bob Moesta / Re-Wired Group)
---

# THE HIVE — DESIGN THINKING ANALYSIS

## Framework Used: JTBD Switch Interview

**Why JTBD and not Double Diamond or GV Sprint:**
The problem is defined. The solution direction is defined. What's unknown is *why* a Kenyan side-hustle seeker would switch to The Hive over their current behaviour — which is Googling platform names individually and trusting whatever they find. JTBD Switch Interview is the right tool for understanding that switch.

---

## Problem Definition

### HMW Statement

> How might we help Kenyan side-hustle seekers make confident earning decisions in under 60 seconds, without needing to trust platform marketing or search through Reddit threads for accurate KES numbers?

---

## Core User Profile (Synthesised — Not Fictional Persona)

**Who they actually are (evidence-based from r/beermoney, r/Kenya, and GPT platform communities):**

- 18–35, urban Kenya (Nairobi, Mombasa, Kisumu)
- Has a smartphone, Binance account, or M-Pesa
- Has tried at least one earning platform and been disappointed
- Is not naive — they've been burned before and are cautious now
- Has limited capital (under KES 5,000 available to risk)
- Has 30–120 minutes of daily free time to allocate to earning

---

## JTBD Forces Diagram

| Force | Direction | What it looks like for The Hive user |
|---|---|---|
| **Push — situational** | Toward switching | "I deposited KES 1,500 into a platform. After conversion fees and the withdrawal minimum, I got KES 600 back. I felt stupid." |
| **Pull — new solution** | Toward switching | "If I could see the real KES number before I commit any money or time, I'd stop wasting both." |
| **Anxiety — new** | Against switching | "How do I know this site isn't just promoting whatever pays them the highest affiliate commission?" |
| **Habit — present** | Against switching | "I just Google '[platform name] review Kenya' and check the first result. It's unreliable but it's what I know how to do." |

**Switch happens when Push + Pull > Anxiety + Habit.**

The Hive's design decisions exist to tip that equation:
- **Push is already there** — users have been burned. We don't need to create this.
- **Pull is the KES net display** — showing real numbers is what attracts them.
- **Anxiety requires transparency** — personal test notes, last-verified dates, and affiliate disclosure build enough trust to reduce this.
- **Habit is reduced by search visibility** — appearing in Google results for "[platform] Kenya review" intercepts the existing behaviour without requiring behaviour change.

---

## Solution Concepts

| Concept | Desirable? | Feasible? | Viable? | Riskiest assumption |
|---|---|---|---|---|
| KES-net aggregator with personal test notes | High — unique and Kenya-specific | High — simple database + React | High — affiliate commissions scale with traffic | Users trust the personal notes enough to act |
| Community-verified ratings (user votes) | Medium — social proof is powerful | Low — requires user accounts | Low — adds complexity before trust is established | Enough users exist to vote meaningfully at launch |
| Real-time offer scraping | Low — marginal improvement over weekly audits | Low — scraping is fragile | Medium — automation has maintenance overhead | Scrapers can maintain accuracy better than manual audits |
| Earn-tracking dashboard for personal use | High — users want to track their own progress | Medium — requires accounts | Low — requires auth system | Users want to track centrally vs. a spreadsheet |

**Build concept 1 first.** Everything else is premature optimisation.

---

## Prototype Plan

**What to build (lowest fidelity that tests the riskiest assumption):**

The riskiest assumption: *"Users trust the personal test notes enough to act on the offer."*

Lowest fidelity test: A single offer card — hand-built in HTML, no database — shared in a Kenyan WhatsApp group or Telegram channel. Contains:
- Platform name
- KES net (calculated manually)
- Personal note: "I tested this. Here's what happened: [3 sentences]"
- Last verified date

**Who to test with:** 5 people from Kenyan side-hustle Telegram/WhatsApp groups. Ask them: "Would you click this? What would stop you?"

**What success looks like:** 3 of 5 people say they would click through and at least consider the offer. 0 of 5 say "this looks like a scam" — that's a trust failure, not a traffic problem.

**The 5-Act interview questions (after showing them the card):**
1. "Walk me through the last time you tried an earning platform. What happened?"
2. "What would make you trust a recommendation like this?"
3. "What would make you suspicious of it?"
4. "If the KES net number was wrong, what would you do?"
5. "What's missing from this that would make you act immediately?"

---

## Key Insights (Design Implications)

**Insight 1: The burn memory is the biggest asset.**

Every user who's been misled by USD gross numbers has a specific memory of discovering the gap. The Hive's messaging should reference this memory, not abstract "save time" messaging. Copy should say: "See what you'll actually walk away with in KES — not the number the platform advertises."

**Implication:** Hero section copy references the conversion friction problem explicitly.

---

**Insight 2: Affiliate skepticism is the primary trust barrier.**

The anxiety force is almost entirely "this site profits from what it recommends." The two trust signals that reduce this most effectively:
1. Personal test notes with honest outcomes (including negative ones)
2. Affiliate disclosure placed prominently, not hidden in a footer

**Implication:** Affiliate disclosure appears on every offer card, not just in a site-wide footer. Personal notes include failures: "I attempted this offer and the withdrawal took 3× longer than stated."

---

**Insight 3: The habit being replaced is Google search.**

Users aren't switching from a competitor — they're switching from Googling. The Hive appears in that same Google search. It doesn't need to change behaviour; it needs to be the best result for the search they're already doing.

**Implication:** SEO is not secondary — it's the primary acquisition channel. Every offer card is a keyword target.

---

**Insight 4: Speed of decision is the UX requirement.**

Users have limited time. They're not research mode — they're decision mode. The KES net number, safety rating, and "personal tested" flag must be visible without scrolling. Everything else is secondary.

**Implication:** Offer card hierarchy: KES net → Safety rating → Personal tested flag → Lock period → Hourly rate. Disclosure and details fold below.

---

## Next Steps (Design → Build)

1. Build one offer card in Figma or HTML. Test with 5 real users before building the database.
2. If trust signal passes the test: build the database schema + card component
3. If trust signal fails: revise the card design before writing any backend code
4. After 3 weeks live: re-run the "walk me through your last experience" interview with 3 users who found the site organically. Compare to launch assumptions.
