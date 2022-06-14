// const EventEmitter = require("events");
import EventEmitter from "events";

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired'));

// Init event
myEmitter.emit('event');