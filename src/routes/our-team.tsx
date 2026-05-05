import { createFileRoute } from "@tanstack/react-router";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";

export const Route = createFileRoute("/our-team")({
  component: OurTeamPage,
  head: () => ({
    meta: [
      { title: "Our Team — Imperial Securities" },
      { name: "description", content: "Meet the dedicated professionals behind Imperial Securities." },
    ],
  }),
});

const departments = [
  {
    name: "Trading & Operations",
    members: [
      { name: "Arun Tamang", role: "Senior Trader", initials: "AT" },
      { name: "Sabina Limbu", role: "Trade Operations", initials: "SL" },
      { name: "Rajesh Bohara", role: "Settlement Officer", initials: "RB" },
      { name: "Mina Khadka", role: "Operations Analyst", initials: "MK" },
    ],
  },
  {
    name: "Client Services",
    members: [
      { name: "Pooja Bhandari", role: "Relationship Manager", initials: "PB" },
      { name: "Santosh Neupane", role: "Client Advisor", initials: "SN" },
      { name: "Gita Sharma", role: "Support Executive", initials: "GS" },
      { name: "Bikash Thapa", role: "KYC Officer", initials: "BT" },
    ],
  },
  {
    name: "Technology",
    members: [
      { name: "Ankit Poudel", role: "Full Stack Developer", initials: "AP" },
      { name: "Shreya Koirala", role: "UI/UX Designer", initials: "SK" },
      { name: "Dipesh Magar", role: "Systems Admin", initials: "DM" },
    ],
  },
  {
    name: "Finance & Compliance",
    members: [
      { name: "Ramesh Ghimire", role: "Accountant", initials: "RG" },
      { name: "Sunita Basnet", role: "Compliance Officer", initials: "SB" },
      { name: "Nabin Rijal", role: "Internal Auditor", initials: "NR" },
    ],
  },
];

const colors = [
  "from-brand-blue to-brand-blue-dk",
  "from-brand-green-dk to-brand-green",
  "from-indigo-500 to-indigo-700",
  "from-purple-500 to-purple-700",
];

function OurTeamPage() {
  return (
    <PageShell>
      <PageHero
        title="Our Team"
        subtitle="The talented individuals who make Imperial Securities a success every day"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Our Team" }]}
      />

      <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        {departments.map((dept, di) => (
          <div key={dept.name} className="mb-12 last:mb-0">
            <div className="mb-6 flex items-center gap-3">
              <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${colors[di % colors.length]}`} />
              <h2 className="font-heading text-xl font-bold text-foreground">{dept.name}</h2>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">{dept.members.length} members</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {dept.members.map((m) => (
                <div key={m.name} className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:shadow-sm">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${colors[di % colors.length]} text-xs font-bold text-white`}>
                    {m.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{m.name}</h4>
                    <p className="text-xs text-muted-foreground">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
