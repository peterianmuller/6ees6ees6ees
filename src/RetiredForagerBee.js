class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor(age, job, canFly, color){
    super(age = 40, job ='gamble', color = 'grey', canFly = false);
    this.age = age;
    this.job = job;
    this.canFly = canFly;
    this.color = color;
  }
  forage(){
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure) {
     this.treasureChest.push(treasure);
  }
};
