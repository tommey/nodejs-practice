var http = require('http');
var async = require('async');
var meta = require('./package');
var add = require('./src/add');
var greet = require('./src/greet');

console.log(add.add(2, 3));
greet.sayHello('my unique name');