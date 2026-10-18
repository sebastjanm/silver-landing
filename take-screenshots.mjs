import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';

const baseUrl = process.argv[2] || 'http://localhost:3000';
const prefix = process.argv[3] || 'before';

await mkdir('/workspace/artifacts', { recursive: true });

const browser = await chromium.launch();

const pages = [
  { path: '/', name: 'home' },
  { path: '/posvet', name: 'posvet' }
];

const widths = [
  { width: 1280, height: 1024, suffix: 'desktop' },
  { width: 390, height: 844, suffix: 'mobile' }
];

for (const page of pages) {
  for (const viewport of widths) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 2
    });
    
    const tab = await context.newPage();
    await tab.goto(`${baseUrl}${page.path}`, { waitUntil: 'networkidle' });
    
    // Wait for any lazy content
    await tab.waitForTimeout(1500);
    
    await tab.screenshot({
      path: `/workspace/artifacts/${prefix}-${page.name}-${viewport.suffix}.png`,
      fullPage: true
    });
    
    await context.close();
    console.log(`✓ ${prefix}-${page.name}-${viewport.suffix}.png`);
  }
}

await browser.close();
console.log('Screenshots complete!');
