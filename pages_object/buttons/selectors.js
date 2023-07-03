const { ButtonSelector } = require('./buttons.js')

const button1 = new ButtonSelector({
    selector: '#gameCreateButton'});
const button2 = new ButtonSelector({
    selector:'#playerFormSubmitButton'});
const button3 = new ButtonSelector({
    selector: '#gameSettingsSubmitButton'});
const button4 = new ButtonSelector({
    selector:'#menuButton'});
const button5 = new ButtonSelector({
    selector:'#exitGameButton'});
const button6 = new ButtonSelector({
    selector:'#acceptExitGameButton'});
const button7 = new ButtonSelector({
    selector:'#rulesButton'})
const button8 = new ButtonSelector({
    selector:'#backButtonRules'})
const button9 = new ButtonSelector({
    selector:'#artMenuButton'})
const button10 = new ButtonSelector({
    selector:'#joinButton'})

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