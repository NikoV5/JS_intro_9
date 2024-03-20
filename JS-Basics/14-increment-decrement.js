// these are ++ or -- and used to increase or decrease number by 1

let n1 = 10, n2 = 10, n3 = 10, n4 = 10;

console.log(n1++); // 10 -> variable++ is known as post-increment 
console.log(++n2); // 11 -> ++variable is known as pre-increment 

console.log(n1); // 11
console.log(n2); // 11

for(let num = 1; num <= 100; num++) {
    console.log(num);
} // counts you number from 1-100 when you output the statement


console.log(n3--); // 10 -> post incrememnet so it doesnt change
console.log(--n4); // 9 -> pre incremement so it does change

console.log(n3); // 9
console.log(n4); // 9


let number = 5;
console.log(number++ * 10);
console.log(++number * 10);


let number = 5;
number++; // 5
--number; // 5
number *= 2; // 10
console.log(++number ** 2); // 121 (when ++ is in the front, you add 1. so the 10 + 1 = 11 then * 11 =  121)





