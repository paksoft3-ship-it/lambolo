import Image from "next/image";
import {
  ACCENT_PILL,
  ACCENT_TEXT,
  type Character,
} from "@/data/characters";

export function CharacterCard({
  character,
  priority = false,
}: {
  character: Character;
  priority?: boolean;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-product border border-soft-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-[5px] hover:shadow-soft-lg">
      <div
        className="flex aspect-square items-center justify-center p-3"
        style={{ backgroundColor: character.cardBg }}
      >
        <Image
          src={character.image}
          alt={character.alt}
          width={300}
          height={300}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 768px) 78vw, (max-width: 1024px) 30vw, 200px"
          className="h-full w-full object-contain drop-shadow-[0_8px_14px_rgba(16,52,106,0.12)]"
        />
      </div>
      <div className="flex flex-col items-center gap-1 px-3 py-4 text-center">
        <h3 className={`font-display text-xl font-bold ${ACCENT_TEXT[character.accent]}`}>
          {character.name}
        </h3>
        <p className="text-sm text-muted">{character.subtitle}</p>
        <span
          className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${ACCENT_PILL[character.accent]}`}
        >
          Yakında!
        </span>
      </div>
    </article>
  );
}
