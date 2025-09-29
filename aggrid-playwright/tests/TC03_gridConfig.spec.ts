// Import the custom Playwright test object that includes all extended fixtures (e.g. gridConfigPage, agGridHome)
import { test } from '../fixtures/test.extend';

// Test Case: Wait for grid to load and perform grid configuration actions
test(`wait for Grid Load`, async ({ gridConfigPage, agGridHome }) => {

  // Step 1: Launch the AgGrid homepage before interacting with the grid
  await agGridHome.LaunchHomepage();

  // calling the method to navigate to the grid configuration page and wait for the grid to load
  await gridConfigPage.waitForGridLoad();

  // calling the method to select the desired data size for the grid (e.g., 100 rows)
  await gridConfigPage.selectDataSize();

  // calling the method to select a theme for the grid (e.g., "Alpine")
  await gridConfigPage.selectTheme();

  //  calling the method to enter a filter value in the grid's filter input field as contray united kingdom
  await gridConfigPage.enterFilter();

  // Step 7: Assert that the number of filtered rows matches the expected count (4)
  await gridConfigPage.assertFilteredRowCount(4);
});
