"use strict";
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
const dx = 2;
const dy = -2;
function draw() {
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx ? ctx.fillStyle = "#0095DD" : null;
    ctx === null || ctx === void 0 ? void 0 : ctx.fill();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
    x += dx;
    y += dy;
}
setInterval(draw, 10);
