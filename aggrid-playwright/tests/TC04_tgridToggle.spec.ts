// Import the custom Playwright test object that includes extended fixtures (e.g. agGridHome, toggeleTab)
import { test } from "../fixtures/test.extend";

// Test Case: TC02 - Verify showcase toggle tab functionality and checkbox selections
test("TC02 - Verify all Showcase Tiles navigation", async ({ agGridHome, toggeleTab }) => {

  // calling the method to launch the ag-Grid homepage
  await agGridHome.LaunchHomepage();

  // calling the method to navigate to the toggle tab section to unselect all checkboxes
  await toggeleTab.unSelectAll();

  // calling the method to navigate to the toggle tab section to select Name checkbox and verify
  await toggeleTab.selectName();

  // calling the method to navigate to the toggle tab section to select Performance checkbox and verify
  await toggeleTab.selectPerformance();

  // calling the method to navigate to the toggle tab section to select Jan checkbox and verify
  await toggeleTab.selectJan();

  // calling the method to navigate to the toggle tab section to verify the checkboxes are visible
  await toggeleTab.assertCheckboxesVisible();
});
