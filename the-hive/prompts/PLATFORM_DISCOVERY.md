# PLATFORM DISCOVERY SYSTEM — Three Tools for Finding Undiscovered Platforms

Use these prompts before building the aggregator content. Run all three tools, combine results, sort into four buckets.

---

## TOOL 1 — DISCOVERY PROMPT (Run in Perplexity)

Run once for each earning model listed below. That's 8 separate Perplexity searches.

```
Discovery mission: I am mapping every platform that offers [EARNING MODEL] 
to users in Kenya. I have no prior knowledge of this space. I want an 
exhaustive list, not just the popular ones.

Search across these angles and compile everything you find:

1. Direct platforms — Apps or websites that directly pay users for [EARNING MODEL]

2. Aggregator platforms — Sites that host multiple offers from different 
   advertisers (offer walls, GPT sites, reward hubs)

3. Community-discovered platforms — What are people on Reddit 
   (r/beermoney, r/slavelabour, r/Kenya, r/sidehustle), Quora, 
   Facebook groups, and Telegram channels in Kenya currently using?

4. Crypto-adjacent platforms — Platforms that pay in crypto but are 
   accessible via Binance P2P in Kenya

5. Emerging platforms — Anything launched in the last 12 months in this 
   category that has not yet been widely covered

6. Africa/Kenya-specific platforms — Local platforms that global lists miss

For each platform found, give me:
- Platform name and URL
- How it pays (cash, crypto, gift cards, M-Pesa)
- Kenya accessible (yes / no / unclear)
- One sentence on how the earning works
- How popular or obscure it is (established / emerging / obscure)

Do not filter by quality. I want the raw list — I will evaluate each separately.
```

**Run this prompt 8 times, replacing [EARNING MODEL] with:**
1. "deposit bonuses"
2. "task completion and micro-jobs"
3. "in-game purchases that earn rewards"
4. "signup bonuses for financial apps"
5. "cashback on purchases"
6. "crypto staking and yield bonuses"
7. "survey and opinion rewards"
8. "app testing and feedback rewards"

---

## TOOL 2 — COMMUNITY MINING PROMPT (Run in Perplexity + Claude)

```
Community intelligence mission: I want to find earning platforms that real 
users in Kenya, East Africa, or developing markets are actively discussing 
right now — not review sites, not affiliate blogs, actual user discussions.

Search these specific communities and compile what platforms come up:

- Reddit: r/beermoney, r/Kenya, r/slavelabour, r/signupbonuses, r/WorkOnline
- Quora: Questions about "earning money online Kenya" or "side hustle Kenya"
- Telegram: Kenyan side hustle groups, crypto Kenya groups  
- Facebook: "Make money online Kenya" groups
- YouTube comments: On videos about earning money in Kenya (2025-2026)
- Twitter/X: #makemoneyonlineKenya, #sidehustleKenya

For each platform mentioned across these communities:
- How often does it come up (single mention vs. repeated pattern)?
- Is the sentiment positive, negative, or mixed?
- Any specific warnings from Kenyan users about payment issues?
- Does it pay to M-Pesa or require crypto?

Flag separately: Any platform that multiple community members warn about. 
These are worth knowing even if you will never list them.
```

---

## TOOL 3 — REVERSE ENGINEER PROMPT (Run in Claude)

```
Reverse engineering mission: Find earning platforms by tracing where 
advertisers spend money to acquire users.

Work through these angles:

1. Offer wall sources — What companies pay Freecash, Offertoro, AdGate Media, 
   CPX Research, Lootably, and similar offer wall networks to run their offers? 
   List every advertiser category and specific companies you can identify.

2. App store mining — What apps in the Google Play Store under "Finance," 
   "Earning," "Rewards," and "Cashback" categories have:
   - Above 4.0 rating
   - 10,000+ downloads
   - Available in Kenya (Africa region)

3. Affiliate network mining — What earning/reward platforms run affiliate 
   programs on ShareASale, Impact, CJ Affiliate, or PartnerStack that 
   accept Kenyan affiliates?

4. Press release trail — What companies in the "fintech rewards," 
   "earn-to-play," or "deposit bonus" space have issued press releases 
   in the last 24 months announcing a Kenya or Africa expansion?

5. M-Pesa integration trail — What apps in African markets explicitly 
   support M-Pesa as a withdrawal method?

Output: List every platform found through each angle, labelled by discovery method.
```

---

## AFTER RUNNING ALL THREE TOOLS

Sort every discovered platform into one of four buckets in Obsidian:

| Bucket | Criteria | Action |
|---|---|---|
| **Investigate now** | Kenya accessible + M-Pesa or Binance P2P payment + mentioned in multiple communities | Run Deep Research Directive immediately |
| **Watch** | Promising but unclear Kenya access or new/unproven | Monitor for 30 days, recheck |
| **Pass for now** | Requires VPN, US bank account, or not Kenya-accessible | Archive with reason |
| **Never list** | Community warnings about non-payment or scam signals | Document the warning prominently |

---

## WORKFLOW SCHEDULE

| Session | Task |
|---|---|
| Session 1 (50 min) | Tool 1 for "deposit bonuses" + "task completion" |
| Session 2 (50 min) | Tool 1 for remaining 6 earning models |
| Session 3 (50 min) | Tool 2 — community mining |
| Session 4 (50 min) | Tool 3 — reverse engineering |
| Session 5 (50 min) | Combine all results, remove duplicates, sort into buckets |

After 5 sessions: raw list of 50–150 platforms. Run Deep Research Directive on "Investigate now" bucket only.
