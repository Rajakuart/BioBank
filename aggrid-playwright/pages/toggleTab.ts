// impoert expect and Page from playwright, import BasePage from basepage
import { expect, Page } from "@playwright/test";
import { BasePage } from "./basepage"

// create a class ToggleEvent that extends BasePage
export class ToggleEvent extends BasePage {

    // create a constructor that takes a Page object as a parameter and calls the super constructor
    constructor(page: Page) {
        super(page);
    }

    // create a method to navigate to the toggle tab using locator to be visible and click
    async unSelectAll() {
        const unselectAll = this.page.locator("//input[@aria-label='Toggle All Columns Visibility']");
        await expect(unselectAll).toBeVisible();
        await unselectAll.click();
        // usinng a basic console log to print a message to console for confirmation
        console.log("All columns unselected");
        
    }

    // create a method to select name column using locator to be visible and click
    async selectName() {
        const name = this.page.locator("//span[text()='Name']")
        await name.scrollIntoViewIfNeeded();
        await name.click();
        // usinng a basic console log to print a message to console for confirmation
        console.log("Name column selected");
    }

    // create a method to select performance column using locator to be visible and click
    async selectPerformance() {
        // creating a locator for the input field and filling it with "Performance"
        const input = this.page.locator("(//input[@class='ag-input-field-input ag-text-field-input'])[2]");
        await input.fill("Performance");
        await input.press('Enter');
        // creating a locator for the performance column and clicking it
        const perfomance = this.page.locator("(//span[text()='Performance'])[2]");
        await perfomance.scrollIntoViewIfNeeded();
        await perfomance.click();
        // usinng a basic console log to print a message to console for confirmation
        console.log("Performance column selected");
    }

    // create a method to select jan column using locator to be visible and click
     async selectJan() {   
        // creating a locator for the input field and filling it with "Jan"
       const input = this.page.locator("//input[@placeholder='Search...']");
        await input.fill("Jan");
        await input.press('Enter');
        // creating a locator for the jan column and clicking it
        const jan = this.page.locator("//span[text()='Jan']");
        await jan.click();
        // usinng a basic console log to print a message to console for confirmation
        console.log("Jan column selected");
    }

    // create a method to assert that 4 checkboxes are visible using locator to count name, performance, jan and toggle all
    async assertCheckboxesVisible() {
        // creating a locator for the checkboxes and counting them
         const row = this.page.locator('//div[@role="row" and @aria-rowindex="4"]//div[@role="gridcell"]');
         // creating a variable to store the count of visible columns
        const visibleColumns = await row.count();
        // printing the count of visible columns to console
        console.log(`Visible columns in row 4: ${visibleColumns}`);
        // asserting that the count of visible columns is equal to the expected count
        expect(visibleColumns).toBe(4);

    }
}
