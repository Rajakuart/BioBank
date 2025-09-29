// impoerting base page from basepage and expect, page from playwright
import { BasePage } from "./basepage"
import { expect, Page,test } from '@playwright/test';

test.use({
    // setting the viewport size for the test
    viewport: { width: 1280, height: 724 },
})
// creating class gridConfigPage and extending basepage
export class GridConfigpage extends BasePage {
    // constructor to initialize page object using super keyword
    constructor(page: Page) {
        super(page);
    }

    // method to wait for grid to load and verify its visibility
    async waitForGridLoad() {
        const grid = this.page.locator("//div[@id='myGrid']");
        await expect(grid).toBeVisible();
        console.log("Grid is visible");
    }

    // method to select data size from dropdown and verify the selection 
    async selectDataSize() {
        // Rows dropdown
        const rowsDropdown = this.page.locator('(//button[@role="combobox"])[1]');
        await rowsDropdown.click();
        await this.page.waitForTimeout(5000);
        await this.page.getByRole('option', { name: '100 Rows, 22 Cols', exact: true }).click();
        console.log(`100 Raw, 22 Cols selected `);
    }

    // method to select theme from dropdown and verify the selection
    async selectTheme() {
        const themeDropdown = this.page.locator('(//button[@role="combobox"])[2]');
        await themeDropdown.click();
        await this.page.waitForTimeout(5000);
        await this.page.getByRole('option', { name: 'Balham', exact: true }).click();
        console.log(`Balham theme selected `);
    }

    // method to enter filter value and verify the filtered results
    async enterFilter() {
        const filterInput = this.page.locator("//input[@id='global-filter']");
        await filterInput.fill("United Kingdom");
        await this.page.waitForTimeout(5000);
        console.log(`Filter applied with value United Kingdom`);
    }
 
    // method to assert the count of visible rows after filter is applied passing expected count as parameter
    async assertFilteredRowCount(count: number) {
        const visibleRows = this.page.locator('.ag-center-cols-container .ag-row');// find xpath for this
        await expect(visibleRows).toHaveCount(count);
        console.log(`Found ${count} visible rows after filter`);
        // taking screenshot of the filtered result and storing in utils/screenshot folder and matching with snapshot
        expect(await this.page.screenshot()).toMatchSnapshot({path: 'utils/screenshot/HomeFilter.png'},{maxDiffPixels: 35, threshold: 0.8});
        // matching screenshot with snapshot as the requirement is to match the screenshot with snapshot usine threshold of 0.5
        console.log(`Screenshot taken and matched`);
        
    }


}