'use strict';
const chalk = require('chalk');
console.log(chalk.bgBlue.red.bold('Hello World!'));

let sport = 'Horseback riding';
switch(sport){
    case 'Taekwondo':
console.log(chalk.bgYellow.blue('This is a great martial art!'));
break;
case 'Soccer':
console.log(chalk.bgRed.yellow('This sport is great cardio!'));
break;
case 'Basketball':
console.log(chalk.bgYellow.red('Jump for those hoops!'));
break;
default:
console.log('Go play some sport!');
break;
}