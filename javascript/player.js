function Player(xPos) {
  this.x = xPos;
  this.y = height - 100;
  this.health = 100;
  this.r = 50;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.r, this.r * 2);
  }

  this.move = function(dir) {
    if (this.x <= width - 50 && this.x >= 50) {
      this.x += dir * 5;
    } else if (this.x < 50) {
      this.x += 1;
    } else if (this.x > width - 50) {
      this.x -= 1;
    }
  }

  this.reduceHealth = function() {
    this.health -= 10;
  }
}
