function procoder() {
    var a = 5; // local scope, can't access properties to outside of the scope.
}
// console.log(a); ////can't access local scope to global scope.
procoder();


///

// debugger

if(true) {
    var a = 5; //var is global scope
    // console.log(a)
    let b = 9; // let is block scope.
}
// console.log(a);
// console.log(b); ////b is not defined.

////////////


var x = 23;
console.log(x)
let y = 33;  // variable declared with let and const are block scope but since 'y' and 'z' are declared in the global scope, they are accessible everywhere in the script as well.
const z = 44;
 if( true) {
    console.log(x)
    console.log(y);
    console.log(z)
 }
 console.log(y)
 console.log(z)


 /////

 var m = 10;
 console.log(m)
 let n = 12;
 const o = 34;
 if( true) {
    console.log(m);
    console.log(n);
    console.log(o)
    const p = 36;
    let q = 77;
    var r = 87;
    console.log(p);
    console.log(q);
    console.log(r)
 }
 console.log(n);
 console.log(o);
//  console.log(p);
//  console.log(q);
 console.log(r);


 /////


 console.log(x === undefined); // true
 var x = 3;


 ///// 34,,vedio class
debugger
 
 var a = 50
 const username1 = 'shub'
 let userage1 = 'pand'

 function add() { 
    const xx = 5;
    const yy = 7;
    console.log(xx + yy)
    console.log(userage1)
    // function ki body ko local scope kahte hai.
 }
 console.log('Proram Ended')
 console.log(xx)
 console.log(yy) // yy is not defined
 add();