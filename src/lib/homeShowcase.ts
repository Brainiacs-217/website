export type ShowcaseTile = {
  id: string;
  type: "image" | "video";
  /** /public path or embed URL */
  src: string;
  alt: string;
  size: "sm" | "md" | "lg" | "wide";
  label?: string;
  cta?: { label: string; href: string };
};

export const homeShowcaseTiles: ShowcaseTile[] = [
  {
    id: "bob-demo",
    type: "video",
    src: "/assets/burgerbots-live.mov",
    alt: "B.O.B. assembling burgers in the kitchen",
    size: "lg",
    label: "Meet B.O.B.",
  },
  {
    id: "grind",
    type: "image",
    src: "/assets/flexpicker-burger-assembly.png",
    alt: "BurgerBot technology in the kitchen",
    size: "md",
  },
  {
    id: "arm",
    type: "image",
    src: "/assets/launch-day-kids-robot.png",
    alt: "Kids watching the BurgerBot in action",
    size: "sm",
  },
  {
    id: "burger",
    type: "image",
    src: "/assets/menu/gochujang-aioli-sauces.png",
    alt: "Gochujang aioli and house sauces on the line",
    size: "sm",
  },
  {
    id: "kitchen",
    type: "image",
    src: "/burgerbotthumbnail.jpg",
    alt: "Kitchen in action",
    size: "wide",
  },
  {
    id: "visit",
    type: "video",
    src: "/assets/lettuce-tomato-burger-b-roll.mov",
    alt: "Come taste the future",
    size: "md",
    label: "Come taste the future.",
    cta: { label: "Try a Burger →", href: "/contact" },
  },
];
