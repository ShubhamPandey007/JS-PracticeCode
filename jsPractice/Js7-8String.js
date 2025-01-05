// alert("Hi how are you")

// const isconfirm = confirm("Are you sure you want to continue?")

// const isPrompt= prompt ("Please enter your name.")

const message = 'Hello world'
const fakeMessage = '   Hi,  I am Shubham  .   '
const includeMessage = fakeMessage.includes('I am')
console.log(includeMessage) // if character is exist in string then include resturn true,


const capitalMessage = message.toUpperCase()
console.log(capitalMessage) 

const finalMessage = fakeMessage.trim()
console.log(finalMessage) // remove the whitespace in the character string.

const IndexMessage = fakeMessage.indexOf('I am')
console.log(IndexMessage) // indexOf returns the character index number.

const replaceMessage = fakeMessage.replace('I', "Hello, Dear")
console.log(replaceMessage) // replace the original message wiht the new message to use replace().

const replaceAllMessage = fakeMessage.replaceAll('a', 'A')
console.log(replaceAllMessage) // when we want to replace more than one character, then we use replaceAll().

const concatMessage = message.concat(' ' ,fakeMessage)
console.log(concatMessage) // when we want to concat more than one character, then we use concat().

const lastFourDigits = '8789'
const padStartMessage = lastFourDigits.padStart(16, '*')
console.log(padStartMessage) // when we want to show the disits message with the * and number.


const yourMessage = 'My name is Shubham'
const splitMessage = yourMessage.split(' ')
console.log(splitMessage)  // split method is use to change string to array.
///////////////////////////


// const templateString = `last four digit of my accoutn is ` .concat('',lastFourDigits) //concat

const templateString = `last four digit of my accout is ${lastFourDigits.padStart(16, '*')}`

// const templateString = `last four digit of my accout is ` + lastFourDigits

console.log(templateString)