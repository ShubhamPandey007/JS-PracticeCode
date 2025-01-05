Boolean(1) // true
Boolean(' ') // true
Boolean('') // false
Boolean(0) // false
Boolean(NaN) // false
Boolean(-Infinity) // false
Boolean(undefined) // false
Boolean(-0) // false
Boolean(null)  // false
!0 // true
!!0 // false



//11 comparison operators

// == equal to (equality)
// === equal value and equal type (strict equality)[you have to do explixit (manual) conversion]
// != not equal
// !== not equal value and not equal type(strict)
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

userAge1 = 10
userAge2 = 20


// 12 Logical operators

//  && (and) operator => both conditions must have true.
//  || (or) operator  => if one condition is ture the condtion is ture.
//  !(Not) operator

const userAge = 18;
const iscollegeStudent = (userAge >= 18) &&(userAge <= 24);
const isSchoolStudent = (userAge >= 18) && (userAge <= 24);
const isStudent = isSchoolStudent || iscollegeStudent;

// true || false = ture 

console.log(iscollegeStudent);
console.log(isStudent) // true

// 0 && 2 = 0
// 0 || 2 = 2 
const andResult = '' && 'Hello' // '' empty string is falsely
const andResult2 = 'Hello' && 4+8
const andResult3 = 'Hello' || 4 + 8 