const expect = require ("chai").expect
const EC = protractor.ExpectedConditions
browser.waitForAngularEnabled(false)
describe ("Second test in my life", function(){
    it ("second test", async function(){
       
       const ButtonStartGameSelector = "#root > div.Root--nY2ot > div.Root__Wrapper--IoJfb > div > div > div.InitialScreen__Container--RUB2M > div.InitialScreen__StartMenu--qhHCS > button"
       const ButtonStart = $(ButtonStartGameSelector)
       const ButtonSecondStartSelector = "#root > div.Root--nY2ot > div.Root__Wrapper--IoJfb > div > div > form > button"
       const ButtonSecondStart = $(ButtonSecondStartSelector)
       
       
       
        await browser.get("https://app.metafora.game/#/")
        await browser.wait(EC.visibilityOf(ButtonStart), 7000, "Sorry no button no memes")
        await browser.wait(EC.visibilityOf(ButtonSecondStart), 7000, "Sorry no button no names")
       
       
        await ButtonStart.click()
      
        await ButtonSecondStart.click()
        await browser.sleep (10050)
    })
})