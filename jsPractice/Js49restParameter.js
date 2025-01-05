// const nums1 = [1, 3, 4, 5, 66]

// function add() {
//     console.log(arguments)
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum = sum + arguments[i];
//     }
//     return sum;
// }


////////////////////////

// const nums2 = [1, 3, 4, 5, 6, 7]

// function add(a, b, c, ...nums) {
//     console.log(a, b, c);
//     console.log('nums:', nums);

// }
// const result = add(...nums2, 8, 9, 10)

/////// add array with help of reduce

const nums3 = [1, 2, 3, 4, 5, 5, 6, 7]

// function sum(...nums) {
//     return nums.reduce((acc, curr) => acc + curr)
// }
// // const result1 = sum(4, 4, 6, 7, 87,6)
// const result1 = sum(...nums3)
// console.log(result1)

//////

function add () {
    return [...arguments].reduce((acc, curr) => acc + curr)
}

///////////////////

function add() {
    return Array.from(arguments).reduce((acc, curr)=> acc + curr)
}

//////////////////

function add(...nums) {
    return nums.reduce((acc, curr) => acc + curr)
}
const result2 = add(...nums3) 

/////////practice

function sumNum(...theArgs) {
    let total = 0;
    for(const arg of theArgs) {
        total += arg;
    }
    return total;
}
console.log(sumNum(1,1,3,4,5,5,8))