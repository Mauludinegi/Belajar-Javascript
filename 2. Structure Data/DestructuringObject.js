//destructuring object
const user = {
    firstName: "Egi",
    lastName: "Mauludin",
    age: 19
}
//name of variable must be equal with key in object
const {firstName, lastName, age} = user;
console.log(firstName, lastName, age + "\n");

// destructuring Assignment
const profile = {
    namePeople: "Mauludin",
    statusPeople: "Student",
}
let name = "Muhammad";
({
    namePeople,
    statusPeople,
    isMale = true //default value destructing
} = profile);

console.log(namePeople);
console.log(age);
console.log(isMale + "\n");

const customer = {
    id: 1,
    name: "Mauludinegi",
    address: "Sumedang"
}

const {id: localId, name: localName, address: localAddress} = customer;
console.log(localId);
console.log(localName);
console.log(localAddress);