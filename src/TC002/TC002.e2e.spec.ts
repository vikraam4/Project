import { test, Page } from "@playwright/test";
import Registration from "../../pageobject/registration.page";
import testData from "../../test-data/TC002/TC002.json";

test.describe("SignUp with existing User", () => {
  let page: Page;
  let registrationPage: Registration;


  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    registrationPage = new Registration(page);
  });

  test("TC002 - Create Account using existing user", async () => {
    await registrationPage.signUpExistingUser(testData.existingUser);
  });
});
