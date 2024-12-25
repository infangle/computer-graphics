const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
// const ctx = canvas.getContext("2d");

//>   strokeRect(x, y, width, height)
// ctx.strokeStyle = "blue";
// ctx.strokeRect(20, 20, 150, 100);

//>   fillRect(x, y, width, height)
// ctx.fillStyle = "blue";
// ctx.fillRect(50, 0, 100, 100);

// TODO: draw a pixel at 50,50


//>   clearRect(x, y, width, height) -- clear part of the canvas
// ctx.fillRect(45, 45, 60, 60);
// setTimeout(() => {
//   ctx.clearRect(45, 45, 60, 60);
// }, 500);

//>   clearRect(x, y, width, height) -- erasing the whole canvas
// ctx.fillRect(45, 45, 60, 60);
// ctx.fillRect(50, 0, 100, 100);
// ctx.strokeRect(20, 20, 150, 100);
// setTimeout(() => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// }, 1000);




// TODO: Draw a triangle

let p = [
  {x:200, y: 150},
  {x: 300, y: 150}, 
  {x: 250, y: 50}
]
function draw(p, color){
  ctx.beginPath();
  ctx.moveTo(p[0].x,p[0].y);
  ctx.lineTo(p[1].x,p[1].y);
  ctx.lineTo(p[2].x,p[2].y);
  ctx.lineWidth = 3;
  ctx.strokeStyle = color;
  ctx.closePath();
  ctx.stroke();
}
draw(p, "black");
// translation

function map_translate(){
  const tfx = 100;
  const tfy = 0;

  //>   translate(x, y)
  p = p.map((e) => {
    return {
      x: e.x + tfx,
      y: e.y + tfy
    }
  })
}
// draw translation
// map_translate();
// draw(p, "red");

function map_scaling(){
  const sx = 1.5;
  const sy = 1;
  //>   scaling(x, y)
  p = p.map((e) => {
    return {
      x: e.x * sx,
      y: e.y * sy
    }
  })
}
// draw scale
// map_scaling();
// draw(p, "blue");

// scaling with pivot
function map_scaling_with_pivot(){
  let px = 200;
  let py = 150;

  p = p.map((e) => {
    return {
      x: e.x - px,
      y: e.y - py
    }
  })
  map_scaling();
  p = p.map((e) => {
    return {
      x: e.x + px,
      y: e.y + py
    }
  })

}

// draw scale with pivot
// map_scaling_with_pivot();
function map_rotation_with_pivot(){
  const tx = 250;
  const ty = 150;
  const piv = Math.PI//2;

  p = p.map((e) => {
    return {
      x: e.x - tx,
      y: e.y - ty
    }
  })

  p = p.map((e) =>{
    return {
      x: e.x * Math.cos(piv) - e.y * Math.sin(piv),
      y: e.y * Math.sin(piv) + e.y * Math.cos(piv)
    }
  })

  p = p.map((e) => {
    return {
      x: e.x + tx,
      y: e.y + ty
    }
  })

}
map_rotation_with_pivot();
draw(p, "green");


//> arc(x, y, radius, startAngle, endAngle, ?counterclockwise=false) -- radian
// ctx.beginPath();
// ctx.arc(250, 75, 50, 0, Math.PI/2, false);
// ctx.stroke();

// TODO: Draw a circle

//> arc(x, y, radius, startAngle, endAngle, ?counterclockwise=false) -- degree
// function degRad(d) {
//   return d * (Math.PI / 180) - Math.PI / 2;
// }
// ctx.beginPath();
// ctx.arc(100, 75, 50, degRad(0), degRad(90));
// ctx.stroke();

//> ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, ?counterclockwise=false)
// ctx.beginPath();
// ctx.ellipse(100, 100, 50, 100, 0, 0, Math.PI);
// ctx.stroke();

// TODO: Draw a sticky person

//> generate line drawing  using DDA using strokeRect(x,y,1,1 )
// function drawLineDDA(x1, y1, x2, y2) {
//   let dx = x2 - x1;
//   let dy = y2 - y1;
//   let steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
//   let xInc = dx / steps;
//   let yInc = dy / steps;
//   let x = x1;
//   let y = y1;
//   for (let i = 0; i < steps; i++) {
//     x += xInc;
//     y += yInc;
//     ctx.strokeRect(x, y, 0.1, 0.1);
//   }
// }
// drawLineDDA(0, 0, 100, 100);

