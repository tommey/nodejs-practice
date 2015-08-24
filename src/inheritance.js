var util = require('util');

function Car(name) {
    this.name = name;
}

Car.prototype.drive = function () {
    console.log('I drive my ' + this.name);
};

function SportCar(name, engine) {
    Car.call(this, name);
    this.engine = engine;
}

util.inherits(SportCar, Car);

var car1 = new Car('ferrari');
var car2 = new Car('volvo');

var sportcar = new SportCar('porsche', 'v12');

car1.drive();
car2.drive();
sportcar.drive();
