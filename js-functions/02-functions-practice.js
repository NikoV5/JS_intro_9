/* 
Create a funtion named as sayHi which outputs "Hi" to the console when invoked.
If the function does not RETURN something, then you cannot store the result of the function 
in a variable.
*/

function sayHi() {
    console.log('Hi');
}

sayHi(); // 'Hi'
sayHi(); // 'Hi'




/*
Write a function named as sayHello which takes a name (string) and outputs 
'Hello {name}
*/

function sayHello(name) {
    console.log(`Hello ${name}!`);

}

sayHello('Niko');
sayHello('John');




/*
Write a function named as greet which takes two arguments as name and 
greeting and outputs '${greeting,name}
*/

function greet(name, greeting){
    console.log(`${greeting}, ${name}!`);
}

greet(`Niko`, `Good Morning`);
greet(`John`, `Good Morning`);




// Return methods:

/*
Write a function named as sum which takes two number arguments and returns their sum

sum(3, 5) ->  8
sum(4, 7) ->  11
sum(-2, 3) ->  1
*/

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(7, 10));
console.log(sum(-4, 12));
console.log(sum(7, 10) * 5);






/*
Write a function named as product which takes 3 number arguments and returns their product

product(2, 4, 5) -> 40
*/

function product(num1, num2, num3) {
    return num1 * num2 * num3;
}
console.log(product(4, 1, 2));



// Loop function ( we will learn more of this late on )
function nTimesStr(str, num) {
    for(let i = 1; i <= num; i++) {
        console.log(str);
    }
}


nTimesStr('TechGlobal', 4);



function king(name, n) {
    console.log(`${name} the ${n}th!`);
}

king('Henry', 5); // Henry the 5th!