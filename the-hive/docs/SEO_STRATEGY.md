---
Version: 1.0
Last updated: 2026-04-13
---

# THE HIVE — SEO STRATEGY

Programmatic SEO plan using the Express SSR pattern (existing SPA architecture).

---

## STEP 0: GOOGLE SEARCH CONSOLE SETUP (Do This Before Anything Else)

Google Search Console must be set up before submitting sitemaps or monitoring indexation. Without it you are flying blind.

**Setup process:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (your domain)
3. Verify ownership — choose the HTML tag method: Google gives you a `<meta>` tag to add to your site's `<head>`
4. Add the tag to your Astro site's `<head>` component
5. Click "Verify" — takes 24–48 hours to confirm
6. Once verified: submit your sitemap at Settings → Sitemaps → Add sitemap URL

**Without this step:** Sitemaps cannot be submitted, indexation cannot be monitored, and you won't know when pages are crawled or why they're not ranking.

---

## CRITICAL FIRST: RENDERING STRATEGY

The Hive's aggregator is a React SPA. **Googlebot does not execute client-side JavaScript.** 

This means:
- React offer cards are invisible to Google
- All SEO pages must be server-rendered (SSR)
- The blog (Astro) is already SSR — no action needed there
- The aggregator needs Express SSR routes for indexable pages

**Verification command (run before assuming any page is indexed — replace with your actual domain):**
```bash
# Replace thehivekenya.com and the slug with your actual domain and page
curl -s https://thehivekenya.com/platforms/freecash | grep "Freecash"
# If this returns empty, Googlebot sees nothing on that page
# Also test your home page:
curl -s https://thehivekenya.com/ | grep -c "<h"
# Should return a number > 0 for crawlable content
```

---

## PAGE ARCHITECTURE — Three Programmatic Patterns

### Pattern 1: Platform Profile Pages
`/platforms/[slug]` — e.g., `/platforms/freecash`, `/platforms/jumptask-kenya`

**Why:** "Is [platform] available in Kenya?" searches have zero good results currently.

**Unique value per page:**
- Safety rating with reasoning
- Kenya availability status
- M-Pesa compatibility method
- Full KES net calculation for their best offer
- Last verified date
- Personal test result if completed
- Comparison to 2–3 similar platforms

**Keyword pattern:**
- "[Platform name] Kenya review"
- "[Platform name] M-Pesa withdrawal"
- "[Platform name] Kenya payout"

**Schema markup:** `Review` + `LocalBusiness` (or `WebPage` with `review` property)

**Target count:** One page per listed platform. Starts at 15, grows with offer count.

---

### Pattern 2: Earn-By-Category Pages
`/earn/[category]/kenya` — e.g., `/earn/deposit-bonuses/kenya`, `/earn/mobile-games/kenya`

**Why:** "how to earn [X] in Kenya" is searched constantly and currently underserved by relevant results.

**Unique value per page:**
- All offers in that category, sorted by net KES
- Category-specific EV calculator
- "Is this right for me?" decision tree based on capital and time available
- Pitfalls specific to that category

**Keyword pattern:**
- "earn [category] Kenya"
- "[category] bonus Kenya"
- "how to make money [category] Kenya"

**Schema markup:** `ItemList` with each offer as a `ListItem`

**Target count:** 8 category pages initially. Each adds ~30–50 keyword targets.

---

### Pattern 3: Comparison Pages
`/compare/[platform-a]-vs-[platform-b]` — e.g., `/compare/freecash-vs-jumptask`

**Why:** "[Platform A] vs [Platform B] Kenya" gets searched whenever someone is deciding between two options. Currently zero good results exist.

**Unique value per page:**
- Side-by-side KES net comparison for equivalent offers
- Kenya-specific availability and payment method comparison
- Honest verdict with reasoning
- Your personal experience with each (if tested)

**Keyword pattern:**
- "[Platform A] vs [Platform B] Kenya"
- "[Platform A] or [Platform B] for Kenyans"
- "which pays more [A] or [B]"

**Schema markup:** `ComparisonTable` (or `FAQPage` with comparison Q&As)

**Target count:** Start with 5 pairs (top combinations). Grows to N²/2 as platform count grows.

---

