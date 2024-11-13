function setup() {

  createCanvas(800, 600);
}


let x = 300;
let y = 300;

function frog(x, y) {
  createCanvas(600, 800);
  frameRate(30);

  background(255);
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

function draw() {
  background(255, 140, 0);
  frog(x, y);
  y = y+1;
  if (y === 620);
  
}
