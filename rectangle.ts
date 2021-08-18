function Rectangle(a: number, b: number): any {
    const rectangle = {length : a, width : b, area : a*b, perimeter : 2 * (a+b)};
    return rectangle;
}
console.log(Rectangle(4,5));