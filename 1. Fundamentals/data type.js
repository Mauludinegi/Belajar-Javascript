//Undefined
let x;
console.log(typeof(x));

//Number
x = 10;
console.log(typeof(x));

x = 10.5;
console.log(typeof(x));

//BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

//Strings
let greet = "Hello";
console.log(typeof(greet));

//Boolean
x = true;
let y = false;
console.log(typeof(x));
console.log(typeof(y));

//Null
let someLaterData = null;
console.log(someLaterData);

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);