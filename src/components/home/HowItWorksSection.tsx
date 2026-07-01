import { ArrowDown, ArrowRight, Lightbulb, PartyPopper } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HowItWorksStep, type Step } from "@/components/home/HowItWorksStep";

const STEPS: Step[] = [
  {
    number: 1,
    title: "Tak",
    description: "Karakteri uyumlu anahtarın üzerine kolayca yerleştir.",
    accent: "#087CF0",
    image: "/images/products/kurbi.png",
    imageAlt: "Kurbi karakterini anahtarın üzerine yerleştirme adımı",
    visualBg: "#EAF4FF",
  },
  {
    number: 2,
    title: "Dokun",
    description: "Karakterin hareketli parçasına — Kurbi'nin diline — dokun.",
    accent: "#41B84E",
    image: "/images/products/kurbi.png",
    imageAlt: "Kurbi'nin diline dokunarak anahtarı hareket ettirme adımı",
    visualBg: "#EAF8EC",
  },
  {
    number: 3,
    title: "Aç / Kapat",
    description: "Mevcut anahtar hareket eder, odanın ışığını sen kontrol et.",
    accent: "#F53667",
    Icon: Lightbulb,
    iconColor: "#FF9D0A",
    visualBg: "#FFF1D6",
  },
  {
    number: 4,
    title: "Alışkanlık Kazan",
    description: "Günlük rutin keyifli ve kalıcı bir alışkanlığa dönüşür.",
    accent: "#FF9D0A",
    Icon: PartyPopper,
    iconColor: "#F53667",
    visualBg: "#FFE9F0",
  },
];

const ARROW_COLORS = ["#087CF0", "#41B84E", "#F53667"];

export function HowItWorksSection() {
  return (
    <section
      id="nasil-calisir"
      className="scroll-mt-24 bg-cream py-16 lg:py-20"
      aria-label="Nasıl Çalışır?"
    >
      <Container>
        <SectionHeading decorated>Nasıl Çalışır?</SectionHeading>

        <div className="mt-12 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-10 lg:flex lg:flex-row lg:items-start lg:gap-1">
          {STEPS.map((step, i) => (
            <div key={step.number} className="contents lg:flex lg:flex-1 lg:items-start">
              <HowItWorksStep {...step} />
              {i < STEPS.length - 1 && (
                <>
                  {/* Mobile vertical connector */}
                  <div className="flex justify-center md:hidden" aria-hidden>
                    <ArrowDown
                      className="h-7 w-7"
                      style={{ color: ARROW_COLORS[i] }}
                    />
                  </div>
                  {/* Desktop horizontal connector */}
                  <div className="hidden lg:flex lg:shrink-0 lg:pt-10" aria-hidden>
                    <ArrowRight
                      className="h-8 w-8"
                      style={{ color: ARROW_COLORS[i] }}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
