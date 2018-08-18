var reset = false;
var background_img;

function preload() {}

function Intro() {
  this.setup = function() {
    background_img = loadImage("images/homepage.png");
    var canvas = createCanvas(720, 400);
    canvas.parent('sketch-holder');

    background_sound_home.loop();
  }

  this.draw = function() {
    background(240);
    background(background_img);
    drawIntroScreen();

  }
  this.keyPressed = function() {
    // switch the scene
    if (key == '1') {
      reset = true;
      background_sound_home.stop();
      this.sceneManager.showScene(Main);
    } else if (key == '2') {
      background_img = loadImage("images/leaderboard.png");
      this.sceneManager.showScene(Leaderboards);
    } else if (key == '3') {
      this.sceneManager.showScene(GameOver);
    }

  }

  function drawIntroScreen() {
    fill(255);
    textSize(15);
    text("[1] - Click to start", width / 3, height / 2 + 20);
    text("[2] - Click for leaderboards", width / 3, height / 2 + 50);
  }
}
