import { test, expect } from "@playwright/test";

// test suite
// playwright default framework
test.describe("test suite", () => {
  test.beforeAll(async () => {
    console.log("before all hooks");
  });

  test.beforeEach(async ({ page }) => {
    console.log("before each hooks");
    await page.goto("https://www.globalsqa.com/samplepagetest/");
  });

  test("should login successfully", async ({ page }) => {
    console.log("test case 001");
  });

  test("should show dashboard", async ({ page }) => {
    console.log("test case 002");
  });

  test("should signup successfully", async ({ page }) => {
    console.log("test case 003");
  });

  test.afterEach(() => {
    console.log("after each hooks");
  });

  test.afterAll(() => {
    console.log("after all hooks");
  });
});
