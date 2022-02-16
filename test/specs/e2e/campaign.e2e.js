import CampaignPage from  '../../pageobjects/campaign.page';

describe('Volvo Campaign page test', () => {
    it('open volvo campaign', async () => {
        
        await CampaignPage.open();
        await CampaignPage.waitForAlert();
        await CampaignPage.acceptCookies();
        await expect(browser).toHaveUrlContaining(".com");
    });
});
