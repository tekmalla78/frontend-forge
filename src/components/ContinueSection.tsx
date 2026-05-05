"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  name: string;
  desc: string;
  image: string; // pass your image path/URL here
  alt: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES: Feature[] = [
  {
    name: "Margin Lending Facility",
    desc: "Boost your buying power with margin lending—invest in stocks by borrowing funds at competitive interest rates, as per NEPSE regulations.",
    image: "/src/assets/1zero.png",
    alt: "Margin Lending Facility",
  },
  {
    name: "Portfolio Advisory",
    desc: "Access ready-to-invest, well-researched portfolios built by experts, empowering you to make informed investment decisions.",
    image: "/src/assets/2port.webp",
    alt: "Portfolio Advisory",
  },
  {
    name: "Offline Order Placement",
    desc: "Place buy/sell orders for stocks after market hours, from 3:00 PM to before 10:30 AM.",
    image: "/src/assets/amo.png",
    alt: "Offline Order Placement",
  },
  {
    name: "Client Login",
    desc: "Enjoy real-time charting powered by advanced indicators with fundamentals and preview the account statement.",
    image: "/src/assets/client.png",
    alt: "Client Login",
  },
  {
    name: "Fast Order Placement",
    desc: "Execute trades with speed and precision, giving you the edge in dynamic markets.",
    image: "/src/assets/5fast.webp",
    alt: "Fast Order Placement",
  },
  {
    name: "Trade with TradingView",
    desc: "Place multiple orders together using Basket Orders on TradingView, seamlessly integrated.",
    image: "/src/assets/6trading.webp",
    alt: "Trade with TradingView",
  },
];

const TOTAL = FEATURES.length;
const VISIBLE = 3;
const DURATION = 3_000; // ms per slide

// ─── Component ────────────────────────────────────────────────────────────────

