//this is a single line comment
/*  There is 
a 
multiple 
line 
comment  */

console.log("hello world");

//Start making some variables
//Types of strings " " or ' ' or ` `

// this variable is able to change
let myName = "joshua";
//this variable is constant, never changes
const myDogsName = "Ragnar";
const introductionWithConcatenation =
  "Hello, my name is" + " " + myName + " and my dogs name is " + myDogsName;
const introductionWithBackticks = `Hello,  my name is ${myName} and my dogs name is ${myDogsName}`;
console.log(introductionWithBackticks);

// Different types of casing for variables
// camel case is myName
// Pascal case is MyNameIs
// Kebab case is my-name-is
// Snake case is my_name_is

//Numbers
let myAge = 37;
let myDogsAge = 3;

let addedNums = 10;
addedNums -= myAge;
console.log("here is the added numbs", addedNums);

//one equals sign means assignment
//two equals sign is comparing
console.log("double equal sign", myAge == myDogsAge);
//triple equal sign....?
console.log("triple equal sign", myAge === myDogsAge);
//raised to a power
console.log(myAge ** 3);
//divided
console.log(myAge / myDogsAge);
//modulo
console.log(myAge % myDogsAge);

//the Math object
let num1 = 13.99999999999999;
let num2 = 21.0000001;
let num3 = 4.49999999;
// const floorEx = Math.floor(num1);
// console.log("floor", floorEx);
// const ceilEx = Math.ceil(num2);
// console.log("Ceil example", ceilEx);
// const roundEx = Math.round(num3);
// console.log("round ex", roundEx);

//Math.random
//returns a random number between 0 and 1, can be 0 but will be 1
// console.log("random number", Math.random());
// //generate a random number between 0 - 9
// console.log("random number between 0-9", Math.round(Math.random() * 10));

// //Math .pow is to exponents
// const num4 = Math.pow(2, 4);
// console.log("num4", num4);

//String with single or double quotes
const str = "this is a cool string";
console.log("the length of the string", str.length);
console.log("the index of the letter c in the string is ", str.indexOf("z"));

let newName = "SAMANTHA";
//capitalize the first letter of my name
let theCapitalName = newName[0].toUpperCase() + newName.slice(1);
console.log("new name", newName);
console.log("Capital ", newName.toLowerCase());
console.log("includes ex", newName.includes("SAM"));

//Boolean Logic
const isRagnarADog = false;
const isRagnarACat = false;
if (isRagnarADog || 100 < 101) {
  console.log("woof woof");
} else {
  console.log("meow meow");
}
