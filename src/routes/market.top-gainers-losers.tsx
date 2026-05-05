import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import NepseEmbed from "@/components/NepseEmbed";

export const Route = createFileRoute("/market/top-gainers-losers")({
  head: () => ({
    meta: [
      { title: "Top Gainers & Losers — NEPSE Movers | Imperial Securities" },
      { name: "description", content: "Daily top gaining and losing stocks on NEPSE, plus volume leaders and turnover toppers." },
      { property: "og:title", content: "Top Gainers & Losers — NEPSE" },
      { property: "og:description", content: "Daily top movers, volume leaders and turnover toppers on the Nepal Stock Exchange." },
    ],
  }),
  component: TopGainersLosers,
});

function TopGainersLosers() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Market Movers"
        title="Top Gainers & Losers"
        subtitle="Track the biggest movers on NEPSE today — top gainers, top losers, volume leaders and turnover toppers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Market", href: "/market" }, { label: "Gainers / Losers" }]}
      />
      <section className="bg-muted/30 py-12">
        <div className="mx-auto grid max-w-[1240px] gap-6 px-6 lg:grid-cols-2">
          <NepseEmbed
            src="https://nepsealpha.com/top-gainers"
            fallbackHref="https://nepsealpha.com/top-gainers"
            title="Top Gainers"
            height={680}
          />
          <NepseEmbed
            src="https://nepsealpha.com/top-losers"
            fallbackHref="https://nepsealpha.com/top-losers"
            title="Top Losers"
            height={680}
          />
          <NepseEmbed
            src="https://nepsealpha.com/top-volume"
            fallbackHref="https://nepsealpha.com/top-volume"
            title="Volume Leaders"
            height={680}
          />
          <NepseEmbed
            src="https://nepsealpha.com/top-turnover"
            fallbackHref="https://nepsealpha.com/top-turnover"
            title="Turnover Toppers"
            height={680}
          />
        </div>
      </section>
    </PageShell>
  );
}
