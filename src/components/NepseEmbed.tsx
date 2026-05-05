import { ExternalLink } from "lucide-react";

interface NepseEmbedProps {
  src: string;
  title: string;
  height?: number | string;
  fallbackHref?: string;
}

/**
 * Embeds a Nepse Alpha widget/page via iframe. If the upstream page blocks
 * iframe embedding (X-Frame-Options / CSP), users see a helpful "Open in new
 * tab" fallback overlay so the page never feels broken.
 */
export default function NepseEmbed({ src, title, height = 720, fallbackHref }: NepseEmbedProps) {
  const openHref = fallbackHref ?? src;
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_8px_30px_rgba(21,87,192,.08)]">
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-[12.5px] font-semibold text-foreground/80">{title}</span>
          <span className="rounded-md bg-brand-blue-lt px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-blue">
            Live · Nepse Alpha
          </span>
        </div>
        <a
          href={openHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11.5px] font-medium text-brand-blue hover:underline"
        >
          Open <ExternalLink className="h-3 w-3" />
        </a>
      </div>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block w-full bg-white"
        style={{ height: typeof height === "number" ? `${height}px` : height, border: 0 }}
      />
    </div>
  );
}
