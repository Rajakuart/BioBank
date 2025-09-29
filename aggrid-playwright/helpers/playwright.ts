//Loads the application at the specified URL using the Playwright Page instance.
import { chromium, Browser, Page } from 'playwright';

// Abstract base class that provides reusable Playwright utilities for page interactions
export abstract class PlaywrightWrapper {

    // Playwright Page instance for browser interactions
     page!: Page;
    

    /**
     * Loads the application at the specified URL.
     * @param {string} url - The URL to navigate to.
     */
    public async loadApp(url: string) {
        try {
            // Navigate to the provided URL and wait until the page is fully loaded
            await this.page.goto(url); 
            console.log(`Successfully loaded the URL: ${url}`);
        } catch (error) {
            // Log the error and rethrow it for further handling
            console.log(`Error loading the page at ${url}:`);
            throw new Error(`Failed to load the page at ${url}`);
        }
    }
}