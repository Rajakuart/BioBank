# Playwright E2E Automation Framework
A modular Playwright-based automation testing framework built using TypeScript, following the Page Object Model (POM) design pattern.
This framework includes custom fixtures, reusable page objects, and typed URL constants, providing a clean and scalable structure for UI test automation.


# Features
=> Playwright + TypeScript — Modern E2E testing with type safety

=> Page Object Model (POM) — Clean separation of test logic and UI interactions

=> Custom Fixtures — Reusable components for shared setup and teardown

=> JSDoc Comments — Clear in-code documentation and IntelliSense support

=> URL Constants — Centralized URL management for consistency

=> Scalable Structure — Easy to maintain and extend


# CProject Structure 

 project-root
├──  fixtures/              # Custom fixtures for Playwright test extensions
│   └── test.extend.ts
│
├──  pages/                 # Page Object Model classes
│   ├── basepage.ts
│   ├── aggridHome.ts
│   ├── showcase.ts
│   ├── gridConfigPage.ts
│   └── toggleTab.ts
│
├──  constants/             # Constants (e.g. URLs)
│   └── urlConstants.ts
│
├──  tests/                 # Test specifications
│   ├── aggridHome.spec.ts
│   ├── showcase.spec.ts
│   ├── gridConfig.spec.ts
│   └── toggleTab.spec.ts
│
├── package.json
├── playwright.config.ts
└── tsconfig.json


# Clone this repository
Make sure you have Node.js (>= 18.x) installed.

# Clone this repository
git clone https://github.com/your-username/playwright-automation.git

# Navigate to project folder
cd playwright-automation

# Install dependencies
npm install

# Running Test
Run all tests: npx playwright test

Run a specific test: npx playwright test tests/aggridHome.spec.ts

Run tests in headed mode: npx playwright test --headed

Run with UI mode (interactive): npx playwright test --ui

Run a Report: npx playwright show-report


# Fixtures Overview
Custom fixtures are defined in fixtures/test.extend.ts and provide reusable instances:

Fixture Name	        Description
basePage	            Common navigation & assertions
agGridHome	            Ag-Grid homepage interactions
showcaseTittle	        Showcase page navigation
gridConfigPage	        Grid configuration controls
toggeleTab	            Toggle tab actions & validations
