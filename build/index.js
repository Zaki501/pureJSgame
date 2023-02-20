"use strict";
const REFRESH_SPEED = 10;
const CANVAS = document.getElementById("myCanvas");
const CTX = CANVAS.getContext("2d");
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (CANVAS.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function drawPaddle() {
    CTX === null || CTX === void 0 ? void 0 : CTX.beginPath();
    CTX === null || CTX === void 0 ? void 0 : CTX.rect(paddleX, (CANVAS.height - paddleHeight - 200), paddleWidth, paddleHeight);
    CTX ? (CTX.fillStyle = "#0095DD") : null;
    CTX === null || CTX === void 0 ? void 0 : CTX.fill();
    CTX === null || CTX === void 0 ? void 0 : CTX.closePath();
}
function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}
class Ball {
    constructor(radius, point, displacement, colour) {
        this.point = point;
        this.radius = radius;
        this.displacement = displacement;
        this.colour = colour;
        this.speed = this.calculate_speed();
        Ball.list.push(this);
    }
    update_point() {
        const [x, y] = this.point;
        const [dx, dy] = this.displacement;
        const r = this.radius;
        let new_x;
        let new_y;
        if (x + dx + r > CANVAS.width) {
            new_x = CANVAS.width - Math.abs(x + dx - r - CANVAS.width);
            this.displacement[0] = -this.displacement[0];
        }
        else if (x + dx < r) {
            new_x = Math.abs(x - dx);
            this.displacement[0] = -this.displacement[0];
        }
        else {
            new_x = this.point[0] + this.displacement[0];
        }
        if (y + dy + r > CANVAS.height) {
            new_y = CANVAS.height - Math.abs(y + dy - r - CANVAS.height);
            this.displacement[1] = -this.displacement[1];
        }
        else if (y + dy < r) {
            new_y = Math.abs(y - dy);
            this.displacement[1] = -this.displacement[1];
        }
        else {
            new_y = this.point[1] + this.displacement[1];
        }
        const new_point = [new_x, new_y];
        this.point = new_point;
        return;
    }
    draw(ctx) {
        ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
        ctx === null || ctx === void 0 ? void 0 : ctx.arc(this.point[0], this.point[1], this.radius, 0, Math.PI * 2);
        ctx ? (ctx.fillStyle = this.colour) : null;
        ctx === null || ctx === void 0 ? void 0 : ctx.fill();
        ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
        return;
    }
    calculate_speed() {
        return 0;
    }
}
Ball.list = [];
function draw() {
    CTX === null || CTX === void 0 ? void 0 : CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    a1.draw(CTX);
    a1.update_point();
    a2.draw(CTX);
    a2.update_point();
    if (rightPressed) {
        paddleX = Math.min(paddleX + 7, CANVAS.width - paddleWidth);
    }
    else if (leftPressed) {
        paddleX = Math.max(paddleX - 7, 0);
    }
    drawPaddle();
}
const a1 = new Ball(10, [62, 43], [2, -2], "#0095DD");
const a2 = new Ball(10, [423, 432], [-5, 5], "#FF00DD");
console.log(Ball.list);
setInterval(draw, REFRESH_SPEED);
