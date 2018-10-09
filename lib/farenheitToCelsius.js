'use strict';
function farenheitToCelsius(farenheit){
  return Math.round((farenheit - 32) * 5 / 9);
}

function celsiusToFarenheit(celsius){
  return Math.round((celsius * 9 / 5) + 32);
}

exports.farenheitToCelsius = farenheitToCelsius;
exports.celsiusToFarenheit = celsiusToFarenheit;