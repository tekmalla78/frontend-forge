import { motion } from "framer-motion";
import { Building2, Landmark, Smartphone, Wallet, CreditCard, Banknote, CircleDollarSign } from "lucide-react";

const platforms = [
  { name: "ConnectIPS", desc: "Direct bank transfer", icon: Landmark, color: "from-red-500/15 to-red-600/5", iconColor: "text-red-600" },
  { name: "eSewa", desc: "Digital wallet payment", icon: Wallet, color: "from-emerald-500/15 to-emerald-600/5", iconColor: "text-emerald-600" },
  { name: "Khalti", desc: "Digital wallet payment", icon: Smartphone, color: "from-purple-500/15 to-purple-600/5", iconColor: "text-purple-600" },
  { name: "FonePay", desc: "Mobile banking gateway", icon: CreditCard, color: "from-orange-500/15 to-orange-600/5", iconColor: "text-orange-600" },
  { name: "IME Pay", desc: "Mobile money transfer", icon: Banknote, color: "from-rose-500/15 to-rose-600/5", iconColor: "text-rose-600" },
  { name: "NEPSE Online", desc: "Direct NEPSE platform", icon: CircleDollarSign, color: "from-brand-blue/15 to-brand-blue-dk/5", iconColor: "text-brand-blue" },
  { name: "GBIME Bank", desc: "Direct bank deposit", icon: Building2, color: "from-cyan-500/15 to-cyan-600/5", iconColor: "text-cyan-600" },
  { name: "NPX", desc: "Settlement network", icon: Landmark, color: "from-amber-500/15 to-amber-600/5", iconColor: "text-amber-600" },
];

export default function PaymentBankingSection() {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...platforms, ...platforms];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Supported Platforms</div>
          <h2 className="mb-3 font-heading text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.2] text-foreground">Payment & Banking</h2>
          <p className="max-w-[540px] text-[15.5px] leading-[1.72] text-brand-gray">
            Fund your trading account instantly using Nepal's leading payment gateways and banking networks.
          </p>
        </motion.div>

        {/* Auto-scrolling marquee — constrained to container */}
        <div
          className="relative group overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused] py-3">
            {loop.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={`${p.name}-${i}`}
                  className="shrink-0 w-[180px]"
                >
                  <div className="h-full rounded-xl border border-border bg-card p-4 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 hover:-translate-y-1">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-3 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${p.iconColor}`} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-brand-dark mb-1">
                      {p.name}
                    </h3>
                    <p className="text-xs text-brand-gray leading-snug">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
