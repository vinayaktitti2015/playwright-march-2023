import { expect, test, chromium, firefox, webkit } from "@playwright/test";
import msedge from '@playwright/test'

// const browser = [chromium, firefox, webkit];
const min = 1;
const max = 10;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

for (const browserType of [chromium, firefox]) {
  test(`check tabs handling for - ${browserType.name()} ` + randomNum, async () => {
    const browser = await browserType.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // main window
    await page.goto("https://demoqa.com/browser-windows");

    // new tab
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.click("#tabButton"),
    ]);

    // switch to the tab
    await newPage.waitForLoadState();
    await newPage.bringToFront();

    await expect(newPage).toHaveURL("https://demoqa.com/sample");
    await expect(newPage.locator("#sampleHeading")).toHaveText(
      "This is a sample page"
    );

    await newPage.close();

    // switch to main window
    await expect(page.locator(".main-header")).toHaveText("Browser Windows");

    await page.close()
  });
}
