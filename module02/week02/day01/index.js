//callback hell
const chores = ["Walk Ragnar", "Wash clothes", "dishes"];

// function doAChore(index, callback, errorCallback) {
//   setTimeout(() => {
//     console.log("I did...", chores[index]);
//     if (chores[index] === undefined) {
//       errorCallback();
//     } else {
//       callback();
//     }
//   }, 1000);
// }

// doAChore(
//   0,
//   () => {
//     doAChore(
//       1,
//       () => {
//         doAChore(
//           3,
//           () => {},
//           () => {
//             console.log("there was an error, theres no chore");
//           }
//         );
//       },
//       () => {}
//     );
//   },
//   () => {}
// );

//****************** Promises **********************/
//***************.then & .catch *******************/
// const myPromise = new Promise((resolve, reject) => {
//   if (2 + 2 === 4) {
//     resolve("Ragnar");
//   } else {
//     reject("no pets for you");
//   }
// });
// const pizzaPromise = new Promise((resolve, rej) => {
//   if (2 + 3 === 4) {
//     resolve("pizza1");
//   } else {
//     rej("That is bad math, try again");
//   }
// });
//this is what you use a lot in the future
// pizzaPromise
//   .then((response) => {
//     console.log("here is the response...", response);
//   })
//   .catch((err) => {
//     console.log("Oh no we had an error,", err);
//   });

//************** async & await *******************/
// async function handleMyPromise() {
//   try {
//     const response = await myPromise;
//     console.log("this is the async version", response);
//   } catch (error) {
//     console.log("there is the error", error);
//   }
// }
// handleMyPromise();
//************************ multiple .thens and one catch  ***************/
// pizzaPromise
//   .then((petsResponse) => console.log("Here are the pets", petsResponse))
//   .catch((err) => {
//     console.log(err);
//   });

//*************** handle multiple promises with async and await ***************/

// const handleTwoPromises = async () => {
//   try {
//     const thePets = await myPromise;
//     console.log("Here are the pets", thePets);
//     const theCities = await pizzaPromise;
//     console.log("Here are the cities", theCities);
//   } catch (error) {
//     console.log("here is the error in async", error);
//   } finally {
//     console.log("this is always");
//   }
// };
// handleTwoPromises();

//**************** fetch api *****************/
//************** .then and .catch *************/
// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => {
//     // console.log("this is what the api gave me...", response);
//     return response.json();
//   })
//   .then((parsed) => console.log("here is the data", parsed))
//   .catch((err) => console.log("there was an error with the api", err));

//****************************with async and await  ***************/
const fetchChars = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const parsed = response.json();
    console.log("here inside the async", parsed);
  } catch (err) {
    console.log(err);
  }
};
fetchChars();
