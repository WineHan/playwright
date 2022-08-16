import { test, expect } from "@playwright/test";

test("some basic test", async ({ page }) => {
  await page.goto("https://www.example.com");
  const pageTitle = await page.locator("h1");
  await expect(pageTitle).toContainText("Example Domain");
});

test.only("click on element", async ({ page }) => {
    await page.goto("https://www.pazzo.com.tw/login")
    await page.click("#btnLogin")
    const errorMessage = await page.locator(".popup")
    await expect(errorMessage).toContainText("請輸入會員帳號!")
});

test.skip("Working with Inputs", async ({ page }) => {
  await page.goto("https://www.pazzo.com.tw/login");
  await page.locator("#username").fill("username")
  await page.locator("#password").fill("password")
  await page.click("#btnLogin");
  const errorMessage = await page.locator(".alert-modal-style");
  await expect(errorMessage).toContainText("帳號密碼錯誤!!");
});

test.skip('assertion',async ({ page }) => {
    await page.goto("https://www.pazzo.com.tw/login")
    // await expect(page).toHaveURL('https://www.pazzo.com.tw/zh-cn/market/n/19825?c=44480')
    await expect(page).toHaveTitle("會員登入")

    const element = await page.locator("h1")
    await expect(element).toBeVisible()
    await expect(element).toHaveText("IT IS THE ACCESSORY OF LIFE.")

    const nonExistingElement = await page.locator("h5")
    await expect(nonExistingElement).not.toBeVisible()
})