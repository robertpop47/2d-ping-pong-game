import { gameOver} from './index.js'
import { canvas, ctx } from './canvas.js'
import { paddleWidth, paddleX, initPaddleX } from './paddle.js'

export let x = canvas.width/2;
export let y = canvas.height-30;

let dx = 2;
let dy = -2;

export var lives = 3;

const ballRadius = 10;

export const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
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
            lives--;
            if(!lives) 
                gameOver();
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                initPaddleX();
            }
        }
    }
    x += dx;
    y += dy;
}

export const reverse = () => {
    dy=-dy;
}