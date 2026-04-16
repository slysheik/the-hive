import { Router, type Request, type Response } from "express";
import { db } from "@workspace/db";
import { offersTable } from "@workspace/db/schema";
import { eq, and, desc, max, sql } from "drizzle-orm";

const router = Router();

router.get("/summary", async (_req: Request, res: Response) => {
  try {
    const activeOffers = await db
      .select()
      .from(offersTable)
      .where(eq(offersTable.status, "active"));

    const totalActiveOffers = activeOffers.length;

    const totalByTier = { A: 0, C: 0, D: 0 };
    let highestNetProfitKes = 0;
    let bestHourlyRateKes = 0;
    let personalTestedCount = 0;

    for (const o of activeOffers) {
      if (o.tier === "A") totalByTier.A++;
      else if (o.tier === "C") totalByTier.C++;
      else if (o.tier === "D") totalByTier.D++;

      const net = Number(o.netProfitKes);
      if (net > highestNetProfitKes) highestNetProfitKes = net;

      if (o.hourlyRateKes) {
        const rate = Number(o.hourlyRateKes);
        if (rate > bestHourlyRateKes) bestHourlyRateKes = rate;
      }

      if (o.personalTested) personalTestedCount++;
    }

    const [unconfirmedResult] = await db
      .select({ count: sql<number>`count(*)` })
      .from(offersTable)
      .where(eq(offersTable.status, "unconfirmed"));

    res.json({
      totalActiveOffers,
      totalByTier,
      personalTestedCount,
      unconfirmedCount: Number(unconfirmedResult?.count ?? 0),
      highestNetProfitKes,
      bestHourlyRateKes,
    });
  } catch (err) {
    console.error("GET /stats/summary error:", err);
    res.status(500).json({ error: "Failed to fetch summary" });
  }
});

router.get("/top-offers", async (_req: Request, res: Response) => {
  try {
    const byNetProfit = await db
      .select()
      .from(offersTable)
      .where(eq(offersTable.status, "active"))
      .orderBy(desc(offersTable.netProfitKes))
      .limit(5);

    const byHourlyRate = await db
      .select()
      .from(offersTable)
      .where(and(eq(offersTable.status, "active")))
      .orderBy(desc(offersTable.hourlyRateKes))
      .limit(5);

    function mapOffer(o: typeof offersTable.$inferSelect) {
      return {
        id: o.id,
        platformName: o.platformName,
        platformSlug: o.platformSlug,
        tier: o.tier,
        depositUsd: o.depositUsd ? Number(o.depositUsd) : null,
        bonusUsd: o.bonusUsd ? Number(o.bonusUsd) : null,
        lockDays: o.lockDays,
        withdrawalFeeUsd: o.withdrawalFeeUsd ? Number(o.withdrawalFeeUsd) : null,
        netProfitKes: Number(o.netProfitKes),
        hoursRequired: o.hoursRequired ? Number(o.hoursRequired) : null,
        hourlyRateKes: o.hourlyRateKes ? Number(o.hourlyRateKes) : null,
        activityRequirement: o.activityRequirement,
        geographicKenya: o.geographicKenya,
        mpesaCompatible: o.mpesaCompatible,
        kycRequired: o.kycRequired,
        kycTimeDays: o.kycTimeDays,
        affiliateLink: o.affiliateLink,
        safetyRating: o.safetyRating,
        lastVerified: o.lastVerified,
        personalTested: o.personalTested,
        personalNotes: o.personalNotes,
        status: o.status,
        annualisedReturnPct: o.annualisedReturnPct
          ? Number(o.annualisedReturnPct)
          : null,
        rateUsedKes: o.rateUsedKes ? Number(o.rateUsedKes) : null,
        rateCheckedAt: o.rateCheckedAt,
      };
    }

    res.json({
      byNetProfit: byNetProfit.map(mapOffer),
      byHourlyRate: byHourlyRate.filter((o) => o.hourlyRateKes).map(mapOffer),
    });
  } catch (err) {
    console.error("GET /stats/top-offers error:", err);
    res.status(500).json({ error: "Failed to fetch top offers" });
  }
});

export default router;
