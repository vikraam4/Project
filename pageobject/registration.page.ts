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

  static generateRandomPassword() {
    return `Pass@${Date.now()}${Math.floor(Math.random() * 1000)}`;

  }

  async retry(action: () => Promise<any>, retries = 3) {

    for (let i = 0; i < retries; i++) {
      try {
        console.log(`Attempt: ${i + 1}`);
        await action();
        if (i > 0) {
          console.log(`✅ Success after ${i + 1} attempts`);
        }
        return;
      } catch (error) {
        console.log(`❌ Retry ${i + 1} failed`);
        if (i === retries - 1) {
          throw error;
        }
      }
    }
  }

  async createAccount(createAccount: any) {
    const randomEmail = Registration.generateRandomEmail();
    const randomPassword = Registration.generateRandomPassword();

    await this.retry(async () => {

      await this.page.goto(URLS.pages.login);

    });
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
    
    await this.retry(async () => {
      await this.page.goto(URLS.pages.home);
    });

    await this.page.waitForLoadState('domcontentloaded');
    await this.selectors.deleteBtn().click();
    await expect(this.selectors.accountCreatedDeletedText()).toContainText(accountDelete.accountDeletedMsg);
    console.log("✓ Account Deleted Successfully!");

  }
}