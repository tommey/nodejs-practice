var EventEmitter = require('events').EventEmitter;
var eventEmitter = new EventEmitter();

eventEmitter.on('visitor', function(data) {
    console.log(data);
});

eventEmitter.emit('visitor', 'stuff');
