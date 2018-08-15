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

  this.reduceHealth = function(enemy) {
    this.health -= 10;
    if (this.x > enemy.x) 
      enemy.move(-10);
    else if (this.x < enemy.x) 
      enemy.move(10);
    }
  
  this.winningPlayer = function(player_value) {
    if (player_value == player1 && this.health < 1) {
      score.player2[0] += 1;
      saveScore("player2");
    } else if (player_value == player2 && this.health < 1) {
      score.player1[0] += 1;
      saveScore("player1");
    }
  }

  this.losingPlayer = function(player_value) {
    if (player_value == player1 && this.health < 1) {
      score.player1[1] += 1;
      saveScore("player1");
    } else if (player_value == player2 && this.health < 1) {
      score.player2[1] += 1;
      saveScore("player2");
    }
    if (this.health == 0) {
      // noLoop();
    }
  }

  function saveScore(key) {
    if (key == "player1") {
      simpleStorage.set(key, score.player1);
    } else if (key == "player2") {
      simpleStorage.set(key, score.player2);
    }
  }

}
