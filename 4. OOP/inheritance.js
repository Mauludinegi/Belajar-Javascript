//superclass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

//subclass 
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('gie@gmail.com');

whatsapp.sendMessage('hello', '+620987654321');
whatsapp.sendBroadcastMessage('Hello', ['+6281234567890', '+6280987654321']);
// whatsapp.sendDelayedMessage(); //error

email.sendMessage('Hello', 'gie@gie.com');
email.sendDelayedMessage('hello', 'mauludin@gie.com', 3000);
// email.sendBroadcastMessage(); //error
