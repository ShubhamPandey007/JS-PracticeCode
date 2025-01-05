console.log('shubham');
 
// forEach() method always return undefiend, and perform an operation on each element of the array. it takes a callback function as an argument and applies it to each element of the array.

const fruits = ['apple', 'banana', 'orange', 'guava']

for (const fruit of fruits) {
    console.log(fruit)
}

///////
fruits.forEach(function (fruit){
    console.log(fruit)
})

////

fruits.forEach((fruit , index) => {
    console.log(index , fruit.toUpperCase())
})

////
fruits.forEach( (fruit) => {
    console.log(fruit.toUpperCase())
    return fruit.toUpperCase();
})

////

let students = ['john', 'sara', 'jack']

students.forEach(myFunction)
function myFunction(item) {
    console.log(item)
}

///


let prostudents = ['ram', 'shya', 'kaya', 'raba']

prostudents.forEach(myFunction1);
function myFunction1(item, index, arr){
    arr[index] = 'Hello ' + item;
}
console.log(prostudents)