function a() {
    console.log('hello ji')
}
a()


// ////pass parameters and arguments

function aa(b) {
    console.log(b)
}
aa("shub")   // ham yaha jo argument pass karte hai vo funtion ke pairameter vale value me store hota phir ham usi ko conlsole karate hai.

// ////
// //height order function

function prouser(para1) {
    console.log(typeof para1)
    console.log(para1)
}

prouser('Hii Shubham')
prouser({username: 'Shubham', userage: 30}) //pass object as argument.
prouser([1, 3, 4, 5,]) // pass array as argument.

// /////

function proUser(user1) {
    console.log(user1);
    user1 ();
}
function userName() {
    console.log('Hello shubham');
}
proUser(userName);  // pass function as an argument

 

// /////

function parent(child1, child2) {
    console.log(child1);
    console.dir(child1);
    console.log(child2);
    console.dir(child2)
    child1()
    child2()
}
function abc() {
    console.log('Welcome to javascript');
}
function xyz() {
    console.log('My name is shubham');
}

parent(abc, xyz);


//Anonymous function

//Heigher order function
function Hero (pro) {
    console.log(pro);
    pro();
}
//callback function 
Hero(function () {
    console.log('I am anonymous function');
})


/////
 // ab player function ek heigher function ki tarah work karega, kyoki yaha ye ek function ko le raha hai
function player (crick) {
    console.log(crick)
    crick();
}
player(function () {
    console.log('I am anonymous player');
})   // yaha jo function pass kiye hai vo ek callback function hai, aur ye ek anonymous function hai.
