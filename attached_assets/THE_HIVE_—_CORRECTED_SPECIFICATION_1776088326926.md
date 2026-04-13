# THE HIVE — MASTER PROJECT SPECIFICATION
## Kenya-First Reward Opportunity Ecosystem

**Document Version**: 2.0 (Corrected)  
**Last Updated**: April 11, 2026  
**Project Status**: Foundation phase (Day 1 starting)  
**Ship Target**: MVP Live by Week 3 | Revenue phase by Week 8

---

## EXECUTIVE SUMMARY

**What This Is**: A Kenya-focused reward aggregator that shows users the true net profit (in KES, after all fees and conversion friction) for earning opportunities across deposit bonuses, gaming offers, and task platforms.

**Why The Hive Matters**: Every existing aggregator shows USD gross bonuses and ignores conversion friction. Users land on platforms, deposit money, and discover fees eating 30-50% of what they expected to earn. The Hive shows the honest net in KES — the one metric that actually matters to Kenyan users.

**Who This Serves**: Kenyan side-hustle seekers (initially), then expand audience once trust and traffic prove the model works.

**How It Makes Money**: 
- Primary: Affiliate commissions when users sign up through your referral links (Binance, Freecash, JumpTask, Chipper Cash)
- Secondary: Blog drives traffic → Medium Partner Program → eventual Ezoic/AdSense (Months 2-6)
- Tertiary: "The Edge" (casino affiliate — separate brand, entirely isolated, Month 6+)

**Realistic First Year**: Month 1-3 builds infrastructure and trust. Week 8-12 sees first meaningful commissions. Month 6+ scales to KES 10,000-50,000+ monthly if execution is solid.

---

## PROJECT TIMELINE — SHIP DATES

| Phase | Timeline | Key Milestones | Revenue |
|-------|----------|---|---|
| **Foundation** | Days 1–7 | Affiliate applications submitted, KYC started, platform discovery begins | $0 |
| **MVP Build** | Weeks 1–3 | Referral system built, aggregator live with 15 offers, blog published (3+ posts), affiliate approvals arriving | $0-200 |
| **Community Launch** | Weeks 4–5 | 20+ offers live, first test result posts published, posting in Kenyan groups/Reddit/Telegram | $100-500 |
| **First Automation** | Weeks 6–7 | Terms crawler live, first affiliate commissions arriving, Umami analytics showing traffic | $300-1,000 |
| **Expansion** | Weeks 8–12 | Dashboard live, 30+ offers, first Tier A offer tested with earned capital, SEO beginning to rank | $1,000-5,000 |
| **Intelligence Layer** | Month 3+ | Pattern analysis running, Medium Partner Program active, deciding on "The Edge" launch | $3,000-15,000+ |

**The Line You Cannot Miss**: Week 3 go-live with aggregator. Everything before that is setup. Everything after builds on that foundation.

---

## FOUNDATIONAL DECISIONS (LOCKED — Do Not Revisit)

| Decision | Chosen | Rationale |
|----------|--------|-----------|
| **Primary Device** | Android + Replit | Proven workflow, no additional infrastructure cost |
| **Daily Commitment** | 50 min weekdays + two 2-hr weekend sessions (Weeks 1–6 only) | Setup phase requires concentrated time; steady state is 50 min/day |
| **Starting Capital** | $10 USD for Binance account | Everything else builds from zero capital using task platform earnings |
| **Coding Platform** | Replit | Already running, scaffolded, maintains costs near-zero |
| **Note Tool** | Obsidian only | No Notion. Locked. Single system, not two. |
| **AI Tools** | Claude (primary) + Perplexity (research only) | Established. Split: Claude for structured work, Perplexity for web research. |
| **Audience** | Kenyan side-hustle seekers first | Build trust in core market, expand horizontally later |
| **Site Type** | Anonymous, no user accounts | Zero GDPR liability, simpler privacy compliance, faster build |
| **Currency Display** | KES only (net after conversion) | This is the competitive moat — every other site shows USD gross |
| **Analytics** | Umami (privacy-first, self-hosted, free) | No cookies, no consent banner, no Google Analytics complexity |
| **Blog Platform** | Astro (static site) | Fast, SEO-perfect, minimal overhead. Hosted on Replit or Cloudflare Pages. |
| **Blog Monetization** | Affiliates → Ezoic/Medium → AdSense (later) | Do not use AdSense first; affiliate links need focus until you understand placement strategy |
| **Casino Project** | Separate brand "The Edge", separate domain, research Month 3, launch Month 6+ | Completely isolated — no shared branding or audience overlap with The Hive |

