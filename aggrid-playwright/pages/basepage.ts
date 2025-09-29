// importing page and expect from playwright test, and PlaywrightWrapper from helpers/playwright
import { Page, expect } from '@playwright/test';
import { PlaywrightWrapper } from '../helpers/playwright';

// BasePage class extending PlaywrightWrapper
export class BasePage extends PlaywrightWrapper {
  // Constructor accepting a Page object and calling the superclass constructor
  constructor(public page: Page) {
    super();
  }

  // Method to open a URL using the loadApp method from PlaywrightWrapper
  async open(URL: string) {
    await this.loadApp(URL); //Reuse wrapper logic
    console.log(`Navigated to ${URL}`);
   
  }

  // Method to expect the current URL to contain a specific string
  async expectUrlContains(url: string) {
    await expect(this.page).toHaveURL(new RegExp('ag-grid.com'));
  
  }
}

