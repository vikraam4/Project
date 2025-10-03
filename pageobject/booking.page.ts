import { Locator, Page } from "@playwright/test";
export default class BookingPage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  selectors = {
    selectFromCity: (): Locator => this.page.getByText("From", { exact: true }),
    selectToCity: (): Locator => this.page.getByText("To", { exact: true }),
    travellerandClass: (): Locator => this.page.getByText("Travellers & Class"),
    chooseBusinessClass: (): Locator => this.page.getByText("NEWBusiness"),
    applyButton: (): Locator =>
      this.page.page.getByRole("button", { name: "APPLY" }),
    seachButton: (): Locator => this. page.getByText("Search"),
  };

  waitFor = {
    timeout: async () => await this.page.waitForTimeout(5000),
  };
}

// export async function seachFlight(
//   page: Page,
//   fromCity: string,
//   toCity: string
// ) {
//   await this.selectors.selectFromCity().click();
//   await this.selectors.selectFromCity().fill(fromCity);
//   await this.selectors.chooseFirstOption().first().click();
//   await this.waitFor.timeout();
//   await this.selectors.selectToCity().click();
//   await this.selectors.selectToCity().fill(toCity);
//   await this.selectors.chooseFirstOption().first().click();
//   await this.waitFor.timeout();
//   await this.selectors.travellerandClass().click();
//   await this.selectors.chooseBusinessClass().click();
//   await this.selectors.applyButton().click();
//   await page.waitForTimeout(2000);
//   await this.selectors.seachButton().click();
//   await page.waitForTimeout(2000);
// }
