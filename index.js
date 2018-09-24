'use strict';
const color = require('./lib/color');
const names = require('./config/personas');
const juice = color(names[0], 'blue');
console.log(color(names[0],'blue'));
console.log(color(names[1],'green'));