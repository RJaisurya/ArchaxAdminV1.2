import { test } from '@playwright/test';
import {Login} from '../pages/Admin/Login';
import { Performance} from  '../performance-light_house/light_house';



test('Performance Test', async ({ playwright }) => {
  const browser = await playwright.chromium.launch({
    args: ['--remote-debugging-port=9222'],
    headless: true,
  });
  const page = await browser.newPage();

  const loginPage = new Login(page);
  await loginPage.gotoLoginpage();
  await loginPage.login("admin@archax.com", "Test@123");
  await loginPage.logbtn();

  const perf = new Performance(page, browser);
  await perf.runAudit();
});
