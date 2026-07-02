import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { KITCHEN_PRODUCTS } from "@/data/kitchen";

export function KitchenSection() {
  return (
    <section
      id="mutfak-serisi"
      className="scroll-mt-24 bg-cream py-16 lg:py-20"
      aria-label="Mutfak Serisi"
    >
      <Container>
        <SectionHeading decorated>Mutfak Serisi 🍳</SectionHeading>
        <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-muted">
          Mutfağınıza karakter katan dekoratif anahtar kapakları. Her biri, ışığı açıp
          kapatmayı küçük bir keyfe dönüştürür.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {KITCHEN_PRODUCTS.map((product, i) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-product border border-soft-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-[5px] hover:shadow-soft-lg"
            >
              <div
                className="aspect-square overflow-hidden"
                style={{ backgroundColor: product.cardBg }}
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={480}
                  height={480}
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 260px"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col items-center gap-1.5 px-3 py-4 text-center">
                <h3
                  className="flex items-center gap-1.5 font-display text-xl font-bold"
                  style={{ color: product.accent }}
                >
                  <span aria-hidden>{product.emoji}</span>
                  {product.name}
                </h3>
                <p className="text-[13px] leading-snug text-muted">{product.action}</p>
                <span
                  className="mt-auto inline-flex rounded-full px-3 py-1 text-xs font-bold"
                  style={{ backgroundColor: product.cardBg, color: product.accent }}
                >
                  Yakında!
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