## THE SPA TRAP — How TO Avoid It

The Express SSR pattern for The Hive:

```typescript
// server/ssrShared.ts — create BEFORE any individual SEO page

export function ssrHtmlShell({
  title,
  description,
  canonical,
  schemaJson,
  body
}: SsrOptions): string {
  return `<!DOCTYPE html>
<html lang="en-KE">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | The Hive Kenya</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  <script type="application/ld+json">${JSON.stringify(schemaJson)}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  ${sharedCss()}
</head>
<body>
  ${header()}
  ${body}
  ${footer()}
</body>
</html>`;
}
```

**Create this shell first.** Every SSR page reuses it. Brand consistency guaranteed.

---

## CACHE HEADERS BY PAGE TYPE

| Page type | Header | Reason |
|---|---|---|
| Platform profiles | `public, max-age=86400` | Updated weekly at most |
| Category pages | `public, max-age=43200` | Semi-dynamic |
| Comparison pages | `public, max-age=86400` | Rarely changes |
| Offer cards (live data) | `public, s-maxage=3600, stale-while-revalidate=86400` | Balance freshness vs. load |

---

## INTERNAL LINKING ARCHITECTURE

**Hub and spoke model:**

```
Homepage (/)
    ├── /earn/ (hub — all categories)
    │   ├── /earn/deposit-bonuses/kenya
    │   ├── /earn/mobile-games/kenya
    │   └── /earn/task-platforms/kenya
    ├── /platforms/ (hub — all platforms)
    │   ├── /platforms/freecash
    │   ├── /platforms/jumptask
    │   └── /platforms/binance-kenya
    └── /compare/ (hub — all comparisons)
        ├── /compare/freecash-vs-jumptask
        └── /compare/binance-vs-chipper-cash
```

**Critical rule:** Every SEO page must be linked from the main site's footer or navigation. Orphan pages are never trusted by Google.

**Blog posts → Aggregator:** Every blog post links to at least one platform profile page and one category page. Internal links carry PageRank.

---

## KEYWORD STRATEGY — KENYA SPECIFIC

**High priority (low competition, high intent):**
- "[platform name] Kenya withdrawal"
- "[platform name] Kenya M-Pesa"
- "earn money online Kenya M-Pesa 2026"
- "JumpTask Kenya review"
- "Freecash Kenya payout"
- "deposit bonus Kenya"
- "how to withdraw from [platform] in Kenya"

**Medium priority (moderate competition, high volume):**
- "make money online Kenya"
- "side hustle Kenya 2026"
- "earn crypto Kenya"

**Avoid (too competitive, dominated by established sites):**
- "make money online"
- "best earning apps"
- "passive income"

---

## INDEXATION STRATEGY

**Phase 1 (Week 3–8):** Blog posts only. Astro SSR, immediate indexability.

**Phase 2 (Month 2–3):** Platform profile pages (15–30 pages). High-intent keywords.

**Phase 3 (Month 4+):** Category pages + comparison pages. Programmatic at scale.

**Sitemap structure:**
```xml
sitemap-index.xml
├── sitemap-blog.xml      (blog posts)
├── sitemap-platforms.xml (platform profile pages)
├── sitemap-earn.xml      (earn-by-category pages)
└── sitemap-compare.xml   (comparison pages)
```

Google's limit: 50,000 URLs per sitemap file. Not a constraint at this scale.

---

## CONTENT FRESHNESS SIGNALS

All SSR pages must include:
```json
{
  "@type": "WebPage",
  "datePublished": "2026-01-15",
  "dateModified": "2026-04-13"
}
```

**Only update `dateModified` when content actually changes.** Bumping it on a schedule without changes is a deception signal.

Tie `dateModified` to the `last_verified` field in the offers database — not the deploy timestamp.

---

## AI CONTENT POLICY

Google allows AI-assisted content that provides genuine user value. What triggers penalties:
- Large volumes of near-duplicate pages (thin content)
- AI-spun text with no unique data
- Pages that exist to rank but not to help

**The Hive's compliance strategy:** Every page contains data no other site has — KES net calculations based on real conversion chain math, personal test results, Kenya-specific M-Pesa withdrawal information. This is genuinely unique. AI can draft the prose; the data makes it original.
