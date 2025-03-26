const report = require("multiple-cucumber-html-reporter");

// import { startTime, endTime } from "../../src/test/api/steps/hooks";

report.generate({
  jsonDir: "reports/cucumber-reports",
  reportPath: "./reports/Multiple_Cucumber_Reports",
  reportName: "GQE Playwright API Automation report",
  pageTitle: "ReqRes API Test Autmation report",
  displayDuration: false,
  displayReportTime: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Demo project" },
      { label: "Release", value: "0.1.0" },
      { label: "Cycle", value: "Smoke-1" },
      { label: "Execution Start Time", value: "Mar 18th" },
      { label: "Execution End Time", value: "Mar 18th" }
      // { label: "Execution Start Time", value: startTime },
      // { label: "Execution End Time", value: endTime }
    ],
  },
});