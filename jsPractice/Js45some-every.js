const evenNumber = [0, 2, 4, 6, 8, 10]

// console.log(evenNumber.some((num) => {
//     console.log(num)
// } ));


const result = evenNumber.some((num) => {
    return num > 4
}) 


///////////////Every

const ProResult = evenNumber.every((num) => {
    return num % 2 === 1
})

///////////


const ageArray = [34, 23, 30, 2, 26, 12]

function checkMinor( age) {
    // debugger
    return age < 18;
}
const check = ageArray.some(checkMinor);
console.log(check)

//////////

