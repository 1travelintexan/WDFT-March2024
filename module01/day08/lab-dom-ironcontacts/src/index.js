// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

// tableBody.appendChild(exampleRow);
//this grabs the delete button
// const deleteBtn = document.querySelector(".btn-delete");
// deleteBtn.addEventListener("click", () => {
//   exampleRow.remove();
// });
// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((oneContact) => {
  const myRow = document.createElement("tr");
  myRow.innerHTML = `
  <td>
    <img src="${oneContact.pictureUrl}" />
  </td>
  <td> ${oneContact.name} </td>
  <td> ${oneContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  //this grabs the delete button
  const deleteBtn = myRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    console.log("delete clicked", myRow);
    myRow.remove();
  });

  //this is grabbing the like button
  const likeBtn = myRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });

  //this line adds the table row to the DOM
  tableBody.appendChild(myRow);
});

// Bonus: ITERATION 4 - Add Random Contacts

const randomContactBtn = document.querySelector("#btn-add-random");
randomContactBtn.addEventListener("click", () => {
  console.log("random clicked!!!");
  const ourRandomIndex = Math.floor(Math.random() * contacts.length);
  const ourRandomContact = contacts.splice(ourRandomIndex, 1)[0];
  console.log(ourRandomContact);
  const myRandomRow = document.createElement("tr");
  myRandomRow.innerHTML = `
  <td>
    <img src="${ourRandomContact.pictureUrl}" />
  </td>
  <td> ${ourRandomContact.name} </td>
  <td> ${ourRandomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  //this grabs the delete button
  const deleteBtn = myRandomRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    myRandomRow.remove();
  });

  //this is grabbing the like button
  const likeBtn = myRandomRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });

  //this line adds the table row to the DOM
  tableBody.appendChild(myRandomRow);
});
