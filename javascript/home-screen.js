function Intro() {
  this.setup = function() {
    var canvas = createCanvas(720, 400);
    canvas.parent('sketch-holder');
  }

  this.draw = function() {
    background(240);
    drawIntroScreen();

  }
  this.keyPressed = function() {
    // switch the scene
    if (key == '1') {
      // Invoke the Game scene passing as argument the string '1' or '2'
      this.sceneManager.showScene(Main, key);
    }

  }
  var value = 0;
  function drawIntroScreen() {
    fill(value);
    rect(25, 25, 50, 50);
    this.clicked = function() {}
  }
  function mousePressed() {}
}
