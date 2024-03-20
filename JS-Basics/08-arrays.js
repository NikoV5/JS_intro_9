let name = 'John';
console.log(name); // Outputs John
console.log(type of name);// outputs string



// array operation:
const names = ['John', 'Jane', 'Alex', 'max'];
console.log(names); // output will show everyone. john, jane, alex, max



// retreiving an individual element from an [5]array
names[2]
        // or
console.log(names[2]); // output would be jane
console.log(names[0]); // output would be john



// retreive and uppdate max with mark
names[3] = 'Mark';
console.log(names);


const numbers = [10, -3, 25, 67, 99];



// you can get array size with the length property
const numbers = [10, -3, 25, 67, 99, 100.99];
let arraySize = numbers.length;
console.log(arraySize); // output will be 6

/*
Fetch and console log 25, 67, 100.99 with their indexes
*/

console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[5]);
// or
console.log(numbers[2], numbers[3], numbers[5]);


console.log(typeof names);
console.log(typeof numbers);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['John', true, 45]);

console.log(['John', true, 45, ].length)

const arr = ['John', true, 25, undefined, null, 45];

console.log(arr.length); // 6
console.log(arr[0]); // output is john
console.log(arr[5]);

console.log(arr[-1]); // output would be undefined
console.log(arr[6]); //undefined
console.log(arr[7]); //undefined
console.log(arr[1000]); //undefined