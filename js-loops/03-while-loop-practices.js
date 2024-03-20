
// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8
/*
start: 0
end: 50
update: +2
*/

// First solution
let i = 0;

while(i <= 50) {
    if(i % 2 === 0) console.log(i)
    i++
}

console.log('The loop is done and i value is', i); // 51


// 2nd solution (not preferred method) this will break if i does not start with zero
i = 0;

while(i <=50) {
    console.log(i);
    i += 2;
}

console.log('The loop is done and i value is', i); // 52


// Third solution (not preferred) will break if it does not start with zero
i = 0;

while(i <= 25) {
    console.log(i * 2);
    i++;
}

console.log('The loop is done and i value is', i); // 26



// Infinite while loops

i = 0;

while(i >= 0) {
    console.log(i);
    i++;
}

while(true) {
    console.log('Hello');
    break; // stoppping it after one so it doesnt go infinitely
}


let count = 1;
while(true) {
    console.log('Hello');
    if(count++ === 5) break; // stoppping it after 5 so it doesnt go infinitely
}



for(let j = 1; j > 0; j++) {
    console.log(j);
    if(j === 25) break;
}


// Count all the even numbers between 1 and 10 (both inclusive) -> 5
// 2 4 6 8 10
/*
PSEUDO CODE
1. Write a loop that will achieve numbers from 1 to 10
2. Check each number if it is even
3. If the number is even, make sure it is counted (you have a counter, so increase by one)
4. If it is not even, just continue with the next number
*/

// for loop
let countEven = 0;

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) countEven++;
}
console.log(countEven); // 5


// While loop
let i = 1;
let count = 0;
while (i <= 10) {
    if (i % 2 === 0) count++;
    i++
}
console.log(count); // 5



// Find sum of the numbers starting from 3 to 7 (both inclusive) -> 3 + 4 + 5 + 6 + 7 -> 25
let i = 3
let result = 0;

while( i <=7 ) {
    result += i;
    i++
}
console.log(result); // 25