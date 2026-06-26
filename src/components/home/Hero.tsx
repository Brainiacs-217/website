import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const { restaurant } = siteConfig;

export function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-center overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[calc(50%-0.25in)] left-[var(--spacing-page-x)] hidden h-[min(115vh,1000px)] w-[min(80vw,860px)] translate-x-[6.5in] translate-y-[calc(-50%+0.25in)] opacity-[0.09] mix-blend-multiply select-none md:block"
      >
        <Image
          src="/robot-schematic.png"
          alt=""
          fill
          sizes="(min-width: 768px) 80vw"
          className="object-contain object-center"
          priority
        />
      </div>

      <div className="page-x relative z-10 flex w-full -translate-y-[0.5in] flex-col items-start gap-8 py-24">
        <p className="type-eyebrow">Los Gatos, CA · Open Tues–Sun</p>

        <h1 className="type-display-xl">
          <span className="block text-text-primary">Made by robots.</span>
          <span className="block text-brand">Loved by humans.</span>
        </h1>

        <p className="type-body-lg max-w-md">
          B.O.B. grinds, grills, and garnishes every burger from scratch. Our
          humans bring it to your table.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a href="#visit" className="btn-primary">
            Try a Burger →
          </a>
          <Link href="/buy" className="btn-outline">
            Own a BurgerBot
          </Link>
          <Link href="/investors" className="btn-outline">
            Investor Material
          </Link>
        </div>
      </div>

      <p className="type-eyebrow absolute right-[var(--spacing-page-x)] bottom-[calc(2.5rem+0.25in)] text-right text-[0.875rem]">
        <span className="flex items-center justify-end gap-2 cursor-default underline-offset-[0.2em] transition-[text-decoration] hover:underline">
          Breaking Dawn
          <Image
            src={restaurant.logo}
            alt=""
            width={20}
            height={24}
            className="h-5 w-auto shrink-0"
          />
        </span>
        <span className="block cursor-default underline-offset-[0.2em] transition-[text-decoration] hover:underline">
          160 W Main St, 95030
        </span>
      </p>
    </section>
  );
}
