class HoneyMakerBee extends Bee {
  constructor(age, color, job) {
    super(age = 10, job = 'make honey');
    this.age = age;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }
  
};
