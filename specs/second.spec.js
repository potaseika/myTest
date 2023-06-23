const expect = require("chai").expect;
const EC = protractor.ExpectedConditions;
browser.waitForAngularEnabled(false);

describe("Second test in my life", function () {
  it("second test", async function () {
    const ButtonStartGameSelector = "gameCreateButton";
    const ButtonStart = $(ButtonStartGameSelector);
    const ButtonSecondStartSelector = "#playerFormSubmitButton";
    const ButtonSecondStart = $(ButtonSecondStartSelector);
    const ButtonGameSettingsSelector = "#gameSettingsSubmitButton";
    const ButtonGameSettings = $(ButtonGameSettingsSelector);

    await browser.get("https://test3-metafora-game.web.app");

    await browser.wait(
      EC.visibilityOf(ButtonStart),
      15*1000,
      "Sorry no button ButtonStart"
    );
    await browser.wait(
      EC.visibilityOf(ButtonSecondStart),
      7000,
      "Sorry no button ButtonSecondStart"
    );
    await browser.wait(
      EC.visibilityOf(ButtonGameSettings),
      7000,
      "Sorry no button ButtonGameSettings"
    );

    await ButtonStart.click();

    await ButtonSecondStart.click();

    await ButtonGameSettings.click();

    await browser.sleep(10050);
  });
});
