'use strict';
const Human = require('./human');
function Car(color) {
  this.windows = 5;
  this.wheels = (color === 'Red and White') ? 3 : 4;
  this.seats = 2;
  this.shift = 'stick';
  this.color = color;
  this.started = false;
  this.spots = [];
};

Car.prototype.startCar = function(){
  this.started = true;
};
Car.prototype.turnOffCar = function(){
  this.started = false;
};

Car.prototype.boardCar = function(being){
  if (being instanceof Human && this.seats > this.spots.length) {
    this.spots.push(being);
  }
};

Car.buildBlue = function(){
  return new Car('blue');
};
Car.buildRedandWhite = function(){
  return new Car('Red and White');
};
module.exports = Car;