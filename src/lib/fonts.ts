import { Baloo_2, Nunito_Sans } from "next/font/google";

// Display font — headlines, section titles, character names, large CTAs.
// Baloo 2 (a rounded, chunky, playful face like Fredoka) is used INSTEAD of
// Fredoka because Fredoka's Google Fonts files ship no Turkish glyphs at all —
// its latin-ext subset lacks ş ğ ı İ ç ö ü, so every Turkish heading fell back
// to a mismatched system font. Baloo 2 covers the full Turkish set.
export const baloo = Baloo_2({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-baloo",
  display: "swap",
});

// Body font — navigation, paragraphs, forms, footer
export const nunitoSans = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});
