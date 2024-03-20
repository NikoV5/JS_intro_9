
// Task 1 

function countPos(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++
        }
    }
    return count;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])) 
console.log(countPos([0, -1, -2, -3]))





// Task 2 

function countA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

console.log(countA("TechGlobal is a QA bootcamp")); 
console.log(countA("QA stands for Quality Assurance")); 
console.log(countA("Cypress"));




// Task 3 

function countVowels(string) {
    let countVowel = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for(let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])) {
            countVowel++;
        }
    }
    return countVowel;
}

console.log(countVowels("Hello")); 
console.log(countVowels("Hello World")); 
console.log(countVowels("JavaScript is fun")); 
console.log(countVowels("")); 






// Task 4 

function countConsonants(stringWord) {
    let counterConsonants = 0;
    for (const letter of stringWord) {
        if ('aeoui'.includes(letter.toLowerCase()));
        else counterConsonants++;
    }
    return counterConsonants;
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));





// Task 5 

function countWords(str) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && !inWord) {
            count++; 
            inWord = true; 
        } else if (str[i] === ' ') {
            inWord = false; 
        }
    }
    return count;
}

console.log(countWords("     Javascript is fun       ")); 
console.log(countWords("Cypress is an UI automation tool.    "));  
console.log(countWords("1 2 3 4"));  






// Task 6 

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    else {
        return number * factorial(number - 1);
    }

}
console.log(factorial(5));  
console.log(factorial(4));  
console.log(factorial(0)); 
console.log(factorial(1));  





// Task 7 
     
function isPalindrome(stringWord) {
    let reversedStringWord = '';
    for (let i = stringWord.length - 1; i >= 0; i--) {
        reversedStringWord += stringWord[i]
    }
    return (stringWord.toLowerCase() === reversedStringWord.toLowerCase());
}
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));



// Task 8 

function countMultipleWords(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const trimmed = arr[i].trim();
        if (trimmed.includes(' ')) {
            count++;
        }
    }
    return count;
}
console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"])); 
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "])); 
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "])); 
console.log(countMultipleWords([])); 





// Task 9 

function count3OrLess(word) {
    if (word.trim() === "") {
        return 0;
    }

    const words = word.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length <= 3) {
            count++;
        }
    }
    return count;
}

console.log(count3OrLess("Hello")); 
console.log(count3OrLess("Hi John")); 
console.log(count3OrLess("JavaScript is fun")); 
console.log(count3OrLess("My name is John Doe")); 
console.log(count3OrLess("")); 



// Task 10 

function isPrime(num) {
    if (num < 2 || !Number.isInteger(num)) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}
console.log(isPrime(5));  
console.log(isPrime(2));   
console.log(isPrime(29));  
console.log(isPrime(-5));  
console.log(isPrime(0));   
console.log(isPrime(1));   





// Task 11 

function add(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        const sum = (arr1[i] || 0) + (arr2[i] || 0);
        result.push(sum);
    }

    return result;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); 
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); 





// Task 12

function removeExtraSpaces(word) {
    return word.split(' ').filter(str => str !== '').join(' ');
}

console.log(removeExtraSpaces("Hello")); 
console.log(removeExtraSpaces("      Hello    World     ")); 
console.log(removeExtraSpaces("     JavaScript is          fun")); 
console.log(removeExtraSpaces("")); 





// Task 13 

function findClosestTo10(numbers) {
    let closest = null;
    let minDifference = Infinity;

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        if (number === 10) continue;

        const difference = Math.abs(number - 10);

        if (difference < minDifference || (difference === minDifference && number < closest)) {
            closest = number;
            minDifference = difference;
        }
    }

    return closest;
}
console.log(findClosestTo10([10, -13, 5, 70, 15, 57])); 
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])); 
console.log(findClosestTo10([0, -1, -2])); 






// Task 14 

function isEmailValid(email) {
    if (email.trim() === '' || email.includes(' ')) {
        return false;
    }

    const parts = email.split('@');
    
    if (parts.length !== 2) {
        return false;
    }

    const localPart = parts[0];
    const domainPart = parts[1];

    if (localPart.length < 2 || domainPart.length < 2) {
        return false;
    }

    const domainParts = domainPart.split('.');

    if (domainParts.length !== 2) {
        return false;
    }

    if (domainParts.some(part => part.length < 2)) {
        return false;
    }

    return true;
}
console.log(isEmailValid("")); 
console.log(isEmailValid("@gmail.com")); 
console.log(isEmailValid("johndoe@yahoo")); 
console.log(isEmailValid("johndoe@.com")); 
console.log(isEmailValid("a@outlook.com")); 
console.log(isEmailValid("johndoe@a.com")); 
console.log(isEmailValid("johndoe@@gmail.com")); 
console.log(isEmailValid("johndoe@gmail.com")); 







// Task 15

function isPasswordValid(password) {
    if (password.length < 8 || password.length > 16) {
        return false;
    }

    let hasDigit = false;
    let hasUppercase = false;
    let hasLowercase = false;
    let hasSpecialChar = false;

    const specialChars = "!@#$%^&*()_+-=[]{};':\"\\|,.<>?/";

    for (let char of password) {
        if ('0' <= char && char <= '9') {
            hasDigit = true;
        } else if ('A' <= char && char <= 'Z') {
            hasUppercase = true;
        } else if ('a' <= char && char <= 'z') {
            hasLowercase = true;
        } else if (specialChars.includes(char)) {
            hasSpecialChar = true;
        }
    }

    if (!(hasDigit && hasUppercase && hasLowercase && hasSpecialChar)) {
        return false;
    }

    if (password.includes(" ")) {
        return false;
    }

    return true;
}
console.log(isPasswordValid("")); 
console.log(isPasswordValid("abcd")); 
console.log(isPasswordValid("abcd1234")); 
console.log(isPasswordValid("Abcd1234")); 
console.log(isPasswordValid("Chicago12345US!#$%")); 
console.log(isPasswordValid("Abcd1234$")); 
console.log(isPasswordValid("Chicago123$")); 
console.log(isPasswordValid("Test1234#")); 