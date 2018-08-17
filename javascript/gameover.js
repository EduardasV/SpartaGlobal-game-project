function GameOver() {
  this.setup = function() {
    var canvas = createCanvas(720, 400);
    canvas.parent('sketch-holder');
  }

  this.draw = function() {
    background(240);

    textSize(60);
    text('Game Over', width / 3.5, height / 2.5);
    fill(0);
    textSize(30);
    var player_name = player();
    text(player_name + " has won!", width / 3, height / 2);
    textSize(15);
    text("press space to continue", width / 2.7, height / 1.1);
  }
  this.keyPressed = function() {
    if (key === " ") {
      this.sceneManager.showScene(Intro);
    }
  }
  function player() {
    var player_name = simpleStorage.get("winner");
    return player_name;
  }
}
