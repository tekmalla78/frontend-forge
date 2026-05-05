import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-green-dk px-4 py-12 sm:px-6 sm:py-[60px]">
      <div className="absolute -right-[60px] -top-[60px] h-[280px] w-[280px] rounded-full bg-white/5" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-[1] mx-auto max-w-[760px] text-center"
      >
        <h2 className="mb-3 font-heading text-[clamp(22px,3.5vw,36px)] font-extrabold text-white">
          Ready to Start Investing in Nepal's Stock Market?
        </h2>
        <p className="mb-8 text-[15.5px] text-white/70">
          Join 200,000+ investors already growing their wealth on NEPSE. Open your free account in under 10 minutes.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a href="#" className="rounded-[10px] bg-white px-7 py-3.5 text-[15px] font-bold text-brand-green-dk transition-all hover:bg-brand-green-lt">
            ✦ Open Free Account
          </a>
          <a href="#" className="rounded-[10px] border-2 border-white/50 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:border-white hover:bg-white/10">
            Talk to an Advisor
          </a>
        </div>
      </motion.div>
    </section>
  );
}
