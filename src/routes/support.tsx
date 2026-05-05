import { createFileRoute, Link } from "@tanstack/react-router";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { Headphones, MessageCircle, FileText, BookOpen, ArrowRight, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => ({
    meta: [
      { title: "Support — Imperial Securities" },
      { name: "description", content: "Get help and support from Imperial Securities. Access resources, submit tickets, or contact our team." },
    ],
  }),
});

const channels = [
  { icon: <Headphones className="h-6 w-6" />, title: "Call Us", desc: "Speak directly with our support team", action: "01-4XXXXXX", color: "text-brand-blue", bg: "bg-brand-blue-lt" },
  { icon: <Mail className="h-6 w-6" />, title: "Email Support", desc: "Get a response within 24 hours", action: "support@imperialsecurities.com.np", color: "text-brand-green-dk", bg: "bg-brand-green-lt" },
  { icon: <MessageCircle className="h-6 w-6" />, title: "Live Chat", desc: "Chat with us during business hours", action: "Start Chat", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: <Clock className="h-6 w-6" />, title: "Business Hours", desc: "Sun – Thu, 10 AM – 4 PM", action: "Nepal Standard Time", color: "text-orange-600", bg: "bg-orange-50" },
];

const resources = [
  { icon: <FileText className="h-5 w-5" />, title: "Account Setup Guide", desc: "Step-by-step guide to open and activate your account" },
  { icon: <BookOpen className="h-5 w-5" />, title: "Trading Tutorial", desc: "Learn how to place orders on our trading platform" },
  { icon: <FileText className="h-5 w-5" />, title: "IPO Application Guide", desc: "How to apply for IPOs through MeroShare" },
  { icon: <BookOpen className="h-5 w-5" />, title: "TMS User Manual", desc: "Complete guide for the Trade Management System" },
];

function SupportPage() {
  return (
    <PageShell>
      <PageHero
        title="Support Center"
        subtitle="We're here to help. Choose the best way to reach us or browse our resources."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Support" }]}
      />

      {/* Support channels */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} ${c.color}`}>
                {c.icon}
              </div>
              <h3 className="mb-1 font-heading text-base font-bold text-foreground">{c.title}</h3>
              <p className="mb-3 text-xs text-muted-foreground">{c.desc}</p>
              <p className="text-sm font-semibold text-brand-blue">{c.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Help resources */}
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-8">
            <span className="mb-2 inline-block rounded-full bg-brand-blue-lt px-3 py-1 text-xs font-semibold text-brand-blue">Resources</span>
            <h2 className="font-heading text-2xl font-extrabold text-foreground">Help Articles & Guides</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {resources.map((r) => (
              <button key={r.title} className="group flex items-center gap-4 rounded-xl border border-border bg-white p-5 text-left shadow-sm transition-all hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-lt text-brand-blue">
                  {r.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-foreground">{r.title}</h4>
                  <p className="text-xs text-muted-foreground">{r.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand-blue" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-gradient-to-r from-brand-blue-lt to-brand-green-lt p-8">
          <p className="text-sm font-medium text-foreground">Still need help?</p>
          <Link to="/faqs" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm transition-all hover:shadow-md">
            Browse FAQs
          </Link>
          <Link to="/contact" className="rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-blue-dk">
            Contact Us
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
