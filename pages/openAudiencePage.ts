import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class OpenAudiencePage extends BasePage {
  readonly path: string;
  readonly publishersSection: Locator;
  readonly buyersSection: Locator;

  constructor(page) {
    super(page);

    this.path = this.baseUrl + '/why-openx/openaudience';
    this.publishersSection = this.page.locator('section.publishers');
    this.buyersSection = this.page.locator('section.buyers');
 }

  async expectedCondition() {
    await expect(this.page).toHaveTitle(/OpenAudience/);
  }

  async goToOpenAudiencePage() {
    await this.navigate(this.path);
  }

  async assertPublishersSectionIsVisible() {
    await expect(this.publishersSection).toBeVisible({ timeout: 10000 });
  }

  async assertBuyersSectionIsVisible() {
    await expect(this.buyersSection).toBeVisible({ timeout: 10000 });
  }
}