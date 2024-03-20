
const numbers = [3, 4, 7, 3, 2, 2, 7];




// Find the sum of the numbers that has an even index -> 3 + 7 + 2 + 7 = 19
console.log('\n--------Sum of elements that have even indexes-----------\n');

let sumEvenIndexes = 0;

for(let i = 0; i < numbers.length; i++) { // 0
    if(i % 2 === 0) sumEvenIndexes += numbers[i];
}
console.log(sumEvenIndexes);





// Find the multiplication of numbers that have odd indexes -> 4 * 3 * 2 = 24
console.log('\n--------multiplication of elements that have odd indexes-----------\n');

let productOddIndexes = 1;
for(let i = 0; i < numbers.length; i++) {
    if(i % 2 !== 0) productOddIndexes *= numbers[i];
}
console.log(productOddIndexes);







/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/
console.log('\n--------Create 2 arays that stores numbers below-----------\n');

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];

console.log(arr1);
console.log(arr2);

const arr3 = [];

for(let i = 0; i < arr1.length; i++) {
    arr3. push(arr1[i] * arr2[i]) 
}

console.log(arr3);




// If one array is bigger then the other
const array1 = [ 5, 8 ];
const array2 = [ 9, 3, 5, 1, 0 ];

// [ 45, 24, 5, 1, 0 ]

const array3 = [];
const shortLength = Math.min(array1.length, array2.length)

/* 
instead of doing Math.min, you can do these methods as well: 

const shortArray = array1.length < array2.length ? array1 : array2;
const longArray = array1.length > array2.length ? array1 : array2;
*/

for(let i = 0; i < shortLength; i++) {
    array3. push(array1[i] * array2[i]) 

}
console.log(array3);











const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];

// Put together all of these elements from a1, a2, a3 in descending order -> [10, 9, 7, 5, 4, 3, 3, 1, 0]

/*
1. create a new array and store all of the elements into it
2. sort this new array in a descending order

*/

// one method for step 1
//const allNumbers = a1.concat(a2, a3);

// 2nd method for step 1
//const allNumbers = [...a1, ...a2, ...a3];

// 3rd method for step 1
//const allNumbers = [] (then you loops)


// Method we chose
const allNumbers = [...a1, ...a2, ...a3];

allNumbers.sort((a, b) => b - a);

console.log(allNumbers);











const nums = [-1, 1, 3, 0, 2, 6, 8];
// Please find the first even number from the array -> 0

let firstEven;

for(let i = 0; i <= nums.length; i++) {
    if(nums[i] % 2 === 0) {
        console.log(nums[i]);
        break;
    }
}

// or

for(const number of nums) {
    if(number % 2 === 0) {
        firstEven = number;
        break; 
    }
}
console.log(firstEven);



// Please find the biggest odd number from the array -> 3

let biggestOdd; 

for(const number of nums) {
    if(number % 2 !== 0 && (biggestOdd === undefined || number > biggestOdd)) {
        biggestOdd = number;
    }
}
console.log(biggestOdd);





//