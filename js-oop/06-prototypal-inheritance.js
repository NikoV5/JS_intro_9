
// BEFORE ES6:


const person = {
    eat() {
        console.log('EAT function executes!');
    },
    sleep() {
        console.log('SLEEP function executes!');  
    }
}


const programmer = {
    code() {
        console.log('CODE function executes!');   
    },
    __proto__: person
}


const singer = {
    sing() {
        console.log('SING function executes!');    
    },
    __proto__: person
}


// child object can accesss parent prototype object functions

person.eat(); // EAT function executes!
person.sleep(); // SLEEP function executes!
programmer.code(); // CODE function executes!

singer.sing(); // SING function executes!

programmer.sleep(); // SLEEP function executes!
programmer.eat(); // EAT function executes!


singer.sleep(); // SLEEP function executes!
singer.eat(); // EAT function executes!


// parent prototype object cannot access the child functions
// person.code(); // TypeErrror: person.code is not a function
// person.sing(); // TypeErrror: person.sing is not a function


// Prototype chaining
console.log(singer.__proto__); // { eat: [Function: eat], sleep: [Function: sleep] } which is person
console.log(programmer.__proto__); // { eat: [Function: eat], sleep: [Function: sleep] } -> which is person
console.log(person.__proto__); // [Object: null prototype] {}
console.log(singer.__proto__.__proto__); // [Object: null prototype] {} -> prototype chain



const tester = {
    __proto__: programmer,
    test() {
        console.log('TEST function executes!');
    }
}

tester.eat(); // EAT function executes!
tester.sleep(); // SLEEP function executes!
tester.code(); // CODE function executes!
tester.test(); // TEST function executes!


console.log(tester.__proto__); // { code: [Function: code] } -> which is person
console.log(tester.__proto__.__proto__); // { eat: [Function: eat], sleep: [Function: sleep] } -> which is person
console.log(tester.__proto__.__proto__.__proto__); // [Object: null prototype] {} -> which is person






console.log('\n-------------------------------------------------\n');
