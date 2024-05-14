//******************* .map() *******************/
const numsArr = [300, 4, 55, 8, 10, 12, 24, 1];
const users = [
  {
    firstName: "Ragnar",
    username: "Ragni",
    email: "ragnar@ragnar.com",
    premium: true,
    stars: 4,
  },
  {
    firstName: "Joshua",
    username: "Joshi",
    email: "ragnar@ragnar.com",
    premium: false,
    stars: 3,
  },
  { firstName: "test", email: "ragnar@ragnar.com", premium: false, stars: 1 },
  {
    firstName: "Meli",
    username: "Mel",
    email: "ragnar@ragnar.com",
    premium: true,
    stars: 5,
  },
  {
    firstName: "Buddy",
    username: "My Buddy",
    email: "ragnar@ragnar.com",
    premium: false,
    stars: 5,
  },
  {
    firstName: "Eric",
    username: "My old TA",
    email: "ragnar@ragnar.com",
    premium: true,
  },
];
const biggerNumsArr = numsArr.map((num, i, wholeArray) => {
  return num * 3;
});
// console.log(numsArr);
// console.log(biggerNumsArr);

//**************** list of all the users usernames only ******************
const usernamesArray = users.map((user) => {
  return user.username;
});
// console.log("user names: ", usernamesArray);

//************************** .filter() ******************
//.filter method is expecting you return either true or false
const numsUnderTen = numsArr.filter((number) => {
  if (number <= 10) {
    return true;
  }
});
console.log("all number under ten ", numsUnderTen);
const filteredUsers = users.filter((currentUser) => {
  if (currentUser.premium === true) {
    return true;
  } else {
    return false;
  }
});
//************** oneliner shorter version of the same filter *************/
// const filteredUsersShort = users.filter((currentUser) => currentUser.premium );
// console.log("filtered users", filteredUsers);
// console.log("the original", users);

// ******************** .reduce( ) **********************
const numsArraySummed = numsArr.reduce((acc, curr) => {
  if (curr <= 10) {
    return acc + curr;
  } else {
    return acc;
  }
});
console.log("here is the total ", numsArraySummed);
const allStars = users.reduce((acc, curr) => {
  if (curr.stars) {
    return acc + curr.stars;
  } else {
    return acc;
  }
}, 0);
console.log("for Filipa", allStars);

//*************************** .sort () **************/
//sort expects either a positive number, a negative number or 0
// const numsArr = [300, 4, 55, 8, 10, 12, 24, 1];
//you cant just call the .sort() method without the conditionals
// numsArr.sort();
//sorted ascending order
// numsArr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
//sorted descending order
// numsArr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
//********************** oneliner version of .sort() *************/
// numsArr.sort((a, b) => a - b);
// console.log("the numbers array sorted ", numsArr);

//Sorting the users by their stars high to low
// const users = [
//     {
//       firstName: "Ragnar",
//       username: "Ragni",
//       email: "ragnar@ragnar.com",
//       premium: true,
//       stars: 4,
//     },
//     {
//       firstName: "Joshua",
//       username: "Joshi",
//       email: "ragnar@ragnar.com",
//       premium: false,
//       stars: 3,
//     },
//     { firstName: "test", email: "ragnar@ragnar.com", premium: false, stars: 1},
//     {
//       firstName: "Meli",
//       username: "Mel",
//       email: "ragnar@ragnar.com",
//       premium: true,
//       stars: 5,
//     },
//   ];

users.sort((a, b) => {
  if (a.stars < b.stars) {
    return -1;
  } else if (a.stars > b.stars) {
    return 1;
  } else {
    return 0;
  }
});
console.log("our users ", users);
console.log("users after reverse", users.reverse());

//first map over the array and pull out all of the the usernames, log the new array with just the user names in it
//second filter the array for only users with more than 3 stars... log the new array with the filtered users
//third reduce or add all the stars to get the total number of stars for the users.... log the number
//fourth sort the users based on their alphabetical names
//last reverse the sort and log them both

//if you finish before... try to refactor all the methods for oneliners or at least shorter syntax
