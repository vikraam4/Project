import { test, Page } from "@playwright/test";
import Registration from "../../pageobject/registration.page";
import TestCase from "../../pageobject/testCase.page";
import testData from "../../test-data/TC004/TC004.json";

test.describe("Registration", () => {
    let page: Page;
    let registrationPage: Registration;
    let testCasePage: TestCase;


    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        registrationPage = new Registration(page);
        testCasePage = new TestCase(page);
    });

    test("TC001 - Create Account and Delete", async () => {
        await registrationPage.createAccount(testData.createAccount);
        await testCasePage.testCasePageValidation(testData.testCase)
    });

    test.afterAll(async ({ browser }) => {
        await registrationPage.deleteAccount(testData.accountDelete);
    });

});
