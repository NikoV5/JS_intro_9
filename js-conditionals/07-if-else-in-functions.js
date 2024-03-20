// Practicing if-else statements with functions



/* Task 1
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
*/
function startE(fname) {
    if(fname[0] === 'E' || fname[0] === 'e') {
        return true;
    }
    else {
        return false;
    }
}
console.log(startE('Niko')); // false
console.log(startE('Emily')); // true
console.log(startE('emily')); // true




/* Task 2:
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)       -> true
divisible5(99)       -> false
*/

// 0 is divisible by any number

function divisible5(num) {
    if(num % 5 === 0) {
        return true
    }
    else {
        return false;
    }
}

//or 

function divisible5(num) {
    if(num % 5 === 0) return true;
    return false;
}

console.log(divisible5(7)); // false
console.log(divisible5(0)); // true
console.log(divisible5(10)); // true
console.log(divisible5(99));  // false





/* Task 3
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/
function foobar(number1) {
    if (number1 % 5 === 0 && number1 % 7 === 0) return 'foobar'
    else if(number1 % 5 === 0) return 'foo';
    else if (number1 % 7 === 0) return 'bar';

    return number1
}


console.log(foobar(35));
console.log(foobar(70));
console.log(foobar(0));
console.log(foobar(5));
console.log(foobar(21));
console.log(foobar(8));
console.log(foobar(11));










/* Task 4
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/
function getGrade(num) { // 1 and 100
    if(num < 0 || num > 100) throw Error('INVALID input!!! The score cannot be ' + num); // wasnt apart of the task but still good to know

    if(num >= 90 && num <= 100) return 'A';
    else if(num >= 80 && num <= 89) return 'B';
    else if(num >= 70 && num <= 79) return 'C';
    else if(num >= 60 && num <= 69) return 'D';

    return 'F';
}

console.log(getGrade(101)); // A
console.log(getGrade(90)); // A
console.log(getGrade(83)); // B
console.log(getGrade(76)); // C
console.log(getGrade(62)); // D
console.log(getGrade(54)); // F


