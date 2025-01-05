const fruitsCollection = ['Apple' , 'Banana' , 'Grapes' , {name: 'shubham ' , gender: 'male'} ]

fruitsCollection.push('papaya')// add last
fruitsCollection.push('sitafal')
fruitsCollection.pop('sitafal') // delete last 


22///////////

const evenNumber = [0, 2, 4, 6, 8]
 
evenNumber.shift() // remove element starting 
evenNumber.unshift(8) // add element starting

const animal = ['Dog', 'Cat', 'Rat' , 'Fox', 'Goat', 'Cow']

const result = evenNumber.concat(animal)
console.log(result)

const resl = evenNumber.indexOf(6)  //30
animal.indexOf('cat') //1
console.log(resl);   


const elementIndex = animal.includes('dog')
console.log(elementIndex) // includes find the elelment which is present in the arry or not.

animal.push('lion')
const reverseAnimal = animal.reverse()
console.log(reverseAnimal)


const shortAnimal = animal.sort
console.log(shortAnimal)

const sliceAnimla = animal.slice(3, 7)
console.log(sliceAnimla) //it's iinclude start index value but end index value is not included.

console.log('splice method')

const spliceAnimal = animal.splice(2, 3, 'jay', 'veeru', 9988)
console.log(spliceAnimal)
console.log(animal)


23//////////////////////////////////////////


const colors = ["red", "yellow", "blue" , "white", "Black"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']


//delelt multiple item from the end of the array use splice method.

const start = -3
const removeItem = colors.splice(start)
console.log(colors);
console.log(removeItem);


///////multidimensional array; 
// M D array  also called as array inside array.


const nameAndNumberList = [
    ['Adarsh', 75],
     ['Ankur', 90], 
     ['Shub', 80],
    ]
console.log(nameAndNumberList)

const tictakTo = [
    ['X' , null, null],
    [null, null, 'O'],
    ['O', null, 'X'],

]
console.log(tictakTo)
t