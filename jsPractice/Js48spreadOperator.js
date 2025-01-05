const num1 = [1, 3, 4, 5,]
const num2 = [3, 4, 5, 6, 7, 6]

const myName = 'shubham'
const joinarray = [...num1, ...num2, ...myName]

/////////spread object
const user = {
    name: 'shubham',
    age: 30,
}
const updateduser = {...user, city: 'Noida'}

//// arguments keywordsj

// function add() {
//     console.log(arguments);
// }

///////////

function add() {
    let sum = 0;
    for( let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}

//////////////

const number = [1, 2, 3, 4]

function sum(x, y, z) {
    return x + y + z;
}
console.log(sum(...number));
 