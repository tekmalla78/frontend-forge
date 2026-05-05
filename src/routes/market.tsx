import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, BarChart3, LineChart, TrendingUp, FileSpreadsheet, ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

export const Route = createFileRoute("/market")({
  head: () => ({
    meta: [
      { title: "Market Hub — NEPSE Live Data | Imperial Securities" },
      { name: "description", content: "Live NEPSE market data: dashboard, live market, trading charts, top gainers/losers, and floorsheet — all in one place." },
      { property: "og:title", content: "Market Hub — NEPSE Live Data | Imperial Securities" },
      { property: "og:description", content: "Live NEPSE market data: dashboard, live market, trading charts, top gainers/losers, and floorsheet." },
    ],
  }),
  component: MarketIndex,
});

const sections = [
  { to: "/market/summary", title: "Market Summary", desc: "NEPSE dashboard with index, turnover & sector performance.", icon: BarChart3, color: "from-brand-blue to-brand-green-dk" },
  { to: "/market/live", title: "Live Market", desc: "Real-time stock prices, bid/ask & last traded data.", icon: Activity, color: "from-emerald-500 to-teal-600" },
  { to: "/market/chart", title: "Trading Chart", desc: "Advanced candlestick chart with 50+ technical indicators.", icon: LineChart, color: "from-purple-500 to-indigo-600" },
  { to: "/market/top-gainers-losers", title: "Top Gainers / Losers", desc: "Daily top movers, volume leaders & turnover toppers.", icon: TrendingUp, color: "from-orange-500 to-rose-500" },
  { to: "/market/floorsheet", title: "Floorsheet & Broker Holding", desc: "Live floorsheet feed and broker holding analytics.", icon: FileSpreadsheet, color: "from-amber-500 to-orange-600" },
] as const;

function MarketIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="NEPSE Market"
        title="Live Market Hub"
        subtitle="Everything you need to track Nepal Stock Exchange in real time — powered by Nepse Alpha widgets."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Market" }]}
      />
      <section className="bg-muted/30 py-16">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map(({ to, title, desc, icon: Icon, color }) => (
            <Link
              key={to}
              to={to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                Open <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
