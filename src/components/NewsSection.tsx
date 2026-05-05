import { motion } from "framer-motion";

const articles = [
  {
    tag: "Market Update",
    title: "NEPSE Crosses 2,850 Mark Amid Strong Hydropower Rally",
    desc: "The benchmark index extended gains driven by renewed investor interest in hydropower and banking stocks.",
    date: "March 24, 2026",
    read: "3 min read",
    color: "from-brand-blue to-brand-blue-dk",
  },
  {
    tag: "Investment Guide",
    title: "Beginner's Guide to Buying Shares on NEPSE in 2026",
    desc: "Learn how to open a DEMAT account, select your broker, apply for IPOs, and build a diversified portfolio.",
    date: "March 20, 2026",
    read: "6 min read",
    color: "from-brand-green-dk to-brand-green",
  },
  {
    tag: "IPO Alert",
    title: "Upcoming IPO: XYZ Hydropower Limited Opens for Applications",
    desc: "XYZ Hydropower is opening a 3 lakh unit IPO at Rs. 100 per share. Application window opens Chaitra 15.",
    date: "March 18, 2026",
    read: "4 min read",
    color: "from-[#F59E0B] to-[#D97706]",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="bg-brand-gray-lt px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Stay Informed</div>
          <h2 className="mb-3 font-heading text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.2] text-foreground">Market Insights & News</h2>
          <p className="max-w-[540px] text-[15.5px] leading-[1.72] text-brand-gray">Expert analysis, NEPSE updates, and investment guides from our research team.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-lg border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(21,87,192,.10)]"
            >
              <div className={`flex h-[140px] items-center justify-center bg-gradient-to-br ${a.color} text-4xl`}>
                📰
              </div>
              <div className="p-5">
                <span className="mb-2 inline-block rounded-full bg-brand-blue-lt px-3 py-1 text-[11px] font-bold text-brand-blue">{a.tag}</span>
                <h4 className="mb-2 font-heading text-base font-bold leading-snug text-foreground">{a.title}</h4>
                <p className="mb-3 text-[13px] leading-relaxed text-brand-gray">{a.desc}</p>
                <div className="text-[12px] text-brand-gray">📅 {a.date} · {a.read}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
