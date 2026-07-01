import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CharacterCard } from "@/components/home/CharacterCard";
import { CHARACTERS } from "@/data/characters";

export function CharacterSection() {
  return (
    <section id="karakterler" className="scroll-mt-24 bg-white py-16 lg:py-20" aria-label="Karakterler">
      <Container>
        <SectionHeading decorated>Çocukların Yeni Işık Arkadaşları</SectionHeading>
        <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-muted">
          Her biri günlük ışık rutinini keyifli bir alışkanlığa dönüştürmek için tasarlanan
          altı sevimli karakter.
        </p>

        <div
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0 lg:grid-cols-6 lg:gap-4"
        >
          {CHARACTERS.map((character, i) => (
            <div
              key={character.id}
              className="min-w-[78%] snap-start sm:min-w-[60%] md:min-w-0"
            >
              <CharacterCard character={character} priority={i === 0} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
