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
console.log(`Status: ${user.isMarried}\n\n`);

const car = {
    brand: 'Honda',
    model: 'sport',
    color: 'white',
    start() {
        return 'mesin bagus'
    },
    drive() {
        return 'mampu menempuh jarak ribuan km'
    },
    break() {
        return 'rem bagus'
    }
}

console.log(car.drive());