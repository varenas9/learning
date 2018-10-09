'use strict';
const chalk = require('chalk');
function log(text, color){
  switch (color) {
    case 'red':
      return chalk.red(text);
    case 'blue':
      return chalk.blue(text);
    case 'green':
      return chalk.green(text);
    case 'yellow':
      return chalk.yellow(text);
    default:
      return chalk.black(text);
  }
}
module.exports = log;