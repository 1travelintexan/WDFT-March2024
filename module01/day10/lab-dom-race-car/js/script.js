window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const ourGame = new Game();
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });
  document.addEventListener("keydown", (event) => {
    console.log("a key was pressed", event);
    if (event.code === "ArrowRight") {
      //then we move our player to the right
      ourGame.player.directionX = ourGame.speed;
    } else if (event.code === "ArrowLeft") {
      //then we move our player to the left
      ourGame.player.directionX = -ourGame.speed;
    } else if (event.code === "ArrowUp") {
      //then we move our player to the up
      ourGame.player.directionY = -ourGame.speed;
    } else if (event.code === "ArrowDown") {
      //then we move our player to the down
      ourGame.player.directionY = ourGame.speed;
    } else if (event.code === "KeyR") {
      ourGame.player.element.src = "../images/racecar.png";
      ourGame.speed = 20;
    }
  });
  document.addEventListener("keyup", () => {
    ourGame.player.directionX = 0;
    ourGame.player.directionY = 0;
  });

  function startGame() {
    console.log("start game");
    ourGame.start();
    console.log(ourGame.player);
  }
};
