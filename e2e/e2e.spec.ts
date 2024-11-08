import test, { expect } from "@playwright/test";

test.describe("Main app flow", () => {
  test("should have title", async ({ baseURL, page }) => {
    page.goto(baseURL ?? (process.env["BASE_URL"] || "http://localhost:3000"));

    await expect(
      page.getByRole("heading", { name: "Mason Smith" })
    ).toBeVisible();

    await page.getByRole("link", { name: "blog" }).click();

    await expect(
      page.getByRole("heading", { name: "Things I think about" })
    ).toBeVisible();

    await page.getByRole("link", { name: "about" }).click();
    await expect(page.getByRole("heading", { name: "About me" })).toBeVisible();

    await page.getByRole("link", { name: "home" }).click();
    await expect(
      page.getByRole("heading", { name: "Mason Smith" })
    ).toBeVisible();
  });
});
