import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import {
  investorDeckCopy,
  investorDeckTopics,
} from "@/lib/investorDeck";
import { siteConfig } from "@/lib/siteConfig";

export function InvestorCTA() {
  const { eyebrow, title, description, ctaLabel, emailLabel } =
    investorDeckCopy;

  return (
    <section className="page-x border-t border-dashed border-border-dark bg-surface-dark py-[var(--spacing-section-sm)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
        <FadeIn className="flex flex-col gap-6">
          <div>
            <p className="type-eyebrow-on-dark">{eyebrow}</p>
            <h2 className="type-heading-xl mt-2 text-text-on-dark">{title}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-text-on-dark-muted">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {ctaLabel}
            </Link>
            <a
              href={`mailto:${siteConfig.investorsEmail}`}
              className="inline-flex items-center border border-white/20 px-5 py-3 text-sm font-semibold text-text-on-dark transition-colors hover:bg-white/5"
            >
              {emailLabel}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col gap-3">
          <p className="type-eyebrow-on-dark">In the deck</p>
          <div className="divide-y divide-border-dark border border-border-dark">
            {investorDeckTopics.map((topic, i) => (
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
        </FadeIn>
      </div>
    </section>
  );
}
