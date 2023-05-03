class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

class WhatsAppService extends MailService {
    //overriding constructor
    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;
    }

    //overriding method
    // sendMessage(message, receiver) {
    //     console.log(`${this.sender} sent ${message} to ${receiver} via whatsapp`);
    // }

    // if we need it method from class parent, we can call it with super.sendMessage()
    
    sendMessage(message, receiver) {
        super.sendMessage(message, receiver);
        console.log('message sent via whatsapp');
    }
    
}

const whatsapp = new WhatsAppService('+6280987654321', true);
whatsapp.sendMessage("Hi everyone, how are you?", "+6281234567890");