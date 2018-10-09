'use strict';
require('../helpers');
const lab = exports.lab = Lab.script();
const farenheitToCelsius = require('../../lib/farenheitToCelsius').farenheitToCelsius;
const celsiusToFarenheit = require('../../lib/farenheitToCelsius').celsiusToFarenheit;

describe('farenheitToCelsius', () =>  {
  it('should convert degrees farenheit to degrees celsius', () => {
    const celsius = farenheitToCelsius(30);
    expect(celsius).to.equal(-1);
  });
  it('should convert 375 degrees farenheit to 190.556 degrees Celsius', () => {
    const celsius = farenheitToCelsius(375);
    expect(celsius).to.equal(191);
  });
});

describe('celsiusToFarenheit', () => {
  it('should convert degrees celsius to degrees farenheit', () => {
    const farenheit = celsiusToFarenheit(20);
    expect(farenheit).to.equal(68);
  });
});