# EXTRACTED PROMPTS & SYSTEM INSTRUCTIONS
## References from original Cash aggregator.md discussions

**Purpose**: This file contains all standalone prompts, directives, and templates extracted from project discussions. Use these separately from the specification.

---

## SYSTEM PROMPT — Working Agreement With Claude

(This is what was embedded at the top of Cash aggregator.md originally)

```
You are a senior systems architect, automation engineer, and ethical growth hacker 
with deep expertise in web scraping, agent orchestration, affiliate marketing, 
and mobile-first development. 

You think in systems, speak plainly, and never overpromise.

Working style:
- Be direct. No fluff.
- If something is unrealistic, say so immediately.
- If overcomplicating, simplify ruthlessly.
- Give the 80/20: What 20% of effort gets 80% of results?
- Treat me as intermediate-level: I know basics, but explain complex concepts.

Constraints I'm working within:
- Primary device: Android phone
- Budget: Starting lean, prefer free/low-cost tools
- Time: Building progressively, not all at once
- Ethics: Aggressive but not deceptive — users should benefit, not feel tricked
```

---

## DEEP RESEARCH DIRECTIVE — Platform Exhaustion Template

Use this when investigating any new platform before listing it.

```
RESEARCH TARGET: [Platform name]

Investigate and report on every one of these dimensions. Do not summarize — go deep on each:

1. THE OFFER MECHANICS
   - Exact deposit minimum and maximum
   - Exact bonus amount and how it's credited (cash, tokens, credits?)
   - Is the bonus withdrawable immediately or locked?

2. THE WITHDRAWAL REALITY
   - Every fee associated with withdrawing (flat, percentage, both)
   - Minimum withdrawal amount
   - Withdrawal methods available in Kenya specifically
   - M-Pesa compatibility — direct or via crypto conversion?
   - Average real withdrawal time (not what they claim — what users report)

3. THE HIDDEN CONDITIONS
   - Wagering or activity requirements before withdrawal
   - Time limits on completing requirements
   - Geographic restrictions — is Kenya explicitly included or excluded?
   - KYC (identity verification) requirements — what documents, how long does it take
   - Any conditions that void the bonus

4. THE PLATFORM'S REPUTATION
   - How long has it been operating?
   - Any history of payment delays, frozen accounts, or changed terms
   - Reddit, Trustpilot, and forum sentiment — surface specific complaints not just ratings
   - Any known issues specific to African or Kenyan users

5. THE REAL NUMBERS
   - What do actual users report earning per hour on this platform?
   - What is the realistic net profit after all fees in KES?
   - What percentage of users who attempt the offer actually complete it successfully?

6. THE AFFILIATE/REFERRAL PROGRAM
   - Does one exist?
   - Commission structure — per signup, per deposit, revenue share, or token-based?
   - Payment method for affiliate earnings — is it Kenya-accessible?
   - Any restrictions on how you can promote it

7. RED FLAGS
   - List every term in their ToS that could be used to deny a payout
   - Any clause that lets them change terms retroactively
   - Any reports of accounts being banned for "abuse" of bonuses

FINAL OUTPUT: 
- A risk rating (Low / Medium / High)
- A recommended action (List it / List with warnings / Do not list)
- The single most important thing a Kenyan user must know before signing up
```

---

## PLATFORM DISCOVERY SYSTEM — Three Tools for Finding Undiscovered Platforms

### TOOL 1 — Discovery Prompt (Run in Perplexity)

```
Discovery mission: I am mapping every platform that offers [EARNING MODEL] 
to users in Kenya. I have no prior knowledge of this space. I want an 
exhaustive list, not just the popular ones.

Search across these angles and compile everything you find:

1. Direct platforms — Apps, websites, or services that directly pay users 
   for [EARNING MODEL]

2. Aggregator platforms — Sites that host multiple offers from different 
   advertisers (offer walls, GPT sites, reward hubs)

3. Community-discovered platforms — What are people on Reddit 
   (r/beermoney, r/slavelabour, r/Kenya, r/sidehustle), Quora, 
   Facebook groups, and Telegram channels in Kenya currently using?

4. Crypto-adjacent platforms — Platforms that pay in crypto but are 
   accessible via Binance P2P in Kenya

5. Emerging platforms — Anything launched in the last 12 months in this 
   category that hasn't been widely covered yet

6. Africa/Kenya-specific platforms — Local platforms that global lists 
   miss entirely

For each platform found, give me:
- Platform name and URL
- How it pays (cash, crypto, gift cards, M-Pesa)
- Kenya accessible (yes/no/unclear)
- One sentence on how the earning works
- How popular or obscure it is

Do not filter by quality yet. I want the raw list first — 
I will evaluate each one separately.
```

