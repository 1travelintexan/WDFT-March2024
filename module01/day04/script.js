// //LOOPS
// //for loop takes three arguments, starting point, when to stop and how much to increment the i
// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }
// //while loop is specifying while something is true, run the loop otherwise break out
// let counter = 200;
// // while (counter < 100) {
// //   console.log("inside the while loop", counter);
// //   counter++;
// // }
// //do while will always run at least once, even if the condition is false
// do {
//   console.log("inside the do - while loop", counter);
//   counter++;
// } while (counter < 10);

//*********************** FUNCTIONS  *************************/
//es5 function is with the 'function' keyword
//ex syntax: function addNums(<your parameters here>){}
function addTwoNums(number1, number2) {
  //Aykos way
  if (isNaN(number1) || isNaN(number2)) {
    return "Invalid arguments";
  } else {
    const total = number1 + number2;
    return total;
  }

  //   if (typeof number1 === "number" && typeof number2 === "number") {
  //     const total = number1 + number2;
  //     return total;
  //   } else {
  //     return "Invalid arguments";
  //   }
}
// //this is invoking the function that we defined above
// const ourTotal = addTwoNums(10, 22);
// console.log(ourTotal);
// //checking types for the function
// const ourNewTotal = addTwoNums(3, "pizza");
// console.log(ourNewTotal);

//ES6 Syntax with the fat arrow (=>)
//ex syntax for ES6 function const someName = (your parameters here) => { }
//parameters are the 'number1' and the 'number2'  on line 47
const subtractTwoNumbers = (number1, number2) => {
  const subTotal = number1 - number2;
  return subTotal;
};
//calling the function, otherwise it will never run
//arguments are the actual numbers of 20 and 5 on line 53
// console.log("this is the arrow function", subtractTwoNumbers(20, 5));

//********************** ARRAYS ******************/
//arrays are with the square brackets [  ]
//you can add any type into your array
//pet names
const FilipasDog = "Techno";
const pets = [
  "ragnar",
  "honey",
  "buddy",
  "guria",
  ["test", "This", "is ", "a", "array inside an array"],
  "horus",
  "cannoli",
  FilipasDog,
];

// console.log("pets before pop", pets);
// pets.pop();
// console.log("pets after pop", pets);
// pets.push("Bambino");
// console.log("after the push", pets);
// pets.unshift("Peppo");
// console.log("after the unshift", pets);

//.splice is for removing and also adding elements at specific indexes of an array
// syntax is inside the paranthesis (starting index, delete count, element you want to add)
pets.splice(4, 1, "Meli");
console.log("after the splice", pets);

//finding the index of what we want to remove
const foundIndex = pets.indexOf("Buddy");

// pets.splice(foundIndex, 1);
// console.log(pets, foundIndex);

//***************.forEach() *********************/
//forEach is an array method method that takes an arrow function as a parameter
const newPetsArray = [];
pets.forEach((onePet, index) => {
  pets[index] = onePet[0].toUpperCase() + onePet.slice(1);
  //   newPetsArray.push(upperCasedName);
});
console.log("this is the pet array after the for each", pets);

//simple version of a forEach
const arr = [1, 2, 3, 4, 5, 33, 65, 101];
let total = 0;
arr.forEach(function (number) {
  total += number;
});
console.log(total);
