const username = 'shub'
let userage = 30;
var a = 50;

// function add() {
//     const username = 'shiv'
//     let x = 8;
//     const y = 5
//     console.log(x + y);
//     console.log(username);

// }
function substract() {
    debugger
    const x = 15;
    const y = 10;
    const z = 22; // undefined
    console.log(x - y);
    console.log(username);

    function child() {
        const childName = 'Golu';
        console.log(childName)
        console.log(z);  //clouser(substract) inner function ke andar jab ham outerfunction ke variable ka use karte hai to clouser kahlata hai.
    }
    child()
}
// add();
substract();
console.log('Program Ended');


//// Block scope
// agar ham {} curly bracket laga kar kuchh bhi code likhate hai to use block scope kahate hai.let aur const keyword ka use karke block scope ke andar variable defined karte hai.

if(true){
    const proUser = 'Raj'
    let proAge = 33;
}
console.log(proUser); //RE: prouser is not defined.
console.log(proAge); //RE: proage is not defined.



/////
