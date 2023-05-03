//instanceof use for check object who want in test prototype

class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

class whatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver)
        }, delay);
    }
}

const whatsapp = new whatsAppService('+6281234567890');
whatsapp.sendMessage("Hallo semuanya", "+6280987654321");
console.log(whatsapp instanceof EmailService);

const email = new EmailService('gie@gie.com');
email.sendDelayedMessage('Hi, everyone', 'mauludin@gie.com', 3000);
console.log(email instanceof whatsAppService);