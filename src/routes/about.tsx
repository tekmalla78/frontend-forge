import { createFileRoute, Link } from "@tanstack/react-router";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import {
  Shield,
  Target,
  Telescope,
  Scale,
  Award,
  Building2,
  Zap,
  Lock,
  Smartphone,
  Headphones,
  Rocket,
  LineChart,
  MapPin,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Imperial Securities | Stock Broker No. 45" },
      { name: "description", content: "15+ years building Nepal's most trusted investment partner. SEBON licensed broker No. 45, NEPSE member, CDSC depository participant." },
      { property: "og:title", content: "About Imperial Securities — Nepal's Trusted Investment Partner" },
      { property: "og:description", content: "Building Nepal's most trusted investment partner since 2001. SEBON licensed, NEPSE member, full digital trading platform." },
    ],
  }),
});

const credentials = [
  { icon: <Shield className="h-5 w-5" />, title: "SEBON Registered", desc: "Fully licensed and regulated by the Securities Board of Nepal. Operating under strict compliance since 2001." },
  { icon: <Building2 className="h-5 w-5" />, title: "NEPSE Member · No. 45", desc: "Official member of the Nepal Stock Exchange, authorized to execute buy and sell orders on behalf of clients." },
  { icon: <Lock className="h-5 w-5" />, title: "CDSC Depository Participant", desc: "Authorized DEMAT service provider through CDSC, ensuring seamless settlement of all transactions." },
  { icon: <Smartphone className="h-5 w-5" />, title: "Digital-First Platform", desc: "Full online trading, DEMAT opening, IPO applications and portfolio management — all paperless." },
];

const timeline = [
  { year: "2001", title: "Founded & Licensed", desc: "Imperial Securities Company Limited established and received SEBON license as Stock Broker No. 45. Operations began at Kathmandu's Head Office.", icon: <Award className="h-4 w-4" /> },
  { year: "2007", title: "Electronic Trading Adoption", desc: "Transitioned to NEPSE's new electronic trading system. Introduced computer-based order management for clients — a major leap forward.", icon: <Zap className="h-4 w-4" /> },
  { year: "2012", title: "Branch Expansion", desc: "Opened 6 new branches across Nepal including Pokhara, Biratnagar, Butwal, Lalitpur and Bhairahawa. Reached 10,000 registered clients.", icon: <Building2 className="h-4 w-4" /> },
  { year: "2018", title: "CDSC DP Authorization", desc: "Became an authorized Depository Participant of CDSC, enabling full DEMAT account services and seamless IPO allotments for clients.", icon: <Lock className="h-4 w-4" /> },
  { year: "2021", title: "Digital Platform Launch", desc: "Launched full digital trading platform and mobile app. Online KYC and account opening enabled. Clients crossed 120,000 across all branches.", icon: <Smartphone className="h-4 w-4" /> },
  { year: "2024", title: "Today — 200,000+ Clients", desc: "Serving 200,000+ active investors across Nepal. 6 branches, full digital services, and Nepal's most trusted securities platform.", icon: <Rocket className="h-4 w-4" /> },
];

const advantages = [
  { icon: <Zap className="h-5 w-5" />, title: "Real-Time Trading", desc: "Lightning-fast order execution with live NEPSE rate feeds, charts, and depth-of-market information on web and mobile." },
  { icon: <Shield className="h-5 w-5" />, title: "SEBON Regulated", desc: "Fully licensed and regulated by SEBON and NEPSE. Your funds, shares, and data are protected under Nepal's financial regulations." },
  { icon: <Smartphone className="h-5 w-5" />, title: "Mobile App", desc: "Complete trading platform on Android & iOS. Buy/sell shares, apply for IPOs, check portfolio — all from your phone." },
  { icon: <Headphones className="h-5 w-5" />, title: "Expert Support", desc: "Dedicated relationship managers and market experts available during trading hours to guide your investment decisions." },
  { icon: <Rocket className="h-5 w-5" />, title: "Fast Settlement", desc: "T+3 settlement cycle. Fund your account with eSewa, Khalti, ConnectIPS, or direct bank transfer — reflected instantly." },
  { icon: <LineChart className="h-5 w-5" />, title: "Research & Analysis", desc: "Daily market reports, company fundamentals, IPO analysis, and sector insights from our in-house research team." },
  { icon: <MapPin className="h-5 w-5" />, title: "6 Branch Network", desc: "Physical branches across Nepal for in-person support — Kathmandu, Bhaktapur, Dhading, Pokhara, Surkhet, and Nepalgunj." },
  { icon: <Globe className="h-5 w-5" />, title: "Digital-First", desc: "100% online account opening, paperless KYC, online IPO applications, and digital statements. No branch visit needed." },
];

