'use strict';
require('../helpers');
const lab = exports.lab = Lab.script();
const convert = require('../../lib/convert');


describe('convert', () => {
  describe('ounces and teaspoons', () => {
    it('should convert ounces to teaspoons', () => {
      const results = convert(4, 'ounces', 'teaspoons');
      expect(results).to.equal(24);
    });
    it('should convert teaspoons to ounces', () => {
      const results = convert(24, 'teaspoons', 'ounces');
      expect(results).to.equal('4.00');
    });
    it('should convert regardless of mix casing', () => {
      const results = convert(4, 'Ounces', 'TeaspoonS');
      expect(results).to.equal(24);
    });
  });
  describe('cups and ml', () => {
    it('should convert cups to ml', () => {
      const results = convert(3, 'cups', 'ml');
      expect(results).to.equal(750);
    });
    it('should convert cups to ml', () => {
      const results = convert(750, 'ml', 'cups');
      expect(results).to.equal(3);
    });
    it('should convert regardless of mix casing', () => {
      const results = convert(750, 'mL', 'cuPs');
      expect(results).to.equal(3);
    });
  });
  describe('farenheit and celsius', ()  => {
    it('should convert farenheit to celsius', () => {
      const results = convert(375, 'farenheit', 'celsius');
      expect(results).to.equal(191);
    });
    it('should convert celsius to farenheit', () => {
      const results = convert(20, 'celsius', 'farenheit');
      expect(results).to.equal(68);
    });
    it('should convert regardless of mix casing', () => {
      const results = convert(20, 'Celsius', 'Farenheit');
      expect(results).to.equal(68);
    });
  });
  describe('when there is no conversion available for the given input', () => {
    it('should return null', () => {
      const results = convert(5, 'x', 'x');
      expect(results).to.equal(null);
    });
  });
});