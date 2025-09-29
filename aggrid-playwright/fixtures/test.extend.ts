// This file defines custom Playwright fixtures to create and manage reusable page objects.
// Fixtures help in initializing pages or components before each test and cleaning them up afterward.

import { AgGridHome } from "../pages/aggridHome";
import { BasePage } from "../pages/basepage";
import { test as base, Page } from "@playwright/test";
import { ShowcasePage } from "../pages/showcase";
import { GridConfigpage } from "../pages/gridConfigPage";
import { ToggleEvent } from "../pages/toggleTab";

// Define a TypeScript type for all custom fixtures used in tests
type AgGridFixtures = {
  basePage: BasePage;
  agGridHome: AgGridHome;
  showcaseTittle: ShowcasePage;
  gridConfigPage: GridConfigpage;
  toggeleTab: ToggleEvent;
};

// Extend the default Playwright test object with custom fixtures
export const test = base.extend<AgGridFixtures>({

  // Base page fixture: provides common navigation and utilities
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },

  // AgGrid home fixture: represents the AgGrid home page
  agGridHome: async ({ page }, use) => {
    const agGridHome = new AgGridHome(page);
    await use(agGridHome);
  },

  // Showcase title fixture: represents the showcase page functionality
  showcaseTittle: async ({ page }, use) => {
    const showcaseTittle = new ShowcasePage(page);
    await use(showcaseTittle);
  },

  // Grid configuration fixture: manages interactions with the grid configuration page
  gridConfigPage: async ({ page }, use) => {
    const gridConfigPage = new GridConfigpage(page);
    await use(gridConfigPage);
  },

  // Toggle tab fixture: handles events or interactions with toggle tab elements
  toggeleTab: async ({ page }, use) => {
    const toggletab = new ToggleEvent(page);
    await use(toggletab);
  },
});
