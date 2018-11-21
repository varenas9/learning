'use strict';
class Human {
  constructor(name){
    this.eyes = 'blue';
    this.name = name;
    this.gender = 'female';
    this.hair = 'brown';
    this.body = 'fat';
    this.height = 5.2;
    this.isSmiling = false;
    this.isRunning = false;
  }
  static createAdult(name){
    return new Adult(name);
  }
  static createBaby(name){
    return new Baby(name);
  }
  static createTeen(){
    return new Human('Hermione', 'teen');
  }
  static crateOld(){
    return new Human('Nonna', 'Grandpa');
  }
  run(){
    this.isRunning = true;
  }
  smile(){
    this.isSmiling = true;
  }
}

class Adult extends Human {
  constructor(name){
    super(name);
    this.isWorking = false;
    this.isDrinkingCoffee = false;
  }
  works(){
    this.isWorking = true;
  }
  drinksCoffee(){
    this.isDrinkingCoffee = true;
  }
}

class Baby extends Human{
  constructor(name){
    super(name);
    this.isCrying = false;
    this.isPlaying = false;
  }

  cries(){
    this.isCrying = true;
  }
  plays(){
    this.isPlaying = true;
  }
}



module.exports = Human;