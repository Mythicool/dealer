import { test, expect } from '@playwright/test';

test.describe('Thunder Auto Website Evaluation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the page to fully load and animations to settle
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  test('should load homepage without errors', async ({ page }) => {
    // Check for console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.waitForLoadState('networkidle');

    // Check page title
    await expect(page).toHaveTitle(/Thunder Auto/);

    // Verify no console errors
    expect(errors).toHaveLength(0);
  });

  test('should have proper navigation structure', async ({ page }) => {
    // Check header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Check navigation links
    const navLinks = ['Home', 'Inventory', 'Services', 'About', 'Contact'];
    for (const link of navLinks) {
      await expect(page.locator(`text=${link}`).first()).toBeVisible();
    }

    // Check logo/brand
    await expect(page.locator('text=Thunder Auto').first()).toBeVisible();
  });

  test('should have hero section with proper content', async ({ page }) => {
    // Check hero section exists
    const hero = page.locator('#home');
    await expect(hero).toBeVisible();

    // Check main heading
    await expect(page.locator('h1')).toContainText('Find Your');
    await expect(page.locator('h1')).toContainText('Dream Car');

    // Check CTA buttons
    await expect(page.locator('button:has-text("Browse Inventory")')).toBeVisible();
    await expect(page.locator('button:has-text("Schedule Test Drive")')).toBeVisible();
  });

  test('should have featured vehicles section', async ({ page }) => {
    const vehiclesSection = page.locator('#inventory');
    await expect(vehiclesSection).toBeVisible();

    // Check section heading
    await expect(page.locator('h2:has-text("Featured Vehicles")')).toBeVisible();

    // Check filter buttons
    await expect(page.locator('button:has-text("All Vehicles")')).toBeVisible();
    await expect(page.locator('button:has-text("Sedans")')).toBeVisible();
    await expect(page.locator('button:has-text("SUVs")')).toBeVisible();

    // Check vehicle cards are present
    const vehicleCards = page.locator('[class*="bg-white rounded-2xl"]').filter({ hasText: '$' });
    await expect(vehicleCards.first()).toBeVisible();
  });

  test('should have services section', async ({ page }) => {
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeVisible();

    // Check section heading
    await expect(page.locator('h2:has-text("Complete Auto Services")')).toBeVisible();

    // Check service cards (use more specific selectors)
    await expect(servicesSection.locator('text=Vehicle Sales')).toBeVisible();
    await expect(servicesSection.locator('text=Auto Financing')).toBeVisible();
    await expect(servicesSection.locator('text=Extended Warranties')).toBeVisible();
  });

  test('should have about section', async ({ page }) => {
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();

    // Check section heading
    await expect(page.locator('h2:has-text("About Thunder Auto")')).toBeVisible();

    // Check stats are visible (use more specific selectors)
    await expect(aboutSection.locator('text=10,000+')).toBeVisible();
    await expect(aboutSection.locator('text=25+')).toBeVisible();
    await expect(aboutSection.locator('text=4.9/5')).toBeVisible();
  });

  test('should have contact section with form', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();

    // Check section heading
    await expect(page.locator('h2:has-text("Get In Touch")')).toBeVisible();

    // Check contact form elements
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('select[name="interest"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button:has-text("Send Message")')).toBeVisible();

    // Check contact information (use more specific selectors)
    await expect(contactSection.locator('text=(405) 555-AUTO').first()).toBeVisible();
    await expect(contactSection.locator('text=123 Thunder Avenue').first()).toBeVisible();
  });

  test('should have footer with all sections', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check company info
    await expect(footer.locator('text=Thunder Auto').first()).toBeVisible();

    // Check quick links
    await expect(footer.locator('text=Quick Links')).toBeVisible();

    // Check services list
    await expect(footer.locator('text=Our Services')).toBeVisible();

    // Check contact info
    await expect(footer.locator('text=Contact Info')).toBeVisible();

    // Check newsletter signup
    await expect(footer.locator('text=Stay Updated')).toBeVisible();
    await expect(footer.locator('input[type="email"]')).toBeVisible();

    // Check copyright
    await expect(footer.locator('text=© 2024 Thunder Auto')).toBeVisible();
  });

  test('should have responsive mobile menu', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Check mobile menu button is visible
    const menuButton = page.locator('button').filter({ has: page.locator('svg') }).first();
    await expect(menuButton).toBeVisible();

    // Click menu button
    await menuButton.click();

    // Check mobile menu items appear (wait for mobile menu to be visible)
    await page.waitForTimeout(500); // Wait for animation
    const mobileMenuItems = page.locator('.md\\:hidden a');
    await expect(mobileMenuItems.filter({ hasText: 'Home' })).toBeVisible();
    await expect(mobileMenuItems.filter({ hasText: 'Inventory' })).toBeVisible();
  });

  test('should handle form interactions', async ({ page }) => {
    // Scroll to contact form
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Fill out form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="phone"]', '(405) 555-1234');
    await page.selectOption('select[name="interest"]', 'buying');
    await page.fill('textarea[name="message"]', 'I am interested in a sedan.');

    // Check form values
    await expect(page.locator('input[name="name"]')).toHaveValue('John Doe');
    await expect(page.locator('input[name="email"]')).toHaveValue('john@example.com');
  });

  test('should handle vehicle filtering', async ({ page }) => {
    // Scroll to vehicles section
    await page.locator('#inventory').scrollIntoViewIfNeeded();

    // Wait for vehicles to load
    await page.waitForSelector('[class*="bg-white rounded-2xl"]');

    // Click on SUVs filter
    await page.click('button:has-text("SUVs")');

    // Check that filter is active (should have different styling)
    const suvButton = page.locator('button:has-text("SUVs")');
    await expect(suvButton).toHaveClass(/bg-primary-600/);
  });

  test('should have proper images and no broken links', async ({ page }) => {
    // Check for broken images
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const src = await img.getAttribute('src');
      if (src && src.startsWith('http')) {
        // Check if image loads (basic check)
        await expect(img).toBeVisible();
      }
    }
  });

  test('should have smooth scrolling navigation', async ({ page }) => {
    // Test navigation link clicks
    await page.click('a[href="#inventory"]');
    await page.waitForTimeout(1000); // Wait for smooth scroll

    // Check if we're at the inventory section
    const inventorySection = page.locator('#inventory');
    await expect(inventorySection).toBeInViewport();
  });

  test('should have proper accessibility features', async ({ page }) => {
    // Check for proper heading hierarchy
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    const h2s = page.locator('h2');
    const h2Count = await h2s.count();
    expect(h2Count).toBeGreaterThan(0);

    // Check for alt text on images
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < Math.min(imageCount, 5); i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }

    // Check for proper button labels
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();

    for (let i = 0; i < Math.min(buttonCount, 10); i++) {
      const button = buttons.nth(i);
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      expect(text || ariaLabel).toBeTruthy();
    }
  });
});