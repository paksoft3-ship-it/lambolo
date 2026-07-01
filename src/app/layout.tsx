import type { Metadata, Viewport } from "next";
import { fredoka, nunitoSans } from "@/lib/fonts";
import { CookieConsent } from "@/components/cookies/CookieConsent";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lambolo.com";
const TITLE = "Lambolo | Dokun. Oyna. Aydınlat.";
const DESCRIPTION =
  "Lambolo, çocukların ışık anahtarlarını eğlenceli karakterlere dönüştüren Anahtar Serisi ile çok yakında. Günlük ışık rutinini keyifli bir alışkanlığa dönüştürür.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Lambolo",
  },
  description: DESCRIPTION,
  applicationName: "Lambolo",
  keywords: [
    "Lambolo",
    "anahtar aksesuarı",
    "çocuk odası",
    "ışık anahtarı",
    "Anahtar Serisi",
    "Kurbi",
  ],
  authors: [{ name: "Lambolo" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Lambolo",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/references/homepage-reference.png",
        width: 941,
        height: 1672,
        alt: "Lambolo — Dokun. Oyna. Aydınlat.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/references/homepage-reference.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFC900",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lambolo",
  url: SITE_URL,
  slogan: "Dokun. Oyna. Aydınlat.",
  description: DESCRIPTION,
  email: "info@lambolo.com",
  sameAs: ["https://instagram.com/hellolambolo"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${fredoka.variable} ${nunitoSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // JSON-LD is static and safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
