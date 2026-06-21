import { BookDemoCTA } from "@/components/buy/BookDemoCTA";
import { FAQSection } from "@/components/buy/FAQSection";
import { ProductHero } from "@/components/buy/ProductHero";
import { ProductStats } from "@/components/buy/ProductStats";
import { ProductVideo } from "@/components/buy/ProductVideo";
import { SystemModulesSection } from "@/components/buy/SystemModulesSection";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Own a BurgerBot | BURGERBOTS",
  description:
    "Meet B.O.B. — the BurgerBot system that fits your kitchen. Same-day install, 300 covers per hour, learns from live demonstrations.",
};

export default function BuyPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background text-text-primary">
      <ProductHero />
      <ProductStats />
      <ProductVideo />
      <SystemModulesSection />
      <FAQSection />
      <BookDemoCTA />
      <Footer variant="minimal" />
    </main>
  );
}
