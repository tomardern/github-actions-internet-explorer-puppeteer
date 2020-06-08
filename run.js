const puppeteer = require("puppeteer-ie");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.bbc.co.uk/");
  const title = await page.title();
  console.log(title);
  await browser.close();
})();
