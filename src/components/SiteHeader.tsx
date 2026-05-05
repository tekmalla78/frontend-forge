import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Building2, HelpCircle, BookOpen } from "lucide-react";
import logoUrl from "@/assets/logo.svg";
import logoWhiteUrl from "@/assets/logo-white.png";
import logoMobileUrl from "@/assets/mobile.webp";

const dropdownMenus: Record<string, { icon?: React.ReactNode; heading?: string; subtitle?: string; items: { label: string; href: string }[] }[]> = {
  Resources: [
    {
      icon: <Building2 className="h-5 w-5 text-brand-blue" />,
      heading: "Company",
      subtitle: "Learn about our organization",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Chairman's Message", href: "/chairman-message" },
        { label: "Board of Directors", href: "/about#leadership" },
        { label: "Management Team", href: "/management-team" },
        { label: "Our Team", href: "/our-team" },
      ],
    },
    {
      icon: <HelpCircle className="h-5 w-5 text-orange-500" />,
      heading: "Help",
      subtitle: "Get assistance and support",
      items: [
        { label: "FAQ's", href: "/faqs" },
        { label: "Contact Us", href: "/contact" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      icon: <BookOpen className="h-5 w-5 text-purple-500" />,
      heading: "Education",
      subtitle: "Stay informed and learn",
      items: [
        { label: "Blog", href: "/blog" },
        { label: "News & Events", href: "/news-events" },
      ],
    },
  ],
  Services: [
    {
      items: [
        { label: "Stock Brokerage", href: "/services/stock-brokerage" },
        { label: "Depository Services (DP)", href: "/services/depository-services" },
        { label: "Margin Trading", href: "/services/margin-trading" },
        { label: "Portfolio Management", href: "/services/portfolio-management" },
        { label: "IPO / FPO Application", href: "/services/ipo-fpo" },
        { label: "Research & Advisory", href: "/services/research-advisory" },
      ],
    },
  ],
  Market: [
    {
      items: [
        { label: "Market Hub", href: "/market" },
        { label: "Market Summary (NEPSE Dashboard)", href: "/market/summary" },
        { label: "Live Market", href: "/market/live" },
        { label: "Trading Chart", href: "/market/chart" },
        { label: "Top Gainers / Losers", href: "/market/top-gainers-losers" },
        { label: "Floorsheet & Broker Holding", href: "/market/floorsheet" },
      ],
    },
  ],
  Tools: [
    {
      items: [
        { label: "Portfolio Tracker", href: "#tools" },
        { label: "Calculators", href: "#calc" },
        { label: "Watchlist", href: "#watchlist" },
      ],
    },
  ],
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Market", href: "#market", hasDropdown: true },
  { label: "Download", href: "#download" },
  { label: "Tools", href: "#tools", hasDropdown: true },
  { label: "Branch", href: "#branches" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <>
      <header className="sticky top-0 z-[1000] border-b border-border bg-white/[.98] shadow-[0_2px_20px_rgba(21,87,192,.08)] backdrop-blur-[14px]">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-3 px-4 py-2 md:h-[88px] md:gap-4 md:px-6 md:py-3 lg:h-[104px]">
          <Link to="/" className="flex shrink-0 items-center py-1" aria-label="Imperial Securities — Home">
            <img
              src={logoUrl}
              alt="Imperial Securities"
              className="h-11 w-auto sm:h-14 md:h-20 lg:h-[88px]"
              width={283}
              height={110}
              decoding="async"
              loading="eager"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[13.5px] font-medium text-foreground transition-all hover:bg-brand-blue-lt hover:text-brand-blue"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-50" />}
                </a>

                {/* Dropdown */}
                {item.hasDropdown && openDropdown === item.label && dropdownMenus[item.label] && (
                  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                    {dropdownMenus[item.label].some(g => g.heading) ? (
                      /* Multi-column dropdown with category headers (Resources) */
                      <div className="w-[520px] overflow-hidden rounded-xl border border-border bg-white shadow-[0_12px_40px_rgba(0,0,0,.12)]">
                        {/* Category header cards */}
                        <div className="grid grid-cols-3 gap-3 border-b border-border px-5 py-4">
                          {dropdownMenus[item.label].map((group) =>
                            group.heading ? (
                              <div key={group.heading} className="flex items-center gap-2.5 rounded-xl border border-border bg-muted/40 px-3 py-2.5">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                                  {group.icon}
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[12.5px] font-bold text-foreground">{group.heading}</div>
                                  <div className="text-[10.5px] leading-tight text-muted-foreground">{group.subtitle}</div>
                                </div>
                              </div>
                            ) : null
                          )}
                        </div>
                        {/* Link columns */}
                        <div className="grid grid-cols-3 gap-0 px-3 py-3">
                          {dropdownMenus[item.label].map((group, gi) => (
                            <div key={gi} className="flex flex-col">
                              {group.items.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.href}
                                  className="rounded-lg px-3 py-1.5 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Simple single-column dropdown */
                      <div className="min-w-[200px] overflow-hidden rounded-xl border border-border bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,.12)]">
                        {dropdownMenus[item.label].map((group, gi) => (
                          <div key={gi} className="flex flex-col">
                            {group.items.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                className="rounded-lg px-3 py-2 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            <button className="hidden rounded-lg border-[1.5px] border-brand-blue bg-transparent px-[18px] py-2 text-[13.5px] font-semibold text-brand-blue transition-all hover:bg-brand-blue-lt md:block">
              Login
            </button>
            <button className="flex items-center gap-1.5 rounded-lg bg-gradient-to-br from-brand-blue to-brand-green-dk px-3 py-2 text-[12.5px] font-semibold text-white shadow-[0_4px_14px_rgba(21,87,192,.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(21,87,192,.38)] sm:px-5 sm:py-2.5 sm:text-[13.5px]">
              <span className="hidden sm:inline">✦ Open Account</span>
              <span className="sm:hidden">✦ Open Account</span>
            </button>
            <button
              className="flex items-center justify-center p-1.5 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[1100] flex flex-col overflow-y-auto bg-white px-5 pb-10 pt-5">

          {/* Top bar: logo + close */}
          <div className="mb-6 flex items-center justify-between">
            <img src={logoMobileUrl} alt="Imperial Securities" className="h-10 w-auto" />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav items */}
          <div className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.hasDropdown && dropdownMenus[item.label] ? (
                <div key={item.label}>
                  {/* Accordion trigger */}
                  <button
                    onClick={() => toggleMobileExpand(item.label)}
                    className="flex w-full items-center justify-between rounded-[10px] border border-gray-200 px-[18px] py-3.5 text-left text-base font-semibold text-gray-800 transition-all hover:bg-gray-50 hover:text-brand-blue"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className="h-4 w-4 text-gray-400 transition-transform duration-200"
                      style={{ transform: mobileExpanded === item.label ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  {/* Accordion content */}
                  {mobileExpanded === item.label && (
                    <div className="mb-1 ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-brand-blue/20 pl-4">
                      {dropdownMenus[item.label].map((group, gi) => (
                        <div key={gi}>
                          {group.heading && (
                            <div className="mb-1 mt-2 flex items-center gap-2 px-2">
                              {group.icon && (
                                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-100">
                                  {group.icon}
                                </span>
                              )}
                              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                                {group.heading}
                              </span>
                            </div>
                          )}
                          {group.items.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-gray-600 transition-colors hover:bg-brand-blue-lt hover:text-brand-blue"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[10px] border border-gray-200 px-[18px] py-3.5 text-base font-semibold text-gray-800 transition-all hover:bg-gray-50 hover:text-brand-blue"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Login + Open Account buttons */}
          <div className="mt-5 flex flex-col gap-3">
            <button className="w-full rounded-[10px] border-[1.5px] border-brand-blue bg-transparent px-[18px] py-3.5 text-base font-semibold text-brand-blue transition-all hover:bg-brand-blue-lt">
              Login
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br from-brand-blue to-brand-green-dk px-[18px] py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(21,87,192,.28)]">
              ✦ Open Account
            </button>
          </div>

        </div>
      )}
    </>
  );
}