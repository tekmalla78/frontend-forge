import { motion } from "framer-motion";

const features = [
  { icon: "📡", title: "Live Market Data", desc: "Real-time NEPSE price feeds and depth charts" },
  { icon: "⚡", title: "Instant Orders", desc: "One-tap buy/sell with instant confirmation" },
  { icon: "🔔", title: "Smart Alerts", desc: "Price and news alerts for your watchlist" },
  { icon: "🧾", title: "Digital Statements", desc: "View contract notes & portfolio reports" },
];

export default function DownloadSection() {
  return (
    <section className="bg-gradient-to-br from-brand-blue-dk via-brand-blue to-brand-green-dk px-4 py-14 sm:px-6 sm:py-[70px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-white/55">Mobile Trading</div>
          <h2 className="mb-3 font-heading text-[clamp(24px,3vw,38px)] font-extrabold text-white">Trade NEPSE From Your Phone</h2>
          <p className="mb-7 text-[15px] leading-[1.70] text-white/70">
            Download the Imperial Securities app and access live market data, place orders, check your portfolio, and apply for IPOs from your smartphone.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-2.5 rounded-xl border-[1.5px] border-white/[.22] bg-white/[.11] px-5 py-3 text-white transition-all hover:bg-white/20">
              <span className="text-2xl">🍎</span>
              <div>
                <small className="block text-[9.5px] uppercase tracking-wide opacity-70">Download on the</small>
                <strong className="text-[15px]">App Store</strong>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2.5 rounded-xl border-[1.5px] border-white/[.22] bg-white/[.11] px-5 py-3 text-white transition-all hover:bg-white/20">
              <span className="text-2xl">🤖</span>
              <div>
                <small className="block text-[9.5px] uppercase tracking-wide opacity-70">Get it on</small>
                <strong className="text-[15px]">Google Play</strong>
              </div>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          {features.map((f) => (
            <div key={f.title} className="rounded-[10px] border border-white/[.11] bg-white/[.07] p-4">
              <div className="mb-2 text-lg">{f.icon}</div>
              <h5 className="mb-1 text-[13.5px] font-bold text-white">{f.title}</h5>
              <p className="text-[12px] text-white/50">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
