import { Locator, Page } from "@playwright/test";
export default class BookingPage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  selectors = {
    signUpSignInBtn: (): Locator => this.page.getByRole('link', { name: ' Signup / Login' }),
    signUpNameInput: (): Locator => this.page.getByRole('textbox', { name: 'Name' }),
    signUpEmailInput: (): Locator => this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address'),
    signUpBtn: (): Locator => this.page.getByRole('button', { name: 'Signup' }),
    mrCheckBox: (): Locator =>
      this.page.getByRole('radio', { name: 'Mr.' }),
    signUpPasswordInput: (): Locator => this.page.getByRole('textbox', { name: 'Password *' }),
    dobDateSelect: (): Locator => this.page.locator('#days'),
    dobMonthSelect: (): Locator => this.page.locator('#months'),
    dobYearSelect: (): Locator => this.page.locator('#years'),
    firstNameInput: (): Locator => this.page.getByRole('textbox', { name: 'First name *' }),
    lastNameInput: (): Locator => this.page.getByRole('textbox', { name: 'Last name *' }),
    companyNameInput: (): Locator => this.page.getByRole('textbox', { name: 'Company', exact: true }),
    addressInput: (): Locator => this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }),
    stateInput: (): Locator => this.page.getByRole('textbox', { name: 'State *' }),
    cityInput: (): Locator => this.page.getByRole('textbox', { name: 'City * Zipcode *' }),
    zipcodeInput: (): Locator => this.page.locator('#zipcode'),
    mobileNumberInput: (): Locator => this.page.getByRole('textbox', { name: 'Mobile Number *' }),
    createAccountBtn: (): Locator => this.page.getByRole('button', { name: 'Create Account' }),
    accountCreatedDeletedText: (): Locator => this.page.locator('b'),
    continueBtn: (): Locator => this.page.getByRole('link', { name: 'Continue' }),
    deleteBtn: (): Locator => this.page.getByRole('link', { name: ' Delete Account' })
  };

  waitFor = {
    timeout: async () => await this.page.waitForTimeout(5000),
  };

  static generateRandomEmail() {
    return `auto_${Date.now()}_${Math.floor(Math.random() * 1000)}@gmail.com`;
  }
}

// utils/generator.js
export function generateRandomEmail() {
    return `auto_${Date.now()}_${Math.floor(Math.random() * 1000)}@gmail.com`;
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
