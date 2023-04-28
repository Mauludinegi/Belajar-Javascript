const user = {
    name: 'Gie',
    age: 19,
    species: 'Human',
    "Hair Color": "Black",
    gender: "Male",
    isMarried: 'no'
};

user.status = "Student";
user['Hair Color'] = 'blonde';
delete user.isMarried;
console.log(`Nama: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`Gender: ${user.gender}`);
console.log(`Hair Color: ${user['Hair Color']}`);
console.log(`Status: ${user.status}`);
console.log(`Status: ${user.isMarried}`);