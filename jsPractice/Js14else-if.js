const userName = prompt("Please enter your Name:") || 'Shubham'; // if should not give value then or operator take value;
const userAge = prompt("Please enter your Age:") ||24;

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);
debugger
if(userAge >= 0 && userAge <= 4){
    console.log(`${userName} is kid`);
    console.log('And he is playing');

}else if (userAge >= 5 && userAge <= 17) {
    console.log(`${userName} is school student`);
    console.log('And his is learning science');
}else if (userAge >= 18 && userAge <= 24) {
    console.log(`${userName} is college student`);
    console.log('And he is learning computer science')
}else if (userAge > 45 && userAge < 121) {
    console.log(`${username} is immortal`);
    console.log('And he reads newspaper')
}else   {
    console.log('Pleasse enter valid age')
}
console.log('Program Ended!')