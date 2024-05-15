console.log("hey im connected");
const startScreenElement = document.getElementById("start-screen");
const gameScreenElement = document.getElementById("game-screen");
const gameOverScreenElement = document.getElementById("gameover-screen");
const startBtnElement = document.getElementById("start-game-btn");
const restartBtnElement = document.querySelector("#gameover-screen button");
const gameHeaderElement = document.querySelector("#game-screen h2");
const endGameBtnElement = document.querySelector("#end-game-btn");
const toggleBackgroundBtn = document.getElementById("toggle-background");
const changeTitleBtnElement = document.getElementById("change-title-btn");
const titleElement = document.querySelector("h1");
const addImageBtnElement = document.getElementById("add-image-btn");
const ulElement = document.querySelector("ul");
const petNames = ["Canonli", "Buddy", "Honey"];
const allDeleteBtns = document.querySelectorAll(".delete");
//looping over an array and adding each element to the DOM
petNames.forEach((pet, index) => {
  const ourLi = document.createElement("li");
  ourLi.innerHTML = `${pet} <button class='delete'>delete</button>`;
  console.log("here is our li", ourLi);
  ulElement.appendChild(ourLi);
  //after you add it to the dom, you can now add the event listener
  ourLi.addEventListener("click", () => {
    console.log("deleted");
    //remove is a method that removes that element, so call the element and use .remove()
    ourLi.remove();
  });
});

//this is after you grab the element, we add an event listener to it
startBtnElement.addEventListener("click", () => {
  console.log("start button clicked!");
  //I need to hide the first screen or the start screen
  startScreenElement.style.display = "none";
  //add a class to the start screen
  gameScreenElement.classList.add("background-blue");
  //this is showing the game screen
  gameScreenElement.style.display = "block";
  //this is just playing the background color of the game screen
  //   gameScreenElement.style.backgroundColor = "blue";
  //   //this is changing the color of the text on the game screen
  //   gameHeaderElement.style.color = "white";
});
endGameBtnElement.addEventListener("click", () => {
  console.log("game end clicked");
  //hiding the game screen
  gameScreenElement.style.display = "none";
  //showing the game over screen
  gameOverScreenElement.style.display = "block";
});
restartBtnElement.addEventListener("click", () => {
  console.log("restart clicked");
  //hiding the game screen
  gameScreenElement.style.display = "block";
  //showing the game over screen
  gameOverScreenElement.style.display = "none";
});
toggleBackgroundBtn.addEventListener("click", () => {
  console.log("toggle clicked");
  //   const gameScreenClassList = gameScreenElement.classList;
  //   //this is just copying the dom list and making it an array so I can use .includes( )
  //   const classArray = [...gameScreenClassList];
  //   if (classArray.includes("background-blue")) {
  //     gameScreenElement.classList.remove("background-blue");
  //     gameScreenElement.classList.add("background-purple");
  //   } else {
  //     gameScreenElement.classList.add("background-blue");
  //     gameScreenElement.classList.remove("background-purple");
  //   }
  //this will 'toggle' classes, meaning add if its not present or remove it is present
  gameScreenElement.classList.toggle("background-purple");
});
changeTitleBtnElement.addEventListener("click", () => {
  titleElement.innerText = `Cannoli's Revenge`;
});
addImageBtnElement.addEventListener("click", () => {
  //this creates a img tag but not the src or alt
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "./ironhack.png");
  newImage.setAttribute("alt", "ironhack logo");
  newImage.setAttribute("my-attribute", "Ragnar is the best dog");
  newImage.style.height = "100px";
  console.log(newImage);
  //adding new elements to the page
  gameScreenElement.appendChild(newImage);
});
