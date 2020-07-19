const VideoReporter = require("protractor-video-reporter");
const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const path = require("path");
var pathToFfmpeg = require("ffmpeg-static");

module.exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  capabilities: {
    browserName: "chrome",
  },
  specs: ["specs/*.spec.js"],
  baseUrl: "http://www.protractortest.org/",
  onPrepare: () => {
    browser.ignoreSynchronization = true;

    jasmine.getEnv().addReporter(
      new SpecReporter({
        displayFailuresSummary: true,
        displayFailedSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true,
      })
    );

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        takeScreenshots: true,
        fixedScreenshotName: true,
      })
    );

    jasmine.getEnv().addReporter(
      new VideoReporter({
        baseDirectory: path.join(__dirname, "reports/videos/"),
        ffmpegCmd: pathToFfmpeg,
        ffmpegArgs: [
          "-f",
          "gdigrab",
          "-framerate",
          "24",
          "-video_size",
          "wsxga",
          "-i",
          "desktop",
          "-q:v",
          "10",
        ],
      })
    );
  },
};
