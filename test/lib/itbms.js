'use strict';
require('../helpers');
const lab = exports.lab = Lab.script();
const itbms = require('../../lib/itbms').itbms;

describe('itbms', () => {
  it('should return itbms tax', () => {
    const total = itbms(1);
    expect(total).to.equal(0.07);
  });
});