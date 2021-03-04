# game-project

## Scope 

The game includes:

-   Include an instruction section explaining how to play the game.
-   Ether display a message when the user has won or display the users score after the game has finished.
-   Be styled to perfection!
-   Be hosted online!
-   Your game should include a leaderboard
-   Your game should be 2 player

Bonus content:

-   Your game could be played against the computer...
-   You could include some fancy animations in your game...
-   You could look into HTML5 Audio and include some snazzy sound effects...

## My Game

My game is a street fighter clone with simple graphics, basic movement and combat. The game consists of a home screen, game over screen, leaderboard and a main game screen.

### Technologies

-   P5.js
-   Node.js
-   P5 sound (extension)
-   P5 play (extension)
-   P5 scenemanager (extension)

## How to play

[here for an online version](https://eduardasv.github.io/SpartaGlobal-game-project/)

If you are cloning the repository you will have to set up a local server.

### node.js

1.  Install [node.js](https://nodejs.org/en/download/)
2.  Open the terminal (on windows open cmd on admin) and enter the command:

```
    npm install -g http-server
```
Locate the cloned folder of the repository, on the main folder run the command:
```
    http-server
```
Open a browser then enter `localhost:8080/` inside your browser while the server is running.

## Game instructions

#### All scenes

[ESCAPE] - will exit the window you're on (got to the previous window unless it's the home screen)

#### Home screen

[1] - will start the fight  
[2] - will change the window to the leaderboards scene

#### Fighting scene

##### Player one:

[A] - makes player one go to the left  
[D] - makes player one go to the right    
[G] - makes player one punch   

##### Player two:

[LEFT ARROW] - makes player two go to the left  
[RIGHT ARROW] - makes player two go to the right  
[SHIFT] - makes player two punch