const team = [
  { name: "Ram Sharan Sharma", role: "Chairman", initials: "RS", color: "from-brand-blue to-brand-blue-dk", bio: "25+ years experience in capital markets and financial services." },
  { name: "Sita Devi Acharya", role: "Vice Chairperson", initials: "SA", color: "from-brand-green-dk to-brand-green", bio: "Former banking executive with expertise in corporate governance." },
  { name: "Binod Kumar Jha", role: "Director", initials: "BJ", color: "from-indigo-500 to-indigo-700", bio: "Chartered accountant with deep experience in audit and compliance." },
  { name: "Anjali Thapa", role: "Director", initials: "AT", color: "from-purple-500 to-purple-700", bio: "Investment management professional with 15+ years in portfolio strategy." },
  { name: "Rajan Karki", role: "Director", initials: "RK", color: "from-orange-500 to-orange-700", bio: "Entrepreneur and venture capital specialist focused on fintech." },
  { name: "Priya Shrestha", role: "Independent Director", initials: "PS", color: "from-teal-500 to-teal-700", bio: "Legal expert specializing in securities law and regulatory affairs." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Established 2001 · Stock Broker No. 45"
        title="Building Nepal's Most Trusted Investment Partner"
        subtitle="Imperial Securities Company Limited — at the forefront of Nepal's capital market for over 15 years."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      {/* MISSION / VISION / VALUES */}
      <section className="bg-brand-gray-lt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">Our Foundation</span>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Mission, Vision &amp; Values
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Everything we do is guided by a clear purpose — making Nepal's capital market accessible, transparent, and beneficial for everyone.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Target className="h-6 w-6" />,
                title: "Our Mission",
                accent: "bg-brand-blue",
                iconBg: "bg-brand-blue-lt text-brand-blue",
                desc: "To provide world-class brokerage services that empower every Nepali investor — from remote villages to urban centers — to participate confidently in Nepal's growing capital market.",
                points: ["Democratize access to stock market investing", "Deliver transparent, low-cost brokerage services", "Educate investors to make informed decisions", "Leverage technology for seamless trading"],
              },
              {
                icon: <Telescope className="h-6 w-6" />,
                title: "Our Vision",
                accent: "bg-brand-green-dk",
                iconBg: "bg-brand-green-lt text-brand-green-dk",
                desc: "To be Nepal's most trusted and technologically advanced securities company — creating lasting wealth for our clients and contributing to the development of a vibrant, transparent capital market.",
                points: ["Lead digital transformation in Nepali brokerage", "Expand reach to all 77 districts of Nepal", "Build Nepal's largest retail investor community", "Set the benchmark for ethical brokerage"],
              },
              {
                icon: <Scale className="h-6 w-6" />,
                title: "Our Values",
                accent: "bg-amber-500",
                iconBg: "bg-amber-50 text-amber-600",
                desc: "Our core values define how we operate, treat our clients, and contribute to Nepal's financial ecosystem. These are not just words — they are embedded in every decision we make.",
                points: ["Integrity — Honest and ethical in all dealings", "Transparency — Clear, open communication always", "Innovation — Continuously improving our services", "Client-First — Your growth is our success"],
              },
            ].map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl md:p-8">
                <div className={`absolute inset-x-0 top-0 h-1 ${item.accent}`} />
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dk" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOURNEY / TIMELINE */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-20">
            {/* Left intro */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">Our Journey</span>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                15 Years of Excellence in Nepal's Capital Market
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  Imperial Securities Company Limited was founded in 2001 with a singular vision — to make Nepal's stock market accessible to ordinary citizens. What started as a small brokerage firm with a handful of clients has grown into one of Nepal's most trusted and respected securities companies.
                </p>
                <p>
                  Over the past decade and a half, we have witnessed NEPSE's transformation from a paper-based exchange to a fully electronic trading system. At every step, Imperial Securities has been at the forefront — adopting new technology, expanding our branch network, and continuously improving services for our clients.
                </p>
                <div className="rounded-xl border-l-4 border-brand-blue bg-brand-blue-lt/50 p-4 text-sm italic text-brand-blue-dk">
                  "Our success is measured not by our own growth, but by the financial growth and security we create for every one of our 200,000+ clients across Nepal."
                </div>
                <p>
                  Today, with 6 branches across Nepal, a state-of-the-art digital trading platform, and a team of dedicated professionals, we continue our mission of building Nepal's most trusted investment ecosystem.
                </p>
              </div>
            </div>

            {/* Right timeline */}
            <div className="relative">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue via-brand-green to-transparent" />
              <div className="space-y-8">
                {timeline.map((m) => (
                  <div key={m.year} className="relative pl-16">
                    <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dk text-white shadow-lg ring-4 ring-white">
                      {m.icon}
                    </div>
                    <div className="rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-md">
                      <div className="font-heading text-sm font-bold text-brand-green-dk tracking-wider">{m.year}</div>
                      <h4 className="mt-1 font-heading text-lg font-bold text-foreground">{m.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — DARK SECTION */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-green">Our Advantage</span>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              Why 200,000+ Investors Choose Imperial Securities
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <div key={a.title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-brand-green/30 hover:bg-white/[0.06]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-green ring-1 ring-brand-green/20 transition-transform group-hover:scale-110">
                  {a.icon}
                </div>
                <h3 className="font-heading text-base font-bold text-white">{a.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/55">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="scroll-mt-28 bg-brand-gray-lt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">Our People</span>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Leadership &amp; Team
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Meet our Board of Directors — experienced leaders guiding the strategic vision and corporate governance of Imperial Securities.
              </p>
            </div>
            <Link
              to="/management-team"
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-md"
            >
              Meet Our Management Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((p) => (
              <div key={p.name} className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex items-center gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-lg font-bold text-white shadow-md`}>
                    {p.initials}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground">{p.name}</h3>
                    <p className="text-xs font-semibold text-brand-blue">{p.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/management-team"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-blue-dk hover:shadow-lg"
            >
              View Full Management Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REGULATION BAND */}
      <section className="bg-gradient-to-r from-brand-blue-dk via-brand-blue to-brand-blue-dk py-12 md:py-14">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-white md:text-3xl">Fully Licensed &amp; Regulated</h3>
              <p className="mt-3 max-w-xl text-sm text-white/75 md:text-base">
                Imperial Securities Company Limited operates under full regulatory oversight of SEBON, NEPSE and CDSC — ensuring the highest standards of compliance, transparency, and client protection.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { v: "No. 45", l: "Stock Broker No." },
                { v: "SEBON", l: "Registered & Licensed" },
                { v: "NEPSE", l: "Member Since" },
                { v: "CDSC", l: "DP Authorized" },
              ].map((b) => (
                <div key={b.l} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center backdrop-blur">
                  <div className="font-heading text-base font-extrabold text-white md:text-lg">{b.v}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-wider text-white/65">{b.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-green-dk via-brand-green-dk to-brand-blue-dk py-16 md:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="mt-4 text-base text-white/80">
            Join 200,000+ Nepali investors who trust Imperial Securities. Open your free account in under 10 minutes — 100% online, no branch visit needed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-blue-dk shadow-lg transition-transform hover:scale-105"
            >
              + Open Free Account
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Talk to an Advisor <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}