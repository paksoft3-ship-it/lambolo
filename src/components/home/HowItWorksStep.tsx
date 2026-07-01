import Image from "next/image";
import { type LucideIcon } from "lucide-react";

export type Step = {
  number: number;
  title: string;
  description: string;
  accent: string;
  /** Either a product image path or an icon. */
  image?: string;
  imageAlt?: string;
  Icon?: LucideIcon;
  iconColor?: string;
  visualBg: string;
};

export function HowItWorksStep({
  number,
  title,
  description,
  accent,
  image,
  imageAlt,
  Icon,
  iconColor,
  visualBg,
}: Step) {
  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <div className="relative">
        <div
          className="flex h-28 w-28 items-center justify-center rounded-full"
          style={{ backgroundColor: visualBg }}
        >
          {image ? (
            <Image
              src={image}
              alt={imageAlt ?? ""}
              width={120}
              height={120}
              loading="lazy"
              sizes="112px"
              className="h-[88px] w-[88px] object-contain drop-shadow-[0_6px_10px_rgba(16,52,106,0.15)]"
            />
          ) : Icon ? (
            <Icon className="h-12 w-12" style={{ color: iconColor }} aria-hidden />
          ) : null}
        </div>
        <span
          className="absolute -left-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full font-display text-base font-bold text-white shadow-soft"
          style={{ backgroundColor: accent }}
        >
          {number}
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-navy">{title}</h3>
      <p className="mt-1.5 max-w-[220px] text-sm leading-relaxed text-muted">
        {description}
      </p>
    </div>
  );
}
