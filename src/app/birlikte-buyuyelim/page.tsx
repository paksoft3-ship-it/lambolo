import type { Metadata } from "next";
import {
  ArrowRight,
  Factory,
  Globe,
  Handshake,
  Palette,
  PackageOpen,
  Rocket,
  ShoppingBag,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { PartnershipForm } from "@/components/forms/PartnershipForm";

export const metadata: Metadata = {
  title: "Birlikte Büyüyelim",
  description:
    "Lambolo ile üretim, bayilik, distribütörlük, içerik, tasarım ve yurt dışı iş birlikleri. Birlikte büyümek için bize ulaş.",
  alternates: { canonical: "/birlikte-buyuyelim" },
};

type PartnerType = {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  bg: string;
};

const PARTNER_TYPES: PartnerType[] = [
  {
    title: "Üretim İş Ortaklığı",
    description: "Üretim kapasiteniz varsa birlikte üretmek için görüşelim.",
    Icon: Factory,
    color: "#087CF0",
    bg: "#EAF4FF",
  },
  {
    title: "Bayilik / Satış",
    description:
      "Mağazanızda veya e-ticaret sitenizde Lambolo ürünlerini satmak isterseniz ulaşın.",
    Icon: ShoppingBag,
    color: "#41B84E",
    bg: "#EAF8EC",
  },
  {
    title: "Distribütörlük",
    description: "Şehrinizde veya ülkenizde Lambolo'yu temsil etmek ister misiniz?",
    Icon: PackageOpen,
    color: "#FF9D0A",
    bg: "#FFF1D6",
  },
  {
    title: "İçerik Üreticisi",
    description:
      "Sosyal medya içerikleri üretmek veya birlikte çalışmak isterseniz başvurun.",
    Icon: Smartphone,
    color: "#F53667",
    bg: "#FFE9F0",
  },
  {
    title: "Tasarımcı",
    description: "Yeni karakter ve ürün fikirleri geliştirmek için ekibimize katılın.",
    Icon: Palette,
    color: "#7C4DD1",
    bg: "#F0E8FF",
  },
  {
    title: "İş Geliştirme",
    description: "Yeni fikirleriniz veya iş birlikleri için bizimle iletişime geçin.",
    Icon: Rocket,
    color: "#087CF0",
    bg: "#EAF4FF",
  },
  {
    title: "Yurt Dışı İş Birliği",
    description: "Uluslararası satış ve distribütörlük başvuruları için buradayız.",
    Icon: Globe,
    color: "#41B84E",
    bg: "#EAF8EC",
  },
];

export default function PartnershipPage() {
  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className="bg-brand-yellow py-16 lg:py-20" aria-label="Birlikte Büyüyelim">
          <Container className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-navy shadow-soft">
              <Handshake className="h-4 w-4 text-brand-pink" />
              Birlikte Büyüyelim
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-[34px] font-bold leading-tight text-navy lg:text-[46px]">
              Lambolo yalnızca bir marka değil, birlikte büyüttüğümüz bir hayal.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy/80">
              Lambolo büyüyen bir marka olarak farklı alanlarda güçlü iş ortaklarıyla
              çalışmayı hedefliyor. Bu yolculuğun bir parçası olmak istiyorsan seninle
              tanışmak isteriz.
            </p>
          </Container>
        </section>

        {/* Co-design community — "Birlikte Tasarlayalım" */}
        <section className="bg-white pt-14 lg:pt-20" aria-label="Birlikte Tasarlayalım">
          <Container>
            <div className="relative overflow-hidden rounded-section bg-gradient-to-br from-brand-blue to-brand-blue-dark px-6 py-12 text-center text-white shadow-soft-lg sm:px-10 lg:py-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold">
                <Sparkles className="h-4 w-4" />
                Birlikte Tasarlayalım
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-[28px] font-bold leading-tight lg:text-[40px]">
                Sıradaki Lambolo karakteri senin fikrin olabilir.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Yeni karakter önerilerinizi bize gönderin. Belki bir sonraki Lambolo
                tam da sizin hayal ettiğiniz karakter olur. Birlikte tasarlar, birlikte
                büyürüz. 💛
              </p>
              <Button href="#basvuru" size="lg" variant="secondary" className="mt-7">
                Karakter Öner
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Container>
        </section>

        {/* Partner types */}
        <section className="bg-white py-16 lg:py-20">
          <Container>
            <h2 className="text-center font-display text-[28px] font-bold text-navy lg:text-[34px]">
              Hangi konularda iş birliği yapabiliriz?
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PARTNER_TYPES.map(({ title, description, Icon, color, bg }) => (
                <article
                  key={title}
                  className="flex flex-col items-start gap-4 rounded-section border border-soft-border bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: bg, color }}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Application form */}
        <section id="basvuru" className="scroll-mt-24 bg-cream py-16 lg:py-20" aria-label="Başvuru formu">
          <Container className="max-w-3xl">
            <div className="rounded-section border border-soft-border bg-white p-6 shadow-soft-lg sm:p-9">
              <h2 className="font-display text-[26px] font-bold text-navy lg:text-[30px]">
                İş Ortaklığı Başvurusu
              </h2>
              <p className="mt-2 text-[15px] text-muted">
                Formu doldur, ekibimiz en kısa sürede seninle iletişime geçsin.
              </p>
              <div className="mt-7">
                <PartnershipForm />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
