// Changing cases

let day = 'Saturday';

day.toLowerCase(); // make everything lowercase
day.toUpperCase(); // make everything upper case
let dayLower = day.toLowerCase(); 
let dayUpper = day.toUpperCase();

console.log(dayLower); // 'saturday'
console.log(dayUpper);// 'SATURDAY'
console.log(day) // 'Saturday"


/* 
toLowerCase()
TASK: converts all the letters in a string to lower case
RETURN: returns the string back all the upper case letters converted to lower case letters
ARGUMENTS: no arguments
CHANGE ORIGINAL VALUE: Does not change the original value
STATIC or NON STATIC: Theres a variable, so its non static
*/

/* 
toUpperCase()
TASK: converts all the letters in a string to lower case
RETURN: returns the string back all the lower case letters converted to upper case letters
ARGUMENTS: no arguments
CHANGE ORIGINAL VALUE: Does not change the original value
STATIC or NON STATIC: Theres a variable, so its non static
*/


console.log('123%#@# /,.,'.toUpperCase()); // toUpperCase doesnt do anything bc there arent any letters to make upper case
console.log('123%#@# /,.,'.toLowerCase()); // toLowerCase doesnt do anything bc there arent any letters to make lower case



// You can change(replace) the original value by re-assignment 
let name = 'john wick';
name = name.toUpperCase();
console.log(name);


