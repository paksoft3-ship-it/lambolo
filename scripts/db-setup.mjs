/**
 * One-shot schema setup for Neon / Postgres.
 * Reads db/schema.sql and runs it against DATABASE_URL.
 *
 * Usage: npm run db:setup
 * Loads env from .env.local / .env if present.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { neon } from "@neondatabase/serverless";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Minimal .env loader (no dependency): prefer .env.local, then .env.
for (const file of [".env.local", ".env"]) {
  try {
    const text = readFileSync(join(root, file), "utf8");
    for (const line of text.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    // file absent — fine
  }
}

// Prefer an unpooled/direct connection for DDL if available.
const url =
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL;

if (!url) {
  console.error("✗ No DATABASE_URL found (checked .env.local / .env / env).");
  process.exit(1);
}

const sqlText = readFileSync(join(root, "db", "schema.sql"), "utf8");

// Strip full-line comments first, then split on ';' (schema has no embedded
// semicolons inside statements).
const statements = sqlText
  .split("\n")
  .filter((line) => !line.trim().startsWith("--"))
  .join("\n")
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean);

const sql = neon(url);

try {
  for (const statement of statements) {
    await sql.query(statement);
  }
  console.log(`✓ Applied ${statements.length} statements to the database.`);
} catch (err) {
  console.error("✗ Schema setup failed:", err.message);
  process.exit(1);
}
