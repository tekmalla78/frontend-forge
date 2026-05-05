import TopBar from "./TopBar";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="[overflow-x:clip]">
      <TopBar />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
