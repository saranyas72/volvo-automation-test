import CampaignPage from  '../../pageobjects/campaign';
import Header from '../../pageobjects/header';

describe('header functional tests', async() => {
    before(async () => {
        await CampaignPage.openAndAcceptCookies();
    });

    beforeEach(async () => {       
        await CampaignPage.open();
    });

    it('should open and close side menu', async () => {    
        await expect(Header.sideNavigation).not.toBeDisplayedInViewport();
        Header.sideNavigationToggle.click();
        await expect(Header.sideNavigation).toBeDisplayedInViewport();
        Header.sideNavigationClose.click();
        await expect(Header.sideNavigation).not.toBeDisplayedInViewport();
    });

    it('should show our cars dropdown', async () => {
        Header.carMenu.click();
        await expect(Header.carMenuDrop).toBeDisplayedInViewport();
    });

    it('should navigate to About Volvo -> Sustainability', async () => { 
        Header.sideNavigationToggle.click();
        await expect(Header.menu_aboutVolvo).toBeDisplayedInViewport();
        Header.menu_aboutVolvo.click();
        await expect(Header.sustainabilityLink).toBeDisplayedInViewport();
        Header.sustainabilityLink.click();
        await expect(browser).toHaveUrlContaining("sustainability/highlights");
    });
})