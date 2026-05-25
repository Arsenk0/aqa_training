# Playwright Automation Framework

This project is created to study and implement automated E2E tests using [Playwright](https://playwright.dev/) and TypeScript.

## Project Structure
- `1/` - The first part of the training (basic tests).
  - `tests/` - Directory containing the test files (`*.spec.ts`).
  - `pages/` - Page Object Model (POM) classes for interacting with web pages.
  - `playwright.config.ts` - Playwright configuration file.

## Running Tests (from inside the `1/` directory)
- Run in headless mode: `npx playwright test`
- Run in UI mode (best for debugging): `npx playwright test --ui`
- Run with a visible browser (headed mode): `npx playwright test --headed`

## Learning Objectives
This repository serves as a practical playground for writing automated tests, specifically focusing on the Page Object Model pattern and working with various types of locators.
