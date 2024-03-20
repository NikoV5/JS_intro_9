
const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];




// Count how many positive numbers you have in the array -> 7
console.log('\n---------Count Positives------------\n');

let countP = 0;

for(const number of numbers) {
    if(number > 0) {
        countP++
    }
}
console.log('Positives = ' + countP);

countP = 0

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) countP++
}
console.log('Positives = ' + countP);





// Count how many negatice an neutral numbers you have in the array -> 6
console.log('\n---------Count Negatives and neutral------------\n');

let countNandN = 0;

for(const number of numbers) {
    if(number <= 0) countNandN++
}
console.log('Negatives and neutral = ' + countNandN);





// Count how many even numbers you hvae in the arrray -> 7
console.log('\n---------Count Evens------------\n');

let countEven = 0;

for(const number of numbers) {
    if(number % 2 === 0) countEven++
}
console.log('even numbers = ' + countEven);





// Count how many even numbers but not negartive numbers you hvae in the array -> 5
console.log('\n---------Count Even positive numbers------------\n');

let countEPositive = 0;

for(const number of numbers) {
    if(number % 2 === 0 && number >= 0) countEPositive++
}
console.log('even positive numbers = ' + countEPositive);