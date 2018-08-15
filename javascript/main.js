var player1;
var player2
var fist1 = [];
var fist2 = [];

function setup() {
  var canvas = createCanvas(720, 400);
  canvas.parent('sketch-holder');

  player1 = new Player(width / 4);
  player2 = new Player(width / 1.3);
}

function draw() {
  background(230);

  var p1 = 20;
  var p2 = p1 + 20;
  var p3 = p2 + 20;
  var p4 = p3 + 20;

  //left bar
  rectMode(CORNER); // Default rectMode is CORNER
  fill(255, 0, 0); // Set fill to red
  //rect (x, y, x.width, y.width )
  var player1_hp_width = 200 / (100 / player1.health);
  if (player1_hp_width < 1) 
    player1_hp_width = 0;
  rect(10, 10, player1_hp_width, 30); // Draw white rect using CORNER mode
  //right bar
  rectMode(CORNER); // Default rectMode is CORNER
  fill(255, 0, 0); // Set fill to red
  //rect (x, y, x.width, y.width )
  var player2_hp_width = 200 / (100 / player2.health);
  if (player2_hp_width < 1) 
    player2_hp_width = 0;
  rect(510, 10, player2_hp_width, 30); // Draw white rect using CORNER mode
  player1.show();
  player2.show();
  for (var i = 0; i < fist1.length; i++) {
    fist1[i].show();
    if (fist1[i].hits(player2)) {
      player2.reduceHealth();
    }
    fist1.splice(i, 1);
  }
  for (var i = 0; i < fist2.length; i++) {
    fist2[i].show();
    if (fist2[i].hits(player1)) {
      player1.reduceHealth();
    }
    fist2.splice(i, 1);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player2.move(1);
  } else if (keyIsDown(LEFT_ARROW)) {
    player2.move(-1);
  }
  if (keyIsDown(68)) {
    player1.move(1);
  } else if (keyIsDown(65)) {
    player1.move(-1);
  }
}

function keyPressed() {
  if (key === " ") {
    fist1.push(new Fist(player1.x, player1.y, player2.x));
  }
  if (key === "Shift") {
    fist2.push(new Fist(player2.x, player2.y, player1.x));
  }
}
