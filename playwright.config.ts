import { defineConfig } from "playwright/test"; 

export default defineConfig({
    testDir: './src',
    timeout: 30000,
    use: { 
        headless: true,
        baseURL: 'https://automationexercise.com/',
    }
});