import {canvas, ctx} from './canvas.js';

const paddleHeight = 10;
export const paddleWidth = 75;

export let paddleX = (canvas.width-paddleWidth)/2;
export const initPaddleX = () => {
    paddleX = (canvas.width-paddleWidth)/2;
}

let rightPressed = false;
let leftPressed = false;

const keyDownHandler = e => {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

const keyUpHandler = e => {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth/2;
    }
}

export const drawPaddle = () => {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#483D8B";
    ctx.fill();
    ctx.closePath();
}

export const updatePaddlePosition = () => {
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);