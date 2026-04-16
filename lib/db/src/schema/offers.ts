import {
  pgTable,
  serial,
  text,
  decimal,
  integer,
  boolean,
  date,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const tierEnum = pgEnum("tier", ["A", "C", "D"]);
export const mpesaCompatibleEnum = pgEnum("mpesa_compatible", [
  "direct",
  "via_crypto",
  "no",
]);
export const safetyRatingEnum = pgEnum("safety_rating", [
  "established",
  "new",
  "risky",
]);
export const offerStatusEnum = pgEnum("offer_status", [
  "active",
  "unconfirmed",
  "expired",
]);

export const offersTable = pgTable("offers", {
  id: serial("id").primaryKey(),
  platformName: text("platform_name").notNull(),
  platformSlug: text("platform_slug").notNull(),
  tier: tierEnum("tier").notNull(),
  depositUsd: decimal("deposit_usd", { precision: 10, scale: 2 }),
  bonusUsd: decimal("bonus_usd", { precision: 10, scale: 2 }),
  lockDays: integer("lock_days"),
  withdrawalFeeUsd: decimal("withdrawal_fee_usd", { precision: 10, scale: 2 }),
  netProfitKes: decimal("net_profit_kes", { precision: 10, scale: 2 }).notNull(),
  hoursRequired: decimal("hours_required", { precision: 5, scale: 1 }),
  hourlyRateKes: decimal("hourly_rate_kes", { precision: 10, scale: 2 }),
  activityRequirement: text("activity_requirement"),
  geographicKenya: boolean("geographic_kenya").notNull().default(true),
  mpesaCompatible: mpesaCompatibleEnum("mpesa_compatible").notNull(),
  kycRequired: boolean("kyc_required").notNull().default(false),
  kycTimeDays: integer("kyc_time_days"),
  affiliateLink: text("affiliate_link"),
  safetyRating: safetyRatingEnum("safety_rating").notNull(),
  lastVerified: date("last_verified"),
  personalTested: boolean("personal_tested").notNull().default(false),
  personalNotes: text("personal_notes"),
  status: offerStatusEnum("status").notNull().default("active"),
  annualisedReturnPct: decimal("annualised_return_pct", {
    precision: 8,
    scale: 2,
  }),
  rateUsedKes: decimal("rate_used_kes", { precision: 8, scale: 2 }),
  rateCheckedAt: date("rate_checked_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const clickLogsTable = pgTable("click_logs", {
  id: serial("id").primaryKey(),
  platformSlug: text("platform_slug").notNull(),
  offerId: integer("offer_id"),
  referrerUrl: text("referrer_url"),
  userAgent: text("user_agent"),
  clickedAt: timestamp("clicked_at").notNull().defaultNow(),
});

export const personalTestsTable = pgTable("personal_tests", {
  id: serial("id").primaryKey(),
  offerId: integer("offer_id").notNull(),
  dateStarted: date("date_started"),
  dateCompleted: date("date_completed"),
  actualDepositKes: decimal("actual_deposit_kes", { precision: 10, scale: 2 }),
  actualBonusKes: decimal("actual_bonus_kes", { precision: 10, scale: 2 }),
  actualFeesKes: decimal("actual_fees_kes", { precision: 10, scale: 2 }),
  actualNetKes: decimal("actual_net_kes", { precision: 10, scale: 2 }),
  hoursSpent: decimal("hours_spent", { precision: 5, scale: 1 }),
  complicationsNotes: text("complications_notes"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertOfferSchema = createInsertSchema(offersTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertOffer = z.infer<typeof insertOfferSchema>;
export type Offer = typeof offersTable.$inferSelect;
export type ClickLog = typeof clickLogsTable.$inferSelect;
export type PersonalTest = typeof personalTestsTable.$inferSelect;
