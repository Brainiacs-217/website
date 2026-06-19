import Link from "next/link";
import { Footer } from "@/components/landing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors | BURGERBOTS",
  description: "Investor materials and information about BurgerBots.",
};

export default function InvestorsPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-bg-hero text-foreground">
      <section className="flex flex-1 flex-col justify-center px-6 py-32 md:px-10 lg:px-16 xl:px-[80px]">
        <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.25em] text-text-secondary">
          Investor Material
        </p>
        <h1 className="mb-6 max-w-3xl font-(family-name:--font-space-grotesk) text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.92] tracking-tight text-black">
          Building the future of food, one burger at a time.
        </h1>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-text-secondary">
          BurgerBots is automating repetitive kitchen work so restaurants can
          scale consistency without scaling headcount. Request our investor deck
          and company overview.
        </p>
        <Link
          href="mailto:investors@burgerbots.com"
          className="inline-flex w-fit items-center bg-[#EF3324] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#d42d20]"
        >
          Request Investor Deck →
        </Link>
      </section>
      <Footer />
    </main>
  );
}
