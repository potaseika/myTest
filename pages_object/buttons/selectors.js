const { ButtonSelector } = require('./buttons.js')

const button1 = new ButtonSelector("#gameCreateButton");
const button2 = new ButtonSelector("#playerFormSubmitButton");
const button3 = new ButtonSelector("#gameSettingsSubmitButton");
const button4 = new ButtonSelector("#menuButton");
const button5 = new ButtonSelector("#exitGameButton");
const button6 = new ButtonSelector("#acceptExitGameButton");
const button7 = new ButtonSelector("#rulesButton")
const button8 = new ButtonSelector('#backButtonRules')
const button9 = new ButtonSelector('#artMenuButton')
const button10 = new ButtonSelector('#joinButton')

module.exports =  {
    button1, 
    button2, 
    button3, 
    button4, 
    button5, 
    button6, 
    button7, 
    button8, 
    button9, 
    button10
}