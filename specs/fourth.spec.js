const { element, by, browser } = require("protractor");

const expect = require("chai").expect;
const EC = protractor.ExpectedConditions;
browser.waitForAngularEnabled(false);
const buttonSelector = require ('../pages_object/buttons/buttons')

describe('Fourth test in my life', function(){
    
    const buttonSelector = new button ()

    it('Fourth my test', async function() {

        await browser.get ('https://test3-metafora-game.web.app/');

        const button9 = $('#artMenuButton')
        await browser.wait(EC.visibilityOf(button9), 7000, 'Sorry, no button art');
        await button9.click();

        await browser.sleep(1000);

        const button10 = $('#joinButton')
        await browser.wait(EC.visibilityOf(button10), 7000, 'Sorry no redirect next');
        await button10.click();

        await browser.sleep(10*1000);
    }) 
})