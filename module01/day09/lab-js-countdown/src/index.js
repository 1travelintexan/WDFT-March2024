let remainingTime = 10; // Countdown starting from 10
let timerId = null; // Variable to store the interval
const startBtn = document.querySelector("#start-btn");
const timeElement = document.querySelector("#time");
const toastElement = document.querySelector("#toast");
const toastCloseElement = document.querySelector("#close-toast");
const toastMessageElement = document.querySelector("#toast-message");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener("click", () => {
  remainingTime = 10;
  timeElement.innerText = remainingTime;
  startCountdown();
});
toastCloseElement.addEventListener("click", () => {
  toastElement.classList.remove("show");
  startBtn.disabled = false;
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  //these makes the start button not clickable
  startBtn.disabled = true;

  //this is our loop, our timer
  const timerId = setInterval(() => {
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    remainingTime -= 1;
    //update the DOM
    timeElement.innerText = remainingTime;
    console.log("remaining time", remainingTime);

    //this is when the timer equals zero, we stop it
    if (remainingTime <= 0) {
      clearInterval(timerId);
      showToast("Lift off! 🚀");
      startBtn.disabled = false;
    }
  }, 1000);
}
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");
  toastMessageElement.innerText = message;
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
