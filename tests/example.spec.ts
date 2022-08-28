import { test, expect } from "@playwright/test";
import { goHomePage, getElement } from "../helper";

test.describe.skip("my test suite", () => {
  test("some basic test", async ({ page }) => {
    await page.goto("https://www.example.com");
    const pageTitle = await page.locator("h1");
    await expect(pageTitle).toContainText("Example Domain");
  });

  test("click on element", async ({ page }) => {
    await page.goto("https://www.pazzo.com.tw/login");
    await page.click("#btnLogin");
    const errorMessage = await page.locator(".popup");
    await expect(errorMessage).toContainText("請輸入會員帳號!");
  });
});

// npx playwright test tests/example.spec.ts --grep @mySymbol
test.skip("some basic test @mySymbol", async ({ page }) => {
  await page.goto("https://www.example.com");
  const pageTitle = await page.locator("h1");
  await expect(pageTitle).toContainText("Example Domain");
});

test.skip("Working with Inputs", async ({ page }) => {
  await page.goto("https://www.pazzo.com.tw/login");
  await page.locator("#username").fill("username");
  await page.locator("#password").fill("password");
  await page.click("#btnLogin");
  const errorMessage = await page.locator(".alert-modal-style");
  await expect(errorMessage).toContainText("帳號密碼錯誤!!");
});

test.skip("assertion", async ({ page }) => {
  await page.goto("https://www.pazzo.com.tw/login");
  // await expect(page).toHaveURL('https://www.pazzo.com.tw/zh-cn/market/n/19825?c=44480')
  await expect(page).toHaveTitle("會員登入");

  const element = await page.locator("h1");
  await expect(element).toBeVisible();
  await expect(element).toHaveText("IT IS THE ACCESSORY OF LIFE.");

  const nonExistingElement = await page.locator("h5");
  await expect(nonExistingElement).not.toBeVisible();
});

test.describe.skip("beforeEach", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.example.com");
  });

  test("screenshots", async ({ page }) => {
    await page.screenshot({ path: "screenshots.png", fullPage: true });
  });

  test("elementScreenshots", async ({ page }) => {
    const element = await page.$("h1");
    await element.screenshot({ path: "elementScreenshots.png" });
  });
});

// debug
test.skip("test helper function", async ({ page }) => {
  await goHomePage(page);
  // await page.pause()
  await getElement(page);
});

// parallel
test.describe.parallel("parallel", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.example.com");
  });

  test("screenshots", async ({ page }) => {
    await page.screenshot({ path: "screenshots.png", fullPage: true });
  });

  test("elementScreenshots", async ({ page }) => {
    const element = await page.$("h1");
    await element.screenshot({ path: "elementScreenshots.png" });
  });
});
