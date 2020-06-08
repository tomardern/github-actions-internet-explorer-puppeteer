const puppeteer = require("puppeteer-ie");

(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto("https://www.bloomandwild.com/");
  const title = await page.title();
  console.log("Title is", title);
  await page.close();
  await browser.close();
})();
