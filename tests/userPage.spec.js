import {expect,test} from '@playwright/test';
import {micrologin} from '../pages/userPage/MicrosoftLogin.js';


test('Microsoft login', async({page})=>{
    const Login=new micrologin(page);
    await Login.gotoUserPage();
    await Login.MailInput("jaisurya@yopmail.com");
    await Login.NxtBtn();
    await Login.LogMicroBtn();
    await page.waitForTimeout(5000);
    await Login.MicroMailInput("jaisurya@yopmail.com");
    await page.waitForTimeout(2000);
    await Login.MicroPassInput("Test@123");
    await Login.Signbtn();
    await page.waitForTimeout(5000);
    await Login.walletBalanceMenu();
    // await Login.transactionHist();
    await Login.initTransaction("Bitcoin Test");
    //await page.waitForTimeout(3000);
})