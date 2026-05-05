import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Design tokens ─────────────────────────────────────────── */
const T = {
  navy:    "#0B1A35",
  blue:    "#1557C0",
  blueLt:  "#E8F0FE",
  border:  "#E4ECF7",
  surface: "#FFFFFF",
  bg:      "#EEF3FB",
  bgHead:  "#FAFCFF",
  txtPri:  "#0B1A35",
  txtSec:  "#4B5563",
  txtMute: "#94A3B8",
  line:    "#EDF2FA",
};

/* ─── Tag palette ──────────────────────────────────────────── */
const TAGS: Record<string, { fg: string; bg: string }> = {
  "Market Update": { fg: "#1557C0", bg: "#DBEAFE" },
  "Announcement":  { fg: "#6D28D9", bg: "#EDE9FE" },
  "Regulation":    { fg: "#92400E", bg: "#FEF3C7" },
  "Corporate":     { fg: "#065F46", bg: "#D1FAE5" },
  "IPO Alert":     { fg: "#991B1B", bg: "#FEE2E2" },
  "Economy":       { fg: "#0E7490", bg: "#CFFAFE" },
  "Education":     { fg: "#1557C0", bg: "#DBEAFE" },
  "Analysis":      { fg: "#065F46", bg: "#D1FAE5" },
  "Guide":         { fg: "#6D28D9", bg: "#EDE9FE" },
  "Strategy":      { fg: "#92400E", bg: "#FEF3C7" },
};

/* ─── Data ──────────────────────────────────────────────────── */
const NEWS = [
  { tag: "Market Update", date: "Mar 24, 2026", read: "3 min", author: "Market Desk",    title: "NEPSE Crosses 2,850 Mark Amid Strong Hydropower Rally",          desc: "The benchmark index extended gains driven by renewed investor interest in hydropower and banking stocks.",            href: "/news/nepse-2850"     },
  { tag: "Announcement",  date: "Mar 5, 2026",  read: "2 min", author: "Imperial Team",  title: "Imperial Securities Launches Redesigned Mobile Trading App",     desc: "Our revamped mobile app brings enhanced charting, faster order execution, and a cleaner modern interface.",           href: "/news/mobile-app"     },
  { tag: "Regulation",    date: "Feb 25, 2026", read: "4 min", author: "Compliance",     title: "SEBON Issues Updated Margin Lending Guidelines for FY 2083",     desc: "The Securities Board of Nepal released new guidelines for margin lending effective from the next fiscal year.",       href: "/news/sebon-margin"   },
  { tag: "Corporate",     date: "Feb 18, 2026", read: "2 min", author: "Imperial Team",  title: "Annual General Meeting Notice — 27th AGM of Imperial Securities", desc: "The 27th AGM will be held on Chaitra 15, 2080 at the company's registered head office in Kathmandu.",              href: "/news/agm-notice"     },
  { tag: "IPO Alert",     date: "Mar 18, 2026", read: "4 min", author: "Research Team",  title: "Upcoming IPO: XYZ Hydropower Opens Application Window",          desc: "XYZ Hydropower is opening a 3 lakh unit IPO at Rs. 100 per share. Application window opens Chaitra 15.",           href: "/news/xyz-ipo"        },
  { tag: "Economy",       date: "Mar 12, 2026", read: "3 min", author: "Economics Desk", title: "Nepal Remittance Inflows Hit Record High in Fiscal Year 2082",   desc: "Remittance inflows surged to an all-time high, positively impacting liquidity across the Nepali banking sector.",    href: "/news/remittance"     },
];

const BLOGS = [
  { tag: "Education", date: "Mar 15, 2026", read: "8 min", author: "Sunil Maharjan",  title: "Understanding NEPSE: A Beginner's Complete Guide",                    desc: "Everything you need to know about Nepal Stock Exchange — from opening an account to placing your first trade.",        href: "/blog/understanding-nepse" },
  { tag: "Analysis",  date: "Mar 10, 2026", read: "6 min", author: "Rajesh Shrestha", title: "Top 5 Sectors to Watch in Nepal's Stock Market in 2026",               desc: "An in-depth analysis of the most promising sectors including hydropower, banking, and microfinance for 2026.",          href: "/blog/top-5-sectors"       },
  { tag: "Guide",     date: "Feb 28, 2026", read: "5 min", author: "Priya Tamang",    title: "Step-by-Step: How to Apply for IPOs Through MeroShare",                desc: "A clear walkthrough of the MeroShare IPO application process, ASBA method, and common first-timer mistakes to avoid.", href: "/blog/ipo-meroshare"       },
  { tag: "Education", date: "Feb 20, 2026", read: "7 min", author: "Anil Karki",      title: "Fundamental vs Technical Analysis: Which Approach Suits You?",         desc: "A comprehensive comparison of two major investment analysis methodologies and practical guidance on when to use each.", href: "/blog/analysis-methods"    },
  { tag: "Strategy",  date: "Feb 14, 2026", read: "6 min", author: "Sunil Maharjan",  title: "Dividend Investing Strategy for Long-Term Nepali Investors",           desc: "How to build a portfolio focused on dividend-paying NEPSE-listed stocks to generate steady passive income.",           href: "/blog/dividend-strategy"   },
  { tag: "Education", date: "Feb 5, 2026",  read: "9 min", author: "Priya Tamang",    title: "Risk Management: Protecting Your Portfolio in Volatile Markets",       desc: "Essential techniques every investor should know: stop-loss orders, diversification, position sizing, and rebalancing.", href: "/blog/risk-management"     },
];

