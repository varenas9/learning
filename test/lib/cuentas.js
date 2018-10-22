'use strict';
require('../helpers');
const lab = exports.lab = Lab.script();
const cuentas = require('../../lib/cuentas');


describe('cuentas', () => {
  describe('caulcular total', () => {
    it('should calculate total when there is no tip on itbms', () => {
      const results = cuentas(5, .10, 0);
      expect(results).to.equal(5.85);
    });
    it('should calculate the total when tip is on itbms', () => {
      const results = cuentas(5, 0.10, true);
      expect(results).to.equal(5.89);
    });
  });
});