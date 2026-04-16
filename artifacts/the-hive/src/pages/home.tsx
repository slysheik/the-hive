import { useListOffers, useGetSummary, useGetTopOffers } from "@workspace/api-client-react";
import { formatKES } from "../lib/format";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Clock, Shield, DollarSign, TrendingUp } from "lucide-react";

export default function Home() {
  const { data: offers, isLoading } = useListOffers();
  const { data: summary } = useGetSummary();

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <section className="mb-12 text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Stop guessing. <br className="hidden md:block" />
          <span className="text-muted-foreground">Start earning.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Kenya's first honest side-hustle aggregator. We calculate the real KES profit after all fees, spreads, and conversions so you don't have to.
        </p>
      </section>

      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="p-6 bg-primary text-primary-foreground border-none">
            <div className="text-sm font-medium opacity-80 mb-2">Highest Net Profit</div>
            <div className="text-3xl font-mono font-bold">{formatKES(summary.highestNetProfitKes)}</div>
          </Card>
          <Card className="p-6 bg-card">
            <div className="text-sm font-medium text-muted-foreground mb-2">Best Hourly Rate</div>
            <div className="text-3xl font-mono font-bold text-primary">{formatKES(summary.bestHourlyRateKes)}<span className="text-base font-sans text-muted-foreground">/hr</span></div>
          </Card>
          <Card className="p-6 bg-card">
            <div className="text-sm font-medium text-muted-foreground mb-2">Total Verified Offers</div>
            <div className="text-3xl font-mono font-bold text-primary">{summary.totalActiveOffers}</div>
          </Card>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">All Opportunities</h2>
        <div className="flex gap-2">
          {/* Filters would go here */}
          <Badge variant="outline" className="text-sm py-1">Sort: Net Profit</Badge>
        </div>
      </div>

      {isLoading ? (
        <div className="grid gap-4">
          {[1, 2, 3].map(i => (
            <Card key={i} className="p-6 h-48 animate-pulse bg-muted/50" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4">
          {offers?.map(offer => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      )}
    </div>
  );
}

function OfferCard({ offer }: { offer: any }) {
  const isDimmed = offer.status !== 'active';
  
  return (
    <Card className={`overflow-hidden transition-all duration-200 hover:shadow-md ${isDimmed ? 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0' : ''}`}>
      <div className="flex flex-col md:flex-row">
        <div className="p-6 flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">{offer.platformName}</h3>
              {offer.status !== 'active' && (
                <Badge variant="destructive" className="uppercase text-[10px] tracking-wider">{offer.status}</Badge>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="font-mono text-xs">Tier {offer.tier}</Badge>
              {offer.mpesaCompatible !== 'no' && (
                <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  M-Pesa {offer.mpesaCompatible === 'direct' ? 'Direct' : 'via Crypto'}
                </Badge>
              )}
              {offer.personalTested && (
                <Badge className="bg-primary text-primary-foreground text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  Tested
                </Badge>
              )}
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {offer.activityRequirement || "Task requirement not specified."}
            </p>
          </div>

          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span className="italic">I earn a commission if you sign up. This doesn't affect the review.</span>
          </div>
        </div>

        <div className="p-6 md:w-64 bg-slate-50 dark:bg-slate-900/50 flex flex-col justify-center items-center text-center space-y-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Net Profit</div>
            <div className="text-3xl font-mono font-bold text-accent">{formatKES(offer.netProfitKes)}</div>
          </div>
          
          <Link href={`/offers/${offer.id}`} className="w-full">
            <Button className="w-full font-semibold">View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
