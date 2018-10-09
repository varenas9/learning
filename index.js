'use strict';
const color = require('./lib/color');
const names = require('./config/personas');
const convert = require('./lib/convert');
//const juice = color(names[0], 'blue');
console.log(color(names[0], 'blue'));
console.log(color(names[1], 'green'));
console.log(color(convert(7, 'teaspoons', 'Ounces'), 'red'));