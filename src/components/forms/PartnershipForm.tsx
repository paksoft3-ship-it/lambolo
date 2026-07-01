"use client";

import { useId, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { FormField } from "@/components/forms/FormField";
import { Button } from "@/components/ui/Button";
import {
  PARTNERSHIP_TYPES,
  partnershipSchema,
  type PartnershipType,
} from "@/lib/validation";

type FieldErrors = Partial<
  Record<"name" | "company" | "phone" | "email" | "type" | "message", string>
>;
type Status = "idle" | "loading" | "success" | "error";

export function PartnershipForm() {
  const uid = useId();
  const [values, setValues] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    type: "" as PartnershipType | "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  function set<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerMessage("");
    const parsed = partnershipSchema.safeParse({
      ...values,
      type: values.type || undefined,
    });
    if (!parsed.success) {
      const f = parsed.error.flatten().fieldErrors;
      setErrors({
        name: f.name?.[0],
        company: f.company?.[0],
        phone: f.phone?.[0],
        email: f.email?.[0],
        type: f.type?.[0],
        message: f.message?.[0],
      });
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/partnership", {
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
        className="flex flex-col items-center gap-3 rounded-section bg-brand-green-soft p-8 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <p className="font-display text-xl font-bold text-navy">
          {serverMessage || "Teşekkürler! Başvurun bize ulaştı."}
        </p>
        <p className="text-sm text-muted">En kısa sürede seninle iletişime geçeceğiz. 🤝</p>
      </div>
    );
  }

  const typeErrorId = errors.type ? `${uid}-type-error` : undefined;
  const msgErrorId = errors.message ? `${uid}-message-error` : undefined;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          label="Ad Soyad"
          name={`${uid}-name`}
          autoComplete="name"
          placeholder="Adın ve soyadın"
          required
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
          error={errors.name}
        />
        <FormField
          label="Şirket (Opsiyonel)"
          name={`${uid}-company`}
          autoComplete="organization"
          placeholder="Şirket adı"
          value={values.company}
          onChange={(e) => set("company", e.target.value)}
          error={errors.company}
        />
        <FormField
          label="Telefon (Opsiyonel)"
          name={`${uid}-phone`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="05XX XXX XX XX"
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
          error={errors.phone}
        />
        <FormField
          label="E-posta Adresi"
          name={`${uid}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="ornek@eposta.com"
          required
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
          error={errors.email}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-type`} className="text-sm font-semibold text-navy">
          Başvuru Türü
          <span aria-hidden className="ml-0.5 text-brand-pink">*</span>
        </label>
        <select
          id={`${uid}-type`}
          required
          aria-required
          aria-invalid={errors.type ? true : undefined}
          aria-describedby={typeErrorId}
          value={values.type}
          onChange={(e) => set("type", e.target.value as PartnershipType)}
          className={`h-[50px] w-full rounded-input border bg-white px-4 text-[15px] text-body outline-none transition-shadow focus:border-brand-blue focus:shadow-[0_0_0_4px_rgba(8,124,240,0.18)] ${
            errors.type ? "border-brand-pink" : "border-soft-border"
          }`}
        >
          <option value="" disabled>
            Seçiniz…
          </option>
          {PARTNERSHIP_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.type && (
          <p id={typeErrorId} role="alert" className="text-xs font-semibold text-brand-pink-dark">
            {errors.type}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-message`} className="text-sm font-semibold text-navy">
          Mesaj
          <span aria-hidden className="ml-0.5 text-brand-pink">*</span>
        </label>
        <textarea
          id={`${uid}-message`}
          required
          aria-required
          rows={4}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={msgErrorId}
          placeholder="Bizimle nasıl bir iş birliği düşündüğünden bahset…"
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          className={`w-full rounded-input border bg-white px-4 py-3 text-[15px] text-body outline-none transition-shadow focus:border-brand-blue focus:shadow-[0_0_0_4px_rgba(8,124,240,0.18)] ${
            errors.message ? "border-brand-pink" : "border-soft-border"
          }`}
        />
        {errors.message && (
          <p id={msgErrorId} role="alert" className="text-xs font-semibold text-brand-pink-dark">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-semibold text-brand-pink-dark">
          {serverMessage}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Gönderiliyor…
          </>
        ) : (
          <>
            Gönder
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
