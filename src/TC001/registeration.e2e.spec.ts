import { test, Page } from "@playwright/test";
import Registration from "../../pageobject/registration.page";
import testData from "../../test-data/TC001/TC001.json";

test.describe("Registration", () => {
  let page: Page;
  let registrationPage: Registration;


  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    registrationPage = new Registration(page);
  });

  test("TC001 - Create Account and Delete", async () => {
    await registrationPage.createAccount(testData.createAccount);
    // await registrationPage.deleteAccount(testData.accountDelete);
  });
});
