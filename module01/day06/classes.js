//********************* Classes ********************/
//create a new class definition
class Animal {
  //this is a static property and it belongs to the Animal class, not each instance
  static numberOfAnimals = 0;
  constructor(name, species, legs) {
    this.name = name;
    this.species = species;
    this.isHappy = true;
    this.isHungry = false;
    this.numberOfLegs = legs;
    //access the static property and increase it by one
    Animal.numberOfAnimals += 1;
  }

  // make a method that logs how many animals are in the world
  logNumberOfAnimals() {
    console.log(`there are ${Animal.numberOfAnimals} in the world! :) `);
  }
  //methods inside a class
  takeANap() {
    console.log(`${this.name} is a ${this.species} and he is tired ...zzzzz`);
  }
  gotHungry() {
    this.isHungry = true;
    this.isHappy = false;
    console.log("Im hungry grrrrrrr!");
  }
  feedAnimal() {
    this.isHungry = false;
    this.isHappy = true;
    console.log("thank you, I ate too much and now I need a nap");
    this.takeANap();
  }
}

//create a new class that extends Animal with new properties and methods
class Cat extends Animal {
  constructor(theirName, theirSpecies, theNumOfLegs, theColor, theirAge) {
    //super calls the constructor of the parent class
    super(theirName, theirSpecies, theNumOfLegs);
    this.color = theColor;
    this.age = theirAge;
  }
  sayMeow() {
    console.log("Meow Meow Meow");
  }
}
//making a new instance of the Cat class
const Norte = new Cat("Norte", "Cat", 4, "white", 10);
// console.log("here is norte", Norte);
//create an instance of the new class we just defined
const myDog = new Animal("Ragnar", "dog", 4);
// const ericsDog = new Animal("Meli", "dog", 4);
// const geuilhermeSnake = new Animal("Ghost", "snake", 0);
// // geuilhermeSnake.takeANap();
// // myDog.takeANap();
// // console.log("my dog before", myDog);
// myDog.gotHungry();
// // console.log("my dog after", myDog);
// myDog.feedAnimal();

//********************** Dog class that extends Animal ************/
//Dog class should be able to bark, and dog should be able to go for a walk

class Dog extends Animal {
  //declare the property above the constructor and reassign it inside the constructor
  #owner;
  constructor(
    theirSpecies,
    theirName,
    theColor,
    theNumOfLegs,
    theirAge,
    sex,
    owner
  ) {
    super(theirName, theirSpecies, theNumOfLegs);
    this.color = theColor;
    this.age = theirAge;
    this.sex = sex;
    //making a private property named owner
    this.#owner = owner;
  }

  listOwner() {
    console.log(`the owner ${this.name} is `, this.#owner);
  }
  sayBark() {
    console.log("ão, ão, ão");
  }

  goWalk() {
    console.log("I love walking");
  }
  takeANap() {
    console.log(
      `${this.name} is a ${this.species} and is a ${this.sex} and they will go take a nap`
    );
  }
  hasABirthday() {
    this.age = this.age + 1;
    console.log(
      `${this.name} had a birthday and now they are ${this.age} years old :)`
    );
  }
}

const Honey = new Dog("Dog", "Honey", "Brown", "4", 7, "female", "Renan");
const Buddy = new Dog("Dog", "Buddy", "Brown", "4", 4, "male", "Joshua");
// console.log("This is ", Honey);
// Honey.sayBark();
// Honey.goWalk();
// Honey.takeANap();
// myDog.takeANap();
// Honey.hasABirthday();
Honey.logNumberOfAnimals();
Honey.listOwner();
console.log("the dogs name ", Honey.name);
console.log("the dogs owner ", Honey.owner);
