"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { lightPages } from "@/lib/navLinks";
import { NavMenu } from "@/components/landing/NavMenu";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const useDarkNav = lightPages.has(pathname);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          menuOpen
            ? "border-transparent bg-transparent"
            : `border-black/8 ${useDarkNav ? "bg-background" : "bg-black"}`
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/home" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="BurgerBots Logo"
              style={{
                height: "52px",
                width: "auto",
                filter: useDarkNav ? "invert(1)" : "none",
              }}
            />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`relative flex h-11 w-11 items-center justify-center transition-colors ${
              useDarkNav ? "text-black" : "text-white"
            }`}
          >
            <span
              className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </header>

      <NavMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
