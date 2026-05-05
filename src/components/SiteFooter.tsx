import logoFooterUrl from "@/assets/logo-footer.png";

const companyLinks = ["About Us", "Services", "Downloads", "Fees & Comission", "FAQs", "Careers"];
const quickLinks   = ["TMS Login", "Client Login", "Meroshare Login", "IPO Check", "Open Online Account"];
const usefulLinks  = ["Securities Board of Nepal", "Nepal Stock Exchange", "CDS and Clearing", "UN Consolidated Sanction List", "MOHA Sanction List"];
const legalLinks   = ["Privacy Policy", "Terms of Service", "Disclaimer", "SEBON Guidelines", "Grievance"];

const socials = [
  { label: "Twitter / X", symbol: "𝕏" },
  { label: "Facebook",    symbol: "f" },
  { label: "LinkedIn",    symbol: "in" },
  { label: "Email",       symbol: "✉" },
];

export default function SiteFooter() {
  return (
    <>
      <style>{`
        /* ─── Base ─────────────────────────────── */
        .ft-root {
          background: #080f1e;
          font-family: 'DM Sans', sans-serif;
          color: rgba(255,255,255,0.55);
        }
        .ft-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ─── ROW 1: Logo | Contact | Socials ── */
        .ft-row1 {
          display: grid;
          grid-template-columns: 260px 1fr auto;
          gap: 56px;
          align-items: center;
          padding: 48px 0 36px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        /* Logo */
        .ft-logo img { height: 64px; width: auto; display: block; }
        .ft-tagline {
          margin-top: 14px;
          font-size: 13px;
          line-height: 1.72;
          color: rgba(255,255,255,0.4);
          max-width: 240px;
        }

        /* Contact */
        .ft-contact-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 14px;
        }
        .ft-contact-row {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13.5px;
          color: rgba(255,255,255,0.68);
          margin-bottom: 9px;
        }
        .ft-contact-row:last-child { margin-bottom: 0; }
        .ft-contact-row svg { color: #c9a84c; flex-shrink: 0; }
        .ft-contact-row a {
          color: rgba(255,255,255,0.68);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ft-contact-row a:hover { color: #c9a84c; }

        /* Socials */
        .ft-socials { display: flex; gap: 8px; align-items: center; }
        .ft-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.13);
          background: transparent;
          color: rgba(255,255,255,0.48);
          font-size: 13px;
          text-decoration: none;
          transition: all 0.22s ease;
        }
        .ft-social-btn:hover {
          background: #2563eb;
          border-color: #2563eb;
          color: #fff;
          transform: translateY(-2px);
        }

        /* ─── ROW 2: 4 nav columns ─────────────── */
        .ft-row2 {
          display: grid;
          grid-template-columns: 260px 1fr 1fr 1fr;
          gap: 48px;
          align-items: start;
          padding: 40px 0 36px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .ft-col-heading {
          font-family: 'Syne', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: rgba(255,255,255,0.88);
          margin-bottom: 18px;
        }
        .ft-link-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .ft-link-list a {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1.5;
        }
        .ft-link-list a:hover { color: #4ade80; }

        /* ─── ROW 3: Legal centered ─────────────── */
        .ft-legal {
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 4px 0;
        }
        .ft-legal a {
          font-size: 12.5px;
          color: rgba(255,255,255,0.36);
          text-decoration: none;
          padding: 3px 12px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .ft-legal a:hover { color: rgba(255,255,255,0.72); }
        .ft-legal-dot {
          width: 3px; height: 3px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0; align-self: center;
        }

        /* ─── ROW 4: Copyright + Badges ─────────── */
        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 18px 0 28px;
        }
        .ft-copy { font-size: 12px; color: rgba(255,255,255,0.24); }
        .ft-badges { display: flex; gap: 8px; }
        .ft-badge {
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.04);
          padding: 4px 10px;
          font-size: 11px;
          color: rgba(255,255,255,0.34);
        }

        /* ══════════════════════════════════════════
           MOBILE  ≤ 640px
        ══════════════════════════════════════════ */
        @media (max-width: 640px) {
          .ft-wrap { padding: 0 16px; }

          /* ROW 1 — centered stack */
          .ft-row1 {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            padding: 36px 0 28px;
            gap: 20px;
          }
          .ft-logo { display: flex; flex-direction: column; align-items: center; }
          .ft-logo img { margin: 0 auto; }
          .ft-tagline { text-align: center; margin: 10px auto 0; }
          .ft-contact-label { text-align: center; }
          .ft-contact-row { justify-content: center; }
          .ft-socials { justify-content: center; }

          /* ROW 2 — stacked */
          .ft-row2 {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 0;
            border-bottom: none;
          }

          /* Company Overview full-width with 3-col link grid */
          .ft-col-company {
            padding: 28px 0 20px;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          .ft-company-links {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 10px 8px !important;
            flex-direction: unset !important;
          }
          .ft-company-links a { font-size: 12px; }

          /* Quick + Useful — side by side */
          .ft-quick-useful {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 24px 0 20px;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          /* hide the desktop quick/useful columns individually */
          .ft-col-quick,
          .ft-col-useful { display: none; }

          /* Legal */
          .ft-legal { padding: 16px 0; gap: 2px 0; }
          .ft-legal a { font-size: 11.5px; padding: 3px 7px; }

          /* Bottom */
          .ft-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding-bottom: 24px;
            gap: 10px;
          }
          .ft-badges { justify-content: center; }
        }

        /* hide mobile quick-useful block on desktop */
        .ft-quick-useful { display: none; }
        @media (max-width: 640px) {
          .ft-quick-useful { display: grid; }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-wrap">

          {/* ══ ROW 1 — Logo · Contact · Socials ══ */}
          <div className="ft-row1">

            {/* Logo + tagline */}
            <div className="ft-logo">
              <img src={logoFooterUrl} alt="Imperial Securities" decoding="async" loading="lazy" />
              <p className="ft-tagline">
                Nepal's trusted stock broker since 1997. SEBON registered, NEPSE member broker No. 45.
              </p>
            </div>

            {/* Contact */}
            <div>
              <div className="ft-contact-label">Get In Touch</div>
              <div className="ft-contact-row">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3a1.5 1.5 0 0 1 0 3z"/>
                </svg>
                <span>Anamnagar 29, Hanumansthan, Kathmandu</span>
              </div>
              <div className="ft-contact-row">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M2.5 2h2.3l1 2.5-1.3 1.3a8.5 8.5 0 0 0 3.7 3.7L9.5 8.2 12 9.2v2.3A1.5 1.5 0 0 1 10.5 13C5.25 13 1 8.75 1 3.5A1.5 1.5 0 0 1 2.5 2z"/>
                </svg>
                <a href="tel:015970145">01-5970145</a>
              </div>
              <div className="ft-contact-row">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <rect x="1" y="3" width="12" height="8" rx="1"/>
                  <path d="M1 4l6 4.5L13 4" strokeLinecap="round"/>
                </svg>
                <a href="mailto:45.imperial@gmail.com">45.imperial@gmail.com</a>
              </div>
            </div>

            {/* Socials */}
            <div className="ft-socials">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="ft-social-btn">
                  {s.symbol}
                </a>
              ))}
            </div>

          </div>

          {/* ══ ROW 2 — Nav columns (desktop: 4-col grid) ══ */}
          <div className="ft-row2">

            {/* Company Overview */}
            <div className="ft-col-company">
              <div className="ft-col-heading">Company Overview</div>
              <ul className="ft-link-list ft-company-links">
                {companyLinks.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Quick Links — desktop only */}
            <div className="ft-col-quick">
              <div className="ft-col-heading">Quick Links</div>
              <ul className="ft-link-list">
                {quickLinks.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Useful Links — desktop only */}
            <div className="ft-col-useful">
              <div className="ft-col-heading">Useful Links</div>
              <ul className="ft-link-list">
                {usefulLinks.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Empty 4th col placeholder on desktop (legal is its own row) */}
            <div />

          </div>

          {/* ══ Mobile-only: Quick + Useful side by side ══ */}
          <div className="ft-quick-useful">
            <div>
              <div className="ft-col-heading">Quick Links</div>
              <ul className="ft-link-list">
                {quickLinks.map((l) => (
                  <li key={l}><a href="#" style={{ fontSize: 12 }}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="ft-col-heading">Useful Links</div>
              <ul className="ft-link-list">
                {usefulLinks.map((l) => (
                  <li key={l}><a href="#" style={{ fontSize: 12 }}>{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* ══ ROW 3 — Legal centered ══ */}
          <div className="ft-legal">
            {legalLinks.map((l, i) => (
              <>
                <a key={l} href="#">{l}</a>
                {i < legalLinks.length - 1 && <span className="ft-legal-dot" />}
              </>
            ))}
          </div>

          {/* ══ ROW 4 — Copyright + Badges ══ */}
          <div className="ft-bottom">
            <p className="ft-copy">© 2026 Imperial Securities Company Ltd. All rights reserved.</p>
            <div className="ft-badges">
              {["SEBON Reg.", "CDSC Member", "NEPSE #45"].map((b) => (
                <span key={b} className="ft-badge">{b}</span>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}