import { defineConfig } from "playwright/test"; 

export default defineConfig({
    testDir: './src',
    timeout: 30000,
    use: { 
        headless: false,
        baseURL: 'https://www.goibibo.com/'
    }
    // reporter: [
    //     ['list'], // Default console reporter
    //     ['allure-playwright'], // Allure reporter for detailed test reports
    // ],
    // outputDir: 'test-results/', // Directory for test artifacts
})