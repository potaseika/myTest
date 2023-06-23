
const expect = require ("chai").expect
const EC = protractor.ExpectedConditions

describe ("First suit", function (){
 it ("first test", async function(){
   const SearchValue = "телефон samsung"

   const SearchInputSelector = "body > app-root > div > div > rz-header > rz-main-header > header > div > div > div > form > div > div.search-form__input-wrapper > input" 
   const SearchInput = $(SearchInputSelector)
   const SearchButtonSelector = "body > app-root > div > div > rz-header > rz-main-header > header > div > div > div > form > button"
   const SearchButton = $(SearchButtonSelector)
   
   const CatalogPhoneSelector = "body > app-root > div > div > rz-category > div > main > div:nth-child(1) > div > h1"
   const CatalogPhone = $(CatalogPhoneSelector)



   await browser.get("https://rozetka.com.ua") 
   await browser.wait(EC.visibilityOf(SearchInput), 6000, "Sorry, but no search field here")
   await browser.wait(EC.visibilityOf(SearchButton), 6000, "Sorry, but no button here")
   
   await SearchInput.sendKeys(SearchValue)
   await SearchButton.click()

   await browser.wait(EC.visibilityOf(CatalogPhone), 4000, "You are here my boy")
   const CatalogPhoneValue = await CatalogPhone.getText()

   expect(CatalogPhoneValue.toLowerCase()).to.include("samsung")

  await browser.sleep(5500)

})    
})