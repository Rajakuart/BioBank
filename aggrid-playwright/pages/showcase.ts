// importing expext from playwright test and BasePage from basepage file
import { expect } from "@playwright/test";
import { BasePage } from "./basepage";

// creating ShowcasePage class and extending it from BasePage
export class ShowcasePage extends BasePage {

  // method to navigate to showcase page using relative url
  async clickPerformance() {
    const performanceLink = this.page.getByRole("link", { name: /Performance/i });
    await expect(performanceLink).toBeVisible();
    await performanceLink.click(),
    await expect(this.page).toHaveTitle(/Performance/i);
  }

  // method to click on finance link and verify the url contains finance
  async clickFinance() {
    const financeLink = this.page.getByRole("link", { name: /Finance/i });
    await expect(financeLink).toBeVisible();
    await financeLink.click(),
    await expect(this.page).toHaveURL(/finance/i);
  }

  // method to click on hr link and verify the url contains hr
  async clickHr() {
  const hrLink = this.page.locator('a[href="/example-hr/"]');
  await expect(hrLink).toBeVisible();
  await hrLink.click(),
  await expect(this.page).toHaveURL(/hr/i);
}

// method to click on inventory link and verify the url contains inventory
 async clickInventory() {
    const link = this.page.getByRole("link", { name: /Inventory/i });
    await expect(link).toBeVisible();
    await link.click(),
    await this.expectUrlContains("inventory");
  }
}
