"use client";

import { useId, useState } from "react";
import { CheckCircle2, Loader2, Lock, Send } from "lucide-react";
import { FormField } from "@/components/forms/FormField";
import { AgeSelector } from "@/components/forms/AgeSelector";
import { Button } from "@/components/ui/Button";
import {
  waitlistSchema,
  type AgeRange,
  type WaitlistSource,
} from "@/lib/validation";

type Variant = "hero" | "compact";

type FieldErrors = Partial<Record<"name" | "email" | "phone", string>>;
type Status = "idle" | "loading" | "success" | "error";

type WaitlistFormProps = {
  source: WaitlistSource;
  variant?: Variant;
  tone?: "light" | "onColor";
};

export function WaitlistForm({ source, variant = "hero", tone = "onColor" }: WaitlistFormProps) {
  const uid = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ageRange, setAgeRange] = useState<AgeRange | undefined>();
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const full = variant === "hero";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerMessage("");

    const parsed = waitlistSchema.safeParse({
      name,
      email,
      phone: full ? phone : undefined,
      ageRange: full ? ageRange : undefined,
      consent: full ? consent : false,
      source,
    });

    if (!parsed.success) {
      const field = parsed.error.flatten().fieldErrors;
      setErrors({
        name: field.name?.[0],
        email: field.email?.[0],
        phone: field.phone?.[0],
      });
      return;
    }

    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (res.ok && data.ok) {
        setStatus("success");
        setServerMessage(data.message ?? "");
      } else {
        setStatus("error");
        setServerMessage(data.message ?? "Bir hata oluştu. Lütfen tekrar dene.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Bağlantı hatası. Lütfen tekrar dene.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={`flex flex-col items-center gap-3 rounded-section p-8 text-center ${
          tone === "onColor" ? "text-white" : "text-navy"
        }`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <p className="font-display text-xl font-bold">
          {serverMessage || "Harika! Lambolo'nun ilk haberlerini sana göndereceğiz."}
        </p>
        <p className={tone === "onColor" ? "text-sm text-white/85" : "text-sm text-muted"}>
          Kutunu kontrol etmeyi unutma. 💛
        </p>
      </div>
    );
  }

  const helperColor = tone === "onColor" ? "text-white/85" : "text-muted";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
      <FormField
        label="Ad Soyad"
        name={`${uid}-name`}
        autoComplete="name"
        placeholder="Adın ve soyadın"
        required
        tone={tone}
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />
      <FormField
        label="E-posta Adresi"
        name={`${uid}-email`}
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="ornek@eposta.com"
        required
        tone={tone}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />

      {full && (
        <>
          <FormField
            label="Telefon (Opsiyonel)"
            name={`${uid}-phone`}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="05XX XXX XX XX"
            tone={tone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={errors.phone}
          />
          <AgeSelector
            label="Çocuğunuzun yaşı (Opsiyonel)"
            value={ageRange}
            onChange={setAgeRange}
            tone={tone}
          />
          <label className="mt-1 flex cursor-pointer items-start gap-2.5">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-5 w-5 shrink-0 rounded-md border-2 border-white/60 bg-white/10 accent-brand-pink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            />
            <span className={`text-xs leading-snug ${helperColor}`}>
              Kampanya ve ürün gelişmeleri hakkında ileti almak istiyorum.
            </span>
          </label>
        </>
      )}

      {status === "error" && (
        <p role="alert" className={`text-sm font-semibold ${tone === "onColor" ? "text-white" : "text-brand-pink-dark"}`}>
          {serverMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="mt-1 w-full"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Gönderiliyor…
          </>
        ) : (
          <>
            Listeye Katıl
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className={`flex items-center justify-center gap-1.5 text-xs ${helperColor}`}>
        <Lock className="h-3.5 w-3.5" />
        Bilgilerin güvende. Spam yok.
      </p>
    </form>
  );
}
