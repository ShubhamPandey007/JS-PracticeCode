console.log('Program Started');

// debugger
// for ( let i = 0; i < 10; i++) {
//     console.log(i + 1);
// }
  
////
// let friends = ['Raj', 'Maj', 'Pass', 'Rajo', 'Nilu']

// for ( let i = 0; i < friends.length; i++) {
//     console.log(`${i + 1}, ${friends[i] + 'Shree'}`)
// }

////even number

let num = 50

for ( let i = 0; i < num; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}


////Nested for loop
// A for llo can also have another loop inside it. For each cycle of the outer loop, the inner loop completes its entire sequenc of iterations.

//outer loop
for(i = 0; i < 3; i++) {
    //Inner loop
    for ( j = 0; j < 2; j++){
        console.log(`i= ${i}, j= ${j}`)
    }
    }


    //////js break with Nested Loop

    // when break is used inside two nested loops it terminates the inner loop.
// outer Loop
    for( let i = 0; i <= 3; i++) {
        
        // Inner Loop
        for( let j = 0; j <= 3; j++) {
            if( i == 2) {
                break;
            }
            console.log(` i = ${i}, j = ${j}`)
        }
    }  



    //// continue statement
    
    // The continue statement skips the current interation of the loop and proceed to the next iteration.

    //Here's a brif example to demonstrate the continue statement. You can read the rest of the tutorial to learn more.

    for ( let i = 1; i < 5; i++) {
         
        // skip the iteration it i is even
        if ( i % 2 === 0) {
            continue;
        }
        console.log(i)
    }
    // 1 3 5 
     
    //Noet => The continue statement is usually used inside decision-making statemnt such as if/else.

    /////

    for (let n = 1; n <= 10; n++) {
       
        // skip iteration if value of n is between 4 and 9
        if(n > 4 && n < 9){
            continue;
        }
        console.log(n);
    }

    // output 1 2 3 4 9 10

    /////While loop continues -- we cnn also use the contine statement whit a while loop

    var num1 = 1;

    while ( num1 <= 10){

        // skip iteration if num is even
        if(num1 % 2 === 0) {
            ++num;
            continue
        }
        console.log(num1);
        ++num1;
    }

    //out 1 3 5 7 9


    //// contine with Nested Loop
    // when contine is used inside two nested loops, continue affects only the inner loop

    for ( i = 1; i <= 3; i++) {

        for ( j = 1; j <= 3; j++) {
            if ( j == 2) {
                continue;
            }
            console.log(` i = ${i}, j = ${j}`)
        }
    }

    // output i = 1, j = 1
    // i = 1, j= 3
    // i = 2, j= 1
    // i = 2, j= 3
    // i = 3, j=1
    // i = 3, j= 3 ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,