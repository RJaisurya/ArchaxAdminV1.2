import{test,expect} from '@playwright/test';
import {Login} from '../pages/Login';
import {CreaOrg} from '../pages/CreateOrganization';
import {Subadmin} from '../pages/Subadmin';


test('AdminLogin',async({page})=>{
//View in Full page
// await page.setViewportSize({ width: 1920, height: 1080 });

//Login Into the Admin Page
const login=new Login(page);
await login.gotoLoginpage();
await page.waitForTimeout(2000);
await login.login("admin@archax.com","Test@123");
await page.waitForTimeout(2000);
await login.logbtn();
await page.waitForTimeout(2000);

//Create organization
const org=new CreaOrg(page);
await org.gotoOrgCrt();
await page.waitForTimeout(1000);
await org.orgNameInput("YOP");
await page.waitForTimeout(1000);
await org.orgWebInput("https://www.yopmail.com");
await page.waitForTimeout(1000);
await org.phoneNumInput("98123875");
await page.waitForTimeout(1000);
await org.emailInput("contact@yopmail.com");
await page.waitForTimeout(1000);
await org.fireBlockInput("123-123-123-123");
await page.waitForTimeout(1000);
await org.adminMailInput("jais@yopmail.com");
await page.waitForTimeout(1000);
await org.saveOrg();
await page.waitForTimeout(5000);
await org.dashboard();

//Sub-admin Creation
const subadmin=new Subadmin(page);
await subadmin.gotoSubAdmin();
await subadmin.addname("Jai");
await subadmin.ademail("jaya@yopmail.com");
await subadmin.adrole("Admin");
await subadmin.adaccess("All")
await subadmin.savebtn();
await page.waitForTimeout(5000);
await subadmin.gotoDash();






})