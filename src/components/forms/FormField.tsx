"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

type Tone = "light" | "onColor";

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  required?: boolean;
  tone?: Tone;
  rightIcon?: ReactNode;
};

const toneStyles: Record<Tone, { label: string; input: string }> = {
  light: {
    label: "text-navy",
    input:
      "bg-white border-soft-border text-body placeholder:text-muted/70 focus:border-brand-blue",
  },
  onColor: {
    label: "text-white",
    input:
      "bg-white border-transparent text-body placeholder:text-muted/70 focus:border-white",
  },
};

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  function FormField(
    { label, name, error, hint, required, tone = "light", rightIcon, className = "", ...rest },
    ref,
  ) {
    const errorId = error ? `${name}-error` : undefined;
    const hintId = hint ? `${name}-hint` : undefined;
    const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;
    const styles = toneStyles[tone];

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={name} className={`text-sm font-semibold ${styles.label}`}>
          {label}
          {required && (
            <span aria-hidden className="ml-0.5 text-brand-pink">
              *
            </span>
          )}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={name}
            name={name}
            required={required}
            aria-required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className={`h-[50px] w-full rounded-input border px-4 text-[15px] outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(8,124,240,0.18)] ${styles.input} ${
              error ? "!border-brand-pink" : ""
            } ${rightIcon ? "pr-11" : ""} ${className}`}
            {...rest}
          />
          {rightIcon && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
              {rightIcon}
            </span>
          )}
        </div>
        {hint && !error && (
          <p id={hintId} className={tone === "onColor" ? "text-xs text-white/80" : "text-xs text-muted"}>
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} role="alert" className={tone === "onColor" ? "text-xs font-semibold text-white" : "text-xs font-semibold text-brand-pink-dark"}>
            {error}
          </p>
        )}
      </div>
    );
  },
);
