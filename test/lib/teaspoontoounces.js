'use strict';
require('../helpers');
const lab = exports.lab = Lab.script();
const teaspoonToOunces = require('../../lib/teaspoontoounces').teaspoonToOunces;
const ouncesToTeaspoons = require('../../lib/teaspoontoounces').ouncesToTeaspoons;

describe('teaspoonToOunces', () => {
  it('should convert teaspoons to ounces', () => {
    const ounces = teaspoonToOunces(1);
    expect(ounces).to.equal('0.17');
  });
  it('should convert .5 teaspoon to 0.08 ounces', () => {
    const ounces = teaspoonToOunces(.5);
    expect(ounces).to.equal('0.08');
  });
});

describe('ouncesToTeaspoons', () => {
  it('should convert ounces to teaspoons', () => {
    const teaspoons = ouncesToTeaspoons(1);
    expect(teaspoons).to.equal(6);
  });
});