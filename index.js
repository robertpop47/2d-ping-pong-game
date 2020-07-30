import {clearCanvas} from './canvas.js'
import {drawBall, updateBallPosition} from './ball.js'
import { drawPaddle, updatePaddlePosition } from './paddle.js'
import { drawBricks, collisionDetection } from './bricks.js'
import { drawScore, drawLives } from './score_lives.js'

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}


function draw() {
    clearCanvas();
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    
    

    updateBallPosition();
    
    updatePaddlePosition();
    requestAnimationFrame(draw);
}

draw();