**Replace [EARNING MODEL] with each of these (8 separate searches)**:
- "deposit bonuses"
- "task completion and micro-jobs"
- "in-game purchases that earn rewards"
- "signup bonuses for financial apps"
- "cashback on purchases"
- "crypto staking and yield bonuses"
- "survey and opinion rewards"
- "app testing and feedback rewards"

### TOOL 2 — Community Mining Prompt (Run in Claude + Perplexity)

```
Community intelligence mission: I want to find earning platforms that real 
users in Kenya, East Africa, or developing markets are actively discussing 
right now — not review sites, not affiliate blogs, actual user discussions.

Search these specific communities and compile what platforms come up:

- Reddit: r/beermoney, r/Kenya, r/slavelabour, r/signupbonuses, r/WorkOnline
- Quora: Questions about "earning money online Kenya" or "side hustle Kenya"
- Telegram: Kenyan side hustle groups, crypto Kenya groups
- Facebook: "Make money online Kenya" groups
- YouTube comments: On videos about earning money in Kenya
- Twitter/X: #makemoneyonlineKenya, #sidehustleKenya

For each platform mentioned across these communities:
- How often does it come up (single mention vs. repeated)?
- Is the sentiment positive, negative, or mixed?
- Any specific warnings from Kenyan users about payment issues?
- Does it pay to M-Pesa or require crypto?

Flag separately: Any platform that multiple community members warn about. 
These are worth knowing even if you won't list them.
```

### TOOL 3 — Reverse Engineer Prompt (Run in Claude)

```
Reverse engineering mission: I want to find earning platforms by tracing 
where advertisers spend money to acquire users.

Work through these reverse angles:

1. Offer wall sources — What companies pay Freecash, Offertoro, AdGate Media, 
   CPX Research, and similar offer wall networks to run their offers? 
   List every advertiser category and specific companies you can identify.

2. App store mining — What apps in the Google Play Store under categories 
   "Finance," "Earning," "Rewards," and "Cashback" have above 4.0 rating, 
   10,000+ downloads, and are available in Kenya?

3. Affiliate network mining — What earning/reward platforms run affiliate 
   programs on networks like ShareASale, Impact, CJ Affiliate, or 
   PartnerStack that accept Kenyan affiliates?

4. Press release trail — What companies in the "fintech rewards," 
   "earn-to-play," or "deposit bonus" space have issued press releases 
   in the last 24 months announcing a Kenya or Africa expansion?

5. App permissions trail — What apps request M-Pesa integration permissions, 
   suggesting they're built for East African users?

Output: A list of platforms discovered through each angle, categorized by 
how they were found.
```

---

## CLAUDE OFFER CARD GENERATOR TEMPLATE

Save this in Obsidian. Run it in Claude for every offer.

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
1. Offer card copy (2–3 sentences, factual, no hype)
2. Net profit calculation in KES (show the conversion math)
3. Hourly rate in KES if time required
4. Risk rating: Low / Medium / High with one-sentence justification
5. The single most important thing a Kenyan user must know before starting
6. Last verified date placeholder
```

---

## CLAUDE BLOG POST DRAFTER TEMPLATE

Save this in Obsidian. Run it in Claude after completing an offer.

```
I personally completed this offer:

Platform: [name]
Date started: [date]
Date completed: [date]
Actual deposit: KES [amount]
Actual bonus received: KES [amount]
Fees paid: KES [amount]
Net earned: KES [amount]
Hours spent: [hours]
Complications: [any issues]

Write a 600-word first-person blog post.

Tone: honest, practical, specific numbers only.

Structure: 
- What I did
- What happened
- The math
- Verdict
- Link to offer card

No hype. No promises. Just what actually happened.
```

---

## MASTER PROMPT — Use This for Every Session

Save this in Obsidian. Paste into Claude at the start of every project session.

```
PROJECT: The Hive — Kenya-first reward opportunity aggregator for side-hustle seekers.

CURRENT STATUS: [UPDATE WEEKLY]

STACK: Replit | PostgreSQL | React + Express | Obsidian | GitHub | Claude | Perplexity

CONSTRAINTS: Kenya-based | $10 starting capital | 50 min/day weekdays | 
Side-hustle audience | All math in KES | Anonymous site | No user accounts

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

