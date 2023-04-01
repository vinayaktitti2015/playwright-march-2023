import { test, expect } from "@playwright/test";
import fs from "fs";

const files = ["LambdaTest.txt", "pic1.jpg", "PIC.PNG"];
files.forEach((file) => {
  test(`download pdf file ${file}`, async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");
    await page.waitForTimeout(3000);

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.getByText(file).click(),
    ]);

    const filename = download.suggestedFilename();
    const filepath = "download/" + filename;
    await download.saveAs(filepath);
    expect(fs.existsSync(filepath)).toBeTruthy();
  });
});
