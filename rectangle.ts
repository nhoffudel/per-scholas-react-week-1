function Rectangle(a: number, b: number): void {
    console.log("Length = " + a);
    console.log("width = " + b);
    console.log("Area = " + (a*b));
    console.log("Perimeter = " + (2 * (a + b)));
}
console.log(Rectangle(4,5));