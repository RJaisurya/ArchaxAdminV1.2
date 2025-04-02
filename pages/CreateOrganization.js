exports.CreaOrg=
class CreateOrganization{
    constructor(page){
        this.page=page;
        this.addnew="//span[@class='text-base md:text-lg']";
        this.orgName="//input[@id='name-0']";
        this.orgWeb="//input[@id='website-0']";
        this.phoneNum="//input[@id='phone_number-0']";
        this.email="//input[@id='email_id-0']";
        this.fireBlock="//input[@id='fireblock_key-0']";
        this.adminMail="//input[@id='organization_admin_email-0']";
        this.savebtn="//div[@class='BtnWrap']";
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
    async phoneNumInput(phoneNum){
        await this.page.locator(this.phoneNum).fill(phoneNum);
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
}