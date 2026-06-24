import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import { menuHighlights } from "@/lib/menuHighlights";

const getMenuImageClassName = (id: string) => {
  if (id === "chicken") {
    return "object-cover object-[center_44%]";
  }
  if (id === "lemongrass-tofu") {
    return "object-cover object-[center_44%]";
  }
  return "object-cover";
};

export function MenuHighlights() {
  return (
    <section className="page-x border-t border-dashed border-text-primary/10 bg-background py-[calc(var(--spacing-section-md)+0.375in)]">
      <FadeIn className="mb-12 md:mb-16">
        <p className="type-eyebrow">The menu</p>
        <h2 className="type-heading-xl mt-2 text-text-primary">
          What to order when you visit.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-7">
        {menuHighlights.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.08} className="flex flex-col gap-5">
            <PixelFrame label={item.name} labelPosition="overlay">
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={getMenuImageClassName(item.id)}
                />
              </div>
            </PixelFrame>

            <div className="flex flex-col gap-3 px-0.5">
              <p className="type-eyebrow">{item.kicker}</p>
              <p className="type-body leading-snug text-text-primary">
                {item.description}
              </p>
              <p className="type-body-sm">{item.note}</p>
            </div>

            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <Link
                href="#visit"
                className="btn-primary-sm flex-1 justify-center sm:text-sm"
              >
                {item.ctaLabel}
              </Link>
              <Link
                href="/buy"
                className="btn-outline-sm flex-1 justify-center sm:text-sm"
              >
                How it&apos;s built →
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
