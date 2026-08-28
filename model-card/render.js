const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const [src, out, scale] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: Number(scale) || 2,
  });
  await page.goto('file://' + src, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(600);
  const jpeg = /\.jpe?g$/i.test(out);
  await page.screenshot(jpeg ? { path: out, type: 'jpeg', quality: 94 } : { path: out });
  await browser.close();
  console.log('wrote', out);
})();
