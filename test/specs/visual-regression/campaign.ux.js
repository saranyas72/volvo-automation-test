import CampaignPage from  '../../pageobjects/campaign.page';
import {getBlockOutCoordinatesForEl} from '../../helpers/index';

describe('Volvo Campaign page visual regression test', () => {
    it('open volvo campaign', async () => {
        
        await CampaignPage.open();
        await CampaignPage.waitForAlert();
        await CampaignPage.acceptCookies();
        
        // await browser.saveFullPageScreen('fullPage',{} );
        const videoEl = await $('#Video-1 video');
        const coords = getBlockOutCoordinatesForEl(videoEl);
        await expect(await browser.checkFullPageScreen('fullPage', {blockOut: [ coords ]})).toEqual(0);
    });
});
