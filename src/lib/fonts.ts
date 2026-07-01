import { Fredoka, Nunito_Sans } from "next/font/google";

// Display font — headlines, section titles, character names, large CTAs
export const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

// Body font — navigation, paragraphs, forms, footer
export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});
