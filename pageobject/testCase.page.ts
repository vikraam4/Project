import { Locator, Page, expect } from "@playwright/test";
import { URLS } from "../constants/links";
import Registration from "./registration.page";

export default class TestCase {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  selectors = {
    testCaseBtn: (): Locator => this.page.getByRole('link', { name: ' Test Cases' }),
    testCaseTitle: (): Locator => this.page.locator('b').first(),
  };

  waitFor = {
    timeout: async () => await this.page.waitForTimeout(5000),
  };

  async testCasePageValidation(testCase: any) {
    await this.page.waitForLoadState("domcontentloaded");
    await this.selectors.testCaseBtn().waitFor({ state: "visible", timeout: 5000 });
    await this.selectors.testCaseBtn().click();
    await this.page.waitForURL(URLS.pages.testCase)
  }
}