const months = ['january', 'february', 'march', 'april', 'may', 'june', 'December']

// normal function 
months.forEach(function (month){
    console.log(month);
})
// arroww function 
months.forEach
( (month) => {
    console.log(month);
   return month.toUpperCase()
})


//// map

months.map((month ,index) => {
    console.log(index, month);
})  // undefined return karega

////
months.map( (month, index) => {
    console.log(index, month)
    return month.toUpperCase()
})  // ek naya array return karega, yaha return kar rahe hai, but console me nahi dikhega

///////////////

console.log(
    months.map( (month, index) => {
        console.log(month, index)
        return month.toUpperCase()
    })
)   // pure code ko console.log karvalenge to console me hi return value dikhega

////////
const monthcaptial = months.forEach((month, index) => {
    console.log(index + 1, month)
    return month.toUpperCase()
}) //(forEach ke condition me undefined return karega)

////////////

const monthcaptial1 = months.map((month, index) => {
    console.log(index + 1, month)
    return month.toUpperCase()
})
// console me monthcaptial variable ko check karenge to ek naya array return karega, 
 
/////////Filter Methods


const filteredMonths = months.filter((month, index, array) => {
    // console.log(month)
    // console.log(month.length)
    // console.log(month.length <= 5)
    // return month.length <= 5
    // return month.length >= 5
    // return month.includes('m')
    // return month.toLocaleLowerCase().includes('e')
    

})

//////////////
console.log('find students details')

const students = [
    {
        name: 'Ansh',
        
        age: 21
    },
    {
        name: 'Pooja',
        age: 17
    },
    { 
        name: 'Ankit',
        age: 18
    },
    {
        name: 'Nidhi',
        age: 16
    }
]
const adultstudent = students.filter((student) => {
    // console.log(student.age >= 18);
    // return true;
    return student.age >= 16
}).map((student) => {
    return student.name;
}).filter((student) =>{
    return student.includes('A')
})
// const adultstudentName = adultstudent.map((student) => {
//     return student.name;
// })


//////////arry.filter()

const words = ['spray', 'elite', 'exuberant', 'presetn', 'rohan', 'pooja', 'rekha']
const result = words.filter((word) => {
    return word.length > 6
})
console.log(result)

////////////

const filtered = [12, 5, 130, 44, 33]
const Noresult = filtered.filter((number) =>{
    return number <= 10
})
console.log(Noresult)

//////////////////searching in array

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

const fruitSearch = fruits.filter((fruit) => {
    return fruit.toLocaleLowerCase().includes('ap')
})
console.log(fruitSearch)
////Summary:
// The first snippet is simple and straightforward but limited to one specific use case.
// The second snippet is more flexible and reusable, allowing for different arrays and search queries to be used.

function filterItems (arr, query) {
    return arr.filter((item) =>
    item.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}
console.log(filterItems(fruits, 'ap'))