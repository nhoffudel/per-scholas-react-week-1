var canvas = document.getElementById("my-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * .7;
var ctx = canvas.getContext("2d");
clearCanvas();
drawBackground();
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawBackground();
}
function drawBackground() {
    drawRectangle(0, canvas.height - 20, canvas.width, 20, 'green');
    drawRectangle(0, 0, canvas.width, canvas.height - 20, '#E6FFFF');
    // Draw sun
    drawCircle(canvas.width, 0, 200, 'yellow');
    ctx.strokeRect(0, 0, canvas.width, canvas.height); // Outline the canvas
}
/**
 * Draws a rectangle with upper-left corner at (x,y) and specified width and height
 * @param x
 * @param y
 * @param width
 * @param height
 */
function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}
/**
 * Draws an equilateral triangle with lower-left vertex (x,y)
 * and specified base and height
 * @param x
 * @param y
 * @param base
 * @param height
 */
function drawTriangle(x, y, base, height) {
    ctx.beginPath();
    ctx.moveTo(x, y); // Lower-left vertex
    ctx.lineTo(x + base, y); // Across to bottom-right vertex
    ctx.lineTo(x + base / 2, height); // Top midpoint
    ctx.fillStyle = "#663300"; //'brown';
    ctx.fill();
}
/**
 * Draws a circle with center (x,y) and specified radius and color
 * @param x
 * @param y
 * @param radius
 * @param color String color value (hex, rgb, valid names ('red'), etc)
 */
function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    // center (x,y), radius, startAngle, endAngle, anticlockwise?
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();
}
function drawHouse() {
    //    clearCanvas();
    var height = Number(document.getElementById("height").value);
    var width = Number(document.getElementById("width").value);
    var xPos = Number(document.getElementById("xPos").value);
    // Make yPos relative to lower horizontal axis instead of upper
    var yPos = canvas.height - height - Number(document.getElementById("yPos").value);
    if (Number.isNaN(height) || Number.isNaN(width) || Number.isNaN(xPos) || Number.isNaN(yPos)) {
        alert("Please use only valid positive integers!");
        return;
    }
    drawRectangle(xPos, yPos, width, height, '#0043AD'); // Draw base
    drawTriangle(xPos - width / 10, yPos, width * 1.2, yPos - height / 2); // Draw roof
    // Draw circle windows
    drawCircle(xPos + width / 4, yPos + width / 4, width / 10, '#E6FFFF');
}
