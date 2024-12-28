const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });

// DDA Algorithm for line drawing
function drawLine(x1, y1, x2, y2, color) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let steps = Math.max(Math.abs(dx), Math.abs(dy));
    let xIncrement = dx / steps;
    let yIncrement = dy / steps;
    let x = x1;
    let y = y1;

    for (let i = 0; i <= steps; i++) {
        ctx.fillStyle = color;
        ctx.fillRect(Math.round(x), Math.round(y), 1, 1); // Draw pixel
        x += xIncrement;
        y += yIncrement;
    }
}

// Initial flag coordinates and border color
const flagCoordinates = [
    { x: 0, y: 0 },
    { x: 800, y: 0 },
    { x: 800, y: 600 },
    { x: 0, y: 600 }
];
const flagBorderColor = "black";

// Draw the flag border using DDA (all four sides)
drawLine(flagCoordinates[0].x, flagCoordinates[0].y, flagCoordinates[1].x, flagCoordinates[1].y, flagBorderColor);
drawLine(flagCoordinates[1].x, flagCoordinates[1].y, flagCoordinates[2].x, flagCoordinates[2].y, flagBorderColor);
drawLine(flagCoordinates[2].x, flagCoordinates[2].y, flagCoordinates[3].x, flagCoordinates[3].y, flagBorderColor);
drawLine(flagCoordinates[3].x, flagCoordinates[3].y, flagCoordinates[0].x, flagCoordinates[0].y, flagBorderColor);

// Draw the stripes
const stripeHeight = 600 / 13; // The height of each stripe
const stripeColors = ["#B22234", "white"]; // Colors for the stripes

for (let i = 0; i < 13; i++) {
    const color = stripeColors[i % 2]; // Alternate between red and white
    
    // Outline the stripe
    drawLine(0, i * stripeHeight, 800, i * stripeHeight, flagBorderColor); // Top border of the stripe
    drawLine(0, (i + 1) * stripeHeight, 800, (i + 1) * stripeHeight, flagBorderColor); // Bottom border of the stripe
    
    // Fill the stripe using standard fillRect
    ctx.fillStyle = color;
    ctx.fillRect(1, i * stripeHeight + 1, 798, stripeHeight - 1); // Fill the stripe with inset to avoid border
}

// Draw the union
const unionWidth = 245;
const unionHeight = (600 / 13) * 7;
ctx.fillStyle = "#3C3B6E";
ctx.fillRect(1, 1, unionWidth - 1, unionHeight - 1); // Fill the union with inset to avoid border

// Function to draw a star
function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    let rotation = Math.PI / 2 * 3; // Start angle
    let x = cx; // Center x
    let y = cy; // Center y
    let step = Math.PI / spikes; // Angle between points

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rotation) * outerRadius;
        y = cy + Math.sin(rotation) * outerRadius;
        ctx.lineTo(x, y);

        rotation += step;

        x = cx + Math.cos(rotation) * innerRadius;
        y = cy + Math.sin(rotation) * innerRadius;
        ctx.lineTo(x, y);

        rotation += step;
    }

    ctx.lineTo(cx, cy - outerRadius); // Close the star shape
    ctx.closePath();
    ctx.strokeStyle = "white"; // Outline color
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "white"; // Fill color
    ctx.fill();
}

// Draw stars on the union
const starOuterRadius = 10; // Outer radius of the star
const starInnerRadius = 5; // Inner radius of the star
const starOffsetX = 40; // Horizontal spacing between stars
const starOffsetY = 30; // Vertical spacing between stars
const paddingX = 20; // Padding on the left and right for even rows

// Loop to draw the stars in the union
for (let row = 0; row < 10; row++) {
    const numStars = (row % 2 === 0) ? 6 : 5; // 5 stars for even rows, 6 stars for odd rows
    const startX = (row % 2 === 0) ? paddingX : 40; // Add padding for even rows

    for (let col = 0; col < numStars; col++) {
        const x = startX + col * starOffsetX; // X position of the star
        const y = row * starOffsetY + 20; // Y position of the star
        drawStar(x, y, 5, starOuterRadius, starInnerRadius); // Draw the star
    }
}