import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">How The Hive Works</h1>
        <p className="text-xl text-muted-foreground">
          We demystify the actual cash value of online earning opportunities in Kenya.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">The KES Net Calculation</h2>
          <Card className="p-6">
            <p className="mb-4">
              A "$50 bonus" is never 6,500 KES in your M-Pesa. Here is how we calculate the <strong>true</strong> number you see on The Hive:
            </p>
            <ol className="space-y-4 list-decimal list-inside ml-2">
              <li className="pl-2">
                <strong>Gross USD:</strong> The headline bonus or earning amount.
              </li>
              <li className="pl-2">
                <strong>Network/Withdrawal Fees:</strong> Deducting the cost to move crypto or fiat off the platform (e.g., $1-$5 for crypto network fees).
              </li>
              <li className="pl-2">
                <strong>Binance P2P Spread:</strong> We don't use Google's exchange rate. We use the real Binance P2P USDT/KES sell rate, which is the standard way most Kenyans convert crypto to M-Pesa.
              </li>
            </ol>
            <Separator className="my-6" />
            <div className="bg-muted p-4 rounded-md font-mono text-sm">
              True KES = (Bonus USD - Fees USD) * Real P2P Rate
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Opportunity Tiers</h2>
          <div className="grid gap-4">
            <Card className="p-5">
              <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-sm">A</span>
                Deposit Bonuses
              </h3>
              <p className="text-muted-foreground text-sm">High reward, requires capital. Usually crypto exchanges or trading platforms offering sign-up bonuses for a minimum deposit. Best for those with starting capital.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded bg-secondary text-secondary-foreground border border-border flex items-center justify-center text-sm">C</span>
                Gaming & In-App
              </h3>
              <p className="text-muted-foreground text-sm">Medium reward, time-intensive. Playing games, reaching certain levels, or engaging heavily with an app. Lower barrier to entry but requires dedication.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded bg-muted text-muted-foreground border border-border flex items-center justify-center text-sm">D</span>
                Task Platforms
              </h3>
              <p className="text-muted-foreground text-sm">Low reward, immediate payout. Micro-tasks like surveys, data annotation, or watching ads. Good for immediate, small amounts of airtime/cash.</p>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Trust & Transparency</h2>
          <Card className="p-6 border-l-4 border-l-primary bg-primary/5">
            <h3 className="font-bold mb-3">Affiliate Link Disclosure</h3>
            <p className="text-sm text-muted-foreground mb-4">
              To keep The Hive running, we use affiliate links for the opportunities we list. When you click "Get this offer" and sign up, we may earn a commission from the platform at no extra cost to you.
            </p>
            <p className="text-sm font-medium">
              This does not affect our math. If an offer is bad, we either don't list it, or we expose the bad math so you don't waste your time.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}
