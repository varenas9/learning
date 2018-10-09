'use strict';
const teaspoonToOunces = require('./teaspoontoounces').teaspoonToOunces;
const ouncesToTeaspoons = require('./teaspoontoounces').ouncesToTeaspoons;
const cupsToMl = require('./cupsToMl').cupsToMl;
const mlToCups = require('./cupsToMl').mlToCups;
const farenheitToCelsius = require('./farenheitToCelsius').farenheitToCelsius;
const celsiusToFarenheit = require('./farenheitToCelsius').celsiusToFarenheit;


function convert(value, fromUnit, toUnit){
  if (fromUnit.toLowerCase() === 'teaspoons' && toUnit.toLowerCase() === 'ounces'){
    return teaspoonToOunces(value);
  }
  if (fromUnit.toLowerCase() === 'ounces' && toUnit.toLowerCase() === 'teaspoons'){
    return ouncesToTeaspoons(value);
  }
  if (fromUnit.toLowerCase() === 'cups' && toUnit.toLowerCase() === 'ml'){
    return cupsToMl(value);
  }
  if (fromUnit.toLowerCase() === 'ml' && toUnit.toLowerCase() === 'cups'){
    return mlToCups(value);
  }
  if (fromUnit.toLowerCase() === 'farenheit' && toUnit.toLowerCase() === 'celsius'){
    return farenheitToCelsius(value);
  }
  if (fromUnit.toLowerCase() === 'celsius' && toUnit.toLowerCase() === 'farenheit'){
    return celsiusToFarenheit(value);
  }
  return null;
}
module.exports = convert;