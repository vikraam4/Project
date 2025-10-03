# 🎭 Playwright E2E Testing Framework

Complete end-to-end testing framework using Playwright with TypeScript for automated web application testing.

## 📋 Prerequisites

Before setting up the project, ensure you have the following installed on your system:

### 🔧 Required Software

1. **Node.js** (v16 or later) - [Download here](https://nodejs.org/)
   ```bash
   # Check if installed
   node --version
   npm --version
   ```

2. **Git** - [Download here](https://git-scm.com/)
   ```bash
   # Check if installed
   git --version
   ```

3. **VS Code** (Recommended) - [Download here](https://code.visualstudio.com/)

### 🔍 System Requirements

- **Operating System**: macOS, Windows, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: At least 2GB free space
- **Internet Connection**: Required for downloading browsers

## 🚀 Complete Setup Instructions

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/vikraam4/Project.git

# Navigate to project directory
cd Project

# Verify you're in the right directory
ls -la
```

### Step 2: Install Node.js Dependencies

```bash
# Install all project dependencies
npm install

# Verify installation
npm list --depth=0
```

**Expected output:**
```
Project@1.0.0 /path/to/Project
├── @playwright/test@^1.49.1
└── typescript@^5.3.3
```

### Step 3: Install Playwright Browsers

```bash
# Install Playwright browsers with system dependencies
npx playwright install

# For system dependencies (Linux/macOS)
npx playwright install-deps
```

**Expected output:**
```
Downloading Chromium 130.0.6723.31...
Downloading Firefox 130.0...
Downloading Webkit 18.0...
```

### Step 4: Verify Installation

```bash
# Check Playwright version
npx playwright --version

# Run a test to verify setup
npm test
```

**If everything is working correctly, you should see:**
```
Running 1 test using 1 worker
✓ 1 src/travel.e2e.spec.ts:13:7 › Book Flight › Search Flight - business class (11.3s)
1 passed (16.1s)
```

### Step 5: Project Structure Overview

```
Project/
├── src/                          # Test files
│   └── travel.e2e.spec.ts       # Main test suite
├── pageobject/                   # Page Object Model
│   └── booking.page.ts          # Page class definitions
├── playwright-report/            # Test reports (auto-generated)
├── test-results/                # Test artifacts (auto-generated)
├── playwright.config.ts         # Playwright configuration
├── package.json                 # Project dependencies
├── Jenkinsfile                  # CI/CD pipeline
├── JENKINS_SETUP.md            # Jenkins setup guide
└── README.md                    # This file
```

## 🧪 Running Tests

### Basic Test Commands

```bash
# Run all tests (headless mode)
npm test

# Run tests with browser visible
npm run test:headed

# Run tests in debug mode (step-by-step execution)
npm run test:debug

# Run tests for CI environment
npm run test:ci
```

### Advanced Test Options

```bash
# Run specific test file
npx playwright test src/travel.e2e.spec.ts

# Run tests in specific browser
npx playwright test --project=chromium

# Run tests with specific reporter
npx playwright test --reporter=html

# Run tests in parallel
npx playwright test --workers=4

# Show test report after execution
npx playwright show-report
```

## 🔧 Development Setup

### VS Code Extensions (Recommended)

Install these extensions for better development experience:

```bash
# Install VS Code extensions via command line
code --install-extension ms-playwright.playwright
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-typescript-next
```

### Code Quality Tools

```bash
# Check code formatting
npm run format:check

# Auto-fix formatting
npm run format

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# TypeScript type checking
npm run type-check
```

## 📊 Understanding Test Reports

### HTML Reports

After running tests, view detailed reports:

```bash
# Generate and open HTML report
npx playwright show-report
```

**Report includes:**
- ✅ Test execution results
- 📸 Screenshots on failures
- 🎥 Video recordings
- 📋 Test logs and timings
- 🌐 Cross-browser results

### Console Reports

```bash
# Simple console output
npm run test:ci

# Detailed console output
npx playwright test --reporter=list
```

## 🐛 Troubleshooting

### Common Issues & Solutions

#### ❌ **"npx playwright not found"**
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### ❌ **"Browser not found"**
```bash
# Solution: Reinstall browsers
npx playwright install --force
```

#### ❌ **Tests failing with timeout**
```bash
# Solution: Increase timeout in playwright.config.ts
timeout: 60000  # Change from 30000 to 60000
```

#### ❌ **"Permission denied" on macOS**
```bash
# Solution: Fix permissions
sudo chown -R $(whoami) ~/.cache/ms-playwright/
```

#### ❌ **Network/Firewall Issues**
```bash
# Solution: Check network settings
ping google.com
# Configure proxy in playwright.config.ts if needed
```

### Debug Mode

```bash
# Run in debug mode for step-by-step execution
npm run test:debug

# Run with headed browser for visual debugging
npm run test:headed
```

### Logs and Artifacts

```bash
# View test results directory
ls -la test-results/

# View latest test report
open playwright-report/index.html
```

## 🚀 CI/CD Pipeline (Jenkins)

### Jenkins Setup

For automated testing with Jenkins:

1. **Follow detailed setup**: See [JENKINS_SETUP.md](./JENKINS_SETUP.md)
2. **Import job config**: Use [jenkins-job-config.xml](./jenkins-job-config.xml)
3. **Configure email**: Setup Gmail SMTP for notifications

### Pipeline Features

- ✅ **Automated builds** on code changes
- ✅ **Cross-browser testing**
- ✅ **Email notifications** to stakeholders
- ✅ **HTML reports** with screenshots
- ✅ **Artifact management**

## 📝 Writing New Tests

### Test File Structure

```typescript
// src/new-feature.e2e.spec.ts
import { test, expect, Page } from "@playwright/test";
import BookingPage from "../pageobject/booking.page";

test.describe("Feature Name", () => {
  let page: Page;
  let bookingPage: BookingPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    bookingPage = new BookingPage(page);
  });

  test("Test scenario description", async () => {
    // Your test steps here
    await page.goto("/");
    // Add assertions
    await expect(page).toHaveTitle(/Expected Title/);
  });

  test.afterAll(async () => {
    await page.close();
  });
});
```

### Page Object Pattern

```typescript
// pageobject/new-page.ts
import { Locator, Page } from "@playwright/test";

export default class NewPage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Selectors
  selectors = {
    submitButton: (): Locator => this.page.getByRole("button", { name: "Submit" }),
    inputField: (): Locator => this.page.getByPlaceholder("Enter text"),
  };

  // Actions
  async fillForm(text: string) {
    await this.selectors.inputField().fill(text);
    await this.selectors.submitButton().click();
  }
}
```

## 🔄 Regular Maintenance

### Weekly Tasks

```bash
# Update dependencies
npm update

