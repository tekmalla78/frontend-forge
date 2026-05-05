import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import NepseEmbed from "@/components/NepseEmbed";

export const Route = createFileRoute("/market/floorsheet")({
  head: () => ({
    meta: [
      { title: "Floorsheet & Broker Holding — NEPSE | Imperial Securities" },
      { name: "description", content: "Live NEPSE floorsheet feed and broker holding analytics — see who is buying and selling in real time." },
      { property: "og:title", content: "Floorsheet & Broker Holding — NEPSE" },
      { property: "og:description", content: "Live floorsheet and broker holding analytics for the Nepal Stock Exchange." },
    ],
  }),
  component: FloorsheetPage,
});

function FloorsheetPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Smart Money"
        title="Floorsheet & Broker Holding"
        subtitle="See every transaction live and analyse broker-wise holding patterns — the next-generation way to follow smart money on NEPSE."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Market", href: "/market" }, { label: "Floorsheet" }]}
      />
      <section className="bg-muted/30 py-12">
        <div className="mx-auto max-w-[1240px] space-y-10 px-6">
          <div>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Floorsheet — Live Feed</h2>
                <p className="mt-1 text-sm text-muted-foreground">Every executed trade on NEPSE, streamed in real time.</p>
              </div>
              <span className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-green-dk">LIVE</span>
            </div>
            <NepseEmbed
              src="https://nepsealpha.com/live-floorsheet"
              fallbackHref="https://nepsealpha.com/live-floorsheet"
              title="Live Floorsheet"
              height={820}
            />
          </div>

          <div>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Broker Holding</h2>
                <p className="mt-1 text-sm text-muted-foreground">Track which brokers are accumulating or distributing — by symbol.</p>
              </div>
              <span className="rounded-full bg-brand-blue-lt px-3 py-1 text-xs font-semibold text-brand-blue">SMART MONEY</span>
            </div>
            <NepseEmbed
              src="https://nepsealpha.com/broker-holding?symbol=NICL"
              fallbackHref="https://nepsealpha.com/broker-holding?symbol=NICL"
              title="Broker Holding Analytics"
              height={820}
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
