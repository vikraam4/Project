import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src",

  testMatch: "**/*.e2e.spec.ts",
  timeout: 30000,
  retries: 1,

  use: {
    headless: true,
    baseURL: "https://automationexercise.com/",
    screenshot: "only-on-failure",
    video: "on",
    trace: "on"
  },

  reporter: [
    ["list"],
    ["junit", {
      outputFile: "test-results/results.xml"
    }],

    ["html", {
      outputFolder: "playwright-report",
      open: "always"
    }]

  ],

  outputDir: "test-results/",

});