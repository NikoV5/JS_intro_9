

const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander' ];

/* 
if you were to sort the names alphanbetically (ASCII Upper case always goes first):

Adam, Jane, John, alex, alexander

*/

console.log(names.sort());
console.log(names);





const numbers = [ 5, 2, 22, 1, 100];
// This will sort numbers alphabetically based on ASCII:
numbers.sort();
console.log(numbers); // [1, 100, 2, 22, 5]




const nums = [ 5, 2, 22, 1, 100];

nums.sort((a, b) => a - b); // used to sort smallest number to biggest


console.log(nums); // [ 1, 2, 5, 22, 100 ] sorted by smallest to biggest

nums.sort((a, b) => b - a); // sorting biggest to smallest

console.log(nums); // [[ 100, 22, 5, 2, 1 ] sorted by biggest to smallest


console.log('\n---------------------------------------------------');