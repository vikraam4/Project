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
  });
});
