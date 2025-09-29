// 🧩 Import the custom Playwright test object that includes extended fixtures (e.g. agGridHome, showcaseTittle)
import { test } from "../fixtures/test.extend";

// Test Case: TC02 - Verify that all Showcase Tiles navigate correctly
test("TC02 - Verify all Showcase Tiles navigation", async ({ agGridHome, showcaseTittle }) => {

  // Step 1: Launch the AgGrid homepage before performing navigation actions
  await agGridHome.LaunchHomepage();

  // Step 2: Click on the "Performance" showcase tile to verify navigation
  await showcaseTittle.clickPerformance();

  //Step 3: Click on "Finance" again to confirm consistent behavior on repeated clicks
  await showcaseTittle.clickFinance();

  //Step 4: Click on the "HR" showcase tile to verify HR section navigation
  await showcaseTittle.clickHr();

  //Step 5: Click on the "Inventory" showcase tile to verify Inventory section navigation
  await showcaseTittle.clickInventory();
});
