console.log('hi')
console.log('my name is Shubham ');
console.log('I am web Developer');


//function body
function introduceMe () {
    console.log('hi')
console.log('my name is Shubham ');
console.log('I am web Developer');
  return "pandey" // ("jab tak ham yaha kuchh return nahi karte hai, to console me undefined show karta hai")
}
//  introduceMe(); // return value show nahi karta 
            // fun. Call intrpduceMe()
 const resultIntro = introduceMe();  // return value ko hamne ek variable me save karva liya.ab ham value ko console.log karenge to console me undefined value bhi return hoga.
 console.log(resultIntro)

  
///////////
//  debugger
 function userDetails(username) {
    console.log(username)

 }
 userDetails('shub')
 userDetails('Raj')

 ///// pass two parameters

 function proUser(userId, userWrk) {
    console.log(`My name is ${userId} and my work is ${userWrk}`)
 }

 proUser ('Shub', 'Web Developer')


 /////return  keywords in javascript
 
 function addTwoNumber() {
    // console.log(5 + 6);
    return 5 + 6;
 }
//  addTwoNumber();
 const result = addTwoNumber();
 console.log(result);

///////////

function sumTwoNumber(a, b){
    return a + b;
}
const sumResult = sumTwoNumber(4, 5)
console.log(sumResult);
 

/////

function procoder() {
   var a = 5;
}
console.log(a);
procoder();