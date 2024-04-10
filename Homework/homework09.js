

// Task 1 

function fizzBuzz1(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}

console.log(fizzBuzz1(0));    
console.log(fizzBuzz1(1));    
console.log(fizzBuzz1(3));    
console.log(fizzBuzz1(5));    
console.log(fizzBuzz1(30));   
console.log(fizzBuzz1(10));   
console.log(fizzBuzz1(15));   
console.log(fizzBuzz1(-15));  






// Task 2 

function fizzBuzz2(num) {
    var result = [];

    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            result.push('Fizz');
        }
        else if (i % 5 === 0) {
            result.push('Buzz');
        }
        else {
            result.push(i);
        }
    }

    return result;
}

console.log(fizzBuzz2(3));  
console.log(fizzBuzz2(5));  
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));  
console.log(fizzBuzz2(2));   







// Task 3 


function findSumNumbers(str) {
    let currentNumber = '';
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            currentNumber += str[i];
        } else {
            if (currentNumber !== '') {
                sum += parseInt(currentNumber);
                currentNumber = ''; 
            }
        }
    }

  
    if (currentNumber !== '') {
        sum += parseInt(currentNumber);
    }

    return sum;
}

console.log(findSumNumbers("abc$")); 
console.log(findSumNumbers("a1b4c 6#")); 
console.log(findSumNumbers("ab110c045d")); 
console.log(findSumNumbers("525")); 
console.log(findSumNumbers("3 for 10 dollars")); 







// Task 4 


function findBiggestNumber(str) {
    let currentNumber = ''; 
    let maxNumber = 0; 
    
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        
        if (!isNaN(parseInt(char))) {
            currentNumber += char;
        } else {
            if (currentNumber !== '') {
                maxNumber = Math.max(maxNumber, parseInt(currentNumber));
                currentNumber = ''; 
            }
        }
    }
    
    if (currentNumber !== '') {
        maxNumber = Math.max(maxNumber, parseInt(currentNumber));
    }
    
    return maxNumber;
}
console.log(findBiggestNumber("abc$")); 
console.log(findBiggestNumber("a1b4c 6#")); 
console.log(findBiggestNumber("ab110c045d")); 
console.log(findBiggestNumber("525")); 
console.log(findBiggestNumber("3 for 10 dollars")); 







// Task 5



function countOccurrencesOfCharacters(str) {
    if (str === "") return "";

    let counts = {};
    for (let char of str) {
        if (counts[char] === undefined) {
            counts[char] = 1;
        } else {
            counts[char]++;
        }
    }

    let result = "";
    for (let char in counts) {
        result += counts[char] + char;
    }

    return result;
}

console.log(countOccurrencesOfCharacters("")); 
console.log(countOccurrencesOfCharacters("abc")); 
console.log(countOccurrencesOfCharacters("abbcca")); 
console.log(countOccurrencesOfCharacters("aaAAa")); 
console.log(countOccurrencesOfCharacters("www")); 





// Task 6 


function fibonacciSeries1(n) {
    const series = [0, 1]; 

    for (let i = 2; i < n; i++) {
        const nextTerm = series[i - 1] + series[i - 2];
        series.push(nextTerm);
    }

    return series;
}

console.log(fibonacciSeries1(3)); 
console.log(fibonacciSeries1(5)); 
console.log(fibonacciSeries1(7)); 
console.log(fibonacciSeries1(8)); 
console.log(fibonacciSeries1(1)); 
console.log(fibonacciSeries1(2)); 





// Task 7 



function fibonacciSeries2(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    }

    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    for (let i = 3; i <= n; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return n2;
}

console.log(fibonacciSeries2(2)); 
console.log(fibonacciSeries2(4)); 
console.log(fibonacciSeries2(8)); 
console.log(fibonacciSeries2(9)); 
console.log(fibonacciSeries2(1)); 





// Task 8 



function findUniques(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const merged = new Set([...set1, ...set2]);

    return Array.from(merged);
}

console.log(findUniques([], [])); 
console.log(findUniques([], [1, 2, 3, 2])); 
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9])); 
console.log(findUniques([-1, -2], [1, 2])); 







// Task 9 


function isPowerOf3(num) {
    if (num < 1) return false;
    while (num % 3 === 0) {
        num /= 3;
    }
    return num === 1;
}

console.log(isPowerOf3(1));    
console.log(isPowerOf3(2));    
console.log(isPowerOf3(3));    
console.log(isPowerOf3(27));   
console.log(isPowerOf3(100));  
console.log(isPowerOf3(81));   
console.log(isPowerOf3(9));    
