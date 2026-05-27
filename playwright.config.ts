import { defineConfig, devices } from "@playwright/test";

export default defineConfig({

  workers: 1,
  testDir: "./src",
  testMatch: "**/*.e2e.spec.ts",
  timeout: 30000,
  retries: 1,

  use: {
    headless: true,
    baseURL: "https://automationexercise.com/",
    screenshot: "only-on-failure",
    video: "on"

  },

  //Cross Browser
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"]
      }
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"]
      }
    }
  ],

  reporter: [
    ["list"],
    ["html", {
      outputFolder: "playwright-report",
      open: "always"
    }]
  ],
  
});