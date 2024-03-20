// Padding

let str = 'ABC';


// padStart() method

str.padStart(10, '#');
console.log(str.padStart(10, '#')); // '#######ABC'
console.log(str.padStart(5, '#')); // '##ABC'

console.log(str.padStart(4, '$$$')); // '$ABC'



// padEnd() method

console.log(str.padEnd(4, '$$$')); // 'ABC$'
console.log(str.padEnd(2, '$$')); // 'ABC'

console.log(str.padEnd(-10, '$$')); // 'ABC'



// repeat() method

let greeting = 'Hello';
console.log(greeting.repeat(3)); // 'HelloHelloHello'


let well = 'Well';
console.log(well.repeat(5)); // 'WellWellWellWellWell'