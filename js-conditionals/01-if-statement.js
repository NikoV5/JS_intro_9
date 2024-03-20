
// if statement is true

let condition = true;

if(condition) {
    console.log('I AM HERE');
}

if(true) {
    console.log('Plan A');
}

if(2 === 2) {
    console.log('Plan A');
}

if(1) {
    console.log('Plan A');
}

if(Infinity) {
    console.log('Plan A');
}


// if statement is false

let condition = false;

if(condition) {
    console.log('I AM HERE');
}

if(false) {
    console.log('Plan A');
}

if(2 === '2') {
    console.log('Plan A');
}

if(0) {
    console.log('Plan A');
}

// Anything that is true will output the text, anything false will output nothing



let weather = 37;

if(weather > 65) {
    console.log('Nice weather');
}

if(!true) {
    console.log('NICEEE');
}
    // !true means not true


    if(!(2 == '2' && !false)) {
        console.log('Hello');
    }