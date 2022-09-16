const puppeteer = require('puppeteer');

class ScrapingService {
  constructor() {}

  async get() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://alura.com.br/formacao-front-end');
    await page.screenshot({ path: 'example.png' });
    await browser.close();
    return 'Web Scapping Service pronto';
  }
}

module.exports = ScrapingService;
