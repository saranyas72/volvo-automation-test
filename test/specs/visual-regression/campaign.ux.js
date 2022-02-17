import CampaignPage from  '../../pageobjects/campaign';
import {getBlockOutCoordinatesForEl} from '../../helpers/index';

describe('Volvo Campaign page visual regression test', () => {

    beforeEach(async () =>  {
        await browser.reloadSession();
    })

    it('should verify the campaign page elements in full page view', async () => {
        await CampaignPage.openAndAcceptCookies();
        const videoEl = await $('#Video-1 video');
        const coords = getBlockOutCoordinatesForEl(videoEl);
        await expect(await browser.checkFullPageScreen('test-full-page-view', {blockOut: [ coords ], disableCSSAnimation: true})).toBeLessThanOrEqual(0);
    });
});
