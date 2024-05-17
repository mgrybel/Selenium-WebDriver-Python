const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/reports/cucumberJson/',
  reportPath: 'cypress/reports/htmlMultiReport/',
  ignoreBadJsonFile: true,
  displayReportTime: true,
  displayDuration: true,
  metadata: {
    device: 'Local test machine',
    platform: { name: 'macOS', version: '11.2.2' },
  },
});
