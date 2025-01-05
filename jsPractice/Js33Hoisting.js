var username = 'shub'
console.log(username) // shub

console.log(user1);  /// var keyword ke cse me jab variable ko pahle access karte hai to udefined aayega.
var user1 ='pand' // undefined, 

////

// console.log(user2)     // const and let ke case me: cannot access user2 before initialization.
const user2 = ' Hello const Bhau'
console.log(user2)

////

Hi();
function Hi() {
    console.log('Hello')
}  // jab ham function keyword ka use karke es tarah se declare karte hai to vo Hoist ho jata hai.

///////////

//(let and const) agar 'sayHi' ko yaha call karte hai to: ReferenceError:
 
// sayHi()   //// connot access 'sayHi' before initialization.
const  sayHi = function (){
    console.log('welcome Js')
}
sayHi() // welcome Js


// agar same code var keyword ke shath declare karte hai to: TypeError:

// sayHello() 
 //// sayHello is not a function.
var sayHello = function () {
    console.log("Welcome Js - sayHello")
}

// sayHello()  // welocme sayHello

////
// debugger;
hoistedFunction();
console.log(a);

function hoistedFunction() {
    console.log('It works');
}
var a = 10;


////

// debugger
function hiGreet() {
    message = "hello";
    //use the variable message before declaration
    console.log(message);
    var message
}

hiGreet();

// attempt to access message outside the function

// console.log(message); ////Reference error: message is not defined. / because message is not defined global scope.


/////
var number = 22;
HiSystem();

function HiSystem() {
    
    const thisMessage = 'hello Malik'
    console.log(number);
}

console.log(thisMessage);  // thismesseage is not defined.

////

// const => if you are sure that the value of a variable won't change throughout the program, we recommend you use 'const'.

