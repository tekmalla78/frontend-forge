import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Navigation } from "lucide-react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { branches } from "../components/BranchesSection";
import teamPhoto from "../assets/branch-team.jpg";

interface BranchDetail {
  slug: string;
  name: string;
  city: string;
  addr: string;
  phone: string;
  email: string;
  hours: string;
  mapsQuery: string;
  description: string;
  manager: string;
  established: string;
}

const branchDetails: Record<string, BranchDetail> = {
  kathmandu: {
    slug: "kathmandu",
    name: "Kathmandu — Head Office",
    city: "Kathmandu",
    addr: "New Baneshwor, Kathmandu 44600, Nepal",
    phone: "+977-01-4XXXXXX",
    email: "kathmandu@imperialsec.com.np",
    hours: "Sun – Fri: 10:00 AM – 5:00 PM",
    mapsQuery: "New+Baneshwor+Kathmandu+Nepal",
    description: "Our flagship head office at the heart of Nepal's financial district, offering the complete suite of brokerage, advisory, and DEMAT services.",
    manager: "Mr. Ramesh Sharma",
    established: "1997",
  },
  nepalgunj: {
    slug: "nepalgunj",
    name: "Nepalgunj Branch",
    city: "Nepalgunj",
    addr: "Dhambojhi Chowk, Nepalgunj, Banke",
    phone: "+977-081-XXXXXX",
    email: "nepalgunj@imperialsec.com.np",
    hours: "Sun – Fri: 10:00 AM – 5:00 PM",
    mapsQuery: "Dhambojhi+Chowk+Nepalgunj+Nepal",
    description: "Serving the Mid-Western region with full brokerage and DEMAT services, helping investors across the Banke, Bardiya, and Surkhet corridor.",
    manager: "Mr. Suresh Thapa",
    established: "2012",
  },
  surkhet: {
    slug: "surkhet",
    name: "Surkhet Branch",
    city: "Surkhet",
    addr: "Birendranagar-6, Surkhet",
    phone: "+977-083-XXXXXX",
    email: "surkhet@imperialsec.com.np",
    hours: "Sun – Fri: 10:00 AM – 5:00 PM",
    mapsQuery: "Birendranagar+Surkhet+Nepal",
    description: "Karnali Province's trusted gateway to NEPSE — providing local investors with personalised advisory and IPO support.",
    manager: "Ms. Kabita Bohara",
    established: "2018",
  },
  bhaktapur: {
    slug: "bhaktapur",
    name: "Bhaktapur Branch",
    city: "Bhaktapur",
    addr: "Suryabinayak, Bhaktapur 44800",
    phone: "+977-01-6XXXXXX",
    email: "bhaktapur@imperialsec.com.np",
    hours: "Sun – Fri: 10:00 AM – 5:00 PM",
    mapsQuery: "Suryabinayak+Bhaktapur+Nepal",
    description: "Conveniently located in Suryabinayak, serving the eastern Kathmandu valley with full brokerage, advisory, and account-opening services.",
    manager: "Mr. Bikash Shrestha",
    established: "2009",
  },
  dhading: {
    slug: "dhading",
    name: "Dhading Branch",
    city: "Dhading",
    addr: "Nilkantha Municipality, Dhading Besi",
    phone: "+977-010-XXXXXX",
    email: "dhading@imperialsec.com.np",
    hours: "Sun – Fri: 10:00 AM – 5:00 PM",
    mapsQuery: "Nilkantha+Dhading+Besi+Nepal",
    description: "Bringing modern stock market access to Dhading and the surrounding hill districts with friendly, walk-in advisory.",
    manager: "Mr. Hari Adhikari",
    established: "2020",
  },
  pokhara: {
    slug: "pokhara",
    name: "Pokhara Branch",
    city: "Pokhara",
    addr: "Lakeside Road, Pokhara-6, Kaski",
    phone: "+977-061-XXXXXX",
    email: "pokhara@imperialsec.com.np",
    hours: "Sun – Fri: 10:00 AM – 5:00 PM",
    mapsQuery: "Lakeside+Pokhara+Nepal",
    description: "Our western regional hub by the lakeside — offering the full Imperial Securities experience to Gandaki Province investors.",
    manager: "Ms. Anjali Gurung",
    established: "2008",
  },
};

