const { element, by, browser } = require("protractor");
const { MainPage } = require ('../pages_object/main')

const expect = require("chai").expect;
const EC = protractor.ExpectedConditions;
browser.waitForAngularEnabled(false);

describe("Check rules and back to main", function (){
   it ("third test", async function (){
    await browser.get("https://test3-metafora-game.web.app");

    const button7 = $("#rulesButton")
    await browser.wait(EC.visibilityOf(button7), 10000, "Sorry, no button1");
    await button7.click();

    await browser.sleep(1000);

    const button8 = $('#backButtonRules')
    await browser.wait(EC.visibilityOf(button8), 7000, 'Sorry, no backbutton');
    await button8.click();
   })
})