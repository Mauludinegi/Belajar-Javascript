class WhatsAppService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }

    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}


class EmailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} semt ${message} to ${receiver}`);
    }

    sendDelayMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver)
        }, delay);
    }
}


//from code above, actually we can make one class, its parent class
//example
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }

    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }

    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

const whatsapp = new MailService('+6283452123');
const email = new MailService('gie@gmail.com');
whatsapp.sendDelayedMessage();
email.sendBroadcastMessage();