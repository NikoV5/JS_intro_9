// Task 1 
for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}



// Task 2 
for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0) console.log(i); 
}


// Task 3 
for(let i = 100; i >= 50; i--) {
    if(i % 5 == 0) console.log(i);
}



// Task 4 
for(let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i*i}`);
}



// Task 5
let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);




// Task 6 
let rNum1 = Math.floor(Math.random() * 10) + 1;
console.log(`The random number is ${rNum1}`);

let result = 1;

for (let i = rNum1; i >= 1; i--) {
    result *= i;
}
console.log(result);


  

// Task 7 
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
}

function findNumberDivisibleBy5() {
    let attempts = 0;
    let randomNumber;

    while (true) {
        randomNumber = generateRandomNumber();
        attempts++;
        if (randomNumber % 5 === 0) {
            console.log(`The random number is ${randomNumber} and it took ${attempts} attempt/s to generate it.`);
            break;
        }
    }
}

findNumberDivisibleBy5();




// Task 8 
const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log('Original array =', countries);

let sortedCountries = countries.slice().sort();
console.log("Sorted array =", sortedCountries);




// Task 9 
const cartoonDogs = [ 'Scooby doo', 'Blue', 'Pluto', 'Dino', 'Sparky']

console.log(cartoonDogs);

let hasPluto = false;

for(let i = 0; i < cartoonDogs.length; i++) {
    if(cartoonDogs[i] === 'Pluto') {
        hasPluto = true;
    }
}
console.log(hasPluto);



// Task 10 
const cartoonCats = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael' ];
console.log(cartoonCats.sort());

let hasGarfield = false;
let hasFelix = false;

for (let i = 0; i < cartoonCats.length; i++) {
    if (cartoonCats[i] === 'Garfield') {
        hasGarfield = true;
    }
    if (cartoonCats[i] === 'Felix') {
        hasFelix = true;
    }
}
console.log(hasGarfield && hasFelix);




// Task 11 
const arr1 = [ 10.5, 20.75, 70, 80, 15.75 ];
console.log(arr1);

for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}




// Task 12 
const items = [ 'Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Rule' ];
console.log(items);

let startWithBPCount = 0;

for(let i = 0; i < items.length; i++) {
    if(items[i].charAt(0).toLowerCase() === 'b' || items[i].charAt(0).toLowerCase() === 'p') {
        startWithBPCount++;
    }
}
console.log(`Elements starting with 'B' or 'P' = ${startWithBPCount}`);

let bookAndPenCount = 0;

for(let i = 0; i < items.length; i++) {
    if (items[i].toLowerCase().includes('book') || items[i].toLowerCase().includes('pen')) {
        bookAndPenCount++;
    }

}
console.log(`Elements having "Book" or "pen" = ${bookAndPenCount}`);




// Task 13 
const numbers = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];
console.log(numbers);

let moreThanTen = 0;
let lessThanTen = 0;
let areTen = 0;

for(let i = 0; i <= numbers.length; i++) {
    if(numbers[i] > 10) {
    moreThanTen++
    }
}

for(let i = 0; i <= numbers.length; i++) {
    if(numbers[i] < 10) {
    lessThanTen++
    }
}

for(let i = 0; i <= numbers.length; i++) {
    if(numbers[i] === 10) {
    areTen++
    }
}

console.log(`Elements that are more than 10 = ${moreThanTen}`);
console.log(`Elements that are less than 10 = ${lessThanTen}`);
console.log(`Elements that are 10 = ${areTen}`);




// Task 14 COMPLETE
const numbers1 = [ 5, 8, 13, 1, 2 ];
const numbers2 = [ 9, 3, 67, 1, 0 ];

console.log('1st array is =', numbers1);
console.log('2nd array is =', numbers2);

const numbers3 = []

for(let i = 0; i < numbers1.length; i++) {
    numbers3.push(Math.max(numbers1[i], numbers2[i]));
}
console.log('3rd array is =', numbers3);




// Task 15 
function firstDuplicate(arr) {
    const seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]] !== undefined) {
            return arr[i];
        } else {
            seen[arr[i]] = true;
        }
    }

    return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10])); 
console.log(firstDuplicate([5, '5', 3, 7, 4])); 
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3])); 
console.log(firstDuplicate(['foo', 'abc', '123', 'bar'])); 



// Task 16 
function getDuplicates(array) {
    let duplicates = [];
    let counts = {};

    
    for (let element of array) {
        if (counts[element]) {
            counts[element]++;
        } else {
            counts[element] = 1;
        }
    }

    for (let key in counts) {
        if (counts[key] > 1) {
            duplicates.push(Number(key) ? Number(key) : key); 
        }
    }

    let unique = new Set(array);
    for (let item of unique) {
        if (counts[item] === 1 && counts[typeof item === 'string' ? item.toLowerCase() : item] > 1) {
            duplicates.push(item);
        }
    }

    return duplicates;
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])); 
console.log(getDuplicates([1, 2, 5, 0, 7])); 
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo'])); 
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a'])); 




// Task 17 
function reverseStringWords(str) {
    let words = str.trim().split(/\s+/);
    let result = '';
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let reversedWord = '';
  
      for (let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
      }
  
      result += reversedWord + ' ';
    }
  
    return result.trim();
}
  
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript")); 
console.log(reverseStringWords("Hello")); 
console.log(reverseStringWords("")); 
console.log(reverseStringWords("    ")); 




// Task 18 
function getEvens(num1, num2) {
    const evens = [];
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        }
    }

    return evens;
}

console.log(getEvens(2, 7));   
console.log(getEvens(17, 5)); 
console.log(getEvens(4, 4));   
console.log(getEvens(3, 3));   




// Task 19
function getMultipleOf5(num1, num2) {
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    const result = [];

    for (let i = end; i >= start; i--) {
        if (i % 5 === 0) {
            result.push(i);
        }
    }

    return result;
}

console.log(getMultipleOf5(3, 17));  
console.log(getMultipleOf5(23, 5));   
console.log(getMultipleOf5(5, 5));    
console.log(getMultipleOf5(2, 4));    




// Task 20 
function fizzBuzz(num1, num2) {
    let result = '';
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    
    for (let i = min; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';
        } else if (i % 3 === 0) {
            result += 'Fizz';
        } else if (i % 5 === 0) {
            result += 'Buzz';
        } else {
            result += i;
        }
        
        if (i !== max) {
            result += ' | ';
        }
    }
    
    return result;
}

console.log(fizzBuzz(13, 18)); 
console.log(fizzBuzz(12, 5));   
console.log(fizzBuzz(5, 5));  
console.log(fizzBuzz(9, 6));   