# Clean old reports
rm -rf playwright-report/* test-results/*

# Check for security vulnerabilities
npm audit
```

### Monthly Tasks

```bash
# Update Playwright to latest version
npm install @playwright/test@latest

# Update browsers
npx playwright install

# Review and optimize tests
npm run test -- --reporter=html
```

## 📞 Support & Help

### Getting Help

1. **Check logs**: Review console output and test reports
2. **Documentation**: [Playwright Official Docs](https://playwright.dev/)
3. **Issues**: Create GitHub issue with reproduction steps
4. **Community**: [Playwright Discord](https://aka.ms/playwright/discord)

### Useful Commands Reference

```bash
# Quick setup (new machine)
git clone https://github.com/vikraam4/Project.git
cd Project
npm install
npx playwright install
npm test

# Daily development
npm run test:headed    # Visual testing
npm run lint          # Code quality
npm run format        # Code formatting

# Debugging
npm run test:debug    # Step-by-step debugging
npx playwright show-report  # View last report

# CI/CD
npm run test:ci       # Continuous integration
```

## 🎯 Quick Start Summary

**For immediate setup:**

```bash
# 1. Clone & setup
git clone https://github.com/vikraam4/Project.git && cd Project

# 2. Install everything
npm install && npx playwright install

# 3. Verify setup
npm test

# 4. View results
npx playwright show-report
```

**Expected time: 5-10 minutes** ⏱️

---

🎉 **Setup Complete!** Your Playwright testing environment is ready for automated testing!
