exports.CreaOrg=
class CreateOrganization{
    constructor(page){
        this.page=page;
        this.addnew="//span[@class='text-base md:text-lg']";
        this.orgName="//input[@id='name-0']";
        this.orgWeb="//input[@id='website-0']";
        this.phDropDown="//select[@class='px-2 py-2 bg-white text-black outline-none !bg-transparent border-none text-white mr-2 custom-select']";
        this.phoneNum="//input[@id='phone_number-0']";
        this.email="//input[@id='email_id-0']";
        this.fireBlock="//input[@id='fireblock_key-0']";
        this.adminMail="//input[@id='Organisation-0']";
        this.savebtn="//div[@class='BtnWrap']";    
        this.gotoDashboard="//button[normalize-space()='Go To Dashboard']"; 
    }

    async gotoOrgCrt(){
        await this.page.locator(this.addnew).click();
    }
    async orgNameInput(orgName){
        await this.page.locator(this.orgName).fill(orgName);
    }
    async orgWebInput(orgWeb){
        await this.page.locator(this.orgWeb).fill(orgWeb);
    }
    async phoneNumInput(cntry,phonNum){
        await this.page.locator(this.phDropDown).click();
        await this.page.waitForTimeout(2000);
        const phNum=await this.page.$$(this.phDropDown);
        for(const cont of phNum){
            const text=await cont.textContent();
            //console.log(text);      //For Debugging
            
            if(text.includes(cntry)){
                await this.page.locator(this.phDropDown).selectOption({value: cntry});
                break;
            }
        }
      
       
        await this.page.locator(this.phoneNum).fill(phonNum);
    }
    async emailInput(email){
        await this.page.locator(this.email).fill(email);
    }
    async fireBlockInput(fireBlock){
        await this.page.locator(this.fireBlock).fill(fireBlock);
    }
    async adminMailInput(adminMail){
        await this.page.locator(this.adminMail).fill(adminMail);
    }
    async saveOrg(){
        await this.page.locator(this.savebtn).click();
    }
    async dashboard(){
        await this.page.locator(this.gotoDashboard).click();
    }
}