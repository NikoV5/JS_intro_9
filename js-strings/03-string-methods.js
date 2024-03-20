// Extracting characters from the string
let company = 'TechGlobal';

// property access to extract chracters 
let firstChar = company[0];
let lastChar = company[company.length - 1];

let secondChar = company[1];
let secondLastChar = company[company.length - 2];

console.log(firstChar); // 'T'
console.log(lastChar); // 'l'
console.log(secondChar); // 'e'
console.log(secondLastChar); // 'a'


// Tricky part with property access 
console.log(company[-1]); // undefined
console.log(company[10]); // undefined
console.log(company[0.99]); // undefined


// charAt() Methods
console.log(company.charAt(0)); // 'T'
console.log(company.charAt(company.length - 1)); // 'l'


// Tricky part with charAt() method 
console.log(company.charAt(-1)); // '' 
console.log(company.charAt(10)); // ''
console.log(company.charAt(0.99)); // ask about this and why it actually inputs a character

/*
TASK: used to retreieve/get a character at specified index
RETURN: yes, it returns a single character as a string
NOTE: if the index is not valid, it returns empty string ('')
ARGUMENTS: yes, it takes a number (index) as an argument
STATIC or NON-STATIC: Non static
CHANGE OR NO CHANGE: does not change the original value
*/


/*
Assume you are given a string, 
pring first and last characters of hte string concatenated
*/


let word = 'Happy';

// two ways to solve
console.log(word[0] + word[word.length - 1]);
console.log(word.charAt(0) + word.charAt(word.length - 1));


// at() method

let city = 'Chicago'
console.log(city.at(0)); 
console.log(city.at(1));
console.log(city.at(city.length - 1));
console.log(city.at(city.length - 2));


// Tricky part with at() method
console.log(city.at(-1)); // 'o'
console.log(city.at(-2)); // 'g'
console.log(city.at(7)); // undefined

//advantage of using at() method -> retrieving last characters is easier compared to [] charAt() methods

let obj = 'Computer';

// get the last 2 characters -> 'er'

console.log([obj.length - 2] + obj[obj.length - 1]);
console.log(obj.charAt(obj.length - 2) + obj.charAt(obj.length - 1));
console.log(obj.at(-2) + obj.at(-1)); // 'er'



/*
TASK: used to retreieve/get a character at specified index
RETURN: yes, it returns a single character as a string
NOTE: If ht eindex is negative, it goes backward and returns a character at the found index
if the index is greater than or equals length of the string, then it returns undefined
ARGUMENTS: yes, it takes a number (index) as an argument
STATIC or NON-STATIC: Non static
CHANGE OR NO CHANGE: does not change the original value
*/



// charCodeAt() (we will never use this)
let country = 'Italy';
console.log(country[0]); // I
console.log(country.at(0)); // I
console.log(country.charAt(0)); // I
console.log(country.charAt(0)); // I
console.log(country.charCodeAt(0)); // 73
console.log(country.charCodeAt(1)); // 116
console.log(country.charCodeAt(100)); // NaN
console.log(country.charCodeAt(-1)); // NaN


/*
TASK: used to retreieve/get character's ASCII decimal representation at specified index
RETURN: yes, it returns ASCII decimal representation as a number
NOTE: If ht eindex is non valid, it returns NaN
ARGUMENTS: yes, it takes a number (index) as an argument
STATIC or NON-STATIC: Non static (because we called it with a variable and not a string)
CHANGE OR NO CHANGE: does not change the original value
*/




