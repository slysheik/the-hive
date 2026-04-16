import { Router, type Request, type Response } from "express";
import { db } from "@workspace/db";
import { offersTable, clickLogsTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/:platform", async (req: Request, res: Response) => {
  const { platform } = req.params;

  try {
    const [offer] = await db
      .select()
      .from(offersTable)
      .where(eq(offersTable.platformSlug, platform))
      .limit(1);

    await db.insert(clickLogsTable).values({
      platformSlug: platform,
      offerId: offer?.id ?? null,
      referrerUrl: req.headers.referer ?? null,
      userAgent: req.headers["user-agent"] ?? null,
    });

    if (!offer || !offer.affiliateLink) {
      if (!offer) {
        res.status(404).json({ error: `Platform '${platform}' not found` });
        return;
      }
      res.status(404).json({ error: `No affiliate link configured for '${platform}'` });
      return;
    }

    res.redirect(301, offer.affiliateLink);
  } catch (err) {
    console.error("GET /go/:platform error:", err);
    res.status(500).json({ error: "Redirect failed" });
  }
});

export default router;
