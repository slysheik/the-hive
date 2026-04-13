---
Version: 2.1
Last updated: 2026-04-13
Status: Approved
Owner: Project founder
---

### Changelog
| Version | Date | Change |
|---|---|---|
| 1.0 | 2026-04-11 | Initial specification |
| 2.0 | 2026-04-11 | Revised Pillar 7 (deposit bonus model), added Kenya context |
| 2.1 | 2026-04-13 | Full master plan integration, brutal_analysis pass applied |

---

# THE HIVE — MASTER PROJECT SPECIFICATION
## Kenya-First Reward Opportunity Ecosystem

---

## EXECUTIVE SUMMARY

**What this is:** A Kenya-focused reward aggregator showing users the true net profit in KES — after all conversion friction — for earning opportunities across three tiers: deposit bonuses, gaming offers, and task platforms.

**The single competitive moat:** Every competing site shows USD gross. The Hive shows KES net after the full conversion chain (USD → crypto → Binance P2P → KES). That one difference is the entire product.

**Who it serves:** Kenyan side-hustle seekers who want to earn online but have been burned by platforms that look lucrative in USD and disappoint in KES.

**How it makes money:**
1. Primary: Affiliate commissions (Binance, Freecash, JumpTask, Chipper Cash) via server-side referral redirect
2. Secondary: Blog → Medium Partner Program (Month 2+), Ezoic display ads on low-conversion pages (Month 4+)
3. Tertiary: "The Edge" — casino affiliate site, separate brand, Month 6+

**Realistic earnings timeline:**
- Months 1–3: Infrastructure and trust building. First commissions possible Week 8–12.
- Month 3–6: KES 3,000–15,000/month from growing affiliate traffic
- Month 6+: KES 10,000–50,000+/month if "The Edge" launches and traffic compounds

---

## FOUNDATIONAL DECISIONS

These are locked. Reopening them costs more than the decision is worth.

| Decision | Choice | Locked Reason |
|---|---|---|
| Primary device | Android + Replit | No infrastructure cost, proven workflow |
| Daily time commitment | 50 min weekdays + two 2-hr weekend sessions (Weeks 1–6 setup only) | Setup requires 3–5× more time than steady state |
| Starting capital | $10 USD (Binance account seed) | Everything else earned via Tier D task platforms |
| Note tool | Obsidian only | No Notion. Single system. |
| AI tools | Claude (primary) + Perplexity (research only) | Claude for structured work, Perplexity for live web search |
| Audience | Kenyan side-hustle seekers first | Build trust in core market before horizontal expansion |
| Site type | Anonymous, no user accounts | Zero GDPR liability, simpler build, no auth overhead |
| Currency display | KES net only (after full conversion chain) | This IS the competitive moat |
| Analytics | Umami (privacy-first, self-hosted) | No cookies, no consent banner, no Google Analytics complexity |
| Blog platform | Astro (static) | Fast load, SEO-optimised, zero JS overhead by default |
| Blog monetisation | Affiliate links → Ezoic/Medium → AdSense (in that sequence) | Never start with AdSense; affiliate clicks earn 10–50× more per user |
| Casino project | "The Edge" — separate brand, separate domain, Month 6+ | Isolated to protect The Hive's credibility |

---

## THE CURRENCY CONVERSION REALITY

Every offer calculation must use this chain. No exceptions.

**Exchange rate source (never hardcode):** Check the current USD/KES rate at [xe.com/convert/USD/KES](https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=KES) or Binance P2P at the time of calculation. Record the rate used and the date it was checked on every offer card.

```
Platform pays: $5.00 USD
├── Network withdrawal fee:     -$0.80 (varies by platform and network)
├── After fee:                  $4.20
├── Binance P2P spread (~2%):   -$0.08
├── Net USD:                    $4.12
└── × KES rate (check live):    KES [4.12 × current rate]

Example at 129 KES/USD (verify before using):  KES 531

Display on every offer card as: "Earns approximately KES [X] after conversion (rate checked [date])"
Never display: "$5 USD"
```

