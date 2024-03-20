// Replacing some characters or substrings within a string

let str = 'I like apples and pineapple';

let strReplaced = str.replace('apple', 'orange'); // replaces apple with orange
let strReplacedAll = str.replaceAll('apple', 'orange'); // will replace the word apple with orange amongst the entire string even if apple is apart of another word such as pine'apple'

console.log(str); // 'I like apple and pineapple'
console.log(strReplaced); // 'I like orange and pineapple'
console.log(strReplacedAll); // 'I like orange and pineorange'


/*
TASK: used to replace an occurance of a substring within the original string
RETURN: it returns a new string with the replaced values
ARGUMENTS: takes two arguments; target(substring to be replaced) and source: is the new value
CHANGE ORIGINAL VALUE: It does not change original string values
STATIC OR NON-STATIC: non-static

The difference between replace() and repalceAll():
replace() - replaces the first occurance
replaceAll() - replaces all the occurances
*/


let word = 'Hello World';
console.log(word.replace('Hi', 'xxx')); // 'Hello world'
console.log(word.replace(' ', '###')); // 'Hello###world'
console.log(word.replace('l', '$')); // 'He$lo world'
console.log(word.replaceAll('l', '$')); // 'He$lo wor$d'