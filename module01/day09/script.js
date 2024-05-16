//scoping
//globally scoped is declared outside of anything
let globalVariable = "hello world";

if (true) {
  //   console.log("this is accessible inside an if", globalVariable);
}

//functional scoped
function testing() {
  var insideFuncVariable =
    "This is not accessible outside of this function testing";
  console.log("inside the func ,", insideFuncVariable);
}
// console.log("this will fail with an error", insideFuncVariable);
// testing();

//blocked scoped so anything inside curlies
{
  const insideBlockScope = "this is inside some random curlies";
}
// console.log("logging outside the block", insideBlockScope);

//*******************Hoisting****************/

// console.log("the name is", name, "and the pet name is ", petName);
let name = "Joshua"; //this is globally
const petName = "Joshua";

///************** Shadowing  **************/
if (10 > 9) {
  let name = "Buddy"; // this is locally inside the if statement
  //   console.log("the name is...", name);
}

// ********************** copies! *****************
let a = "apple";
let b = a;
//let b = 'apple'
//we change b .... will that change a????
a = "banana";
// console.log(a, b);
// // b = "butterfly";
// console.log("this is a =>", a);
// console.log("this is b =>", b);

const array1 = [1, 2, 3, [7, 8, 9]];
// const array2 = array1;
// array2.push(4, 5);

//the spread operator is the ... and this is 'deep' copy one level deep
const array3 = [...array1];
// array3[3].push(4, 5);
// console.log(array1, array3);

// //******************* the real deep copy *************/
// //JSON parse changes a string to an object or array
// //JSON stringify turns an object or array into a string
// const superDeepArray4 = JSON.parse(JSON.stringify(array1));
// superDeepArray4[3].push(100, 1000, 40000);
// // console.log("array 1 => ", array1);
// // console.log("super deep array 4 => ", superDeepArray4);
// // console.log("this is a big string, ", "[1,2,3,[7,8,9]]");

// const clone = structuredClone(array1);
// clone[3].push(3000, 5000);
// console.log(array1, clone);

// ********************* set timeout ************************
//set timeout is given to us by js, and it to run a block of code ... after a set amount of time
setTimeout(() => {
  console.log("hey Im in the timeout");
}, 4000); // the second argument is the amount of time you want to pass before you call the function. (in milliseconds)

let timer = 0;
let start = false;
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => {
  console.log("clicked");
  start = !start;
  if (start) {
    startButton.innerText = "Stop Counter";
    startButton.classList.toggle("stop");
  } else {
    startButton.innerText = "Start Counter";
    startButton.classList.toggle("stop");
  }

  const intervalId = setInterval(() => {
    console.log("hey Im the interval... always running", timer);
    if (start === true) {
      timer += 1;
      timerElement.innerText = timer;
    } else {
      //this is where we stop the timer
      clearInterval(intervalId);
    }
  }, 1000);
});
