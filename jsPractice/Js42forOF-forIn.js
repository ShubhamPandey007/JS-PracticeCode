console.log('Shub')

const fruits = [ 'apple', 'orange', 'mango','banana']
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log('******************')


for ( var fruit of fruits) {
    console.log(fruit)
}


////////////
// for of use String

const user = 'shubham pandey'
for ( const letter of user) {
    console.log(letter)
}


///
const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 50,
    eyecolor: 'blue',
    city: ' Delhi'
}
// for (const letter1 of person ){
//     console.log(letter1)
// }      //typeError: person is not iterable

for ( const letter2 in person ) {
    console.log(letter2)
}