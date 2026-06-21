import { FadeIn } from "@/components/shared/FadeIn";
import type { InvestorMetric, ProductMetric } from "@/lib/metrics";

type MetricsGridProps =
  | {
      variant: "product";
      metrics: ProductMetric[];
      background?: boolean;
      eyebrow?: string;
    }
  | {
      variant: "investor";
      metrics: InvestorMetric[];
      background?: boolean;
      eyebrow?: string;
    };

export function MetricsGrid(props: MetricsGridProps) {
  const { variant, metrics, background = true, eyebrow } = props;

  const sectionClass = [
    "section-shell",
    variant === "investor" && "border-y border-text-primary/10 py-14 md:py-16",
    background && "bg-surface-muted",
  ]
    .filter(Boolean)
    .join(" ");

  if (variant === "product") {
    const productMetrics = metrics as ProductMetric[];
    return (
      <section className={sectionClass}>
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {productMetrics.map((stat, i) => (
            <FadeIn key={stat.unit} delay={i * 0.08}>
              <div className="flex flex-col gap-2">
                <p className="type-metric text-text-primary">{stat.value}</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-text-primary">
                  {stat.unit}
                </p>
                <p className="type-body-sm">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    );
  }

  const investorMetrics = metrics as InvestorMetric[];
  return (
    <section className={sectionClass}>
      {eyebrow && (
        <FadeIn>
          <p className="type-eyebrow mb-10">{eyebrow}</p>
        </FadeIn>
      )}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {investorMetrics.map((metric, i) => (
          <FadeIn key={metric.label} delay={i * 0.06}>
            <div className="flex flex-col gap-1 border-t border-dashed border-text-primary/10 pt-4">
              <p className="type-eyebrow">{metric.label}</p>
              <p className="font-display text-2xl font-bold tracking-tight text-text-primary">
                {metric.value}
              </p>
              <p className="type-body-sm">{metric.detail}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
