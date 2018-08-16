function Leaderboards() {
  this.setup = function() {
    var canvas = createCanvas(720, 400);
    canvas.parent('sketch-holder');
  }
  this.draw = function() {
    background(240);
    var getKeys = simpleStorage.index();
    for (var i = 0; i < getKeys.length - 1; i++) {
      textSize(15);
      fill(0);
      text(getKeys[i], width / 4, height / 2.5 + (20 * i));
      var win_score = simpleStorage.get(getKeys[i]);
      text(win_score[0] + " - " + win_score[1], width / 1.6, height / 2.5 + (20 * i));
    }
  }
  this.keyPressed = function() {
    if (key === "Escape") {
      this.sceneManager.showScene(Intro);
    }
  }
}
