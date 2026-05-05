import { motion } from "framer-motion";

const tools = [
  { icon: "🧮", name: "Brokerage Calculator", desc: "Estimate trading costs" },
  { icon: "📈", name: "Returns Calculator", desc: "Project investment growth" },
  { icon: "🎰", name: "IPO Allotment Check", desc: "Check IPO results" },
  { icon: "📊", name: "Portfolio Tracker", desc: "Monitor all holdings" },
  { icon: "💡", name: "Stock Screener", desc: "Filter stocks by criteria" },
  { icon: "🔔", name: "Price Alerts", desc: "Get notified on moves" },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Smart Tools</div>
          <h2 className="mb-3 font-heading text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.2] text-foreground">Investor Tools</h2>
          <p className="max-w-[540px] text-[15.5px] leading-[1.72] text-brand-gray">Powerful calculators and utilities to help you make informed investment decisions.</p>
        </motion.div>
        <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-6">
          {tools.map((t, i) => (
            <motion.a
              key={t.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center gap-2.5 rounded-lg border-[1.5px] border-border p-[22px] text-center text-foreground transition-all hover:-translate-y-[3px] hover:border-brand-blue hover:bg-brand-blue-lt hover:shadow-[0_4px_24px_rgba(21,87,192,.10)]"
            >
              <div className="text-[30px]">{t.icon}</div>
              <div className="text-[13.5px] font-bold">{t.name}</div>
              <div className="text-xs text-brand-gray">{t.desc}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
