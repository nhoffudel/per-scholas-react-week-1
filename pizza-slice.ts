/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
  -
 |_|
​
 */
function drawSmallPizzaSlice() {
    return (" _\n|_|");
}
​
/**
 * Draw a length 1 width 2 pizza slice 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 
 */
​
function drawMediumPizzaSlice() {}
​
/**
 * 
 * Draws a length 2 width 2 pizza slice 
 * @returns {string}
 * Length 2 width 2:
  
   --
  | .|
  |__|
​
 */
function drawLargePizzaSlice() {}
​
/**
 * @param {string} sliceSize
 *                 size of slice
 * @return {string}
 *         Returns a string which is a "drawing" of the slice. Examples
 * 
 * Small - Length 1 width 1:
   -
  |_|
​
 * 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 
​
 * 
 * Large - Length 2 width 2:
 * 
  
   --
  | .|
  |__|
​
 */
function drawAnyPizzaSlice() {}
​
console.log(drawSmallPizzaSlice());
// console.log(drawMediumPizzaSlice());
// console.log(drawLargePizzaSlice());
// console.log(drawAnyPizzaSlice());