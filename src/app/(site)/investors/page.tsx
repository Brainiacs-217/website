import { InvestorCTA } from "@/components/investors/InvestorCTA";
import { InvestorHero } from "@/components/investors/InvestorHero";
import { InvestorMetrics } from "@/components/investors/InvestorMetrics";
import { InvestorTechnology } from "@/components/investors/InvestorTechnology";
import { InvestorThesis } from "@/components/investors/InvestorThesis";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Material | BURGERBOTS",
  description:
    "BurgerBots investor overview — on-device kitchen robotics, demonstration-based learning, and scalable commercial deployment.",
};

export default function InvestorsPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background text-text-primary">
      <InvestorHero />
      <InvestorMetrics />
      <InvestorThesis />
      <InvestorTechnology />
      <InvestorCTA />
      <Footer variant="minimal" />
    </main>
  );
}
