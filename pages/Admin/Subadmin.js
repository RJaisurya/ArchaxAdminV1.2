exports.Subadmin=
class subadmin{
    constructor(page){
        this.page=page;
        this.gotoSub="//span[normalize-space()='Sub-Admin'] ";
        this.add="//span[@class='text-base md:text-lg']";
        this.adname="//input[@id='name-0']";
        this.email="//input[@id='email-0']";
        this.role="//span[normalize-space()='Select Sub Admin Role']";
        this.access="//span[normalize-space()='Select options']";
        this.save="//div[contains(@class,'BtnWrap')]";
        this.rolcheck=[
            "//div[normalize-space()='Admin']",
            "//div[normalize-space()='Manager']",
            "//div[normalize-space()='User']"

        ]
        this.mulcheckbox=[
            "//input[contains(@value,'All')]",
             "//input[@value='Write']",
             "//input[@value='Delete']",
             "//input[@value='Edit']",
             "//input[@value='Read']"   
        ]
        this.dash="//button[normalize-space()='Go To Dashboard']";
        this.mailin="//input[@id='login']";
        this.mailnxt="//i[@class='material-icons-outlined f36']";
        this.mailtab="//iframe[@id='ifinbox']";
        this.mailMsg="//div[@id='e_ZwHjAQN3ZGR0ZGZlZQNjAGD2ZmVkAD==']//button[@class='lm']";
        this.setPass="//a[normalize-space()='Set Your Password']";
        this.refresh="//button[@id='refresh']";
        this.frame1="//iframe[@id='ifmail']";
    }
   
    async gotoSubAdmin(){
        await this.page.locator(this.gotoSub).click();
        await this.page.locator(this.add).click();
    }

    async addname(name){
        await this.page.locator(this.adname).fill(name);
    }
    async ademail(em){
        await this.page.locator(this.email).fill(em);
    }
    async adrole(rol){
        await this.page.locator(this.role).click();
        for(const ro of this.rolcheck){
            if(ro.includes(rol)){
                await this.page.locator(ro).click();
            }
        }
            
    }
    async adaccess(accss){
        await this.page.locator(this.access).click();
        for(const acc of this.mulcheckbox){
            if(acc.includes(accss)){
                await this.page.locator(acc).check();
            }
    }
}
    async savebtn(){
        await this.page.locator(this.save).click();
    }
    async gotoDash(){
        await this.page.locator(this.dash).click();
    }
    async gotoMailPage(){
        await this.page.goto("https://yopmail.com/en/");

    }

    async mailInBox(mailname){
        await this.page.locator(this.mailin).fill(mailname);
    }
    async mailNext() {
        await this.page.locator(this.mailnxt).click();
    }
    
    async mailTab() {
        const frame1 = this.page.frameLocator(this.mailtab);
        await frame1.locator(this.mailMsg).click();
    }
   
    async refIcon(){
        await this.page.locator(this.refresh).click();
    }
    async setPassword(){   
        await this.page.frame1.locator(this.setPass).click();   
    }


    


}