END OF PROMPTS_EXTRACTED.md
# EXTRACTED PROMPTS & SYSTEM INSTRUCTIONS
## References from original Cash aggregator.md discussions

**Purpose**: This file contains all standalone prompts, directives, and templates extracted from project discussions. Use these separately from the specification.

---

## SYSTEM PROMPT — Working Agreement With Claude

(This is what was embedded at the top of Cash aggregator.md originally)

```
You are a senior systems architect, automation engineer, and ethical growth hacker 
with deep expertise in web scraping, agent orchestration, affiliate marketing, 
and mobile-first development. 

You think in systems, speak plainly, and never overpromise.

Working style:
- Be direct. No fluff.
- If something is unrealistic, say so immediately.
- If overcomplicating, simplify ruthlessly.
- Give the 80/20: What 20% of effort gets 80% of results?
- Treat me as intermediate-level: I know basics, but explain complex concepts.

Constraints I'm working within:
- Primary device: Android phone
- Budget: Starting lean, prefer free/low-cost tools
- Time: Building progressively, not all at once
- Ethics: Aggressive but not deceptive — users should benefit, not feel tricked
```

---

## DEEP RESEARCH DIRECTIVE — Platform Exhaustion Template

Use this when investigating any new platform before listing it.

```
RESEARCH TARGET: [Platform name]

Investigate and report on every one of these dimensions. Do not summarize — go deep on each:

1. THE OFFER MECHANICS
   - Exact deposit minimum and maximum
   - Exact bonus amount and how it's credited (cash, tokens, credits?)
   - Is the bonus withdrawable immediately or locked?

2. THE WITHDRAWAL REALITY
   - Every fee associated with withdrawing (flat, percentage, both)
   - Minimum withdrawal amount
   - Withdrawal methods available in Kenya specifically
   - M-Pesa compatibility — direct or via crypto conversion?
   - Average real withdrawal time (not what they claim — what users report)

3. THE HIDDEN CONDITIONS
   - Wagering or activity requirements before withdrawal
   - Time limits on completing requirements
   - Geographic restrictions — is Kenya explicitly included or excluded?
   - KYC (identity verification) requirements — what documents, how long does it take
   - Any conditions that void the bonus

4. THE PLATFORM'S REPUTATION
   - How long has it been operating?
   - Any history of payment delays, frozen accounts, or changed terms
   - Reddit, Trustpilot, and forum sentiment — surface specific complaints not just ratings
   - Any known issues specific to African or Kenyan users

5. THE REAL NUMBERS
   - What do actual users report earning per hour on this platform?
   - What is the realistic net profit after all fees in KES?
   - What percentage of users who attempt the offer actually complete it successfully?

6. THE AFFILIATE/REFERRAL PROGRAM
   - Does one exist?
   - Commission structure — per signup, per deposit, revenue share, or token-based?
   - Payment method for affiliate earnings — is it Kenya-accessible?
   - Any restrictions on how you can promote it

7. RED FLAGS
   - List every term in their ToS that could be used to deny a payout
   - Any clause that lets them change terms retroactively
   - Any reports of accounts being banned for "abuse" of bonuses

FINAL OUTPUT: 
- A risk rating (Low / Medium / High)
- A recommended action (List it / List with warnings / Do not list)
- The single most important thing a Kenyan user must know before signing up
```

---

## PLATFORM DISCOVERY SYSTEM — Three Tools for Finding Undiscovered Platforms

### TOOL 1 — Discovery Prompt (Run in Perplexity)

```
Discovery mission: I am mapping every platform that offers [EARNING MODEL] 
to users in Kenya. I have no prior knowledge of this space. I want an 
exhaustive list, not just the popular ones.

Search across these angles and compile everything you find:

1. Direct platforms — Apps, websites, or services that directly pay users 
   for [EARNING MODEL]

2. Aggregator platforms — Sites that host multiple offers from different 
   advertisers (offer walls, GPT sites, reward hubs)

3. Community-discovered platforms — What are people on Reddit 
   (r/beermoney, r/slavelabour, r/Kenya, r/sidehustle), Quora, 
   Facebook groups, and Telegram channels in Kenya currently using?

4. Crypto-adjacent platforms — Platforms that pay in crypto but are 
   accessible via Binance P2P in Kenya

5. Emerging platforms — Anything launched in the last 12 months in this 
   category that hasn't been widely covered yet

6. Africa/Kenya-specific platforms — Local platforms that global lists 
   miss entirely

For each platform found, give me:
- Platform name and URL
- How it pays (cash, crypto, gift cards, M-Pesa)
- Kenya accessible (yes/no/unclear)
- One sentence on how the earning works
- How popular or obscure it is

Do not filter by quality yet. I want the raw list first — 
I will evaluate each one separately.
```

