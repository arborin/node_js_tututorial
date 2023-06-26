const EventEmitter = require('events');


class MyEmitter extends EventEmitter {

}


// obj
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('event fired!');
})

myEmitter.emit('event');