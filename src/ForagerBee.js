class ForagerBee extends Bee {
  // TODO..
  constructor(age, job){
    super(age = 10, job = 'find pollen');
    this.age = age;
    this.job = job;
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
