import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, eyebrow, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue-dk to-brand-dark py-16 md:py-20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-20 h-56 w-56 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-1.5 text-[13px] text-white/50">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {crumb.href ? (
                <Link to={crumb.href} className="transition-colors hover:text-white/80">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/70">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <div className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur">
            {eyebrow}
          </div>
        )}
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
