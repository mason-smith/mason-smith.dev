import test, { expect } from '@playwright/test';

test.describe('Main app flow', () => {
  test('should have title', async ({ baseURL, page }) => {
    page.goto(baseURL ?? (process.env['BASE_URL'] || 'http://localhost:3000'));
    console.log('baseURL', baseURL);
    console.log('process.env[BASE_URL]', process.env['BASE_URL']);

    await expect(page.getByRole('heading', { name: 'Mason Smith' })).toBeVisible();

    await page.getByRole('link', { name: 'View posts' }).click();
    await expect(page.getByRole('heading', { name: 'Posts and musings' })).toBeVisible();

    await page.getByRole('link', { name: 'More details about me' }).click();
    await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();

    await page.getByRole('link', { name: 'Home page' }).click();
    await expect(page.getByRole('heading', { name: 'Mason Smith' })).toBeVisible();
  });
});
