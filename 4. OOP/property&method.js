class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.color = color; //this call property
        this.maxSpeed = maxSpeed;
        //in javascript we can set value, so it can't change by user
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
}

class Mail {
    constructor(sender, receiver, subject, body) {
        this.sender = sender;
        this.receiver = receiver; 
        this.subject = subject;
        this.body = body;
    }
}

const mail = new Mail("gie", "mauludin", "Belajar Javascript", "Belajar javascript secara otodidak");
console.log(mail);

const car = new Car("Suzuki", "White", 220);
console.log(car);