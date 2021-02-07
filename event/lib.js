const EventEmitter = require('events').EventEmitter;

class Event extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('notice', { price: Math.random() * 100 })
        }, 3000)
    }
}

const event = new Event();

event.addListener('notice', (res) => {
    console.log(res);
});