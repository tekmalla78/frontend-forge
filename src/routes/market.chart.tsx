import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import NepseEmbed from "@/components/NepseEmbed";

export const Route = createFileRoute("/market/chart")({
  head: () => ({
    meta: [
      { title: "Trading Chart — NEPSE Technical Analysis | Imperial Securities" },
      { name: "description", content: "Advanced NEPSE candlestick charts with 50+ indicators including SMA, EMA, MACD, RSI, Bollinger Bands and more." },
      { property: "og:title", content: "Trading Chart — NEPSE Technical Analysis" },
      { property: "og:description", content: "Advanced candlestick charts with 50+ technical indicators for NEPSE stocks." },
    ],
  }),
  component: TradingChart,
});

function TradingChart() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Trading Chart"
        title="Advanced NEPSE Charts"
        subtitle="Professional-grade candlestick charts with 50+ technical indicators — SMA, EMA, MACD, RSI, Bollinger Bands, Ichimoku and more."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Market", href: "/market" }, { label: "Chart" }]}
      />
      <section className="bg-muted/30 py-12">
        <div className="mx-auto max-w-[1240px] px-6">
          <NepseEmbed
            src="https://nepsealpha.com/trading/chart"
            fallbackHref="https://nepsealpha.com/trading/chart"
            title="NEPSE Trading Chart"
            height={920}
          />
        </div>
      </section>
    </PageShell>
  );
}