export const Route = createFileRoute("/branches/$slug")({
  loader: ({ params }) => {
    const branch = branchDetails[params.slug];
    if (!branch) throw notFound();
    return { branch };
  },
  head: ({ loaderData }) => {
    const b = loaderData?.branch;
    return {
      meta: [
        { title: `${b?.name ?? "Branch"} — Imperial Securities` },
        { name: "description", content: b?.description ?? "Visit our branch office for in-person support." },
        { property: "og:title", content: `${b?.name ?? "Branch"} — Imperial Securities` },
        { property: "og:description", content: b?.description ?? "Visit our branch office for in-person support." },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-[800px] px-6 py-32 text-center">
        <h1 className="font-heading text-4xl font-extrabold">Branch not found</h1>
        <p className="mt-4 text-brand-gray">We couldn't find that branch.</p>
        <Link to="/" hash="branches" className="mt-6 inline-block rounded-full bg-brand-blue px-6 py-3 font-semibold text-white">
          See all branches
        </Link>
      </div>
    </PageShell>
  ),
  component: BranchPage,
});

function BranchPage() {
  const { branch } = Route.useLoaderData();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${branch.mapsQuery}`;
  const embedUrl = `https://www.google.com/maps?q=${branch.mapsQuery}&output=embed`;

  return (
    <PageShell>
      <PageHero
        eyebrow="Our Branch"
        title={branch.name}
        subtitle={branch.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Branches", href: "/contact" },
          { label: branch.city },
        ]}
      />

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, label: "Address", value: branch.addr },
              { icon: Phone, label: "Phone", value: branch.phone },
              { icon: Mail, label: "Email", value: branch.email },
              { icon: Clock, label: "Office Hours", value: branch.hours },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-border bg-card p-6 transition-all hover:border-brand-blue hover:shadow-[0_4px_24px_rgba(21,87,192,.08)]"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-gray">{item.label}</div>
                  <div className="mt-1 text-[14px] font-semibold text-foreground">{item.value}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dk"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
            <a
              href={`tel:${branch.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand-blue hover:text-brand-blue"
            >
              <Phone className="h-4 w-4" /> Call Branch
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray-lt px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 max-w-[640px]">
            <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Meet The Team</div>
            <h2 className="mb-3 font-heading text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.2] text-foreground">
              {branch.city} Branch Staff
            </h2>
            <p className="text-[15.5px] leading-[1.72] text-brand-gray">
              Led by <span className="font-semibold text-foreground">{branch.manager}</span>, our {branch.city} team has been serving local investors since {branch.established}.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_40px_rgba(0,0,0,.06)]"
          >
            <img
              src={teamPhoto}
              alt={`Imperial Securities ${branch.city} branch staff group photo`}
              loading="lazy"
              width={1280}
              height={768}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Get In Touch</div>
              <h2 className="mb-3 font-heading text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.2] text-foreground">
                Contact our {branch.city} branch
              </h2>
              <p className="mb-6 text-[15.5px] leading-[1.72] text-brand-gray">
                Have a question or want to open an account? Send us a message and the {branch.city} team will get back within one business day.
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We'll get back to you shortly.");
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full Name" className="h-12 rounded-lg border border-border bg-white px-4 text-sm outline-none transition focus:border-brand-blue" />
                  <input required type="tel" placeholder="Phone Number" className="h-12 rounded-lg border border-border bg-white px-4 text-sm outline-none transition focus:border-brand-blue" />
                </div>
                <input required type="email" placeholder="Email Address" className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm outline-none transition focus:border-brand-blue" />
                <input placeholder="Subject" className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm outline-none transition focus:border-brand-blue" />
                <textarea required rows={5} placeholder="Your message..." className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-blue" />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-blue-dk"
                >
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_40px_rgba(0,0,0,.06)]">
                <iframe
                  title={`${branch.city} branch location`}
                  src={embedUrl}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray-lt px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Nationwide</div>
              <h2 className="font-heading text-[clamp(22px,2.5vw,32px)] font-extrabold leading-[1.2] text-foreground">Other Branches</h2>
            </div>
            <Link to="/" hash="branches" className="hidden text-sm font-semibold text-brand-blue hover:underline sm:inline">
              View all →
            </Link>
          </div>

          <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {branches
              .filter((b) => b.slug !== branch.slug)
              .slice(0, 3)
              .map((b) => (
                <Link
                  key={b.slug}
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
              ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
