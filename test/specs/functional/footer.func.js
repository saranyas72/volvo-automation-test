import CampaignPage from  '../../pageobjects/campaign';
import Footer from '../../pageobjects/footer';

describe('footer functional tests', async() => {
    before(async () => {
        await CampaignPage.openAndAcceptCookies();
    });

    beforeEach(async () => {       
        await CampaignPage.open();
    });

    it('should display copyright text', async () => {    
        await expect(Footer.copyright).toBeExisting();
    });

    it('should have footer links  - cookies', async () => {
        await expect(Footer.cookieLink).toBeDisplayed();
        Footer.cookieLink.click();
        await expect(browser).toHaveUrlContaining("legal/cookies");
    });

    it('should have footer link  - legal', async () => {
        await expect(Footer.legalLink).toBeDisplayed();
        Footer.legalLink.click();
        await expect(browser).toHaveUrlContaining("legal/legal");
    });

    it('should have footer link  - privacy', async () => {
        await expect(Footer.privacyLink).toBeDisplayed();
        Footer.privacyLink.click();
        await expect(browser).toHaveUrlContaining("legal/privacy");
    });

    it('should have footer link  - social media', async () => {
        await expect(Footer.socialMediaLink).toBeDisplayed();
        Footer.socialMediaLink.click();
        await expect(browser).toHaveUrlContaining("legal/social-media");
    });

    it('should have footer link  - tell us', async () => {
        await expect(Footer.tellUsLink).toBeDisplayed();
        Footer.tellUsLink.click();
        await expect(browser).toHaveUrlContaining("legal/tell-us-reporting-line");
    });
})