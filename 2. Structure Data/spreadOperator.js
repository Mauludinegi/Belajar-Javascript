const favorites = ["Seafood", "Salad", "Nugget", "Chicken"];
console.log(...favorites);

const recently = ["Burger", "Salad", "Lasagna", "Pizza"];
//joined two array
const allFood = [...favorites, ...recently];
console.log(allFood.toString());

//joined two object
const person1 = {firstName: "Egi", age: 19};
const person2 = {lastName: "Mauludin", gender: "Male"};
const person = {...person1, ...person2};
console.log(person);