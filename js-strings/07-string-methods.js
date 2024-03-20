// trimming

console.log(' Registry ' === ' Registry'); // false
console.log(' Registry '.trim() === 'Registry'); // true


let greeting = '    Good Morning    ';

console.log(greeting); // '     Good Morning    '

console.log(greeting.trimStart()); // 'Good Morning '
console.log(greeting.trimEnd()); // '   Good Morning'
console.log(greeting.trim()); // 'Good Morning'

console.log('Hello'.trim()); // 'Hello'


/*
TASK: Used to remove extra spaces before and after your actual string
RETURN: They return a new string without extra spaces
ARGUMENT: No arguments
CHANGE ORIGINAL VALUE: Does not change the original value
STATIC or NON-STATIC: non-static
*/

