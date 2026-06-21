import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-center overflow-hidden bg-bg-hero">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-32 hidden h-[min(115vh,1000px)] w-[min(80vw,860px)] -translate-y-1/2 opacity-[0.09] mix-blend-multiply select-none md:block lg:-right-24 xl:-right-16"
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

      <div className="relative z-10 flex w-full flex-col items-start gap-8 px-6 py-24 md:px-10 lg:px-16 xl:px-[80px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-text-secondary">
          Los Gatos, CA · Open Tues–Sun
        </p>

        <h1 className="font-(family-name:--font-space-grotesk) text-[clamp(3rem,5.5vw,5.25rem)] font-bold leading-[0.9] tracking-tight">
          <span className="block text-black">Made by robots.</span>
          <span className="block text-accent">Loved by humans.</span>
        </h1>

        <p className="max-w-md text-lg leading-relaxed text-text-secondary">
          B.O.B. grinds, grills, and garnishes every burger from scratch. Our
          humans bring it to your table.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent px-8 py-4 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
          >
            Book a Table →
          </Link>
          <Link
            href="/buy"
            className="inline-flex items-center border border-black px-8 py-4 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            Own a BurgerBot
          </Link>
          <Link
            href="/investors"
            className="inline-flex items-center border border-black px-8 py-4 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            Investor Material
          </Link>
        </div>
      </div>

      <p className="absolute bottom-6 right-0 text-right text-[13px] font-medium uppercase tracking-[0.25em] text-text-secondary md:right-2 lg:right-4 xl:right-[32px]">
        <span className="block cursor-default underline-offset-[0.2em] transition-[text-decoration] hover:underline">
          Breaking Dawn
        </span>
        <span className="block cursor-default underline-offset-[0.2em] transition-[text-decoration] hover:underline">
          160 W Main St, 95030
        </span>
      </p>
    </section>
  );
}
