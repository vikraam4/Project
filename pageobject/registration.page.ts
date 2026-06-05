import { Locator, Page, expect } from "@playwright/test";
import { URLS } from "../constants/links";

export default class Registration {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  selectors = {
    signUpSignInBtn: (): Locator => this.page.getByRole('link', { name: ' Signup / Login' }),
    signUpNameInput: (): Locator => this.page.getByRole('textbox', { name: 'Name' }),
    signUpEmailInput: (): Locator => this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address'),
    signUpBtn: (): Locator => this.page.getByRole('button', { name: 'Signup' }),
    checkBox: (title: string): Locator => this.page.getByRole("radio", { name: title }),
    userExistMsg: (message: string): Locator => this.page.getByText(message),
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
    deleteBtn: (): Locator => this.page.getByRole('link', { name: ' Delete Account' }),
    closeAdButton: (): Locator => this.page.locator('iframe[name="aswift_2"]').contentFrame().getByRole('button', { name: 'Close ad' }),
  };

  waitFor = {
    timeout: async () => await this.page.waitForTimeout(5000),
  };

  static generateRandomEmail() {
    return `perform${Math.floor(Math.random() * 100000)}@autoexercise.com`;
  }

  static generateRandomPassword() {
    return `Pass@${Math.floor(Math.random() * 100000)}`;

  }

  async clickCloseAdButton() {
    if (await this.selectors.closeAdButton().isVisible()) {
      await this.selectors.closeAdButton().click();
    }
    await this.waitFor;
  }

  async createAccount(createAccount: any) {
    const randomEmail = Registration.generateRandomEmail();
    const randomPassword = Registration.generateRandomPassword();

    await this.page.goto(URLS.pages.login);

    await this.page.waitForURL(URLS.pages.login);
    await this.page.waitForLoadState('domcontentloaded');
    await this.selectors.signUpSignInBtn().click();
    await this.selectors.signUpNameInput().fill(createAccount.username);
    await this.selectors.signUpEmailInput().fill(randomEmail);
    console.log("Email:", randomEmail);
    await this.selectors.signUpBtn().click();

    await this.page.waitForLoadState('domcontentloaded');
    await this.selectors.checkBox(createAccount.title || "Mr.").check();
    await this.selectors.signUpPasswordInput().fill(randomPassword);
    console.log("Password:", randomPassword);
    await this.selectors.dobDateSelect().selectOption(createAccount.date);
    await this.selectors.dobMonthSelect().selectOption(createAccount.month);
    await this.selectors.dobYearSelect().selectOption(createAccount.year);
    await this.selectors.firstNameInput().fill(createAccount.firstName);
    await this.selectors.lastNameInput().fill(createAccount.lastName);
    await this.selectors.companyNameInput().fill(createAccount.company);
    await this.selectors.addressInput().fill(createAccount.addressLine);
    await this.selectors.stateInput().fill(createAccount.state);
    await this.selectors.cityInput().fill(createAccount.city);
    await this.selectors.zipcodeInput().fill(createAccount.zipcode);
    await this.selectors.mobileNumberInput().fill(createAccount.mobile);
    await this.selectors.createAccountBtn().click();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.selectors.accountCreatedDeletedText()).toContainText(createAccount.accountCreatedMsg);
    console.log("✓ Account Created Successfully!")
    await this.selectors.continueBtn().click();

  }

  async deleteAccount(accountDelete: any) {

    await this.clickCloseAdButton();

    await this.page.goto(URLS.pages.home);
    await this.page.waitForURL(URLS.pages.home);
    await this.page.waitForLoadState('domcontentloaded');
    await this.selectors.deleteBtn().click();
    await expect(this.selectors.accountCreatedDeletedText()).toContainText(accountDelete.accountDeletedMsg);
    console.log("✓ Account Deleted Successfully!");
  }

  async signUpExistingUser(existingUser: any) {
    await this.page.goto(URLS.pages.login);
    await this.page.waitForURL(URLS.pages.login);
    await this.page.waitForLoadState('domcontentloaded');
    await this.selectors.signUpSignInBtn().click();
    await this.selectors.signUpNameInput().fill(existingUser.username);
    await this.selectors.signUpEmailInput().fill(existingUser.email);
    console.log("Email:", existingUser.email);
    await this.selectors.signUpBtn().click();
    await this.selectors.userExistMsg(existingUser.message);
    console.log("message:", existingUser.message);
  }
}