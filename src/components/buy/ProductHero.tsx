import Image from "next/image";
import Link from "next/link";
import { PixelFrame } from "@/components/home/PixelFrame";
import { NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";
import { siteConfig } from "@/lib/siteConfig";

export function ProductHero() {
  return (
    <section className="relative overflow-hidden border-b border-dashed border-text-primary/10 bg-background page-x">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-24 hidden h-[min(90vh,800px)] w-[min(70vw,700px)] -translate-y-1/2 opacity-[0.07] mix-blend-multiply select-none md:block lg:-right-16"
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
        className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-8 pb-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-8 md:pb-16"
        style={{ paddingTop: NAV_BAR_HEIGHT_PX + 40 }}
      >
        <div className="flex flex-col gap-6 sm:col-span-1 lg:col-span-2">
          <p className="type-eyebrow">Own a BurgerBot</p>
          <h1 className="type-heading-xl max-w-xl text-text-primary">
            Put B.O.B. in your kitchen.
          </h1>
          <p className="type-body max-w-md">
            BurgerBots slots into the kitchen you already have. Same-day setup,
            menu training from live demonstrations, and consistent assembly
            from the first order.
          </p>
          <Link
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-fit"
          >
            Book a call →
          </Link>
        </div>

        <PixelFrame className="w-full sm:col-span-1 lg:col-span-2">
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/technology.png"
              alt="BurgerBot assembling orders in a kitchen"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover object-[center_40%]"
              priority
            />
          </div>
        </PixelFrame>
      </div>
    </section>
  );
}
