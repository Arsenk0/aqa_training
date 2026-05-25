import { test, expect } from '@playwright/test';
import { LoginPage} from "../pages/LoginPage";

test.describe('Login with POM', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();

    });

    test('HappyPath', async ({ page }) => {
        await loginPage.login(  'standard_user','secret_sauce')
        await expect(page).toHaveURL(/.*inventory.html/);
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('Wrong password', async ({ page }) => {
        await loginPage.login('standard_user','wrong_password')

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match');
    });

});