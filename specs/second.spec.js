const { element, by } = require("protractor");

const expect = require("chai").expect;
const EC = protractor.ExpectedConditions;
browser.waitForAngularEnabled(false);

describe("Second test in my life", function () {
  it("second test", async function () {
    await browser.get("https://test3-metafora-game.web.app");

    const button1 = $("#gameCreateButton");
    await browser.wait(EC.visibilityOf(button1), 10000, "Sorry, no button1");
    await button1.click();

    const button2 = $("#playerFormSubmitButton");
    await browser.wait(EC.visibilityOf(button2), 10000, "Sorry, no button2");
    await button2.click();

    const button3 = $("#gameSettingsSubmitButton");
    await browser.wait(EC.visibilityOf(button3), 10000, "Sorry, no button3");
    await button3.click();

    await browser.sleep(10050);
  });
});
