import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import { siteConfig } from "@/lib/siteConfig";

const callTopics = [
  {
    title: "Ownership & pricing",
    description: "Volume, unit count, and what B.O.B. costs for your operation.",
  },
  {
    title: "Kitchen fit",
    description: "Same-day install in the layout you already run — no rebuild required.",
  },
  {
    title: "Menu training",
    description: "How your team teaches new items through live demonstrations.",
  },
];

export function BookDemoCTA() {
  const { restaurant } = siteConfig;

  return (
    <section className="page-x py-[var(--spacing-section-sm)] border-t border-dashed border-border-dark bg-surface-dark">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 md:grid-cols-2 md:items-stretch md:gap-12">
        <FadeIn className="flex flex-col gap-6">
          <div>
            <p className="type-eyebrow-on-dark">Next step</p>
            <h2 className="type-heading-xl mt-2 text-text-on-dark">
              Ready to put B.O.B. in your kitchen?
            </h2>
            <p className="mt-4 max-w-md text-text-on-dark-muted leading-relaxed">
              Book a call and we&apos;ll walk you through ownership, setup, and
              menu training for your operation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a call →
            </Link>
            <a
              href={`mailto:${siteConfig.salesEmail}`}
              className="inline-flex items-center px-5 py-3 text-sm font-semibold text-text-on-dark border border-white/20 transition-colors hover:bg-white/5"
            >
              Email sales →
            </a>
          </div>

          <div className="flex flex-col gap-3 border-t border-dashed border-border-dark pt-6">
            <p className="type-eyebrow-on-dark">On the call</p>
            <div className="divide-y divide-border-dark border border-border-dark">
              {callTopics.map((topic, i) => (
                <div
                  key={topic.title}
                  className="flex items-start gap-3 px-4 py-2.5"
                >
                  <span className="mt-0.5 text-xs font-medium text-text-on-dark-subtle">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text-on-dark">
                      {topic.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-snug text-text-on-dark-muted">
                      {topic.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="w-full md:h-full">
          <PixelFrame
            label="Breaking Dawn · Los Gatos"
            labelPosition="overlay"
            className="md:h-full"
          >
            <div className="relative aspect-3/2 w-full md:aspect-auto md:h-full">
              <Image
                src={restaurant.visitImage}
                alt={`${restaurant.name} kitchen in Los Gatos`}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </PixelFrame>
        </FadeIn>
      </div>
    </section>
  );
}
