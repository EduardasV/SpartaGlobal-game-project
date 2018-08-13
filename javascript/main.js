function setup() {
  var p1 = 20;
  var p2 = p1 + 20;
  var p3 = p2 + 20;
  var p4 = p3 + 20;

  var canvas = createCanvas(720, 400);
  canvas.parent('sketch-holder');
  background(240);
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

}