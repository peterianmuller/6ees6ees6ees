class Grub {

  constructor(age = 0, color = 'pink', food = 'jelly') {
    this.age = age;
    this.color = color;
    this.food = food;
  }

  eat(){
    //possibly refactor using es6
    return 'Mmmmmmmmm '+ this.food;
  }

};
