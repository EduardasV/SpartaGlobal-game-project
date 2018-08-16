var reset = false;
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
      reset = true;
      this.sceneManager.showScene(Main);
    } else if (key == '2') {
      this.sceneManager.showScene(Leaderboards);
    } else if (key == '3') {
      this.sceneManager.showScene(GameOver);
    }

  }

  function drawIntroScreen() {
    textSize(15);
    text("Press key 1 or 2 to select\nhow do you want to operate your mouse:", width / 3, height / 2 - 30);
    text("[1] - click to start", width / 3, height / 2 + 20);
    text("[2] - Click for leaderboards", width / 3, height / 2 + 50);
  }
}
