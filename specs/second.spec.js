const { element, by } = require("protractor");
const { default: ButtonSelector } = require("../pages_object/buttons/index");

const expect = require("chai").expect;
const EC = protractor.ExpectedConditions;
browser.waitForAngularEnabled(false);

describe("Second test in my life", function () {
  it("second test", async function () {
   await browser.get("https://test3-metafora-game.web.app");
    //await browser.get("http://localhost:3000");

    const button1 = $("#gameCreateButton");
    await browser.wait(EC.visibilityOf(button1), 10000, "Sorry, no button1");
    await button1.click();

    await browser.sleep(1050);

    const button2 = $("#playerFormSubmitButton");
    await browser.wait(EC.visibilityOf(button2), 10000, "Sorry, no button2");
    await button2.click();

    await browser.sleep(1050);

    const button3 = $("#gameSettingsSubmitButton");
    await browser.wait(EC.visibilityOf(button3), 10000, "Sorry, no button3");
    await button3.click();

    await browser.sleep(1050);

    const button4 = $("#menuButton");
    await browser.wait(EC.visibilityOf(button4), 10000, "Sorry, no button4");
    await button4.click();

    await browser.sleep(1050);
    
    const button5 = $("#exitGameButton");
    await browser.wait(EC.visibilityOf(button5), 10000, "Sorry, no button5");
    await button5.click();
    
    await browser.sleep(1050); 

    const button6 = $("#acceptExitGameButton");
    await browser.wait(EC.visibilityOf(button6), 10000, "Sorry, no button6");
    await button6.click();


    await browser.sleep(10050);
  });
});
