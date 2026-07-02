import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { FOOTER_EXPLORE, FOOTER_SUPPORT } from "@/data/navigation";
import { CookieSettingsLink } from "@/components/cookies/CookieSettingsLink";

// TikTok isn't in lucide; small inline glyph.
function TikTok({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v5.9c0 3.3-2.7 5.6-5.7 5.3-2.7-.3-4.7-2.6-4.6-5.3.1-2.7 2.4-4.8 5.1-4.7.3 0 .6 0 .9.1v2.8c-.3-.1-.6-.2-.9-.2-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2V3h2.6z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/hellolambolo", Icon: Instagram },
  { label: "TikTok", href: "#", Icon: TikTok },
  { label: "YouTube", href: "#", Icon: Youtube },
  { label: "Facebook", href: "#", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-brand-footer-blue text-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          {/* Column 1 — brand */}
          <div>
            <Logo width={180} className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/85">
              Lambolo, yaşam alanlarını daha eğlenceli ve daha kişisel hale getiren
              dekoratif anahtar kapakları geliştirir.
            </p>
            <p className="mt-4 text-sm font-bold text-white">@hellolambolo</p>
            <ul className="mt-3 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/30"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Keşfet */}
          <nav aria-label="Keşfet">
            <h2 className="font-display text-lg font-bold">Keşfet</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/85">
              {FOOTER_EXPLORE.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Destek */}
          <nav aria-label="Destek">
            <h2 className="font-display text-lg font-bold">Destek</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/85">
              {FOOTER_SUPPORT.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <CookieSettingsLink className="transition-colors hover:text-white">
                  Çerez Tercihleri
                </CookieSettingsLink>
              </li>
            </ul>
          </nav>

          {/* Column 4 — Newsletter */}
          <div>
            <h2 className="font-display text-lg font-bold">Haberleri Kaçırma!</h2>
            <p className="mt-4 text-sm text-white/85">
              Lansman ve gelişmelerden ilk sen haberdar ol.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>
                <a
                  href="mailto:info@lambolo.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@lambolo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+905530343902"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  0553 034 39 02
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905530343902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  +90 553 034 39 02
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="leading-relaxed">
                  Paksoft, Bozok Teknopark, Divanlı, Bozok Ünv. Erdoğan Akdağ
                  Kampüsü, 66200 Yozgat Merkez/Yozgat
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-sm text-white/80 sm:flex-row">
          <p>© 2026 Lambolo. Tüm hakları saklıdır.</p>

          <a
            href="https://paksoft.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13.5px] leading-none transition-colors hover:bg-white/10"
          >
            <span className="text-white/60">Geliştiren</span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              className="h-[17px] w-[17px] -rotate-12 text-brand-yellow"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-.7.13-1.42.21-2.16.21-5.52 0-10-4.48-10-10S9.42 2.83 14.92 2.83c.74 0 1.46.08 2.16.21C15.58 2.5 13.85 2 12 2z" />
            </svg>
            <span className="font-extrabold tracking-wide text-white transition-colors group-hover:text-brand-yellow">
              PakSoft
            </span>
          </a>

          <p>Türkiye&apos;de tasarlanıyor, sevgiyle geliştiriliyor. 💛</p>
        </div>
      </Container>
    </footer>
  );
}
