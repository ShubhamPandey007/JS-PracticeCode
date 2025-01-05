console.log('Hello')

const user = {
    firstName : 'Shubham',
    lastName : 'Pandey',
    address : {
        city : 'Banglore',
        pinCode : 84585,
        state : 'Karnatak',
        moredatils : {
            population : 75455524,
            area : '45554 sq km'
        },
    },
    age: 15,
    isGraduate : false,
}


/////////////////////////////////////////////

Object.seal(user)  // (static method seals an object.A sealed object has a fixed set of property)object.seal karne ke bad na to koe new properti add hogi aur na hi delete hogi.but jo property hai usme change  kar sakte hai
//  delete user.address => to false aayega

const object1 = {
    property1: 42,
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
  // Expected output: 33
  
  delete object1.property1; // Cannot delete when sealed
  console.log(object1.property1);
  // Expected output: 33
  


////////////////////
Object.freeze(user)  // ye jayads stricket hai esme na to add kar sakte hai aur na hi delete kar sakte hai, aur na change kar sakte hai. freeze() returns the same object that was passed in.

const obj = {
    prop: 42,
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // Expected output: 42
  


