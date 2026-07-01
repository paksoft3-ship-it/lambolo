import { type ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  /** Decorative side strokes (the yellow accents in the reference). */
  decorated?: boolean;
  className?: string;
  strokeColor?: string;
  as?: "h2" | "h3";
};

function Stroke({ color }: { color: string }) {
  return (
    <span aria-hidden className="hidden items-center gap-1 sm:flex">
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
        <path
          d="M2 14 C 10 4, 18 4, 26 12 M30 6 l4 4 M34 14 l4 -4"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function SectionHeading({
  children,
  decorated = false,
  className = "",
  strokeColor = "#FFC900",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {decorated && <Stroke color={strokeColor} />}
      <Tag className="text-center font-display text-[30px] font-bold leading-tight sm:text-[34px] lg:text-[38px]">
        {children}
      </Tag>
      {decorated && (
        <span className="hidden sm:block sm:-scale-x-100">
          <Stroke color={strokeColor} />
        </span>
      )}
    </div>
  );
}
