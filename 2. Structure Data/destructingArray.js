const favorites = ['Chicken', 'Lasagna', "Meal", "Milk"];
const [firstFood, secondFood, ThirdFood, FourthFood] = favorites;
console.log(firstFood);
console.log(secondFood);
console.log(ThirdFood);
console.log(FourthFood);
console.log();

//for destructuring array if we want took value 3 from array, we can leave it nothing without write local variabel
const animal = ['Crocodile', 'Lion', 'Tiger'];
const [, , thirdAnimal] = animal;
console.log(thirdAnimal);
console.log();

//destructuring Assignment. In this Destructuring, is different from destructuring object. We don't use parenthesis.
const people = ["Gie", "PUrnama", "Mauludin"];
let secondPeople = "Purnama";
let thirdPeople = "Mitoma";

[secondPeople, thirdPeople] = people;
console.log(secondPeople);
console.log(thirdPeople);

//with destructing we can switch value from variable easily
let a = 10;
let b = 5;

[a, b] = [b, a];

console.log(a, b);

//default values
const value = ['A'];
const [myValue, herValue = 'B'] = value;
console.log(myValue, herValue);