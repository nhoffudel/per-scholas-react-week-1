//Credit to Michael Maderich
const canvas = <HTMLCanvasElement> document.getElementById("my-canvas");
canvas.width = window.innerWidth; canvas.height = window.innerHeight*.7;
const ctx = canvas.getContext("2d");
clearCanvas();
drawBackground();
function clearCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);    // Clear the canvas
    drawBackground();
}
function drawBackground() {
    drawRectangle(0,canvas.height-20,canvas.width,20, 'green');
    drawRectangle(0,0,canvas.width,canvas.height-20, '#E6FFFF');
    // Draw sun
    drawCircle(canvas.width, 0, 200, 'yellow');
    ctx.strokeRect(0,0,canvas.width, canvas.height);    // Outline the canvas
}
/**
 * Draws a rectangle with upper-left corner at (x,y) and specified width and height
 * @param x 
 * @param y 
 * @param width 
 * @param height 
 */
function drawRectangle(x:number, y:number, width:number, height:number color:string) {
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
function drawTriangle(x:number, y:number, base:number, height:number) {
    ctx.beginPath();
    ctx.moveTo(x, y);           // Lower-left vertex
    ctx.lineTo(x+base, y);      // Across to bottom-right vertex
    ctx.lineTo(x+base/2, height);   // Top midpoint
    ctx.fillStyle = "#663300";//'brown';
    ctx.fill();
}
/**
 * Draws a circle with center (x,y) and specified radius and color
 * @param x 
 * @param y 
 * @param radius 
 * @param color String color value (hex, rgb, valid names ('red'), etc)
 */
 function drawCircle(x:number, y:number, radius:number, color:string) {
    if (radius < 0) radius *= -1;
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
    let height = Number( (<HTMLInputElement> document.getElementById("height")).value);
    let width = Number( (<HTMLInputElement> document.getElementById("width")).value);
    let xPos = Number( (<HTMLInputElement> document.getElementById("xPos")).value);
    // Make yPos relative to lower horizontal axis instead of upper
    let yPos = canvas.height - height - Number( (<HTMLInputElement> document.getElementById("yPos")).value);
    if (Number.isNaN(height) || Number.isNaN(width) || Number.isNaN(xPos) || Number.isNaN(yPos)) {
        alert("Please use only valid positive integers!");
        return;
    }
    drawRectangle(xPos, yPos, width, height, '#0043AD');       // Draw base
    drawTriangle(xPos-width/10, yPos, width*1.2, yPos-height/2); // Draw roof
    // Draw circle windows
    drawCircle(xPos + width / 4, yPos + height / 4, width / 10, '#E6FFFF');
    drawCircle(xPos + (3* width / 4), yPos + (3 * height / 4), width / 10, '#E6FFFF');
    drawCircle(xPos + width / 4, yPos + (3 * height / 4), width / 10, '#E6FFFF');
    drawCircle(xPos + (3* width / 4), yPos + height / 4, width / 10, '#E6FFFF');
    drawRectangle(xPos + (width - width / 5) / 2, yPos + (height - height / 3), width/5, height/3, 'red'); // Draw door
}

}