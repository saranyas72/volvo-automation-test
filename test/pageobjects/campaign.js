

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CampaignPage extends Page {
    /**
     * define selectors using getter methods
     */

    get introVideoContainer() {
        return  $("#Video-1");
    }

    get testimonialVideosContainer() {
        return $("#VideoTestimonials-1");
    }

    get carSafetyLink() {
        return $("[data-autoid=iconCallouts\\:cta]");
    }
    
    get btnAcceptCookies() {
        return $('.accept-cookies-button');
    }
    get btnCookieSettings() {
        return $('.cookie-settings-button');
    }

    get alertModal(){
        return $('.optanon-alert-box-wrapper');
    }

    get ourCars(){
        return $('#nav:topNavCarMenu');
    }

    get menu(){
        return $('#sitenav-sidenav-toggle');
    }

    get springCarouselItems(){
        return $$('[data-autoid="springCarouselPane\\:carouselItem"]');
    }

    get springCarouselItemLearn(){
        return $$('[data-autoid="springCarouselPane\\:carouselItem"]')[0].$('a*=Learn');
    }

    get springCarouselItemShop(){
        return $$('[data-autoid="springCarouselPane\\:carouselItem"]')[0].$('a*=Shop');
    }

    get carouselNextButton(){
        return $('[data-autoid="springCarouselNextButton"]');
    }

    get carouselPreviousButton(){
        return $('[data-autoid="springCarouselPreviousButton"]');
    }

    get rechargeLink(){
        return $('[data-autoid="ProductListCarousel\\:cta1"]');
    }

    get mildHybridLink(){
        return $('[data-autoid="ProductListCarousel\\:cta2"]');
    }

    get imgWithTextCTAButton(){
        return $('[data-autoid="imageWithText\\:primaryCta"]');
    }

    async open() {
        return super.open(`/intl/v/car-safety/a-million-more`)
    }

    async openAndAcceptCookies(){

        await this.open();

        
        await this.waitForCookieModal();
        const isCookieModalVisible = await this.alertModal.isDisplayedInViewport();
        if(isCookieModalVisible) {
            await this.acceptCookies();
            await this.waitForCookieModalDisappear();
        }
    }   

    async waitForCookieModal(){
        const elem = await this.alertModal;
        await elem.waitForDisplayed({ timeout: 10000 });
    }

    async waitForCookieModalDisappear(){
        const elem = await this.alertModal;
        await elem.waitForDisplayed({ reverse: true });
    }

    async acceptCookies(){
        await this.btnAcceptCookies.click();
    }
    async clickCookieSettings(){
        await this.btnCookieSettings.click();
    }

    async clickOurCars(){
        await this.ourCars.click();
    }

    async clickMenu(){
        await this.menu.click();
    }

    async clickModel(){
        const items = await this.springCarouselItems;
        await items[0].click();
    }

    async clickModelLearn(){
        await this.springCarouselItemLearn.click();
    }

    async clickModelShop(){
        await this.springCarouselItemShop.click();
    }

    async clickCarouselNextButton(){
        await this.carouselNextButton.click();
    }

    async clickCarouselPreviousButton(){
        await this.carouselPreviousButton.click();
    }

    async clickRechargeLink(){
        const link = await this.rechargeLink;
        await link.click();
    }

    async clickMildHybridLink(){
        await this.mildHybridLink.click();
    }

    async clickImageWithTextCTA(){
        await this.imgWithTextCTAButton.click();
    }

}
export default new CampaignPage();
