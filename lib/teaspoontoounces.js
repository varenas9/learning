'use strict';
function teaspoonToOunces(teaspoon){
  return (teaspoon * (1 / 6)).toFixed(2);
}

function ouncesToTeaspoons(ounces){
  return ounces * 6;
}

exports.teaspoonToOunces = teaspoonToOunces;
exports.ouncesToTeaspoons = ouncesToTeaspoons;