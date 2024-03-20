
let gender = 'male';

//if(gender === 'male') {
//    fname = 'Alex';
// }
// else {
//    fname = 'Emma';
// }

// Using ternary instead of if-else above
// condition ? true-statement : false-statement:
// gender === 'male' ? fname = 'Alex' : fname = 'Emma';

let fname = gender === 'female' ? 'Emma' : 'Alex';

console.log(fname); // 'Emma'

let number = 1;

number % 2 === 0 ? console.log('EVEN') : console.log('ODD'); // ':' means otherwise. output should be odd because 1 % 2 is odd.



// let num2 = 5; // find if this number is positive or negative

//method we already learned
// if(num2 > 0) {
//    console.log('POSITIVE');
// }
// else if(num2 < 0) {
//     console.log('NEGATIVE');
// }
// else {
//    console.log('ZERO');
// }



// ':' means else     and     '?' means if


let num3 = 5;
let result = num3 > 0 ? 'POSITIVE' : num3 < 0 ? 'NEGATIVE' : 'ZERO';
console.log(result);


/* 

*/ 

// Mood will either be GREAT (70+) or GOOD (< 70)


let mock_score = 70;

mock_score >= 70 ? console.log('GREAT') : console.log('GOOD'); // logging mood without storing it in a container

// or

let mock_score = 70;

let mood = mock_score >= 70 ? 'GREAT' : 'GOOD'; // storing the mood in a variable to be used for the rest of the project

console.log('The mood is', mood);

