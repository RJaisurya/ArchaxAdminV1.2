    import{test,expect,chromium} from '@playwright/test';
    import {Login} from '../pages/Admin/Login';
    import {CreaOrg} from '../pages/Admin/CreateOrganization';
    import {Subadmin} from '../pages/Admin/Subadmin';


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
    await org.phoneNumInput("IN","9812387589");
    await page.waitForTimeout(1000);
    await org.emailInput("contact@yopmail.com");
    await page.waitForTimeout(1000);
    await org.fireBlockInput("12");
    await page.waitForTimeout(1000);
    await org.adminMailInput("jais@yopmail.com");
    await page.waitForTimeout(1000);
    await org.saveOrg();
    await page.waitForTimeout(5000);
    await org.dashboard();
    await page.waitForTimeout(2000);

    //Sub-admin Creation
    const subadmin=new Subadmin(page);
    await subadmin.gotoSubAdmin();
    await subadmin.addname("Jai");
    await subadmin.ademail("jais@yopmail.com");
    await subadmin.adrole("Admin");
    await subadmin.adaccess("All");
    await subadmin.savebtn();
    await page.waitForLoadState('networkidle');
    await subadmin.gotoDash();
    await page.waitForLoadState('networkidle');
    const newTab = await page.context().newPage();
    const sub=new Subadmin(newTab);
    await page.waitForLoadState('networkidle');
    await sub.gotoMailPage();
    await page.waitForLoadState('networkidle');
    await sub.mailInBox("jais");
    await page.waitForLoadState('networkidle');
    await sub.mailNext();
    await page.waitForLoadState('networkidle');
    await sub.mailTab();
    await page.waitForLoadState('networkidle');
    await sub.refIcon();
    await newTab.waitForLoadState('networkidle');
    await sub.setPassword();
    });

