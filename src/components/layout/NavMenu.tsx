"use client";

import React from "react";
import Link from "next/link";
import { navLinks, NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";

type NavMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

export function NavMenu({ open, onClose, pathname }: NavMenuProps) {
  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-surface-dark/20 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-border-default bg-background shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[72px] shrink-0 items-center border-b border-border-default px-8">
          <p className="type-eyebrow">Menu</p>
        </div>

        <nav className="flex flex-1 flex-col px-8 py-10">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block border-l-2 py-4 pl-5 text-2xl font-semibold tracking-tight transition-colors ${
                      isActive
                        ? "border-brand text-brand"
                        : "border-transparent text-text-primary hover:border-text-primary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
