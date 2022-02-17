import CampaignPage from  '../../pageobjects/campaign';

describe('Volvo Campaign page functional tests', () => {
    
    before(async () => {       
        await CampaignPage.openAndAcceptCookies();
    });

    beforeEach(async () => {       
        await CampaignPage.open();
    });

    it('should show Intro video', async () => { 
        await expect(CampaignPage.introVideoContainer).toBeDisplayedInViewport();
    });

    it('should show testimonial videos', async () => { 
        await expect(CampaignPage.testimonialVideosContainer).toBeDisplayed();
    });

    it('should show learn more about car safety link and redirect on click', async () => { 
        CampaignPage.carSafetyLink.click();
        await expect(browser).toHaveUrlContaining('/car-safety');
    });

    it('should open model detail page when clicking first model in carousel', async () => {
        await CampaignPage.clickModel();
        await expect(browser).toHaveUrlContaining('intl/v/cars/xc90-hybrid');

    });

    it('should open model detail page when clicking on \'Learn\' link for first model in carousel', async () => {
        await CampaignPage.clickModelLearn();
        await expect(browser).toHaveUrlContaining('intl/v/cars/xc90-hybrid');
    });

    it('should open model detail page when clicking on \'Shop\' link for first model in carousel', async () => {
        await CampaignPage.clickModelShop();
        await expect(browser).toHaveUrlContaining('intl/build/xc90-hybrid');
    });
    
    it('should display recharge page on Recharge link click', async () => {
        await CampaignPage.clickRechargeLink();
        await expect(browser).toHaveUrlContaining('/intl/v/cars/recharge');
    });

    it('should display mild hybrid car detail page on the link click', async () => {
        await CampaignPage.clickMildHybridLink();
        await expect(browser).toHaveUrlContaining('/intl/v/cars/other-powertrains');
    });

    it('verify the cta button should be functional from ImageWithText component', async () => {
        await CampaignPage.clickImageWithTextCTA();
        await expect(browser).toHaveUrlContaining('/intl/v/car-safety/safety-heritage');
    });
});
