'use strict';
require('../helpers');
const lab = exports.lab = Lab.script();
const propina = require('../../lib/propina');

describe('propina', () => {
  it('should return total multiplied by tip percentage', () => {
    const total = propina(1, 0.05);
    expect(total).to.equal(0.05);
  });
});