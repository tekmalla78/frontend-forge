import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import NepseEmbed from "@/components/NepseEmbed";

export const Route = createFileRoute("/market/summary")({
  head: () => ({
    meta: [
      { title: "Market Summary — NEPSE Dashboard | Imperial Securities" },
      { name: "description", content: "Live NEPSE dashboard with index movement, turnover, sector performance and market breadth." },
      { property: "og:title", content: "Market Summary — NEPSE Dashboard" },
      { property: "og:description", content: "Live NEPSE dashboard with index, turnover and sector performance." },
    ],
  }),
  component: MarketSummary,
});

function MarketSummary() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Market Summary"
        title="NEPSE Dashboard"
        subtitle="A complete snapshot of the Nepal Stock Exchange — indices, turnover, advancers vs decliners and sector heat."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Market", href: "/market" }, { label: "Summary" }]}
      />
      <section className="bg-muted/30 py-12">
        <div className="mx-auto max-w-[1240px] space-y-6 px-6">
          <NepseEmbed
            src="https://nepsealpha.com/nepse-data"
            fallbackHref="https://nepsealpha.com/nepse-data"
            title="NEPSE Index & Turnover Dashboard"
            height={820}
          />
          <NepseEmbed
            src="https://nepsealpha.com/sector-summary"
            fallbackHref="https://nepsealpha.com/sector-summary"
            title="Sector Performance"
            height={680}
          />
        </div>
      </section>
    </PageShell>
  );
}
