import { z } from "zod";

export const AGE_RANGES = ["2-4", "5-7", "8+"] as const;
export type AgeRange = (typeof AGE_RANGES)[number];

export const WAITLIST_SOURCES = ["hero", "footer", "coming-soon"] as const;
export type WaitlistSource = (typeof WAITLIST_SOURCES)[number];

/** Lenient TR-friendly phone: digits, spaces, +, (), - — optional. */
const phoneSchema = z
  .string()
  .trim()
  .regex(/^[0-9+()\s-]{7,20}$/u, "Geçerli bir telefon numarası gir.")
  .optional()
  .or(z.literal("").transform(() => undefined));

export const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Lütfen adını ve soyadını gir.")
    .max(80, "İsim çok uzun."),
  email: z
    .string()
    .trim()
    .min(1, "E-posta adresi gerekli.")
    .email("Geçerli bir e-posta adresi gir."),
  phone: phoneSchema,
  ageRange: z.enum(AGE_RANGES).optional(),
  consent: z.boolean().optional().default(false),
  source: z.enum(WAITLIST_SOURCES),
});

export type WaitlistInput = z.input<typeof waitlistSchema>;
export type WaitlistPayload = z.output<typeof waitlistSchema>;

export const PARTNERSHIP_TYPES = [
  "Karakter Önerisi",
  "Bayilik",
  "Distribütörlük",
  "Üretim",
  "Influencer",
  "Tasarım",
  "İş Geliştirme",
  "Yatırım",
  "Diğer",
] as const;
export type PartnershipType = (typeof PARTNERSHIP_TYPES)[number];

export const partnershipSchema = z.object({
  name: z.string().trim().min(2, "Lütfen adını ve soyadını gir.").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("").transform(() => undefined)),
  phone: phoneSchema,
  email: z.string().trim().min(1, "E-posta adresi gerekli.").email("Geçerli bir e-posta adresi gir."),
  type: z.enum(PARTNERSHIP_TYPES),
  message: z
    .string()
    .trim()
    .min(10, "Lütfen birkaç cümleyle bizden bahset.")
    .max(2000, "Mesaj çok uzun."),
});

export type PartnershipInput = z.input<typeof partnershipSchema>;
export type PartnershipPayload = z.output<typeof partnershipSchema>;
