import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Page');
});

import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://example.com/login');

  // Fill in the login form
  await page.fill('input[name="username"]', 'your-username');  // Replace with actual field name and value
  await page.fill('input[name="password"]', 'your-password');  // Replace with actual field name and value

  // Click the login button
  await page.click('button[type="submit"]');

  // Wait for the page to load after login
  await page.waitForNavigation();

  // Verify that the login was successful (example: check if a user profile element is visible)
  const userProfile = await page.isVisible('text=User Profile');  // Adjust selector to match your site
  expect(userProfile).toBe(true);
});

test('Navigate to Dashboard', async ({ page }) => {
  // Assume the user is logged in already
  await page.goto('https://example.com/dashboard');

  // Verify the dashboard page is loaded
  const dashboardHeader = await page.isVisible('h1=Dashboard');
  expect(dashboardHeader).toBe(true);
});

test('Test Navigation Menu', async ({ page }) => {
  // Navigate to the home page
  await page.goto('https://example.com');

  // Click the "About Us" menu item
  await page.click('text=About Us');

  // Verify that the About Us page is displayed
  const aboutPage = await page.isVisible('h1=About Us');
  expect(aboutPage).toBe(true);
});

test('Search Functionality Test', async ({ page }) => {
  // Navigate to a website similar to or is "Pinterest", You can change the website name, I wrote Pinterest just as an example
  await page.goto('https://www.pinterest.com/');

  // Enter a search query into the search bar
  await page.fill('input[name="searchQuery"]', 'travel');

  // Press Enter to start the search
  await page.press('input[name="searchQuery"]', 'Enter');

  // Wait for results to load
  await page.waitForSelector('div.searchResults');

  // Verify that the search results contain pins
  const searchResults = await page.isVisible('div.searchResults');
  expect(searchResults).toBe(true);
});

test('Create New Board Test', async ({ page }) => {
  // Log in to Miro or any other similar website where you have to create boards, you can delete the commands if you are tetsinga  different web application
  await page.goto('https://miro.com/login/');
  await page.fill('input[name="email"]', 'your-email@example.com');
  await page.fill('input[name="password"]', 'your-password');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  // Click on "Create new board" button
  await page.click('button.create-new-board');

  // Verify that the board is created by checking the board title or visibility
  const boardTitle = await page.isVisible('h1.board-title');
  expect(boardTitle).toBe(true);
});


test('Logout Test', async ({ page }) => {
  // Log in to a website
  await page.goto('https://example.com');
  await page.fill('input[name="email"]', 'your-email@example.com');
  await page.fill('input[name="password"]', 'your-password');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  // Click on the profile icon
  await page.click('div.profile-icon');

  // Click on the "Log out" button
  await page.click('button.logout');

  // Verify that the user is logged out (e.g., login page is visible)
  const loginButton = await page.isVisible('button.login');
  expect(loginButton).toBe(true);
});


// Test Notification Feature
import { test, expect } from '@playwright/test';

test('should show email notification on new message', async ({ page }) => {
  // Go to login page
  await page.goto('https://yourwebsite.com/login');

  // Login with valid credentials
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  // Navigate to messages section or wait for a message to arrive
  await page.goto('https://yourwebsite.com/messages');
  await page.waitForSelector('.message-notification'); // Assuming notifications have this class

  // Check if notification is displayed
  const notification = await page.locator('.message-notification');
  await expect(notification).toBeVisible();
  
  // Optionally, verify notification content
  const notificationContent = await notification.textContent();
  await expect(notificationContent).toContain('New message received!');
});

test('should show push notification when user receives a message', async ({ page }) => {
  // Assuming you're using some push notification service
  // Go to your app, logged in or not
  await page.goto('https://yourwebsite.com');
  
  // Trigger push notification (this might need some setup with service workers)
  // Simulate or wait for push notification
  await page.waitForEvent('push');
  
  // Check if push notification appears
  const pushNotification = await page.locator('.push-notification');
  await expect(pushNotification).toBeVisible();
});

// Test User Dashboard
import { test, expect } from '@playwright/test';

test('should display user dashboard with correct user info', async ({ page }) => {
  // Log in with valid credentials
  await page.goto('https://yourwebsite.com/login');
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  // Navigate to the user dashboard
  await page.goto('https://yourwebsite.com/dashboard');
  
  // Check if the profile info is displayed
  const userName = await page.locator('.user-profile .username'); // Assuming this class holds the username
  await expect(userName).toHaveText('testuser');
  
  // Check if activity feed section exists
  const activityFeed = await page.locator('.activity-feed');
  await expect(activityFeed).toBeVisible();
  
  // Ensure user can update profile information
  const editButton = await page.locator('.profile-edit-button');
  await expect(editButton).toBeVisible();
  await editButton.click();
  
  // Modify profile info
  await page.fill('input[name="email"]', 'newemail@example.com');
  await page.click('button[type="submit"]');
  
  // Verify profile update confirmation message
  const confirmationMessage = await page.locator('.profile-update-success');
  await expect(confirmationMessage).toHaveText('Profile updated successfully!');
});


// Test SSL/TLS Encryption (Check if HTTPS is used)
import { test, expect } from '@playwright/test';

// Test Password Recovery
import { test, expect } from '@playwright/test';

test('should send password reset email', async ({ page }) => {
  // Go to password recovery page
  await page.goto('https://yourwebsite.com/password-recovery');
  
  // Enter the email to reset the password
  await page.fill('input[name="email"]', 'testuser@example.com');
  await page.click('button[type="submit"]');
  
  // Verify the success message
  const successMessage = await page.locator('.password-reset-success');
  await expect(successMessage).toHaveText('Password reset link has been sent to your email!');
});

