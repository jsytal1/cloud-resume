import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Resume/);
});

test("visitor counter", async ({ page }) => {
  await page.goto("/");

  const count = Number(await page.getByTestId("visitor-count").textContent());

  await page.reload();

  const newCount = Number(
    await page.getByTestId("visitor-count").textContent()
  );

  await expect(newCount > count).toBeTruthy();
});
