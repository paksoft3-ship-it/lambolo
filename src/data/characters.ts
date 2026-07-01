export type CharacterAccent = "green" | "blue" | "orange" | "pink" | "purple";

export type Character = {
  id: string;
  name: string;
  subtitle: string;
  /** Public path to the transparent product render. */
  image: string;
  alt: string;
  accent: CharacterAccent;
  /** Pastel card background tint. */
  cardBg: string;
};

/**
 * Character → asset mapping (verified visually against the source PNGs):
 * Product6=Kurbi(frog) Product5=Pandi(panda) Product4=Rexi(dino)
 * Product3=Leo(lion)   Product2=Miu(cat)     Product1=Uni(unicorn)
 */
export const CHARACTERS: Character[] = [
  {
    id: "kurbi",
    name: "Kurbi",
    subtitle: "Meraklı Kurbağa",
    image: "/images/products/kurbi.png",
    alt: "Kurbi kurbağa karakterli Lambolo anahtar aparatı",
    accent: "green",
    cardBg: "#E7F7E9",
  },
  {
    id: "pandi",
    name: "Pandi",
    subtitle: "Neşeli Panda",
    image: "/images/products/pandi.png",
    alt: "Pandi panda karakterli Lambolo anahtar aparatı",
    accent: "blue",
    cardBg: "#EAF4FF",
  },
  {
    id: "rexi",
    name: "Rexi",
    subtitle: "Cesur Dinozor",
    image: "/images/products/rexi.png",
    alt: "Rexi dinozor karakterli Lambolo anahtar aparatı",
    accent: "green",
    cardBg: "#EAF8EC",
  },
  {
    id: "leo",
    name: "Leo",
    subtitle: "Neşeli Aslan",
    image: "/images/products/leo.png",
    alt: "Leo aslan karakterli Lambolo anahtar aparatı",
    accent: "orange",
    cardBg: "#FFF4E0",
  },
  {
    id: "miu",
    name: "Miu",
    subtitle: "Tatlı Kedi",
    image: "/images/products/miu.png",
    alt: "Miu kedi karakterli Lambolo anahtar aparatı",
    accent: "pink",
    cardBg: "#FFE9F0",
  },
  {
    id: "uni",
    name: "Uni",
    subtitle: "Rüya Arkadaşı",
    image: "/images/products/uni.png",
    alt: "Uni unicorn karakterli Lambolo anahtar aparatı",
    accent: "purple",
    cardBg: "#F0E8FF",
  },
];

export const ACCENT_TEXT: Record<CharacterAccent, string> = {
  green: "text-brand-green",
  blue: "text-brand-blue",
  orange: "text-brand-orange",
  pink: "text-brand-pink",
  purple: "text-[#7C4DD1]",
};

export const ACCENT_PILL: Record<CharacterAccent, string> = {
  green: "bg-brand-green/12 text-brand-green-dark",
  blue: "bg-brand-blue/12 text-brand-blue-dark",
  orange: "bg-brand-orange/15 text-[#C9750A]",
  pink: "bg-brand-pink/12 text-brand-pink-dark",
  purple: "bg-[#7C4DD1]/12 text-[#6A3DBE]",
};
