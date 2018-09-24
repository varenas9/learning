'use strict';
const chalk = require('chalk');
function log(text, color){
  if (color === 'red'){
    return chalk.red(text);
  }
  if (color === 'blue') {
    return chalk.blue(text);
  }
  if (color === 'green'){
    return chalk.green(text);
  }
  return chalk.black(text);
}

module.exports = log;