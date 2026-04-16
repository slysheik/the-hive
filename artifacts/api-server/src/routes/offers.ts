import { Router, type Request, type Response } from "express";
import { db } from "@workspace/db";
import { offersTable, clickLogsTable } from "@workspace/db/schema";
import { eq, desc, asc, and, sql } from "drizzle-orm";

const router = Router();

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

router.get("/", async (req: Request, res: Response) => {
  try {
    const { tier, mpesa, sort } = req.query as {
      tier?: "A" | "C" | "D";
      mpesa?: "direct" | "via_crypto" | "no";
      sort?: "net_profit_kes" | "hourly_rate_kes" | "last_verified";
    };

    const conditions = [eq(offersTable.status, "active")];
    if (tier) conditions.push(eq(offersTable.tier, tier));
    if (mpesa) conditions.push(eq(offersTable.mpesaCompatible, mpesa));

    const orderBy =
      sort === "hourly_rate_kes"
        ? desc(offersTable.hourlyRateKes)
        : sort === "last_verified"
          ? desc(offersTable.lastVerified)
          : desc(offersTable.netProfitKes);

    const offers = await db
      .select()
      .from(offersTable)
      .where(and(...conditions))
      .orderBy(orderBy);

    res.json(offers.map(mapOffer));
  } catch (err) {
    console.error("GET /offers error:", err);
    res.status(500).json({ error: "Failed to fetch offers" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid offer ID" });
      return;
    }

    const [offer] = await db
      .select()
      .from(offersTable)
      .where(eq(offersTable.id, id));

    if (!offer) {
      res.status(404).json({ error: "Offer not found" });
      return;
    }

    res.json(mapOffer(offer));
  } catch (err) {
    console.error("GET /offers/:id error:", err);
    res.status(500).json({ error: "Failed to fetch offer" });
  }
});

export default router;
