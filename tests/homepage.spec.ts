import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Home Page', () => {
  test('visitors can navigate to open audiance platform', { tag:'@smoke' }, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    const openAudiencePage = await homePage.clickOnOpenAudiencePlatformLink();
    await openAudiencePage.assertPublishersSectionIsVisible();
    await openAudiencePage.assertBuyersSectionIsVisible();
  });
});
