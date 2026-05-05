import { createFileRoute } from "@tanstack/react-router";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { Calendar, MapPin, ArrowRight, Bell } from "lucide-react";

export const Route = createFileRoute("/news-events")({
  component: NewsEventsPage,
  head: () => ({
    meta: [
      { title: "News & Events — Imperial Securities" },
      { name: "description", content: "Stay updated with the latest news, announcements, and events from Imperial Securities." },
    ],
  }),
});

const news = [
  { title: "NEPSE Index Crosses 2,500 Points", date: "Mar 12, 2024", category: "Market Update", excerpt: "The Nepal Stock Exchange benchmark index crossed the 2,500 mark for the first time in 2024, driven by strong performance in banking and hydropower sectors." },
  { title: "Imperial Securities Launches New Mobile App", date: "Mar 5, 2024", category: "Announcement", excerpt: "We are proud to announce the launch of our redesigned mobile trading application with enhanced features and improved user experience." },
  { title: "SEBON Updates Margin Lending Guidelines", date: "Feb 25, 2024", category: "Regulation", excerpt: "The Securities Board of Nepal has issued updated guidelines for margin lending, effective from the next fiscal year." },
  { title: "Annual General Meeting Notice", date: "Feb 18, 2024", category: "Corporate", excerpt: "Notice is hereby given that the 27th AGM of Imperial Securities Pvt. Ltd. will be held on Chaitra 15, 2080." },
];

const events = [
  { title: "Investor Education Workshop", date: "Apr 10, 2024", time: "11:00 AM – 2:00 PM", location: "Head Office, Dillibazar", desc: "Free workshop on stock market fundamentals for beginner investors." },
  { title: "IPO Awareness Seminar", date: "Apr 20, 2024", time: "1:00 PM – 3:00 PM", location: "Hotel Himalaya, Lalitpur", desc: "Learn about the IPO process, how to evaluate new offerings, and common pitfalls to avoid." },
  { title: "Technical Analysis Masterclass", date: "May 5, 2024", time: "10:00 AM – 4:00 PM", location: "Online (Zoom)", desc: "Advanced technical analysis techniques for active traders." },
];

const categoryColors: Record<string, string> = {
  "Market Update": "bg-brand-blue-lt text-brand-blue",
  Announcement: "bg-brand-green-lt text-brand-green-dk",
  Regulation: "bg-orange-50 text-orange-600",
  Corporate: "bg-purple-50 text-purple-600",
};

function NewsEventsPage() {
  return (
    <PageShell>
      <PageHero
        title="News & Events"
        subtitle="Stay informed about market updates, company announcements, and upcoming events"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News & Events" }]}
      />

      <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* News */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-2">
              <Bell className="h-5 w-5 text-brand-blue" />
              <h2 className="font-heading text-xl font-bold text-foreground">Latest News</h2>
            </div>
            <div className="space-y-4">
              {news.map((n) => (
                <article key={n.title} className="group rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${categoryColors[n.category] || "bg-muted text-muted-foreground"}`}>
                      {n.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground"><Calendar className="h-3 w-3" />{n.date}</span>
                  </div>
                  <h3 className="mb-1.5 font-heading text-base font-bold text-foreground">{n.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
                  <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue transition-colors group-hover:text-brand-blue-dk">
                    Read More <ArrowRight className="h-3 w-3" />
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-brand-green-dk" />
              <h2 className="font-heading text-xl font-bold text-foreground">Upcoming Events</h2>
            </div>
            <div className="space-y-4">
              {events.map((e) => (
                <div key={e.title} className="rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-brand-blue-lt text-center">
                      <span className="text-[10px] font-semibold text-brand-blue">{e.date.split(" ")[0]}</span>
                      <span className="text-lg font-extrabold leading-none text-brand-blue">{e.date.split(" ")[1].replace(",", "")}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{e.title}</h4>
                      <p className="text-xs text-muted-foreground">{e.time}</p>
                    </div>
                  </div>
                  <p className="mb-2 text-xs leading-relaxed text-muted-foreground">{e.desc}</p>
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <MapPin className="h-3 w-3" />{e.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
