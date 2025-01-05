 const fruits = [ 'Mango', 'Apple', 'Orange']

 const myFruits = fruits

 myFruits.push('Dates')
 myFruits.push('Grapes')

 const user1 = {
    firsName : 'Shubham',
    lastName : 'Pandey'
 }
 console.log(fruits)

 const user2 = { ...user1}  // create duplicate array with the help of spread operator. shallow copy
  777