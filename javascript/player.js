function Player() {
  this.x = width / 2;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height - 100, 50, 100);
  }

  this.move = function(dir) {
    this.x += dir * 5;
  }
}
