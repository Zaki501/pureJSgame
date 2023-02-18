// https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball

const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;

const dx = 2;
const dy = -2;

function draw(): void {
  // drawing code
  ctx?.clearRect(0, 0, canvas.width, canvas.height);
  ctx?.beginPath();
  ctx?.arc(x, y, 10, 0, Math.PI * 2);
  ctx ? ctx.fillStyle = "#0095DD" : null;
  ctx?.fill();
  ctx?.closePath();

  x += dx;
  y += dy;
}


setInterval(draw, 10);

// ctx?.beginPath(); // Optional Chaining
// ctx?.rect(20, 40, 20, 20);
// ctx!.fillStyle = "#FF0000";
// ctx?.fill();
// ctx?.closePath();

// ctx?.beginPath();
// ctx?.arc(240, 160, 20, 0, Math.PI * 2, false);
// ctx!.fillStyle = "green";
// ctx?.fill();
// ctx?.closePath();

// ctx?.beginPath();
// ctx?.rect(160, 10, 100, 40);
// ctx!.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx?.stroke();
// ctx?.closePath();
