// Task 1 COMPLETED

let num = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(num);

if(num <= 50){
    console.log(num, 'is in the 1st half');
}else{
    console.log(num, 'is in the 2nd half');
}

if(num <= 25) console.log(num, 'is in the 1st quarter');
else if(num <= 50)  console.log(num, 'is in the 2nd quarter');
else if(num <= 75)  console.log(num, 'is in the 3rd quarter');
else console.log(num, 'is in the 4th quarter');


// task 2 COMPLETED

const {generateRandomNumber} = require('../utilities/MathHelper');
let num1 = generateRandomNumber(1, 100);
let num2 = generateRandomNumber(1, 100);
let num3 = generateRandomNumber(1, 100);

function areAllEven(num1, num2, num3) {
    return num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0;
}
console.log(num1, num2, num3);
let result = areAllEven(num1, num2, num3);
console.log(result);




// task 3
const {CharacterHelper} = require('../utilities/CharacterHelper.js');
let singelChar = ' ';

if(CharacterHelper.isDigit(singelChar)) console.log(`"${singelChar}" is a digit`);
if(CharacterHelper.isLetter(singelChar)) console.log(`"${singelChar}" is a letter`);
if(CharacterHelper.isSpace(singelChar)) console.log(`"${singelChar}" is a whitespase`);
else console.log(`"${singelChar}" is a special character`);



// task 4 COMPLETED

function hasBlue(str) {
    const lowerCaseStr = str.toLowerCase();
    
    return lowerCaseStr.includes('blue');
}

console.log(hasBlue("Hello World"));          
console.log(hasBlue("Javabluescript"));       
console.log(hasBlue("Tech Blue Global"));    
console.log(hasBlue("1234"));                 
console.log(hasBlue("ABLUEC"));               




// task 5 COMPLETED

function startT(string) {
    const lowerCaseStr = string.toLowerCase(); 

    return lowerCaseStr[0].includes('t');
}

console.log(startT('Hello World'));
console.log(startT("typescript"));
console.log(startT("TechGlobal"));
console.log(startT("1234"));
console.log(startT("ABC"));

