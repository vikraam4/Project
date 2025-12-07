import { test, expect, Page } from "@playwright/test";
import Registration from "../pageobject/registration.page";
import { URLS } from "../constants/links";
import { CONSTANTS } from "../constants/constants";

test.describe("Search Items", () => {
  let page: Page;
  let registrationPage: Registration;


  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    registrationPage = new Registration(page);
  });

  test("TC001 - Registration - Create Account", async () => {
    await page.goto(URLS.pages.login);
    await registrationPage.selectors.signUpSignInBtn().click();
    await registrationPage.selectors.signUpNameInput().click();
    await registrationPage.selectors.signUpNameInput().fill(CONSTANTS.TEST_NAME);
    await registrationPage.selectors.signUpEmailInput().fill('testing1234566@gmail.com');
    await registrationPage.selectors.signUpBtn().click();
    await registrationPage.selectors.mrCheckBox().check();
    await registrationPage.selectors.signUpPasswordInput().click();
    await registrationPage.selectors.signUpPasswordInput().fill(CONSTANTS.TEST_PASSWORD);
    await registrationPage.selectors.dobDateSelect().selectOption('2');
    await registrationPage.selectors.dobMonthSelect().selectOption('4');
    await registrationPage.selectors.dobYearSelect().selectOption('2001');
    await registrationPage.selectors.firstNameInput().fill('john');
    await registrationPage.selectors.lastNameInput().fill('wick');
    await registrationPage.selectors.companyNameInput().fill(CONSTANTS.TEST_NAME);
    await registrationPage.selectors.addressInput().fill(CONSTANTS.TEST_ADDRESS);
    await registrationPage.selectors.stateInput().fill(CONSTANTS.TEST_STATE);
    await registrationPage.selectors.cityInput().fill(CONSTANTS.TEST_CITY);
    await registrationPage.selectors.zipcodeInput().fill(CONSTANTS.TEST_MOBILE);
    await registrationPage.selectors.mobileNumberInput().fill(CONSTANTS.TEST_MOBILE);
    await registrationPage.selectors.createAccountBtn().click();
    await expect(registrationPage.selectors.accountCreatedDeletedText()).toContainText(CONSTANTS.ACCOUNT_CREATED_TEXT);
    await registrationPage.selectors.continueBtn().click();
    await registrationPage.selectors.deleteBtn().click();
    await expect(registrationPage.selectors.accountCreatedDeletedText()).toContainText(CONSTANTS.ACCOUNT_DELETED_TEXT);  
  });
});
