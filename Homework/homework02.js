// Task 1
let str1 = 5;
let str2 = 2;

console.log(`The sum of 5 and 2 is = ${str1 + str2}`);
console.log(`The product of 5 and 2 is = ${str1 * str2}`);
console.log(`The division of 5 and 2 is = ${str1 / str2}`);
console.log(`The subtraction of 5 and 2 is = ${str1 - str2}`);
console.log(`The remainder of 5 and 2 is = ${str1 % str2}`);
console.log(`The exponention of 5 and 2 is = ${str1 ** str2}`);



// task 2
let s1 = 200;
let s2 = -50;

console.log(`The greatest value is = ${Math.max(s1, s2)}`);
console.log(`The smallest value is = ${Math.min(s1, s2)}`);
console.log(`The average value is = ${(s1 + s2) / 2}`); 
console.log(`The absolute difference is = ${Math.abs(s1 - s2)}`); // ??



// Task 3
let r1 = Math.floor(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
let r2 = Math.floor(Math.floor(Math.random() * (50 - 1 + 1)) + 1);

console.log(`The absolute difference between numbers is = ${Math.abs(r1 - r2)}`);



// Task 4
let random1 = Math.floor(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
let random2 = Math.floor(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
let random3 = Math.floor(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
let random4 = Math.floor(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
let random5 = Math.floor(Math.floor(Math.random() * (50 - 1 + 1)) + 1);

console.log(random1, random2, random3, random4, random5);

console.log(`The max value = ${Math.max(random1, random2, random3, random4, random5)}`);
console.log(`The min value = ${Math.min(random1, random2, random3, random4, random5)}`);



// Task 5
let randomNumber1 = Math.floor(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
let randomNumber2 = Math.floor(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
let randomNumber3 = Math.floor(Math.floor(Math.random() * (100 - 50 + 1)) + 50);


console.log(`The number 1 = ${randomNumber1}`);
console.log(`The number 2 = ${randomNumber2}`);
console.log(`The number 3 = ${randomNumber3}`);

console.log(`The sum of numbers is = ${randomNumber1 + randomNumber2 + randomNumber3}`);



// Task 6
let randomNum1 = Math.floor(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
let randomNum2 = Math.floor(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
let randomNum3 = Math.floor(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

console.log(25 <= randomNum1);
console.log(25 <= randomNum2);
console.log(25 <= randomNum3);



// Task 7 [Not DYNAMIC]
let name = 'David';

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name[4]}`);
console.log(`The first three characters in the name is = ${name[0]}${name[1]}${name[2]}`);
console.log(`The last three characters in the name is = ${name[2]}${name[3]}${name[4]}`);

// I wasnt sure if you wanted this last task to be dynamic or not but since it didnt say anything this is how I did it. Let me know if that was correct!



// Task 7 [DYNAMIC] (as it was supposed to be)

let name = 'David';

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name[name.length - 1]}`);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`); // use slice instead of substring b/c slice is the new way of doing it, substring is old and wont get updated anymore
console.log(`The last 3 characters in the name are = ${name.slice(name.length - 3)}`);