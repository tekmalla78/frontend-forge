import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, Calculator, AlertTriangle, Percent, CheckCircle2, ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";

export const Route = createFileRoute("/services/margin-trading")({
  component: MarginTradingPage,
  head: () => ({
    meta: [
      { title: "Margin Trading — Imperial Securities" },
      { name: "description", content: "Amplify your purchasing power with our SEBON-regulated margin trading facility. Borrow against your portfolio at transparent rates." },
      { property: "og:title", content: "Margin Trading — Imperial Securities" },
      { property: "og:description", content: "Leverage your portfolio with regulated margin financing." },
    ],
  }),
});

const features = [
  { icon: TrendingUp, title: "Up to 1:1 Leverage", desc: "Double your purchasing power on SEBON-approved marginable scrips." },
  { icon: Percent, title: "Competitive Interest", desc: "Transparent daily interest, calculated only on the borrowed amount." },
  { icon: Calculator, title: "Real-Time MTM", desc: "Live mark-to-market valuation with margin call alerts via SMS & app." },
  { icon: AlertTriangle, title: "Risk Management", desc: "Built-in safeguards and advisor support to protect your capital." },
];

function MarginTradingPage() {
  return (
    <PageShell>
      <PageHero
        title="Margin Trading"
        subtitle="Amplify your purchasing power with our margin facility. Borrow against your portfolio with transparent interest rates."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Margin Trading" }]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_8px_30px_rgba(21,87,192,.10)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-lt">
                  <f.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="mb-2 text-[16px] font-bold text-foreground">{f.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-brand-gray">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Eligibility</div>
            <h2 className="mb-4 font-heading text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.2]">Who can avail margin trading?</h2>
            <ul className="space-y-3">
              {[
                "Active brokerage account with Imperial Securities",
                "Minimum portfolio value of NPR 5,00,000",
                "Signed Margin Trading Agreement (MTA)",
                "Clean trading record — no defaults",
                "Acceptance of margin call obligations",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14px]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-dk" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8">
            <h3 className="mb-2 font-heading text-xl font-extrabold">Margin Terms</h3>
            <p className="mb-6 text-[13px] text-brand-gray">Indicative — actual terms per SEBON directives</p>
            <div className="space-y-3">
              {[
                { label: "Initial Margin", val: "50%" },
                { label: "Maintenance Margin", val: "40%" },
                { label: "Interest Rate", val: "12% p.a." },
                { label: "Eligible Scrips", val: "A & A+" },
                { label: "Margin Call Trigger", val: "< 40%" },
              ].map((t) => (
                <div key={t.label} className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                  <span className="text-[13.5px]">{t.label}</span>
                  <span className="font-bold text-brand-blue">{t.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-6 py-12">
        <div className="mx-auto flex max-w-[1100px] items-start gap-4 rounded-xl border border-amber-200 bg-white p-6">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
          <div>
            <h4 className="mb-1 font-bold text-foreground">Risk Disclosure</h4>
            <p className="text-[13.5px] leading-relaxed text-brand-gray">
              Margin trading involves substantial risk. Losses can exceed your initial deposit. You may receive margin calls requiring immediate fund deposit. Read the Margin Trading Agreement carefully and consult our advisors before participating.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-blue to-brand-green-dk px-6 py-16 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-extrabold md:text-3xl">Speak with a margin advisor</h2>
            <p className="mt-2 text-white/80">Understand the risks and rewards before you leverage.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-semibold text-brand-blue transition-all hover:-translate-y-0.5">
            Talk to Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
