class Obstacle {
  constructor(gameScreen, gameSpeed) {
    this.gameScreen = gameScreen;
    this.positionsArr = [85, 300];
    this.randomIndex = Math.floor(Math.random() * this.positionsArr.length);
    this.left = this.positionsArr[this.randomIndex];
    this.top = -250;
    this.width = 100;
    this.height = 150;
    this.element = document.createElement("img");
    this.element.src = "/images/redCar.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.gameScreen.appendChild(this.element);
    this.gameSpeed = gameSpeed;
  }
  move() {
    this.top += Number(this.gameSpeed);
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
}
