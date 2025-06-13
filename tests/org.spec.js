import {expect,test} from '@playwright/test';

test('Org Test',async({page})=>{
    await page.goto("https://archax-dev-organ.seaswap.co/");
    await page.locator("//input[@id='email']").fill("jais@yopmail.com");
    await page.locator("//button[normalize-space()='Next']").click();
    await page.waitForTimeout(2000);
    // await page.locator("//button[normalize-space()='Login with Google']").click();
await page.locator("//button[normalize-space()='Login with Microsoft']").click();
    await page.waitForTimeout(2000);
    // await page.locator("//input[@type='email']").fill("testuser87688678@gmail.com");
    // await page.locator("//span[normalize-space()='Next']").click();
    // await page.locator("//input[@name='Passwd']").fill("testuseradmin@87688678");
    

})