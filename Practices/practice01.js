// group work 1


// Task 1
let r1 = Math.floor(Math.random() * (50-0+1)) + 0;

console.log(`The random number * 5 = ${r1 * 5}`);

// Task 2
let r1 = Math.floor(Math.random() * (10-1+1)) + 1;
let r2 = Math.floor(Math.random() * (10-1+1)) + 1;
console.log(r1,r2); // Test data

console.log(`Min number = ${Math.min(r1,r2)}`);
console.log(`Max number = ${Math.max(r1,r2)}`);
console.log(`Difference = ${Math.abs(r1 - r2)}`);


// Task 3

let r1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(`The random number % 10 = ${r1 % 10}`);

// Task 4
let r1 = Math.floor(Math.random() * (10-1+1)) + 1;
let r2 = Math.floor(Math.random() * (10-1+1)) + 1;
let r3 = Math.floor(Math.random() * (10-1+1)) + 1;
let r4 = Math.floor(Math.random() * (10-1+1)) + 1;
let r5 = Math.floor(Math.random() * (10-1+1)) + 1;
console.log(r1,r2,r3,r4,r5); // Test data
console.log(r1 * 5 + r2 * 4 + r3 * 3 + r4 * 2 + r5 * 1);

// Task 5
let r1 = Math.floor(Math.random() * (25-1+1)) + 1;
let r2 = Math.floor(Math.random() * (50-26+1)) + 26;
let r3 = Math.floor(Math.random() * (75-51+1)) + 51;
let r4 = Math.floor(Math.random() * (100-76+1)) + 76;

console.log(r1,r2,r3,r4); // Test data


let rMax = (Math.max(r1,r2,r3,r4));
let rMin = (Math.min(r1,r2,r3,r4));
let rDiff = (Math.abs(rMax - rMin));
let rDiff23 = (Math.abs(r2 - r3));

let avg = (r1 + r2 + r3 + r4 / 4); 

console.log(`Difference of max and min = ` + rDiff);
console.log(`Difference of second and third = ` + rDiff23);
console.log(`Average of all = ` + avg);