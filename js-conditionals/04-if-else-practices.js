
// importing reusable methods
const {generateRandomNumber} = require('../utilities/MathHelper');

console.log(generateRandomNumber(3, 5));


console.log('\n-------------------------------------------\n')
let randomNumber = generateRandomNumber(1, 9);

if(randomNumber === 7) {
    console.log('I got my gav number');
}
else {
    console.log(`unfortunately, I got ${randomNumber}!`)
}

console.log('\n-------------------------------------------\n')


/* Generate a random number between 1 and 10
print EVEN if the number is EVEN
Print ODD if the number is ODD

5 -> 'ODD'
8 -> 'EVEN'
*/


let randomNum = generateRandomNumber(1, 10);
console.log(randomNum); // just to check and make sure the code works as intended

if(randomNum % 2 === 0) {
    console.log('EVEN')
}
else {
    console.log('ODD')
}


console.log('\n-------------------------------------------\n')


/* 
Generate a random number between 0 and 1 (both inclusive)
Print "The number is ZERO" if the generated number is zero
Print "The number is one" if the generated number is one
*/

let r1 = generateRandomNumber(0, 1);
console.log(r1);
if(r1 === 0) {
    console.log('The number is ZERO')
}
else {
    console.log('The number is ONE')
}


/* Generate a random number between -10 and 10 (both inclusive)
Print "The number is "POSITIVE" if the generated number is more than zero
Print "The number is "NEGATIVE" if the generated number is less than zero
Print "The number is "ZERO" if the generated number is zero
*/

console.log('\n-------------------------------------------\n')


let r2 = generateRandomNumber(-10, 10);

console.log(r2);

if (r2 < 0) {
    console.log('The number is NEGATIVE');
}
else if(r2 > 0) {
    console.log('The number is POSITIVE');
}
else {// hidden condition !(r3 > 0) && !(r3 < 0)
    console.log('The number is "ZERO"')
}



if (r2 > 0) {
    console.log('The number is Positive');

}
else {
        if(r2 < 0) {
            console.log('The number is negative');
        }
        else {
            console.log('The number is Zero');
        }
}

