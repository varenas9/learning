'use strict';
require('../helpers');
const lab = exports.lab = Lab.script();
const Human = require('../../lib/human');


describe('Human', () => {

  describe('create adult', () => {
    it('should create a new human that is an adult'), () => {
      const human = Human.createAdult();
      expect(human.type).to.equal('adult');
    };
  });
  describe('being baby', () => {
    it('should create a new human that is a baby'), () => {
      const human = Human.createBaby();
      expect(human.type).to.equal('baby');
    };
  });
  describe('being teen', () => {
    it('should create a new human that is a teen'), () => {
      const human = Human.createTeen;
      expect(human.type).to.equal('teen');
    };
  });
  describe('being old', () => {
    it('should create a new human that is old'), () => {
      const human = Human.createOld();
      expect(human.type).to.equal('Grandpa');
    };
  });
  describe('smile', () => {
    it('should return a human with a smile', () => {
      const human = new Human('baby');
      expect(human.isSmiling).to.equal(false);
      human.smile();
      expect(human.isSmiling).to.equal(true);
    });
  });
  describe('run', () => {
    it('should make human run', () => {
      const human = new Human('Teen');
      expect(human.isRunning).to.equal(false);
      human.run();
      expect(human.isRunning).to.equal(true);
    });
  });
});

describe('Adult', () => {

  describe('works', () => {
    it('should make adult work', () => {
      const adult = Human.createAdult('Mario');
      expect(adult.isWorking).to.equal(false);
      adult.works();
      expect(adult.isWorking).to.equal(true);
    });
  });
  describe('drinks Coffee', () => {
    it('should make adult drink coffee', () => {
      const adult = Human.createAdult('Andres');
      expect(adult.isDrinkingCoffee).to.equal(false);
      adult.drinksCoffee();
      expect(adult.isDrinkingCoffee).to.equal(true);
    });
  });
  describe('adult does not cry', () => {
    it('should not make adult cry', () => {
      const adult = Human.createAdult('Andres');
      expect(adult.cries).to.equal(undefined);
    });
  });
});

describe('Baby', () => {

  describe('cries', () => {
    it('should make baby cry', () => {
      const baby = Human.createBaby('Raul');
      expect(baby.isCrying).to.equal(false);
      baby.cries();
      expect(baby.isCrying).to.equal(true);
    });
  });
  describe('plays', () => {
    it('should make baby play', () => {
      const baby = Human.createBaby('Gabriel');
      expect(baby.isPlaying).to.equal(false);
      baby.plays();
      expect(baby.isPlaying).to.equal(true);
    });
  });
});