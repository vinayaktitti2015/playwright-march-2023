import { test, expect } from "@playwright/test";

test.describe("global sqs test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.globalsqa.com/samplepagetest/");
  });

  test("should submit form successfully", async ({ page }) => {
    const profilepic = page.locator('[name="file-553"]');
    const name = page.locator("#g2599-name");
    const email = page.locator("#g2599-email");
    const website = page.locator("#g2599-website");
    const exp = page.locator("#g2599-experienceinyears");
    const expertise = page.locator('[name="g2599-expertise[]"]');
    const education = page.locator('[name="g2599-education"]');
    const alert = page.locator('[onclick="myFunction()"]');
    const comment = page.locator("#contact-form-comment-g2599-comment");
    const submit = page.locator('[type="submit"]');

    // user events
    await profilepic.setInputFiles("fixtures/images.png");
    await name.fill("John Doe", { timeout: 5000 });
    await email.fill("john@yahoo.com", { timeout: 5000 });
    await website.fill("https://www.globalsqa.com/samplepagetest/");
    await exp.selectOption("5-7", { timeout: 5000 });
    await expertise.first().check();

    await expertise.first().waitFor();

    // assert
    await expect(expertise.last().isChecked()).toBeTruthy();

    await education.last().check();
    await expect(education.last().isChecked()).toBeTruthy();

    // handle alert box
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toEqual("Do you really fill rest of the form?");
      await dialog.accept();

      expect(dialog.message()).toEqual("Good Luck. Go for it");
      await dialog.accept();
    });

    await comment.fill("test playwright");
    await submit.waitFor()
    await page.screenshot({ path: "fixtures/before.png", fullPage: true });
    await submit.click();

    const message = page.getByText("Message Sent (go back)");
    await message.waitFor();
    await expect(message).toBeVisible();
    await page.screenshot({ path: "fixtures/after.png", fullPage: true });
  });
});
