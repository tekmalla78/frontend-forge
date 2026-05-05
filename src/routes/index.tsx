import { createFileRoute } from "@tanstack/react-router";
import TopBar from "../components/TopBar";
import SiteHeader from "../components/SiteHeader";
import LiveTicker from "../components/LiveTicker";
import HeroSection from "../components/HeroSection";
import ContinueSection from "../components/ContinueSection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
import ToolsSection from "../components/ToolsSection";
import DownloadSection from "../components/DownloadSection";
import NewsSection from "../components/NewsSection";
import PaymentBankingSection from "../components/PaymentBankingSection";
import BranchesSection from "../components/BranchesSection";
import CTASection from "../components/CTASection";
import SiteFooter from "../components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Imperial Securities — Stock Broker No. 45 | NEPSE" },
      { name: "description", content: "Nepal's trusted stock brokerage since 1997. Trade on NEPSE with real-time data, apply for IPOs, and manage your portfolio." },
    ],
  }),
});

function Index() {
  return (
    <div className="[overflow-x:clip]">
      <TopBar />
      <SiteHeader />
      <LiveTicker />
      <HeroSection />
      <ContinueSection />
      <ServicesSection />
      <WhyUsSection />
      <ToolsSection />
      <DownloadSection />
      <NewsSection />
      <PaymentBankingSection />
      <BranchesSection />
      <CTASection />
      <SiteFooter />
    </div>
  );
}
