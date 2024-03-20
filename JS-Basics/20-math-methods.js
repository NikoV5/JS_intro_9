console.log(Math.PI);

// min() and max() methods
console.log(Math.max(3, 5));
console.log(Math.min(3, 5));

console.log(Math.max(3, 5, 10, 15, 100)); // 100
console.log(Math.min(3, 5, -1, 0, 35)); //  -1

console.log(Math.min(5)); // 5
console.log(Math.min(5, 5)); // 5



// abs() methods (absolute). Will never be negative
console.log(Math.abs(-5)); // 5 
console.log(Math.abs(2 - 5)); // 3 
console.log(Math.abs(10)); // 3 
console.log(Math.abs(10 - 7)); // 3 


// pow()
// method we already know
console.log(2 ** 3); // 8
console.log(5 ** 2); // 25
// or pow() method:
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25



// ceil() - > rounds upwards to the nearest integer (the ceiling)
console.log(Math.ceil(1.49)); // 2
console.log(Math.ceil(1.50)); // 2
console.log(Math.ceil(1.51)); // 2 



// floor() - > rounds downwards to the nearest integer (the floor)
console.log(Math.floor(1.49)); // 1
console.log(Math.floor(1.50)); // 1
console.log(Math.floor(1.51)); // 1




//round() -> rounds to the nearest integer
console.log(Math.round(1.49)); // 1
console.log(Math.round(1.50)); // 2
console.log(Math.round(1.51)); // 2


//trunc() -> returns the integer part of the number
console.log(Math.trunc(1.49)); // 1
console.log(Math.trunc(1.50)); // 1
console.log(Math.trunc(1.51)); // 1

// sqrt() - >
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(49)); // 7
console.log(Math.sqrt(625)); // 25
console.log(Math.sqrt(125)); // 11.180339887498949
console.log(Math.sqrt(5)); // 2.23606797749979

// random() -> returns a random number between 0 and 1 (0 included by 1 excluded)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());