export default function WhyUsSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState<number[]>(Array(TOTAL).fill(0));
  const [trackOffset, setTrackOffset] = useState(0);

  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const currentRef = useRef(current);
  const pausedRef = useRef(false);
  const itemHeightRef = useRef(92);
  const featRef = useRef<HTMLDivElement>(null);

  // Keep ref in sync
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  // Measure item height after mount
  useEffect(() => {
    if (featRef.current) {
      const first = featRef.current.querySelector<HTMLDivElement>(".feat-item");
      if (first) itemHeightRef.current = first.getBoundingClientRect().height + 4;
    }
  }, []);

  const getTrackOffset = useCallback((idx: number) => {
    let winStart = idx - 1;
    if (winStart < 0) winStart = 0;
    if (winStart + VISIBLE > TOTAL) winStart = TOTAL - VISIBLE;
    return winStart * itemHeightRef.current;
  }, []);

  const selectFeature = useCallback(
    (idx: number) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;

      setCurrent(idx);
      setProgress(Array(TOTAL).fill(0));
      setTrackOffset(getTrackOffset(idx));

      const tick = (ts: number) => {
        if (pausedRef.current) {
          rafRef.current = requestAnimationFrame(tick);
          return;
        }
        if (!startRef.current) startRef.current = ts;
        const pct = Math.min(((ts - startRef.current) / DURATION) * 100, 100);

        setProgress((prev) => {
          const next = [...prev];
          next[idx] = pct;
          return next;
        });

        if (pct < 100) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          selectFeature((idx + 1) % TOTAL);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    },
    [getTrackOffset]
  );

  // Start on mount
  useEffect(() => {
    selectFeature(0);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = () => {
    pausedRef.current = true;
  };
  const handleMouseLeave = () => {
    pausedRef.current = false;
    startRef.current = null; // reset timer on resume
  };

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        
        @media (max-width: 768px) {
          .mobile-hidden { display: none !important; }
          .mobile-visible { display: block !important; }

          .mob-header { text-align: center; margin-bottom: 24px; }

          .mob-image-wrap {
            width: 100%;
            height: 260px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            position: relative;
            flex-shrink: 0;
          }
          .mob-image {
            max-width: 100%;
            max-height: 260px;
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: 12px;
            transition: opacity 0.4s ease;
          }
          .mob-feat-text {
            text-align: center;
            padding: 0 8px;
            margin-bottom: 20px;
            height: 110px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            overflow: hidden;
          }
          .mob-feat-name {
            font-family: 'Syne', sans-serif;
            font-size: 18px;
            font-weight: 800;
            color: #0a1628;
            margin-bottom: 8px;
            letter-spacing: -0.01em;
            line-height: 1.25;
            flex-shrink: 0;
          }
          .mob-feat-desc {
            font-size: 13px;
            color: #4a5578;
            line-height: 1.6;
            max-width: 340px;
            margin: 0 auto;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .mob-dots {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 4px;
          }
          .mob-dot {
            height: 4px;
            border-radius: 2px;
            overflow: hidden;
            cursor: pointer;
          }
          .mob-dot-fill {
            height: 100%;
            background: #2563eb;
            border-radius: 2px;
            transition: width 0.05s linear;
          }
        }
      `}</style>

      <section
        style={styles.section}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={styles.wrapper}>
          {/* Desktop Version */}
          <div style={styles.layout} className="mobile-hidden">
            {/* ══ MOCKUP AREA (right) ══ */}
            <div style={styles.mockupArea}>
              {FEATURES.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.mockupPanel,
                    opacity: i === current ? 1 : 0,
                    transform:
                      i === current
                        ? "translateX(0) scale(1)"
                        : "translateX(-24px) scale(0.97)",
                    pointerEvents: i === current ? "auto" : "none",
                  }}
                >
                  <img
                    src={feat.image}
                    alt={feat.alt}
                    style={styles.mockImg}
                  />
                </div>
              ))}
            </div>

            {/* ══ FEATURES COLUMN (left) ══ */}
            <div style={styles.featuresCol}>
              {/* Label */}
              <span style={styles.label}>Why Imperial Securities?</span>

              {/* Heading */}
              <h2 style={styles.heading}>
                Continue Your Journey{" "}
                <span style={styles.headingGold}>With Us</span>
              </h2>

              {/* Subtitle */}
              <p style={styles.subtitle}>
                Experience seamless investing with Imperial Securities. Access
                the industry&apos;s best tools and expert insights to achieve
                your financial goals.
              </p>

              {/* Sliding feature window */}
              <div style={styles.window}>
                <div
                  ref={featRef}
                  style={{
                    ...styles.track,
                    transform: `translateY(-${trackOffset}px)`,
                  }}
                >
                  {FEATURES.map((feat, i) => (
                    <div
                      key={i}
                      className="feat-item"
                      onClick={() => selectFeature(i)}
                      style={{
                        ...styles.featItem,
                        background:
                          i === current ? "#eef2ff" : "transparent",
                        boxShadow:
                          i === current
                            ? "0 2px 16px rgba(37,99,235,.08)"
                            : "none",
                      }}
                    >
                      {/* Left progress bar */}
                      <div
                        style={{
                          ...styles.progressBar,
                          background: i === current ? "#e0e7ff" : "transparent",
                        }}
                      >
                        <div
                          style={{
                            ...styles.progressFill,
                            height: `${progress[i]}%`,
                          }}
                        />
                      </div>

                      <div
                        style={{
                          ...styles.featName,
                          color: i === current ? "#2563eb" : "#0a1628",
                        }}
                      >
                        {feat.name}
                      </div>
                      <div style={styles.featDesc}>{feat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress dots */}
              <div style={styles.dots}>
                {FEATURES.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => selectFeature(i)}
                    style={{
                      ...styles.dot,
                      background: i === current ? "#bfdbfe" : "#dde3f0",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        ...styles.dotFill,
                        width: `${progress[i]}%`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="mobile-visible" style={{ display: "none" }}>

            {/* Header — centered */}
            <div className="mob-header">
              <span style={styles.label}>Why Imperial Securities?</span>
              <h2 style={{ ...styles.heading, textAlign: "center" }}>
                Continue Your Journey{" "}
                <span style={styles.headingGold}>With Us</span>
              </h2>
              <p style={{ ...styles.subtitle, textAlign: "center", maxWidth: "100%", margin: "0 auto" }}>
                Experience seamless investing with Imperial Securities. Access the industry's best tools and expert insights to achieve your financial goals.
              </p>
            </div>

            {/* Current feature image */}
            <div className="mob-image-wrap">
              {FEATURES.map((feat, i) => (
                <img
                  key={i}
                  src={feat.image}
                  alt={feat.alt}
                  className="mob-image"
                  style={{
                    position: i === 0 ? "relative" : "absolute",
                    opacity: i === current ? 1 : 0,
                    pointerEvents: i === current ? "auto" : "none",
                  }}
                />
              ))}
            </div>

            {/* Feature name + description */}
            <div className="mob-feat-text">
              <div className="mob-feat-name">{FEATURES[current].name}</div>
              <p className="mob-feat-desc">{FEATURES[current].desc}</p>
            </div>

            {/* Dot indicators */}
            <div className="mob-dots">
              {FEATURES.map((_, i) => (
                <div
                  key={i}
                  className="mob-dot"
                  onClick={() => selectFeature(i)}
                  style={{
                    width: i === current ? 28 : 12,
                    background: i === current ? "#bfdbfe" : "#dde3f0",
                    transition: "width 0.3s ease, background 0.3s ease",
                  }}
                >
                  <div
                    className="mob-dot-fill"
                    style={{ width: i === current ? `${progress[i]}%` : "0%" }}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  section: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#ffffff",
    color: "#0a1628",
    padding: "48px 20px",
    width: "100%",
  },
  wrapper: {
    maxWidth: 1180,
    width: "100%",
    margin: "0 auto",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: 64,
    alignItems: "center",
  },

  // ── Mockup ──
  mockupArea: {
    position: "relative",
    height: 400,
    order: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mockupPanel: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition:
      "opacity 0.55s cubic-bezier(.4,0,.2,1), transform 0.55s cubic-bezier(.4,0,.2,1)",
  },
  mockImg: {
    maxWidth: "90%",
    maxHeight: "90%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    borderRadius: 16,
    display: "block",
  },

  // ── Features column ──
  featuresCol: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    order: 1,
  },
  label: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#2563eb",
    background: "#dbeafe",
    padding: "5px 14px",
    borderRadius: 20,
    marginBottom: 12,
    width: "fit-content",
  },
  heading: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(22px, 2.6vw, 36px)",
    fontWeight: 800,
    color: "#0a1628",
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    marginBottom: 8,
  },
  headingGold: {
    color: "#37D200",
  },
  subtitle: {
    fontSize: 13.5,
    color: "#4a5578",
    lineHeight: 1.6,
    marginBottom: 16,
    maxWidth: 400,
  },

  // ── Sliding window ──
  window: {
    overflow: "hidden",
    height: 276, // 3 × ~88px + 2 × 4px gap
    position: "relative",
  },
  track: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
  },
  featItem: {
    borderRadius: 12,
    padding: "16px 18px",
    cursor: "pointer",
    transition: "background 0.3s, box-shadow 0.3s",
    position: "relative",
    overflow: "hidden",
    flexShrink: 0,
  },
  progressBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    borderRadius: "3px 0 0 3px",
    overflow: "hidden",
  },
  progressFill: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    background: "#2563eb",
    borderRadius: 3,
    transition: "height 0.05s linear",
  },
  featName: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 4,
    letterSpacing: "-0.01em",
  },
  featDesc: {
    fontSize: 12.5,
    color: "#4a5578",
    lineHeight: 1.6,
    maxWidth: 380,
  },

  // ── Dots ──
  dots: {
    display: "flex",
    gap: 8,
    marginTop: 20,
  },
  dot: {
    width: 28,
    height: 4,
    borderRadius: 2,
    overflow: "hidden",
    cursor: "pointer",
  },
  dotFill: {
    height: "100%",
    background: "#2563eb",
    borderRadius: 2,
    transition: "width 0.05s linear",
  },
};

// ─── Responsive Styles (added to the component) ───────────────────────────────

const responsiveStyles = `
  @media (max-width: 1024px) {
    .section { padding: 40px 20px; }
    .layout { grid-template-columns: 1fr; gap: 40px; }
    .mockupArea { height: 350px; order: 1; }
    .heading { font-size: clamp(20px, 2.4vw, 32px); }
    .subtitle { font-size: 13px; }
    .window { height: 240px; }
    .featItem { padding: 14px 16px; }
    .featDesc { font-size: 12px; }
  }

  @media (max-width: 768px) {
    .section { padding: 32px 16px; }
    .layout { grid-template-columns: 1fr; gap: 24px; }
    .mockupArea { height: 280px; order: 2; }
    .mockImg { max-width: 85%; max-height: 85%; }
    .heading { font-size: clamp(18px, 2.2vw, 28px); }
    .subtitle { font-size: 12.5px; max-width: 100%; }
    .featuresCol { gap: 2px; }
    .window { height: 220px; }
    .featItem { padding: 12px 14px; }
    .featName { font-size: 13px; }
    .featDesc { font-size: 11.5px; max-width: 100%; }
    .label { font-size: 10px; padding: 4px 12px; margin-bottom: 8px; }
  }

  @media (max-width: 480px) {
    .section { padding: 24px 12px; }
    .mockupArea { height: 240px; }
    .mockImg { max-width: 80%; max-height: 80%; }
    .heading { font-size: clamp(16px, 2vw, 24px); margin-bottom: 6px; }
    .subtitle { font-size: 12px; margin-bottom: 12px; }
    .window { height: 200px; }
    .featItem { padding: 10px 12px; border-radius: 8px; }
    .featName { font-size: 12px; margin-bottom: 2px; }
    .featDesc { font-size: 11px; line-height: 1.5; }
    .progressBar { width: 2px; }
    .dots { gap: 6px; margin-top: 16px; }
    .dot { width: 24px; height: 3px; }
    .label { font-size: 9px; padding: 3px 10px; }
  }

  @media (max-width: 360px) {
    .section { padding: 20px 10px; }
    .mockupArea { height: 200px; }
    .heading { font-size: 18px; }
    .subtitle { font-size: 11px; }
    .window { height: 180px; }
    .featItem { padding: 8px 10px; }
    .featName { font-size: 11px; }
    .featDesc { font-size: 10px; }
  }
`;