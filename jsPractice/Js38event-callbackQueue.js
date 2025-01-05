console.log('Hiii-1')

function hello() {
    console.log('Hello world');
}

for(let i = 0; i <= 4; i++) {
    console.log(i)
}

hello();

// debugger
setTimeout(hello, 1000);  // setTimeout is asynchronous function.

setTimeout( function() {
    console.log('Hii-3')
}, 3000);

console.log('Hii-2')