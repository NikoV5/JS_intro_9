
const numbers = [-5, 0, 5, 10, 23, -10];

// Find if some of these numbers are divisible by 5 ->
console.log(numbers.some(el => el % 5 === 0)); // true
// Another method
console.log(numbers.filter(el => el % 5 === 0).length > 0); // true



// Check if every element is positive -> false

console.log(numbers.every(el => el > 0)); // false
console.log(numbers.filter(el => el > 0).length === numbers.length); // false



// Check if every element is negative -> true
console.log(numbers.some(el => el < 0)); // true
console.log(numbers.filter(el => el < 0).length < 0); // false




