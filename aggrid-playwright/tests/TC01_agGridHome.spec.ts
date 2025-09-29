//Import the custom test object that includes all extended fixtures (e.g. basePage, agGridHome)
import { test } from "../fixtures/test.extend";

// Test case: Verifying that the AgGrid homepage launches and navigates correctly
test(`AgGrid Home Page - Verifing`, async ({ basePage, agGridHome }) => {

    // Launch the AgGrid homepage using the page object method
    await agGridHome.LaunchHomepage();

    // Verify that the current URL contains the expected domain
    await basePage.expectUrlContains("ag-grid.com");
});