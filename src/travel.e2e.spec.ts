import { test, expect, Page } from "@playwright/test";
import BookingPage from "../pageobject/booking.page";

test.describe("Book Flight", () => {
  let page: Page;
  let bookingPage: BookingPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    bookingPage = new BookingPage(page);
  });

  test("Seach Flight - business class", async () => {
    await page.goto("/flights/");
    await bookingPage.waitFor.timeout();
    await page.getByText("From", { exact: true }).click();
    await page.getByPlaceholder("From").fill("Delhi");
    await page.getByText("New Delhi", { exact: true }).click();
    await page.getByText("To", { exact: true }).click();
    await page.getByPlaceholder("To").fill("mum");
    await page
      .locator("#react-autowhatever-1-section-0-item-0")
      .getByText("Mumbai")
      .click();
    await page.getByText("Travellers & Class").click();
    await page.getByRole("button", { name: "APPLY" }).click();
    await page.getByText("Search").click();
  });
});
