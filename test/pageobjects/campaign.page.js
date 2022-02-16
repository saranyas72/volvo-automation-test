

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CampaignPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get btnAcceptCookies() {
        return $('.accept-cookies-button');
    }
    get btnCookieSettings() {
        return $('.cookie-settings-button');
    }

    get alertModal(){
        return $('.optanon-alert-box-wrapper');
    }

    get getPageUrl(){
        return $(browser.getUrl());
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async search (txt) {
        
        await this.btnSearch.click();
        
    }
    async waitForAlert(){
        const elem = await this.alertModal;
        elem.waitForExist({ timeout: 5000 });
    }

    async acceptCookies(){
        await this.btnAcceptCookies.click();
    }
    async clickCookieSettings(){
        await this.btnCookieSettings.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open(`/intl/v/car-safety/a-million-more`)
    }
}

export default new CampaignPage();
