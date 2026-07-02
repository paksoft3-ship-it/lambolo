import { Fredoka, Nunito_Sans } from "next/font/google";

// Display font — headlines, section titles, character names, large CTAs
// "latin-ext" is required so Turkish glyphs (ş ğ ı İ ç ö ü) render in the font
// itself instead of falling back to a mismatched system font.
export const fredoka = Fredoka({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

// Body font — navigation, paragraphs, forms, footer
export const nunitoSans = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});
