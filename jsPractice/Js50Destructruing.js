// before ES6

const person = {
    name: 'shub',
    age: 30,
    gender: 'male',
    address: {
        city: 'Noida',
        state: 'Uttar Pradesh'
    }
}

let name1 = person.name;
let age1 = person.age;
let gender1 = person.gender;
let address1 = person.address.state;

console.log(name1);
console.log(age1)
console.log(gender1)
console.log(address1)

//From ES6  (Object Destructuring)

const user = {
    name2: 'shyam',
    age: 28,
    gender:'male',
    adderess: {
        city: 'Noida',
        state: 'Uttar Pradesh'
    }
}
//estructuring assignment
let {name2, age, gender, adderess:{city}} = user
console.log(name2);
console.log(age);
console.log(city)
// console.log(adderess) // referenceError: address is not defined

//////Inside function destructuring

function intro({age, name2}) {
    console.log(age, name2);
}
intro(user)


// Array Destructuring

const arrValue = ['one', 'two', 'three', 'four']

const [x, y, z ] = arrValue
console.log(x);
console.log(y);
console.log(z)

///////

const foo = ['one', 'two'];
const [red, yellow, green, blue] = foo;

console.log(red);
console.log(yellow);
console.log(green);
console.log(blue);