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
        const new_point = [
            new_x,
            new_y,
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
    a1.draw(CTX);
    a1.update_point();
    a2.draw(CTX);
    a2.update_point();
}
const a1 = new Ball(10, [62, 43], [5, -5], "#0095DD");
const a2 = new Ball(10, [423, 432], [-5, 5], "#FF00DD");
setInterval(draw, REFRESH_SPEED);
