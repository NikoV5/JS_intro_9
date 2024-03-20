/*
Find the sum, subtraction, multiplcation, division and remainder of these 2 numbers.
*/
let num1 = 6;
let num2 = 4;
console.log('The sum is = ' + (num1 + num2)); // 10
console.log('the subtraction is = ' + (num1 - num2)); // 2
console.log('the multiplication is = ' + (num1 * num2)); // 24
console.log('the division is = ' + (num1 / num2)); // 1.5
console.log('the remainder is = ' + (num1 % num2)); // 2


// Preferred way - ES6 feature
let num1 = 6;
let num2 = 4;
console.log(`The sum is = ${num1 + num2}`); // 10
console.log(`The subtraction is = ${num1 - num2}`); //  2
console.log(`The multiplication is = ${num1 * num2}`); //  24
console.log(`The division is = ${num1 / num2}`); // 1.5
console.log(`The remainder is = ${num1 % num2}`); // 2





/*
Asssume that you are given a rectangle with width = 5 and height = 8

Calculate the area and perimeter of the rectangle

area = width * height
perimeter = 2 * width + 2 * height
perimeter = 2 * (width + height)
*/

let width = 5;
let height = 8;

console.log(`The area = ${width * height}`);
console.log(`The perimeter = ${2 * (width + height)}`);






/*
An annual average salary for na SDET in hte United States is 120k. 
Write a program that calculates and pprints the 
monthly and bi-weekly and weekly avergae amount that an SDET makes in the united states

Annual average salary = $120,000.00
1 year =  12 months
1 year = 52 weeks
Bi - weekly = every other week 26 payments
*/

let salary = 120000;

console.log(`Annual average salary = $${salary}`);
console.log(`Monthly salary = $${salary / 12}`);
console.log(`Bi-weekly salary = $${salary / 26}`);
console.log(`Weekly salary = $${salary / 52}`);





