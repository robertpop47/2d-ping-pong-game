import {ctx, canvas, clearCanvas} from './canvas.js';
import {drawBall, updateBallPosition, lives} from './ball.js'
import {drawPaddle,updatePaddlePosition} from './paddle.js';
import {drawBricks, collisionDetection, score} from './bricks.js';

let restart=document.querySelector('#restart')

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
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

}

var interval = setInterval(draw, 10);

export const win = () => {
    ctx.font = "24px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("YOU WIN, CONGRATULATIONS!", 60, 180);
    clearInterval(interval);
    restart.style.display='block';
}

export const gameOver = () => {
    ctx.font = "24px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("GAME OVER!", 160, 180);
    clearInterval(interval); 
    restart.style.display='block';
}
let restartGame=()=>{
    document.location.reload();
    restart.style.display = 'none';
}

restart.addEventListener('click',restartGame)