// generate line drawing  using Bresenham
// function drawLineBresenham(x1, y1, x2, y2) {
//   let dx = x2 - x1;
//   let dy = y2 - y1;
//   let p = 2 * dy - dx;
//   let x = x1;
//   let y = y1;

//   while (x < x2) {
//     if (p >= 0) {
//       y++;
//       p += 2 * dy - 2 * dx;
//     } else {
//       p += 2 * dy;
//     }
//     x++;
//     ctx.strokeRect(x, y, 0.5, 0.5);
//   }
// }
// drawLineBresenham(0, 0, 100, 100);

// generate full circle using Bresenham in 1st octant only
// function drawCircleBresenham(xc, yc, r) {
//   let x = 0;
//   let y = r;
//   let d = 3 - 2 * r;
//   while (x <= y) {
//     ctx.strokeRect(xc + x, yc + y, 0.5, 0.5);
//     if (d < 0) {
//       d += 4 * x + 6;
//     } else {
//       d += 4 * (x - y) + 10;
//       y--;
//     }
//     x++;
//   }
// }
// drawCircleBresenham(100, 100, 50);

// generate full circle using Bresenham in all octants
// function drawCircleBresenham(xc, yc, r) {
//   let x = 0;
//   let y = r;
//   let d = 3 - 2 * r;
//   ctx.strokeStyle = "red";
//   while (x <= y) {
//     ctx.strokeRect(xc + x, yc + y, 0.5, 0.5);
//     ctx.strokeRect(xc - x, yc + y, 0.5, 0.5);
//     ctx.strokeRect(xc + x, yc - y, 0.5, 0.5);
//     ctx.strokeRect(xc - x, yc - y, 0.5, 0.5);
//     ctx.strokeRect(xc + y, yc + x, 0.5, 0.5);
//     ctx.strokeRect(xc - y, yc + x, 0.5, 0.5);
//     ctx.strokeRect(xc + y, yc - x, 0.5, 0.5);
//     ctx.strokeRect(xc - y, yc - x, 0.5, 0.5);
//     if (d < 0) {
//       d += 4 * x + 6;
//     } else {
//       d += 4 * (x - y) + 10;
//       y--;
//     }
//     x++;
//   }
// }
// drawCircleBresenham(100, 100, 50);

// generate full circle using Midpoint in all octants
// function drawCircleMidpoint(xc, yc, r) {
//   let x = 0;
//   let y = r;
//   let d = 1 - r;
//   while (x <= y) {
//     // ctx.strokeRect(xc + x, yc + y, 0.5, 0.5);
//     // ctx.strokeRect(xc - x, yc + y, 0.5, 0.5);
//     // ctx.strokeRect(xc + x, yc - y, 0.5, 0.5);
//     // ctx.strokeRect(xc - x, yc - y, 0.5, 0.5);
//     ctx.strokeRect(xc + y, yc + x, 0.5, 0.5);
//     // ctx.strokeRect(xc - y, yc + x, 0.5, 0.5);
//     // ctx.strokeRect(xc + y, yc - x, 0.5, 0.5);
//     // ctx.strokeRect(xc - y, yc - x, 0.5, 0.5);
//     if (d < 0) {
//       d += 2 * x + 3;
//     } else {
//       d += 2 * (x - y) + 5;
//       y--;
//     }
//     x++;
//   }
// }
// drawCircleMidpoint(100, 100, 100);

// boundaryFill(110, 110, "red", 0);
//
//Scan-Line Polygon Filling Algorithm
// function scanLinePolygonFill(points) {
//   const maxY = Math.max(...points.map((p) => p.y));
//   const minY = Math.min(...points.map((p) => p.y));

//   for (let y = minY; y <= maxY; y++) {
//     const intersections = [];

//     for (let i = 0; i < points.length; i++) {
//       const p1 = points[i];
//       const p2 = points[(i + 1) % points.length];

//       if (p1.y <= y && p2.y >= y) {
//         const m = (p2.y - p1.y) / (p2.x - p1.x);
//         const x = (y - p1.y) / m + p1.x;
//         intersections.push(x);
//       }
//     }

//     intersections.sort((a, b) => a - b);

//     for (let i = 0; i < intersections.length; i += 2) {
//       const x1 = intersections[i];
//       const x2 = intersections[i + 1];

//       for (let x = x1; x <= x2; x++) {
//         ctx.strokeRect(x, y, 0.5, 0.5);
//       }
//     }
//   }
// }
// scanLinePolygonFill([
//   { x: 100, y: 100 },
//   { x: 200, y: 100 },
//   { x: 150, y: 200 },
// ]);