---

## THE 8 PILLARS — FINAL AUTHORITATIVE VERSION

### PILLAR 1 + 3 (MERGED): Intelligence Hub & Data Center — "The Nerve Center"
**Build Timeline**: Week 10+  
**Feasibility**: 7/10  
**Why Late**: This is the reporting layer. You cannot report on data that doesn't exist yet. Build this after Weeks 1-9 have populated the database.

**What It Actually Is**: A dashboard + PostgreSQL reporting system. Not two separate systems. The "intelligence layer" is simply good queries on structured data.

**Database Schema** (finalized):

```
offers table:
  - id, platform_name, tier (A/B/C/D)
  - deposit_usd, bonus_usd, lock_days, withdrawal_fee_usd
  - net_profit_kes, hours_required, hourly_rate_kes
  - activity_requirement, geographic_kenya, mpesa_compatible
  - kyc_required, kyc_time_days, affiliate_link
  - safety_rating (established/new/risky), last_verified (date)
  - personal_tested (boolean), personal_result_notes
  - status (active/unconfirmed/expired)

personal_tests table:
  - id, offer_id, date_started, date_completed
  - actual_deposit_kes, actual_bonus_kes, actual_fees_kes
  - actual_net_kes, hours_spent, complications_notes
  - user_feedback (detailed outcome from your testing)
```

**Dashboard Shows** (Week 10+):
- Total personal net earned across all tested offers
- Active vs. expired offer counts
- Crawler last-run timestamps
- Top performing offers by net KES and hourly rate
- Platform reliability score: (successful tests / offers attempted)
- Geographic breakdown: Which tiers are Kenya-exclusive vs. global

**Tool**: Express + React, already scaffolded. Zero new infrastructure.

---

### PILLAR 2: Narrative Blog — "The Story"
**Build Timeline**: Week 2 (setup) | Writing: Week 1 (parallel)  
**Feasibility**: 9/10  
**Ship Date**: Blog live with 3 posts by Week 3

**Platform**: Astro (static, fast, SEO-perfect) hosted on Replit or Cloudflare Pages  
**Domain**: Custom .co.ke or .com domain (KES 1,000-1,500/year — only mandatory recurring cost)

**Content Structure** — Three types of posts:

1. **Evergreen Posts** (written first, rank long-term)
   - "How deposit bonuses actually work — the math sites won't tell you"
   - "Complete guide to earning online in Kenya with M-Pesa"
   - "Binance Kenya setup — step by step for new users"
   - "JumpTask vs Freecash: Which pays better in Kenya"
   - "What is an offer wall and how to avoid wasting time on scams"

2. **Test Result Posts** (written after you complete offers — builds credibility)
   - "I tested [platform] for 30 days — here's my actual KES earnings"
   - "This offer paid me KES [X] in [Y] days — full breakdown and what I learned"

3. **Discovery Posts** (builds community, surfaces underhyped platforms)
   - "5 earning platforms most Kenyan blogs never mention"
   - "Why I stopped recommending [platform] — and what I recommend instead"

**Publishing Cadence**: One post per week minimum using 50-minute daily sessions.  
**Writing Format**: 400-800 words, personal, specific numbers in KES, no hype.

