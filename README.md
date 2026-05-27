# 🎭 Playwright E2E Testing Framework

Automated web application testing using Playwright with TypeScript.

## 📋 Prerequisites

Install these before starting:

- **Node.js** v16+ → [Download](https://nodejs.org/)
- **Git** → [Download](https://git-scm.com/)
- **VS Code** (optional) → [Download](https://code.visualstudio.com/)

## 🚀 Quick Setup (5 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/vikraam4/Project.git
cd Project

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. Run tests
npm test
```

## 📁 Project Structure

```
Project/
├── src/TC001/                    # Test files
│   └── registeration.e2e.spec.ts
├── pageobject/                   # Page Object Model
│   └── registration.page.ts
├── test-data/TC001/              # Test data
│   └── TC001.json
├── constants/                    # Configuration
│   └── links.ts
├── allure-report/                # Test reports
├── allure-results/               # Report data
├── playwright.config.ts          # Playwright config
└── package.json                  # Dependencies
```

## 🧪 Running Tests

```bash
# Run tests (headless)
npm test

# Run tests with browser visible
npm run test:headed

# Run tests with Allure report
npm run test:report

# Run specific test
npx playwright test src/TC001/registeration.e2e.spec.ts

# Run in debug mode
npx playwright test --debug
```

## 📊 Allure Reports

```bash
# Run tests with Allure
npm run test:report

# Generate report
allure generate allure-results -o allure-report --clean

# Open report
allure open allure-report
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **Playwright not found** | `npm install` then `npx playwright install` |
| **Browser not found** | `npx playwright install --force` |
| **Tests timeout** | Increase timeout in `playwright.config.ts` |
| **Permission denied (macOS)** | `sudo chown -R $(whoami) ~/.cache/ms-playwright/` |
| **Allure not found** | `brew install allure` (macOS) |

## 🚀 CI/CD Pipeline (Jenkins)

See [Jenkinsfile](./Jenkinsfile) for automated testing setup.

## 📝 Writing Tests

### Test Example

```typescript
// src/TC002/new-feature.e2e.spec.ts
import { test, Page } from "@playwright/test";
import NewPage from "../../pageobject/new-page.page";
import testData from "../../test-data/TC002/TC002.json";

test.describe("Feature Name", () => {
  let page: Page;
  let newPage: NewPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    newPage = new NewPage(page);
  });

  test("TC002 - Test description", async () => {
    await newPage.someAction(testData.someField);
    await newPage.verifyResult();
  });

  test.afterAll(async () => {
    await page.close();
  });
});
```

### Page Object Example

```typescript
// pageobject/new-page.page.ts
import { Locator, Page, expect } from "@playwright/test";

export default class NewPage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  selectors = {
    submitButton: (): Locator => 
      this.page.getByRole("button", { name: "Submit" }),
    inputField: (): Locator => 
      this.page.getByPlaceholder("Enter text"),
  };

  async fillForm(text: string) {
    await this.selectors.inputField().fill(text);
    await this.selectors.submitButton().click();
  }

  async verifyResult() {
    await expect(this.page).toHaveURL(/expected-url/);
  }
}
```

## 📚 Useful Commands

```bash
# Setup
git clone https://github.com/vikraam4/Project.git && cd Project
npm install && npx playwright install

# Running tests
npm test                    # Headless mode
npm run test:headed         # With browser
npm run test:report         # With Allure report
npx playwright test --debug # Debug mode

# Reports
allure generate allure-results -o allure-report --clean
allure open allure-report

# Maintenance
npm update                                  # Update packages
npm audit                                   # Check vulnerabilities
rm -rf allure-report/* allure-results/*     # Clean reports
```

## 📖 Resources

- [Playwright Docs](https://playwright.dev/)
- [Allure Reports](https://docs.qameta.io/allure/)
- [Playwright Discord](https://aka.ms/playwright/discord)

---

🎉 **Ready to test!** Happy testing! 🚀
