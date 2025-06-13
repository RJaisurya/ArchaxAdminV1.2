// performance-light_house/light_house.js
const { playAudit } = require('playwright-lighthouse');

exports.Performance = class Performance {
  constructor(page, browser) {
    this.page = page;
    this.browser = browser;
  }

  async runAudit() {
    try {
      await playAudit({
        page: this.page,
        thresholds: {
          performance: 50,
          accessibility: 70,
          'best-practices': 70,
          seo: 70,
          pwa: 50
        },
        port: 9222,
        reports: {
          formats: { html: true },
          name: 'home-page-lighthouse-report'
        }
      });

      console.log('Lighthouse audit completed.');
    } catch (error) {
      console.error('Audit failed:', error);
    } finally {
      await this.browser.close();
    }
  }
};
