import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import { siteConfig } from "@/lib/siteConfig";

const { restaurant } = siteConfig;

export function VisitSection() {
  return (
    <section
      id="visit"
      className="page-x border-t border-dashed border-text-primary/10 bg-surface-muted py-[calc(var(--spacing-section-md)+0.45in)] scroll-mt-20"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-12 md:grid-cols-2 md:items-stretch md:gap-16">
        <FadeIn className="md:h-full">
          <PixelFrame
            label="Breaking Dawn · Los Gatos"
            labelPosition="overlay"
            className="md:h-full"
          >
            <div className="relative aspect-[5/4] w-full md:aspect-auto md:h-full">
              <Image
                src={restaurant.visitImage}
                alt="Breaking Dawn restaurant interior in Los Gatos"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </PixelFrame>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col gap-7 md:gap-8">
          <div>
            <p className="type-eyebrow">Visit us</p>
            <h2 className="type-heading-xl mt-3 text-text-primary">
              Come taste what B.O.B. makes.
            </h2>
            <p className="type-body-lg mt-5">
              Walk in, grab a seat, and watch the line. Every burger is ground,
              grilled, and garnished from scratch — robots on the line, humans
              at your table.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 text-text-primary">
            <p className="font-semibold">{restaurant.name}</p>
            <p className="text-text-secondary">{restaurant.address}</p>
            <p className="text-text-secondary">{restaurant.city}</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-text-secondary">
              {restaurant.hours}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Try a Burger →
            </Link>
            <a
              href={restaurant.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Get directions →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
