import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroDoodles } from "@/components/ui/DecorativeDoodles";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-yellow" aria-label="Tanıtım">
      <HeroDoodles />
      <Container className="relative py-10 lg:py-14">
        <div className="hero-grid">
          {/* Headline + slogan + paragraph */}
          <div className="hero-headline text-center lg:text-left">
            <h1 className="font-display text-[40px] font-bold leading-[1.04] sm:text-[52px] lg:text-[60px]">
              <span className="block text-navy">Her Odanın</span>
              <span className="headline-outline block text-brand-pink">Bir Karakteri</span>
              <span className="headline-outline block text-brand-blue">Olsun.</span>
            </h1>

            <p className="mx-auto mt-5 inline-flex flex-wrap items-center justify-center gap-x-1.5 rounded-full bg-white px-5 py-2 font-display text-lg font-bold shadow-soft lg:mx-0">
              <span className="text-brand-orange">Dokun.</span>
              <span className="text-brand-green">Oyna.</span>
              <span className="text-brand-blue">Aydınlat.</span>
            </p>

            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-navy/80 lg:mx-0 lg:text-base">
              Lambolo; çocuk odaları, mutfaklar ve oyuncu odaları için tasarlanmış
              dekoratif anahtar kapaklarıyla yaşam alanlarını kişiselleştirir.
            </p>
          </div>

          {/* Product visual */}
          <div className="hero-product relative mx-auto w-full max-w-[360px]">
            <Image
              src="/images/products/kurbi.png"
              alt="Kurbi kurbağa karakterli Lambolo anahtar aparatı, mevcut duvar anahtarının üzerine takılmış halde"
              width={560}
              height={560}
              priority
              sizes="(max-width: 1024px) 70vw, 30vw"
              className="h-auto w-full animate-floating drop-shadow-[0_20px_30px_rgba(16,52,106,0.18)]"
            />
            {/* Circular callout */}
            <div className="absolute -left-2 top-6 hidden h-[92px] w-[92px] rotate-[-8deg] flex-col items-center justify-center rounded-full bg-brand-blue p-2 text-center text-[9px] font-bold leading-tight text-white shadow-soft sm:flex lg:-left-4 lg:top-10">
              ANAHTARIN
              <br />
              ÜSTÜNE TAK,
              <br />
              DOKUN. OYNA.
              <br />
              AYDINLAT!
            </div>
            {/* Curved arrow pointing toward tongue/switch */}
            <svg
              aria-hidden
              className="absolute left-[70px] top-[110px] hidden h-12 w-16 text-brand-blue sm:block lg:left-[64px]"
              viewBox="0 0 64 48"
              fill="none"
            >
              <path
                d="M4 6 C 24 2, 44 14, 50 38"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M50 38 l-9 -4 M50 38 l3 -9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* CTA buttons */}
          <div className="hero-buttons flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="/#bekleme-listesi" size="lg" className="w-full sm:w-auto">
              Bekleme Listesine Katıl
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#nasil-calisir" variant="secondary" size="lg" className="w-full sm:w-auto">
              <PlayCircle className="h-5 w-5 text-brand-orange" />
              Nasıl Çalışır?
            </Button>
          </div>

          {/* Waitlist form */}
          <div className="hero-form rounded-section bg-brand-blue p-6 shadow-soft-lg sm:p-7">
            <h2 className="font-display text-2xl font-bold leading-tight text-white">
              İlk üretimde yerini al!
            </h2>
            <p className="mt-2 text-sm text-white/85">
              İlk satış, özel avantajlar ve lansmana özel fırsatlardan ilk sen haberdar ol.
            </p>
            <div className="mt-5">
              <WaitlistForm source="hero" variant="hero" tone="onColor" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
