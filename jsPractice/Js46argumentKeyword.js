function add (a, b) {
    console.log(arguments);
    return a + b;
}

//////////////

function sum () {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
} 