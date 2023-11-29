let loretta;
let hungerLevel = 10;
function preload() {
  lorettasp = loadImage("lorettaneutral.png");
}
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(10);
  loretta = new character(300, 300);
}

function draw() {
  background(122, 24, 79);

  loretta.show();

  timer = millis();

  if (timer % 100 == 0) {
    hungerLevel--;
  }

  if (hungerLevel >= 15) {
    loretta.default();
  } else if (hungerLevel <= 15 && hungerLevel > 0) {
    loretta.hungry();
  } else if (hungerLevel == 0) {
    hungerLevel = 0;
    loretta.sick();
  }

  loretta.x = loretta.x + loretta.d;
  if (loretta.x >= 300) {
    loretta.d = -1;
  } else if (loretta.x <= 100) {
    loretta.d = 1;
  }
}

function mousePressed() {

  let d = dist(mouseX, mouseY, loretta.x, loretta.y );
  if (hungerLevel <= 15) {
    if (d <= loretta.w) {
      hungerLevel = 15;
    }
  }
}


//***CLASS BUILDING***
class character {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.w = 100;
    this.h = 50;
    this.d = 1;
    this.r = 200;
  }

  show() {
    image(lorettasp, this.x, this.y);
    textSize(16)
    text(hungerLevel, this.x + 63, this.y + 140);
  }

  //statuses
  default() {
    fill(0);
    textSize(16)
    text("i feel great! thank you", this.x + 63, this.y - 15);
  }
  hungry() {
    fill(0);
    textSize(16)
    text("click here to feed me!", this.x + 63, this.y - 15);
  }
  sick() {
    fill(0);
    textSize(16)
    text("oh... i don't feel well", this.x + 63, this.y - 15);
  }
}
