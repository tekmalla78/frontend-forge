import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { User, Phone, Mail, MapPin, Clock, Send, ShieldCheck, FileText } from "lucide-react";
import grievanceImg from "../assets/grievance-support.jpg";

export const Route = createFileRoute("/grievance")({
  component: GrievancePage,
  head: () => ({
    meta: [
      { title: "Grievance — Imperial Securities" },
      { name: "description", content: "Submit your complaint or grievance to Imperial Securities. Our Grievance Handling Office is here to resolve your concerns promptly." },
      { property: "og:title", content: "Grievance — Imperial Securities" },
      { property: "og:description", content: "Submit your complaint or grievance to Imperial Securities. Our Grievance Handling Office is here to resolve your concerns promptly." },
    ],
  }),
});

const officer = [
  { icon: <User className="h-4 w-4" />, label: "Grievance Officer", value: "Mr. Rajesh Sharma" },
  { icon: <Phone className="h-4 w-4" />, label: "Direct Line", value: "+977 01-4XXXXXX" },
  { icon: <Mail className="h-4 w-4" />, label: "Email", value: "grievance@imperialsecurities.com.np" },
  { icon: <MapPin className="h-4 w-4" />, label: "Office", value: "Dillibazar, Kathmandu, Nepal" },
  { icon: <Clock className="h-4 w-4" />, label: "Hours", value: "Sun – Thu, 10:00 AM – 4:00 PM" },
];

const steps = [
  { n: "01", t: "Submit Complaint", d: "Fill the form with details of your grievance." },
  { n: "02", t: "Acknowledgement", d: "Receive a confirmation within 2 working days." },
  { n: "03", t: "Investigation", d: "Our team reviews and investigates the issue." },
  { n: "04", t: "Resolution", d: "Final response within 15 working days." },
];

function GrievancePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Client Care · SEBON Compliant"
        title="Grievance Handling"
        subtitle="Your concerns matter. Submit your complaint and our dedicated Grievance Officer will respond promptly."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Grievance" }]}
      />

      {/* Top: image + officer info */}
      <section className="mx-auto max-w-[1280px] px-6 py-12 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-brand-blue-lt/40">
            <img
              src={grievanceImg}
              alt="Grievance support representative"
              width={500}
              height={500}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green-lt px-3 py-1 text-xs font-semibold text-brand-green-dk">
              <ShieldCheck className="h-3.5 w-3.5" /> Grievance Handling Office
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-foreground md:text-3xl">
              We Take Every Concern Seriously
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              At Imperial Securities, transparency and client trust are at the core of everything we do.
              Our Grievance Handling Office ensures every complaint is acknowledged, investigated, and
              resolved in line with SEBON guidelines.
            </p>

            <div className="mt-6 space-y-3 rounded-2xl border border-border bg-white p-5 shadow-sm">
              {officer.map((o) => (
                <div key={o.label} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue-lt text-brand-blue">
                    {o.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{o.label}</div>
                    <div className="text-sm font-medium text-foreground">{o.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/40 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-8 text-center">
            <span className="inline-block rounded-full bg-brand-blue-lt px-3 py-1 text-xs font-semibold text-brand-blue">Process</span>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-foreground">How Your Complaint Is Handled</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <div className="font-heading text-2xl font-extrabold text-brand-green-dk">{s.n}</div>
                <h3 className="mt-2 text-sm font-bold text-foreground">{s.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-[1280px] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green-lt text-brand-green-dk">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">Submit Your Grievance</h2>
              <p className="text-sm text-muted-foreground">All fields are confidential and reviewed by our Grievance Officer.</p>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-xl border border-brand-green/30 bg-brand-green-lt/50 p-6 text-center">
              <ShieldCheck className="mx-auto mb-2 h-10 w-10 text-brand-green-dk" />
              <h3 className="font-heading text-lg font-bold text-foreground">Complaint Received</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Thank you. A reference number has been sent to your email. We'll respond within 2 working days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white hover:bg-brand-blue-dk"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Full Name *</label>
                  <input required maxLength={100} className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="Your full name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Client / DP ID</label>
                  <input maxLength={50} className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="e.g. 130100XXXXXXXXXX" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Email *</label>
                  <input required type="email" maxLength={255} className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Phone *</label>
                  <input required maxLength={20} className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="+977 98XXXXXXXX" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Category *</label>
                <select required className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10">
                  <option value="">Select complaint category</option>
                  <option>Trading / Order Issue</option>
                  <option>Account / KYC</option>
                  <option>Payment / Settlement</option>
                  <option>Demat / DP Services</option>
                  <option>IPO / FPO</option>
                  <option>Staff Behaviour</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Subject *</label>
                <input required maxLength={150} className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="Short summary of the issue" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Describe Your Grievance *</label>
                <textarea required rows={6} maxLength={2000} className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="Please provide details — dates, amounts, transaction IDs, and any context that helps us investigate." />
              </div>
              <div className="flex items-start gap-2 rounded-lg bg-muted/40 p-3 text-xs text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dk" />
                Your information is treated confidentially and used only to resolve your complaint.
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-brand-blue to-brand-green-dk px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <Send className="h-4 w-4" /> Submit Grievance
              </button>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}