**Rate volatility note:** KES/USD can move 3–8% in a month. Recalculate all offer KES values monthly or when the rate shifts by more than 5 KES/USD. The `last_verified` field in the database covers this — include rate used in `personal_notes`.

---

## THE 8 PILLARS

### PILLAR 1 + 3 (MERGED): Intelligence Hub — "The Nerve Center"
**Build: Week 10+ | Feasibility: 7/10**

This is a reporting layer on data. Cannot exist before data exists. Do not build early.

**What it is not:** A separate AI system, ML pipeline, or data science project.
**What it is:** Good PostgreSQL queries on a structured offers database, displayed in a React dashboard.

**Database schema (final):**

```sql
-- Offers table
CREATE TABLE offers (
  id              SERIAL PRIMARY KEY,
  platform_name   TEXT NOT NULL,
  tier            CHAR(1) CHECK (tier IN ('A','C','D')),
  -- Tier A: Financial deposit bonuses (deposit + wait)
  -- Tier C: Gaming / in-app purchase offers (deposit + play)
  -- Tier D: Task platforms (no deposit required)
  -- Note: There is no Tier B. The tier system skips B intentionally
  -- to leave room for a future "Deposit + Light Activity" tier without
  -- renaming existing tiers. Do not use B until formally defined.
  deposit_usd     DECIMAL(10,2),
  bonus_usd       DECIMAL(10,2),
  lock_days       INTEGER,
  withdrawal_fee_usd DECIMAL(10,2),
  net_profit_kes  DECIMAL(10,2),
  hours_required  DECIMAL(5,1),
  hourly_rate_kes DECIMAL(10,2),
  activity_requirement TEXT,
  geographic_kenya BOOLEAN,
  mpesa_compatible TEXT CHECK (mpesa_compatible IN ('direct','via_crypto','no')),
  kyc_required    BOOLEAN,
  kyc_time_days   INTEGER,
  affiliate_link  TEXT,
  safety_rating   TEXT CHECK (safety_rating IN ('established','new','risky')),
  last_verified   DATE,
  personal_tested BOOLEAN DEFAULT FALSE,
  personal_notes  TEXT,
  status          TEXT CHECK (status IN ('active','unconfirmed','expired')) DEFAULT 'active',
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Personal tests table
CREATE TABLE personal_tests (
  id                  SERIAL PRIMARY KEY,
  offer_id            INTEGER REFERENCES offers(id),
  date_started        DATE,
  date_completed      DATE,
  actual_deposit_kes  DECIMAL(10,2),
  actual_bonus_kes    DECIMAL(10,2),
  actual_fees_kes     DECIMAL(10,2),
  actual_net_kes      DECIMAL(10,2),
  hours_spent         DECIMAL(5,1),
  complications_notes TEXT,
  created_at          TIMESTAMPTZ DEFAULT NOW()
);
```

**Dashboard outputs (Week 10+):**
- Total personal net earned (KES) across all completed tests
- Active / unconfirmed / expired offer counts by tier
- Top 10 offers by net KES and by hourly rate
- Platform reliability score: successful tests ÷ total attempts
- Crawler last-run timestamps per monitored URL
- Geographic breakdown: Kenya-exclusive vs global offers

---

### PILLAR 2: Narrative Blog — "The Story"
**Build: Week 2 (setup) | Writing: Week 1 (parallel) | Feasibility: 9/10**

**Platform:** Astro static site. Hosted on Cloudflare Pages (free tier). Custom domain required — KES 1,000–1,500/year. This is the only mandatory recurring cost.

**The content strategy in one sentence:** Document real offer tests with real KES numbers. Everything else supports that.

**Three content types:**

1. **Evergreen (written first — ranks long-term):**
   - "How deposit bonuses actually work — the math sites won't tell you"
   - "Complete guide to earning online in Kenya with M-Pesa"
   - "Binance Kenya setup — step by step for beginners"
   - "JumpTask vs Freecash: Which pays better in Kenya in 2026"
   - "What is an offer wall and how to avoid wasting time on scams"

