import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, Smartphone, Banknote, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";

export const Route = createFileRoute("/services/ipo-fpo")({
  component: IpoFpoPage,
  head: () => ({
    meta: [
      { title: "IPO / FPO Application — Imperial Securities" },
      { name: "description", content: "Apply for upcoming IPOs & FPOs online without visiting a branch. Automatic allotment to your DEMAT account." },
      { property: "og:title", content: "IPO / FPO Application — Imperial Securities" },
      { property: "og:description", content: "Online IPO/FPO application made simple." },
    ],
  }),
});

function IpoFpoPage() {
  return (
    <PageShell>
      <PageHero
        title="IPO / FPO Application"
        subtitle="Apply for upcoming IPOs & FPOs online without visiting a branch. Get automatic allotment to your DEMAT."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "IPO / FPO" }]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Smartphone, title: "Apply Online 24/7", desc: "Submit applications via web or mobile app — no branch visit required." },
              { icon: Banknote, title: "ASBA Linked", desc: "Funds blocked in your bank only when allotted — no upfront payment." },
              { icon: FileText, title: "Auto Allotment", desc: "Allotted shares directly credited to your DEMAT account." },
              { icon: ShieldCheck, title: "SEBON Compliant", desc: "Fully regulated process with full transparency." },
            ].map((f, i) => (
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
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10">
            <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Currently Open</div>
            <h2 className="font-heading text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.2]">Upcoming & Open Issues</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="w-full text-left text-[13.5px]">
              <thead className="bg-muted/50 text-[12px] uppercase tracking-wider text-brand-gray">
                <tr>
                  <th className="px-5 py-4">Company</th>
                  <th className="px-5 py-4">Type</th>
                  <th className="px-5 py-4">Units</th>
                  <th className="px-5 py-4">Price</th>
                  <th className="px-5 py-4">Closes</th>
                  <th className="px-5 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { co: "Himalayan Hydropower", type: "IPO", units: "12,00,000", price: "100", close: "Apr 22, 2026" },
                  { co: "Surya Microfinance", type: "FPO", units: "8,50,000", price: "240", close: "Apr 25, 2026" },
                  { co: "Everest Insurance", type: "IPO", units: "20,00,000", price: "100", close: "Apr 30, 2026" },
                ].map((r) => (
                  <tr key={r.co} className="border-t border-border">
                    <td className="px-5 py-4 font-semibold text-foreground">{r.co}</td>
                    <td className="px-5 py-4"><span className="rounded-full bg-brand-green-lt px-2.5 py-1 text-[11px] font-bold text-brand-green-dk">{r.type}</span></td>
                    <td className="px-5 py-4 text-brand-gray">{r.units}</td>
                    <td className="px-5 py-4 text-brand-gray">NPR {r.price}</td>
                    <td className="px-5 py-4 text-brand-gray">{r.close}</td>
                    <td className="px-5 py-4 text-right">
                      <button className="rounded-lg bg-brand-blue px-4 py-1.5 text-[12.5px] font-semibold text-white hover:bg-brand-blue-dk">Apply</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-10 text-center font-heading text-[clamp(22px,2.5vw,32px)] font-extrabold">Apply in 4 simple steps</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {["Login to your account", "Select open IPO/FPO", "Enter units & confirm", "Track allotment status"].map((s, i) => (
              <div key={s} className="rounded-xl border border-border bg-white p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-[14px] font-bold text-white">{i + 1}</div>
                <p className="text-[14px] font-medium text-foreground">{s}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["No application fees", "Real-time allotment status", "Refund auto-credited", "Email & SMS notifications"].map((b) => (
              <li key={b} className="flex items-center gap-3 rounded-lg bg-muted/40 px-4 py-3 text-[14px]">
                <CheckCircle2 className="h-5 w-5 text-brand-green-dk" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-blue to-brand-green-dk px-6 py-16 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-extrabold md:text-3xl">Never miss an IPO again</h2>
            <p className="mt-2 text-white/80">Get alerts the moment a new issue opens.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-semibold text-brand-blue transition-all hover:-translate-y-0.5">
            Enable Alerts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
