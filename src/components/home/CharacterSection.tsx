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

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-6 lg:gap-4">
          {CHARACTERS.map((character, i) => (
            <CharacterCard key={character.id} character={character} priority={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
