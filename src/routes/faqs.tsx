import { createFileRoute } from "@tanstack/react-router";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faqs")({
  component: FAQsPage,
  head: () => ({
    meta: [
      { title: "FAQs — Imperial Securities" },
      { name: "description", content: "Frequently asked questions about trading, DEMAT accounts, IPOs, and our services." },
    ],
  }),
});

const categories = [
  {
    name: "Account & Registration",
    faqs: [
      { q: "How do I open a trading account?", a: "Visit any of our branches with your citizenship certificate, passport-size photos, and a bank statement. You can also start the process online through our website and complete KYC at the nearest branch." },
      { q: "What documents are required for a DEMAT account?", a: "You need a valid citizenship certificate (or passport for foreign nationals), passport-size photographs, bank account details, and a PAN number if applicable." },
      { q: "Can I open an account online?", a: "Yes, you can initiate the account opening process online. However, physical KYC verification at our branch is required as per SEBON regulations." },
      { q: "What are the account opening charges?", a: "DEMAT account opening charges are as per CDS & Clearing Ltd. guidelines. Please contact us or visit our nearest branch for the current fee structure." },
    ],
  },
  {
    name: "Trading",
    faqs: [
      { q: "What are the trading hours on NEPSE?", a: "NEPSE trading hours are Sunday to Thursday, 11:00 AM to 3:00 PM. Pre-open session runs from 10:30 AM to 11:00 AM." },
      { q: "How do I place a buy/sell order?", a: "You can place orders through our online trading platform (TMS), mobile app, or by contacting your assigned broker at our branch office." },
      { q: "What is the brokerage commission rate?", a: "Commission rates are regulated by SEBON and vary based on the transaction amount. The current structure ranges from 0.24% to 0.40% of the transaction value." },
      { q: "Is there a minimum investment amount?", a: "There is no fixed minimum investment amount. However, you need to buy at least 10 units (1 lot) of any listed security." },
    ],
  },
  {
    name: "IPO & Rights Shares",
    faqs: [
      { q: "How do I apply for an IPO?", a: "You can apply for IPOs through MeroShare using your DEMAT account. Ensure your bank account is linked and you have sufficient ASBA balance." },
      { q: "What is MeroShare?", a: "MeroShare is an online platform by CDS & Clearing Ltd. for applying to IPOs, viewing your portfolio, and managing your DEMAT holdings." },
      { q: "How do I know if I'm allotted IPO shares?", a: "Allotment results are published on MeroShare and the company's issue manager website. You can also check through our client portal." },
    ],
  },
  {
    name: "Support & Services",
    faqs: [
      { q: "How can I contact customer support?", a: "You can reach us via phone at 01-4XXXXXX, email at info@imperialsecurities.com.np, or visit any of our branch offices during business hours." },
      { q: "Do you provide research and market analysis?", a: "Yes, we provide daily market reports, fundamental and technical analysis, and personalized investment advisory for our premium clients." },
      { q: "Can I transfer my DEMAT to Imperial Securities?", a: "Yes, you can transfer your existing DEMAT account to us. Visit our branch with your current DP statement and we'll handle the transfer process." },
    ],
  },
];

function FAQsPage() {
  const [search, setSearch] = useState("");
  const filtered = categories.map((cat) => ({
    ...cat,
    faqs: cat.faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.faqs.length > 0);

  return (
    <PageShell>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, trading, and account management"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        {/* Search */}
        <div className="mx-auto mb-12 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-sm outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="mx-auto max-w-3xl space-y-10">
          {filtered.map((cat) => (
            <div key={cat.name}>
              <h2 className="mb-4 font-heading text-lg font-bold text-foreground">{cat.name}</h2>
              <div className="rounded-2xl border border-border bg-white shadow-sm">
                <Accordion type="single" collapsible>
                  {cat.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`${cat.name}-${i}`} className="border-b border-border last:border-0 px-5">
                      <AccordionTrigger className="text-[14px] font-semibold text-foreground hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="py-12 text-center text-muted-foreground">
              No questions match your search. Try different keywords.
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
