
// function parent() {
//     const a = 4
//     const b = 5
//     function add() {
//         console.log(a + b)
//     }
//     return add
// }

// const add1 = parent()

// console.dir(add1)


// debugger
function parent() {
    const a = 10;
    console.log(a);

    function child() {
        console.log(a)
    }

    child();
}
parent()

//////////////////

function x() {
    const a = 10;
    function childY() {
        console.log(a);
    }

    return childY
}
const z = x();
console.log(z)


//////////


