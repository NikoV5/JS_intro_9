// Task 1 

function makeNegative(num) {
  if(num < 0 || num === 0) return num
  else return -num; 
};

console.log(makeNegative(-10));
console.log(makeNegative(-7));
console.log(makeNegative(0));
console.log(makeNegative(0.45));



// Task 2 

function isSumEvenOrOdd(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  if(sum % 2 === 0) return 'even'
  return 'odd';
}

console.log(isSumEvenOrOdd(0, 1, 4));
console.log(isSumEvenOrOdd(0, -1, -5));
console.log(isSumEvenOrOdd(0, 0, 0));
console.log(isSumEvenOrOdd(7, 1, 9));
console.log(isSumEvenOrOdd(1, 1, 1));




// Task 3 

const decimal2 = arr => {
    return arr.map((num) => {
    return Number(num.toFixed(2));
  })

}

console.log(decimal2([94.356, 8.9752]));		           
console.log(decimal2([76.62, 128.4, 84]));	          
console.log(decimal2([20987, 3.53245, 12.345, 32.9]));	
console.log(decimal2([]));			                      
console.log(decimal2([4.35623, 8.9742]));




// Task 4

function myPow(n1, n2) {
  return n1 ** n2;
};

console.log(myPow(3, 3));
console.log(myPow(10, 1));
console.log(myPow(100, 0));
console.log(myPow(1, 1));
console.log(myPow(4, 2));
console.log(myPow(0, 0));
console.log(myPow(5, 3));



// Task 5

function findLongestWord(str) {
  if(str.trim() === '') return str
  else return str.split(' ').reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  })
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWord("This is a sample string for testing"))
console.log(findLongestWord("One two ten"))
console.log(findLongestWord(""))
console.log(findLongestWord("     "));