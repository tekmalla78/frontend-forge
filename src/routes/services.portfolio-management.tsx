import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, PieChart, FileBarChart, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";

export const Route = createFileRoute("/services/portfolio-management")({
  component: PortfolioManagementPage,
  head: () => ({
    meta: [
      { title: "Portfolio Management — Imperial Securities" },
      { name: "description", content: "SEBON-certified advisors build and manage a customized portfolio aligned to your risk appetite, with transparent monthly reporting." },
      { property: "og:title", content: "Portfolio Management — Imperial Securities" },
      { property: "og:description", content: "Discretionary & advisory portfolio management for serious investors." },
    ],
  }),
});

const plans = [
  {
    name: "Conservative",
    risk: "Low Risk",
    target: "8–12% p.a.",
    color: "blue",
    desc: "Capital preservation focus with blue-chip equities & debentures.",
    features: ["70% large-cap equity", "20% government bonds", "10% cash/liquid", "Quarterly rebalance"],
  },
  {
    name: "Balanced",
    risk: "Moderate Risk",
    target: "12–18% p.a.",
    color: "green",
    popular: true,
    desc: "Balanced growth across sectors with disciplined diversification.",
    features: ["60% diversified equity", "25% mid-cap growth", "15% debentures", "Monthly rebalance"],
  },
  {
    name: "Growth",
    risk: "High Risk",
    target: "18–25% p.a.",
    color: "blue",
    desc: "Aggressive equity exposure aimed at long-term capital appreciation.",
    features: ["80% growth equity", "15% small-cap", "5% IPO allocations", "Active management"],
  },
];

function PortfolioManagementPage() {
  return (
    <PageShell>
      <PageHero
        title="Portfolio Management"
        subtitle="SEBON-certified advisors manage a customized portfolio aligned to your risk appetite with transparent monthly reports."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Portfolio Management" }]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: UserCheck, title: "Certified Advisors", desc: "SEBON-licensed Portfolio Managers with 10+ years of market experience." },
              { icon: Target, title: "Goal-Based", desc: "Strategies built around your retirement, education, or wealth goals." },
              { icon: PieChart, title: "Smart Diversification", desc: "Sector, market-cap, and instrument-level diversification." },
              { icon: FileBarChart, title: "Monthly Reports", desc: "Detailed performance reports with benchmarking and commentary." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-[0_8px_30px_rgba(34,166,79,.10)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-lt">
                  <f.icon className="h-6 w-6 text-brand-green-dk" />
                </div>
                <h3 className="mb-2 text-[16px] font-bold text-foreground">{f.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-brand-gray">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 text-center">
            <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Investment Plans</div>
            <h2 className="font-heading text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.2]">Choose a strategy that fits your goals</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[14.5px] text-brand-gray">Indicative target returns. Past performance does not guarantee future results.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-2xl border-2 bg-white p-7 ${p.popular ? "border-brand-green-dk shadow-[0_12px_40px_rgba(34,166,79,.18)]" : "border-border"}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand-green-dk px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white">Most Popular</span>
                )}
                <h3 className="mb-1 font-heading text-2xl font-extrabold">{p.name}</h3>
                <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-brand-gray">{p.risk}</div>
                <div className="mb-5 flex items-baseline gap-1.5">
                  <span className="font-heading text-3xl font-extrabold text-brand-blue">{p.target}</span>
                  <span className="text-[12px] text-brand-gray">target</span>
                </div>
                <p className="mb-5 text-[13.5px] leading-relaxed text-brand-gray">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13.5px] text-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green-dk" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-blue to-brand-green-dk px-6 py-16 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-extrabold md:text-3xl">Schedule a portfolio consultation</h2>
            <p className="mt-2 text-white/80">Free 30-minute discovery call with a certified advisor.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-semibold text-brand-blue transition-all hover:-translate-y-0.5">
            Book Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
