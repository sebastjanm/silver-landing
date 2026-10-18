/**
 * Screenshot script for before/after comparison
 * Captures full-page screenshots at 1280x1024 (desktop) and 390x844 (mobile)
 */

import { chromium } from '@playwright/test';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const DESKTOP_VIEWPORT = { width: 1280, height: 1024 };
const MOBILE_VIEWPORT = { width: 390, height: 844 };
const OUTPUT_DIR = join(process.cwd(), 'screenshots');

async function captureScreenshots(url: string, prefix: string) {
  const browser = await chromium.launch();
  
  // Desktop
  const desktopPage = await browser.newPage({ viewport: DESKTOP_VIEWPORT });
  await desktopPage.goto(url);
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.screenshot({
    path: join(OUTPUT_DIR, `${prefix}-desktop-1280.png`),
    fullPage: true,
  });
  await desktopPage.close();

  // Mobile
  const mobilePage = await browser.newPage({ viewport: MOBILE_VIEWPORT });
  await mobilePage.goto(url);
  await mobilePage.waitForLoadState('networkidle');
  await mobilePage.screenshot({
    path: join(OUTPUT_DIR, `${prefix}-mobile-390.png`),
    fullPage: true,
  });
  await mobilePage.close();

  await browser.close();
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  
  console.log(`Capturing screenshots from ${baseUrl}...`);
  
  console.log('  Homepage...');
  await captureScreenshots(`${baseUrl}/`, 'homepage');
  
  console.log('  Posvet page...');
  await captureScreenshots(`${baseUrl}/posvet`, 'posvet');
  
  console.log(`\nScreenshots saved to ${OUTPUT_DIR}/`);
}

main().catch(console.error);
