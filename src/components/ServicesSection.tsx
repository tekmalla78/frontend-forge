"use client";

import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "📈",
    number: "01",
    title: "Stock Brokerage",
    desc: "Execute buy and sell orders on NEPSE with real-time market access, competitive brokerage rates, and instant trade confirmation.",
    accent: "#2563eb",
    accentLight: "#eff6ff",
    tag: "Equities",
    href: "/services/stock-brokerage", // ← REPLACE WITH YOUR SLUG
  },
  {
    icon: "🏦",
    number: "02",
    title: "Depository Services (DP)",
    desc: "Open and manage your DEMAT account. Receive IPO allotments, transfer shares digitally — all CDSC-linked.",
    accent: "#16a34a",
    accentLight: "#f0fdf4",
    tag: "DEMAT",
    href: "/services/depository-services", // ← REPLACE WITH YOUR SLUG
  },
  {
    icon: "💳",
    number: "03",
    title: "Margin Trading",
    desc: "Amplify your purchasing power with our margin facility. Borrow against your portfolio with transparent interest rates.",
    accent: "#c9a84c",
    accentLight: "#fefce8",
    tag: "Leverage",
    href: "/services/margin-trading", // ← REPLACE WITH YOUR SLUG
  },
  {
    icon: "🎯",
    number: "04",
    title: "Portfolio Management",
    desc: "SEBON-certified advisors manage a customized portfolio aligned to your risk appetite with monthly reports.",
    accent: "#7c3aed",
    accentLight: "#f5f3ff",
    tag: "Advisory",
    href: "/services/portfolio-management", // ← REPLACE WITH YOUR SLUG
  },
  {
    icon: "📋",
    number: "05",
    title: "IPO / FPO Application",
    desc: "Apply for upcoming IPOs & FPOs online without visiting a branch. Get automatic allotment to your DEMAT.",
    accent: "#0891b2",
    accentLight: "#ecfeff",
    tag: "Primary Market",
    href: "/services/ipo-fpo", // ← REPLACE WITH YOUR SLUG
  },
  {
    icon: "📚",
    number: "06",
    title: "Research & Advisory",
    desc: "Daily market reports, company fundamentals, sector analysis, and expert stock recommendations from our team.",
    accent: "#dc2626",
    accentLight: "#fef2f2",
    tag: "Insights",
    href: "/services/research-advisory", // ← REPLACE WITH YOUR SLUG
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const headVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Card ─────────────────────────────────────────────────────────────────────

function ServiceCard({ svc, i }: { svc: (typeof services)[0]; i: number }) {
  return (
    <motion.div variants={cardVariants} style={{ position: "relative" }}>
      <Link
        to={svc.href}
        style={{ textDecoration: "none", display: "block" }}
      >
        <div className="svc-card" style={{ "--accent": svc.accent, "--accent-lt": svc.accentLight } as React.CSSProperties}>
          {/* Top row: number + tag */}
          <div className="svc-top">
            <span className="svc-number">{svc.number}</span>
            <span className="svc-tag" style={{ color: svc.accent, background: svc.accentLight }}>
              {svc.tag}
            </span>
          </div>

          {/* Icon */}
          <div className="svc-icon-wrap" style={{ background: svc.accentLight }}>
            <span className="svc-icon">{svc.icon}</span>
          </div>

          {/* Text */}
          <h3 className="svc-title">{svc.title}</h3>
          <p className="svc-desc">{svc.desc}</p>

          {/* CTA */}
          <div className="svc-cta" style={{ color: svc.accent }}>
            <span>Explore Service</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Bottom accent line */}
          <div className="svc-line" style={{ background: svc.accent }} />
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        #services {
          font-family: 'DM Sans', sans-serif;
          background-color: #edf0f8;
          background-image:
            linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px);
          background-size: 72px 72px;
          padding: 52px 20px;
          overflow: hidden;
          position: relative;
        }

        .svc-inner { max-width: 1280px; margin: 0 auto; position: relative; }

        /* ── Header ── */
        .svc-header { margin-bottom: 32px; }
        .svc-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: #2563eb;
          margin-bottom: 10px;
        }
        .svc-eyebrow::before {
          content: '';
          display: block; width: 24px; height: 2px;
          background: #2563eb; border-radius: 2px;
        }
        .svc-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 800;
          color: #0a1628;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin-bottom: 10px;
        }
        .svc-heading span { color: #37D200; }
        .svc-subtext {
          font-size: 14px;
          color: #4a5578;
          line-height: 1.65;
          max-width: 480px;
        }

        /* ── Grid ── */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        /* ── Card ── */
        .svc-card {
          background: #fff;
          border: 1.5px solid #e8edf7;
          border-radius: 16px;
          padding: 18px 18px 16px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .svc-card:hover {
          border-color: var(--accent);
          box-shadow: 0 6px 28px rgba(0,0,0,.08);
          transform: translateY(-3px);
        }
        .svc-card:hover .svc-line { transform: scaleX(1); }
        .svc-card:hover .svc-cta svg { transform: translateX(4px); }

        /* Top row */
        .svc-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .svc-number {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #c8d0e0;
          letter-spacing: 0.05em;
        }
        .svc-tag {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 20px;
        }

        /* Icon */
        .svc-icon-wrap {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 12px;
          transition: transform 0.3s ease;
        }
        .svc-card:hover .svc-icon-wrap { transform: scale(1.08); }
        .svc-icon { font-size: 19px; line-height: 1; }

        /* Text */
        .svc-title {
          font-family: 'Syne', sans-serif;
          font-size: 14.5px;
          font-weight: 800;
          color: #0a1628;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }
        .svc-desc {
          font-size: 12.5px;
          color: #4a5578;
          line-height: 1.65;
          flex: 1;
          margin-bottom: 14px;
        }

        /* CTA */
        .svc-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 600;
          margin-top: auto;
        }
        .svc-cta svg { transition: transform 0.25s ease; }

        /* Bottom accent line */
        .svc-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(.4,0,.2,1);
          border-radius: 0 0 16px 16px;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          #services { padding: 40px 14px; }
          .svc-header { margin-bottom: 24px; }
          .svc-card { padding: 14px 14px 12px; }
          .svc-icon-wrap { width: 34px; height: 34px; border-radius: 8px; }
          .svc-icon { font-size: 16px; }
          .svc-title { font-size: 13px; }
          .svc-desc { font-size: 11.5px; }
        }
      `}</style>

      <section id="services">
        <div className="svc-inner" ref={ref}>

          {/* ── Header ── */}
          <motion.div
            className="svc-header"
            variants={headVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="svc-eyebrow">What We Offer</div>
            <h2 className="svc-heading">
              Our Core <span>Services</span>
            </h2>
            <p className="svc-subtext">
              A full suite of investment services built for every type of investor — from first-time buyers to seasoned traders.
            </p>
          </motion.div>

          {/* ── Grid ── */}
          <motion.div
            className="svc-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} svc={svc} i={i} />
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}