**Monetization Sequence**:
- **Week 1**: Affiliate links embedded → referral commissions start (Day 1)
- **Month 2**: Medium Partner Program cross-posting → passive Medium earning
- **Month 4+**: Ezoic display ads on low-conversion pages (only after traffic is consistent)
- **Month 6+**: AdSense only after you understand placement strategy (don't kill affiliate links with ad interference)
- **Month 6+**: Sponsored posts once you have verified audience metrics

---

### PILLAR 4: Crawler Swarm — "The Workers"
**Build Timeline**: Week 6+  
**Feasibility**: 6/10 (up from 4/10 with Kenya-specific scope)  
**Interim Solution**: Week 1-5 use manual weekly audits (10 minutes every Sunday)

**Primary Purpose**: **Terms monitoring** — detecting when platforms change offer terms, protecting users from stale data.  
**Secondary Purpose**: Discovery is done manually via prompts, not crawlers.

**Week 6-7 MVP** (simple, deployable in 50 lines of Node.js):
- Script checks 10 URLs every 24 hours
- Compares page hash to previous snapshot
- On change detected: sends you email/WhatsApp alert
- You manually review and update offer card status

**Interim Manual System** (Weeks 1-5):
- Every Sunday: Visit the 15 active offer pages
- Check: Still live? Bonus amount same? Withdrawal terms same?
- Update "last verified" date in database
- Flag any changes with status note

**Crawler Targets**:
- Binance Kenya bonus page
- Freecash offer wall
- JumpTask gig categories
- Terms of service pages (most critical — protects users)

**Tool**: cheerio + axios for static pages | Playwright only for confirmed JS-heavy pages | Run on Replit (no VPS needed at this scale)

---

### PILLAR 5: Creative Builder Agent — "The Architect"
**Use from**: Day 1 (as prompt templates in Obsidian)  
**Build Infrastructure**: Week 10+ (if needed)  
**Feasibility**: 7/10

**The Honest Truth**: You don't build an agent. You build a prompt template. Claude is the agent.

**The Two Obsidian Templates**:

**Template 1 — Offer Card Generator**:
```
Platform: [name]
Deposit required: [USD amount]
Bonus: [USD amount, how credited]
Lock period: [days]
Withdrawal fee: [USD amount and type]
Activity requirement: [what must be done]
KYC required: [yes/no, document type]
M-Pesa compatible: [yes/no/via crypto]

Generate:
1. Offer card copy (2-3 sentences, factual, zero hype)
2. Net profit in KES (show conversion math step by step)
3. Hourly rate in KES (if time-dependent)
4. Risk rating: Low/Medium/High with one-sentence justification
5. Single most important thing a Kenyan user must know
6. Last verified date placeholder
```

**Template 2 — Blog Post Drafter**:
```
I personally completed this offer:
Platform: [name]
Date started: [date] | Date completed: [date]
Actual deposit: KES [amount]
Actual bonus received: KES [amount]
Fees paid: KES [amount]
Net earned: KES [amount]
Hours spent: [hours]
Complications: [any issues encountered]

Write a 600-800 word first-person blog post:
- Tone: honest, practical, specific numbers only
- Structure: what I did → what happened → the math → verdict → link to offer
- No hype, no promises — just what happened
```

---

### PILLAR 6: Referral System — "The Silent Partner"
**Build Timeline**: Week 1 (2 hours to build)  
**Go-Live**: When affiliate approvals arrive (typically Week 1-2)  
**Feasibility**: 9/10

**The Architecture**:
```
/go/:platform route (Express)
  ↓
Logs: timestamp, platform, referrer, user agent
  ↓
301 redirect to affiliate URL with your tracking code
  ↓
Conversion tracked by platform's affiliate system
  ↓
Commission reported in publisher dashboard
  ↓
Paid monthly (most platforms) to crypto wallet
  ↓
Convert USDT via Binance P2P to KES
  ↓
M-Pesa receipt
```

**Affiliate Applications Priority List** (submit Day 1 before building anything):

| Platform | Application Time | Commission | Kenya Access | Payment Method |
|----------|------------------|-----------|--------|---|
| Binance | 3-7 days | % of lifetime trading fees | Yes | BTC/USDT |
| Freecash | 1-3 days | ~10% of referred earnings | Yes | Crypto → M-Pesa |
| JumpTask | 3-5 days | % of referred earnings | Yes | JMPT token |
| Chipper Cash | Instant (in-app) | KES per active referral | Yes | M-Pesa (likely) |

**FTC Requirement** (non-negotiable): Every blog post and offer listing must include: *"This is an affiliate link. I earn a commission if you sign up. This doesn't affect the offer terms or my review."*

**Realistic Commission Expectations**:
- Binance: Starts slow (~KES 500/month), compounds long-term as trading volume grows
- Freecash: KES 500-2,000/month, steady payouts
- JumpTask: KES 200-1,000/month, token conversion adds friction
- Chipper Cash: One-time referral bonus, not recurring

---

### PILLAR 7: Reward Opportunity Aggregator — "The Goldmine"
**Build Timeline**: Weeks 2-3  
**Go-Live**: Week 3  
**Feasibility**: 8/10

**Final Concept**: Three-tier, Kenya-accessible reward opportunities with honest KES net math and true conversion friction included.

**Tier Structure**:

**Tier A — Financial (Deposit + Wait)**
- Deposit required: $10+ minimum (USD equivalent ~KES 1,300+)
- Wait period: 30-90 days
- Examples: Binance, Chipper Cash, cryptocurrency staking
- Requires real capital — start here with 3-5 offers max after earning from Tier D
- Success metric: Predictable return, verified KES net

**Tier C — Gaming (In-App Purchase + Milestone)**
- Download game, make in-app purchase, reach milestone
- Time required: 4-20+ hours per offer
- Filter: Only list if hourly rate ≥ KES 800 and Kenya-accessible
- Start with 5 offers max — these require most testing time
- Personal play-test required before listing

**Tier D — Task Platforms (Zero Capital)**
- Freecash tasks, surveys, app installs
- JumpTask gigs
- App testing platforms
- Start here — zero capital required, immediate earnings
- Launch with 10-15 verified task types from each platform

**Every Offer Card Shows**:
```
Platform | Safety Rating (Established/New/Risky) | Kenya: Yes/No | M-Pesa: Direct/Via Crypto/No
Deposit: KES [X] | Bonus: KES [Y] | Lock: [Z] days | Fee: KES [W] | NET: KES [V]
[For Tier C/D] Time: [hours] | Hourly rate: KES [X]/hr
Activity required: [plain description]
KYC: [what documents, how long]
Last verified: [date] | Status: Active/Unconfirmed/Expired
[Your /go/platform affiliate link]
Your experience: [1 sentence if tested]
```

**Two Calculators** (interactive on aggregator):

**Calculator 1 — Deposit Offer EV**:
- Input: Your deposit amount (KES)
- Output: Net profit after all fees (KES), annualized return %, days to complete

**Calculator 2 — Task/Gaming Hourly Rate**:
- Input: Hours available per week
- Output: Estimated weekly KES earnings, "worth your time?" (threshold: KES 800/hr minimum)

**Currency Reality** (must show full conversion chain):
```
$5 Freecash earning
- $0.80 network fee (blockchain withdrawal)
= $4.20 received
- 2% P2P spread (Binance P2P)
= $4.12 net
× 129 (USD to KES rate, approximate)
= KES 531 net received

Display on aggregator: "Earns approximately KES 500 after conversion"
```

---

### PILLAR 8: Mobile Command Center — "The Cockpit"
**Active**: Day 1  
**Feasibility**: 7/10

**Locked Tools** (no additions without removing something):
- **Obsidian**: Notes, offer research, prompt templates
- **GitHub**: Version control
- **Replit**: All coding and hosting
- **Claude**: Writing, offer cards, prompt work
- **Perplexity**: Research/web discovery only

**Weekly Session Structure**:

| Day | Focus | Output |
|-----|-------|--------|
| Monday | Platform research | 2-3 platforms added to research queue |
| Tuesday | Blog writing | 300-400 words (half a post) |
| Wednesday | Code — one feature | One deployable improvement |
| Thursday | Offer testing (real usage) | Data logged to tracking table |
| Friday | Database update + audit | Offer cards current, last-verified dates fresh |
| Saturday (2 hrs) | Batch work (Weeks 1-6: setup / after: content) | 2 full posts or 1 major code feature |
| Sunday (2 hrs) | Weekly audit + planning | All 15 active offers re-checked, next week planned |

**Obsidian Vault Structure**:
```
The Hive/
├── Master Prompt.md (copy this into Claude for every session)
├── Deep Research Directive.md (template for exhaustive platform research)
├── Platform Discovery Prompts.md (3 tools to find new platforms)
├── Claude Templates/
│   ├── Offer Card Generator.md
│   └── Blog Post Drafter.md
├── Offer Research/
│   └── [One note per platform researched — findings, red flags, risk rating]
├── Personal Tests/
│   └── [One note per offer you've actually tested — exact results in KES]
├── Blog/
│   ├── Published/
│   └── Drafts/
└── Weekly Reviews/
    └── [One note per week — what worked, what to adjust]
```

---

## THE EDGE — Casino Affiliate Side Project (Scoped)
**Codename**: The Edge  
**Timeline**: Research Month 3 | Build Months 4-5 | Launch Month 6  
**Feasibility**: 6/10 (legal complexity higher than The Hive)

**Status**: Named, scoped, not started. Only after The Hive is established.

**Brand Strategy**: Completely separate domain, completely separate name, zero association with The Hive.

**Why Separate**: Casino affiliate sites attract different regulatory scrutiny and brand reputation effects. Mixing them compromises The Hive's credibility with its core side-hustle audience.

**Legal Path in Kenya**:
- Kenya BCLB (Betting Control and Licensing Board) regulates operators, not affiliates
- An affiliate site promoting BCLB-licensed operators operates in gray area but without direct licensing requirement for affiliates currently
- Must include: clear gambling disclaimer, responsible gambling resources, 18+ restriction

**Revenue Model**: CPA ($30-$150 per depositing player) + Revenue Share (25-40% of player lifetime losses, recurring)

---

## PRE-LAUNCH PHASE — Days 1-7 (The Foundation Nobody Sees)

| Day | Task | Why This Order |
|-----|------|---|
| **Day 1** | Submit affiliate applications (Binance, Freecash, JumpTask, Chipper) | Approvals take 3-14 days; start immediately |
| **Day 1** | Complete Binance KYC (highest priority) | Unlocks crypto receiving, P2P, affiliate program |
| **Day 2** | Complete Freecash + JumpTask account setup | Zero KYC needed for basic tasks; immediate earnings possible |
| **Day 2** | Purchase custom domain (KES 1,000-1,500) | Only mandatory recurring cost |
| **Day 3** | Complete Chipper Cash KYC | Unlocks M-Pesa integration |
| **Day 3** | Start Platform Discovery (Perplexity + Claude) | Generate raw list of 50-150 platforms |
| **Day 4-5** | Deep Research Directive on top 5 discovered platforms | Vet each platform before your money touches it |
| **Day 6** | Begin completing Tier D offers personally | Zero capital, immediate earnings, builds familiarity with platforms, generates content |
| **Day 7** | Document first offer test results in Obsidian | Creates your first database entry; validates process |

---

## COMPLETE BUILD ROADMAP

### **WEEK 1: Revenue Foundation**
- Build `/go/:platform` referral redirect (2 hours)
- Manually complete 5+ Tier D offers, document all results
- Document KES earnings pipeline (USD → network fee → P2P spread → KES net)
- Create database schema

### **WEEKS 2-3: Aggregator MVP Live**
- Offer card UI with both calculators (deposit EV + task hourly rate)
- 15 verified offers entered (5 per tier)
- All offer links routing through referral redirects
- Blog platform setup (Astro)
- Write and publish 3 evergreen blog posts
- Begin posting in Kenyan Facebook groups, Reddit (r/beermoney, r/Kenya), Telegram
- Start WhatsApp broadcast list

### **WEEKS 4-5: Content & Community**
- Publish 2 test-result blog posts (with real KES numbers from your offer testing)
- Cross-post best content to Medium
- Add 5-10 more verified offers (now 20-25 total)
- Weekly Sunday offer audit system running
- First affiliate commission reports arriving (or imminent)

### **WEEKS 6-7: First Automation**
- Terms-change crawler monitoring 10 URLs daily
- Alert system live (email/WhatsApp on change)
- Umami analytics installed, first traffic data visible
- Expand crawler to 25+ monitored URLs

### **WEEKS 8-9: Expand & Invest Earnings**
- Add 10 more offers (now 30+)
- Use earned Tier D capital to fund first Tier A offer test ($20-30 deposit)
- Expand blog with 2 more posts
- SEO traffic beginning to arrive

### **WEEKS 10-12: Intelligence & Dashboard**
- Dashboard + analytics reporting live
- Pattern analysis: which tiers/platforms perform best
- Evaluate affiliate commission performance
- Decide: continue scaling, or pivot based on data
- Research "The Edge" casino project (decision point)

---

## REALISTIC FIRST-YEAR EARNINGS PROJECTION

| Source | Timeline | Realistic Monthly KES | Notes |
|--------|----------|---|---|
| Personal Tier D testing | Week 1-4 | KES 3,000-8,000 | Zero capital, immediate, early adopter earnings |
| First affiliate commissions | Week 6-8 | KES 500-2,000 | Small initially; few users have converted yet |
| Tier A offer testing (with earned capital) | Week 8-10 | KES 1,500-4,000 | Higher reward but requires capital reinvestment |
| Medium Partner Program | Month 2-3 | KES 300-1,500 | Passive; needs Medium audience built |
| Growing affiliate volume | Month 3+ | KES 3,000-15,000 | Compounds as blog traffic grows |
| Ezoic/AdSense | Month 4-6 | KES 1,000-5,000 | Supplement, not primary revenue |
| "The Edge" affiliate (if built) | Month 6+ | KES 10,000-50,000+ | Higher earn per conversion, separate brand liability |

**Honest Note**: These are conservative estimates based on documented earnings from similar projects in comparable markets. Your results depend on: offer verification quality, content publishing consistency, community building pace, and luck with early affiliate approvals.

---

## THE MASTER PROMPT — Master This

Save this in Obsidian. Update "Current Status" every week. Paste this into Claude for every project session.

```
PROJECT: The Hive — Kenya-first reward opportunity aggregator for side-hustle seekers.

CURRENT STATUS: [UPDATE WEEKLY — e.g., "Week 3 — aggregator live with 15 offers, 3 blog posts published, Binance affiliate approved, earning KES 1,500/week from personal testing"]

STACK: Replit | PostgreSQL | React + Express | Obsidian | GitHub | Claude | Perplexity

CONSTRAINTS: Kenya-based | $10 starting capital | 50 min/day weekdays | Side-hustle audience | All math in KES | Anonymous site | No user accounts

NON-NEGOTIABLES:
- Affiliate disclosure on every link
- Last-verified date on every offer
- KES net shown (not USD gross) — THIS is the competitive moat
- Only list personally verified offers
- Never list negative-EV offers without explicit risk warning

FOR THIS TASK: [YOUR CURRENT PROJECT]

RESPONSE RULES:
1. Show all math in KES. Convert USD at current rate and include all conversion fees.
2. Flag immediately if platform unavailable/restricted in Kenya.
3. Flag immediately if task requires more capital than available.
4. State explicitly any dependency on something not yet built.
5. Call out hype vs. reality — be direct.
6. Every recommendation must fit in 50-minute session or 2-hour weekend block.
7. If something could break, say so before recommending it.
```

---

## CRITICAL ASSUMPTIONS (Document These — They Can Fail)

| Assumption | Probability | Fallback If Wrong |
|-----------|-----------|---|
| Affiliate programs approve within 14 days | High (85%) | Use anonymous referral links and track manually if needed |
| KYC approvals arrive within 5 business days | High (80%) | Start with non-KYC platforms (Freecash basic tasks) while waiting |
| Tier D platform terms don't change weekly | Medium (60%) | This is why crawler matters — monitor for changes, update immediately |
| Users actually convert from blog → aggregator → signup | Medium (70%) | Community distribution (Facebook, Telegram, Reddit) more reliable than SEO initially |
| "Conversion to KES via Binance P2P" remains consistent | Medium (65%) | Regulations or P2P availability could change; monitor alternatives (Kraken, Huobi) |
| 50 min/day is sustainable long-term | Low-Medium (50%) | Likely to drop below 50 min around Month 2; plan for this |
| Offers remain profitable after you list them | Medium (60%) | Platforms often reduce bonuses post-launch; constant monitoring required |
| Google indexes blog within 6 months | High (85%) | Content quality and backlinks matter; build on Medium + Reddit first for initial traffic |

---

## REFERENCE SECTION — Quick Links

All detailed prompts and tools are in: **PROMPTS_EXTRACTED.md**

Key sections to reference:
- Platform Discovery System (3 tools)
- Deep Research Directive (exhaustive vetting)
- Claude Offer Card Generator
- Claude Blog Post Drafter
- Master Prompt (for every session)

---

END OF SPECIFICATION

**Last Updated**: April 11, 2026  
**Next Review**: Weekly (update status column)  
**Maintenance**: Update only the "CURRENT STATUS" line weekly as you progress through phases.
