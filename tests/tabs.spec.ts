import { test, expect, chromium, firefox, webkit } from "@playwright/test";

test("check tabs handling", async ({}) => {
  const browser = await chromium.launch();
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
});

test("check child window handling", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // main window
  await page.goto("https://demoqa.com/browser-windows");

  // new tab
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.click("#windowButton"),
  ]);

  // switch to the child window
  await newPage.waitForLoadState();
  await newPage.bringToFront();

  await expect(newPage).toHaveURL("https://demoqa.com/sample");
  await expect(newPage.locator("#sampleHeading")).toHaveText(
    "This is a sample page"
  );

  await newPage.close();

  // switch to main window
  await expect(page.locator(".main-header")).toHaveText("Browser Windows");
});

test.only("check new child window handling", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const browser2 = await firefox.launch();
  const context2 = await browser2.newContext();
  const page2 = await context2.newPage();

  const browser3 = await webkit.launch();
  const context3 = await browser3.newContext();
  const page3 = await context3.newPage();

  // main window
  await page.goto("https://demoqa.com/browser-windows");

  // new tab
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.click("#messageWindowButton"),
  ]);

  // switch to the child window
  await newPage.waitForLoadState();
  await newPage.bringToFront();

  //await expect(newPage).toHaveURL("about:blank");
  await expect(newPage.locator("body")).toHaveText(
    "Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization."
  );

  await newPage.close();

  // switch to main window
  await expect(page.locator(".main-header")).toHaveText("Browser Windows");
});
