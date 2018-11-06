'use strict';
// const color = require('./lib/color');
// const names = require('./config/personas');
// const convert = require('./lib/convert');
// //const juice = color(names[0], 'blue');
// console.log(color(names[0], 'blue'));
// console.log(color(names[1], 'green'));
// console.log(color(convert(7, 'teaspoons', 'Ounces'), 'red'));
const Car = require('./lib/car');
const Human = require('./lib/human');
const Dog = require('./lib/dog');
const blueCar = new Car('blue');
const Fercho = new Human('Fercho');
const Mariana = new Human('Mariana');
const Alfred = new Dog('Alfred');
const Waffles = new Dog('Waffles');

blueCar.boardCar(Fercho);
blueCar.boardCar(Alfred);

console.log(blueCar);

console.log(new Car('yellow'));
console.log(new Car('green'));
console.log(new Car('Red and White'));

// console.log(blueCar);
// blueCar.startCar();
// console.log(blueCar);
// blueCar.turnOffCar();
// console.log(blueCar);