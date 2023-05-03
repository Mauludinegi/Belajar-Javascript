class Car {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this._chassisNumber = this._generateChassisNumber;
    }

    get chassisNumber() {
        return this._chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log(`you are not allowed to change the chassis number`);
    }

    //methods
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn(direction) {
        console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }

    _generateChassisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}

class Mail {
    constructor(sender, receiver, subject, body) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }

    //methods
    send() {
        console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
    }

    sendLaterDelay(delay) {
        console.log(`Sending after ${delay} ms`);
        setTimeout(() => {
            this.send();
        }, delay);
    }

    saveAsDraft() {
        console.log(`Saving mail as draft`);
    }

}

const car = new Car('Suzuki', 'White', 220);
console.log(car.chassisNumber());
car.drive();
car.turn('left');
car.reverse();