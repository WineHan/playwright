import { test, expect } from "@playwright/test";

test("some basic test", async ({ page }) => {
  await page.goto("https://www.example.com");
  const pageTitle = await page.locator("h1");
  await expect(pageTitle).toContainText("Example Domain");
});

test("click on element", async ({ page }) => {
    await page.goto("https://www.pazzo.com.tw/login")
    await page.click("#btnLogin")
    const errorMessage = await page.locator(".popup")
    await expect(errorMessage).toContainText("請輸入會員帳號!")
});
