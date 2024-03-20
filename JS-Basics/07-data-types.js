// 1. String
let favCoffee = 'Mocha'; // or "Mocha" or `Mocha`

let smth = '121324';
let itemName = 'Mouse';



// 2. Number -> floating numbers & absolute numbers
let favCoffeePrice = 4.00
let itemPrice = 16,99;

let age = 25;
let itemQuantity = 5; 

console.log(itmePrice); // will get 16.99
console.log(itemQuanitity); // will get 5
console.log(typeof favCoffee); // string



// 3. boolean
let b1 = true;
let b2 = false;
let isThereMocha = true;
let isItRainingToday = false;



//4. undefined - a variable declared but not assigned with any value
let favBook;
console.log(favBook); // this will come out as undefined



// 5. Null
let middleName = null; 
console.log(middleName); // null
console.log(typeof middleName) // object



// 6. bgint     // this was added with ES6

let num1 = 123455678908787878787; // number is so big the output doesnt fit all of the numbers
let num2 = 4443546345382468376476n; // you need to add an "n" to fit the entire number if its too big
let num3 = bigInt(123455678908787878787n) // or use "bigInt" + "n" to show whole number if its too big to fit
console.log(num2 + 1n);
console.log(num3);



// 7. Symbol

let star = Symbol('*');
console.log(star); 



// typeof operator
console.log(typeof 5); // number
console.log(typeof 5n); // bigint
console.log(typeof true); // boolean
console.log(typeof !false); // boolean
console.log(typeof (3 == 3 && 5 != 5));// boolean - false
console.log(typeof 3 == 3 && 5 != 5);// false
console.log(typeof '123'); // string
console.log(typeof ''); // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined




