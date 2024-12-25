const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
// draw rectangle
function drawRectangle(p, color){
    ctx.beginPath();
    ctx.moveTo(p[0].x,p[0].y);
    ctx.lineTo(p[1].x,p[1].y);
    ctx.lineTo(p[2].x,p[2].y);
    ctx.lineTo(p[3].x, p[3].y);
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();


}

// initial flag coordinates

const flagCoordinates = [
    {x:0, y: 0},
    {x: 640, y: 0}, 
    {x: 640, y: 480},
    {x: 0, y: 480}
  ];
const flagBorderColor = "black";

drawRectangle(flagCoordinates, flagBorderColor);

// Draw the stripes
const stripeHeight = 480 / 13; // The height of each stripe
const stripeColors = ["#B22234", "white"]; // Colors for the stripes

for (let i = 0; i < 13; i++) {
    const color = stripeColors[i % 2]; // Alternate between red and white
    ctx.fillStyle = color;
    ctx.fillRect(0, i * stripeHeight, 640, stripeHeight); // Fill rectangle for each stripe
}

// union coordinates

const unionCoordinates = [
  {x: 0, y: 0},
  {x: 265, y: 0},
  {x: 265, y: 265},
  {x:0, y: 265}
];
const unionCoordinatesColor = "blue";

// drawRectangle(unionCoordinates, unionCoordinatesColor);
ctx.fillStyle = "#3C3B6E";
ctx.fillRect(0, 0, 265, 265);


