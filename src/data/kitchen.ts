export type KitchenProduct = {
  id: string;
  name: string;
  emoji: string;
  /** How you toggle the light on this character. */
  action: string;
  /** Public path to the product photo (cropped from the source renders). */
  image: string;
  alt: string;
  /** Accent color for the name (hex — these are outside the brand token set). */
  accent: string;
  /** Cream tile background behind the photo. */
  cardBg: string;
};

/**
 * Mutfak Serisi — kitchen switch covers.
 * Photos cropped from the source marketing renders in /images:
 * 1.jpeg=Limon 2.jpeg=Avokado 3.jpeg=Kahve 4.jpeg=Çilek
 */
export const KITCHEN_PRODUCTS: KitchenProduct[] = [
  {
    id: "cilek",
    name: "Çilek",
    emoji: "🍓",
    action: "Yaprakları hareket ettir, mutfağın ışığını aç veya kapat.",
    image: "/images/products/kitchen/cilek.jpg",
    alt: "Çilek karakterli Lambolo mutfak anahtar kapağı",
    accent: "#E4325F",
    cardBg: "#FDE7EC",
  },
  {
    id: "kahve",
    name: "Kahve",
    emoji: "☕",
    action: "Kulpu hareket ettir, mutfağın ışığını aç veya kapat.",
    image: "/images/products/kitchen/kahve.jpg",
    alt: "Kahve fincanı karakterli Lambolo mutfak anahtar kapağı",
    accent: "#8B5E34",
    cardBg: "#F3E9DC",
  },
  {
    id: "avokado",
    name: "Avokado",
    emoji: "🥑",
    action: "Çekirdeği hareket ettir, mutfağın ışığını aç veya kapat.",
    image: "/images/products/kitchen/avokado.jpg",
    alt: "Avokado karakterli Lambolo mutfak anahtar kapağı",
    accent: "#5A8F2E",
    cardBg: "#EAF3DD",
  },
  {
    id: "limon",
    name: "Limon",
    emoji: "🍋",
    action: "Yaprağı hareket ettir, mutfağın ışığını aç veya kapat.",
    image: "/images/products/kitchen/limon.jpg",
    alt: "Limon karakterli Lambolo mutfak anahtar kapağı",
    accent: "#D79A00",
    cardBg: "#FBF1CF",
  },
];
