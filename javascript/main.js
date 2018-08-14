var player;

function setup() {
  var canvas = createCanvas(720, 400);
  canvas.parent('sketch-holder');

  player = new Player();
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
  rect(10, 10, 200, 30); // Draw white rect using CORNER mode
  //right bar
  rectMode(CORNER); // Default rectMode is CORNER
  fill(255, 0, 0); // Set fill to red
  //rect (x, y, x.width, y.width )
  rect(510, 10, 200, 30); // Draw white rect using CORNER mode
  player.show();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.move(1);
  } else if (keyCode === LEFT_ARROW) {
    player.move(-1);
  }
}
