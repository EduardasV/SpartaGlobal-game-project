function Fist(x, y, enemy_x) {
  this.x = x;
  this.y = y;
  this.r = 20;

  this.show = function() {
    push();
    fill(50, 0, 200);
    if (x > enemy_x) 
      rect(this.x - 40, this.y, this.r, this.r);
    else if (x < enemy_x) 
      rect(this.x + 40, this.y, this.r, this.r);
    pop();
  }

  this.hits = function(player) {
    var d = dist(this.x, this.y, player.x, player.y);
    console.log(d < this.r + player.r);
    if (d < this.r + player.r) {
      return true;
    } else {
      return false;
    }
  }
}