**Replace [EARNING MODEL] with each of these (8 separate searches)**:
- "deposit bonuses"
- "task completion and micro-jobs"
- "in-game purchases that earn rewards"
- "signup bonuses for financial apps"
- "cashback on purchases"
- "crypto staking and yield bonuses"
- "survey and opinion rewards"
- "app testing and feedback rewards"

### TOOL 2 — Community Mining Prompt (Run in Claude + Perplexity)

```
Community intelligence mission: I want to find earning platforms that real 
users in Kenya, East Africa, or developing markets are actively discussing 
right now — not review sites, not affiliate blogs, actual user discussions.

Search these specific communities and compile what platforms come up:

- Reddit: r/beermoney, r/Kenya, r/slavelabour, r/signupbonuses, r/WorkOnline
- Quora: Questions about "earning money online Kenya" or "side hustle Kenya"
- Telegram: Kenyan side hustle groups, crypto Kenya groups
- Facebook: "Make money online Kenya" groups
- YouTube comments: On videos about earning money in Kenya
- Twitter/X: #makemoneyonlineKenya, #sidehustleKenya

For each platform mentioned across these communities:
- How often does it come up (single mention vs. repeated)?
- Is the sentiment positive, negative, or mixed?
- Any specific warnings from Kenyan users about payment issues?
- Does it pay to M-Pesa or require crypto?

Flag separately: Any platform that multiple community members warn about. 
These are worth knowing even if you won't list them.
```

### TOOL 3 — Reverse Engineer Prompt (Run in Claude)

```
Reverse engineering mission: I want to find earning platforms by tracing 
where advertisers spend money to acquire users.

Work through these reverse angles:

1. Offer wall sources — What companies pay Freecash, Offertoro, AdGate Media, 
   CPX Research, and similar offer wall networks to run their offers? 
   List every advertiser category and specific companies you can identify.

2. App store mining — What apps in the Google Play Store under categories 
   "Finance," "Earning," "Rewards," and "Cashback" have above 4.0 rating, 
   10,000+ downloads, and are available in Kenya?

3. Affiliate network mining — What earning/reward platforms run affiliate 
   programs on networks like ShareASale, Impact, CJ Affiliate, or 
   PartnerStack that accept Kenyan affiliates?

4. Press release trail — What companies in the "fintech rewards," 
   "earn-to-play," or "deposit bonus" space have issued press releases 
   in the last 24 months announcing a Kenya or Africa expansion?

5. App permissions trail — What apps request M-Pesa integration permissions, 
   suggesting they're built for East African users?

Output: A list of platforms discovered through each angle, categorized by 
how they were found.
```

---

## CLAUDE OFFER CARD GENERATOR TEMPLATE

Save this in Obsidian. Run it in Claude for every offer.

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
1. Offer card copy (2–3 sentences, factual, no hype)
2. Net profit calculation in KES (show the conversion math)
3. Hourly rate in KES if time required
4. Risk rating: Low / Medium / High with one-sentence justification
5. The single most important thing a Kenyan user must know before starting
6. Last verified date placeholder
```

---

## CLAUDE BLOG POST DRAFTER TEMPLATE

Save this in Obsidian. Run it in Claude after completing an offer.

```
I personally completed this offer:

Platform: [name]
Date started: [date]
Date completed: [date]
Actual deposit: KES [amount]
Actual bonus received: KES [amount]
Fees paid: KES [amount]
Net earned: KES [amount]
Hours spent: [hours]
Complications: [any issues]

Write a 600-word first-person blog post.

Tone: honest, practical, specific numbers only.

Structure: 
- What I did
- What happened
- The math
- Verdict
- Link to offer card

No hype. No promises. Just what actually happened.
```

---

## MASTER PROMPT — Use This for Every Session

Save this in Obsidian. Paste into Claude at the start of every project session.

```
PROJECT: The Hive — Kenya-first reward opportunity aggregator for side-hustle seekers.

CURRENT STATUS: [UPDATE WEEKLY]

STACK: Replit | PostgreSQL | React + Express | Obsidian | GitHub | Claude | Perplexity

CONSTRAINTS: Kenya-based | $10 starting capital | 50 min/day weekdays | 
Side-hustle audience | All math in KES | Anonymous site | No user accounts

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

END OF PROMPTS_EXTRACTED.md
