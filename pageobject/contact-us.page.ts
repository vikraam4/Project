import { Locator, Page, expect } from "@playwright/test";
import path from "path";

export default class ContactUs {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    selectors = {
        contactUsBtn: (): Locator =>
            this.page.getByRole("link", { name: " Contact us" }),

        nameInput: (): Locator =>
            this.page.getByRole("textbox", { name: "Name" }),

        emailInput: (): Locator =>
            this.page.getByRole("textbox", {
                name: "Email",
                exact: true,
            }),

        subjectInput: (): Locator =>
            this.page.getByRole("textbox", { name: "Subject" }),

        messageInput: (): Locator =>
            this.page.getByRole("textbox", {
                name: "Your Message Here",
            }),

        submitBtn: (): Locator =>
            this.page.getByRole("button", { name: "Submit" }),

        successMsg: (): Locator =>
            this.page.locator(".status.alert.alert-success"),
    };

    async uploadFile(fileName: string) {
        const fileInput = 'input[type="file"]';

        const uploadFilePath = path.join(
            process.cwd(),
            "resources",
            "fileUpload",
            `${fileName}.pdf`
        );

        console.log("filePath:", uploadFilePath);

        await this.page.setInputFiles(fileInput, uploadFilePath);
    }

    async contactFormWorkFlow(contactUs: any) {
        await this.selectors.contactUsBtn().click();
        await this.page.waitForLoadState('networkidle');
        await this.selectors.nameInput().fill(contactUs.name);
        await this.selectors.emailInput().fill(contactUs.email);
        await this.selectors.subjectInput().fill(contactUs.subject);
        await this.selectors.messageInput().fill(contactUs.message);

        await this.uploadFile(contactUs.fileName);

        
        await this.selectors.submitBtn().click();

        // const dialogPromise = this.page.waitForEvent('dialog');
        // const dialog = await dialogPromise;
        // expect(dialog.message()).toBe('Press OK to proceed!');
        // await dialog.accept();
    }
}