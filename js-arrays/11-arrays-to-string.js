
const objects = [ 'Mouse', 'Computer', 'Remote' ];

const numbers = [ 10, 15, 20, 25 ];


// string() method
let stringObjects = objects.toString();
let stringNumbers = numbers.toString();

console.log(objects); // [ 'Mouse', 'Computer', 'Remote' ]
console.log(numbers); // [ 10, 15, 20, 25 ]


console.log(stringObjects); // Mouse,Computer,Remote
console.log(stringNumbers); // 10,15,20,25



console.log('\n-----------------------------------------')
// join()method

let stringObjects2 = objects.join(' | ');
let stringNumbers2 = numbers.join(' --- ');

console.log(stringObjects2); // Mouse | Computer | Remote
console.log(stringNumbers2); // 10 --- 15 --- 20 --- 25