/* ─── Constants ─────────────────────────────────────────────── */
const VISIBLE  = 3;
const NEWS_MS  = 3000;
const BLOG_MS  = 3700;
const CARD_H   = 178; // px — every card is this tall

/* ─── Micro icons ───────────────────────────────────────────── */
const Ico = {
  Bell: () => (
    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke={T.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2a6 6 0 0 1 6 6c0 3.5 1.5 5 1.5 5h-15S4 11.5 4 8a6 6 0 0 1 6-6z"/>
      <path d="M8.5 17a1.5 1.5 0 0 0 3 0"/>
    </svg>
  ),
  Book: () => (
    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke={T.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v11H5a2 2 0 0 1-2-2V5z"/>
      <path d="M3 14h14M7 3v11"/>
    </svg>
  ),
  User: () => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke={T.txtMute} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="4" r="2.2"/><path d="M1.5 10.5c0-2.2 2-4 4.5-4s4.5 1.8 4.5 4"/>
    </svg>
  ),
  Cal: () => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke={T.txtMute} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="2" width="10" height="9" rx="1.5"/><path d="M4 1v2M8 1v2M1 5h10"/>
    </svg>
  ),
  Clock: () => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke={T.txtMute} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="5"/><path d="M6 3.5V6l2 1.5"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke={T.blue} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6h8M7 3l3 3-3 3"/>
    </svg>
  ),
};

/* ─── Tag badge ─────────────────────────────────────────────── */
function TagBadge({ label }: { label: string }) {
  const c = TAGS[label] ?? { fg: T.blue, bg: T.blueLt };
  return (
    <span style={{
      fontSize: 9.5, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
      padding: "3px 8px", borderRadius: 20, background: c.bg, color: c.fg, whiteSpace: "nowrap",
    }}>
      {label}
    </span>
  );
}

/* ─── MetaRow: same in both columns ────────────────────────── */
function MetaRow({ date, read, author }: { date: string; read: string; author: string }) {
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:8, marginBottom:9 }}>
      <span style={{ display:"flex", alignItems:"center", gap:4, fontSize:11, color:T.txtMute }}>
        <Ico.User />{author}
      </span>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <span style={{ display:"flex", alignItems:"center", gap:3, fontSize:11, color:T.txtMute }}>
          <Ico.Cal />{date}
        </span>
        <span style={{ display:"flex", alignItems:"center", gap:3, fontSize:11, color:T.txtMute }}>
          <Ico.Clock />{read} read
        </span>
      </div>
    </div>
  );
}

/* ─── Unified card (identical structure for both columns) ───── */
interface Item { tag:string; date:string; read:string; author:string; title:string; desc:string; href:string; }

function Card({ item, cta }: { item: Item; cta: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={item.href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", flexDirection: "column",
        textDecoration: "none",
        padding: "16px 22px",
        height: CARD_H,
        boxSizing: "border-box",
        borderBottom: `1px solid ${T.line}`,
        background: hov ? "#F5F9FF" : T.surface,
        transition: "background 0.18s",
      }}
    >
      {/* 1 — Tag */}
      <div style={{ marginBottom: 9 }}>
        <TagBadge label={item.tag} />
      </div>

      {/* 2 — Title (2-line clamp) */}
      <div style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13.5,
        lineHeight: 1.42, color: T.txtPri, marginBottom: 7,
        display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
      }}>
        {item.title}
      </div>

      {/* 3 — Description (2-line clamp, flex-grows to fill space) */}
      <div style={{
        fontSize: 12.5, lineHeight: 1.65, color: T.txtSec, flex: 1,
        display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
      }}>
        {item.desc}
      </div>

      {/* 4 — Meta + CTA (always pinned to bottom) */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop: 10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <span style={{ display:"flex", alignItems:"center", gap:4, fontSize:11, color:T.txtMute }}>
            <Ico.User />{item.author}
          </span>
          <span style={{ display:"flex", alignItems:"center", gap:3, fontSize:11, color:T.txtMute }}>
            <Ico.Cal />{item.date}
          </span>
          <span style={{ display:"flex", alignItems:"center", gap:3, fontSize:11, color:T.txtMute }}>
            <Ico.Clock />{item.read} read
          </span>
        </div>
        <span style={{ display:"flex", alignItems:"center", gap:5, fontSize:12, fontWeight:700, color:T.blue, whiteSpace:"nowrap" }}>
          {cta} <Ico.Arrow />
        </span>
      </div>
    </a>
  );
}

