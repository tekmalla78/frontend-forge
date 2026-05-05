import { createFileRoute } from "@tanstack/react-router";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Imperial Securities" },
      { name: "description", content: "Get in touch with Imperial Securities. Visit our office in Dillibazar, Kathmandu or reach us by phone and email." },
    ],
  }),
});

const contactInfo = [
  { icon: <MapPin className="h-5 w-5" />, title: "Head Office", lines: ["Dillibazar, Kathmandu", "Nepal"] },
  { icon: <Phone className="h-5 w-5" />, title: "Phone", lines: ["01-4XXXXXX", "01-4XXXXXX"] },
  { icon: <Mail className="h-5 w-5" />, title: "Email", lines: ["info@imperialsecurities.com.np", "support@imperialsecurities.com.np"] },
  { icon: <Clock className="h-5 w-5" />, title: "Business Hours", lines: ["Sun – Thu: 10:00 AM – 4:00 PM", "Fri – Sat: Closed"] },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions, feedback, or inquiries."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-4 lg:col-span-2">
            {contactInfo.map((c) => (
              <div key={c.title} className="flex gap-4 rounded-xl border border-border bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-lt text-brand-blue">
                  {c.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-foreground">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:col-span-3 md:p-8">
            <h2 className="mb-1 font-heading text-xl font-bold text-foreground">Send Us a Message</h2>
            <p className="mb-6 text-sm text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Full Name</label>
                  <input className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="Your full name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Email</label>
                  <input type="email" className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Phone</label>
                <input className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="+977 98XXXXXXXX" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Subject</label>
                <input className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="How can we help?" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Message</label>
                <textarea rows={4} className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="Your message..." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-brand-blue to-brand-green-dk px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-muted/40">
          <div className="flex h-64 items-center justify-center text-muted-foreground">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 h-8 w-8 text-brand-blue/40" />
              <p className="text-sm font-medium">Map — Dillibazar, Kathmandu</p>
              <p className="text-xs text-muted-foreground">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
