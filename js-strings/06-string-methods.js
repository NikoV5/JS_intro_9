// indexes of substring or characters


// indexOf() method
// indexes start with 0 
let company = 'TechGlobal';
company.charAt(4); // G
company.indexOf('G'); // 4
company.indexOf('l'); // 5

console.log(company.charAt(4)); // G
console.log(company.indexOf('G')); // 4
console.log(company.indexOf('l')); // 5

'aaa'.indexOf('a'); // 0
'aaa'.lastIndexOf('a'); // 2

company.indexOf('Tech'); // 0 
company.lastIndexOf('Tech'); // 0 
company.indexOf('Global'); // 4
company.lastIndexOf('Global'); // 4

// What if you tell it to index a letter that isnt in the actual string
company.indexOf('x'); // -1 - if you ask it to index a letter that isnt in the string, it will always be -1
company.lastIndexOf('x'); // -1 - if you ask it to index a letter that isnt in the string, it will always be -1

/* 
indexOf()
TASK: used to get the FIRST occurrence (index) of the matching substring
RETURN: It returns the found index of the substring as a number
        It returns -1 if the substring is not found within the original string
ARGUMENTS: It takes a substring to search within the original string
CHANGE ORIGINAL VALUE: Does not change the original value
STATIC or NON-STATIC: NON-STATIC 
*/

/* 
lastIndexOf()
TASK: used to get the LAST occurrence (index) of the matching substring
RETURN: It returns the found index of the substring as a number
        It returns -1 if the substring is not found within the original string
ARGUMENTS: It takes a substring to search within the original string
CHANGE ORIGINAL VALUE: Does not change the original value
STATIC or NON-STATIC: NON-STATIC 
*/





let day = 'Sunday';
// check if the day includes 'Sun'
console.log(day.includes('Sun')); // true
// The old method of doing it(the one above is better its just people out of habit still use the bottom one)
console.log(day.indexOf('Sun')); // 0 (0 meants its true. Indexes start with 0 and not 1 so that means that 'Sun' is in the string. if it wasnt, it would be -1)





// search() method:
let sentence = 'I go back to back';
console.log(sentence.indexOf('back')); // 5 (its pulling the first 'back' from the sentence)
console.log(sentence.lastIndexOf('back')); // 13 (because we are using LAST index, it is pulling up the second 'back' in the sentence)
console.log(sentence.search('back')); // 5 (if there are two of the same words in the same sentence, search will always find the first so in this case its the 1st 'back' in the sentence)
