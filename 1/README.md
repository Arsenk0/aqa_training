# Проект автотестування на Playwright

Цей проект створено для вивчення та написання автоматизованих E2E тестів з використанням [Playwright](https://playwright.dev/) та TypeScript.

## Структура проекту
- `tests/` - директорія, де знаходяться файли тестів (`*.spec.ts`).
- `pages/` - класи Page Object Model (POM) для роботи зі сторінками.
- `playwright.config.ts` - конфігураційний файл Playwright.

## Запуск тестів
- Запуск в headless режимі: `npx playwright test`
- Запуск в UI режимі (найкраще для дебагу): `npx playwright test --ui`
- Запуск з браузером: `npx playwright test --headed`

## Навчання
Цей репозиторій використовується для практики написання тестів, зокрема патерну Page Object Model та роботи з різними типами селекторів.
