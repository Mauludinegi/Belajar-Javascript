class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('gie', "mauludin");
console.log(user);
console.log(user.fullName);

user.fullName = "gie mauludin";
console.log(user);
console.log(user.fullName);

class Car{
    constructor(brand, color, maxSpeed){
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }

    get chassisNumber() {
        return this._chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number');
    }
}

const car = new Car('Suzuki', "white", 220);
console.log(car);
car.chassisNumber = "BMW-1";
console.log(car.chassisNumber);