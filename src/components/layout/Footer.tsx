import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { FOOTER_EXPLORE, FOOTER_SUPPORT } from "@/data/navigation";

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
              Lambolo, sıradan ışık anahtarlarını çocuklar için keyifli bir günlük
              alışkanlığa dönüştürmek üzere geliştiriliyor.
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
            <a
              href="mailto:info@lambolo.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              info@lambolo.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-sm text-white/80 sm:flex-row">
          <p>© 2026 Lambolo. Tüm hakları saklıdır.</p>
          <p>Türkiye&apos;de tasarlanıyor, sevgiyle geliştiriliyor. 💛</p>
        </div>
      </Container>
    </footer>
  );
}
