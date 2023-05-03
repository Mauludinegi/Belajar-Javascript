//JavaScript version ES2022 release access right private for property and method objek
//example
class Car {
    #chassisNumber = null;
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.#chassisNumber = this.#generateChassisNumber;
    }

    get chassisNumber() {
        return this.#chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log(`you are not allowed to change the chassis number`);
    }

    //methods
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    turn(direction) {
        console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }

    #generateChassisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}

const car = new Car("Suzuki", "Black", 220);
console.log(car.chassisNumber());