//In ES6, we can make class. 
//But that not makes javascript became class-based-language.
class Car {
    constructor(brand, color, maxspeed, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxspeed = maxspeed;
        this.chassisNumber = chassisNumber;
    }

    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }
 
    turn() {
        console.log(`${this.brand} ${this.color} is turning`);
    }
}

const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.turn();
car2.turn();
car3.turn();

