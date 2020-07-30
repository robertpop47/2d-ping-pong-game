import { setPaddleX, paddleWidth } from './paddle.js'
import { canvas, ctx } from './canvas.js'
import { setX, setY, setDx, setDy } from './ball.js'

export let score=0
let lives = 3;

export const setScore = (val) => {
    score=val;
}

export const drawScore = () => {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

export const drawLives = () => {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

export const gameOver = () => {
    lives--;
    if(!lives) {
        alert("GAME OVER");
        document.location.reload();
    }
    else {
        setX(canvas.width/2);
        setY(canvas.height-30);
        setDx(2);
        setDy(-2);
        setPaddleX((canvas.width-paddleWidth)/2);
    }
}
