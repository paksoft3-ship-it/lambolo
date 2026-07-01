-- LAMBOLO leads schema
-- Run in the Supabase SQL editor (or via the Supabase CLI) to enable
-- persistent storage for the waitlist and partnership forms.

-- ── Waitlist ────────────────────────────────────────────────────────────────
create table if not exists public.waitlist_leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  age_range   text check (age_range in ('2-4', '5-7', '8+')),
  consent     boolean not null default false,
  source      text not null check (source in ('hero', 'footer', 'coming-soon')),
  created_at  timestamptz not null default now()
);

-- One row per email — duplicate protection (surfaces as 409/23505 to the app).
create unique index if not exists waitlist_leads_email_key
  on public.waitlist_leads (lower(email));

-- ── Partnership ─────────────────────────────────────────────────────────────
create table if not exists public.partnership_leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  company     text,
  phone       text,
  email       text not null,
  type        text not null,
  message     text not null,
  created_at  timestamptz not null default now()
);

-- ── Row Level Security ──────────────────────────────────────────────────────
-- The app writes with the service-role key, which bypasses RLS. Enabling RLS
-- without permissive policies keeps the tables private to anon/auth clients.
alter table public.waitlist_leads    enable row level security;
alter table public.partnership_leads enable row level security;
