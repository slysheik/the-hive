# The Hive
*Last updated: 2026-04-13*

**Kenya-first reward opportunity aggregator for side-hustle seekers.**

Shows users the true net profit in KES — after all fees, conversion friction, and waiting periods — for deposit bonuses, gaming offers, and task platforms. Every other site shows USD gross. The Hive shows KES net.

---

## What This Is

A three-tier offer aggregator targeting Kenyan users:

| Tier | Type | Example Platforms | Capital Required |
|---|---|---|---|
| A | Financial deposit bonuses | Binance, Chipper Cash | $10–50 minimum |
| C | Gaming / in-app purchase | Mobile game milestones via offer walls | $5–20 |
| D | Task platforms | Freecash, JumpTask | Zero |

Monetised via affiliate commissions on every referral link. Blog drives SEO traffic. No user accounts. No cookies. Anonymous.

---

## Repository Structure

```
the-hive/
├── README.md                   ← You are here
├── docs/
│   ├── MASTER_SPEC.md          ← Authoritative project specification
│   ├── PRD.md                  ← Product Requirements Document
│   ├── ROADMAP.md              ← Week-by-week build sequence
│   ├── SEO_STRATEGY.md         ← Programmatic SEO plan
│   └── DESIGN_THINKING.md      ← JTBD analysis of core user
├── prompts/
│   ├── MASTER_PROMPT.md        ← Paste into Claude at start of every session
│   ├── DEEP_RESEARCH_DIRECTIVE.md   ← Platform exhaustion research template
│   ├── PLATFORM_DISCOVERY.md   ← Three-tool platform discovery system
│   ├── OFFER_CARD_GENERATOR.md ← Claude template for generating offer cards
│   └── BLOG_POST_DRAFTER.md    ← Claude template for drafting blog posts
└── research/
    └── platform-template.md    ← Blank research note for each platform
```

---

## The Competitive Moat

Freecash shows their offers. JumpTask shows their offers. No platform shows offers from all competitors side-by-side with honest KES net math including:

- Currency conversion fees (USD → crypto → KES via Binance P2P)
- Withdrawal fees
- Lock periods expressed as annualised return %
- Hourly rate for time-dependent offers

That comparison is the product.

---

## Quick Start

1. Read `docs/MASTER_SPEC.md` for the full system design
2. Read `docs/PRD.md` for what gets built and in what order
3. Use `prompts/MASTER_PROMPT.md` at the start of every Claude session
4. Use `prompts/PLATFORM_DISCOVERY.md` to find new platforms
5. Use `prompts/DEEP_RESEARCH_DIRECTIVE.md` before listing any platform

---

## Separate Project

**"The Edge"** — casino affiliate site. Completely separate brand, separate domain, no shared audience or branding with The Hive. Research begins Month 3, build Month 6+. See `docs/MASTER_SPEC.md` for scoping.

---

## Key Constraints

- Location: Kenya
- Starting capital: $10 (Binance account funding)
- Daily time: 50 min weekdays + two 2-hour weekend sessions (setup phase only)
- Stack: Replit + PostgreSQL + React + Express + Astro (blog)
- Analytics: Umami (privacy-first, no cookies)
- No user accounts, no GDPR exposure
