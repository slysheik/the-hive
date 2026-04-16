import { Link } from "wouter";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-sans font-bold text-xl tracking-tight text-primary flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-background rounded-full" />
            </div>
            The Hive
          </Link>
          <nav>
            <Link href="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              How it works
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t border-border py-8 mt-12 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            The Hive — Honest Reward Opportunities
          </p>
          <p className="text-xs text-muted-foreground mt-2 max-w-lg mx-auto">
            All KES calculations are estimates based on recent exchange rates and known fee structures. Rates fluctuate. Always verify before transacting.
          </p>
        </div>
      </footer>
    </div>
  );
}
