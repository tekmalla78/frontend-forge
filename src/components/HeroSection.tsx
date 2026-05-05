import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type IconKey = "doc" | "tag" | "shield" | "chart" | "bell" | "phone" | "globe" | "map";

interface Pin   { icon: IconKey; before: string; after: string; }
interface Price  { label: string; num: string; rs: string; period: string; desc: string; free: boolean; }
interface Quote  { initials: string; name: string; meta: string; text: string; tag: string; }
interface Slide  {
  num: string; eyebrow: string;
  titleBefore: string; titleEm: string;
  desc: string; pins: Pin[];
  cta: string; cta2: string;
  quote: Quote; prices: Price[];
  navLabel: string;
}

// ─── Slide data ───────────────────────────────────────────────────────────────

const slides: Slide[] = [
  {
    num: "01 / 03",
    eyebrow: "Zero paperwork · Instant KYC",
    titleBefore: "Stop Wasting Time,",
    titleEm: "On Paperwork",
    desc: "Manual forms and branch queues kept thousands of Nepali investors from starting. We built a better way.",
    pins: [
      { icon: "doc",    before: "CPhysical forms & signature marathons", after: "Full Demat + trading account opened 100% online" },
      { icon: "tag",    before: "5–7 days waiting for account activation", after: "Account live and ready to trade within hours" },
      { icon: "shield", before: "Documents lost, mishandled or delayed",    after: "Bank-grade encrypted KYC, secured instantly" },
    ],
    cta: "Open Account", cta2: "How it works",
    quote: {
      initials: "BT", name: "Binod T.", meta: "Entrepreneur · Lalitpur",
      text: "Rs 50 to open a Demat and zero for the trading account. I compared six brokers — nobody else comes close to this pricing.",
      tag: "Pricing clarity",
    },
    prices: [
      { label: "DEMAT OPENING",      num: "50",  rs: "Rs", period: "one time",     desc: "Demat account",       free: false },
      { label: "ANNUAL MAINTENANCE", num: "100", rs: "Rs", period: "per annum",    desc: "Account upkeep",      free: false },
      { label: "DP TRANSFER",        num: "25",  rs: "Rs", period: "per transfer", desc: "Market transactions", free: false },
      { label: "TRADING ACCOUNT",    num: "0",   rs: "Rs", period: "always free",  desc: "Start trading today", free: true  },
    ],
    navLabel: "No paperwork",
  },
  {
    num: "02 / 03",
    eyebrow: "Expert guidance · IPO alerts · Research",
    titleBefore: "No More",
    titleEm: "Guessing the Market",
    desc: "Investors were flying blind — no research, no alerts, no one to call. We changed what support looks like.",
    pins: [
      { icon: "chart", before: "Picking stocks based on rumours",      after: "Analyst reports & curated watchlists in your inbox" },
      { icon: "bell",  before: "Constantly missing IPO subscriptions", after: "One-tap IPO apply with auto-payment, never miss one" },
      { icon: "phone", before: "No support during live market hours",  after: "Dedicated broker line open every trading session" },
    ],
    cta: "Start Trading", cta2: "View services",
    quote: {
      initials: "SM", name: "Suman M.", meta: "Engineer · Kathmandu",
      text: "My portfolio is up 34% this year. Having someone to actually call during market hours changed everything for me.",
      tag: "Portfolio growth",
    },
    prices: [
      { label: "LISTED COMPANIES", num: "300+", rs: "", period: "on NEPSE",  desc: "Full market access",   free: false },
      { label: "DAILY TRADES",     num: "48K",  rs: "", period: "executed",  desc: "High-volume platform", free: false },
      { label: "AVG. GROWTH",      num: "34%",  rs: "", period: "this year", desc: "Client portfolios",    free: false },
      { label: "SUPPORT",          num: "24/7", rs: "", period: "every day", desc: "All trading hours",    free: false },
    ],
    navLabel: "Smarter trading",
  },
  {
    num: "03 / 03",
    eyebrow: "Available across Nepal · Mobile-first",
    titleBefore: "Trade from",
    titleEm: "Anywhere in Nepal",
    desc: "Outside the valley, financial services felt out of reach. We built for every district, not just Kathmandu.",
    pins: [
      { icon: "globe", before: "Had to visit Kathmandu for account problems", after: "Manage everything digitally from your district" },
      { icon: "phone", before: "App crashed during peak trading hours",        after: "Rock-solid app built for NEPSE, with offline fallback" },
      { icon: "map",   before: "No trusted broker outside major cities",       after: "SEBON licensed, 10+ yrs of trust, 6+ city offices" },
    ],
    cta: "Download App", cta2: "Find a branch",
    quote: {
      initials: "AP", name: "Anita P.", meta: "Business owner · Biratnagar",
      text: "I trade every morning from my shop now. Living outside the valley no longer means missing out on the market.",
      tag: "Remote trading",
    },
    prices: [
      { label: "CITIES COVERED",  num: "6+",    rs: "", period: "branches",     desc: "Across Nepal",     free: false },
      { label: "YEARS IN MARKET", num: "15+",   rs: "", period: "experience",   desc: "Trusted broker",   free: false },
      { label: "APP UPTIME",      num: "99.9%", rs: "", period: "guaranteed",   desc: "Always available", free: false },
      { label: "APP RATING",      num: "4.8★",  rs: "", period: "store rating", desc: "Top-rated app",    free: false },
    ],
    navLabel: "Trade anywhere",
  },
];

