import { type LucideIcon } from "lucide-react";

export type Benefit = {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconBg: string;
};

export function BenefitCard({ title, description, Icon, iconBg }: Benefit) {
  return (
    <article className="flex flex-col items-center rounded-section bg-white p-6 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <span
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
