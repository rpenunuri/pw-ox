import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { OpenAudiencePage } from './openAudiencePage';

export class HomePage extends BasePage {
  readonly path: string;
  readonly platformsSection: Locator;
  readonly openAudiencePlatformLink: Locator;

  constructor(page) {
    super(page);

    this.path = this.baseUrl + '/';
    this.platformsSection = this.page.locator('section.platform');
    this.openAudiencePlatformLink = this.platformsSection.getByRole('link', { name: 'Demand Addressability' });
 }

  async expectedCondition() {
    await expect(this.page).toHaveTitle(/OpenX: Programmatic Advertising/);
  }

  async goToHomePage() {
    await this.navigate(this.path);
  }

  async clickOnOpenAudiencePlatformLink(): Promise<OpenAudiencePage> {
    await this.openAudiencePlatformLink.click();
    return new OpenAudiencePage(this.page);
  }
}