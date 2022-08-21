export async function goHomePage (page) {
    await page.goto("https://www.example.com");
}

export async function getElement(page) {
    await page.waitForSelector('h1')
}