2. **Test result (written after completing each offer — builds trust):**
   - "I tested [platform] for 30 days — my actual KES earnings"
   - "This offer paid me KES [X] in [Y] days — full breakdown"

3. **Discovery (builds community — surfaces underhyped platforms):**
   - "5 earning platforms most Kenyan blogs never mention"
   - "Why I stopped recommending [platform]"

**Publishing cadence:** One post per week minimum.
**Writing format:** 400–800 words, first person, specific KES numbers only, no hype.

**Monetisation sequence:**
- Day 1: Affiliate links embedded → referral commissions on every click
- Month 2: Medium cross-posting → Medium Partner Program income
- Month 4+: Ezoic display ads on low-conversion pages only
- Month 6+: AdSense only after understanding placement strategy
- Month 6+: Sponsored posts once audience metrics are verifiable

**SEO approach:** Kenya-specific long-tail keywords. See `docs/SEO_STRATEGY.md` for programmatic SEO plan.

---

### PILLAR 4: Crawler Swarm — "The Workers"
**Build: Week 6+ | Feasibility: 6/10**

**Primary job:** Terms monitoring — detecting when offer terms change and protecting users from stale data.
**Secondary job:** Not discovery. Discovery is done manually via prompts in `prompts/PLATFORM_DISCOVERY.md`.

**Interim solution (Weeks 1–5):** 10-minute manual audit every Sunday. Visit all 15 active offer pages. Check: still live? Bonus same? Terms same? Update `last_verified` date in database. Flag any change.

**Week 6–7 MVP:**
```javascript
// Checks 10 URLs every 24 hours via cron
// Compares page content hash to stored snapshot
// On change: sends email/WhatsApp alert
// Runs on Replit — no VPS needed
```

**Week 8–10 expansion:**
- Parse specific fields (bonus amount, fee) rather than just page hash
- Alert includes what changed, not just "something changed"
- Auto-update offer status to `unconfirmed` when change detected

**Target URLs (priority order):**
1. ToS pages for all listed platforms (most critical — terms changing = user risk)
2. Binance Kenya bonus page
3. Freecash offer wall (top offers only)
4. JumpTask gig category pages
5. Chipper Cash referral/bonus page

**Tool decision:** cheerio + axios for static pages. Playwright only when JS rendering is confirmed necessary. Never use Selenium.

---

### PILLAR 5: Creative Builder Agent — "The Architect"
**Use: Day 1 (as Obsidian prompt templates) | Infrastructure: Week 10+ | Feasibility: 7/10**

**The honest reframe:** You don't build an agent. You build templates. Claude is the agent.

Templates live in `prompts/`. Run them in Claude. That's the agent system for Months 1–6.

Real agent infrastructure (LangGraph, CrewAI) is Week 10+ if still needed. It probably won't be.

---

### PILLAR 6: Referral System — "The Silent Partner"
**Build: Week 1 (2 hours) | Live: When affiliate approvals arrive | Feasibility: 9/10**

**Architecture:**
```
User clicks offer link
    ↓
/go/:platform route (Express — already scaffolded)
    ↓
Logs: timestamp, platform, referrer URL, user agent
    ↓
301 redirect to affiliate URL with tracking code
    ↓
Conversion tracked in platform's affiliate dashboard
    ↓
Commission paid monthly to crypto wallet
    ↓
Convert USDT → KES via Binance P2P
    ↓
M-Pesa receipt
```

**Affiliate applications — submit Day 1, before building anything else:**

| Platform | Est. approval | Commission | Kenya accessible | Payment |
|---|---|---|---|---|
| Binance | 3–7 days | % of lifetime trading fees | Yes | BTC/USDT |
| Freecash | 1–3 days | ~10% of referred earnings (lifetime) | Yes | Crypto → M-Pesa |
| JumpTask | 3–5 days | % of referred earnings | Yes | JMPT token |
| Chipper Cash | Instant (in-app) | KES per active referral | Yes | M-Pesa |

