var background_img;
function Leaderboards() {
  this.setup = function() {
    background_img = loadImage("images/leaderboard.png");
    var canvas = createCanvas(720, 400);
    canvas.parent('sketch-holder');
  }
  this.draw = function() {
    background(240);
    background(background_img);
    var getKeys = simpleStorage.index();
    text("Name", width / 4, height / 2.8);
    text("Win - Loss", width / 1.6, height / 2.8);
    for (var i = 0; i < getKeys.length - 1; i++) {
      var win_score = simpleStorage.get(getKeys[i]);
      textSize(15);
      fill(0);
      text(getKeys[i], width / 4, height / 2.2 + (20 * i));
      text(win_score[0] + " - " + win_score[1], width / 1.6, height / 2.2 + (20 * i));
    }
  }
  this.keyPressed = function() {
    if (key === "Escape") {
      background_img = loadImage("images/homepage.png");
      this.sceneManager.showScene(Intro);
    }
  }
}
