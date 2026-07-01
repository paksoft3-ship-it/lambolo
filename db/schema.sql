-- Lambolo — Neon/Postgres schema for lead capture.
-- Run once against your database (Neon SQL editor, or `npm run db:setup`).

create extension if not exists pgcrypto;

-- Waitlist + newsletter signups. Email is unique so re-submits are rejected
-- (surfaced to the user as "already on the list").
create table if not exists waitlist_leads (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null unique,
  phone      text,
  age_range  text,
  consent    boolean not null default false,
  source     text not null,
  created_at timestamptz not null default now()
);

-- Partnership enquiries. Email is NOT unique — repeat enquiries are allowed.
create table if not exists partnership_leads (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  company    text,
  phone      text,
  email      text not null,
  type       text not null,
  message    text not null,
  created_at timestamptz not null default now()
);

create index if not exists waitlist_leads_created_at_idx
  on waitlist_leads (created_at desc);
create index if not exists partnership_leads_created_at_idx
  on partnership_leads (created_at desc);
