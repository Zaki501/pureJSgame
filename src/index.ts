// type definitions?
// press a button, spawn more balls

const REFRESH_SPEED = 10;

const CANVAS = <HTMLCanvasElement>document.getElementById("myCanvas");
const CTX = CANVAS.getContext("2d");

const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (CANVAS.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

type Point = [x: number, y: number];
type Displacement = [dx: number, dy: number];
type Dimensions = [width: number, height: number];

interface Circle {
  radius: number;
  point: Point;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Block {
  dimensions: Dimensions;
  point: Point;
}

function drawPaddle(): void {
  CTX?.beginPath();
  CTX?.rect(
    paddleX,
    CANVAS.height - paddleHeight - 200,
    paddleWidth,
    paddleHeight
  );
  CTX ? (CTX.fillStyle = "#0095DD") : null;
  CTX?.fill();
  CTX?.closePath();
}
function keyDownHandler(e: KeyboardEvent): void {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e: KeyboardEvent): void {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

class Ball implements Circle {
  static list: Array<Ball> = []; // list of all instances -> potential memory leak?
  colour: string;
  speed: number;
  radius: number;
  point: Point;
  displacement: Displacement;

  constructor(
    radius: number,
    point: Point,
    displacement: Displacement,
    colour: string
  ) {
    this.point = point;
    this.radius = radius;
    this.displacement = displacement;
    this.colour = colour;
    this.speed = this.calculate_speed();
    Ball.list.push(this);
  }
  update_point(): void {
    const [x, y] = this.point;
    const [dx, dy] = this.displacement;
    const r = this.radius;

    let new_x;
    let new_y;

    if (x + dx + r > CANVAS.width) {
      new_x = CANVAS.width - Math.abs(x + dx - r - CANVAS.width);
      this.displacement[0] = -this.displacement[0];
    } else if (x + dx < r) {
      new_x = Math.abs(x - dx);
      this.displacement[0] = -this.displacement[0];
    } else {
      new_x = this.point[0] + this.displacement[0];
    }
    if (y + dy + r > CANVAS.height) {
      new_y = CANVAS.height - Math.abs(y + dy - r - CANVAS.height);
      this.displacement[1] = -this.displacement[1];
    } else if (y + dy < r) {
      new_y = Math.abs(y - dy);
      this.displacement[1] = -this.displacement[1];
    } else {
      new_y = this.point[1] + this.displacement[1];
    }

    const new_point = <Point>[new_x, new_y];
    this.point = new_point;
    return;
  }

  draw(ctx: CanvasRenderingContext2D | null): void {
    ctx?.beginPath();
    ctx?.arc(this.point[0], this.point[1], this.radius, 0, Math.PI * 2);
    ctx ? (ctx.fillStyle = this.colour) : null;
    ctx?.fill();
    ctx?.closePath();
    return;
  }
  calculate_speed(): number {
    //todo
    return 0;
  }
}

function draw(): void {
  // Clear screen, prep for re-draw
  CTX?.clearRect(0, 0, CANVAS.width, CANVAS.height);

  // Draw all balls
  a1.draw(CTX);
  a1.update_point();

  a2.draw(CTX);
  a2.update_point();

  // Paddle Movement
  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, CANVAS.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }
  drawPaddle();
}

const a1 = new Ball(10, <Point>[62, 43], <Displacement>[2, -2], "#0095DD");
const a2 = new Ball(10, <Point>[423, 432], <Displacement>[-5, 5], "#FF00DD");
// console.log(Ball.list)
setInterval(draw, REFRESH_SPEED);
