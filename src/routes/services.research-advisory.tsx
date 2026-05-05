import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, LineChart, Newspaper, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";

export const Route = createFileRoute("/services/research-advisory")({
  component: ResearchAdvisoryPage,
  head: () => ({
    meta: [
      { title: "Research & Advisory — Imperial Securities" },
      { name: "description", content: "Daily NEPSE market reports, company fundamentals, sector analysis, and expert stock recommendations from our certified research team." },
      { property: "og:title", content: "Research & Advisory — Imperial Securities" },
      { property: "og:description", content: "Independent research that informs better investment decisions." },
    ],
  }),
});

const reports = [
  { icon: LineChart, title: "Daily Market Brief", desc: "End-of-day NEPSE summary, top movers, sector heatmap, and tomorrow's outlook.", tag: "Daily" },
  { icon: BookOpen, title: "Company Fundamentals", desc: "Deep-dive reports on quarterly results, ratios, and intrinsic valuation.", tag: "Weekly" },
  { icon: Newspaper, title: "Sector Analysis", desc: "Banking, hydropower, hotels, microfinance — quarterly sector outlooks.", tag: "Quarterly" },
  { icon: Lightbulb, title: "Stock Recommendations", desc: "Buy / Hold / Sell calls with target price, stop-loss, and time horizon.", tag: "Live" },
];

function ResearchAdvisoryPage() {
  return (
    <PageShell>
      <PageHero
        title="Research & Advisory"
        subtitle="Daily market reports, company fundamentals, sector analysis, and expert stock recommendations from our team."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Research & Advisory" }]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12">
            <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">What We Publish</div>
            <h2 className="font-heading text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.2]">Independent research, delivered consistently</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reports.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group flex gap-5 rounded-xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_8px_30px_rgba(21,87,192,.10)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-blue-lt">
                  <r.icon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center gap-2">
                    <h3 className="text-[16.5px] font-bold text-foreground">{r.title}</h3>
                    <span className="rounded-full bg-brand-green-lt px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-green-dk">{r.tag}</span>
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-brand-gray">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-green-dk">Our Methodology</div>
            <h2 className="mb-4 font-heading text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.2]">Disciplined, data-driven, independent</h2>
            <p className="mb-6 text-[15px] leading-[1.72] text-brand-gray">
              Our research desk combines fundamental analysis, technical indicators, and macroeconomic context to produce calls you can trust. No conflicts of interest — our analysts are independent of the trading desk.
            </p>
            <ul className="space-y-3">
              {[
                "CFA & CA-qualified analysts",
                "Proprietary valuation models",
                "Quarterly earnings call coverage",
                "Macro & policy impact studies",
                "Free for active brokerage clients",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[14px]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green-dk" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-[0_12px_40px_rgba(21,87,192,.10)]">
            <h3 className="mb-1 font-heading text-xl font-extrabold">Subscribe to Research</h3>
            <p className="mb-6 text-[13px] text-brand-gray">Get our flagship reports in your inbox.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-[14px] outline-none focus:border-brand-blue" />
              <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-[14px] outline-none focus:border-brand-blue" />
              <button type="button" className="w-full rounded-lg bg-gradient-to-br from-brand-blue to-brand-green-dk py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5">
                Subscribe Free
              </button>
              <p className="text-center text-[11.5px] text-brand-gray">Free for verified clients. SEBON-compliant.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-blue to-brand-green-dk px-6 py-16 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-extrabold md:text-3xl">Get our flagship daily report free</h2>
            <p className="mt-2 text-white/80">Available to all active Imperial Securities clients.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-semibold text-brand-blue transition-all hover:-translate-y-0.5">
            Talk to Research <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
