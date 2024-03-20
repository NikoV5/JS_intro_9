/* generate a random number between 5 and 10 both inclusive
5, 6, 7, 8
*/

console.log(Math.random() * 4); // 
console.log(Math.random() * 4); // 
console.log(Math.random() * 4); // 
console.log(Math.random() * 4); // 
console.log(Math.random() * 4); // 

console.log(Math.floor(Math.random() * 4)); // random number between 0 an 3 both inclusive
console.log(Math.floor(Math.random() * 4)); // random number between 0 an 3 both inclusive
console.log(Math.floor(Math.random() * 4)); // random number between 0 an 3 both inclusive
console.log(Math.floor(Math.random() * 4)); // random number between 0 an 3 both inclusive

console.log(Math.floor(Math.random() * 4) + 5); // random number between 5 and 8 both inclusive

for(let i =1; i <= 1000; i++) {
    console.log(Math.floor(Math.random() * 4) + 5)
}

console.log(Math.floor(Math.random() * (267 - 123 + 1)) + 123);




