// Captures full-page desktop + mobile screenshots for visual QA against
// homepage.png. Boots `next start` on a free port, shoots, then tears down.
//
// Usage: npm run screenshot   (runs `next build` first if .next is missing)

import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { chromium } from "playwright";

const PORT = process.env.SCREENSHOT_PORT || "3210";
const BASE = `http://localhost:${PORT}`;
const OUT = "artifacts";

async function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not start at ${url} within ${timeoutMs}ms`);
}

async function main() {
  if (!existsSync(".next")) {
    console.error('No .next build found. Run "npm run build" first.');
    process.exit(1);
  }
  await mkdir(OUT, { recursive: true });

  const server = spawn("npx", ["next", "start", "-p", PORT], {
    stdio: "inherit",
    env: process.env,
  });

  let browser;
  try {
    await waitForServer(BASE);
    browser = await chromium.launch();

    // Desktop 1440
    const desktop = await browser.newContext({
      viewport: { width: 1440, height: 1024 },
      deviceScaleFactor: 1,
    });
    const dPage = await desktop.newPage();
    await dPage.goto(BASE, { waitUntil: "networkidle" });
    await dPage.waitForTimeout(800);
    await dPage.screenshot({ path: `${OUT}/homepage-desktop.png`, fullPage: true });
    console.log(`✓ ${OUT}/homepage-desktop.png`);
    await desktop.close();

    // Mobile 390
    const mobile = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
    });
    const mPage = await mobile.newPage();
    await mPage.goto(BASE, { waitUntil: "networkidle" });
    await mPage.waitForTimeout(800);
    await mPage.screenshot({ path: `${OUT}/homepage-mobile.png`, fullPage: true });
    console.log(`✓ ${OUT}/homepage-mobile.png`);
    await mobile.close();
  } finally {
    if (browser) await browser.close();
    server.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
