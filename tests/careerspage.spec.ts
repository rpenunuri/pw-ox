import { test } from '@playwright/test';
import { CareersPage } from '../pages/careersPage';

test.describe('Careers Page', () => {
  test('jobs notice modal dialog is displayed', async ({ page }) => {
    const careersPage = new CareersPage(page);
    await careersPage.goToCareersPage();
    await careersPage.assertJobsNoticeModalIsDisplayed();
  });
});
