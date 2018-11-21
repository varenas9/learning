'use strict';
require('../helpers');
const lab = exports.lab = Lab.script();
const Car = require('../../lib/car');
const Human = require('../../lib/human');
const Dog = require('../../lib/dog');

describe('Car', () => {
  let car;
  let being;

  beforeEach(() => {
    car = new Car('red');
    being = new Human('Fercho');
  });
  describe('startCar', () => {
    it('should turn car to started', () => {
      car.startCar();
      expect(car.started).to.equal(true);
    });
  });
  describe('turnOffCar', () => {
    it('should turn car from started to off', () => {
      car.startCar();
      car.turnOffCar();
      expect(car.started).to.equal(false);
    });
  });
  describe('boardCar', () => {
    it('should board instance of Human to number of seats', () => {
      car.boardCar(being);
      expect(car.spots.length).to.equal(1);
    });
    it('should board Human only until 2 seats', () => {
      [new Human('Fercho'), new Human('Louis'), new Human('Mariana')].forEach((being) => {
        car.boardCar(being);
      });
      expect(car.spots.length).to.equal(2);
    });
    it('should not allow dog to board the car', () => {
      const dog = new Dog('Alfredi');
      car.boardCar(dog);
      expect(car.spots.length).to.equal(0);
    });
  });
  describe('car is Red and White', () => {
    it('should have only 3 wheels', () => {
      const car = new Car('Red and White');
      expect(car.wheels).to.equal(3);
    });
  });
  describe('car is blue', () => {
    it('should build a blue car', () => {
      const car = Car.buildBlue();
      expect(car.color).to.equal('blue');
    });
  });
  describe('car is Red and White', () => {
    it('should build a Red and White car with 3 wheels', () => {
      const car1 = Car.buildRedandWhite();
      expect(car1.color).to.equal('Red and White');
    });
  });
});