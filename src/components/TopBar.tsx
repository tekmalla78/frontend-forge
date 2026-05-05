import { Phone, Mail, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-brand-blue-dk via-brand-blue to-brand-green-dk py-1.5 text-[11px] text-white/85 sm:text-[11.5px]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 sm:justify-end sm:gap-6 sm:px-6">
        <a href="tel:01-5970145" className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white">
          <Phone className="h-3 w-3" /> 01-5970145
        </a>
        <a href="mailto:info@imperialsecurities.com" className="hidden items-center gap-1.5 text-white/80 transition-colors hover:text-white sm:flex">
          <Mail className="h-3 w-3" /> info@imperialsecurities.com
        </a>
        <a href="#" className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white">
          <Clock className="h-3 w-3" /> Sun–Fri 10AM–3PM
        </a>
      </div>
    </div>
  );
}
