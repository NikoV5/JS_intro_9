// Searching in strings


let company = 'TechGlobal'





// startsWith() method
company.startsWith('T'); // true
company.startsWith('t'); // false

company.startsWith('Tech'); // true
company.startsWith('TechGlobal'); // true

company.startsWith('Global'); // false


console.log(company.startsWith('Global')); // false
console.log(company.startsWith('Global', 4)); // true (because ur asking if it starts with 'global, after the first 4 characters)

console.log(company.startsWith(''));// true

/*
TASK: Used to check if the string starts with another substring
RETURN: it returns a boolean ( true or false )
ARGUMENTS: yes, takes one or two arguments (substring, substring and position)
STATIC or NON-STATIC: non static (doesnt change the original variable)
*/







// endsWith() method
company.endsWith('Global'); // true
company.endsWith('l'); // true

company.endsWith('al'); // true

console.log(company.endsWith('Global')); // true
console.log(company.endsWith('Tech', 6)); // false

/*
TASK: Used to check if the string starts with another substring
RETURN: it returns a boolean ( true or false )
ARGUMENTS: yes, takes one or two arguments (substring, substring and position)
STATIC or NON-STATIC: non static (doesnt change the original variable)
*/






//includes() method

company.includes('hGl');// true 
company.includes('GL'); // false


/*
TASK: Used to check if the string starts with another substring
RETURN: it returns a boolean ( true or false )
ARGUMENTS: yes, takes one or two arguments (substring, substring and position)
STATIC or NON-STATIC: non static (doesnt change the original variable)
*/






// Search the string for the keys 'Java' in the second half of the string:

console.log('JavaScript is awesome!'.includes('Java')); // true
console.log('JavaScript is awesome!'.includes('Java', 0)); // true
console.log('JavaScript is awesome!'.includes('Java', 11)); // false
