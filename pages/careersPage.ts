import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class CareersPage extends BasePage {
  readonly path: string;
  readonly jobsNoticeModal: Locator;

  constructor(page) {
    super(page);

    this.path = this.baseUrl + '/careers';
    this.jobsNoticeModal = this.page.locator('#jobs-notice-modal');
 }

  async expectedCondition() {
    await expect(this.page).toHaveTitle(/OpenX Careers/);
  }

  async goToCareersPage() {
    await this.navigate(this.path);
  }

  async assertJobsNoticeModalIsDisplayed() {
    await expect(this.jobsNoticeModal).toBeVisible({ timeout: 10000 });
  }
}