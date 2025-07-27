import { test, expect } from '@playwright/test';

test('debug page loading', async ({ page }) => {
  const errors: string[] = [];
  const logs: string[] = [];
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    } else {
      logs.push(`${msg.type()}: ${msg.text()}`);
    }
  });

  page.on('pageerror', error => {
    errors.push(`Page error: ${error.message}`);
  });

  await page.goto('/');
  await page.waitForTimeout(5000);
  
  console.log('Console logs:', logs);
  console.log('Errors:', errors);
  
  const content = await page.content();
  console.log('Page content preview:', content.substring(0, 500));
});