import { useGetOffer, useReferralRedirect } from "@workspace/api-client-react";
import { useParams } from "wouter";
import { formatKES, formatUSD, formatPercent } from "../lib/format";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, AlertTriangle, ArrowRight, Clock, Wallet, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function OfferDetail() {
  const params = useParams();
  const id = parseInt(params.id || "0", 10);
  const { data: offer, isLoading } = useGetOffer(id);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl space-y-6">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!offer) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Offer not found</h1>
        <p className="text-muted-foreground mt-2">This opportunity might have been removed.</p>
      </div>
    );
  }

  const handleGetOffer = () => {
    // Log click and redirect
    window.location.href = `/api/go/${offer.platformName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold tracking-tight">{offer.platformName}</h1>
          {offer.status !== 'active' && (
            <Badge variant="destructive" className="uppercase">{offer.status}</Badge>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="font-mono">Tier {offer.tier}</Badge>
          <Badge variant="outline" className={
            offer.safetyRating === 'established' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
            offer.safetyRating === 'risky' ? 'bg-red-50 text-red-700 border-red-200' :
            'bg-amber-50 text-amber-700 border-amber-200'
          }>
            {offer.safetyRating === 'established' && <ShieldCheck className="w-3 h-3 mr-1" />}
            {offer.safetyRating === 'risky' && <ShieldAlert className="w-3 h-3 mr-1" />}
            {offer.safetyRating === 'new' && <AlertTriangle className="w-3 h-3 mr-1" />}
            {offer.safetyRating.charAt(0).toUpperCase() + offer.safetyRating.slice(1)}
          </Badge>
          {offer.personalTested && (
            <Badge className="bg-primary">
              <CheckCircle2 className="w-3 h-3 mr-1" /> Tested Personally
            </Badge>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 md:col-span-2 bg-slate-50 dark:bg-slate-900 border-border">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Net Profit (KES)</h2>
          <div className="text-5xl font-mono font-bold text-accent mb-4">
            {formatKES(offer.netProfitKes)}
          </div>
          {offer.hourlyRateKes && (
            <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Approx. {formatKES(offer.hourlyRateKes)} per hour
            </div>
          )}
        </Card>

        <Card className="p-6 flex flex-col justify-center border-primary shadow-sm">
          <Button size="lg" className="w-full text-lg h-14 font-semibold" onClick={handleGetOffer} disabled={offer.status === 'expired'}>
            Get this offer
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-4 leading-relaxed">
            I earn a commission if you sign up. This doesn't affect the review.
          </p>
        </Card>
      </div>

      {offer.personalNotes && (
        <Card className="p-6 mb-8 border-l-4 border-l-primary bg-primary/5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            Personal Note
          </h3>
          <p className="text-muted-foreground italic">"{offer.personalNotes}"</p>
        </Card>
      )}

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold mb-4">Requirements</h3>
          <Card className="p-0 overflow-hidden">
            <div className="divide-y divide-border">
              <div className="p-4 flex justify-between items-center bg-card">
                <span className="font-medium text-muted-foreground">Activity</span>
                <span className="text-right max-w-[60%]">{offer.activityRequirement || 'Sign up and verify'}</span>
              </div>
              <div className="p-4 flex justify-between items-center bg-card">
                <span className="font-medium text-muted-foreground">KYC Required</span>
                <span>{offer.kycRequired ? 'Yes (ID + Selfie)' : 'No'}</span>
              </div>
              {offer.kycTimeDays && (
                <div className="p-4 flex justify-between items-center bg-card">
                  <span className="font-medium text-muted-foreground">Verification Time</span>
                  <span>~{offer.kycTimeDays} days</span>
                </div>
              )}
              {offer.lockDays && (
                <div className="p-4 flex justify-between items-center bg-card">
                  <span className="font-medium text-muted-foreground">Lock Period</span>
                  <span>{offer.lockDays} days</span>
                </div>
              )}
            </div>
          </Card>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4">The Math (USD to KES)</h3>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Initial Reward / Bonus</span>
                <span className="font-mono font-medium">{formatUSD(offer.bonusUsd)}</span>
              </div>
              {offer.depositUsd ? (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Required Deposit</span>
                  <span className="font-mono text-destructive">-{formatUSD(offer.depositUsd)}</span>
                </div>
              ) : null}
              {offer.withdrawalFeeUsd ? (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Withdrawal/Network Fees</span>
                  <span className="font-mono text-destructive">-{formatUSD(offer.withdrawalFeeUsd)}</span>
                </div>
              ) : null}
              
              <Separator />
              
              <div className="flex justify-between items-center">
                <span className="font-medium">Estimated Net (USD)</span>
                <span className="font-mono font-bold">
                  {formatUSD((offer.bonusUsd || 0) - (offer.withdrawalFeeUsd || 0))}
                </span>
              </div>
              
              <div className="bg-muted p-3 rounded-md text-sm flex justify-between items-center">
                <span className="text-muted-foreground">Exchange Rate Used</span>
                <span className="font-mono">KES {offer.rateUsedKes?.toFixed(2) || '130.00'} / USD</span>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-lg">Final KES in M-Pesa</span>
                <span className="font-mono font-bold text-xl text-accent">{formatKES(offer.netProfitKes)}</span>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
