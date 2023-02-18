"use strict";
const REFRESH_SPEED = 10;
const CANVAS = document.getElementById("myCanvas");
const CTX = CANVAS.getContext("2d");
class Ball {
    constructor(radius, point, displacement, colour) {
        this.point = point;
        this.radius = radius;
        this.displacement = displacement;
        this.colour = colour;
        this.speed = this.calculate_speed();
    }
    update_point() {
        const new_point = [
            this.point[0] + this.displacement[0],
            this.point[1] + this.displacement[1],
        ];
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
function draw() {
    CTX === null || CTX === void 0 ? void 0 : CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    abc.draw(CTX);
    abc.update_point();
}
const abc = new Ball(10, [100, 100], [2, -2], "#0095DD");
setInterval(draw, REFRESH_SPEED);