**While awaiting approvals:** Build redirect infrastructure with placeholder links. Swap in real affiliate URLs the moment approvals arrive.

**FTC disclosure (mandatory on every offer card and blog post):**
> "This is an affiliate link. I earn a commission if you sign up. This doesn't affect the offer terms or my review."

---

### PILLAR 7: Reward Opportunity Aggregator — "The Goldmine"
**Build: Weeks 2–3 | Live: Week 3 | Feasibility: 8/10**

**The offer tier structure:**

**Tier A — Financial (Deposit + Wait):**
- Crypto exchanges with deposit bonuses (Binance)
- Local fintech deposit bonuses (Chipper Cash, Pezesha)
- Lock period expressed as annualised return %
- Launch with 3–5 offers only — personally verified with real capital
- Expand only as capital from Tier D earnings allows

**Tier C — Gaming (In-App Purchase + Milestone):**
- Mobile game offers from offer walls (Freecash, AdGate)
- Only list if: Kenya-accessible, hourly rate ≥ KES 800, personally reviewed
- Launch with 3–5 offers maximum — these require the most testing time

**Tier D — Task Platforms (Zero Capital):**
- Freecash tasks, surveys, app installs
- JumpTask gig categories
- Primary launch content: 10–15 verified task types per platform
- This is where the site starts — no capital required, immediate earning possible

**Every offer card contains (no exceptions):**
```
Platform: [name]
Safety rating: Established / New / Risky
Kenya available: Yes / No / Partial
M-Pesa compatible: Direct / Via crypto / No

Deposit required: KES [X]
Bonus: KES [Y]
Lock period: [Z] days
Withdrawal fee: KES [W]
NET PROFIT: KES [V] ← displayed prominently

[If time-dependent]
Estimated time: [hours]
Hourly rate: KES [X]/hr

Activity required: [plain language — no fine print]
KYC: [documents needed, estimated processing time]
Last verified: [date]
Status: Active / Unconfirmed / Expired
Affiliate link: /go/[platform]

Personal note: [1 sentence from your actual experience, if tested]
```

**The two calculators:**

Calculator 1 — Deposit Offer EV:
```
Inputs: Deposit amount (user enters KES)
Outputs:
  - Net profit (KES) after all fees
  - Annualised return %
  - Days to completion
  - Risk assessment
```

Calculator 2 — Task/Gaming Hourly Rate:
```
Inputs: Hours available per day
Outputs:
  - Estimated weekly earnings (KES)
  - Is it worth your time? (threshold: KES 800/hr)
  - Days to minimum withdrawal
```

---

### PILLAR 8: Mobile Command Center — "The Cockpit"
**Active: Day 1 | Feasibility: 7/10**

**Locked tool stack (final — no additions without removing something first):**

| Tool | Purpose |
|---|---|
| Obsidian | Notes, research, prompt templates |
| GitHub | Version control |
| Replit | All coding and hosting |
| Claude | Primary AI — writing, templates, analysis |
| Perplexity | Research only — live web search |

**Daily session structure:**

| Day | Focus | Expected output |
|---|---|---|
| Monday | Platform research | 2–3 platforms added to research queue |
| Tuesday | Blog writing | 300–400 words (half a post) |
| Wednesday | Code — one feature or fix | One deployable improvement |
| Thursday | Offer testing (using a real platform) | Data entered to tracking table |
| Friday | Database + offer card updates | All active offers re-checked, last_verified updated |
| Saturday (2 hrs) | Setup tasks (Weeks 1–6) / content batch (later) | 2 posts or 1 major feature |
| Sunday (2 hrs) | Weekly offer audit + next week plan | All active offers re-checked |

**Obsidian vault structure:**
```
The Hive/
├── Master Prompt.md
├── Deep Research Directive.md
├── Platform Discovery Prompts.md
├── Claude Templates/
│   ├── Offer Card Generator.md
│   └── Blog Post Drafter.md
├── Offer Research/
│   └── [one note per platform researched]
├── Personal Tests/
│   └── [one note per offer personally completed]
├── Blog/
│   ├── Published/
│   └── Drafts/
└── Weekly Reviews/
    └── [one note per week — what worked, what didn't]
```

