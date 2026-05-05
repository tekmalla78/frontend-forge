import { createFileRoute } from "@tanstack/react-router";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/chairman-message")({
  component: ChairmanMessagePage,
  head: () => ({
    meta: [
      { title: "Chairman's Message — Imperial Securities" },
      { name: "description", content: "A message from the Chairman of Imperial Securities about our vision for Nepal's capital markets." },
    ],
  }),
});

function ChairmanMessagePage() {
  return (
    <PageShell>
      <PageHero
        title="Chairman's Message"
        subtitle="A vision for Nepal's financial future"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Chairman's Message" }]}
      />

      <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Chairman card */}
          <div className="mb-10 flex flex-col items-center gap-6 rounded-2xl border border-border bg-gradient-to-br from-brand-blue-lt/50 to-white p-8 text-center md:flex-row md:text-left">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green-dk text-3xl font-bold text-white shadow-lg">
              RS
            </div>
            <div>
              <h2 className="font-heading text-xl font-extrabold text-foreground">Ram Sharan Sharma</h2>
              <p className="text-sm font-medium text-brand-blue">Chairman, Imperial Securities</p>
              <p className="mt-1 text-xs text-muted-foreground">Leading the company since 2005</p>
            </div>
          </div>

          {/* Message */}
          <div className="relative rounded-2xl border border-border bg-white p-8 shadow-sm md:p-10">
            <Quote className="absolute -top-4 left-8 h-8 w-8 text-brand-blue/20" />
            
            <div className="space-y-5 text-[15px] leading-relaxed text-foreground/80">
              <p>
                Dear Valued Clients, Partners, and Stakeholders,
              </p>
              <p>
                It gives me immense pleasure to address you as the Chairman of Imperial Securities Pvt. Ltd.
                Since our establishment in 1997, we have been committed to providing exceptional brokerage
                services and contributing to the growth of Nepal's capital market.
              </p>
              <p>
                Over the past 15+ years, we have witnessed remarkable transformation in the Nepalese
                financial landscape. From manual trading floors to fully digitized platforms, the journey
                has been extraordinary. Imperial Securities has not just been a witness but an active
                participant in this evolution.
              </p>
              <p>
                Our mission remains steadfast — to make stock market investing accessible, transparent,
                and rewarding for every Nepali citizen. We believe that a vibrant capital market is
                essential for the economic prosperity of our nation, and we are committed to playing
                our part in building that future.
              </p>
              <p>
                As we look ahead, we are investing in technology, expanding our branch network, and
                developing educational programs to empower new investors. The future of Nepal's capital
                market is bright, and Imperial Securities stands ready to guide you through every step
                of your investment journey.
              </p>
              <p>
                Thank you for your continued trust and support. Together, let us build a more prosperous Nepal.
              </p>
              <p className="pt-2 font-heading font-bold text-foreground">
                Warm Regards,<br />
                Ram Sharan Sharma<br />
                <span className="text-sm font-normal text-muted-foreground">Chairman, Imperial Securities Pvt. Ltd.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
