import { gameOver } from './score_lives.js'
import { canvas, ctx } from './canvas.js'
import { paddleWidth, paddleX } from './paddle.js'

const ballRadius = 10;
export let x = canvas.width/2;
export let y = canvas.height-30;
export let dx = 2;
export let dy = -2;

export const setX = (val) => {
    x=val;
}
export const setY = (val) => {
    y=val;
}
export const setDx = (val) => {
    dx=val;
}
export const setDy = (val) => {
    dy=val;
}

export const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

export const updateBallPosition = () => {
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            gameOver();
        }
    }

    x += dx;
    y += dy;
    
}
