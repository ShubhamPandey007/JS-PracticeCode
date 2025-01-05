// 0 , -0, NaN, ''empty String, undefined, null, (These are falsey value)

// &&(And) =>  both condition must have true.

const  userAge = 25;
(userAge >= 18) && (userAge <= 54) // true

(userAge >= 18) && (userAge <= 24) // true

// || (OR) => esme agar ek bhi condition true hota hai to code overall condition true hota hai.

Boolean(0 || 2) // true (2)
//use Boolean in console they will show the condition true/ false.

0 && 2 // 0 falsy value hai
0 || 2 // 2 OR me dono condition check chakta hai

Boolean (" " && 2) // true 

// && operator me agar first condition false hai to vo dusari condition ko check bhi nahi karega.
false && true // false

const andResult = '' && 'Hello' // '' empty string (falsy value hota hai)
const ORResult = '' || 'Hello' // 'Hello'

Boolean (0 && 2) // false
Boolean (0 || 2) // true

true || false // true
true && false // false (&& and operator me jab tak dono true nahi hoga vo true nahi dikhayega)
