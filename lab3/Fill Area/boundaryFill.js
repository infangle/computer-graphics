// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d", { willReadFrequently: true });

// ctx.fillStyle = "rgba(255,255,255,1)";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.strokeStyle = "rgba(0, 0, 255, 1)";
// ctx.lineWidth = 3;
// ctx.strokeRect(100, 200, 60, 60);

// function isSameColor(color1, color2) {
//   return (
//     color1[0] === color2[0] &&
//     color1[1] === color2[1] &&
//     color1[2] === color2[2] &&
//     color1[3] === color2[3]
//   );
// }

// function getPixel(ctx, x, y) {
//   const imageData = ctx.getImageData(x, y, 1, 1);
//   return imageData.data;
// }

// function boundaryFill(ctx, x, y, fillColor, boundaryColor) {
//   const pixel = getPixel(ctx, x, y);

//   if (!isSameColor(pixel, boundaryColor) && !isSameColor(pixel, fillColor)) {
//     ctx.fillRect(x, y, 1, 1);

//     setTimeout(() => {
//       // TODO: fill using 4 connected
//     }, 0);
//   }
// }

// const fillColor = [0, 0, 255, 255];
// ctx.fillStyle = `rgba(${fillColor[0]}, ${fillColor[1]}, ${fillColor[2]}, ${fillColor[3] / 255})`;

// boundaryFill(ctx, 110, 250, [0, 0, 255, 255], [0, 0, 255, 255]);
