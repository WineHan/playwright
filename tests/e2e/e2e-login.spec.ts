import { test, expect } from "@playwright/test";

test.describe.parallel("Login & Logout", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.pazzo.com.tw/");
  });

  test("Pazzo login error test", async ({ page }) => {
    await page.click(".icon-popup-close");
    const loginLink = await page.locator(".secnav-right__signin");
    await expect(loginLink).toBeVisible();
    await page.click(".secnav-right__signin a");
    await expect(page).toHaveURL("https://www.pazzo.com.tw/login");
    await page.type("#username", "username");
    await page.type("#password", "password");
    await page.click("#btnLogin");
    const errorMessage = await page.locator(".modal-info");
    await expect(errorMessage).toContainText("帳號密碼錯誤!!");
  });

  test("Pazzo login not filled test", async ({ page }) => {
    await page.click(".icon-popup-close");
    const loginLink = await page.locator(".secnav-right__signin");
    await expect(loginLink).toBeVisible();
    await page.click(".secnav-right__signin a");
    await expect(page).toHaveURL("https://www.pazzo.com.tw/login");
    await page.type("#username", "");
    await page.type("#password", "");
    await page.click("#btnLogin");
    const errorMessage = await page.locator(".popup");
    await expect(errorMessage).toContainText("請輸入會員帳號!");
  });
});
