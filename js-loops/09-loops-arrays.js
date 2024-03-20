
const numbers = [3, 4, 7, 3, 2, 2, 7];

// Find the sum of all numbers      -> 28
// find the average of the numbers  -> 4

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

const average = sum / numbers.length

console.log(`sum = ${sum}`)
console.log(`average of sum = ${average}`)

// or 

let sum1 = 0;

for(const num of numbers) {
    sum1 += num;
}

console.log(sum1);
console.log(sum1 / numbers.length); /// calculating average in the console.log instead of creating a variable because we are only using it here. not anywhere else





// Find the product of all the numbers startfin from the index 3 -> 84

let product = 1;

for(let i = 3; i < numbers.length; i++) {
    product *= numbers[i]
}

console.log(product); // 84






const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];
// Find the sum of the first 3 and last 3 elements -> 31

// nums[0]                 num[1]                      nums[2]
// nums[nums.length -1]    nums[nums.length - 2]       nums[nums.length - 3]


let result = 0;

for(let i = 0; i <= 2; i++) { 
    // result += nums[i] + nums[nums.length - (i + 1)];
    result += nums[i] + nums.at(-i-1);
}

console.log(result); 


result = 0;

for(let i = 0; i < nums.length; i++) {
    if(i <= 2 || i >= nums.length - 3) result += nums[i];
}

console.log(result);


const newArr = [...nums.slice(0, 3), ...nums.slice(-3)];

result = 0;

for(const num of newArr) {
    result += num;
}

console.log(result);