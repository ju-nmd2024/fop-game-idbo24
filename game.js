let x = 300;
let y = 100;
let velocity = 0;
let thrust = -1.5;
let gravity = 0.05;
let isGameOver = false;
let isGameWon = false;

//start, game, result
let gameState = "start";

//font setup
function preload() {
  //pixelated font
  font = loadFont;
}

//star and moon parameters
let starSpeed = 0.2;
let stars = [];

function setup() {
  createCanvas(600, 800);
  frameRate(30);

  //star positions
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      speed: random(0.5, 2),
    });
  }
}

function draw() {
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "game") {
    gameScreen();
  } else if (gameState === "result") {
    resultScreen();
  }
}

//start screen
function startScreen() {
  background(0);
  fill(255, 137, 0); //orange red color
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(32);
  text("Falling Space Frog", width / 2.3, height / 3);
  textSize(18);
  text("Press ENTER to Start", width / 2.3, height / 2);

  //stars for start screen
  drawStars();
}

//game screen
function gameScreen() {
  background(0);
  drawStars();
  moon(300, 200);

  //gravity applied to the frogs velocity (falling effect)
  velocity += gravity;

  //control the frogs movement with the space key
  if (keyIsDown(32)) {
    velocity += thrust;
  }

  //update the frogs position based on velocity
  y += velocity;

  //frog drawing
  frog(x, y);

  //check for collision with the moon surface
  if (y + 145 >= 500) {
    if (velocity > 4.9) {
      //if falling too fast
      isGameOver = true;
      isGameWon = false;
    } else {
      velocity = 0;
      y = 500 - 145;
      isGameOver = true;
      isGameWon = true;
    }
  }

  //if frog falls too far
  if (y > height) {
    isGameOver = true;
    isGameWon = false;
  }

  //result screen
  if (isGameOver) {
    gameState = "result";
  }
}

//result screens
function resultScreen() {
  background(0);
  fill(255, 137, 0); //orange red color
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(32);
  if (isGameWon) {
    text("You Won!", width / 2.3, height / 3);
  } else {
    fill(255, 0, 0); //red color
    text("You Lost... Try Again", width / 2.3, height / 3);
  }
  textSize(18);
  text("Press ENTER to Restart", width / 2.3, height / 2);
}

//frog function
function frog(x, y) {
  noStroke();

  //frog body
  push();
  translate(x, y);
  fill(138, 154, 50);
  ellipse(0, 0, 350, 290);
  pop();

  //inner body
  push();
  translate(x, y);
  fill(204, 255, 153);
  ellipse(0, 0, 310, 250);
  pop();

  //frog face
  push();
  translate(x, y - 90);
  fill(138, 154, 50);
  ellipse(0, 0, 240, 160);
  pop();

  //left eye
  push();
  translate(x - 74, y - 140);
  fill(138, 154, 50);
  ellipse(0, 0, 80, 100);
  fill(255, 204, 51);
  ellipse(0, 0, 60, 80);
  pop();

  push();
  translate(x - 74, y - 140);
  fill(0);
  ellipse(0, 0, 50, 70);
  pop();

  push();
  translate(x - 74, y - 152);
  fill(255);
  ellipse(0, 0, 30, 30);
  pop();

  //right eye
  push();
  translate(x + 69, y - 140);
  fill(138, 154, 50);
  ellipse(0, 0, 80, 100);
  fill(255, 204, 51);
  ellipse(0, 0, 60, 80);
  pop();

  push();
  translate(x + 69, y - 140);
  fill(0);
  ellipse(0, 0, 50, 70);
  pop();

  push();
  translate(x + 69, y - 152);
  fill(255);
  ellipse(0, 0, 30, 30);
  pop();

  //nostrils
  push();
  translate(x - 10, y - 96);
  fill(78, 72, 42);
  ellipse(0, 0, 10, 10);
  pop();

  push();
  translate(x + 10, y - 96);
  fill(78, 72, 42);
  ellipse(0, 0, 10, 10);
  pop();

  //mouth
  push();
  translate(x, y - 60);
  noFill();
  rotate(0);
  stroke(0, 0, 0);
  strokeWeight(5);
  arc(0, 0, 40, 40, 40, 140);
  pop();

  //legs
  push();
  translate(x + 160, y + 86);
  angleMode(DEGREES);
  fill(138, 154, 50);
  rotate(30);
  ellipse(0, 0, 60, 140);
  pop();

  push();
  translate(x - 158, y + 86);
  angleMode(DEGREES);
  fill(138, 154, 50);
  rotate(-30);
  ellipse(0, 0, 60, 140);
  pop();

  //feet
  push();
  translate(x - 140, y + 130);
  fill(138, 154, 50);
  ellipse(0, 0, 100, 50);
  pop();

  push();
  translate(x + 134, y + 130);
  fill(138, 154, 50);
  ellipse(0, 0, 100, 50);
  pop();

  //arms
  push();
  translate(x + 89, y + 25);
  angleMode(DEGREES);
  fill(138, 154, 50);
  rotate(30);
  ellipse(0, 0, 30, 70);
  pop();

  push();
  translate(x - 94, y + 25);
  angleMode(DEGREES);
  fill(138, 154, 50);
  rotate(-30);
  ellipse(0, 0, 30, 70);
  pop();

  //hands
  push();
  translate(x - 81, y + 55);
  fill(138, 154, 50);
  ellipse(0, 0, 40, 30);
  pop();

  push();
  translate(x + 76, y + 55);
  fill(138, 154, 50);
  ellipse(0, 0, 40, 30);
  pop();
}

//moon function
function moon(x, y) {
  fill(189, 189, 189);
  ellipse(x, y + 500, 2000, 700);
}

//moving stars function
function drawStars() {
  fill(255, 255, 255, 150);
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    s.x += s.speed * starSpeed;
    if (s.x > width) {
      s.x = 0;
      s.y = random(height);
    }
    ellipse(s.x, s.y, s.size, s.size);
  } 
}

//key presses
function keyPressed() {
  if (keyCode === ENTER) {
    if (gameState === "start" || gameState === "result") {
      //reset game
      x = 300;
      y = 100;
      velocity = 0;
      isGameOver = false;
      isGameWon = false;
      gameState = "game";
    }
  }
}