/* ─── Auto-scroll list ──────────────────────────────────────── */
function AutoList({ items, dir, ms, cta }: { items:Item[]; dir:"up"|"down"; ms:number; cta:string }) {
  const [offset, setOffset] = useState(0);
  const total = items.length;

  useEffect(() => {
    if (total <= VISIBLE) return;
    const id = setInterval(
      () => setOffset(p => dir === "up" ? (p+1)%total : (p-1+total)%total),
      ms
    );
    return () => clearInterval(id);
  }, [total, dir, ms]);

  const visible = Array.from({ length: VISIBLE }, (_, i) => items[(offset+i) % total]);
  const enterY  = dir === "up" ? 32 : -32;
  const exitY   = dir === "up" ? -32 : 32;

  return (
    <div style={{ overflow: "hidden" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        {visible.map((item, i) => (
          <motion.div
            key={`${offset}-${i}-${item.href}`}
            initial={{ opacity:0, y:enterY }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:exitY }}
            transition={{ duration:0.38, delay:i*0.045, ease:[0.4,0,0.2,1] }}
          >
            <Card item={item} cta={cta} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ─── Column shell ──────────────────────────────────────────── */
function Col({ title, Icon, href, pill, children }: {
  title:string; Icon:()=>JSX.Element; href:string; pill:string; children:React.ReactNode;
}) {
  return (
    <div style={{
      background: T.surface, borderRadius: 16,
      border: `1px solid ${T.border}`,
      overflow: "hidden",
      boxShadow: "0 1px 20px rgba(21,87,192,.06)",
    }}>
      {/* Header */}
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding: "14px 22px",
        background: T.bgHead,
        borderBottom: `1px solid ${T.border}`,
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <Icon />
          <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:15, color:T.navy }}>
            {title}
          </span>
          <span style={{
            fontSize:9, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase",
            padding:"2px 7px", borderRadius:20, background:T.blueLt, color:T.blue,
          }}>
            {pill}
          </span>
        </div>
        <a href={href} style={{ fontSize:12, fontWeight:600, color:T.blue, textDecoration:"none", opacity:0.75 }}>
          View all →
        </a>
      </div>

      {/* Cards */}
      {children}

      {/* Footer indicator */}
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"center", gap:5,
        padding:"10px 0",
        borderTop: `1px solid ${T.line}`,
        background: T.bgHead,
      }}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width:5, height:5, borderRadius:"50%",
            background: i===1 ? T.blue : T.border,
          }} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main ──────────────────────────────────────────────────── */
export default function NewsSection() {
  return (
    <section id="news" style={{ background:T.bg, padding:"72px 0", fontFamily:"'DM Sans',sans-serif" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 28px" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          style={{ marginBottom:36 }}
        >
          <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:T.blue, marginBottom:8 }}>
            Stay Informed
          </div>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(22px,3vw,36px)", fontWeight:800, lineHeight:1.2, color:T.navy, margin:0 }}>
              Market Insights & News
            </h2>
            <p style={{ fontSize:14, color:T.txtSec, margin:0, maxWidth:420, lineHeight:1.65 }}>
              Expert analysis, NEPSE updates, and investment guides from our research team.
            </p>
          </div>
        </motion.div>

        {/* Two columns */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, alignItems:"start" }}>

          {/* Left — News, scrolls ↑ */}
          <motion.div initial={{ opacity:0, x:-18 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.45 }}>
            <Col title="Latest News" Icon={Ico.Bell} href="/news" pill="↑ auto">
              <AutoList items={NEWS} dir="up" ms={NEWS_MS} cta="Read more" />
            </Col>
          </motion.div>

          {/* Right — Blog, scrolls ↓ (opposite) */}
          <motion.div initial={{ opacity:0, x:18 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.45 }}>
            <Col title="Blog & Insights" Icon={Ico.Book} href="/blog" pill="↓ editorial">
              <AutoList items={BLOGS} dir="down" ms={BLOG_MS} cta="Read article" />
            </Col>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #news > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
