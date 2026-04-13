# OFFER CARD GENERATOR — Claude Template

Run this in Claude for every offer before entering it into the database.
Requires the Deep Research Directive to have been run first.

---

```
Generate an offer card for The Hive Kenya aggregator.

INPUT DATA:
Platform: [name]
Deposit required: [USD amount or "none"]
Bonus: [USD amount, and specify: cash / tokens / credits / points]
Lock period: [days, or "none"]
Withdrawal fee: [flat USD or % or "none"]
Activity requirement: [describe in plain language, or "none"]
KYC required: [yes/no — if yes, list documents and estimated processing time]
M-Pesa compatible: [direct / via crypto / no]
Geographic availability: [Kenya: yes / partial / no]
Safety rating: [established / new / risky]
Platform operating years: [number]

GENERATE:

1. OFFER CARD COPY (2–3 sentences, factual, zero hype):
   [Generate here]

2. NET PROFIT CALCULATION IN KES (show every step):
   IMPORTANT: Before calculating, check the live USD/KES rate at xe.com or Binance P2P.
   Record the rate and date you checked it — never use a hardcoded rate.

   USD earnings: $[X]
   Network withdrawal fee: -$[X] = $[X] remaining
   Binance P2P spread (2%): -$[X] = $[X] remaining
   KES at [LIVE RATE checked on DATE]: KES [X]
   NET PROFIT: KES [X]
   Rate used: [X] KES/USD (checked [date])

3. ANNUALISED RETURN % (if lock period exists):
   Formula: (Net Profit ÷ Deposit) × (365 ÷ Lock Days) × 100
   = [X]% annualised return

4. HOURLY RATE IN KES (if time-dependent):
   Formula: Net Profit ÷ Estimated Hours = KES [X]/hr
   Is it worth it? [Yes / Marginal / No] — threshold is KES 800/hr

5. RISK RATING: [Low / Medium / High]
   Justification: [One sentence explaining the rating]

6. THE ONE THING a Kenyan user must know before starting:
   [One sentence — the single most important fact]

7. AFFILIATE DISCLOSURE (mandatory):
   "This is an affiliate link. I earn a commission if you sign up. This doesn't affect the offer terms or my review."

8. LAST VERIFIED DATE PLACEHOLDER:
   Last verified: [DATE TO BE FILLED IN]

9. DATABASE ENTRY (ready to paste):
   platform_name: [name]
   tier: [A/C/D]  -- A=deposit bonus, C=gaming/in-app, D=task platform (no Tier B)
   deposit_usd: [number or null]
   bonus_usd: [number or null]
   lock_days: [number or null]
   withdrawal_fee_usd: [number or null]
   net_profit_kes: [number]
   hours_required: [number or null]
   hourly_rate_kes: [number or null]
   activity_requirement: [text or null]
   geographic_kenya: [true/false]
   mpesa_compatible: [direct/via_crypto/no]
   kyc_required: [true/false]
   kyc_time_days: [number or null]
   safety_rating: [established/new/risky]
   status: active
```

---

## When to Use This

- Every new platform discovered via Platform Discovery prompts
- Every offer identified via the Deep Research Directive as "List it"
- When an offer's terms change and you need to recalculate

## What to Do With the Output

1. Review the net profit calculation manually — verify the math is correct
2. Enter the database fields into PostgreSQL
3. Publish the offer card copy to the aggregator
4. Save the full output in Obsidian under `Offer Research/[Platform Name].md`
