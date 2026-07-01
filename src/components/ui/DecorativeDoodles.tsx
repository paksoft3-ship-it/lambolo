/**
 * Playful hero/section doodles (lightning, stars, crosses, curves, circles).
 * Purely decorative — aria-hidden, pointer-events-none, and positioned in the
 * margins so they never sit behind important text or controls.
 */

type DoodleProps = { className?: string };

function Lightning({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M13 2 L4 14 h6 l-2 8 L18 9 h-6 z"
        fill="currentColor"
        stroke="white"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Star({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l2.6 6.5L21 9l-5 4.2L17.5 21 12 17l-5.5 4 1.5-7.8L3 9l6.4-.5z" />
    </svg>
  );
}

function Cross({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 4v16M4 12h16"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Curve({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 24" className={className} fill="none" aria-hidden>
      <path
        d="M2 12 C 8 2, 14 22, 20 12 S 32 2, 38 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Ring({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

/** Scattered doodle field for the yellow hero. */
export function HeroDoodles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
    >
      <Lightning className="absolute left-[3%] top-[22%] h-7 w-7 text-brand-pink" />
      <Star className="absolute left-[7%] top-[52%] h-5 w-5 text-brand-blue" />
      <Curve className="absolute left-[30%] top-[8%] h-5 w-10 text-brand-blue" />
      <Cross className="absolute left-[2%] top-[72%] h-4 w-4 text-brand-pink" />
      <Ring className="absolute bottom-[10%] left-[24%] h-4 w-4 text-white" />
      <Star className="absolute right-[2%] top-[16%] h-5 w-5 text-white" />
      <Lightning className="absolute right-[28%] top-[34%] h-6 w-6 text-brand-pink" />
      <Cross className="absolute right-[4%] top-[58%] h-4 w-4 text-brand-blue" />
      <Curve className="absolute bottom-[8%] right-[6%] h-5 w-10 text-brand-pink" />
    </div>
  );
}

/** Lighter doodle field used on white/cream sections. */
export function ScatterDoodles({ tone = "muted" }: { tone?: "muted" | "bright" }) {
  const c = tone === "bright" ? "" : "opacity-70";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 hidden lg:block ${c}`}>
      <Star className="absolute left-[4%] top-[18%] h-5 w-5 text-brand-yellow" />
      <Curve className="absolute left-[6%] bottom-[20%] h-5 w-10 text-brand-pink" />
      <Star className="absolute right-[5%] top-[28%] h-4 w-4 text-brand-blue" />
      <Cross className="absolute right-[8%] bottom-[24%] h-4 w-4 text-brand-orange" />
    </div>
  );
}

export const Doodle = { Lightning, Star, Cross, Curve, Ring };
