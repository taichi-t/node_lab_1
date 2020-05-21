const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

//event listener
myEmitter.on('eventName', () => console.log('Event fired!') );

myEmitter.emit('eventName');