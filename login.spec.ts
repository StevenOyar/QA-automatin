import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.naivas.online/');
  await page.getByRole('link', { name: 'Sign in/ register' }).click();
  await expect(page.getByRole('link', { name: 'Back to homepage' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('YOUR REGISTERED EMAIL ADDRESS');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('YOOUR PASSWORD');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://www.naivas.online/');
});