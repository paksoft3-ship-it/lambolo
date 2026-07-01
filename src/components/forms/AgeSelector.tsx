"use client";

import { AGE_RANGES, type AgeRange } from "@/lib/validation";

type AgeSelectorProps = {
  label: string;
  value?: AgeRange;
  onChange: (value?: AgeRange) => void;
  tone?: "light" | "onColor";
};

export function AgeSelector({ label, value, onChange, tone = "onColor" }: AgeSelectorProps) {
  const labelColor = tone === "onColor" ? "text-white" : "text-navy";
  return (
    <fieldset className="flex flex-col gap-1.5">
      <legend className={`mb-1.5 text-sm font-semibold ${labelColor}`}>{label}</legend>
      <div
        role="radiogroup"
        aria-label={label}
        className="grid grid-cols-3 gap-2"
      >
        {AGE_RANGES.map((age) => {
          const active = value === age;
          return (
            <button
              key={age}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(active ? undefined : age)}
              className={`h-[46px] rounded-input border text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 ${
                active
                  ? "border-white bg-white text-brand-blue-dark shadow-soft"
                  : tone === "onColor"
                    ? "border-white/40 bg-white/10 text-white hover:bg-white/20"
                    : "border-soft-border bg-white text-navy hover:border-brand-blue"
              }`}
            >
              {age}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
