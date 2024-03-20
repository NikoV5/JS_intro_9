// Concatenation
let fname = 'John Wick 4';

// Length property - returns how many characters you have in the string
// If you are only using it once, do this:
fname.length;
console.log(fname.length); // 11

    // or, if you use it more then one time, do this:

let sizeFName = fname.length;
console.log(sizeFName); // 11


// concat() method - > we will never use, but still may be asked if we know the different methods in interview
let lname = 'Wick';

    // or

    // let fullname = `${fname} ${lname}`;
    // let fullname = fname + ' ' + lname;
    // let fullname = fname.concat(' ').concat(lname); // John Wick
let fullname = fname.concat(' ').concat(lname); // John Wick


console.log(String.valueOf(15)); // not something we are going to commonly use


/*
TASK: it combines strings
RETURN: it returns a new string
ARGUMENTS: it takes a string as an argument
CHANGE ORIGINAL VALUE: It does not change original string values
STATIC OR NON-STATIC: non-static

Static vs non-static decision for properties and methods:
    Did you call method or property with a variable?
    Yes -> non-static
    no -> static
*/

Math.max() // static
Math.min() // static
Math.random() // static

let num1 = 5; 




