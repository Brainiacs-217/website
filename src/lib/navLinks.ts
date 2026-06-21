export const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/buy", label: "Own a BurgerBot" },
  { href: "/investors", label: "Investor Material" },
] as const;

export const lightPages = new Set(["/home", "/buy", "/investors"]);

export const backNavPages = new Set(["/buy", "/investors"]);

/** 52px logo + py-4 padding + 1px bottom border */
export const NAV_BAR_HEIGHT_PX = 85;
