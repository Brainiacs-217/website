export const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/buy", label: "Buy a BurgerBot" },
  { href: "/investors", label: "Investors" },
] as const;

export const lightPages = new Set(["/home", "/buy", "/investors"]);

/** 52px logo + py-4 padding + 1px bottom border */
export const NAV_BAR_HEIGHT_PX = 85;
