/*
write a function which takes a number and return true if the 
number is even or return false if hte number is odd

isEven(4) -> true
isEven(3) -> false
isEven(0) -> true

EVEN: number is divisable by 2      -> number % 2 === 0
ODD: number is not divisible by 2   -> number % 2 !== 0 
*/

function isEven(num) {
    return (num % 2 ===0);

}
console.log(isEven(4)); //  true
console.log(isEven(0)); // true
console.log(isEven(3)); // false
console.log(isEven(-2)); // true






/*
write a function which takes a number and return true if the 
number is odd or return false if the number is even

isEven(4) -> false
isEven(3) -> true
isEven(0) -> false

EVEN: number is divisable by 2      -> number % 2 === 0
ODD: number is not divisible by 2   -> number % 2 !== 0 
*/

function isOdd(num) {
    return num % 2 !== 0;

}
console.log(isOdd(3)); // true
console.log(isOdd(4)); // false
console.log(isOdd(-3)); // false
console.log(isOdd(0)); // false







/*
write a function named initials which takes 2 arguments as fname and lname and return intitials

*/

function initials(fname, lname) {
    return `${fname[0]}.${lname[0]}.`;


}

console.log(initials('Niko', 'Vourtsis'));


    // or


function initials(fname, lname) {
    return fname.charAt(0) + '.' + lname.charAt(0) + '.';
}

console.log(initials('Niko', 'Vourtsis'));



/*
Write a function named inits which takes a fullname and return initials

inits('John Doe')   -> 'JD'
inits('Adam Smith') -> 'AS'
*/

function inits(fullname) {
    return fullname [0] + fullname[fullname.indexOf(' ') + 1];
};
console.log(inits('Niko Vourtsis'));
console.log(inits('John Doe'));

