
// Task 1 

function hasUpperCase(string) {
    for (let i = 0; i < string.length; i++) {
        if(string[i] !== string[i].toLowerCase())
        return true
    }
    return false
}
console.log(hasUpperCase("javascript")); 
console.log(hasUpperCase("John"));       
console.log(hasUpperCase("$125.0"));     
console.log(hasUpperCase(""));           





// Task 2 

function noDigit(string) {
    let result = '';
    for(let i = 0; i < string.length; i++) {
        if(string[i] >= '0' && string[i] <= '9') {
            continue;
        }
        result += string[i];
    }
    return result;
}
console.log(noDigit("")); 
console.log(noDigit("Javascript")); 
console.log(noDigit("123Hello")); 
console.log(noDigit("123Hello World149")); 
console.log(noDigit("123Tech456Global149"));



// Task 3 

function noVowel(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let result = ''
    for (let i = 0; i < string.length; i++) {
        if(!vowels.includes(string[i])) {
            result += string[i];
        }
    }
    return result;
}
console.log(noVowel("TechGlobal")); 
console.log(noVowel("AEOxyz"));   
console.log(noVowel("Javascript"));  
console.log(noVowel(""));      
console.log(noVowel("125$"));         



// Task 4 

function no13(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 13) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(no13([1, 2, 3, 4])); 
console.log(no13([13, 2, 3])); 
console.log(no13([13, 13, 13, 13, 13])); 
console.log(no13([])); 



// Task 5 

function middleInt(num1, num2, num3) {
    let nums = [num1, num2, num3];
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    return nums[1];
}
console.log(middleInt(1, 2, 2));   
console.log(middleInt(5, 5, 8));   
console.log(middleInt(5, 3, 5));  
console.log(middleInt(1, 1, 1));  
console.log(middleInt(-1, 25, 10)); 



// Task 6

function sumOfDigits(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            sum += parseInt(str[i]);
        }
    }
    return sum;
}
console.log(sumOfDigits("Javascript")); 
console.log(sumOfDigits("John's age is 29")); 
console.log(sumOfDigits("$125.0")); 
console.log(sumOfDigits("")); 




// Task 7 

function arrFactorial(arr) {
    function factorial(num) {
        if (num === 0 || num === 1)
            return 1;
        for (var i = num - 1; i >= 1; i--) {
            num *= i;
        }
        return num;
    }

    return arr.map(function(num) {
        return factorial(num);
    });
}
console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));       
console.log(arrFactorial([5, 0, 6]));   
console.log(arrFactorial([]));           



// Task 8 

function categorizeCharacters(word) {
    let letters = '';
    let digits = '';
    let specials = '';

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (/[a-zA-Z]/.test(char)) {
            letters += char;
        } else if (/\d/.test(char)) {
            digits += char;
        } else {
            specials += char;
        }
    }

    return [letters, digits, specials];
}
console.log(categorizeCharacters("1234"));   
console.log(categorizeCharacters("abc123$#%"));  
console.log(categorizeCharacters("12ab$%3c%")); 