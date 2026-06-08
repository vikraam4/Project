import { test, Page, expect } from "@playwright/test";
import Registration from "../../pageobject/registration.page";
import testData from "../../test-data/TC003/TC003.json";
import ContactUs from "../../pageobject/contact-us.page";

test.describe("Contact Us Form with new user", () => {
    let page: Page;
    let registrationPage: Registration;
    let contactUsPage: ContactUs;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        registrationPage = new Registration(page);
        contactUsPage = new ContactUs(page);
    });

    test("TC003 - Create Account using existing user", async () => {
        await registrationPage.createAccount(testData.createAccount);
        await contactUsPage.contactFormWorkFlow(testData.contactUs);
    });

    test.beforeAll(async () => {
        await registrationPage.deleteAccount(testData.accountDelete);
    });
});
