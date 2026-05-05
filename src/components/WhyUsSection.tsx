import { motion } from "framer-motion";

const reasons = [
  { icon: "⚡", title: "Real-Time Trading Platform", desc: "Lightning-fast order execution with live NEPSE data feeds, charts, and depth-of-market on web and mobile." },
  { icon: "🔒", title: "SEBON Regulated & Secure", desc: "Fully regulated by SEBON with strict compliance. Your funds and securities are protected at all times." },
  { icon: "📱", title: "Mobile-First App", desc: "Trade on the go with our intuitive Android & iOS app — all features available anytime, anywhere." },
  { icon: "💬", title: "Dedicated Support", desc: "Personal relationship managers and responsive support during market hours via phone, Viber, and in-branch." },
  { icon: "🏧", title: "Instant Fund Settlement", desc: "T+3 settlement with integrated eSewa, Khalti, ConnectIPS, and direct bank transfer options." },
  { icon: "📊", title: "Advanced Analytics", desc: "Professional charting tools, technical indicators, watchlists, price alerts, and portfolio analytics built in." },
];

export default function WhyUsSection() {
  return (
    <section className="bg-gradient-to-br from-[#030D22] to-[#0A1F4E] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-green">Our Advantage</div>
          <h2 className="font-heading text-[clamp(24px,3vw,40px)] font-extrabold text-white">Why 200,000+ Investors Trust Us</h2>
        </motion.div>
        <div className="grid gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-lg border border-white/[.09] bg-white/[.03] p-[26px] transition-all hover:-translate-y-0.5 hover:border-[#00C853]/30 hover:bg-white/[.08]"
            >
              <div className="mb-3 text-[30px]">{r.icon}</div>
              <h3 className="mb-2 text-base font-bold text-white">{r.title}</h3>
              <p className="text-[13.5px] leading-[1.65] text-white/50">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
