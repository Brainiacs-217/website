import Image from "next/image";
import Link from "next/link";
import { investorDeckCopy } from "@/lib/investorDeck";
import { NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";
import { siteConfig } from "@/lib/siteConfig";

export function InvestorHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[56%] -right-24 hidden h-[min(90vh,800px)] w-[min(70vw,700px)] -translate-y-1/2 opacity-[0.07] mix-blend-multiply select-none md:block lg:-right-16"
      >
        <Image
          src="/robot-schematic.png"
          alt=""
          fill
          sizes="70vw"
          className="object-contain object-center"
          priority
        />
      </div>

      <div
        className="relative z-10 flex flex-col page-x pb-16 pt-8 md:pb-[calc(5rem+0.75in)]"
        style={{ paddingTop: NAV_BAR_HEIGHT_PX + 80 }}
      >
        <p className="type-eyebrow mb-6">Investor Material</p>
        <h1 className="type-display-md mb-6 max-w-3xl">
          <span className="block text-brand">Automating the line.</span>
          <span className="block text-text-primary">Scaling consistency.</span>
        </h1>
        <p className="type-body-lg max-w-2xl">
          BurgerBots deploys robotics into existing commercial kitchens — no
          retrofits, no months of integration. On-device intelligence learns
          recipes from demonstration and runs assembly at scale without cloud
          dependency.
        </p>
        <Link
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8 w-fit"
        >
          {investorDeckCopy.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
