export type MenuItem = {
  id: string;
  name: string;
  description: string;
  kicker: string;
  note: string;
  ctaLabel: string;
  image: string;
};

export const menuHighlights: MenuItem[] = [
  {
    id: "burger-and-fries",
    name: "Burger & Fries",
    description:
      "Ground fresh, grilled to order, dressed by Bob. The combo that started it all.",
    kicker: "Signature pick",
    note: "Fresh-ground beef, melted cheese, and a side of thick-cut fries.",
    ctaLabel: "Try Burger & Fries →",
    image: "/assets/menu/burger-and-fries.png",
  },
  {
    id: "chicken",
    name: "Chicken Burger",
    description:
      "Crispy fried chicken, stacked with lettuce, tomato, and onion — built to spec every time.",
    kicker: "Crispy classic",
    note: "Golden crunch on the outside, same precise build on every order.",
    ctaLabel: "Try Chicken Burger →",
    image: "/assets/menu/chicken-burger.png",
  },
  {
    id: "lemongrass-tofu",
    name: "Lemongrass Tofu Burger",
    description:
      "Seared tofu with lemongrass, crisp produce, and the same sub-mm care as everything on the line.",
    kicker: "Plant-based precision",
    note: "Bold lemongrass flavor, layered to spec — no shortcuts, no compromise.",
    ctaLabel: "Try Lemongrass Tofu →",
    image: "/assets/menu/lemongrass-tofu-burger.png",
  },
];