// ─── Icon colour palette ──────────────────────────────────────────────────────

const IC: [string, string][] = [
  ["#f0fdf9", "#37D200"],
  ["#eff6ff", "#3b82f6"],
  ["#f5f3ff", "#8b5cf6"],
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function Icon({ name }: { name: IconKey }) {
  const p = { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none" as const };
  switch (name) {
    case "doc":    return <svg {...p}><path d="M4 2h7l4 4v10a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 2v4h4M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case "tag":    return <svg {...p}><path d="M2 2h6l8 8-6 6-8-8V2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="6" cy="6" r="1" fill="currentColor"/></svg>;
    case "shield": return <svg {...p}><path d="M9 2l6 2.5v5C15 13 12.5 16 9 17 5.5 16 3 13 3 9.5v-5L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6.5 9l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "chart":  return <svg {...p}><path d="M2 14l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 16h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case "bell":   return <svg {...p}><path d="M9 2a5 5 0 00-5 5v3l-1.5 2h13L14 10V7a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7.5 15a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case "phone":  return <svg {...p}><rect x="5" y="2" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="13.5" r="0.75" fill="currentColor"/></svg>;
    case "globe":  return <svg {...p}><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M2 9h14M9 2c-2 2-3 4-3 7s1 5 3 7M9 2c2 2 3 4 3 7s-1 5-3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case "map":    return <svg {...p}><path d="M9 2a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="9" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>;
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const s = slides[cur];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&display=swap');

        /* ── Section wrapper ── */
        .is-section {
          width: 100%;
          padding: 40px 24px;
          background: #f0f4f8;
          box-sizing: border-box;
        }

        /* ── Card ── */
        .is-wrap {
          font-family: 'Instrument Sans', sans-serif;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e8edf5;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          box-shadow: 0 4px 40px rgba(0,0,0,0.07);
        }

        /* ── Two-column grid (desktop) ── */
        .is-body {
          display: grid;
          grid-template-columns: 55% 45%;
          min-height: 500px;
        }

        /* ════ LEFT ════ */
        .is-left { padding: 52px 40px 44px 52px; display: flex; flex-direction: column; }

        .is-slide-num {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 11px; font-weight: 600; color: #94a3b8;
          letter-spacing: 3px; margin-bottom: 24px;
          display: flex; align-items: center; gap: 10px;
        }
        .is-slide-num::after {
          content: ''; flex: 1; height: 1px;
          background: #e8edf5; max-width: 48px;
        }

        .is-eyebrow { display: inline-flex; align-items: center; gap: 7px; margin-bottom: 16px; }
        .is-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #1a9e72;
          animation: is-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes is-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.4); opacity: 0.6; }
        }
        .is-eyebrow-text { font-size: 12px; font-weight: 500; color: #1a9e72; letter-spacing: 0.5px; }

        .is-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 40px; font-weight: 800; line-height: 1.08;
          color: #0b1526; margin-bottom: 16px; letter-spacing: -1px;
        }
        .is-title em { color: #37D200; font-style: normal; }

        .is-desc { font-size: 14px; color: #64748b; line-height: 1.7; margin-bottom: 28px; max-width: 360px; }

        /* Pins */
        .is-pins           { display: flex; flex-direction: column; margin-bottom: 32px; border: 1px solid #e8edf5; border-radius: 14px; overflow: hidden; }
        .is-pin            { display: flex; align-items: center; gap: 14px; padding: 14px 18px; border-bottom: 1px solid #f1f5fb; transition: background 0.2s; }
        .is-pin:last-child { border-bottom: none; }
        .is-pin:hover      { background: #f8faff; }
        .is-pin-icon  { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .is-pin-text  { flex: 1; min-width: 0; }
        .is-pin-before { font-size: 11px; color: #94a3b8; text-decoration: line-through; text-decoration-color: #fca5a5; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .is-pin-after  { font-size: 13px; font-weight: 500; color: #0b1526; }
        .is-pin-arrow  { width: 20px; height: 20px; border-radius: 6px; background: #f1f5fb; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        /* CTA */
        .is-cta-row { display: flex; gap: 10px; flex-wrap: wrap; }
        .is-btn-main {
          background: #0b1526; color: #fff; border: none; border-radius: 10px;
          padding: 13px 28px; font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700; font-size: 13px; cursor: pointer;
          letter-spacing: 0.2px; transition: all 0.2s;
        }
        .is-btn-main:hover { background: #1e3a5f; transform: translateY(-1px); }
        .is-btn-sec {
          background: #fff; color: #0b1526; border: 1.5px solid #e2e8f0;
          border-radius: 10px; padding: 12px 22px; font-size: 13px;
          font-weight: 500; cursor: pointer; transition: all 0.2s;
          display: flex; align-items: center; gap: 7px;
        }
        .is-btn-sec:hover { border-color: #1a9e72; color: #1a9e72; }

        /* ════ RIGHT ════ */
        .is-right {
          background: #f8faff; border-left: 1px solid #e8edf5;
          padding: 32px 36px 32px 28px;
          display: flex; flex-direction: column; gap: 14px; justify-content: center;
        }

        /* Testimonial card */
        .is-tcard        { background: #fff; border: 1px solid #e8edf5; border-radius: 16px; padding: 22px; position: relative; overflow: hidden; }
        .is-tcard-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: #1a9e72; }
        .is-tcard-hdr    { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px; }
        .is-tcard-user   { display: flex; align-items: center; gap: 11px; }
        .is-avatar {
          width: 40px; height: 40px; border-radius: 50%; background: #0b1526;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 700; font-size: 13px; color: #fff; flex-shrink: 0;
        }
        .is-uname { font-family: 'Bricolage Grotesque', sans-serif; font-size: 14px; font-weight: 700; color: #0b1526; }
        .is-umeta { font-size: 11px; color: #94a3b8; margin-top: 2px; }
        .is-stars { display: flex; gap: 2px; }
        .is-quote {
          font-size: 13px; line-height: 1.72; color: #475569;
          font-style: italic; position: relative; padding-left: 14px;
        }
        .is-quote::before {
          content: ''; position: absolute; left: 0; top: 4px; bottom: 4px;
          width: 2px; background: #1a9e72; border-radius: 2px;
        }
        .is-tag-row { margin-top: 12px; }
        .is-tag { background: #f0fdf9; border: 1px solid #a7f3d0; border-radius: 6px; padding: 3px 10px; font-size: 11px; font-weight: 500; color: #065f46; }

        /* Price grid */
        .is-price-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .is-price-card { background: #fff; border: 1px solid #e8edf5; border-radius: 12px; padding: 14px 16px; position: relative; overflow: hidden; }
        .is-price-card.free { border-color: #bbf7d0; background: #f0fdf9; }
        .is-pc-label   { font-size: 10px; font-weight: 600; color: #94a3b8; letter-spacing: 0.8px; margin-bottom: 6px; }
        .is-price-card.free .is-pc-label { color: #059669; }
        .is-pc-amount  { display: flex; align-items: baseline; gap: 3px; margin-bottom: 3px; }
        .is-pc-rs      { font-family: 'Bricolage Grotesque', sans-serif; font-size: 12px; font-weight: 700; color: #64748b; }
        .is-price-card.free .is-pc-rs { color: #059669; }
        .is-pc-num     { font-family: 'Bricolage Grotesque', sans-serif; font-size: 26px; font-weight: 800; color: #0b1526; line-height: 1; }
        .is-price-card.free .is-pc-num { color: #059669; }
        .is-pc-period  { font-size: 10px; color: #94a3b8; font-weight: 500; }
        .is-price-card.free .is-pc-period { color: #059669; }
        .is-pc-desc    { font-size: 11px; color: #64748b; margin-top: 2px; line-height: 1.4; }
        .is-free-badge {
          position: absolute; top: 10px; right: 10px;
          background: #059669; color: #fff; font-size: 9px;
          font-weight: 700; letter-spacing: 0.8px; padding: 2px 7px; border-radius: 4px;
        }

        /* Nav bar */
        .is-nav            { display: flex; align-items: center; border-top: 1px solid #f1f5fb; }
        .is-nav-btn        { flex: 1; padding: 16px; background: none; border: none; border-right: 1px solid #f1f5fb; cursor: pointer; display: flex; flex-direction: column; gap: 5px; transition: background 0.2s; text-align: left; }
        .is-nav-btn:last-child { border-right: none; }
        .is-nav-btn:hover  { background: #f8faff; }
        .is-nav-btn.active { background: #f0fdf9; }
        .is-nav-bar        { height: 3px; border-radius: 2px; background: #e2e8f0; transition: background 0.3s; }
        .is-nav-btn.active .is-nav-bar { background: #1a9e72; }
        .is-nav-label      { font-size: 11px; color: #94a3b8; font-weight: 500; }
        .is-nav-btn.active .is-nav-label { color: #1a9e72; }

        @keyframes is-fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .is-anim { animation: is-fadeIn 0.4s ease both; }

        /* ══════════════════════════════════════════════
           MOBILE RESPONSIVE — 768px and below
        ══════════════════════════════════════════════ */
        @media (max-width: 768px) {
          /* Reduce section padding on mobile */
          .is-section {
            padding: 20px 12px;
          }

          /* Stack panels vertically */
          .is-body {
            grid-template-columns: 1fr;
            min-height: unset;
          }

          /* Tighten left panel padding */
          .is-left {
            padding: 28px 20px 24px;
          }

          /* Reduce slide number margin */
          .is-slide-num {
            margin-bottom: 16px;
          }

          /* Scale down title for mobile */
          .is-title {
            font-size: 28px;
            letter-spacing: -0.5px;
            margin-bottom: 12px;
          }

          /* Full-width description */
          .is-desc {
            max-width: 100%;
            margin-bottom: 20px;
          }

          /* Tighter pins */
          .is-pins {
            margin-bottom: 24px;
          }
          .is-pin {
            padding: 12px 14px;
            gap: 10px;
          }
          .is-pin-before {
            white-space: normal;
          }
          .is-pin-after {
            font-size: 12px;
          }

          /* Stack CTA buttons full-width */
          .is-cta-row {
            flex-direction: column;
            gap: 8px;
          }
          .is-btn-main {
            width: 100%;
            text-align: center;
            padding: 14px 20px;
          }
          .is-btn-sec {
            width: 100%;
            justify-content: center;
            padding: 13px 20px;
          }

          /* Right panel: remove left border, add top border, tighten padding */
          .is-right {
            border-left: none;
            border-top: 1px solid #e8edf5;
            padding: 20px 20px 24px;
            gap: 12px;
          }

          /* Testimonial: tighten padding */
          .is-tcard {
            padding: 16px;
          }

          /* Price grid: 2 columns still OK on 768px */
          .is-price-grid {
            gap: 8px;
          }
          .is-price-card {
            padding: 12px 12px;
          }
          .is-pc-num {
            font-size: 22px;
          }

          /* Nav: tighter padding and smaller labels */
          .is-nav-btn {
            padding: 12px 8px;
            gap: 4px;
          }
          .is-nav-label {
            font-size: 10px;
          }

          /* Card border radius smaller on small screens */
          .is-wrap {
            border-radius: 16px;
          }
        }

        /* ══════════════════════════════════════════════
           SMALL MOBILE — 480px and below
        ══════════════════════════════════════════════ */
        @media (max-width: 480px) {
          .is-section {
            padding: 16px 10px;
          }

          .is-left {
            padding: 24px 16px 20px;
          }

          /* Further reduce title */
          .is-title {
            font-size: 24px;
          }

          /* Eyebrow text wraps gracefully */
          .is-eyebrow {
            flex-wrap: wrap;
          }
          .is-eyebrow-text {
            font-size: 11px;
          }

          /* Pin icon smaller */
          .is-pin-icon {
            width: 30px;
            height: 30px;
            border-radius: 8px;
          }

          /* Price grid: single column on very small phones */
          .is-price-grid {
            grid-template-columns: 1fr 1fr;
          }
          .is-pc-num {
            font-size: 20px;
          }
          .is-pc-label {
            font-size: 9px;
            letter-spacing: 0.5px;
          }

          /* Hide free badge to save space */
          .is-free-badge {
            font-size: 8px;
            padding: 2px 5px;
          }

          /* Tighter testimonial */
          .is-uname { font-size: 13px; }
          .is-quote { font-size: 12px; }

          /* Nav labels can be very short on tiny screens */
          .is-nav-btn {
            padding: 10px 6px;
          }
          .is-nav-label {
            font-size: 9px;
          }
        }

        /* ══════════════════════════════════════════════
           EXTRA SMALL — 360px and below
        ══════════════════════════════════════════════ */
        @media (max-width: 360px) {
          .is-title {
            font-size: 22px;
          }

          /* Single column price grid on tiny screens */
          .is-price-grid {
            grid-template-columns: 1fr;
          }

          .is-pin {
            padding: 10px 12px;
            gap: 8px;
          }

          .is-pin-arrow {
            display: none;
          }
        }
      `}</style>

      {/* Outer section */}
      <section className="is-section">

        {/* Card container */}
        <div className="is-wrap">
          <div className="is-body">

            {/* ════ LEFT PANEL ════ */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${cur}`}
                className="is-left"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Slide number */}
                <div className="is-slide-num">{s.num}</div>

                {/* Eyebrow */}
                <div className="is-eyebrow">
                  <span className="is-eyebrow-dot" />
                  <span className="is-eyebrow-text">{s.eyebrow}</span>
                </div>

                {/* Title */}
                <h1 className="is-title">
                  {s.titleBefore}
                  <br />
                  <em>{s.titleEm}</em>
                </h1>

                {/* Description */}
                <p className="is-desc">{s.desc}</p>

                {/* Pain-point pins */}
                <div className="is-pins">
                  {s.pins.map((pin, pi) => (
                    <div className="is-pin" key={pi}>
                      <div className="is-pin-icon" style={{ background: IC[pi][0], color: IC[pi][1] }}>
                        <Icon name={pin.icon} />
                      </div>
                      <div className="is-pin-text">
                        <p className="is-pin-before">{pin.before}</p>
                        <p className="is-pin-after">{pin.after}</p>
                      </div>
                      <div className="is-pin-arrow">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="is-cta-row">
                  <button className="is-btn-main">{s.cta}</button>
                  <button className="is-btn-sec">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6.5" stroke="#1a9e72" strokeWidth="1.2" />
                      <path d="M6.5 5.5L10.5 8l-4 2.5z" fill="#1a9e72" />
                    </svg>
                    {s.cta2}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ════ RIGHT PANEL ════ */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${cur}`}
                className="is-right"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              >
                {/* Testimonial card */}
                <div className="is-tcard">
                  <div className="is-tcard-accent" />
                  <div className="is-tcard-hdr">
                    <div className="is-tcard-user">
                      <div className="is-avatar">{s.quote.initials}</div>
                      <div>
                        <div className="is-uname">{s.quote.name}</div>
                        <div className="is-umeta">{s.quote.meta}</div>
                      </div>
                    </div>
                    <div className="is-stars">
                      {Array(5).fill(0).map((_, i) => (
                        <svg key={i} width="13" height="13" viewBox="0 0 13 13">
                          <path d="M6.5 1l1.5 3 3.3.48-2.4 2.34.57 3.3L6.5 8.75 3.53 10.12l.57-3.3L1.7 4.48 5 4z" fill="#f59e0b" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="is-quote">{s.quote.text}</p>
                  <div className="is-tag-row">
                    <span className="is-tag">{s.quote.tag}</span>
                  </div>
                </div>

                {/* Price / stat cards */}
                <div className="is-price-grid">
                  {s.prices.map((p, i) => (
                    <div key={i} className={`is-price-card${p.free ? " free" : ""}`}>
                      {p.free && <div className="is-free-badge">FREE</div>}
                      <div className="is-pc-label">{p.label}</div>
                      <div className="is-pc-amount">
                        {p.rs && <span className="is-pc-rs">{p.rs}</span>}
                        <span className="is-pc-num">{p.num}</span>
                      </div>
                      <div className="is-pc-period">{p.period}</div>
                      <div className="is-pc-desc">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* ════ NAV BAR ════ */}
          <div className="is-nav">
            {slides.map((slide, i) => (
              <button
                key={i}
                className={`is-nav-btn${i === cur ? " active" : ""}`}
                onClick={() => setCur(i)}
              >
                <div className="is-nav-bar" />
                <span className="is-nav-label">{slide.navLabel}</span>
              </button>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}