import { test, expect } from '@playwright/test';

import { truthy } from './helpers.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('toggle visibility', async ({ page }) => {
  const main = await page.locator('main');

  await expect(truthy).toBeTruthy();
  await expect(main).toContainText('loaded!');
});
