import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const branches = [
  { slug: "kathmandu", name: "Kathmandu — Head Office", addr: "New Baneshwor, Kathmandu", phone: "01-4XXXXXX", icon: "🏙" },
  { slug: "nepalgunj", name: "Nepalgunj", addr: "Dhambojhi Chowk, Nepalgunj", phone: "081-XXXXXX", icon: "🌅" },
  { slug: "surkhet", name: "Surkhet", addr: "Birendranagar, Surkhet", phone: "083-XXXXXX", icon: "🏞" },
  { slug: "bhaktapur", name: "Bhaktapur", addr: "Suryabinayak, Bhaktapur", phone: "01-6XXXXXX", icon: "🏛" },
  { slug: "dhading", name: "Dhading", addr: "Nilkantha, Dhading", phone: "010-XXXXXX", icon: "🌄" },
  { slug: "pokhara", name: "Pokhara", addr: "Lakeside Road, Pokhara", phone: "061-XXXXXX", icon: "🏔" },
];

export default function BranchesSection() {
  return (
    <section id="branches" className="bg-brand-gray-lt px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Find Us</div>
          <h2 className="mb-3 font-heading text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.2] text-foreground">Our Branches Across Nepal</h2>
          <p className="max-w-[540px] text-[15.5px] leading-[1.72] text-brand-gray">Visit any of our branches for in-person support, account opening, and advisory services.</p>
        </motion.div>
        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to="/branches/$slug"
                params={{ slug: b.slug }}
                className="group block rounded-lg border-[1.5px] border-border bg-white p-5 transition-all hover:border-brand-blue hover:shadow-[0_4px_24px_rgba(21,87,192,.10)]"
              >
                <h4 className="mb-1.5 text-[14.5px] font-bold text-foreground">{b.icon} {b.name}</h4>
                <p className="text-[12.5px] leading-relaxed text-brand-gray">{b.addr}<br/>📞 {b.phone}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-blue">
                  View Branch <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
