import { test, expect } from "@playwright/test";

test("assertions", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");

  const visible = await page.locator("#firstName").isVisible();
  await expect(visible).toBe(true);

  const visible2 = await page.locator("#invalidloc").isVisible();
  await expect(visible2).toBe(false);

  // verify radio buttons enables
  const radiobutton = await page.locator("#gender-radio-1").isEnabled();
  await expect(radiobutton).toBe(true);

  const checkbox = await page.locator("#hobbies-checkbox-1").isEnabled();
  await expect(checkbox).toBe(true);

  // verify city field disabled
  const city = await page.locator("#city").isDisabled();
  await expect(city).toBe(false);

  await page.locator("#hobbies-checkbox-2").scrollIntoViewIfNeeded()
  await page.locator("#hobbies-checkbox-2").first().click()
  await expect(page.locator("#hobbies-checkbox-1")).toBeChecked();

  await page.locator("#hobbies-checkbox-1").click()
  const bool = await page.locator("#hobbies-checkbox-1").isChecked()
  await expect(bool).toBe(false);
});
