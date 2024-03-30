

const { generateRandomNumber, maxOfArray, minOfArray } = require('./../utils/MathHelper.js');

/*
Genereate five random numbers between 10 and 25 (both inclusive)
then find the min and max of these numbers
*/


let r1 = generateRandomNumber(10, 25);
let r2 = generateRandomNumber(10, 25);
let r3 = generateRandomNumber(10, 25);
let r4 = generateRandomNumber(10, 25);
let r5 = generateRandomNumber(10, 25);


console.log(r1, r2, r3, r4, r5);
console.log('Minimum of the random numbers is = ', minOfArray([ r1, r2, r3, r4, r5 ]))
console.log('Maximum of the random numbers is = ', maxOfArray([ r1, r2, r3, r4, r5 ]))