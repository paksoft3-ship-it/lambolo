# Lambolo — Landing Page

> **Dokun. Oyna. Aydınlat.**
> Lambolo, çocukların ışık anahtarlarını eğlenceli karakterlere dönüştüren
> **Anahtar Serisi** ile çok yakında. Bu depo, lansman öncesi bekleme listesi
> (waitlist) ve iş ortaklığı başvurularını toplayan tek sayfalık tanıtım sitesidir.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS** (centralized theme tokens)
- **next/font** — Fredoka (display) + Nunito Sans (body)
- **next/image** for optimized product/logo imagery
- **lucide-react** icons · **Zod** validation
- **Playwright** for visual-QA screenshots

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — Supabase is not required in dev
npm run dev                  # http://localhost:3000
```

| Script              | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Start the dev server                                 |
| `npm run build`     | Production build                                     |
| `npm run start`     | Serve the production build                           |
| `npm run lint`      | ESLint (next/core-web-vitals)                        |
| `npm run typecheck` | `tsc --noEmit`                                       |
| `npm run screenshot`| Full-page desktop (1440) + mobile (390) screenshots  |

## Routes

- `/` — homepage (hero · characters · neden lambolo · nasıl çalışır · bekleme listesi · merak ettikleriniz · footer)
- `/birlikte-buyuyelim` — partnership hub + application form
- `POST /api/waitlist` — waitlist submissions
- `POST /api/partnership` — partnership applications

## Waitlist / Partnership storage

Persistence is provider-independent (`src/lib/leads-store.ts`):

- **With Supabase env vars** → leads are written to Supabase via the REST API
  using the **server-only** service-role key.
- **Without env vars (development)** → an in-memory mock store (logged to the
  console) so forms are fully testable.
- **Without env vars (production)** → the API returns a clear configuration
  error instead of silently dropping a real submission.

Run `supabase/migrations/0001_init_leads.sql` to create the tables.

### Environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://lambolo.com
NEXT_PUBLIC_SUPABASE_URL=        # optional
SUPABASE_SERVICE_ROLE_KEY=       # optional, server-only — never exposed to the browser
```

## Assets

Source PNGs in the repo root are preserved. Working copies live in `public/images/`
with backgrounds removed for clean compositing:

| File              | Character        |
| ----------------- | ---------------- |
| `products/kurbi.png` | Kurbi (frog)   |
| `products/pandi.png` | Pandi (panda)  |
| `products/rexi.png`  | Rexi (dinosaur)|
| `products/leo.png`   | Leo (lion)     |
| `products/miu.png`   | Miu (cat)      |
| `products/uni.png`   | Uni (unicorn)  |

## Deploy (Vercel)

Zero-config. Import the repo into Vercel and (optionally) set the environment
variables above. `npm run build` must pass cleanly before deploy.
