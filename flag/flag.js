const canvas = document.getElementById("canvas");
canvas.width = 800; // Adjusted width for better proportions
canvas.height = 600; // Adjusted height for better proportions
const ctx = canvas.getContext("2d", { willReadFrequently: true });

// Draw rectangle function
function drawRectangle(p, color) {
    ctx.beginPath();
    ctx.moveTo(p[0].x, p[0].y);
    ctx.lineTo(p[1].x, p[1].y);
    ctx.lineTo(p[2].x, p[2].y);
    ctx.lineTo(p[3].x, p[3].y);
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
}

// Initial flag coordinates
const flagCoordinates = [
    { x: 0, y: 0 },
    { x: 800, y: 0 },
    { x: 800, y: 600 },
    { x: 0, y: 600 }
];
const flagBorderColor = "black";

drawRectangle(flagCoordinates, flagBorderColor);

// Draw the stripes
const stripeHeight = 600 / 13; // The height of each stripe
const stripeColors = ["#B22234", "white"]; // Colors for the stripes

for (let i = 0; i < 13; i++) {
    const color = stripeColors[i % 2]; // Alternate between red and white
    ctx.fillStyle = color;
    ctx.fillRect(0, i * stripeHeight, 800, stripeHeight); // Fill rectangle for each stripe
}

// Union coordinates
const unionWidth = 245;
const unionHeight = (600 / 13) * 7;
ctx.fillStyle = "#3C3B6E";
ctx.fillRect(0, 0, unionWidth, unionHeight);

// Function to draw a star
function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    let rotation = Math.PI / 2 * 3; // Start angle
    let x = cx; // Center x
    let y = cy; // Center y
    let step = Math.PI / spikes; // Angle between points

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
        // Outer point
        x = cx + Math.cos(rotation) * outerRadius;
        y = cy + Math.sin(rotation) * outerRadius;
        ctx.lineTo(x, y);

        rotation += step;

        // Inner point
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
for (let row = 0; row < 9; row++) {
    // Determine the number of stars based on the row index
    const numStars = (row % 2 === 0) ? 6 : 5; // 5 stars for even rows, 6 stars for odd rows

    // Calculate the starting x position based on whether the row is even or odd
    const startX = (row % 2 === 0) ? paddingX : 40; // Add padding for even rows

    for (let col = 0; col < numStars; col++) {
      const x = startX + col * starOffsetX; // X position of the star
      const y = row * starOffsetY + 20; // Y position of the star
        drawStar(x, y, 5, starOuterRadius, starInnerRadius); // Draw the star
    }
}