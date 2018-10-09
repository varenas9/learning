'use strict';
require('../helpers');
const lab = exports.lab = Lab.script();
const cupsToMl = require('../../lib/cupsToMl').cupsToMl;
const mlToCups = require('../../lib/cupsToMl').mlToCups;

describe('cupsToMl', () =>  {
  it('should convert cups to Milliliters', () => {
    const ml = cupsToMl(1);
    expect(ml).to.equal(250);
  });
  it('should convert 3 cups to 750 milliliters', () => {
    const ml = cupsToMl(3);
    expect(ml).to.equal(750);
  });
});
describe('mlToCups', () => {
  it('should convert milliliters to cups', () => {
    const cups = mlToCups(500);
    expect(cups).to.equal(2);
  });
});