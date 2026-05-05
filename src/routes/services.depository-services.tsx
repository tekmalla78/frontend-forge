import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Vault, FileCheck, Repeat, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";

export const Route = createFileRoute("/services/depository-services")({
  component: DepositoryPage,
  head: () => ({
    meta: [
      { title: "Depository Services (DP) — Imperial Securities" },
      { name: "description", content: "Open and manage your DEMAT account with CDSC-linked depository services. Receive IPO allotments and transfer shares digitally." },
      { property: "og:title", content: "Depository Services (DP) — Imperial Securities" },
      { property: "og:description", content: "Secure CDSC-linked DEMAT services for every investor." },
    ],
  }),
});

const features = [
  { icon: Vault, title: "DEMAT Account Opening", desc: "Open a CDSC-linked DEMAT account in 24 hours with simple KYC." },
  { icon: FileCheck, title: "IPO Allotment Credit", desc: "Allotted shares automatically credited to your DEMAT — no paperwork." },
  { icon: Repeat, title: "Share Transfer", desc: "On-market and off-market transfers handled securely and quickly." },
  { icon: Lock, title: "Secure Holdings", desc: "Holdings held electronically with CDSC — no physical certificate risk." },
];

const steps = [
  "Submit KYC form with citizenship & photo",
  "Link your bank account (mero share enabled)",
  "Receive BOID within 24 hours",
  "Start applying for IPOs and trading shares",
];

function DepositoryPage() {
  return (
    <PageShell>
      <PageHero
        title="Depository Services (DP)"
        subtitle="Open and manage your DEMAT account. Receive IPO allotments, transfer shares digitally — all CDSC-linked."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Depository Services" }]}
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
            <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-green-dk">How It Works</div>
            <h2 className="font-heading text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.2]">Open your DEMAT in 4 easy steps</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s} className="relative rounded-xl border border-border bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-dk text-[15px] font-bold text-white">
                  {i + 1}
                </div>
                <p className="text-[14px] leading-relaxed text-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1280px] rounded-2xl border border-border bg-muted/30 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="mb-3 font-heading text-2xl font-extrabold">DP Service Charges</h3>
              <p className="text-[14.5px] leading-relaxed text-brand-gray">Transparent, CDSC-approved annual and per-transaction charges. No hidden fees.</p>
            </div>
            <ul className="space-y-3">
              {[
                { label: "Account Opening", val: "NPR 100" },
                { label: "Annual Maintenance", val: "NPR 100" },
                { label: "Per Transaction (Buy)", val: "NPR 25" },
                { label: "Per Transaction (Sell)", val: "0.02%" },
              ].map((c) => (
                <li key={c.label} className="flex items-center justify-between rounded-lg bg-white px-4 py-3">
                  <span className="flex items-center gap-2 text-[14px]"><CheckCircle2 className="h-4 w-4 text-brand-green-dk" /> {c.label}</span>
                  <span className="font-bold text-brand-blue">{c.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-blue to-brand-green-dk px-6 py-16 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-extrabold md:text-3xl">Open your DEMAT account today</h2>
            <p className="mt-2 text-white/80">100% online KYC — no branch visit required.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-semibold text-brand-blue transition-all hover:-translate-y-0.5">
            Open Account <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
