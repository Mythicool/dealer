import { test, expect } from '@playwright/test';

test.describe('Thunder Auto - Comprehensive Site Evaluation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  test('Performance and Loading', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
    
    // Check for critical resources
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('SEO and Meta Tags', async ({ page }) => {
    // Check title
    await expect(page).toHaveTitle(/Thunder Auto/);
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Oklahoma City/);
    
    // Check proper heading structure
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1); // Should have exactly one H1
    
    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThan(0); // Should have H2s for sections
  });

  test('Cross-browser Compatibility', async ({ page }) => {
    // Test CSS Grid and Flexbox support
    const gridElements = page.locator('[class*="grid"]');
    await expect(gridElements.first()).toBeVisible();
    
    const flexElements = page.locator('[class*="flex"]');
    await expect(flexElements.first()).toBeVisible();
    
    // Test modern CSS features
    const roundedElements = page.locator('[class*="rounded"]');
    await expect(roundedElements.first()).toBeVisible();
  });

  test('Interactive Elements', async ({ page }) => {
    // Test button interactions
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    expect(buttonCount).toBeGreaterThan(5);
    
    // Test form elements
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    
    // Test navigation links
    const navLinks = page.locator('nav a');
    const navLinkCount = await navLinks.count();
    expect(navLinkCount).toBeGreaterThan(3);
  });

  test('Content Quality', async ({ page }) => {
    // Check for Oklahoma City specific content
    await expect(page.locator('text=Oklahoma City').first()).toBeVisible();
    await expect(page.locator('text=Thunder Auto').first()).toBeVisible();
    await expect(page.locator('text=(405)').first()).toBeVisible();
    
    // Check for automotive industry terms
    await expect(page.locator('text=Vehicle').first()).toBeVisible();
    await expect(page.locator('text=Financing').first()).toBeVisible();
    await expect(page.locator('text=Inventory').first()).toBeVisible();
    
    // Check for trust indicators
    await expect(page.locator('text=25+').first()).toBeVisible(); // Years experience
    await expect(page.locator('text=10,000+').first()).toBeVisible(); // Happy customers
    await expect(page.locator('text=4.9/5').first()).toBeVisible(); // Rating
  });

  test('Visual Design and Animations', async ({ page }) => {
    // Check for Framer Motion animations (elements should have motion classes)
    const animatedElements = page.locator('[style*="transform"]');
    const animatedCount = await animatedElements.count();
    expect(animatedCount).toBeGreaterThan(0);
    
    // Check color scheme consistency
    const primaryColorElements = page.locator('[class*="primary"]');
    await expect(primaryColorElements.first()).toBeVisible();
    
    const accentColorElements = page.locator('[class*="accent"]');
    await expect(accentColorElements.first()).toBeVisible();
  });

  test('Business Information Accuracy', async ({ page }) => {
    // Check contact information
    await expect(page.locator('text=(405) 555-AUTO').first()).toBeVisible();
    await expect(page.locator('text=123 Thunder Avenue').first()).toBeVisible();
    await expect(page.locator('text=Oklahoma City, OK').first()).toBeVisible();
    
    // Check business hours
    await expect(page.locator('text=Mon-Sat: 9AM-8PM').first()).toBeVisible();
    await expect(page.locator('text=Sunday: 12PM-6PM').first()).toBeVisible();
    
    // Check email addresses
    await expect(page.locator('text=sales@thunderauto.com').first()).toBeVisible();
  });

  test('Call-to-Action Effectiveness', async ({ page }) => {
    // Check primary CTAs
    await expect(page.locator('button:has-text("Browse Inventory")')).toBeVisible();
    await expect(page.locator('button:has-text("Schedule Test Drive")')).toBeVisible();
    await expect(page.locator('button:has-text("Get Pre-Approved")')).toBeVisible();
    
    // Check secondary CTAs
    await expect(page.locator('button:has-text("View Details")').first()).toBeVisible();
    await expect(page.locator('button:has-text("Test Drive")').first()).toBeVisible();
    await expect(page.locator('button:has-text("Send Message")').first()).toBeVisible();
  });

  test('Error Handling and Edge Cases', async ({ page }) => {
    // Test form validation
    const submitButton = page.locator('button:has-text("Send Message")');
    await submitButton.click();
    
    // Required fields should prevent submission
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    
    await expect(nameInput).toHaveAttribute('required');
    await expect(emailInput).toHaveAttribute('required');
  });

  test('Mobile Responsiveness Deep Check', async ({ page }) => {
    // Test various mobile breakpoints
    const breakpoints = [
      { width: 320, height: 568 }, // iPhone SE
      { width: 375, height: 667 }, // iPhone 8
      { width: 414, height: 896 }, // iPhone 11
      { width: 768, height: 1024 }, // iPad
    ];

    for (const breakpoint of breakpoints) {
      await page.setViewportSize(breakpoint);
      await page.waitForTimeout(500);
      
      // Check that content is still visible and accessible
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('header')).toBeVisible();
      
      // Check mobile navigation
      if (breakpoint.width < 768) {
        const mobileMenuButton = page.locator('button[aria-label*="menu"]');
        await expect(mobileMenuButton).toBeVisible();
      }
    }
  });
});