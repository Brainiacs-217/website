import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/landing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy a BurgerBot | BURGERBOTS",
  description: "Bring B.O.B. to your kitchen. Get in touch to own a BurgerBot.",
};

export default function BuyPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-bg-hero text-foreground">
      <section className="flex flex-1 flex-col justify-center px-6 py-32 md:px-10 lg:px-16 xl:px-[80px]">
        <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.25em] text-text-secondary">
          Own a BurgerBot
        </p>
        <h1 className="mb-6 max-w-3xl font-(family-name:--font-space-grotesk) text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.92] tracking-tight text-black">
          Put B.O.B. in your kitchen.
        </h1>
        <p className="mb-16 max-w-xl text-lg leading-relaxed text-text-secondary">
          BurgerBots slots into the kitchen you already have. Tell us about your
          operations and we&apos;ll walk you through ownership, setup, and menu
          training.
        </p>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
