import { defineConfig } from "playwright/test"; 

export default defineConfig({
    testDir: './src',
    timeout: 30000,
    use: { 
        headless: false,
        baseURL: 'https://automationexercise.com/',
    }
});