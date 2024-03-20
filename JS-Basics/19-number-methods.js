console.log(1 + 2); // 3


// toString() - > method is used for coercion (converting a number to a string) example here:
console.log(1 + (2).toString()); // 12
//or
let num = 2;
console.log(1 + num.toString()); // 12



// toFixed() - > rounding the numbers decimal side for up to given argument (the number passed )
console.log(120000 / 52); // 2307.6923076923076
console.log(120000 / 26); // 4615.384615384615

console.log((120000 / 52).toFixed(2)); // 2307.69
console.log((120000 / 26).toFixed(2)); // 4615.38

console.log((35.49).toFixed(1)); // 35.5



// toPrecision() - > how many digits you want to see on either side of the decimal
console.log((1.2345).toPrecision(3)); // 1.23
console.log((123.45).toPrecision(3)); // 123
console.log((123.99).toPrecision(3)); // 124

console.log((10).toPrecision(5)); // from left to right give me 5 digits. output would be 10.000
console.log((123).toPrecision(5)); // 123.00



// Converting other data values into numbers ( we use either Number(), parseInt(), parseFloat() )
/* Converting Variable Numbers:

Number() - returns a number converted from its argument
parseFloat() - parses its argument and returns a floating number
parseInt() - parses its argument and returns a whole number
*/

let num1 = '10';
let num2 = '10.5';
console.log(num1 + 5);
console.log(num2 + 5);

// Number()
console.log(Number(num1) + 5); // 15
console.log(Number(num2) + 5); // 15.5

// parseInt()
console.log(parseInt(num1) + 5); // 15
console.log(parseInt(num2) + 5); // 15

//parseFloat()
console.log(parseFloat(num1) + 5); // 15
console.log(parseFloat(num2) + 5); // 15.5




// -9007199254740991 - SAFE Integer - 9007199254740991


console.log(Number.isInteger('Hello')); // False
console.log(Number.isInteger(true)); // False
console.log(Number.isInteger(undefined)); // False
console.log(Number.isInteger(57)); // True
console.log(Number.isInteger(1232.2322)); // false

console.log(Number.isSafeInteger(0)); // true
console.log(Number.isSafeInteger(9007199254740991)); // true


