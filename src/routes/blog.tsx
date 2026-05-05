import { createFileRoute } from "@tanstack/react-router";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { Calendar, ArrowRight, User } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog — Imperial Securities" },
      { name: "description", content: "Read insights, market analysis, and investment tips from Imperial Securities experts." },
    ],
  }),
});

const posts = [
  { title: "Understanding NEPSE: A Beginner's Complete Guide", excerpt: "Everything you need to know about Nepal Stock Exchange — from account opening to placing your first trade.", category: "Education", date: "Mar 15, 2024", author: "Sunil Maharjan", readTime: "8 min" },
  { title: "Top 5 Sectors to Watch in Nepal's Stock Market 2024", excerpt: "An analysis of the most promising sectors including hydropower, banking, and microfinance for the coming year.", category: "Analysis", date: "Mar 10, 2024", author: "Meena Rai", readTime: "6 min" },
  { title: "How to Apply for IPOs Through MeroShare", excerpt: "Step-by-step guide on using MeroShare for IPO applications, including ASBA process and common mistakes to avoid.", category: "Guide", date: "Feb 28, 2024", author: "Nisha Gurung", readTime: "5 min" },
  { title: "Fundamental vs Technical Analysis: Which Is Better?", excerpt: "A comprehensive comparison of two major investment analysis approaches and when to use each method.", category: "Education", date: "Feb 20, 2024", author: "Deepak Adhikari", readTime: "7 min" },
  { title: "Dividend Investing Strategy for Nepali Investors", excerpt: "How to build a portfolio focused on dividend-paying stocks listed on NEPSE for steady passive income.", category: "Strategy", date: "Feb 14, 2024", author: "Hari Bahadur", readTime: "6 min" },
  { title: "Risk Management: Protecting Your Investment Portfolio", excerpt: "Essential risk management techniques every investor should know, including stop-loss, diversification, and position sizing.", category: "Education", date: "Feb 5, 2024", author: "Sunil Maharjan", readTime: "9 min" },
];

const categoryColors: Record<string, string> = {
  Education: "bg-brand-blue-lt text-brand-blue",
  Analysis: "bg-brand-green-lt text-brand-green-dk",
  Guide: "bg-purple-50 text-purple-600",
  Strategy: "bg-orange-50 text-orange-600",
};

function BlogPage() {
  return (
    <PageShell>
      <PageHero
        title="Blog & Insights"
        subtitle="Market analysis, investment tips, and educational content from our experts"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        {/* Featured post */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-blue/5 to-brand-green/5 shadow-sm">
          <div className="p-8 md:p-10">
            <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[posts[0].category]}`}>
              {posts[0].category}
            </span>
            <h2 className="mb-3 font-heading text-2xl font-extrabold text-foreground md:text-3xl">{posts[0].title}</h2>
            <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{posts[0].excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><User className="h-3 w-3" />{posts[0].author}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{posts[0].date}</span>
              <span>{posts[0].readTime} read</span>
            </div>
            <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dk">
              Read Article <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Post grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((post) => (
            <article key={post.title} className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <span className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${categoryColors[post.category] || "bg-muted text-muted-foreground"}`}>
                {post.category}
              </span>
              <h3 className="mb-2 font-heading text-base font-bold leading-snug text-foreground">{post.title}</h3>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
              <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue transition-colors group-hover:text-brand-blue-dk">
                Read More <ArrowRight className="h-3 w-3" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
