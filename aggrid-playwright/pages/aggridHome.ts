// importing BasePage from basepage.ts, URLConstants from urlConstants.ts and Page from playwright
import {BasePage} from "./basepage";
import { URLConstants } from "../constants/urlConstants";
import { Page } from "@playwright/test";

// Creating a class AgGridHome that extends BasePage
export class AgGridHome extends BasePage {
    // Constructor to initialize the page object
   async LaunchHomepage() {
        // Open the URL and wait for the page to load
       await this.open(URLConstants.URL);
       await this.expectUrlContains("ag-grid.com");
       await this.page.waitForTimeout(3000);
   }    
    }