import { createFileRoute } from "@tanstack/react-router";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/management-team")({
  component: ManagementTeamPage,
  head: () => ({
    meta: [
      { title: "Management Team — Imperial Securities" },
      { name: "description", content: "Meet the management team driving daily operations at Imperial Securities." },
    ],
  }),
});

const team = [
  { name: "Sunil Maharjan", role: "Chief Executive Officer", initials: "SM", dept: "Executive", desc: "Oversees strategic direction and operations with 20+ years in financial services." },
  { name: "Deepak Adhikari", role: "Chief Operating Officer", initials: "DA", dept: "Operations", desc: "Manages day-to-day operations, compliance, and risk management." },
  { name: "Meena Rai", role: "Head of Trading", initials: "MR", dept: "Trading", desc: "Leads the trading desk with expertise in equity markets and order execution." },
  { name: "Kiran Pandey", role: "Chief Technology Officer", initials: "KP", dept: "Technology", desc: "Drives digital transformation and trading platform development." },
  { name: "Nisha Gurung", role: "Head of Client Relations", initials: "NG", dept: "Client Services", desc: "Ensures exceptional client experience across all touchpoints." },
  { name: "Hari Bahadur", role: "Chief Financial Officer", initials: "HB", dept: "Finance", desc: "Manages financial planning, reporting, and regulatory compliance." },
];

function ManagementTeamPage() {
  return (
    <PageShell>
      <PageHero
        title="Management Team"
        subtitle="Dedicated professionals driving excellence in every aspect of our operations"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Management Team" }]}
      />

      <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="bg-gradient-to-r from-brand-blue/5 to-brand-green/5 px-6 pb-4 pt-6">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-green-dk text-xl font-bold text-white shadow-md">
                  {m.initials}
                </div>
                <h3 className="font-heading text-base font-bold text-foreground">{m.name}</h3>
                <p className="text-xs font-semibold text-brand-blue">{m.role}</p>
              </div>
              <div className="px-6 pb-5 pt-3">
                <span className="mb-2 inline-block rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">{m.dept}</span>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue-lt text-brand-blue transition-colors hover:bg-brand-blue hover:text-white">
                    <Mail className="h-3.5 w-3.5" />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue-lt text-brand-blue transition-colors hover:bg-brand-blue hover:text-white">
                    <Phone className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
