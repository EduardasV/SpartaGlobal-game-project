player_dead = false;
function Player(xPos,) {
  this.x = xPos;
  this.y = height - 120;
  this.health = 100;
  this.r = 100;
  this.character = createSprite(this.x, this.y);
  this.character.addImage("floating", loadImage("images/Walk/Small/Boxing04_Walk_0009.png"));

  this.character.addAnimation("right", "images/Walk/Small/Boxing04_Walk_0002.png", "images/Walk/Small/Boxing04_Walk_0003.png", "images/Walk/Small/Boxing04_Walk_0004.png", "images/Walk/Small/Boxing04_Walk_0005.png", "images/Walk/Small/Boxing04_Walk_0006.png", "images/Walk/Small/Boxing04_Walk_0007.png", "images/Walk/Small/Boxing04_Walk_0008.png", "images/Walk/Small/Boxing04_Walk_0009.png", "images/Walk/Small/Boxing04_Walk_0010.png");

  this.character.addAnimation("punch", "images/PunchRight/Small/Boxing04_PunchRight_0001.png", "images/PunchRight/Small/Boxing04_PunchRight_0003.png", "images/PunchRight/Small/Boxing04_PunchRight_0005.png");

  this.setup = function(enemy) {
    if (this.x > enemy.x) {
      this.character.mirrorX(-1);
    } else if (this.x < enemy.x) {
      this.character.mirrorX(1);
    }
  }

  this.show = function(enemy) {
    getSprites();
    noStroke();
    fill(0, 0, 0, 0);
    rectMode(CENTER);
    this.character.changeAnimation("floating");
    if (this.x > enemy.x) {
      rect(this.x - 35, this.y, this.r, this.r * 0.5);
      this.character.mirrorX(-1);
    } else if (this.x < enemy.x) {
      rect(this.x + 35, this.y, this.r, this.r * 0.5);
      this.character.mirrorX(1);
    }
    drawSprite(this.character);
  }

  this.move = function(dir) {
    if (this.x <= width - 50 && this.x >= 50) {
      this.x += dir * 5;
      this.character.changeAnimation("right");
      this.character.position.x += dir * 5;
      drawSprite(this.character);
    } else if (this.x < 50) {
      this.x += 1;
      this.character.changeAnimation("floating");
      this.character.position.x += 1;
      drawSprite(this.character);
    } else if (this.x > width - 50) {
      this.x -= 1;
      this.character.changeAnimation("floating");
      this.character.position.x -= 1;
      drawSprite(this.character);
    }
    if (this.x < 31) {
      this.character.position.x += 20;
    } else if (this.x > width - 31) {
      this.character.position.x -= 20;
    }
  }

  this.punch = function() {
    this.character.changeAnimation("punch");
    drawSprite(this.character);
  }

  this.reduceHealth = function(enemy) {
    this.health -= 10;
    if (this.x > enemy.x) 
      enemy.move(-15);
    else if (this.x < enemy.x) 
      enemy.move(15);
    }
  
  this.winningPlayer = function(player_value) {
    if (player_value == player1 && this.health < 1) {
      score.player2[0] += 1;
      simpleStorage.set("winner", "player 2");
      saveScore("player2");
    } else if (player_value == player2 && this.health < 1) {
      score.player1[0] += 1;
      simpleStorage.set("winner", "player 1");
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
    if (this.health == 0) {}
  }
  this.resetHealth = function() {
    this.health = 100;
  }

  function saveScore(key) {
    if (key == "player1") {
      simpleStorage.set(key, score.player1);
      player_dead = true;
    } else if (key == "player2") {
      simpleStorage.set(key, score.player2);
      player_dead = true;
    }
  }

}
