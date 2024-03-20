/*
English Exam
Passing score is 60 or above

We will write  aprogram to check if we pass the exam or failed

60 or above -> PASS
else -> FAIL
*/

let exam_score = 60;

if(exam_score > 59) {
    console.log('PASS')
}
else {
    console.log('FAIL')
}

// or >= (greater or equal)
let exam_score = 60;

if(exam_score >= 59) {
    console.log('PASS')
}
else {
    console.log('FAIL')
}


// or 

let exam_score = 60;

if(exam_score < 60) {
    console.log('FAIL');
}
else {
    console.log('PASS');
}



// omit (remove) the curly braces (only works when there is one line.)
if(exam_score < 60) console.log('FAIL');
else console.log('PASS');




/* Retirement age is 65

We wrill write a prgram to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET REITED
else -> YOU CANNOT GET RETIRED!!!!
*/

let age = 65;

if(age >= 65) {
    console.log('YOU CAN GET RETIRED')
}
else {
    console.log('YOU CANNOT GET RETIRED')
}

let fname = 'John';
let first = false

if(first) {
    console.log(fname.at(0));
}
else {
    console.log(fname.at(-1));
}