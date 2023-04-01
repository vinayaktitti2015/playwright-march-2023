import { test, expect } from "@playwright/test";
import * as fs from "fs";
test("file download from web", async ({ page }) => {
  await page.goto(
    "https://file-examples.com/index.php/sample-documents-download/"
  );
  await page.waitForTimeout(3000);

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.locator(".text-right.file-link").nth(3).click(),
  ]);

  const filename = download.suggestedFilename();
  const filepath = "download/" + filename;
  await download.saveAs(filepath);
  expect(fs.existsSync(filepath)).toBeTruthy();
});

test("download pdf file", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");
  await page.waitForTimeout(3000);

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByText("sample.pdf").click(),
  ]);

  const filename = download.suggestedFilename();
  const filepath = "download/" + filename;
  await download.saveAs(filepath);
  expect(fs.existsSync(filepath)).toBeTruthy();
});

test("download docx file", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");
  await page.waitForTimeout(3000);

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByText("Test.docx").click(),
  ]);

  const filename = download.suggestedFilename();
  const filepath = "download/" + filename;
  await download.saveAs(filepath);
  expect(fs.existsSync(filepath)).toBeTruthy();
});

test("download jpeg file", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");
  await page.waitForTimeout(3000);

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByText("logo.jpeg").click(),
  ]);

  const filename = download.suggestedFilename();
  const filepath = "download/" + filename;
  await download.saveAs(filepath);
  expect(fs.existsSync(filepath)).toBeTruthy();
});

test("download xlsx file and cancel", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");
  await page.waitForTimeout(3000);

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByText("upload_file.xlsx").click(),
  ]);

  await download.cancel();
  const filename = download.suggestedFilename();
  const filepath = "download/" + filename;
  //await download.saveAs(filepath);
  expect(fs.existsSync(filepath)).toBeFalsy();
});

test.only("download xlsx file and delete", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");
  await page.waitForTimeout(3000);

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByText("upload_file.xlsx").click(),
  ]);

  //await download.cancel();
  const filename = download.suggestedFilename();
  const filepath = "download/" + filename;
  await download.saveAs(filepath);
  expect(fs.existsSync(filepath)).toBeTruthy();

  await download.delete();
  expect(fs.existsSync(filepath)).toBeFalsy();
});
