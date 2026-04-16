export function formatKES(amount: number | null | undefined): string {
  if (amount == null) return "N/A";
  return "KES " + Math.round(amount).toLocaleString("en-KE");
}

export function formatUSD(amount: number | null | undefined): string {
  if (amount == null) return "N/A";
  return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatPercent(amount: number | null | undefined): string {
  if (amount == null) return "N/A";
  return amount.toLocaleString("en-US", { maximumFractionDigits: 2 }) + "%";
}
