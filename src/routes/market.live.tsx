import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import NepseEmbed from "@/components/NepseEmbed";

export const Route = createFileRoute("/market/live")({
  head: () => ({
    meta: [
      { title: "Live Market — Real-Time NEPSE Prices | Imperial Securities" },
      { name: "description", content: "Real-time NEPSE stock prices, bid/ask spreads and last traded prices across all listed companies." },
      { property: "og:title", content: "Live Market — Real-Time NEPSE Prices" },
      { property: "og:description", content: "Real-time NEPSE stock prices, bid/ask and LTP across all listed companies." },
    ],
  }),
  component: LiveMarket,
});

function LiveMarket() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Live Market"
        title="Real-Time NEPSE Prices"
        subtitle="Live prices, bid/ask spreads, last traded price and volume — refreshed continuously throughout the trading session."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Market", href: "/market" }, { label: "Live" }]}
      />
      <section className="bg-muted/30 py-12">
        <div className="mx-auto max-w-[1240px] px-6">
          <NepseEmbed
            src="https://nepsealpha.com/live-market"
            fallbackHref="https://nepsealpha.com/live-market"
            title="Live Market Feed"
            height={900}
          />
        </div>
      </section>
    </PageShell>
  );
}
