'use strict';
require('../helpers');
const lab = exports.lab = Lab.script();
const cuentas = require('../../lib/cuentas');


describe('cuentas', () => {
  describe('caulcular total', () => {
    it('should calculate total when there is no tip on itbms', () => {
      cuentas(5, .10, false, (results) => {
        expect(results).to.equal(5.85);
      });
    });
    it('should calculate the total when tip is on itbms', (done) => {
      cuentas(5, 0.10, true, (results) => {
        expect(results).to.equal(5.89);
      });
    });
  });
});