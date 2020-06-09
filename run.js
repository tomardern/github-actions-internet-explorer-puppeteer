const puppeteer = require("puppeteer-ie");

(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto("https://tsc:tsc@staging.traderssupportclub.com/");
  const title = await page.title();
  console.log("Title is", title);
  await page.close();
  console.log("Page is closed");
  await browser.close();
  console.log("Browser is closed");
  process.exit(0);
})();
