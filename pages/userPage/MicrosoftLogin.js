exports.micrologin = class micrologin {
    constructor(page) {
        this.page = page;
        this.mailInput = "//input[@id='email']";
        this.nxtBtn = "//button[normalize-space()='Next']";
        this.logMicroBtn = "//button[normalize-space()='Login with Microsoft']";

        // Microsoft Popup starts here
        this.popup = null;  //  new variable to store the popup
        this.microMail = "//input[@type='email']";
        this.microPass = "//input[@type='password']";
        this.signInBtn = "//button[@id='next']";

        //wallet Balance menu
        this.walletBalance="a[class='block p-4 lg:px-6 lg:py-5 border-l-4 border-transparent text-[#D8D8D8] transition-all duration-300 bg-[#068ff11a] !border-[#068ff1] border-l-4'] span[class='text-base !text-[20px] hidden lg:block']";
        this.WalletBalanceValue= ".pl-3";


        //Transaction history menu
        this.transactionHistory="a[class='block p-4 lg:px-6 lg:py-5 border-l-4 border-transparent text-[#D8D8D8] transition-all duration-300 hover:bg-[#068ff11a] hover:!border-[#068ff1]'] span[class='text-base !text-[20px] hidden lg:block']";
        this.initiateTransaction="//button[normalize-space()='Initiate Transaction']";

        //Initiate Transaction
        this.selectToken="//div[@class='relative w-full']//div[@class='w-full border rounded pl-6 pr-10 py-4 bg-transparent text-white cursor-pointer border-[#ffffff26] focus:!border-[#068ff166] text-left']";
        // this.tokenDropdown="div[class='w-full border rounded pl-6 pr-10 py-4 bg-transparent text-white cursor-pointer border-[#ffffff26] focus:!border-[#068ff166] text-left']";
        this.tokenDropdown="//li[@class='px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#068ff11a] flex justify-between']//span";
        //Logs
        this.hist="//td//p";
        //Wallet button
        this.walletBtn="//button[normalize-space()='Wallet']";

        //FirBlocks button
        this.fireBlocksBtn="//button[normalize-space()='Fireblocks']";

        //My account button
        this.myAccoutnBtn="span[class='text-[18px] hidden lg:block']";

        //Sigout Button
        this.signOutBtn="//button[normalize-space()='Sign Out']";

        
    }

    async gotoUserPage() {
        await this.page.goto("https://archax-dev-user-demo.seaswap.co/");
    }

    async MailInput(nam) {
        await this.page.locator(this.mailInput).fill(nam);
    }

    async NxtBtn() {
        await this.page.locator(this.nxtBtn).click();
    }

    async LogMicroBtn() {
        // Listen for popup
        this.page.once('popup', popup => {
            this.popup = popup;  //store the popup for later use
        });

        await this.page.locator(this.logMicroBtn).click();
        await this.page.waitForTimeout(3000); //wait for popup to load
    }

    async MicroMailInput(nam) {
        await this.popup.locator(this.microMail).fill(nam);
    }

    async MicroPassInput(nam) {
        await this.popup.locator(this.microPass).fill(nam);
    }

    async Signbtn() {
        await this.popup.locator(this.signInBtn).click(); 
}

async walletBalanceMenu(){
    await this.page.locator(this.walletBalance).click();
    await this.page.waitForFunction(() => document.readyState === 'complete');
    const txt=await this.page.locator(this.WalletBalanceValue).textContent();
    console.log("Your Organization's",txt);
}

async transactionHist(){
    await this.page.locator(this.transactionHistory).click();
     await this.page.waitForFunction(() => document.readyState === 'complete');
    const txts=await this.page.$$(this.hist);
    for(const txt of txts){
        const textContent=await txt.textContent();
        console.log(textContent);
    }
}

    async initTransaction(toknam){
         await this.page.locator(this.transactionHistory).click();
          await this.page.waitForFunction(() => document.readyState === 'complete'); 
          await this.page.waitForTimeout(1000);
          await this.page.locator(this.initiateTransaction).click();
          await this.page.waitForFunction(() => document.readyState === 'complete');
        
         await this.page.locator(this.selectToken).click();
          await this.page.waitForFunction(() => document.readyState === 'complete');
          const options=await this.page.$$(this.tokenDropdown);
          for(let i=0;i<options.length;i++){
                const option=options[i];
              const textContent=await option.textContent();
             
              console.log(textContent);
         }
         for (const option of options) {
            if (await option.textContent()==="toknam"){
                await option.click();
            }
         }
        
         
    }   

 
}

