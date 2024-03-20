const {generateRandomNumber} = require('../utilities/MathHelper.js')
let i = 1, j = 1;

while(i === 10) { // false
    console.log('This is while loop block');
    i++
} // ouputs nothing because it is false

do {
    console.log('This is do-while loop block');
    j++
} while(j === 10);


while(i <= 3) { // true
    console.log('This is while loop block');
    i++
} // ouputs the string prompt 3 times beacuse it is true

do {
    console.log('This is do-while loop block');
    j++
} while(j <= 10); // outputs the string prompt 10 times because it is true




console.log('\n--------------------------------------------------');






// Phone pin (these examples are more complex. Dont really need to understand this now as this is a future topic)
const setPassword =  1234;
let generatedCode;
let attempt = 0;

const generatedPins = [];

do {
    // enter passcode
    generatedCode = generateRandomNumber(1000, 9999);
    if(!generatedPins.includes(generatedCode)) generatedPins.push(generatedCode);
    
    attempt++;
} while(setPassword !== generatedCode);

console.log('We found the pin after ' + attempt + ' times!');
console.log('We generated ' + generatedPins.length + ' unique pins!');


console.log('\n--------------------------------------------------');

// future more complex method (doest really want us to understand this yet but its just an example)
do {
    // enter passcode
    generatedCode = generateRandomNumber(1000, 9999);
    attempt++;

    if(attempt === 10) {
        console.log('This is the 10th time you entered the pin wrong. Your phone is blocked for 90 seconds!');
        setTimeout(() => {

        }, 10000);
    }
    else if(attempt === 15) {
        console.log('This is the 15th time you entered the pin wrong. Your phone is blocked for 90 seconds!');
        setTimeout(() => {

        }, 60000);
    }
    else if (attempt === 20) {
        console.log('Your phone is blocked!');
    }
} while(setPassword !== generatedCode);

console.log(`We found the pin after ${attempt} times!`);


console.log('\n--------------------------------------------------');






// Number guessing program
const gameNumber = 4;
let guessedNumber;
let counter = 0;
let found = true;

do {
    guessedNumber = generateRandomNumber(1, 10);
    counter++;

    if(counter === 5) {
        console.log('You could not find the number after 5 times! GAME OVER LOSER!!!');
        found = false;
        break;
    }
} while(guessedNumber !== gameNumber);

if(found) {
    let timeOrTimes = counter === 1 ? 'time' : 'times';
    console.log(`The number is found after ${counter} ${timeOrTimes}!`);
}






console.log('\n--------------------------------------------------');


// Generate an even number between 1 and 10
// calculate how many attempts it takes to generate it

/ 1. do-while

let att = 0;
let rNum; // undefined 

do{
    rNum = generateRandomNumber(1, 10);
    att++;
} while(rNum % 2 !== 0);

console.log(`We found an even number after ${att} time/s which is ${rNum}`); 


// 2. while 

let att1 = 0;
let rNum1; // undefined 

while(true) {
    rNum1 = generateRandomNumber(1, 10);
    att1++;

    if(rNum1 % 2 === 0) break;
}

console.log(`We found an even number after ${att1} time/s which is ${rNum1}`); 


// 3. for loop
let att2 = 0;
let rNum2; // undefined 

for( ; ; ) {
    rNum2 = generateRandomNumber(1, 10);
    att2++;

    if(rNum2 % 2 === 0) break;
}

console.log(`We found an even number after ${att2} time/s which is ${rNum2}`); 