---

## THE CASINO SIDE PROJECT — "THE EDGE"

**Isolation rules (non-negotiable):**
- Different domain name, different brand name
- Zero cross-linking with The Hive
- Zero shared branding, colors, or copy tone
- The Hive audience never learns The Edge exists unless they find it independently

**Timeline:** Research Month 3. Build Month 4–5. Launch Month 6.

**The legal-to-lucrative path in Kenya:**
- Kenya BCLB (Betting Control and Licensing Board) regulates operators, not affiliates
- Affiliate site promoting BCLB-licensed operators: legal gray area, currently no direct licensing requirement for affiliates
- Required: gambling disclaimer, responsible gambling link, 18+ gate
- Revenue model: CPA ($30–$150 per depositing player) + revenue share (25–40% of player lifetime losses)
- This is why The Edge is worth building — casino affiliate pays 5–10× more per user than most other affiliate categories

**Build only after The Hive has proven traffic.** The existing audience is the distribution channel for The Edge.

---

## DEFINITION: "PERSONALLY VERIFIED"

This term appears throughout this specification and is non-negotiable. Here is the exact minimum standard:

**An offer is "personally verified" when ALL of the following are true:**

| Step | Minimum requirement |
|---|---|
| 1. ToS reviewed | You have read the full Terms of Service for the offer. Not a summary — the actual ToS. |
| 2. Account created | You have created an account on the platform under your own identity. |
| 3. KYC completed | You have completed identity verification if required, and it was approved. |
| 4. Offer attempted | You have either: (a) deposited the minimum amount, OR (b) completed at least 3 tasks on task platforms. |
| 5. Withdrawal attempted | You have requested at least one withdrawal, even a small one, and confirmed it was received. |
| 6. Data recorded | You have a personal_tests record in the database with all actual KES amounts filled in. |

**Partial verification (not sufficient for listing):**
- Reading about the platform without signing up
- Signing up but not attempting a withdrawal
- Attempting but not completing the KYC process

**Exception — new platforms with no withdrawal minimum:**
If the platform has a withdrawal minimum you cannot meet yet (e.g., requires $20 minimum and you only earned $8), you may list it with status `unconfirmed` and a note: "Withdrawal not yet tested — listed based on signup and partial completion."

---

## EMERGENCY PROCEDURE: FRAUDULENT PLATFORM DISCOVERED

If a listed platform is exposed as fraudulent, non-paying, or running a scam after listing:

1. **Immediate (within 1 hour):** Change offer status to `expired` in database. The offer card disappears from the aggregator.
2. **Same day:** Publish a blog post titled "WARNING: [Platform] — Do Not Use" with full details of what was discovered.
3. **Same day:** Share the warning post in every community channel where The Hive has been mentioned.
4. **Within 48 hours:** Remove the platform from the affiliate program if applicable.
5. **Document:** Save full evidence in `research/platforms/[platform]-FRAUD-REPORT.md`.

If you personally referred users to the platform: acknowledge this directly in the warning post. Do not hide it. Transparency in a failure builds more long-term trust than pretending it didn't happen.

---

## REALISTIC FIRST-EARNINGS PROJECTION

| Source | When | Realistic Monthly KES |
|---|---|---|
| Tier D personal offer earnings | Week 1 | KES 2,000–5,000 |
| First affiliate commissions | Week 6–8 | KES 500–2,000 |
| Tier A offer (after reinvestment) | Week 8–10 | KES 1,500–4,000 |
| Medium Partner Program | Month 2–3 | KES 300–1,500 |
| Growing affiliate traffic | Month 3+ | KES 3,000–15,000 |
| The Edge affiliate (if launched) | Month 6+ | KES 10,000–50,000+ |

These are conservative estimates based on comparable markets. Actual results depend on offer quality, content consistency, and community building pace.
