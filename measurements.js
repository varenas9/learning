'use strict';
const temperature = require('./lib/farenheitToCelsius');
const ounces = require('./lib/teaspoontoounces');
const cups = require('./lib/cupsToMl');
const color = require('./lib/color');



const milk = 2;
const vanilla = 1 / 2;
const oven = 375;

const milkInMl = cups(milk) * 2;
const vanillaInOunces = ounces(vanilla) / 0.5;
const tempInCelsius = temperature(oven);

console.log(color('Milk needed in MLs:' + milkInMl, 'yellow'));
console.log(color('Vanilla needed in ounces:' + vanillaInOunces, 'blue'));
console.log(color('Preheat your oven to celsius:' + tempInCelsius, 'red'));