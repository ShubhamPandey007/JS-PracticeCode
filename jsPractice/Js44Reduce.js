const nums = [1, 1, 2, 1, 1, 1]

nums.reduce((accumulator, current, i , array) => {
    // console.log( i,accumulator)
    return 'shubham';

}, 121) 


const ProNum = [1, 2, 3, 4, 5]

const ProSum = ProNum.reduce((acc, curr, i) =>{
    // console.log(i, acc)
    // console.log(i, curr)
    return acc + curr

}, 10)
console.log(ProSum)
