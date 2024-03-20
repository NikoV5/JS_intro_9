// Group Work 2


// Task 1
function tripleWord(triple) {
    return triple + triple + triple;
}
console.log(tripleWord('Tech'));
console.log(tripleWord('Global'));




// Task 2
function has4(str) {
    return str.length >= 4; 
}
console.log(has4('Tech'));
console.log(has4('Global'));
console.log(has4(''));
console.log(has4('12345'));
console.log(has4('abc'));




//Task 3
function celciusToFarenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}
console.log(celciusToFarenheit(20));
console.log(celciusToFarenheit(25));
console.log(celciusToFarenheit(0));
console.log(celciusToFarenheit(-10));




// Task 4
function kgToPounds(number) {
    let convert = number * 2.2;
    return convert.toFixed(0);
}
console.log(kgToPounds(1));
console.log(kgToPounds(20));
console.log(kgToPounds(75));
console.log(kgToPounds(100));




// Task 5
function rectangleArea(x, y) {
    let area = x * y;
    return area;
}
function rectanglePerimeter(x, y) {
    let perimeter = 2 * (x + y);
    return perimeter;
}
console.log(rectangleArea(5, 4), rectanglePerimeter(5, 4));
console.log(rectangleArea(3, 7), rectanglePerimeter(3, 7));
console.log(rectangleArea(6, 10), rectanglePerimeter(6, 10));




// Task 6
function squareArea(x) {
    let area = x * x;
    return area;
}
function squarePerimeter(x) {
    let perimeter = 4 * x;
    return perimeter;
}
console.log(squareArea(5), squarePerimeter(5));
console.log(squareArea(3), squarePerimeter(3));
console.log(squareArea(6), squarePerimeter(6));
