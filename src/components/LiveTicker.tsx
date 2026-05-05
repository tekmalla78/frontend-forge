const tickerData = [
  { sym: "NABIL", price: "1,245", chg: "+2.3%", up: true, vol: "52K" },
  { sym: "NTC", price: "892", chg: "-0.8%", up: false, vol: "38K" },
  { sym: "NLIC", price: "1,520", chg: "+1.5%", up: true, vol: "27K" },
  { sym: "SBI", price: "345", chg: "+3.1%", up: true, vol: "91K" },
  { sym: "NICA", price: "678", chg: "-1.2%", up: false, vol: "44K" },
  { sym: "UPPER", price: "412", chg: "+4.7%", up: true, vol: "63K" },
  { sym: "CHCL", price: "1,890", chg: "+0.9%", up: true, vol: "15K" },
  { sym: "GBIME", price: "298", chg: "-0.4%", up: false, vol: "72K" },
];

function TickerItem({ sym, price, chg, up, vol }: typeof tickerData[0]) {
  return (
    <span className="inline-flex items-center gap-[5px] border-r border-white/[.07] px-4 text-[11.5px] text-white/70">
      <span className={`h-[5px] w-[5px] rounded-full ${up ? "bg-[#4ADE80]" : "bg-[#F87171]"}`} />
      <span className="text-xs font-bold text-white">{sym}</span>
      <span className="font-semibold text-white/90">{price}</span>
      <span className={`font-semibold ${up ? "text-[#4ADE80]" : "text-[#F87171]"}`}>{chg}</span>
      <span className="text-[10.5px] text-white/35">{vol}</span>
    </span>
  );
}

export default function LiveTicker() {
  const doubled = [...tickerData, ...tickerData];

  return (
    <div className="flex h-9 items-center overflow-hidden border-b border-white/5 bg-[#0D1117]">
      <div className="flex h-full shrink-0 items-center gap-1.5 border-r border-white/[.12] bg-gradient-to-br from-brand-blue-dk to-brand-blue px-3.5 text-[10px] font-extrabold uppercase tracking-[1.5px] text-white">
        <span className="h-[7px] w-[7px] rounded-full bg-[#4ADE80] shadow-[0_0_7px_#4ADE80] animate-[blink_1.2s_infinite]" />
        LIVE
        <span className="ml-1 text-[9.5px] font-medium normal-case tracking-normal text-white/55">
          {new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-[2] w-[50px] bg-gradient-to-l from-[#0D1117] to-transparent" />
        <div className="flex animate-[ticker-scroll_65s_linear_infinite] items-center whitespace-nowrap hover:[animation-play-state:paused]">
          {doubled.map((item, i) => (
            <TickerItem key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
