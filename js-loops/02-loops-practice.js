const {generateRandomNumber} = require('../utilities/MathHelper.js')

//Output the numbers from 100 to 0 (both inclusive) -> 100 99 98 97 96

/*
start: 100
end: 0
update: --
*/

for(let i = 100; i >= 0; i--) {
    console.log(i);
} // if it is increasing numbers you use i++. if you are decreasing numbers you use i--



// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8
/*
start: 0
end: 50
update: +2
*/

// the worst way
for(let i = 0; i <= 50; i += 2) {
    console.log(i);
}

// or (the better more dynamic way. AN OKAY WAY):
for(let i = 0; i <= 50; i++) {
    if(i % 2 === 0)
    console.log(i);
}

// or (also the better more dynamic way. THE BEST WAY):
for(let i = 0; i <= 25; i++) {
    console.log(i * 2);
}




// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 ... 50
for(let i = 0; i <= 50; i++) {
    if(i % 5 === 0)
    console.log(i);
}

// or 
for(let i = 0; i <= 10; i++) {
    console.log(i * 5);
}



// Find the sum of numbers from 1 to 5 (both inclusive) -> 15
let sum = 0;

for(let i = 1; i <= 5; i++) { // sum = 0, i = 1
    sum += i; // sum += 2;
}
console.log(sum); // 15



// Find the sum of numbers from 10 to 15 (both inclusive) -> 75
let result = 0;

for(let i = 10; i <= 15; i++) {
    result += i; 
}
console.log(result);





// Output each character from TechGlobal School -> T e c h G l o b a l   S c h o o l
let school = 'TechGlobal School';

for(let i = 0; i <= 16; i++) {
    console.log(school[i]);
} // Works, but IS NOT DYNAMIC 



// The better, DYNAMIC method:
for(let i = 0; i <= school.length - 1; i++) { // or i < school.length
    console.log(school[i]);
}





// count the total occurences of letter o in TechGlobal School -> 3
let school1 = 'TechGlobal School'
let countO = 0;
for(let i = 0; i <= school1.length - 1; i++) { 
    if(school1[i].toLowerCase() === 'o') countO++;     
}
console.log(countO);




// Output all of the odd numbers from 1 to random Number (both inclusive) -> 1 3 5 7 9.... random
let randomNumber = generateRandomNumber(10, 20);
console.log(`random number is ${randomNumber}`);


for(let i = 1; i <= randomNumber; i++) {
    if(i % 2 != 0)
    console.log(i);
}




console.log('\n--------------------------------');
/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclsuive) in ascending order

r1  r2
7,  5   -> 5 6 7
4,  8   -> 4 5 6 7 8
5,  5   ->
*/

let r1 = generateRandomNumber(1, 10);
let r2 = generateRandomNumber(1, 10);
console.log(`First random number is ${r1}`);
console.log(`Second random number is ${r2}`);


for(let i = Math.min(r1, r2); i <= Math.max(r1, r2); i++) {
    console.log(i);
}



console.log('\n--------------------------------');

/*
Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/

let ran = generateRandomNumber(1, 10);

console.log('Random number is =', ran);

let result1 = 1;

for(let i = 1; i <= ran; i++) {
    result1 *= i;
}

console.log(result1);

console.log('\n--------------------------------');



// Infinite never ending loop
for( ; ; ) {
    console.log('TechGlobal Infinite times');
}