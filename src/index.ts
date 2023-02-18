const REFRESH_SPEED = 10;
const CANVAS = <HTMLCanvasElement>document.getElementById("myCanvas");
const CTX = CANVAS.getContext("2d");

type Point = [x: number, y: number];
type Displacement = [dx: number, dy: number];
type Dimensions = [width: number, height: number];

interface Circle {
  radius: number;
  point: Point;
}

interface Block {
  dimensions: Dimensions;
  point: Point;
}

class Ball implements Circle {
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
  }
  update_point(): void {
    const new_point = <Point>[
      this.point[0] + this.displacement[0],
      this.point[1] + this.displacement[1],
    ];
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
  CTX?.clearRect(0, 0, CANVAS.width, CANVAS.height);
  abc.draw(CTX);
  abc.update_point();
}

const abc = new Ball(10, <Point>[100, 100], <Displacement>[2, -2], "#0095DD");
setInterval(draw, REFRESH_SPEED);
